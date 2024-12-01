import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { T as TranslatableInput, C as Collapsible } from "./TranslatableInput-IuRL4WPO.js";
import { B as Button } from "./button-uGIV1LX6.js";
import { T as TextInput } from "./TextInput-uXC4T8wO.js";
import { useState, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
/* empty css                 */
import { S as SecondaryButton } from "./SecondaryButton-C9TQBbBR.js";
import { c as cn } from "./utils-H80jjgLf.js";
import { I as InputLabel } from "./InputLabel-CE_n4Upz.js";
import ReactQuill from "react-quill";
import { C as Checkbox } from "./Checkbox-Bd8bJ3HH.js";
const ImageArrayInput = ({
  images,
  setImages
}) => {
  const handleFileChange = (e) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file),
      file,
      name: { en: "", hr: "" }
    }));
    setImages([...images, ...newImages]);
  };
  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };
  const handleAltChange = (index, name) => {
    setImages(
      images.map((image, i) => i === index ? { ...image, name } : image)
    );
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { children: "Slike" }),
    /* @__PURE__ */ jsx(
      TextInput,
      {
        type: "file",
        multiple: true,
        accept: "image/*",
        onChange: handleFileChange
      }
    ),
    /* @__PURE__ */ jsx("div", { children: images.map((image, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-row items-end gap-x-6 my-4",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image.id,
              alt: image.name.hr,
              style: {
                width: "100px",
                height: "100px",
                objectFit: "cover"
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-36", children: /* @__PURE__ */ jsx(
            TranslatableInput,
            {
              label: "Alt Text",
              value: image,
              setData: (_, val) => handleAltChange(index, val)
            }
          ) }),
          /* @__PURE__ */ jsx(Button, { onClick: () => handleRemoveImage(index), children: "Ukloni" })
        ]
      },
      image.id
    )) })
  ] });
};
const MapInput = ({
  county,
  area,
  address,
  radius,
  value,
  setData
}) => {
  const [geopoints, setGeopoints] = useState(
    value
  );
  const key = useMemo(() => {
    return JSON.stringify(geopoints) + radius + JSON.stringify(area);
  }, [geopoints, radius]);
  useEffect(() => {
    const fetchLocation = async () => {
      if (county && area && address) {
        fetch(
          `https://nominatim.openstreetmap.org/search?country=Croatia&city=${area.name}&county=${county == null ? void 0 : county.name.hr}&address=${address}&format=json&addressdetails=1&limit=1`,
          {
            headers: {
              Accept: "application/json",
              "User-Agent": "valentino.janjac@gmail.com"
            }
          }
        ).then((res) => res.json()).then((res) => {
          if (res[0]) {
            setGeopoints([
              Number(res[0].lat),
              Number(res[0].lon)
            ]);
          }
        });
      }
    };
    fetchLocation();
  }, [county, area, address]);
  return geopoints && area && address && /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        width: "100%",
        height: 400
      },
      children: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          MapContainer,
          {
            style: { width: "100%", height: "90%" },
            center: geopoints,
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
              /* @__PURE__ */ jsx(Marker, { position: geopoints, children: /* @__PURE__ */ jsx(Popup, { children: "Približna Lokacija Nekretnine" }) }),
              /* @__PURE__ */ jsx(Circle, { center: geopoints, radius })
            ]
          },
          key
        ),
        /* @__PURE__ */ jsx(
          SecondaryButton,
          {
            className: cn("my-4 ml-auto", value && "!bg-green-500"),
            onClick: () => setData(geopoints),
            children: "Potvrdi Koordinate"
          }
        )
      ] })
    }
  );
};
const TranslatableBlockInput = ({
  label,
  value,
  setData
}) => {
  const [togglePreviewHr, setTogglePreviewHr] = useState(false);
  const [togglePreviewEn, setTogglePreviewEn] = useState(false);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Collapsible, { title: label, children: [
    /* @__PURE__ */ jsxs("div", { className: "px-4 py-1", children: [
      /* @__PURE__ */ jsx(InputLabel, { children: "HR" }),
      /* @__PURE__ */ jsxs("label", { children: [
        "Pretpregled",
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            className: "ml-2",
            checked: togglePreviewHr,
            onChange: () => setTogglePreviewHr((prev) => !prev)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          },
          children: [
            /* @__PURE__ */ jsx(
              ReactQuill,
              {
                value: value.description.hr,
                onChange: (e) => setData("description", {
                  ...value.description,
                  hr: e
                }),
                modules: {
                  toolbar: [
                    [
                      {
                        size: [
                          "small",
                          false,
                          "large",
                          "huge"
                        ]
                      }
                    ],
                    // Font size options
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    ["link", "image"],
                    [
                      {
                        color: [
                          null,
                          "#e60000",
                          "#ff9900",
                          "#ffff00",
                          "#008a00",
                          "#0066cc",
                          "#9933ff"
                        ]
                      },
                      {
                        background: [
                          null,
                          "#e60000",
                          "#ff9900",
                          "#ffff00",
                          "#008a00",
                          "#0066cc",
                          "#9933ff"
                        ]
                      }
                    ],
                    [{ align: [] }]
                  ]
                },
                placeholder: "..."
              }
            ),
            togglePreviewHr && /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#f9f9f9"
                },
                children: [
                  /* @__PURE__ */ jsx("h3", { children: "Pretpregled:" }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      dangerouslySetInnerHTML: {
                        __html: value.description.hr
                      }
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-4 py-1", children: [
      /* @__PURE__ */ jsx(InputLabel, { children: "EN" }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          },
          children: [
            /* @__PURE__ */ jsxs("label", { children: [
              "Pretpregled",
              /* @__PURE__ */ jsx(
                Checkbox,
                {
                  className: "ml-2",
                  checked: togglePreviewEn,
                  onChange: () => setTogglePreviewEn((prev) => !prev)
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              ReactQuill,
              {
                value: value.description.en,
                onChange: (e) => setData("description", {
                  ...value.description,
                  en: e
                }),
                modules: {
                  toolbar: [
                    [
                      {
                        size: [
                          "small",
                          false,
                          "large",
                          "huge"
                        ]
                      }
                    ],
                    // Font size options
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    ["link", "image"],
                    [
                      {
                        color: [
                          null,
                          "#e60000",
                          "#ff9900",
                          "#ffff00",
                          "#008a00",
                          "#0066cc",
                          "#9933ff"
                        ]
                      },
                      {
                        background: [
                          null,
                          "#e60000",
                          "#ff9900",
                          "#ffff00",
                          "#008a00",
                          "#0066cc",
                          "#9933ff"
                        ]
                      }
                    ],
                    [{ align: [] }]
                  ]
                },
                placeholder: "..."
              }
            ),
            togglePreviewEn && /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#f9f9f9"
                },
                children: [
                  /* @__PURE__ */ jsx("h3", { children: "Pretpregled:" }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      dangerouslySetInnerHTML: {
                        __html: value.description.en
                      }
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ] })
  ] }) });
};
export {
  ImageArrayInput as I,
  MapInput as M,
  TranslatableBlockInput as T
};
