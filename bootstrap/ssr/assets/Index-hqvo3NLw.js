import { jsx, jsxs } from "react/jsx-runtime";
import { B as BasicTable } from "./Table-CwfO25x8.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-D2ZQk8jz.js";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import useRealEstateColumns from "./ColumnDefinitions-Mda7N6LT.js";
import { Link } from "@inertiajs/react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "./ApplicationLogo-Ciywr56m.js";
import "./logo-Bjl7k8Lf.js";
import "@headlessui/react";
import "./DangerButton-B7to2Tbx.js";
import "./PrimaryButton-DgVfVBwo.js";
const Index = ({ estates }) => {
  const { columns } = useRealEstateColumns();
  const table = useReactTable({
    data: estates.sort(
      (a, b) => ("" + b.deleted_at).localeCompare(a.deleted_at + "")
    ),
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  return /* @__PURE__ */ jsx(AuthenticatedLayout, { header: "Nekretnine", children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsx("div", { className: "py-4", children: /* @__PURE__ */ jsx(
      Link,
      {
        className: "bg-stone-800 text-white px-4 py-2 rounded-md",
        href: route("real-estate.create"),
        children: "Create"
      }
    ) }),
    /* @__PURE__ */ jsx(BasicTable, { tableDef: table })
  ] }) });
};
export {
  Index as default
};
