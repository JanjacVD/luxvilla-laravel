import { jsx, jsxs } from "react/jsx-runtime";
import { C as Checkbox } from "./Checkbox-Bd8bJ3HH.js";
import { T as TranslatableBlockInput, M as MapInput, I as ImageArrayInput } from "./TranslatableBlockInput-DFAwf9RJ.js";
import { I as InputLabel } from "./InputLabel-CE_n4Upz.js";
import { P as PrimaryButton } from "./PrimaryButton-DgVfVBwo.js";
import { T as TextInput } from "./TextInput-uXC4T8wO.js";
import { T as TranslatableInput } from "./TranslatableInput-IuRL4WPO.js";
import { B as Button } from "./button-uGIV1LX6.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-D2ZQk8jz.js";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import "react-leaflet";
/* empty css                 */
import "./SecondaryButton-C9TQBbBR.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "react-quill";
import "@radix-ui/react-collapsible";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./ApplicationLogo-Ciywr56m.js";
import "./logo-Bjl7k8Lf.js";
import "@headlessui/react";
const Create = ({
  estate,
  counties,
  types,
  hashtagGroups,
  images,
  videos
}) => {
  var _a, _b;
  const { data, setData, post, reset } = useForm({
    ...estate,
    description: estate.description ?? { en: "", hr: "" },
    hashtags: ((_a = estate == null ? void 0 : estate.hashtags) == null ? void 0 : _a.map((hash) => hash.id)) ?? [],
    area: estate.area_size,
    year_built: String(estate.year_built),
    year_renovated: String(estate.year_renovated),
    imagesToDelete: [],
    images: [],
    removeVideo: false,
    video: void 0
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.area_id) {
      return alert("Potrebno je unijeti lokaciju");
    }
    post(route("real-estate.update", { real_estate: estate }), {
      onSuccess: () => reset(),
      forceFormData: true
    });
  };
  const [selectedCounty, setSelectedCounty] = useState(
    counties.find((c) => c.id === estate.area.city.county.id)
  );
  const [selectedCity, setSelectedCity] = useState(
    (_b = counties.find((c) => c.id === estate.area.city.county.id)) == null ? void 0 : _b.cities.find((city) => city.id === estate.area.city.id)
  );
  return /* @__PURE__ */ jsx(AuthenticatedLayout, { header: "Kreiraj Nekretninu", children: /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxs("form", { encType: "multipart/form-data", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(
      TranslatableInput,
      {
        label: "Naziv",
        setData,
        value: data
      }
    ),
    /* @__PURE__ */ jsx(
      TranslatableBlockInput,
      {
        value: data,
        label: "Opis",
        setData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center gap-x-4", children: [
      /* @__PURE__ */ jsxs(InputLabel, { htmlFor: "featured", className: "text-lg mt-4", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            className: "mr-2",
            id: "featured",
            name: "featured",
            checked: data.featured,
            onChange: (e) => setData("featured", e.target.checked)
          }
        ),
        "Istaknuto?"
      ] }),
      /* @__PURE__ */ jsxs(
        InputLabel,
        {
          htmlFor: "parkingAvailable",
          className: "text-lg mt-4",
          children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                className: "mr-2",
                id: "parkingAvailable",
                name: "parkingAvailable",
                checked: data.parking_available,
                onChange: (e) => setData(
                  "parking_available",
                  e.target.checked
                )
              }
            ),
            "Parking?"
          ]
        }
      ),
      data.parking_available && /* @__PURE__ */ jsxs(
        InputLabel,
        {
          htmlFor: "parkingSpaces",
          className: "text-lg mt-4",
          children: [
            "Broj mjesta?",
            /* @__PURE__ */ jsx(
              TextInput,
              {
                className: "ml-2 w-16",
                id: "parkingSpaces",
                name: "parkingSpaces",
                value: data.parking_spaces ?? void 0,
                onChange: (e) => setData(
                  "parking_spaces",
                  isNaN(Number(e.target.value)) ? 0 : Number(e.target.value)
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(InputLabel, { htmlFor: "rooms", className: "text-lg mt-4", children: [
        "Broj Soba?",
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "ml-2 w-16",
            id: "rooms",
            name: "rooms",
            value: data.rooms ?? void 0,
            onChange: (e) => setData(
              "rooms",
              isNaN(Number(e.target.value)) ? 0 : Number(e.target.value)
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(InputLabel, { htmlFor: "area", className: "text-lg mt-4", children: [
        "Površina",
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "ml-2 w-16",
            id: "area",
            name: "area",
            value: data.area,
            onChange: (e) => setData(
              "area",
              isNaN(Number(e.target.value)) ? 0 : Number(e.target.value)
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(InputLabel, { htmlFor: "price", className: "text-lg mt-4", children: [
        "Cijena",
        /* @__PURE__ */ jsx(
          TextInput,
          {
            className: "ml-2 w-16",
            id: "price",
            name: "price",
            value: data.price,
            onChange: (e) => setData(
              "price",
              isNaN(Number(e.target.value)) ? 0 : Number(e.target.value)
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        InputLabel,
        {
          htmlFor: "yearBuilt",
          className: "text-lg mt-4",
          children: [
            "Godina Izgradnje",
            /* @__PURE__ */ jsx(
              TextInput,
              {
                className: "ml-2 w-16",
                id: "yearBuilt",
                type: "text",
                name: "yearBuilt",
                value: data.year_built,
                onChange: (e) => {
                  setData("year_built", e.target.value);
                }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        InputLabel,
        {
          htmlFor: "yearRenovated",
          className: "text-lg mt-4",
          children: [
            "Godina Zadnje Renovacije",
            /* @__PURE__ */ jsx(
              TextInput,
              {
                className: "ml-2 w-16",
                id: "yearRenovated",
                name: "yearRenovated",
                value: data.year_renovated,
                onChange: (e) => {
                  setData("year_renovated", e.target.value);
                }
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center gap-x-4 my-4", children: /* @__PURE__ */ jsxs(InputLabel, { htmlFor: "estateType", className: "text-lg", children: [
      "Tip Nekretnine",
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: "estateType",
          name: "estateType",
          className: "rounded-md ml-4",
          value: data == null ? void 0 : data.estate_type_id,
          required: true,
          onChange: (e) => {
            setData(
              "estate_type_id",
              Number(e.target.value)
            );
          },
          children: [
            /* @__PURE__ */ jsx("option", { hidden: true, value: void 0, children: "Odaberi Tip" }),
            types.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, children: c.name.hr }, c.id))
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          "Podaci o vlasniku",
          /* @__PURE__ */ jsxs("div", { className: "pl-4 pt-2", children: [
            /* @__PURE__ */ jsxs(
              InputLabel,
              {
                htmlFor: "ownerName",
                className: "text-lg",
                children: [
                  "Ime i Prezine",
                  /* @__PURE__ */ jsx(
                    TextInput,
                    {
                      className: "ml-2",
                      id: "ownerName",
                      name: "ownerName",
                      required: true,
                      value: data.owner_name,
                      onChange: (e) => setData(
                        "owner_name",
                        e.target.value
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              InputLabel,
              {
                htmlFor: "ownerContact",
                className: "text-lg mt-4",
                children: [
                  "Kontakt",
                  /* @__PURE__ */ jsx(
                    TextInput,
                    {
                      className: "ml-2 ",
                      id: "ownerContact",
                      required: true,
                      name: "ownerContact",
                      value: data.owner_contact,
                      onChange: (e) => setData(
                        "owner_contact",
                        e.target.value
                      )
                    }
                  )
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          "Lokacija",
          /* @__PURE__ */ jsxs("div", { className: "pl-4 pt-2 flex flex-col gap-y-4", children: [
            /* @__PURE__ */ jsxs(
              InputLabel,
              {
                htmlFor: "county",
                className: "text-lg",
                children: [
                  "Županija",
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "county",
                      name: "county",
                      required: true,
                      className: "rounded-md ml-4",
                      value: selectedCounty == null ? void 0 : selectedCounty.id,
                      onChange: (e) => {
                        setSelectedCounty(
                          counties.find(
                            (c) => String(c.id) === e.target.value
                          )
                        );
                        setSelectedCity(void 0);
                        setData("area_id", void 0);
                        setData(
                          "coordinates",
                          void 0
                        );
                      },
                      children: [
                        /* @__PURE__ */ jsx("option", { hidden: true, value: void 0, children: "Odaberi Županiju" }),
                        counties.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, children: c.name.hr }, c.id))
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              InputLabel,
              {
                htmlFor: "city",
                className: "text-lg",
                children: [
                  "Grad",
                  selectedCounty == null ? void 0 : selectedCounty.id,
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "city",
                      required: true,
                      disabled: !selectedCounty,
                      name: "city",
                      value: selectedCity == null ? void 0 : selectedCity.id,
                      className: "rounded-md ml-4",
                      onChange: (e) => {
                        setSelectedCity(
                          selectedCounty == null ? void 0 : selectedCounty.cities.find(
                            (c) => String(c.id) === e.target.value
                          )
                        );
                        setData("area_id", void 0);
                        setData(
                          "coordinates",
                          void 0
                        );
                      },
                      children: [
                        /* @__PURE__ */ jsx("option", { hidden: true, value: void 0, children: "Odaberi Grad" }),
                        selectedCounty == null ? void 0 : selectedCounty.cities.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, children: c.name }))
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              InputLabel,
              {
                htmlFor: "area",
                className: "text-lg",
                children: [
                  "Naselje",
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "area",
                      name: "area",
                      className: "rounded-md ml-4",
                      required: true,
                      disabled: !selectedCity,
                      onChange: (e) => {
                        setData(
                          "coordinates",
                          void 0
                        );
                        setData(
                          "area_id",
                          Number(
                            e.currentTarget.value
                          )
                        );
                      },
                      value: data.area_id,
                      children: [
                        /* @__PURE__ */ jsx("option", { hidden: true, value: void 0, children: "Odaberi Naselje" }),
                        selectedCity == null ? void 0 : selectedCity.areas.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, children: c.name }))
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              InputLabel,
              {
                htmlFor: "address",
                className: "text-lg",
                children: [
                  "Adresa",
                  /* @__PURE__ */ jsx(
                    TextInput,
                    {
                      className: "ml-2",
                      id: "address",
                      name: "address",
                      required: true,
                      value: data.address,
                      onChange: (e) => setData(
                        "address",
                        e.target.value
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              InputLabel,
              {
                htmlFor: "radius",
                className: "text-lg",
                children: [
                  "Radius",
                  /* @__PURE__ */ jsx(
                    TextInput,
                    {
                      className: "ml-2",
                      id: "radius",
                      type: "range",
                      min: 1,
                      max: 1e4,
                      name: "radius",
                      value: data.radius,
                      onChange: (e) => setData(
                        "radius",
                        Number(e.target.value)
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    TextInput,
                    {
                      className: "ml-2",
                      id: "radius",
                      type: "number",
                      min: 0,
                      max: 1e4,
                      name: "radius",
                      value: data.radius,
                      onChange: (e) => setData(
                        "radius",
                        Math.max(
                          0,
                          Math.min(
                            Number(
                              e.target.value
                            ),
                            1e4
                          )
                        )
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              MapInput,
              {
                setData: (val) => setData("coordinates", val),
                value: data.coordinates,
                address: data.address,
                area: selectedCity == null ? void 0 : selectedCity.areas.find(
                  (a) => a.id === data.area_id
                ),
                county: selectedCounty,
                radius: data.radius
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "h-full", children: [
        /* @__PURE__ */ jsx("p", { className: "py-2 text-left", children: "Hashtags" }),
        hashtagGroups.map((group) => /* @__PURE__ */ jsxs("div", { children: [
          group.name.hr,
          /* @__PURE__ */ jsx("div", { className: "px-4 grid grid-cols-4 mb-4", children: group.hashtags.map((hashtag) => /* @__PURE__ */ jsxs(
            InputLabel,
            {
              htmlFor: `${group.id}_${hashtag.id}`,
              children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    className: "mr-2",
                    id: `${group.id}_${hashtag.id}`,
                    name: `${group.id}_${hashtag.id}`,
                    defaultChecked: data.hashtags.includes(
                      hashtag.id
                    ),
                    onChange: (e) => {
                      const checked = e.target.checked;
                      setData(
                        "hashtags",
                        !checked ? data.hashtags.filter(
                          (hash) => hash !== hashtag.id
                        ) : [
                          ...data.hashtags,
                          hashtag.id
                        ]
                      );
                    }
                  }
                ),
                hashtag.name.hr
              ]
            },
            `${group.id}_${hashtag.id}`
          )) })
        ] }, "Group_" + group.id))
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      ImageArrayInput,
      {
        images: data.images,
        setImages: (imgs) => setData("images", imgs)
      }
    ),
    /* @__PURE__ */ jsx("div", { children: images.filter(
      (image) => !data.imagesToDelete.includes(image.id)
    ).map((image) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-row items-end gap-x-6 my-4",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image.original_url,
              alt: image.alt_text.hr,
              style: {
                width: "100px",
                height: "100px",
                objectFit: "cover"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => setData("imagesToDelete", [
                ...data.imagesToDelete,
                image.id
              ]),
              children: "Ukloni"
            }
          )
        ]
      },
      image.id
    )) }),
    /* @__PURE__ */ jsx("p", { className: "mt-8", children: "Video" }),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        type: "file",
        accept: "video/*",
        onChange: (e) => {
          var _a2, _b2;
          setData("video", (_b2 = (_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.files) == null ? void 0 : _b2[0]);
        }
      }
    ),
    /* @__PURE__ */ jsxs(InputLabel, { htmlFor: "removeVideo", className: "text-lg mt-4", children: [
      /* @__PURE__ */ jsx(
        Checkbox,
        {
          className: "mr-2",
          id: "removeVideo",
          name: "removeVideo",
          checked: data.removeVideo,
          onChange: (e) => setData("removeVideo", e.target.checked)
        }
      ),
      "Ukloni postojeći video?"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full flex items-end justify-end", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "mt-4 ml-auto", type: "submit", children: "Spremi" }) })
  ] }) }) });
};
export {
  Create as default
};
