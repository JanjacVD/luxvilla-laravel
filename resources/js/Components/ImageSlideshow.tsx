import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";

const ImageSlideshow = ({ estate }: { estate: TEstate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            {estate.images?.map((img, i) => (
                <img
                    id={img.altText + i}
                    key={img.altText + i}
                    src={img.sources.desktop}
                    alt={img.altText ?? ""}
                    draggable={false}
                    loading="lazy"
                    width={400}
                    height={400}
                    className={cn(
                        `w-full h-full absolute opacity-0 object-cover select-none transition-all`,
                        i === currentIndex && "opacity-100"
                    )}
                    srcSet={`${img.sources.mobile} 600w, ${img.sources.desktop} 1200w`}
                    sizes="(max-width: 600px) 100vw, 1200px"
                />
            ))}
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full z-10 absolute top-0 flex justify-center gap-x-2 items-center"
            >
                {estate.images.map((img, i) => (
                    <Button
                        key={img.altText + i}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setCurrentIndex(i);
                        }}
                        className={cn(
                            `transition-all rounded-full h-5 w-5 p-0 border-2 bg-slate-50 hover:bg-stone-200`,
                            i === currentIndex && "bg-stone-300"
                        )}
                    >
                        <span className="w-2/5 h-2/5 bg-stone-100 rounded-full"></span>
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default ImageSlideshow;
