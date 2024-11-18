import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { useRef } from "react";

const ImgCarousel = () => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-[100svh]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="w-full h-full bg-blue-400">
                {Array.from({ length: 11 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="w-screen h-full">
                            <Card>
                                <CardContent className="flex w-screen h-[100svh] items-center justify-center relative">
                                    <img
                                        src={`storage/bg-${index}.jpg`}
                                        alt="House image for background"
                                        draggable={false}
                                        loading="lazy"
                                        width={400}
                                        height={400}
                                        className="w-[100svw] object-cover h-[100svh] absolute top-0 left-0 z-0 select-none"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
export default ImgCarousel;
