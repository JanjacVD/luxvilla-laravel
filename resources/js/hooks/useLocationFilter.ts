import { PageProps } from "@/types";
import getParamsFromUrl from "@/utils/getParamsFromUrl";
import { usePage } from "@inertiajs/react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const useLocationFilter = () => {
    const page = usePage<
        PageProps<{
            location: TCountyTranslated<TMinEstate>[];
            types: TEstateTypeTranslated[];
            hashtags: TFeatureGroup[];
            params?: {
                typeSlug?: string;
                countySlug?: string;
                citySlug?: string;
                areaSlug?: string;
            };
            query?: {
                maxArea?: string;
                maxPrice?: string;
                minArea?: string;
                minPrice?: string;
                hashtags?: string[];
                sortBy: "price" | "date";
                sortOrder: "asc" | "desc";
            };
        }>
    >();
    const { location, types, hashtags, locale, params, query } = page.props;
    const [selectedCounty, setSelectedCounty] = useState<
        TCountyTranslated<TMinEstate> | undefined
    >(location.find((c) => c.slug === params?.countySlug));
    const [selectedCity, setSelectedCity] = useState<
        TCity<TMinEstate> | undefined
    >(selectedCounty?.cities.find((c) => c.slug === params?.citySlug));
    const [selectedArea, setSelectedArea] = useState<
        TArea<TMinEstate> | undefined
    >(selectedCity?.areas.find((a) => a.slug === params?.areaSlug));
    const [selectedType, setSelectedType] = useState<string | undefined>(
        types.find((t) => t.slug === params?.typeSlug)?.id.toString()
    );

    const [selectedHashtags, setSelectedHashtags] = useState<string[]>(
        query?.hashtags ?? []
    );

    const handleChangeCounty = (val: string) => {
        setSelectedCounty(location.find((c) => String(c.id) === val));
        setSelectedCity(undefined);
        setSelectedArea(undefined);
    };

    const handleChangeCity = (val: string) => {
        setSelectedCity(
            selectedCounty?.cities?.find((c) => c.id === Number(val))
        );
        setSelectedArea(undefined);
    };

    const handleChangeArea = (val: string) => {
        setSelectedArea(selectedCity?.areas?.find((c) => c.id === Number(val)));
    };

    const handleFeature = (feat: string) => {
        setSelectedHashtags((prev) =>
            prev.includes(feat)
                ? prev.filter((f) => f !== feat)
                : [...prev, feat]
        );
    };

    const renderTypeLabel = (val?: { label: string; value: string }) => {
        if (!val) return undefined;
        const getCount = () => {
            if (!selectedCounty && !selectedCity && !selectedArea) {
                return location.flatMap((c) =>
                    c.cities.flatMap((city) =>
                        city.areas.flatMap((area) =>
                            area?.estates?.filter(
                                (estate) =>
                                    estate.estateTypeId === Number(val?.value)
                            )
                        )
                    )
                ).length;
            } else if (selectedCounty && !selectedCity && !selectedArea) {
                return selectedCounty?.cities.flatMap((city) =>
                    city.areas.flatMap((area) =>
                        area?.estates?.filter(
                            (estate) =>
                                estate.estateTypeId === Number(val?.value)
                        )
                    )
                ).length;
            } else if (selectedCounty && selectedCity && !selectedArea) {
                return selectedCity.areas.flatMap((area) =>
                    area.estates?.filter(
                        (estate) => estate.estateTypeId === Number(val.value)
                    )
                ).length;
            } else if (selectedCounty && selectedCity && selectedArea) {
                return selectedArea.estates?.filter(
                    (estate) => estate.estateTypeId === Number(selectedType)
                ).length;
            } else return "";
        };
        return `${val.label} (${getCount()})`;
    };

    const renderCountyLabel = (val?: { label: string; value: string }) => {
        if (!val) return undefined;
        const c = location.find((county) => county.id === Number(val?.value));
        const allEstates = c?.cities.flatMap((city) =>
            city.areas.flatMap((area) =>
                area.estates
                    ?.filter((estate) => {
                        if (selectedType) {
                            return String(estate.estateTypeId) === selectedType;
                        }
                        return estate;
                    })
                    .flatMap((estate) => estate)
            )
        ).length;
        return `${val?.label} (${allEstates})`;
    };

    const renderCityLabel = (val?: { label: string; value: string }) => {
        if (!val) return undefined;
        const allEstates = selectedCounty?.cities
            .find((city) => city.id === Number(val.value))
            ?.areas.flatMap((area) =>
                area.estates
                    ?.filter((estate) => {
                        if (selectedType) {
                            return String(estate.estateTypeId) === selectedType;
                        }
                        return estate;
                    })
                    .flatMap((estate) => estate)
            ).length;

        return `${val?.label} (${allEstates})`;
    };

    const renderAreaLabel = (val?: { label: string; value: string }) => {
        if (!val) return undefined;
        const allEstates = selectedCity?.areas
            ?.find((area) => area.id === Number(val.value))
            ?.estates?.filter((estate) => {
                if (selectedType) {
                    return estate.estateTypeId === Number(selectedType);
                }
                return estate;
            }).length;

        return `${val?.label} (${allEstates})`;
    };

    const listLink = useMemo(() => {
        const type = selectedType
            ? types.find((type) => type.id === Number(selectedType))
            : undefined;
        return route("estates.list", {
            typeSlug: type?.slug ?? "all",
            countySlug: selectedCounty?.slug,
            citySlug: selectedCity?.slug,
            areaSlug: selectedArea?.slug,
            locale: locale,
        });
    }, [selectedArea, selectedCity, selectedCounty, selectedType]);

    const [price, setPrice] = useState<TRange | undefined>({
        from: Number(query?.minPrice),
        to: Number(query?.maxPrice),
    });
    const [area, setArea] = useState<TRange | undefined>({
        from: Number(query?.minArea),
        to: Number(query?.maxArea),
    });

    const [sort, setSort] = useState<
        | {
              field: "date" | "price";
              dir: "asc" | "desc";
          }
        | undefined
    >(
        query?.sortBy && query.sortOrder
            ? {
                  dir: query.sortOrder,
                  field: query.sortBy,
              }
            : undefined
    );

    const handleSort = (val: string) => {
        const input = val.split("_") as ["date" | "price", "asc" | "desc"];
        setSort({ field: input[0], dir: input[1] });
    };
    const [isCollapsed, setIsCollapsed] = useState(false);

    const sortValue = sort ? `${sort.field}_${sort.dir}` : undefined;

    const handleClearFeatures = () => {
        setSelectedHashtags([]);
    };

    const renderSearchCount = () => {
        let estates: TMinEstate[] = [];
        if (!selectedCounty && !selectedCity && !selectedArea) {
            estates =
                location.flatMap((c) =>
                    (c?.cities ?? [])?.flatMap((city) =>
                        (city.areas ?? []).flatMap(
                            (area) => area?.estates ?? []
                        )
                    )
                ) ?? [];
        } else if (selectedCounty && !selectedCity && !selectedArea) {
            estates = selectedCounty?.cities.flatMap((city) =>
                city.areas.flatMap((area) => area?.estates ?? [])
            );
        } else if (selectedCounty && selectedCity && !selectedArea) {
            estates = selectedCity.areas.flatMap((area) => area.estates ?? []);
        } else if (selectedCounty && selectedCity && selectedArea) {
            estates = selectedArea.estates ?? [];
        }
        if (selectedType) {
            estates = estates.filter(
                (estate) => estate.estateTypeId === Number(selectedType)
            );
        }
        estates = estates.filter((estate) => {
            let shouldReturn = true;
            if (shouldReturn && price?.from) {
                shouldReturn = estate.price >= price.from;
            }
            if (shouldReturn && price?.to) {
                shouldReturn = estate.price <= price.to;
            }
            if (shouldReturn && area?.from) {
                shouldReturn = estate.areaSize >= area.from;
            }
            if (shouldReturn && area?.to) {
                shouldReturn = estate.areaSize <= area.to;
            }
            if (shouldReturn && selectedHashtags.length > 0) {
                shouldReturn = selectedHashtags.every((hash) =>
                    estate.hashtags.includes(Number(hash))
                );
            }
            return shouldReturn;
        });

        return estates.length;
    };

    const urlParams = useMemo(() => {
        const query: Record<string, string | number | string[]> = {};
        if (price?.from) {
            query["minPrice"] = price.from;
        }
        if (price?.to) {
            query["maxPrice"] = price.to;
        }
        if (area?.from) {
            query["minArea"] = area.from;
        }
        if (area?.to) {
            query["maxArea"] = area.to;
        }
        if (selectedHashtags.length > 0) {
            query["hashtags"] = selectedHashtags;
        }
        if (sort) {
            query["sortBy"] = sort.field;
            query["sortOrder"] = sort.dir;
        }
        return query;
    }, [price, area, selectedHashtags, sort]);

    const resetFilter: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setSelectedType(undefined);
        setSelectedCounty(undefined);
        setSelectedCity(undefined);
        setSelectedArea(undefined);
        setPrice(undefined);
        setArea(undefined);
        setSort(undefined);
        handleClearFeatures();
    };

    return {
        location,
        types,
        selectedCounty,
        selectedCity,
        selectedArea,
        selectedType,
        listLink,
        price,
        area,
        hashtags,
        isCollapsed,
        sortValue,
        sort,
        selectedHashtags,
        urlParams,
        setSelectedHashtags,
        resetFilter,
        handleFeature,
        handleSort,
        setArea,
        setIsCollapsed,
        setPrice,
        setSelectedType,
        handleChangeCounty,
        handleChangeCity,
        handleChangeArea,
        renderSearchCount,
        renderTypeLabel,
        renderCountyLabel,
        renderCityLabel,
        renderAreaLabel,
        handleClearFeatures,
    };
};

export default useLocationFilter;
