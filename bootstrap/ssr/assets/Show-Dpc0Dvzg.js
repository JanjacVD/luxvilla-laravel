import { jsx, jsxs } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-D2ZQk8jz.js";
import { Link } from "@inertiajs/react";
import "./ApplicationLogo-Ciywr56m.js";
import "./logo-Bjl7k8Lf.js";
import "@headlessui/react";
import "react";
const Show = ({
  estate,
  images,
  videos
}) => {
  var _a, _b;
  return /* @__PURE__ */ jsx(AuthenticatedLayout, { header: "Nekretnine", children: /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "py-4", children: [
    /* @__PURE__ */ jsx(
      Link,
      {
        className: "bg-stone-800 text-white px-4 py-2 rounded-md",
        href: route("real-estate.edit", {
          real_estate: estate
        }),
        children: "Uredi"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "ID: ",
        estate.estate_id
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Naziv: ",
        estate.name.hr
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Naziv(EN): ",
        estate.name.en
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Naselje: ",
        estate.area.name
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Površina: ",
        estate.area_size
      ] }),
      /* @__PURE__ */ jsx("p", {}),
      /* @__PURE__ */ jsxs("p", { children: [
        "Istaknuto: ",
        estate.featured ? "Da" : "Ne"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Vlasnik: ",
        estate.owner_name
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Kontakt: ",
        estate.owner_contact
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Parking:",
        " ",
        estate.parking_available ? estate.parking_spaces : "Ne"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Cijena: ",
        estate.price,
        " €"
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Broj soba: ",
        estate.rooms
      ] }),
      estate.year_built && /* @__PURE__ */ jsxs("p", { children: [
        "Godina izgradnje: ",
        estate.year_built
      ] }),
      estate.year_renovated && /* @__PURE__ */ jsxs("p", { children: [
        "Godina Renovacije ",
        estate.year_renovated
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4", children: "Opis:" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          dangerouslySetInnerHTML: {
            __html: String((_a = estate.description) == null ? void 0 : _a.hr)
          }
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "mt-8", children: "Opis(EN):" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          dangerouslySetInnerHTML: {
            __html: String((_b = estate.description) == null ? void 0 : _b.en)
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
        "Slike",
        /* @__PURE__ */ jsx("div", { className: "w-full grid grid-cols-4 gap-x-4", children: images.map((img) => /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            src: img.original_url,
            alt: img.alt_text.hr,
            className: "max-h-80"
          },
          img.id
        )) })
      ] }),
      (videos == null ? void 0 : videos[0]) && /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
        "Video",
        /* @__PURE__ */ jsx(
          "video",
          {
            src: videos == null ? void 0 : videos[0].original_url,
            controls: true
          }
        )
      ] })
    ] })
  ] }) }) });
};
export {
  Show as default
};
