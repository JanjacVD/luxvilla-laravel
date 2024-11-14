// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }));
// }
// export const generateMetadata = async (
//   props: Readonly<{
//     params: Promise<{ lang: TLocale }>;
//   }>
// ): Promise<Metadata> => {
//   const params = await props.params;
//   const dict = await getDictionary(params.lang);
//   return {
//     title: dict.meta.homepage.title,
//     description: dict.meta.homepage.desc,
//     keywords: [...dict.keywords.homepage],
//     openGraph: {
//       title: dict.meta.homepage.title,
//       description: `${dict.meta.homepage.ogDesc} `,
//       images: "https://luxvilla.hr/og-image.jpg",
//       url: "https://luxvilla.hr",
//       type: "website",
//     },
//   };
// };

import EstateCarousel from "@/Components/EstateCarousel";
import EstateFilterForm from "@/Components/EstateFilterForm";
import AppLayout from "@/Layouts/AppLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

const Home = ({
    featured,
    newest,
}: PageProps<{
    featured: TEstate[];
    newest: TEstate[];
}>) => {
    const { t } = useTranslation();
    return (
        <AppLayout>
            <Head>
                <title>{t("meta.homepage.title")}</title>
                <meta name="description" content={t("meta.homepage.desc")} />
                <meta name="keywords" content={t("keywords.homepage")} />
                <meta property="og:title" content={t("meta.homepage.title")} />
                <meta
                    property="og:description"
                    content={`${t("meta.homepage.ogDesc")}`}
                />
                <link rel="apple-touch-icon" href="/apple-icon.png" />
                <meta property="og:image" content="/logo.png" />
                <meta property="og:url" content="https://luxvilla.hr" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="relative flex min-h-screen p-4 pb-20 gap-16 sm:p-20">
                <div className="relative z-10 sm:p-10 w-full h-full">
                    {/* Introduction Section */}
                    <section
                        className="flex flex-col min-h-[100svh] sm:mt-0 mt-8"
                        aria-labelledby="introduction-heading"
                    >
                        <h1
                            id="introduction-heading"
                            className="sm:text-7xl text-5xl mb-4 mt-16"
                        >
                            Lux Villa
                        </h1>
                        <p className="sm:text-xl text-md">
                            {t("heroDescription")}
                        </p>
                        <EstateFilterForm />
                    </section>

                    {/* Featured Estates Section */}
                    {!!featured.length && (
                        <section
                            className="flex flex-col min-h-[60svh]"
                            aria-labelledby="featured-heading"
                        >
                            <h2
                                id="featured-heading"
                                className="text-4xl sm:text-5xl mb-4 text-right"
                            >
                                {t("featured")}
                            </h2>
                            <EstateCarousel realEstates={featured} />
                        </section>
                    )}

                    {/* New Estates Section */}
                    {!!newest.length && (
                        <section
                            className="flex flex-col"
                            aria-labelledby="new-estates-heading"
                        >
                            <h2
                                id="new-estates-heading"
                                className="text-4xl sm:text-5xl mb-4 text-left"
                            >
                                {t("new")}
                            </h2>
                            <EstateCarousel dir="rtl" realEstates={newest} />
                        </section>
                    )}
                </div>

                {/* Background Image with Improved Alt Text */}

                <img
                    src={"storage/houseDesktop.webp"}
                    alt="House image for background"
                    draggable={false}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="w-[100svw] object-cover h-[100svh] absolute top-0 left-0 z-0 select-none"
                    srcSet="storage/houseMobile.webp 600w, storage/houseDesktop.webp 1200w"
                    sizes="(max-width: 600px) 100vw, 1200px"
                />
            </div>
        </AppLayout>
    );
};

export default Home;
