// import { getDictionary } from "@/dictionaries/dictionaries";
import { cn } from "@/lib/utils";
// import { TRealEstate } from "@/types/root.types";
// import Image from "next/image";
import { HTMLProps } from "react";
import SquareSvg from "@/assets/squareFoot.svg";
import CalendarSvg from "@/assets/calendar.svg";
// import ImageSlideshow from "./ImageSlideshow";

import { Link, usePage } from "@inertiajs/react";
import ImageSlideshow from "./ImageSlideshow";

// import Link from "next/link";
const EstateCard = ({
    estate,
    ...props
}: {
    estate: TEstate;
} & React.HTMLProps<HTMLDivElement>) => {
    const { locale } = usePage().props;
    return (
        <Link
            href={route("estates.show", { estateId: estate.estateId, locale })}
        >
            <article
                {...props}
                className={cn(
                    "cursor-pointer relative h-96 sm:w-96 w-[calc(100vw-2rem)] z-0 bg-amber-200 shrink-0 snap-start overflow-hidden",
                    props.className
                )}
            >
                <ImageSlideshow estate={estate} />
                <div
                    // aria-label={dict?.estateCard?.details}
                    className="w-full bg-black bg-opacity-60 text-white py-2 px-4 z-20 absolute bottom-0 left-0 h-1/3 flex flex-col"
                >
                    {/* <h5 className="text-xl" aria-label={dict.estateCard.name}> */}
                    {estate.name}
                    {/* </h5> */}
                    <p
                        className="text-lg flex items-center"
                        // aria-label={dict.estateCard.area}
                    >
                        <img
                            src={SquareSvg}
                            alt={"Area icon"}
                            className="mr-2"
                            draggable={false}
                            width={20}
                            height={20}
                        />
                        {estate.areaSize} m&sup2;
                    </p>
                    {(estate.yearBuilt || estate.yearRenovated) && (
                        <p
                            className="text-lg flex items-center"
                            // aria-label={dict.estateCard.area}
                        >
                            <img
                                src={CalendarSvg}
                                alt={"Area icon"}
                                className="mr-2"
                                draggable={false}
                                width={20}
                                height={20}
                            />
                            {estate.yearRenovated ?? estate.yearBuilt}
                        </p>
                    )}
                    <div className="flex flex-row justify-between mt-auto">
                        {/* <span aria-label={dict.estateCard.location}> */}
                        {estate.area.city.county.name} - {estate.area.name}
                        {/* </span> */}
                        <span aria-label={"dict.estateCard.price"}>
                            {Number(estate.price).toFixed(2)} €
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default EstateCard;
