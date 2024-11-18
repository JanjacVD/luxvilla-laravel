import LocationSvg from "@/assets/location.svg";
import LogoSvg from "@/assets/logo.svg";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

const Footer = ({}: {}) => {
    const year = new Date().getFullYear();
    const { t } = useTranslation();
    return (
        <div className="text-white w-full bg-stone-800 p-10 pb-2 sm:text-left text-center">
            <footer
                className="grid grid-cols-1 gap-y-5 sm:grid-cols-3 w-full p-4"
                aria-label="Footer"
            >
                <div>
                    <h2 className="sr-only">{t("footer.companyInfo")}</h2>
                    <div className="text-7xl" aria-label={t("footer.logo")}>
                        <img
                            src={LogoSvg}
                            className="h-full mb-2 mx-auto sm:mx-0 sm:mr-auto"
                            width={300}
                            height={200}
                            alt="Logo"
                        />
                    </div>

                    <p aria-label={t("footer.workHours")} className="text-lg">
                        {t("footer.workHours")}
                    </p>
                </div>
                <div className="flex items-center justify-evenly flex-col text-lg">
                    <address className="not-italic flex items-center">
                        <div aria-hidden="true">
                            <img
                                alt="Location icon"
                                src={LocationSvg}
                                width={30}
                                height={30}
                            />
                        </div>
                        <p aria-label={t("footer.address")}>
                            Ante Poljička 50a, Vodice
                        </p>
                    </address>
                    <a
                        href="mailto:someone@example.com"
                        aria-label={t("footer.contactEmail")}
                    >
                        {t("footer.email")} info@luxvilla.hr
                    </a>
                    <a
                        href="tel:+385992066894"
                        aria-label={t("footer.contactPhone")}
                    >
                        {t("footer.phone")} +385 99 206 6894
                    </a>
                    <Link href={route("terms.show")}>{t("terms")}</Link>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.6179729633004!2d15.773190012647035!3d43.76002937097691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1334d7fb5144ef07%3A0x31bb33cf35c3b721!2sUl.%20Ante%20Polji%C4%8Dka%2050a%2C%2022211%2C%20Vodice!5e0!3m2!1sen!2shr!4v1730746500970!5m2!1sen!2shr"
                    className="w-full h-full"
                    aria-label="Map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen={false}
                    title="Office Location"
                ></iframe>
            </footer>
            <p className="text-center py-1">
                © {year} • Lux Villa • {t("footer.reserved")} •
            </p>
            <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://www.valentino-digital-solutions.hr"
                className="text-center py-1"
            >
                {t("meta.developedBy")}
            </a>
        </div>
    );
};

export default Footer;
