import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { flexRender } from "@tanstack/react-table";
import * as React from "react";
import { c as cn } from "./utils-H80jjgLf.js";
const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
const BasicTable = ({
  tableDef,
  renderSubtable
}) => {
  var _a;
  return /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx(TableHeader, { className: cn("z-[1] border-spacing-x-12 bg-white"), children: tableDef.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(
      TableRow,
      {
        className: cn("border-collapse border-0 border-solid"),
        children: headerGroup.headers.map((header) => /* @__PURE__ */ jsx(
          TableHead,
          {
            colSpan: header.colSpan,
            onClick: header.column.getToggleSortingHandler(),
            style: { width: header.column.getSize() },
            className: cn(
              "h-8 border-collapse border-0 border-solid text-sm"
            ),
            children: header.isPlaceholder ? null : flexRender(
              header.column.columnDef.header,
              header.getContext()
            )
          },
          header.id
        ))
      },
      headerGroup.id
    )) }),
    /* @__PURE__ */ jsx(TableBody, { className: "bg-slate-50", children: ((_a = tableDef.getRowModel().rows) == null ? void 0 : _a.length) === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(
      TableCell,
      {
        colSpan: tableDef.getAllColumns().length,
        className: "h-12 text-center",
        children: "No Data"
      }
    ) }) : tableDef.getRowModel().rows.map((row) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        TableRow,
        {
          className: cn(
            "border-collapse border border-solid"
          ),
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(
            TableCell,
            {
              style: { width: cell.column.getSize() },
              className: cn(
                "border-collapse flex-1 border-0 border-solid text-lg text-black"
              ),
              children: flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              )
            },
            cell.id
          ))
        },
        row.id
      ),
      renderSubtable && /* @__PURE__ */ jsx(TableRow, { className: "w-full", children: /* @__PURE__ */ jsx(
        TableCell,
        {
          colSpan: tableDef.getAllColumns().length,
          className: "w-full border-t-2 border-t-gray-200 px-12",
          children: /* @__PURE__ */ jsx("div", { className: "w-full", children: renderSubtable(row.original) })
        }
      ) })
    ] }, row.id)) })
  ] });
};
export {
  BasicTable as B
};
