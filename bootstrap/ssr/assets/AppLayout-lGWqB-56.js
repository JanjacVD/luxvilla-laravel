import { jsx, jsxs } from "react/jsx-runtime";
import { L as LogoSvg } from "./logo-Bjl7k8Lf.js";
import { useTranslation } from "react-i18next";
import { usePage, Link } from "@inertiajs/react";
import { MenuIcon } from "lucide-react";
import "../ssr.js";
import { useEffect } from "react";
import i18n from "i18next";
const LangButtons = () => {
  const page = usePage();
  const { locale } = page.props;
  const getPath = (locale2) => {
    const url = page.url;
    const segments = url.split("/");
    segments[1] = locale2;
    const path = segments.join("/");
    return path;
  };
  return /* @__PURE__ */ jsx("ul", { className: "flex items-center gap-x-8 uppercase", children: ["en", "hr"].map((lang) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    Link,
    {
      className: locale === lang ? "underline underline-offset-4" : "",
      href: getPath(lang),
      children: lang
    }
  ) }, lang)) });
};
const LocationSvg = "/build/assets/location-DlYlTTA0.svg";
const Footer = ({}) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "text-white w-full bg-stone-800 p-10 pb-2 sm:text-left text-center", children: [
    /* @__PURE__ */ jsxs(
      "footer",
      {
        className: "grid grid-cols-1 gap-y-5 sm:grid-cols-3 w-full p-4",
        "aria-label": "Footer",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "sr-only", children: t("footer.companyInfo") }),
            /* @__PURE__ */ jsx("div", { className: "text-7xl", "aria-label": t("footer.logo"), children: /* @__PURE__ */ jsx(
              "img",
              {
                src: LogoSvg,
                className: "h-full mb-2 mx-auto sm:mx-0 sm:mr-auto",
                width: 300,
                height: 200,
                alt: "Logo"
              }
            ) }),
            /* @__PURE__ */ jsx("p", { "aria-label": t("footer.workHours"), className: "text-lg", children: t("footer.workHours") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-evenly flex-col text-lg", children: [
            /* @__PURE__ */ jsxs("address", { className: "not-italic flex items-center", children: [
              /* @__PURE__ */ jsx("div", { "aria-hidden": "true", children: /* @__PURE__ */ jsx(
                "img",
                {
                  alt: "Location icon",
                  src: LocationSvg,
                  width: 30,
                  height: 30
                }
              ) }),
              /* @__PURE__ */ jsx("p", { "aria-label": t("footer.address"), children: "Ante Poljička 50a, Vodice" })
            ] }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "mailto:someone@example.com",
                "aria-label": t("footer.contactEmail"),
                children: [
                  t("footer.email"),
                  " info@luxvilla.hr"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "tel:+385992066894",
                "aria-label": t("footer.contactPhone"),
                children: [
                  t("footer.phone"),
                  " +385 99 206 6894"
                ]
              }
            ),
            /* @__PURE__ */ jsx(Link, { href: "/terms-and-conditions", children: t("terms") })
          ] }),
          /* @__PURE__ */ jsx(
            "iframe",
            {
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.6179729633004!2d15.773190012647035!3d43.76002937097691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1334d7fb5144ef07%3A0x31bb33cf35c3b721!2sUl.%20Ante%20Polji%C4%8Dka%2050a%2C%2022211%2C%20Vodice!5e0!3m2!1sen!2shr!4v1730746500970!5m2!1sen!2shr",
              className: "w-full h-full",
              "aria-label": "Map",
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
              allowFullScreen: false,
              title: "Office Location"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "text-center py-1", children: [
      "© ",
      year,
      " • Lux Villa • ",
      t("footer.reserved"),
      " •"
    ] }),
    /* @__PURE__ */ jsx(
      "a",
      {
        target: "_blank",
        referrerPolicy: "no-referrer",
        href: "https://www.valentino-digital-solutions.hr",
        className: "text-center py-1",
        children: t("meta.developedBy")
      }
    )
  ] });
};
const AppLayout = ({ children }) => {
  const { t } = useTranslation();
  const { locale } = usePage().props;
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);
  const types = usePage().props.types;
  return /* @__PURE__ */ jsxs("div", { className: "bg-stone-100", children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs(
      "nav",
      {
        className: `w-full flex items-center justify-between py-7 px-12 z-50 fixed top-0 left-0 bg-theme text-gold`,
        children: [
          /* @__PURE__ */ jsx(Link, { href: "/", className: "z-20", "aria-label": t("goToHome"), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: LogoSvg,
              className: "max-h-10",
              width: 100,
              height: 100,
              alt: "Logo"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "ul",
            {
              className: "sm:flex items-center justify-evenly min-w-[30%] z-10 hidden gap-x-8",
              "aria-label": t("estateFilter.typeDefault"),
              children: types == null ? void 0 : types.map((type) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  "aria-label": `${t("salesIn")} ${type.name}`,
                  href: route("estates.list", {
                    locale,
                    typeSlug: type.slug
                  }),
                  children: type.name
                }
              ) }, type.slug))
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "sm:flex hidden z-10", children: /* @__PURE__ */ jsx(LangButtons, {}) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center sm:hidden z-10 relative", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                className: "hidden",
                id: "menu-toggle"
              }
            ),
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "menu-toggle",
                className: "hamburger-label z-10",
                children: /* @__PURE__ */ jsx(MenuIcon, { width: 35, height: 35 })
              }
            ),
            /* @__PURE__ */ jsxs(
              "aside",
              {
                id: "sidenav",
                className: "w-[100svw] h-[100svh] fixed top-0 -left-[100svw] bg-theme flex flex-col items-center justify-center text-gold transition-all",
                children: [
                  /* @__PURE__ */ jsx(
                    "ul",
                    {
                      className: "flex items-center justify-start  w-full min-w-[30%] z-10 pb-12 flex-col gap-y-3 mt-28 overflow-y-auto",
                      "aria-label": t("estateFilter.typeDefault"),
                      children: types == null ? void 0 : types.map((type) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                        Link,
                        {
                          "aria-label": `${t("salesIn")} ${type.name}`,
                          href: route("estates.list", {
                            locale,
                            typeSlug: type.slug
                          }),
                          children: type.name
                        }
                      ) }, type.slug))
                    }
                  ),
                  /* @__PURE__ */ jsx(LangButtons, {})
                ]
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("main", { className: `z-1 pb-20`, children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  AppLayout as A
};
