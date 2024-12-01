import Breadcrumbs from "@/Components/Breadcrumbs";
import ContactForm from "@/Components/ContactForm";
import EstateDetails from "@/Components/EstateDetails";
import ImageCarousel from "@/Components/ImageCarousel";
import MapWrapper from "@/Components/MapWrapper";
import AppLayout from "@/Layouts/AppLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import "leaflet/dist/leaflet.css";

const EstateView = ({
    estate,
    locale,
}: PageProps<{ estate: TEstate; locale: string }>) => {
    const { t } = useTranslation();
    return (
        <AppLayout>
            <Head>
                <title>{estate?.name}</title>
                <meta
                    name="description"
                    content={estate.description.replace(/<\/?[^>]+(>|$)/g, "")}
                />
                <meta
                    name="keywords"
                    content={`${estate.estateType?.name}, ${estate?.area?.name}, ${estate?.area?.city?.name}, ${estate?.area?.city?.county?.name}`}
                />
                <meta property="og:title" content={t("meta.homepage.title")} />
                <meta
                    property="og:description"
                    content={estate.description.replace(/<\/?[^>]+(>|$)/g, "")}
                />
                <link rel="apple-touch-icon" href="/apple-icon.png" />
                <meta
                    property="og:image"
                    content={estate.images?.[0]?.sources?.og}
                />

                <meta
                    property="og:url"
                    content={`https://luxvilla.hr/${locale}/${estate.estateId}`}
                />
                <meta property="og:type" content="website" />
            </Head>
            <div className="pt-32 sm:px-20 px-8">
                <h1 className="text-center text-5xl">{estate.name}</h1>
                {estate.sold && (
                    <div className="bg-red-600 flex items-center justify-center text-4xl text-white w-full h-32 rounded-md">
                        SOLD
                    </div>
                )}
                <div className="my-6">
                    <Breadcrumbs
                        items={[
                            {
                                url: route("estates.list", {
                                    typeSlug: estate.estateType?.slug,
                                    locale: locale,
                                }),
                                label: estate.estateType?.name,
                            },
                            {
                                url: route("estates.list", {
                                    typeSlug: estate.estateType?.slug,
                                    countySlug: estate.area.city.county?.slug,
                                    locale: locale,
                                }),
                                label: estate.area.city.county?.name,
                            },
                            {
                                url: route("estates.list", {
                                    typeSlug: estate.estateType?.slug,
                                    countySlug: estate.area.city.county?.slug,
                                    citySlug: estate.area.city?.slug,
                                    locale: locale,
                                }),
                                label: estate.area.city?.name,
                            },
                            {
                                url: route("estates.list", {
                                    typeSlug: estate.estateType?.slug,
                                    countySlug: estate.area.city.county?.slug,
                                    citySlug: estate.area.city?.slug,
                                    areaSlug: estate.area?.slug,
                                    locale: locale,
                                }),
                                label: estate.area.name,
                            },
                            {
                                url: route("estates.show", {
                                    estateId: estate.estateId,
                                    locale: locale,
                                }),
                                label: estate.estateId,
                            },
                        ]}
                    />
                </div>
                <div className="flex flex-row  w-full flex-wrap relative">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-1">
                        {estate.images.length > 0 && (
                            <ImageCarousel estate={estate} />
                        )}
                        <div className="sm:hidden flex flex-row flex-wrap -mt-2 mb-4 ">
                            <p
                                aria-label={t("estateCard.price")}
                                className="text-5xl w-full"
                            >
                                <span className="text-gold font-semibold mr-3">
                                    €
                                </span>
                                {estate.price
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                            <div className="my-2">
                                {t("estateCard.vat1")}
                                <br />
                                <span className="font-semibold">
                                    3% + {t("estateCard.vat")}{" "}
                                </span>
                                {t("estateCard.vat2")}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-2">
                            <EstateDetails estate={estate} />
                            <ContactForm estate={estate} />
                        </div>
                        <div className="hidden  sm:flex flex-row flex-wrap">
                            <p
                                aria-label={t("estateCard.price")}
                                className="text-5xl w-full"
                            >
                                <span className="text-gold font-semibold mr-3">
                                    €
                                </span>
                                {estate.price
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </p>
                            <div className="my-2">
                                {t("estateCard.vat1")}
                                <br />
                                <span className="font-semibold">
                                    3% + {t("estateCard.vat")}{" "}
                                </span>
                                {t("estateCard.vat2")}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-3xl mb-4">
                        {t("estateCard.features")}
                    </h2>
                    <ul className="flex items-start justify-start flex-wrap gap-y-12 pb-6">
                        {Object.keys(estate.hashtags)?.map((g) => (
                            <li key={g} className="w-1/2 sm:w-1/3">
                                <div
                                    key={g}
                                    className="flex items-center text-lg font-semibold flex-row"
                                >
                                    <p>{g}</p>
                                </div>
                                <ul className="pt-2">
                                    {estate.hashtags[g].map((f) => (
                                        <li
                                            key={f.id + g}
                                            className="flex items-center ml-2"
                                        >
                                            <p>{f.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="py-4">
                    <h2 className="font-semibold text-3xl mb-4">
                        {t("description")}
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{ __html: estate.description }}
                    />
                </div>
                {estate?.video?.url && (
                    <video
                        controls
                        src={estate.video?.url ?? ""}
                        autoPlay={false}
                    />
                )}
                <MapWrapper estate={estate} />
            </div>
        </AppLayout>
    );
};

export default EstateView;
