import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn } from "./utils-H80jjgLf.js";
import { Link } from "@inertiajs/react";
import * as React from "react";
const Breadcrumbs = ({ items }) => {
  if (items.length < 2) return null;
  return /* @__PURE__ */ jsx(
    "ol",
    {
      role: "navigation",
      className: "flex items-center mt-4 capitalize font-semibold flex-wrap",
      children: items.map(({ url, label }, i) => /* @__PURE__ */ jsxs(
        "li",
        {
          className: cn(
            "flex items-center text-xs sm:text-xl",
            !(i === items.length - 1) && "text-gray-500"
          ),
          children: [
            /* @__PURE__ */ jsx(Link, { href: url, children: label }),
            !(i === items.length - 1) && /* @__PURE__ */ jsx("span", { className: "mx-4", children: ">" })
          ]
        },
        url
      ))
    }
  );
};
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "border text-sm border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground !theme flex h-9 w-full rounded-md  px-3 py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
export {
  Breadcrumbs as B,
  Input as I
};
