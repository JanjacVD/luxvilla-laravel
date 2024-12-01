import { jsxs, jsx } from "react/jsx-runtime";
import { I as Input, B as Breadcrumbs } from "./input-Cfm1T_h3.js";
import { ChevronRight, Check, Circle, ChevronDown } from "lucide-react";
import * as React from "react";
import { useState, useMemo } from "react";
import { u as useLocationFilter, C as Combobox, E as EstateCard } from "./EstateCard-_RCzW_o8.js";
import { useTranslation } from "react-i18next";
import { c as cn } from "./utils-H80jjgLf.js";
import { I as InputLabel } from "./InputLabel-CE_n4Upz.js";
import { B as Button } from "./button-uGIV1LX6.js";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Link, usePage, Head } from "@inertiajs/react";
import { A as AppLayout } from "./AppLayout-b6IHFJt8.js";
import "@radix-ui/react-popover";
import "cmdk";
import "@radix-ui/react-dialog";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./logo-Bjl7k8Lf.js";
import "../ssr.js";
import "@inertiajs/react/server";
import "react-dom/server";
import "i18next";
import "react-toastify";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMultiselect = ({
  values,
  options,
  handleValueClick,
  handleClear
}) => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(DropdownMenu, { open, children: [
    /* @__PURE__ */ jsx(
      DropdownMenuTrigger,
      {
        asChild: true,
        className: "w-full",
        onClick: (e) => {
          e.preventDefault();
          setOpen((prev) => !prev);
        },
        children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            className: "w-full block text-black whitespace-normal text-ellipsis overflow-hidden",
            children: options.flatMap((group) => group.hashtags).filter((val) => values.includes(String(val.id))).map((val) => val.name).toLocaleString()
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      DropdownMenuContent,
      {
        className: "w-auto min-w-96 max-h-96 grid grid-rows-8 ",
        onEscapeKeyDown: () => setOpen(false),
        onInteractOutside: () => setOpen(false),
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-full row-span-7 overflow-y-auto overflow-hidden", children: options.map((option) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(DropdownMenuLabel, { children: option.name }),
            option.hashtags.map((feature) => /* @__PURE__ */ jsx(
              DropdownMenuCheckboxItem,
              {
                checked: values.includes(
                  String(feature.id)
                ),
                onCheckedChange: () => handleValueClick(String(feature.id)),
                children: feature.name
              },
              feature.id
            )),
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {})
          ] }, option.id)) }),
          /* @__PURE__ */ jsx("div", { className: "row-span-1 w-full h-full flex items-end border-t", children: /* @__PURE__ */ jsx(Button, { onClick: handleClear, children: "Clear all" }) })
        ]
      }
    )
  ] });
};
const EstateFilterAdvanced = ({}) => {
  const { t } = useTranslation();
  const {
    location,
    types,
    selectedCounty,
    selectedCity,
    selectedArea,
    selectedType,
    listLink,
    hashtags,
    sortValue,
    area,
    isCollapsed,
    price,
    urlParams,
    selectedHashtags,
    handleClearFeatures,
    resetFilter,
    setArea,
    handleFeature,
    handleSort,
    setIsCollapsed,
    setPrice,
    setSelectedType,
    handleChangeCounty,
    handleChangeCity,
    renderSearchCount,
    handleChangeArea,
    renderTypeLabel,
    renderCountyLabel,
    renderCityLabel,
    renderAreaLabel
  } = useLocationFilter();
  const count = useMemo(
    () => renderSearchCount(),
    [
      selectedArea,
      selectedCity,
      selectedCounty,
      selectedHashtags,
      hashtags,
      price,
      area
    ]
  );
  return /* @__PURE__ */ jsxs("div", { className: "w-full mx-auto sm:mt-0 mt-24", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsCollapsed((prev) => !prev),
        className: "flex items-center justify-between w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-xl", "aria-label": "ToggleFilter", children: "Filter" }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: cn(
                "transition-all",
                isCollapsed && "rotate-180"
              ),
              width: 20,
              height: 20
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "form",
      {
        "aria-label": "Filters",
        "aria-hidden": isCollapsed,
        className: cn(
          "transition-all  place-items-center bg-opacity w-full mx-auto items-center  py-10  rounded-md grid xl:grid-cols-2 md:grid-cols-1 gap-4 4xl:grid-cols-4 p-9",
          isCollapsed && "h-0 !mt-0 overflow-hidden bg-red-50 opacity-0 p-0 "
        ),
        children: [
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
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col  text-white w-full", children: [
            /* @__PURE__ */ jsx("span", { className: "col-span-2 text-xl pr-4", id: "Square", children: t("estateFilter.square") }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-full gap-x-4", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex flex-col w-1/2",
                  "aria-labelledby": "Square",
                  children: /* @__PURE__ */ jsxs(
                    InputLabel,
                    {
                      htmlFor: "minArea",
                      className: "text-base",
                      "aria-label": t("estateFilter.from"),
                      children: [
                        t("estateFilter.from"),
                        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsx(
                            Input,
                            {
                              className: "text-black",
                              name: "minArea",
                              value: String((area == null ? void 0 : area.from) ?? ""),
                              onChange: (e) => setArea((prev) => ({
                                ...prev ?? {},
                                from: Number(e.target.value) >= 0 ? Number(e.target.value) : 0
                              }))
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            Button,
                            {
                              variant: "ghost",
                              size: "icon",
                              className: "absolute top-0 right-1",
                              onClick: (e) => {
                                e.preventDefault();
                                setArea((prev) => ({
                                  ...prev ?? {},
                                  from: void 0
                                }));
                              },
                              children: /* @__PURE__ */ jsx(Cross1Icon, {})
                            }
                          )
                        ] })
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex flex-col w-1/2 ml-auto",
                  "aria-labelledby": "Square",
                  children: /* @__PURE__ */ jsxs(
                    InputLabel,
                    {
                      className: "text-base",
                      htmlFor: "maxArea",
                      "aria-label": t("estateFilter.to"),
                      children: [
                        t("estateFilter.to"),
                        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsx(
                            Input,
                            {
                              className: "text-black",
                              name: "maxArea",
                              value: String((area == null ? void 0 : area.to) ?? ""),
                              onChange: (e) => setArea((prev) => ({
                                ...prev ?? {},
                                to: Number(e.target.value) >= 0 ? Number(e.target.value) : void 0
                              }))
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            Button,
                            {
                              variant: "ghost",
                              size: "icon",
                              className: "absolute top-0 right-1",
                              onClick: (e) => {
                                e.preventDefault();
                                setArea((prev) => ({
                                  ...prev ?? {},
                                  to: void 0
                                }));
                              },
                              children: /* @__PURE__ */ jsx(Cross1Icon, {})
                            }
                          )
                        ] })
                      ]
                    }
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col  text-white w-full", children: [
            /* @__PURE__ */ jsx("span", { className: "col-span-2 text-xl pr-4", id: "price", children: t("estateFilter.price") }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex flex-row w-full  gap-x-4",
                "aria-labelledby": "price",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex flex-col w-1/2", children: /* @__PURE__ */ jsxs(
                    InputLabel,
                    {
                      htmlFor: "minPrice",
                      className: "text-base",
                      children: [
                        t("estateFilter.from"),
                        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsx(
                            Input,
                            {
                              className: "text-black",
                              name: "minPrice",
                              value: String((price == null ? void 0 : price.from) ?? ""),
                              onChange: (e) => setPrice((prev) => ({
                                ...prev ?? {},
                                from: Number(e.target.value) >= 0 ? Number(e.target.value) : 0
                              }))
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            Button,
                            {
                              variant: "ghost",
                              size: "icon",
                              className: "absolute top-0 right-1",
                              onClick: (e) => {
                                e.preventDefault();
                                setPrice((prev) => ({
                                  ...prev ?? {},
                                  from: void 0
                                }));
                              },
                              children: /* @__PURE__ */ jsx(Cross1Icon, {})
                            }
                          )
                        ] })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "flex flex-col w-1/2 ml-auto",
                      "aria-labelledby": "price",
                      children: /* @__PURE__ */ jsxs(
                        InputLabel,
                        {
                          className: "text-base",
                          htmlFor: "maxPrice",
                          children: [
                            t("estateFilter.to"),
                            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                              /* @__PURE__ */ jsx(
                                Input,
                                {
                                  className: "text-black",
                                  name: "maxPrice",
                                  value: String((price == null ? void 0 : price.to) ?? ""),
                                  onChange: (e) => setPrice((prev) => ({
                                    ...prev ?? {},
                                    to: Number(e.target.value) >= 0 ? Number(e.target.value) : void 0
                                  }))
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                Button,
                                {
                                  variant: "ghost",
                                  size: "icon",
                                  className: "absolute top-0 right-1",
                                  onClick: (e) => {
                                    e.preventDefault();
                                    setPrice((prev) => ({
                                      ...prev ?? {},
                                      to: void 0
                                    }));
                                  },
                                  children: /* @__PURE__ */ jsx(Cross1Icon, {})
                                }
                              )
                            ] })
                          ]
                        }
                      )
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 sm:grid-cols-2 items-end h-full gap-x-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "col-span-2 text-xl pr-4", children: t("estateFilter.additional") }),
              /* @__PURE__ */ jsx(
                DropdownMultiselect,
                {
                  options: hashtags,
                  values: selectedHashtags,
                  handleValueClick: handleFeature,
                  handleClear: handleClearFeatures
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "col-span-2 text-xl pr-4", children: t("sort.sort") }),
              /* @__PURE__ */ jsx(
                Combobox,
                {
                  value: sortValue,
                  options: [
                    {
                      label: t("sort.priceAsc"),
                      value: "price_asc"
                    },
                    {
                      label: t("sort.priceDesc"),
                      value: "price_desc"
                    },
                    {
                      label: t("sort.dateDesc"),
                      value: "date_desc"
                    },
                    { label: t("sort.dateAsc"), value: "date_asc" }
                  ],
                  placeholder: t("sort.sort"),
                  setValue: handleSort
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full grid grid-cols-1 sm:grid-cols-2 items-end h-full gap-x-4 gap-y-4", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                "aria-label": "Reset",
                className: "transition ease-in-out px-4 w-full h-9 rounded-md bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center duration-300 mb-[1px] text-black",
                href: listLink,
                data: urlParams,
                children: `${t("estateFilter.search")} (${count})`
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                "aria-label": "Reset",
                className: "transition ease-in-out px-4 w-full h-9 rounded-md bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center duration-300 mb-[1px] text-black",
                onClick: resetFilter,
                children: "Reset"
              }
            )
          ] })
        ]
      }
    )
  ] });
};
const FilteredEstateList = () => {
  const { estates } = usePage().props;
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3  w-full", children: estates.map((estate, i) => /* @__PURE__ */ jsx(
    EstateCard,
    {
      estate,
      className: "min-h-96 !w-full"
    },
    i
  )) });
};
const EstateList = ({
  types,
  params,
  locale,
  location,
  estates
}) => {
  var _a, _b, _c, _d, _e;
  const { t } = useTranslation();
  const type = useMemo(
    () => types.find((t2) => t2.slug === params.typeSlug) ?? {
      slug: "all",
      name: t("allEstates")
    },
    [params]
  );
  const breadcrumbs = useMemo(() => {
    const { areaSlug, citySlug, countySlug } = params;
    const county = location.find((c) => c.slug === countySlug);
    const city = county == null ? void 0 : county.cities.find((c) => c.slug === citySlug);
    const area = city == null ? void 0 : city.areas.find((a) => a.slug === areaSlug);
    const paramArr = [type, county, city, area];
    const breadcrumbs2 = paramArr.reduce(
      (acc, item, index) => {
        var _a2, _b2, _c2, _d2;
        if (item == null ? void 0 : item.name) {
          const query = {
            typeSlug: (_a2 = paramArr[0]) == null ? void 0 : _a2.slug,
            countySlug: index >= 1 ? (_b2 = paramArr[1]) == null ? void 0 : _b2.slug : void 0,
            citySlug: index >= 2 ? (_c2 = paramArr[2]) == null ? void 0 : _c2.slug : void 0,
            areaSlug: index >= 3 ? (_d2 = paramArr[3]) == null ? void 0 : _d2.slug : void 0,
            locale
          };
          acc.push({
            label: item.name,
            url: route("estates.list", query)
          });
        }
        return acc;
      },
      []
    );
    return breadcrumbs2;
  }, [params, location, type]);
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: (_a = breadcrumbs == null ? void 0 : breadcrumbs.at(-1)) == null ? void 0 : _a.label }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: breadcrumbs.length < 2 ? t("exploreEstatesGeneral") : t("exploreEstates", {
            name: (_b = breadcrumbs == null ? void 0 : breadcrumbs.at(-1)) == null ? void 0 : _b.label
          })
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "keywords" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:title",
          content: (_c = breadcrumbs == null ? void 0 : breadcrumbs.at(-1)) == null ? void 0 : _c.label
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: breadcrumbs.length < 2 ? t("exploreEstatesGeneral") : t("exploreEstates", {
            name: (_d = breadcrumbs == null ? void 0 : breadcrumbs.at(-1)) == null ? void 0 : _d.label
          })
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "apple-touch-icon", href: "/apple-icon.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "/logo.png" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: (_e = breadcrumbs == null ? void 0 : breadcrumbs.at(-1)) == null ? void 0 : _e.url }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative flex min-h-screen p-4 pb-20 gap-16 sm:p-20", children: /* @__PURE__ */ jsx("div", { className: "relative z-10 sm:p-10 w-full h-full", children: /* @__PURE__ */ jsxs(
      "section",
      {
        className: "flex flex-col min-h-[100svh] ",
        "aria-label": t("salesIn"),
        children: [
          /* @__PURE__ */ jsx(EstateFilterAdvanced, {}),
          /* @__PURE__ */ jsx(Breadcrumbs, { items: breadcrumbs }),
          /* @__PURE__ */ jsx("h1", { className: "sm:text-7xl text-5xl mb-4 mt-16", children: type == null ? void 0 : type.name }),
          /* @__PURE__ */ jsx(FilteredEstateList, {})
        ]
      }
    ) }) })
  ] });
};
export {
  EstateList as default
};
