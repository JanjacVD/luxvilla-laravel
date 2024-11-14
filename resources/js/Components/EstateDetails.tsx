import {
    BarcodeIcon,
    BedIcon,
    CalendarIcon,
    CarIcon,
    RulerIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const EstateDetails = ({ estate }: { estate: TEstate }) => {
    const { t } = useTranslation();
    return (
        <section className="w-full px-8 estate-details text-sm text-center grid grid-cols-2 h-1/2 items-center">
            <p aria-label="ID">
                <span className="w-full text-sm">ID:</span>
                {estate.estateId}
                <BarcodeIcon className="text-gold ml-2" />
            </p>
            <p aria-label={t("estateCard.area")}>
                <span className="w-full text-sm">{t("estateCard.area")}:</span>
                {estate.areaSize} m²
                <RulerIcon className="text-gold ml-2" />
            </p>
            <p aria-label={t("estateCard.rooms")}>
                <span className="w-full text-sm">{t("estateCard.rooms")}:</span>
                {estate.rooms}
                <BedIcon className="text-gold ml-2" />
            </p>

            {estate.parking && (
                <p aria-label={t("estateCard.parking")}>
                    <span className="w-full text-sm">
                        {t("estateCard.parking")}:
                    </span>
                    {estate.parking}
                    <CarIcon className="text-gold ml-2" />
                </p>
            )}
            {estate.yearBuilt && (
                <p aria-label={t("estateCard.dateBuilt")}>
                    <span className="w-full text-sm">
                        {t("estateCard.dateBuilt")}:
                    </span>
                    {estate.yearBuilt}
                    <CalendarIcon className="text-gold ml-2" />
                </p>
            )}
            {estate.yearRenovated && (
                <p aria-label={t("estateCard.dateRenovated")}>
                    <span className="w-full text-sm">
                        {t("estateCard.dateRenovated")}:
                    </span>
                    {new Date(estate.yearRenovated).getFullYear()}
                    <CalendarIcon className="text-gold ml-2" />
                </p>
            )}
        </section>
    );
};

export default EstateDetails;
