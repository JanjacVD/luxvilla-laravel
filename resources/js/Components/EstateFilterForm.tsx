import Combobox from "./Combobox";
import { Link } from "@inertiajs/react";
import useLocationFilter from "@/hooks/useLocationFilter";
import { useTranslation } from "react-i18next";

const EstateFilterForm = () => {
    const { t } = useTranslation();
    const {
        location,
        types,
        selectedCounty,
        selectedCity,
        selectedArea,
        selectedType,
        listLink,
        setSelectedType,
        handleChangeCounty,
        handleChangeCity,
        handleChangeArea,
        renderTypeLabel,
        renderCountyLabel,
        renderCityLabel,
        renderAreaLabel,
    } = useLocationFilter();

    return (
        <form className="place-items-center bg-opacity sm:w-1/2 w-full mx-auto mt-[10%] items-center  py-10  rounded-md grid xl:grid-cols-2 md:grid-cols-1 gap-4 4xl:grid-cols-4 p-9">
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
            <Link
                className="transition ease-in-out px-4 w-full h-9 rounded-md bg-yellow-600 hover:bg-yellow-500 flex items-center justify-center duration-300 4xl:col-span-4 xl:col-span-2"
                href={listLink}
            >
                {t("estateFilter.search")}
            </Link>
        </form>
    );
};

export default EstateFilterForm;
