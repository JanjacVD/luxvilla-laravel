import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn } from "./utils-H80jjgLf.js";
import { E as EstateCard, u as useLocationFilter, C as Combobox } from "./EstateCard-B4awUOYE.js";
import { Link, Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { A as AppLayout } from "./AppLayout-b6IHFJt8.js";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-icons";
import "@radix-ui/react-popover";
import "./button-uGIV1LX6.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "cmdk";
import "lucide-react";
import "@radix-ui/react-dialog";
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
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "storage/houseDesktop.webp",
          alt: "House image for background",
          draggable: false,
          loading: "lazy",
          width: 400,
          height: 400,
          className: "w-[100svw] object-cover h-[100svh] absolute top-0 left-0 z-0 select-none",
          srcSet: "storage/houseMobile.webp 600w, storage/houseDesktop.webp 1200w",
          sizes: "(max-width: 600px) 100vw, 1200px"
        }
      )
    ] })
  ] });
};
export {
  Home as default
};
