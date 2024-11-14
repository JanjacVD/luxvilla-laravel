import Breadcrumbs from "@/Components/Breadcrumbs";
import EstateFilterAdvanced from "@/Components/EstateFilterAdvanced";
import FilteredEstateList from "@/Components/FilteredEstateList";
import AppLayout from "@/Layouts/AppLayout";
import { PageProps } from "@/types";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

type TProps = {
    location: TCountyTranslated<TMinEstate>[];
    params: {
        typeSlug?: string;
        countySlug?: string;
        citySlug?: string;
        areaSlug?: string;
    };
    types: TEstateType[];
    locale: string;
};

const EstateList = ({ types, params, locale, location }: PageProps<TProps>) => {
    const { t } = useTranslation();
    const type = useMemo(
        () =>
            types.find((t) => t.slug === params.typeSlug) ?? {
                slug: "all",
                name: t("allEstates"),
            },
        [params]
    );

    const breadcrumbs = useMemo(() => {
        const { areaSlug, citySlug, countySlug } = params;
        const county = location.find((c) => c.slug === countySlug);
        const city = county?.cities.find((c) => c.slug === citySlug);
        const area = city?.areas.find((a) => a.slug === areaSlug);
        const paramArr = [type, county, city, area];

        const breadcrumbs: TBreadcrumb[] = paramArr.reduce<TBreadcrumb[]>(
            (acc, item, index) => {
                if (item?.name) {
                    const query = {
                        typeSlug: paramArr[0]?.slug,
                        countySlug: index >= 1 ? paramArr[1]?.slug : undefined,
                        citySlug: index >= 2 ? paramArr[2]?.slug : undefined,
                        areaSlug: index >= 3 ? paramArr[3]?.slug : undefined,
                        locale,
                    };

                    acc.push({
                        label: item.name,
                        url: route("estates.list", query),
                    });
                }
                return acc;
            },
            []
        );
        return breadcrumbs;
    }, [params, location, type]);

    return (
        <AppLayout>
            <div className="relative flex min-h-screen p-4 pb-20 gap-16 sm:p-20">
                <div className="relative z-10 sm:p-10 w-full h-full">
                    <section
                        className="flex flex-col min-h-[100svh] "
                        aria-label={t("salesIn")}
                    >
                        <EstateFilterAdvanced />
                        <Breadcrumbs items={breadcrumbs} />
                        <h1 className="sm:text-7xl text-5xl mb-4 mt-16">
                            {type?.name}
                        </h1>

                        <FilteredEstateList />
                    </section>
                </div>
            </div>
        </AppLayout>
    );
};

export default EstateList;
