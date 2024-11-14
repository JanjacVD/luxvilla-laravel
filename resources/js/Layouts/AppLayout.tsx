import "react-toastify/dist/ReactToastify.css";
import LogoSvg from "@/assets/logo.svg";
import { useTranslation } from "react-i18next";
import { Link, usePage } from "@inertiajs/react";
import LangButtons from "@/Components/LangButtons";
import { MenuIcon } from "lucide-react";
import Footer from "@/Components/Footer";
import i18n from "@/i18n";
import { useEffect } from "react";

// const ibmPlex = IBM_Plex_Serif({
//     subsets: ["latin"],
//     weight: ["600", "700", "400"],
// });

// const montserrat = Montserrat({
//     subsets: ["latin"],
//     weight: "600",
// });

const AppLayout = ({ children }: React.PropsWithChildren) => {
    const { t } = useTranslation();
    const { locale } = usePage().props;

    useEffect(() => {
        // Change language based on Inertia's locale prop
        i18n.changeLanguage(locale as string);
    }, [locale]);
    const types = usePage().props.types as { name: string; slug: string }[];
    return (
        <div className="bg-stone-100">
            <header>
                <nav
                    className={`w-full flex items-center justify-between py-7 px-12 z-50 fixed top-0 left-0 bg-theme text-gold`}
                >
                    <Link href="/" className="z-20" aria-label={t("goToHome")}>
                        <img
                            src={LogoSvg}
                            className="max-h-10"
                            width={100}
                            height={100}
                            alt="Logo"
                        />
                    </Link>
                    <ul
                        className="sm:flex items-center justify-evenly min-w-[30%] z-10 hidden gap-x-8"
                        aria-label={t("estateFilter.typeDefault")}
                    >
                        {types?.map((type) => (
                            <li key={type.slug}>
                                <Link
                                    aria-label={`${t("salesIn")} ${type.name}`}
                                    href={`/estates/${type.slug}`}
                                >
                                    {type.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="sm:flex hidden z-10">
                        <LangButtons />
                    </div>
                    <div className="flex items-center justify-center sm:hidden z-10 relative">
                        <input
                            type="checkbox"
                            className="hidden"
                            id="menu-toggle"
                        />
                        <label
                            htmlFor="menu-toggle"
                            className="hamburger-label z-10"
                        >
                            <MenuIcon width={35} height={35} />
                        </label>
                        <aside
                            id="sidenav"
                            className="w-[100svw] h-[100svh] fixed top-0 -left-[100svw] bg-theme flex flex-col items-center justify-center text-gold transition-all"
                        >
                            <ul
                                className="flex items-center justify-start  w-full min-w-[30%] z-10 pb-12 flex-col gap-y-3 mt-28 overflow-y-auto"
                                aria-label={t("estateFilter.typeDefault")}
                            >
                                {types?.map((type) => (
                                    <li key={type.slug}>
                                        <Link
                                            aria-label={`${t("salesIn")} ${
                                                type.name
                                            }`}
                                            href={`/estates/${type.slug}`}
                                        >
                                            {type.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <LangButtons />
                        </aside>
                    </div>
                </nav>
            </header>
            <main className={`z-1 pb-20`}>{children}</main>
            <Footer />
        </div>
    );
};

export default AppLayout;
