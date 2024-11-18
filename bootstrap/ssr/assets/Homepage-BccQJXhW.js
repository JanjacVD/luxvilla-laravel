import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn } from "./utils-H80jjgLf.js";
import { E as EstateCard, u as useLocationFilter, C as Combobox } from "./EstateCard-B4awUOYE.js";
import { Link, Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { B as Button } from "./button-uGIV1LX6.js";
import { A as AppLayout } from "./AppLayout-b6IHFJt8.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-icons";
import "@radix-ui/react-popover";
import "cmdk";
import "@radix-ui/react-dialog";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./logo-Bjl7k8Lf.js";
import "../ssr.js";
import "@inertiajs/react/server";
import "react-dom/server";
import "i18next";
import "react-toastify";
const EstateCarousel = ({
  realEstates,
  dir = "ltr"
}) => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "carousel overflow-hidden",
      "aria-label": "dict.gallery",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex w-full overflow-x-auto pb-2 snap-x snap-mandatory gap-x-8",
            dir === "rtl" && "flex-row-reverse"
          ),
          children: realEstates == null ? void 0 : realEstates.map((estate, index) => /* @__PURE__ */ jsx(
            EstateCard,
            {
              className: "!sm:w-[20vw] h-auto !aspect-square",
              estate
            },
            index
          ))
        }
      )
    }
  );
};
const EstateFilterForm = () => {
  const { t } = useTranslation();
  const {
    location,
    types,
    selectedCounty,
    selectedCity,
    selectedArea,
    selectedType,
    listLink,
    setSelectedType,
    handleChangeCounty,
    handleChangeCity,
    handleChangeArea,
    renderTypeLabel,
    renderCountyLabel,
    renderCityLabel,
    renderAreaLabel
  } = useLocationFilter();
  return /* @__PURE__ */ jsxs("form", { className: "place-items-center bg-opacity sm:w-1/2 w-full mx-auto mt-[10%] items-center  py-10  rounded-md grid xl:grid-cols-2 md:grid-cols-1 gap-4 4xl:grid-cols-4 p-9", children: [
    /* @__PURE__ */ jsx(
      Combobox,
      {
        value: selectedType,
        options: types.map((type) => ({
          label: type.name,
          value: String(type.id)
        })) ?? [],
        placeholder: t("estateFilter.type"),
        setValue: setSelectedType,
        renderLabel: (val) => renderTypeLabel(val)
      }
    ),
    /* @__PURE__ */ jsx(
      Combobox,
      {
        value: String(selectedCounty == null ? void 0 : selectedCounty.id),
        options: location.map((c) => ({
          label: c.name,
          value: String(c.id)
        })) ?? [],
        placeholder: t("estateFilter.county"),
        setValue: handleChangeCounty,
        renderLabel: (val) => renderCountyLabel(val)
      }
    ),
    /* @__PURE__ */ jsx(
      Combobox,
      {
        value: String(selectedCity == null ? void 0 : selectedCity.id),
        options: (selectedCounty == null ? void 0 : selectedCounty.cities.map((c) => ({
          label: c.name,
          value: String(c.id)
        }))) ?? [],
        placeholder: t("estateFilter.city"),
        setValue: handleChangeCity,
        disabled: !selectedCounty,
        renderLabel: (val) => renderCityLabel(val)
      }
    ),
    /* @__PURE__ */ jsx(
      Combobox,
      {
        value: String(selectedArea == null ? void 0 : selectedArea.id),
        options: (selectedCity == null ? void 0 : selectedCity.areas.map((c) => ({
          label: c.name,
          value: String(c.id)
        }))) ?? [],
        placeholder: t("estateFilter.area"),
        setValue: handleChangeArea,
        disabled: !selectedCounty || !selectedCity,
        renderLabel: (val) => renderAreaLabel(val)
      }
    ),
    /* @__PURE__ */ jsx(
      Link,
      {
        className: "transition ease-in-out px-4 w-full h-9 rounded-md bg-yellow-600 hover:bg-yellow-500 flex items-center justify-center duration-300 4xl:col-span-4 xl:col-span-2",
        href: listLink,
        children: t("estateFilter.search")
      }
    )
  ] });
};
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api == null ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api == null ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api == null ? void 0 : api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const ImgCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2e3, stopOnInteraction: true }));
  return /* @__PURE__ */ jsx(
    Carousel,
    {
      plugins: [plugin.current],
      className: "w-full h-[100svh]",
      onMouseEnter: plugin.current.stop,
      onMouseLeave: plugin.current.reset,
      children: /* @__PURE__ */ jsx(CarouselContent, { className: "w-full h-full bg-blue-400", children: Array.from({ length: 11 }).map((_, index) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx("div", { className: "w-screen h-full", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "flex w-screen h-[100svh] items-center justify-center relative", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: `storage/bg-${index}.jpg`,
          alt: "House image for background",
          draggable: false,
          loading: "lazy",
          width: 400,
          height: 400,
          className: "w-[100svw] object-cover h-[100svh] absolute top-0 left-0 z-0 select-none"
        }
      ) }) }) }) }, index)) })
    }
  );
};
const Home = ({
  featured,
  newest
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: t("meta.homepage.title") }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: t("meta.homepage.desc") }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: t("keywords.homepage") }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: t("meta.homepage.title") }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: `${t("meta.homepage.ogDesc")}`
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "apple-touch-icon", href: "/apple-icon.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "/logo.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://luxvilla.hr" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen p-4 pb-20 gap-16 sm:p-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 sm:p-10 w-full h-full", children: [
        /* @__PURE__ */ jsxs(
          "section",
          {
            className: "flex flex-col min-h-[100svh] sm:mt-0 mt-8",
            "aria-labelledby": "introduction-heading",
            children: [
              /* @__PURE__ */ jsx(
                "h1",
                {
                  id: "introduction-heading",
                  className: "sm:text-7xl text-5xl mb-4 mt-16",
                  children: "Lux Villa"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "sm:text-xl text-md", children: t("heroDescription") }),
              /* @__PURE__ */ jsx(EstateFilterForm, {})
            ]
          }
        ),
        !!featured.length && /* @__PURE__ */ jsxs(
          "section",
          {
            className: "flex flex-col min-h-[60svh]",
            "aria-labelledby": "featured-heading",
            children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  id: "featured-heading",
                  className: "text-4xl sm:text-5xl mb-4 text-right",
                  children: t("featured")
                }
              ),
              /* @__PURE__ */ jsx(EstateCarousel, { realEstates: featured })
            ]
          }
        ),
        !!newest.length && /* @__PURE__ */ jsxs(
          "section",
          {
            className: "flex flex-col",
            "aria-labelledby": "new-estates-heading",
            children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  id: "new-estates-heading",
                  className: "text-4xl sm:text-5xl mb-4 text-left",
                  children: t("new")
                }
              ),
              /* @__PURE__ */ jsx(EstateCarousel, { dir: "rtl", realEstates: newest })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-[100svw] object-cover h-[100svh] absolute top-0 left-0 z-0 ", children: /* @__PURE__ */ jsx(ImgCarousel, {}) })
    ] })
  ] });
};
export {
  Home as default
};
