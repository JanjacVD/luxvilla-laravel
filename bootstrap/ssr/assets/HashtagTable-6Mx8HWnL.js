import { jsx } from "react/jsx-runtime";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import useHashtagColumnDefinitions from "./SubtableColumnDefinitions-CK_1eil4.js";
import { B as BasicTable } from "./Table-CwfO25x8.js";
import "./DangerButton-B7to2Tbx.js";
import "./PrimaryButton-DgVfVBwo.js";
import "@inertiajs/react";
import "react";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
const HashtagTable = ({ hashtags }) => {
  const { columns } = useHashtagColumnDefinitions();
  const table = useReactTable({
    data: hashtags.sort(
      (a, b) => ("" + b.deleted_at).localeCompare(a.deleted_at + "")
    ),
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  return /* @__PURE__ */ jsx(BasicTable, { tableDef: table });
};
export {
  HashtagTable as default
};
