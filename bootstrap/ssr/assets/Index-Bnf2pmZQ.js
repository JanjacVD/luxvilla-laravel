import { jsx, jsxs } from "react/jsx-runtime";
import { B as BasicTable } from "./Table-CwfO25x8.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-D2ZQk8jz.js";
import { useReactTable, getCoreRowModel, getExpandedRowModel } from "@tanstack/react-table";
import { Link } from "@inertiajs/react";
import useHashtagGroupColumns from "./ColumnDefinitions-BlwmFOoS.js";
import { useState } from "react";
import HashtagTable from "./HashtagTable-CmBSAZtH.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "./ApplicationLogo-Ciywr56m.js";
import "./logo-Bjl7k8Lf.js";
import "@headlessui/react";
import "./DangerButton-B7to2Tbx.js";
import "./PrimaryButton-DgVfVBwo.js";
import "./SubtableColumnDefinitions-DA13n37w.js";
const Index = ({ groups }) => {
  const [expandedRowId, setExpandedRowId] = useState();
  const setExpanded = (val) => {
    setExpandedRowId((prev) => prev === val ? void 0 : val);
  };
  const { columns } = useHashtagGroupColumns({
    setExpandedRowId: setExpanded
  });
  const table = useReactTable({
    data: groups.sort(
      (a, b) => ("" + b.deleted_at).localeCompare(a.deleted_at + "")
    ),
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowCanExpand: () => true,
    getExpandedRowModel: getExpandedRowModel()
  });
  const renderSubtable = (group) => {
    if (group.id === expandedRowId) {
      return /* @__PURE__ */ jsx(HashtagTable, { hashtags: group.hashtags });
    }
  };
  return /* @__PURE__ */ jsx(AuthenticatedLayout, { header: "Hashtagovi", children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsx("div", { className: "py-4", children: /* @__PURE__ */ jsx(
      Link,
      {
        className: "bg-stone-800 text-white px-4 py-2 rounded-md",
        href: route("hashtag-group.create"),
        children: "Create"
      }
    ) }),
    /* @__PURE__ */ jsx(BasicTable, { tableDef: table, renderSubtable })
  ] }) });
};
export {
  Index as default
};
