import { jsx, jsxs } from "react/jsx-runtime";
import { D as DangerButton } from "./DangerButton-B7to2Tbx.js";
import { P as PrimaryButton } from "./PrimaryButton-DgVfVBwo.js";
import { Link, router } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
const useHashtagGroupColumns = ({
  setExpandedRowId
}) => {
  const handleDelete = (type) => {
    router.delete(route("hashtag-group.destroy", { hashtag_group: type }));
  };
  const handleRestore = (type) => {
    router.post(route("hashtag-group.restore", { hashtag_group: type }));
  };
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor((row) => row.name.en, {
      header: "Naziv Hrvatski",
      cell: ({
        row: {
          original: { name, id }
        }
      }) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "cursor-pointer",
          onClick: () => setExpandedRowId(id),
          children: name.hr
        }
      )
    }),
    columnHelper.accessor((row) => row.name.en, {
      header: "Naziv Engleski",
      cell: ({
        row: {
          original: { name, id }
        }
      }) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "cursor-pointer",
          onClick: () => setExpandedRowId(id),
          children: name.en
        }
      )
    }),
    columnHelper.accessor("id", {
      header: "Akcije",
      cell: ({ row: { original } }) => {
        return original.deleted_at ? /* @__PURE__ */ jsx("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => handleRestore(original), children: "Obnovi" }) }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx(PrimaryButton, { children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("hashtag-group.edit", {
                id: original.id
              }),
              children: "Uredi"
            }
          ) }),
          /* @__PURE__ */ jsx(PrimaryButton, { children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("hashtag.create", {
                id: original.id
              }),
              children: "Dodaj hashtag"
            }
          ) }),
          /* @__PURE__ */ jsx(DangerButton, { onClick: () => handleDelete(original), children: "Obriši" })
        ] });
      }
    })
  ];
  return { columns };
};
export {
  useHashtagGroupColumns as default
};
