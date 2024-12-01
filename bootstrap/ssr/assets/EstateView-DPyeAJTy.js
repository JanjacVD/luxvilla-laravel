import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { I as Input, B as Breadcrumbs } from "./input-Cfm1T_h3.js";
import { toast } from "react-toastify";
import * as React from "react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { c as cn } from "./utils-H80jjgLf.js";
import { B as Button } from "./button-uGIV1LX6.js";
import { router, Head } from "@inertiajs/react";
import { BarcodeIcon, RulerIcon, BedIcon, CarIcon, CalendarIcon } from "lucide-react";
import { ChevronLeftIcon, Cross1Icon, ChevronRightIcon } from "@radix-ui/react-icons";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import { A as AppLayout } from "./AppLayout-b6IHFJt8.js";
/* empty css                 */
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "./logo-Bjl7k8Lf.js";
import "../ssr.js";
import "@inertiajs/react/server";
import "react-dom/server";
import "i18next";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
const ContactForm = ({ estate }) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    router.post(route("contact.store"), data, {
      onSuccess: () => {
        var _a;
        (_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.reset();
        toast.success(t("contact.emailSent"));
      },
      onError: (e2) => {
        toast.error(t("contact.sendError"));
      }
    });
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: "border rounded-md px-8 py-4 bg-white h-auto",
      ref,
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl text-center pb-2", children: t("contact.title") }),
        /* @__PURE__ */ jsxs(Label, { htmlFor: "name", children: [
          t("contact.name"),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "name",
              required: true,
              name: "name",
              type: "text",
              autoComplete: "name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Label, { htmlFor: "email", children: [
          t("contact.email"),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "email",
              name: "email",
              required: true,
              type: "email",
              autoComplete: "email"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Label, { htmlFor: "phone", children: [
          t("contact.phone"),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "phone",
              name: "phone",
              required: true,
              type: "phone",
              autoComplete: "tel"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Input, { type: "hidden", name: "estate_id", value: estate.estateId }),
        /* @__PURE__ */ jsxs(Label, { htmlFor: "msg", children: [
          t("contact.msg"),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "msg",
              name: "msg",
              required: true,
              className: "resize-y border text-sm border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground !theme flex w-full rounded-md  px-3 py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Button, { className: "mt-2", type: "submit", children: t("contact.submit") })
      ]
    }
  );
};
const EstateDetails = ({ estate }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("section", { className: "w-full px-8 estate-details text-sm text-center grid grid-cols-2 h-1/2 items-center", children: [
    /* @__PURE__ */ jsxs("p", { "aria-label": "ID", children: [
      /* @__PURE__ */ jsx("span", { className: "w-full text-sm", children: "ID:" }),
      estate.estateId,
      /* @__PURE__ */ jsx(BarcodeIcon, { className: "text-gold ml-2" })
    ] }),
    /* @__PURE__ */ jsxs("p", { "aria-label": t("estateCard.area"), children: [
      /* @__PURE__ */ jsxs("span", { className: "w-full text-sm", children: [
        t("estateCard.area"),
        ":"
      ] }),
      estate.areaSize,
      " m²",
      /* @__PURE__ */ jsx(RulerIcon, { className: "text-gold ml-2" })
    ] }),
    /* @__PURE__ */ jsxs("p", { "aria-label": t("estateCard.rooms"), children: [
      /* @__PURE__ */ jsxs("span", { className: "w-full text-sm", children: [
        t("estateCard.rooms"),
        ":"
      ] }),
      estate.rooms,
      /* @__PURE__ */ jsx(BedIcon, { className: "text-gold ml-2" })
    ] }),
    estate.parking && /* @__PURE__ */ jsxs("p", { "aria-label": t("estateCard.parking"), children: [
      /* @__PURE__ */ jsxs("span", { className: "w-full text-sm", children: [
        t("estateCard.parking"),
        ":"
      ] }),
      estate.parking,
      /* @__PURE__ */ jsx(CarIcon, { className: "text-gold ml-2" })
    ] }),
    estate.yearBuilt && /* @__PURE__ */ jsxs("p", { "aria-label": t("estateCard.dateBuilt"), children: [
      /* @__PURE__ */ jsxs("span", { className: "w-full text-sm", children: [
        t("estateCard.dateBuilt"),
        ":"
      ] }),
      estate.yearBuilt,
      /* @__PURE__ */ jsx(CalendarIcon, { className: "text-gold ml-2" })
    ] }),
    estate.yearRenovated && /* @__PURE__ */ jsxs("p", { "aria-label": t("estateCard.dateRenovated"), children: [
      /* @__PURE__ */ jsxs("span", { className: "w-full text-sm", children: [
        t("estateCard.dateRenovated"),
        ":"
      ] }),
      new Date(estate.yearRenovated).getFullYear(),
      /* @__PURE__ */ jsx(CalendarIcon, { className: "text-gold ml-2" })
    ] })
  ] });
};
const ImageCarousel = ({ estate }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
  const [currentImage, setCurrentImage] = useState();
  const imageRefs = useRef([]);
  const handleImageClick = (index) => {
    var _a2;
    const i = index < 0 ? estate.images.length - 1 : index >= estate.images.length ? 0 : index;
    setCurrentImage(i);
    setCurrentImage(i);
    (_a2 = imageRefs.current[i]) == null ? void 0 : _a2.scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "gap-1 w-full  grid grid-cols-3 grid-rows-3 aspect-square sm:aspect-video overflow-hidden", children: [
      ((_a = estate.images) == null ? void 0 : _a[0]) && /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            `border w-full h-full cursor-pointer overflow-hidden`,
            "col-span-3 row-span-2"
          ),
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: (_c = (_b = estate.images[0]) == null ? void 0 : _b.sources) == null ? void 0 : _c.desktop,
              height: 700,
              alt: ((_d = estate.images[0]) == null ? void 0 : _d.altText) ?? "Estate image",
              srcSet: `${(_g = (_f = (_e = estate.images) == null ? void 0 : _e[0]) == null ? void 0 : _f.sources) == null ? void 0 : _g.mobile} 600w, ${(_j = (_i = (_h = estate.images) == null ? void 0 : _h[0]) == null ? void 0 : _i.sources) == null ? void 0 : _j.desktop} 1200w`,
              width: 700,
              onClick: () => setCurrentImage(0),
              className: cn(
                `border w-full h-full object-cover cursor-pointer hover:scale-110 transition-all`
              )
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "row-span-1 col-span-3 flex flex-row  max-h-20 items-center overflow-x-scroll overflow-y-hidden", children: estate.images.slice(1).map((image, i) => {
        var _a2, _b2, _c2;
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              `border cursor-pointer overflow-hidden aspect-square flex items-center`
            ),
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: (_a2 = image == null ? void 0 : image.sources) == null ? void 0 : _a2.desktop,
                height: 700,
                alt: (image == null ? void 0 : image.altText) ?? "Estate image",
                width: 700,
                onClick: () => setCurrentImage(i + 1),
                srcSet: `${(_b2 = image == null ? void 0 : image.sources) == null ? void 0 : _b2.mobile} 600w, ${(_c2 = image == null ? void 0 : image.sources) == null ? void 0 : _c2.desktop} 1200w`,
                className: cn(
                  `border object-cover cursor-pointer hover:scale-110 transition-all`
                )
              }
            )
          },
          i
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        "aria-label": "Image list",
        "aria-disabled": true,
        onClick: (e) => {
          if (e.target === e.currentTarget) {
            setCurrentImage(void 0);
          }
        },
        className: cn(
          "fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-80 flex flex-row",
          currentImage === void 0 && "hidden"
        ),
        children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              className: "mt-auto mb-auto sm:w-16 sm:h-16 h-8 w-8 rounded-full",
              onClick: () => handleImageClick(Number(currentImage) - 1),
              children: /* @__PURE__ */ jsx(ChevronLeftIcon, {})
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-col h-full w-full py-4  flex-1",
              onClick: (e) => {
                if (e.target === e.currentTarget) {
                  setCurrentImage(void 0);
                }
              },
              children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "relative w-full h-[90%] py-4  flex flex-col",
                    onClick: (e) => {
                      if (e.target === e.currentTarget) {
                        setCurrentImage(void 0);
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          className: "absolute top-0 right-0  sm:w-16 sm:h-16 h-8 w-8 rounded-full rotate-90",
                          onClick: () => setCurrentImage(void 0),
                          children: /* @__PURE__ */ jsx(Cross1Icon, {})
                        }
                      ),
                      currentImage !== void 0 && ((_k = estate.images) == null ? void 0 : _k[currentImage]) && /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: `${(_n = (_m = (_l = estate.images) == null ? void 0 : _l[currentImage]) == null ? void 0 : _m.sources) == null ? void 0 : _n.desktop}`,
                          alt: ((_o = estate.images) == null ? void 0 : _o[currentImage].altText) ?? "Estate Image",
                          srcSet: `${(_r = (_q = (_p = estate.images) == null ? void 0 : _p[currentImage]) == null ? void 0 : _q.sources) == null ? void 0 : _r.mobile} 600w, ${(_u = (_t = (_s = estate.images) == null ? void 0 : _s[currentImage]) == null ? void 0 : _t.sources) == null ? void 0 : _u.desktop} 1200w`,
                          width: 1920,
                          onClick: (e) => {
                            if (e.target === e.currentTarget) {
                              setCurrentImage(void 0);
                            }
                          },
                          className: "h-full w-full object-contain",
                          height: 1080
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "flex items-center  h-[10%] overflow-x-scroll no-scrollbar", children: /* @__PURE__ */ jsx("div", { className: "flex  gap-x-1 h-full ml-auto mr-auto  overflow-y-hidden ", children: (_v = estate == null ? void 0 : estate.images) == null ? void 0 : _v.map((img, i) => {
                  var _a2, _b2, _c2;
                  return /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: (_a2 = img == null ? void 0 : img.sources) == null ? void 0 : _a2.desktop,
                      srcSet: `${(_b2 = img == null ? void 0 : img.sources) == null ? void 0 : _b2.mobile} 600w, ${(_c2 = img == null ? void 0 : img.sources) == null ? void 0 : _c2.desktop} 1200w`,
                      height: 100,
                      alt: img.altText ?? "Estate image",
                      width: 100,
                      ref: (el) => {
                        imageRefs.current[i] = el;
                      },
                      onClick: () => handleImageClick(i),
                      className: cn(
                        `border object-contain w-auto aspect-square cursor-pointer z-10 transition-all bg-theme hover:-translate-y-2`,
                        currentImage === i && "bg-gold"
                      )
                    },
                    i
                  );
                }) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: "mt-auto mb-auto sm:w-16 sm:h-16 h-8 w-8 rounded-full",
              onClick: () => handleImageClick(Number(currentImage) + 1),
              children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
            }
          )
        ]
      }
    )
  ] });
};
const MapWrapper = ({ estate }) => {
  var _a;
  if (!(estate == null ? void 0 : estate.coordinates) || !(((_a = estate.coordinates) == null ? void 0 : _a.length) === 2)) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "w-full h-96 z-0 mt-8", children: /* @__PURE__ */ jsxs(
    MapContainer,
    {
      style: { width: "100%", height: "90%", zIndex: 0 },
      center: estate.coordinates,
      zoom: 13,
      scrollWheelZoom: false,
      children: [
        /* @__PURE__ */ jsx(
          TileLayer,
          {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
        ),
        /* @__PURE__ */ jsx(
          Circle,
          {
            center: estate.coordinates,
            radius: estate.radius ?? 500
          }
        )
      ]
    },
    JSON.stringify(estate.coordinates)
  ) });
};
const EstateView = ({
  estate,
  locale
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: estate == null ? void 0 : estate.name }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: estate.description.replace(/<\/?[^>]+(>|$)/g, "")
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: `${(_a = estate.estateType) == null ? void 0 : _a.name}, ${(_b = estate == null ? void 0 : estate.area) == null ? void 0 : _b.name}, ${(_d = (_c = estate == null ? void 0 : estate.area) == null ? void 0 : _c.city) == null ? void 0 : _d.name}, ${(_g = (_f = (_e = estate == null ? void 0 : estate.area) == null ? void 0 : _e.city) == null ? void 0 : _f.county) == null ? void 0 : _g.name}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: t("meta.homepage.title") }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: estate.description.replace(/<\/?[^>]+(>|$)/g, "")
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "apple-touch-icon", href: "/apple-icon.png" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:image",
          content: (_j = (_i = (_h = estate.images) == null ? void 0 : _h[0]) == null ? void 0 : _i.sources) == null ? void 0 : _j.og
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:url",
          content: `https://luxvilla.hr/${locale}/${estate.estateId}`
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-32 sm:px-20 px-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-center text-5xl", children: estate.name }),
      estate.sold && /* @__PURE__ */ jsx("div", { className: "bg-red-600 flex items-center justify-center text-4xl text-white w-full h-32 rounded-md", children: "SOLD" }),
      /* @__PURE__ */ jsx("div", { className: "my-6", children: /* @__PURE__ */ jsx(
        Breadcrumbs,
        {
          items: [
            {
              url: route("estates.list", {
                typeSlug: (_k = estate.estateType) == null ? void 0 : _k.slug,
                locale
              }),
              label: (_l = estate.estateType) == null ? void 0 : _l.name
            },
            {
              url: route("estates.list", {
                typeSlug: (_m = estate.estateType) == null ? void 0 : _m.slug,
                countySlug: (_n = estate.area.city.county) == null ? void 0 : _n.slug,
                locale
              }),
              label: (_o = estate.area.city.county) == null ? void 0 : _o.name
            },
            {
              url: route("estates.list", {
                typeSlug: (_p = estate.estateType) == null ? void 0 : _p.slug,
                countySlug: (_q = estate.area.city.county) == null ? void 0 : _q.slug,
                citySlug: (_r = estate.area.city) == null ? void 0 : _r.slug,
                locale
              }),
              label: (_s = estate.area.city) == null ? void 0 : _s.name
            },
            {
              url: route("estates.list", {
                typeSlug: (_t = estate.estateType) == null ? void 0 : _t.slug,
                countySlug: (_u = estate.area.city.county) == null ? void 0 : _u.slug,
                citySlug: (_v = estate.area.city) == null ? void 0 : _v.slug,
                areaSlug: (_w = estate.area) == null ? void 0 : _w.slug,
                locale
              }),
              label: estate.area.name
            },
            {
              url: route("estates.show", {
                estateId: estate.estateId,
                locale
              }),
              label: estate.estateId
            }
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row  w-full flex-wrap relative", children: /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 grid-cols-1 gap-x-1", children: [
        estate.images.length > 0 && /* @__PURE__ */ jsx(ImageCarousel, { estate }),
        /* @__PURE__ */ jsxs("div", { className: "sm:hidden flex flex-row flex-wrap -mt-2 mb-4 ", children: [
          /* @__PURE__ */ jsxs(
            "p",
            {
              "aria-label": t("estateCard.price"),
              className: "text-5xl w-full",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-gold font-semibold mr-3", children: "€" }),
                estate.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
            t("estateCard.vat1"),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
              "3% + ",
              t("estateCard.vat"),
              " "
            ] }),
            t("estateCard.vat2")
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-y-20 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx(EstateDetails, { estate }),
          /* @__PURE__ */ jsx(ContactForm, { estate })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden  sm:flex flex-row flex-wrap", children: [
          /* @__PURE__ */ jsxs(
            "p",
            {
              "aria-label": t("estateCard.price"),
              className: "text-5xl w-full",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-gold font-semibold mr-3", children: "€" }),
                estate.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
            t("estateCard.vat1"),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
              "3% + ",
              t("estateCard.vat"),
              " "
            ] }),
            t("estateCard.vat2")
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-semibold text-3xl mb-4", children: t("estateCard.features") }),
        /* @__PURE__ */ jsx("ul", { className: "flex items-start justify-start flex-wrap gap-y-12 pb-6", children: (_x = Object.keys(estate.hashtags)) == null ? void 0 : _x.map((g) => /* @__PURE__ */ jsxs("li", { className: "w-1/2 sm:w-1/3", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex items-center text-lg font-semibold flex-row",
              children: /* @__PURE__ */ jsx("p", { children: g })
            },
            g
          ),
          /* @__PURE__ */ jsx("ul", { className: "pt-2", children: estate.hashtags[g].map((f) => /* @__PURE__ */ jsx(
            "li",
            {
              className: "flex items-center ml-2",
              children: /* @__PURE__ */ jsx("p", { children: f.name })
            },
            f.id + g
          )) })
        ] }, g)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "py-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-semibold text-3xl mb-4", children: t("description") }),
        /* @__PURE__ */ jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: estate.description }
          }
        )
      ] }),
      ((_y = estate == null ? void 0 : estate.video) == null ? void 0 : _y.url) && /* @__PURE__ */ jsx(
        "video",
        {
          controls: true,
          src: ((_z = estate.video) == null ? void 0 : _z.url) ?? "",
          autoPlay: false
        }
      ),
      /* @__PURE__ */ jsx(MapWrapper, { estate })
    ] })
  ] });
};
export {
  EstateView as default
};
