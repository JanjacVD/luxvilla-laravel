import { jsxs, jsx } from "react/jsx-runtime";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { T as TextInput } from "./TextInput-uXC4T8wO.js";
import { I as InputLabel } from "./InputLabel-CE_n4Upz.js";
const Collapsible$1 = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
const Collapsible = ({
  title,
  children
}) => {
  return /* @__PURE__ */ jsxs(Collapsible$1, { defaultOpen: true, children: [
    /* @__PURE__ */ jsx(CollapsibleTrigger, { className: "border bg-stone-300 rounded-md py-2 px-4 w-full", children: title }),
    /* @__PURE__ */ jsx(CollapsibleContent, { children })
  ] });
};
const TranslatableInput = ({
  label,
  value,
  setData
}) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Collapsible, { title: label, children: [
    /* @__PURE__ */ jsxs("div", { className: "px-4 py-1", children: [
      /* @__PURE__ */ jsx(InputLabel, { children: "HR" }),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          required: true,
          className: "w-full",
          value: value.name.hr,
          onChange: (e) => setData("name", {
            ...value.name,
            hr: e.target.value
          })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-4 py-1", children: [
      /* @__PURE__ */ jsx(InputLabel, { children: "EN" }),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          required: true,
          className: "w-full",
          value: value.name.en,
          onChange: (e) => setData("name", {
            ...value.name,
            en: e.target.value
          })
        }
      )
    ] })
  ] }) });
};
export {
  Collapsible as C,
  TranslatableInput as T
};
