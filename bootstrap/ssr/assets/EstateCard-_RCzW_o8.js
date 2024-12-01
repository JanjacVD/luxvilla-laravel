import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useMemo } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { c as cn } from "./utils-H80jjgLf.js";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { useTranslation } from "react-i18next";
import { B as Button } from "./button-uGIV1LX6.js";
import { Command as Command$1 } from "cmdk";
import { X, Search } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { usePage, Link } from "@inertiajs/react";
const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn(
      "max-h-[300px] overflow-y-auto overflow-x-hidden",
      className
    ),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(
  Command$1.Empty,
  {
    ref,
    className: "py-6 text-center text-sm",
    ...props
  }
));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
const Combobox = ({
  value,
  options,
  placeholder,
  disabled = false,
  renderLabel,
  setValue
}) => {
  var _a;
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(
      PopoverTrigger,
      {
        asChild: true,
        className: "bg-white text-black",
        "aria-label": `${t("common.select")} ${placeholder}`,
        children: /* @__PURE__ */ jsxs(
          Button,
          {
            disabled,
            variant: "outline",
            role: "combobox",
            "aria-expanded": open,
            className: "w-full justify-between !theme",
            children: [
              value ? renderLabel ? renderLabel(
                options == null ? void 0 : options.find(
                  (option) => option.value === value
                )
              ) ?? placeholder : ((_a = options.find((option) => option.value === value)) == null ? void 0 : _a.label) ?? placeholder : placeholder,
              /* @__PURE__ */ jsx(CaretSortIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-full p-0 theme", children: /* @__PURE__ */ jsxs(Command, { children: [
      /* @__PURE__ */ jsx(CommandInput, { placeholder, className: "h-9" }),
      /* @__PURE__ */ jsxs(CommandList, { children: [
        /* @__PURE__ */ jsx(CommandEmpty, { children: t("estateFilter.noOptions") }),
        /* @__PURE__ */ jsx(CommandGroup, { children: options.map((option) => /* @__PURE__ */ jsxs(
          CommandItem,
          {
            className: "theme",
            value: option.label,
            onSelect: () => {
              setValue(
                option.value === value ? "" : option.value
              );
              setOpen(false);
            },
            children: [
              renderLabel ? renderLabel(option) : option.label,
              /* @__PURE__ */ jsx(
                CheckIcon,
                {
                  className: cn(
                    "ml-auto h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )
                }
              )
            ]
          },
          option.value
        )) })
      ] })
    ] }) })
  ] });
};
const useLocationFilter = () => {
  var _a;
  const page = usePage();
  const { location, types, hashtags, locale, params, query } = page.props;
  const [selectedCounty, setSelectedCounty] = useState(location.find((c) => c.slug === (params == null ? void 0 : params.countySlug)));
  const [selectedCity, setSelectedCity] = useState(selectedCounty == null ? void 0 : selectedCounty.cities.find((c) => c.slug === (params == null ? void 0 : params.citySlug)));
  const [selectedArea, setSelectedArea] = useState(selectedCity == null ? void 0 : selectedCity.areas.find((a) => a.slug === (params == null ? void 0 : params.areaSlug)));
  const [selectedType, setSelectedType] = useState(
    (_a = types.find((t) => t.slug === (params == null ? void 0 : params.typeSlug))) == null ? void 0 : _a.id.toString()
  );
  const [selectedHashtags, setSelectedHashtags] = useState(
    (query == null ? void 0 : query.hashtags) ?? []
  );
  const handleChangeCounty = (val) => {
    setSelectedCounty(location.find((c) => String(c.id) === val));
    setSelectedCity(void 0);
    setSelectedArea(void 0);
  };
  const handleChangeCity = (val) => {
    var _a2;
    setSelectedCity(
      (_a2 = selectedCounty == null ? void 0 : selectedCounty.cities) == null ? void 0 : _a2.find((c) => c.id === Number(val))
    );
    setSelectedArea(void 0);
  };
  const handleChangeArea = (val) => {
    var _a2;
    setSelectedArea((_a2 = selectedCity == null ? void 0 : selectedCity.areas) == null ? void 0 : _a2.find((c) => c.id === Number(val)));
  };
  const handleFeature = (feat) => {
    setSelectedHashtags(
      (prev) => prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
    );
  };
  const renderTypeLabel = (val) => {
    if (!val) return void 0;
    const getCount = () => {
      var _a2;
      if (!selectedCounty && !selectedCity && !selectedArea) {
        return location.flatMap(
          (c) => c.cities.flatMap(
            (city) => city.areas.flatMap(
              (area2) => {
                var _a3;
                return (_a3 = area2 == null ? void 0 : area2.estates) == null ? void 0 : _a3.filter(
                  (estate) => estate.estateTypeId === Number(val == null ? void 0 : val.value)
                );
              }
            )
          )
        ).length;
      } else if (selectedCounty && !selectedCity && !selectedArea) {
        return selectedCounty == null ? void 0 : selectedCounty.cities.flatMap(
          (city) => city.areas.flatMap(
            (area2) => {
              var _a3;
              return (_a3 = area2 == null ? void 0 : area2.estates) == null ? void 0 : _a3.filter(
                (estate) => estate.estateTypeId === Number(val == null ? void 0 : val.value)
              );
            }
          )
        ).length;
      } else if (selectedCounty && selectedCity && !selectedArea) {
        return selectedCity.areas.flatMap(
          (area2) => {
            var _a3;
            return (_a3 = area2.estates) == null ? void 0 : _a3.filter(
              (estate) => estate.estateTypeId === Number(val.value)
            );
          }
        ).length;
      } else if (selectedCounty && selectedCity && selectedArea) {
        return (_a2 = selectedArea.estates) == null ? void 0 : _a2.filter(
          (estate) => estate.estateTypeId === Number(selectedType)
        ).length;
      } else return "";
    };
    return `${val.label} (${getCount()})`;
  };
  const renderCountyLabel = (val) => {
    if (!val) return void 0;
    const c = location.find((county) => county.id === Number(val == null ? void 0 : val.value));
    const allEstates = c == null ? void 0 : c.cities.flatMap(
      (city) => city.areas.flatMap(
        (area2) => {
          var _a2;
          return (_a2 = area2.estates) == null ? void 0 : _a2.filter((estate) => {
            if (selectedType) {
              return String(estate.estateTypeId) === selectedType;
            }
            return estate;
          }).flatMap((estate) => estate);
        }
      )
    ).length;
    return `${val == null ? void 0 : val.label} (${allEstates})`;
  };
  const renderCityLabel = (val) => {
    var _a2;
    if (!val) return void 0;
    const allEstates = (_a2 = selectedCounty == null ? void 0 : selectedCounty.cities.find((city) => city.id === Number(val.value))) == null ? void 0 : _a2.areas.flatMap(
      (area2) => {
        var _a3;
        return (_a3 = area2.estates) == null ? void 0 : _a3.filter((estate) => {
          if (selectedType) {
            return String(estate.estateTypeId) === selectedType;
          }
          return estate;
        }).flatMap((estate) => estate);
      }
    ).length;
    return `${val == null ? void 0 : val.label} (${allEstates})`;
  };
  const renderAreaLabel = (val) => {
    var _a2, _b, _c;
    if (!val) return void 0;
    const allEstates = (_c = (_b = (_a2 = selectedCity == null ? void 0 : selectedCity.areas) == null ? void 0 : _a2.find((area2) => area2.id === Number(val.value))) == null ? void 0 : _b.estates) == null ? void 0 : _c.filter((estate) => {
      if (selectedType) {
        return estate.estateTypeId === Number(selectedType);
      }
      return estate;
    }).length;
    return `${val == null ? void 0 : val.label} (${allEstates})`;
  };
  const listLink = useMemo(() => {
    const type = selectedType ? types.find((type2) => type2.id === Number(selectedType)) : void 0;
    return route("estates.list", {
      typeSlug: (type == null ? void 0 : type.slug) ?? "all",
      countySlug: selectedCounty == null ? void 0 : selectedCounty.slug,
      citySlug: selectedCity == null ? void 0 : selectedCity.slug,
      areaSlug: selectedArea == null ? void 0 : selectedArea.slug,
      locale
    });
  }, [selectedArea, selectedCity, selectedCounty, selectedType]);
  const [price, setPrice] = useState({
    from: (query == null ? void 0 : query.minPrice) ? Number(query == null ? void 0 : query.minPrice) : void 0,
    to: (query == null ? void 0 : query.maxPrice) ? Number(query == null ? void 0 : query.maxPrice) : void 0
  });
  const [area, setArea] = useState({
    from: (query == null ? void 0 : query.minArea) ? Number(query == null ? void 0 : query.minArea) : void 0,
    to: (query == null ? void 0 : query.maxArea) ? Number(query == null ? void 0 : query.maxArea) : void 0
  });
  const [sort, setSort] = useState(
    (query == null ? void 0 : query.sortBy) && query.sortOrder ? {
      dir: query.sortOrder,
      field: query.sortBy
    } : void 0
  );
  const handleSort = (val) => {
    const input = val.split("_");
    setSort({ field: input[0], dir: input[1] });
  };
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sortValue = sort ? `${sort.field}_${sort.dir}` : void 0;
  const handleClearFeatures = () => {
    setSelectedHashtags([]);
  };
  const renderSearchCount = () => {
    let estates = [];
    if (!selectedCounty && !selectedCity && !selectedArea) {
      estates = location.flatMap(
        (c) => {
          var _a2;
          return (_a2 = (c == null ? void 0 : c.cities) ?? []) == null ? void 0 : _a2.flatMap(
            (city) => (city.areas ?? []).flatMap(
              (area2) => (area2 == null ? void 0 : area2.estates) ?? []
            )
          );
        }
      ) ?? [];
    } else if (selectedCounty && !selectedCity && !selectedArea) {
      estates = selectedCounty == null ? void 0 : selectedCounty.cities.flatMap(
        (city) => city.areas.flatMap((area2) => (area2 == null ? void 0 : area2.estates) ?? [])
      );
    } else if (selectedCounty && selectedCity && !selectedArea) {
      estates = selectedCity.areas.flatMap((area2) => area2.estates ?? []);
    } else if (selectedCounty && selectedCity && selectedArea) {
      estates = selectedArea.estates ?? [];
    }
    if (selectedType) {
      estates = estates.filter(
        (estate) => estate.estateTypeId === Number(selectedType)
      );
    }
    estates = estates.filter((estate) => {
      let shouldReturn = true;
      if (shouldReturn && (price == null ? void 0 : price.from)) {
        shouldReturn = estate.price >= price.from;
      }
      if (shouldReturn && (price == null ? void 0 : price.to)) {
        shouldReturn = estate.price <= price.to;
      }
      if (shouldReturn && (area == null ? void 0 : area.from)) {
        shouldReturn = estate.areaSize >= area.from;
      }
      if (shouldReturn && (area == null ? void 0 : area.to)) {
        shouldReturn = estate.areaSize <= area.to;
      }
      if (shouldReturn && selectedHashtags.length > 0) {
        shouldReturn = selectedHashtags.every(
          (hash) => estate.hashtags.includes(Number(hash))
        );
      }
      return shouldReturn;
    });
    return estates.length;
  };
  const urlParams = useMemo(() => {
    const query2 = {};
    if (price == null ? void 0 : price.from) {
      query2["minPrice"] = price.from;
    }
    if (price == null ? void 0 : price.to) {
      query2["maxPrice"] = price.to;
    }
    if (area == null ? void 0 : area.from) {
      query2["minArea"] = area.from;
    }
    if (area == null ? void 0 : area.to) {
      query2["maxArea"] = area.to;
    }
    if (selectedHashtags.length > 0) {
      query2["hashtags"] = selectedHashtags;
    }
    if (sort) {
      query2["sortBy"] = sort.field;
      query2["sortOrder"] = sort.dir;
    }
    return query2;
  }, [price, area, selectedHashtags, sort]);
  const resetFilter = (e) => {
    e.preventDefault();
    setSelectedType(void 0);
    setSelectedCounty(void 0);
    setSelectedCity(void 0);
    setSelectedArea(void 0);
    setPrice(void 0);
    setArea(void 0);
    setSort(void 0);
    handleClearFeatures();
  };
  return {
    location,
    types,
    selectedCounty,
    selectedCity,
    selectedArea,
    selectedType,
    listLink,
    price,
    area,
    hashtags,
    isCollapsed,
    sortValue,
    sort,
    selectedHashtags,
    urlParams,
    setSelectedHashtags,
    resetFilter,
    handleFeature,
    handleSort,
    setArea,
    setIsCollapsed,
    setPrice,
    setSelectedType,
    handleChangeCounty,
    handleChangeCity,
    handleChangeArea,
    renderSearchCount,
    renderTypeLabel,
    renderCountyLabel,
    renderCityLabel,
    renderAreaLabel,
    handleClearFeatures
  };
};
const SquareSvg = "/build/assets/squareFoot-l4pOtx0h.svg";
const CalendarSvg = "/build/assets/calendar-Kn9UZ9KM.svg";
const ImageSlideshow = ({ estate }) => {
  var _a;
  const [currentIndex, setCurrentIndex] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-full", children: [
    (_a = estate.images) == null ? void 0 : _a.map((img, i) => {
      var _a2, _b, _c;
      return /* @__PURE__ */ jsx(
        "img",
        {
          id: img.altText + i,
          src: (_a2 = img == null ? void 0 : img.sources) == null ? void 0 : _a2.desktop,
          alt: img.altText ?? "",
          draggable: false,
          loading: "lazy",
          width: 400,
          height: 400,
          className: cn(
            `w-full h-full absolute opacity-0 object-cover select-none transition-all`,
            i === currentIndex && "opacity-100"
          ),
          srcSet: `${(_b = img == null ? void 0 : img.sources) == null ? void 0 : _b.mobile} 600w, ${(_c = img == null ? void 0 : img.sources) == null ? void 0 : _c.desktop} 1200w`,
          sizes: "(max-width: 600px) 100vw, 1200px"
        },
        img.altText + i
      );
    }),
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: (e) => e.stopPropagation(),
        className: "w-full z-10 absolute top-0 flex justify-center gap-x-2 items-center",
        children: estate.images.map((img, i) => /* @__PURE__ */ jsx(
          Button,
          {
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(i);
            },
            className: cn(
              `transition-all rounded-full h-5 w-5 p-0 border-2 bg-slate-50 hover:bg-stone-200`,
              i === currentIndex && "bg-stone-300"
            ),
            children: /* @__PURE__ */ jsx("span", { className: "w-2/5 h-2/5 bg-stone-100 rounded-full" })
          },
          img.altText + i
        ))
      }
    )
  ] });
};
const EstateCard = ({
  estate,
  ...props
}) => {
  const { locale } = usePage().props;
  return /* @__PURE__ */ jsx(
    Link,
    {
      href: route("estates.show", { estateId: estate.estateId, locale }),
      children: /* @__PURE__ */ jsxs(
        "article",
        {
          ...props,
          className: cn(
            "cursor-pointer relative h-96 sm:w-96 w-[calc(100vw-2rem)] z-0 bg-amber-200 shrink-0 snap-start overflow-hidden",
            props.className
          ),
          children: [
            /* @__PURE__ */ jsx(ImageSlideshow, { estate }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "w-full bg-black bg-opacity-60 text-white py-2 px-4 z-20 absolute bottom-0 left-0 h-1/3 flex flex-col",
                children: [
                  estate.name,
                  /* @__PURE__ */ jsxs(
                    "p",
                    {
                      className: "text-lg flex items-center",
                      children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: SquareSvg,
                            alt: "Area icon",
                            className: "mr-2",
                            draggable: false,
                            width: 20,
                            height: 20
                          }
                        ),
                        estate.areaSize,
                        " m²"
                      ]
                    }
                  ),
                  (estate.yearBuilt || estate.yearRenovated) && /* @__PURE__ */ jsxs(
                    "p",
                    {
                      className: "text-lg flex items-center",
                      children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: CalendarSvg,
                            alt: "Area icon",
                            className: "mr-2",
                            draggable: false,
                            width: 20,
                            height: 20
                          }
                        ),
                        estate.yearRenovated ?? estate.yearBuilt
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between mt-auto", children: [
                    estate.area.city.county.name,
                    " - ",
                    estate.area.name,
                    /* @__PURE__ */ jsxs("span", { "aria-label": "dict.estateCard.price", children: [
                      Number(estate.price).toFixed(2),
                      " €"
                    ] })
                  ] })
                ]
              }
            )
          ]
        }
      )
    }
  );
};
export {
  Combobox as C,
  EstateCard as E,
  useLocationFilter as u
};
