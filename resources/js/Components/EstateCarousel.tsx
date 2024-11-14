import { cn } from "@/lib/utils";
import EstateCard from "./EstateCard";

const EstateCarousel = ({
    realEstates,
    dir = "ltr",
}: {
    realEstates: TEstate[];
    dir?: "ltr" | "rtl";
}) => {
    return (
        <section
            className="carousel overflow-hidden"
            aria-label={"dict.gallery"}
        >
            <div
                className={cn(
                    "flex w-full overflow-x-auto pb-2 snap-x snap-mandatory gap-x-8",
                    dir === "rtl" && "flex-row-reverse"
                )}
            >
                {realEstates?.map((estate, index) => (
                    <EstateCard
                        className="!sm:w-[20vw] h-auto !aspect-square"
                        estate={estate}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default EstateCarousel;
