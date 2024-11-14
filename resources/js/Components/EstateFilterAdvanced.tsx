"use client";

import { ChevronDown, CrossIcon } from "lucide-react";
import { useMemo, useState } from "react";
import Combobox from "./Combobox";
import { useTranslation } from "react-i18next";
import useLocationFilter from "@/hooks/useLocationFilter";
import { cn } from "@/lib/utils";
import InputLabel from "./InputLabel";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Cross1Icon } from "@radix-ui/react-icons";
import DropdownMultiselect from "./DropdownMultiselect";
import { Link } from "@inertiajs/react";
const EstateFilterAdvanced = ({}) => {
    const { t } = useTranslation();
    const {
        location,
        types,
        selectedCounty,
        selectedCity,
        selectedArea,
        selectedType,
        listLink,
        hashtags,
        sortValue,
        area,
        isCollapsed,
        price,
        urlParams,
        selectedHashtags,
        handleClearFeatures,
        resetFilter,
        setArea,
        handleFeature,
        handleSort,
        setIsCollapsed,
        setPrice,
        setSelectedType,
        handleChangeCounty,
        handleChangeCity,
        renderSearchCount,
        handleChangeArea,
        renderTypeLabel,
        renderCountyLabel,
        renderCityLabel,
        renderAreaLabel,
    } = useLocationFilter();

    const count = useMemo(
        () => renderSearchCount(),
        [
            selectedArea,
            selectedCity,
            selectedCounty,
            selectedHashtags,
            hashtags,
            price,
            area,
        ]
    );

    return (
        <div className="w-full mx-auto sm:mt-0 mt-24">
            <button
                onClick={() => setIsCollapsed((prev) => !prev)}
                className="flex items-center justify-between w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
            >
                <span className="text-xl" aria-label="ToggleFilter">
                    Filter
                </span>
                <ChevronDown
                    className={cn(
                        "transition-all",
                        isCollapsed && "rotate-180"
                    )}
                    width={20}
                    height={20}
                />
            </button>
            <form
                aria-label="Filters"
                aria-hidden={isCollapsed}
                className={cn(
                    "transition-all  place-items-center bg-opacity w-full mx-auto items-center  py-10  rounded-md grid xl:grid-cols-2 md:grid-cols-1 gap-4 4xl:grid-cols-4 p-9",
                    isCollapsed &&
                        "h-0 !mt-0 overflow-hidden bg-red-50 opacity-0 p-0 "
                )}
            >
                <Combobox
                    value={selectedType}
                    options={
                        types.map((type) => ({
                            label: type.name,
                            value: String(type.id),
                        })) ?? []
                    }
                    placeholder={t("estateFilter.type")}
                    setValue={setSelectedType}
                    renderLabel={(val) => renderTypeLabel(val)}
                />
                <Combobox
                    value={String(selectedCounty?.id)}
                    options={
                        location.map((c) => ({
                            label: c.name,
                            value: String(c.id),
                        })) ?? []
                    }
                    placeholder={t("estateFilter.county")}
                    setValue={handleChangeCounty}
                    renderLabel={(val) => renderCountyLabel(val)}
                />
                <Combobox
                    value={String(selectedCity?.id)}
                    options={
                        selectedCounty?.cities.map((c) => ({
                            label: c.name,
                            value: String(c.id),
                        })) ?? []
                    }
                    placeholder={t("estateFilter.city")}
                    setValue={handleChangeCity}
                    disabled={!selectedCounty}
                    renderLabel={(val) => renderCityLabel(val)}
                />
                <Combobox
                    value={String(selectedArea?.id)}
                    options={
                        selectedCity?.areas.map((c) => ({
                            label: c.name,
                            value: String(c.id),
                        })) ?? []
                    }
                    placeholder={t("estateFilter.area")}
                    setValue={handleChangeArea}
                    disabled={!selectedCounty || !selectedCity}
                    renderLabel={(val) => renderAreaLabel(val)}
                />
                <div className="flex flex-col  text-white w-full">
                    <span className="col-span-2 text-xl pr-4" id="Square">
                        {t("estateFilter.square")}
                    </span>
                    <div className="flex flex-row w-full gap-x-4">
                        <div
                            className="flex flex-col w-1/2"
                            aria-labelledby="Square"
                        >
                            <InputLabel
                                htmlFor="minArea"
                                className="text-base"
                                aria-label={t("estateFilter.from")}
                            >
                                {t("estateFilter.from")}
                                <div className="relative">
                                    <Input
                                        className="text-black"
                                        name="minArea"
                                        value={String(area?.from ?? "")}
                                        onChange={(e) =>
                                            setArea((prev) => ({
                                                ...(prev ?? {}),
                                                from:
                                                    Number(e.target.value) >= 0
                                                        ? Number(e.target.value)
                                                        : 0,
                                            }))
                                        }
                                    />
                                    <Button
                                        variant={"ghost"}
                                        size={"icon"}
                                        className="absolute top-0 right-1"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setArea((prev) => ({
                                                ...(prev ?? {}),
                                                from: undefined,
                                            }));
                                        }}
                                    >
                                        <Cross1Icon />
                                    </Button>
                                </div>
                            </InputLabel>
                        </div>
                        <div
                            className="flex flex-col w-1/2 ml-auto"
                            aria-labelledby="Square"
                        >
                            <InputLabel
                                className="text-base"
                                htmlFor="maxArea"
                                aria-label={t("estateFilter.to")}
                            >
                                {t("estateFilter.to")}
                                <div className="relative">
                                    <Input
                                        className="text-black"
                                        name="maxArea"
                                        value={String(area?.to ?? "")}
                                        onChange={(e) =>
                                            setArea((prev) => ({
                                                ...(prev ?? {}),
                                                to:
                                                    Number(e.target.value) >= 0
                                                        ? Number(e.target.value)
                                                        : undefined,
                                            }))
                                        }
                                    />
                                    <Button
                                        variant={"ghost"}
                                        size={"icon"}
                                        className="absolute top-0 right-1"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setArea((prev) => ({
                                                ...(prev ?? {}),
                                                to: undefined,
                                            }));
                                        }}
                                    >
                                        <Cross1Icon />
                                    </Button>
                                </div>
                            </InputLabel>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col  text-white w-full">
                    <span className="col-span-2 text-xl pr-4" id="price">
                        {t("estateFilter.price")}
                    </span>
                    <div
                        className="flex flex-row w-full  gap-x-4"
                        aria-labelledby="price"
                    >
                        <div className="flex flex-col w-1/2">
                            <InputLabel
                                htmlFor="minPrice"
                                className="text-base"
                            >
                                {t("estateFilter.from")}
                                <div className="relative">
                                    <Input
                                        className="text-black"
                                        name="minPrice"
                                        value={String(price?.from ?? "")}
                                        onChange={(e) =>
                                            setPrice((prev) => ({
                                                ...(prev ?? {}),
                                                from:
                                                    Number(e.target.value) >= 0
                                                        ? Number(e.target.value)
                                                        : 0,
                                            }))
                                        }
                                    />
                                    <Button
                                        variant={"ghost"}
                                        size={"icon"}
                                        className="absolute top-0 right-1"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setPrice((prev) => ({
                                                ...(prev ?? {}),
                                                from: undefined,
                                            }));
                                        }}
                                    >
                                        <Cross1Icon />
                                    </Button>
                                </div>
                            </InputLabel>
                        </div>
                        <div
                            className="flex flex-col w-1/2 ml-auto"
                            aria-labelledby="price"
                        >
                            <InputLabel
                                className="text-base"
                                htmlFor="maxPrice"
                            >
                                {t("estateFilter.to")}
                                <div className="relative">
                                    <Input
                                        className="text-black"
                                        name="maxPrice"
                                        value={String(price?.to ?? "")}
                                        onChange={(e) =>
                                            setPrice((prev) => ({
                                                ...(prev ?? {}),
                                                to:
                                                    Number(e.target.value) >= 0
                                                        ? Number(e.target.value)
                                                        : undefined,
                                            }))
                                        }
                                    />
                                    <Button
                                        variant={"ghost"}
                                        size={"icon"}
                                        className="absolute top-0 right-1"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setPrice((prev) => ({
                                                ...(prev ?? {}),
                                                to: undefined,
                                            }));
                                        }}
                                    >
                                        <Cross1Icon />
                                    </Button>
                                </div>
                            </InputLabel>
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-end h-full gap-x-4">
                    <div>
                        <span className="col-span-2 text-xl pr-4">
                            {t("estateFilter.additional")}
                        </span>
                        <DropdownMultiselect
                            options={hashtags}
                            values={selectedHashtags}
                            handleValueClick={handleFeature}
                            handleClear={handleClearFeatures}
                        />
                    </div>
                    <div>
                        <span className="col-span-2 text-xl pr-4">
                            {t("sort.sort")}
                        </span>
                        <Combobox
                            value={sortValue}
                            options={[
                                {
                                    label: t("sort.priceAsc"),
                                    value: "price_asc",
                                },
                                {
                                    label: t("sort.priceDesc"),
                                    value: "price_desc",
                                },
                                {
                                    label: t("sort.dateDesc"),
                                    value: "date_desc",
                                },
                                { label: t("sort.dateAsc"), value: "date_asc" },
                            ]}
                            placeholder={t("sort.sort")}
                            setValue={handleSort}
                        />
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-end h-full gap-x-4 gap-y-4">
                    <Link
                        aria-label="Reset"
                        className="transition ease-in-out px-4 w-full h-9 rounded-md bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center duration-300 mb-[1px] text-black"
                        href={listLink}
                        data={urlParams}
                    >
                        {`${t("estateFilter.search")} (${count})`}
                    </Link>
                    <Button
                        aria-label="Reset"
                        className="transition ease-in-out px-4 w-full h-9 rounded-md bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center duration-300 mb-[1px] text-black"
                        onClick={resetFilter}
                    >
                        Reset
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EstateFilterAdvanced;
