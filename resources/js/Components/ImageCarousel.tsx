"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    Cross1Icon,
} from "@radix-ui/react-icons";
const ImageCarousel = ({ estate }: { estate: TEstate }) => {
    const [currentImage, setCurrentImage] = useState<number | undefined>();

    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    const handleImageClick = (index: number) => {
        const i =
            index < 0
                ? estate.images.length - 1
                : index >= estate.images.length
                ? 0
                : index;
        setCurrentImage(i);
        setCurrentImage(i);
        imageRefs.current[i]?.scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="gap-1 w-full  grid grid-cols-3 grid-rows-3 aspect-square sm:aspect-video overflow-hidden">
                {estate.images?.[0] && (
                    <div
                        className={cn(
                            `border w-full h-full cursor-pointer overflow-hidden`,
                            "col-span-3 row-span-2"
                        )}
                    >
                        <img
                            src={estate.images[0].sources.desktop}
                            height={700}
                            alt={estate.images[0]?.altText ?? "Estate image"}
                            srcSet={`${estate.images?.[0].sources.mobile} 600w, ${estate.images?.[0].sources.desktop} 1200w`}
                            width={700}
                            onClick={() => setCurrentImage(0)}
                            className={cn(
                                `border w-full h-full object-cover cursor-pointer hover:scale-110 transition-all`
                            )}
                        />
                    </div>
                )}
                <div className="row-span-1 col-span-3 flex flex-row  max-h-20 items-center overflow-x-scroll overflow-y-hidden">
                    {estate.images.slice(1).map((image, i) => (
                        <div
                            key={i}
                            className={cn(
                                `border cursor-pointer overflow-hidden aspect-square flex items-center`
                            )}
                        >
                            <img
                                src={image.sources.desktop}
                                height={700}
                                alt={image?.altText ?? "Estate image"}
                                width={700}
                                onClick={() => setCurrentImage(i + 1)}
                                srcSet={`${image?.sources.mobile} 600w, ${image?.sources.desktop} 1200w`}
                                className={cn(
                                    `border object-cover cursor-pointer hover:scale-110 transition-all`
                                )}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div
                aria-label="Image list"
                aria-disabled
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setCurrentImage(undefined);
                    }
                }}
                className={cn(
                    "fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-80 flex flex-row",
                    currentImage === undefined && "hidden"
                )}
            >
                <Button
                    className="mt-auto mb-auto sm:w-16 sm:h-16 h-8 w-8 rounded-full"
                    onClick={() => handleImageClick(Number(currentImage) - 1)}
                >
                    <ChevronLeftIcon />
                </Button>
                <div
                    className="flex flex-col h-full w-full py-4  flex-1"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setCurrentImage(undefined);
                        }
                    }}
                >
                    <div
                        className="relative w-full h-[90%] py-4  flex flex-col"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                setCurrentImage(undefined);
                            }
                        }}
                    >
                        <Button
                            className="absolute top-0 right-0  sm:w-16 sm:h-16 h-8 w-8 rounded-full rotate-90"
                            onClick={() => setCurrentImage(undefined)}
                        >
                            <Cross1Icon />
                        </Button>
                        {currentImage !== undefined &&
                            estate.images?.[currentImage] && (
                                <img
                                    src={`${estate.images?.[currentImage].sources.desktop}`}
                                    alt={
                                        estate.images?.[currentImage].altText ??
                                        "Estate Image"
                                    }
                                    srcSet={`${estate.images?.[currentImage].sources.mobile} 600w, ${estate.images?.[currentImage].sources.desktop} 1200w`}
                                    width={1920}
                                    onClick={(e) => {
                                        if (e.target === e.currentTarget) {
                                            setCurrentImage(undefined);
                                        }
                                    }}
                                    className="h-full w-full object-contain"
                                    height={1080}
                                />
                            )}
                    </div>
                    <div className="flex items-center  h-[10%] overflow-x-scroll no-scrollbar">
                        <div className="flex  gap-x-1 h-full ml-auto mr-auto  overflow-y-hidden ">
                            {estate?.images?.map((img, i) => (
                                <img
                                    src={img?.sources.desktop}
                                    srcSet={`${img?.sources?.mobile} 600w, ${img?.sources?.desktop} 1200w`}
                                    height={100}
                                    alt={img.altText ?? "Estate image"}
                                    width={100}
                                    key={i}
                                    ref={(el) => {
                                        imageRefs.current[i] = el;
                                    }}
                                    onClick={() => handleImageClick(i)}
                                    className={cn(
                                        `border object-contain w-auto aspect-square cursor-pointer z-10 transition-all bg-theme hover:-translate-y-2`,
                                        currentImage === i && "bg-gold"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Button
                    className="mt-auto mb-auto sm:w-16 sm:h-16 h-8 w-8 rounded-full"
                    onClick={() => handleImageClick(Number(currentImage) + 1)}
                >
                    <ChevronRightIcon />
                </Button>
            </div>
        </>
    );
};

export default ImageCarousel;
