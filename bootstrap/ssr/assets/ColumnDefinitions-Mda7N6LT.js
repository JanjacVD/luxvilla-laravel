import { jsx, jsxs } from "react/jsx-runtime";
import { D as DangerButton } from "./DangerButton-B7to2Tbx.js";
import { P as PrimaryButton } from "./PrimaryButton-DgVfVBwo.js";
import { Link, router } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
const useRealEstateColumns = () => {
  const handleDelete = (estate) => {
    router.delete(route("real-estate.destroy", { real_estate: estate }));
  };
  const handleRestore = (estate) => {
    router.post(route("real-estate.restore", { real_estate: estate }));
  };
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("estate_id", {
      header: "ID"
    }),
    columnHelper.accessor("name.hr", { header: "Naziv Hrvatski" }),
    columnHelper.accessor((row) => row.name.en, {
      header: "Naziv Engleski",
      cell: ({
        row: {
          original: { name }
        }
      }) => name.en
    }),
    columnHelper.accessor("id", {
      header: "Akcije",
      cell: ({ row: { original } }) => {
        return original.deleted_at ? /* @__PURE__ */ jsx("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => handleRestore(original), children: "Obnovi" }) }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx(PrimaryButton, { children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("real-estate.edit", {
                id: original.id
              }),
              children: "Uredi"
            }
          ) }),
          /* @__PURE__ */ jsx(PrimaryButton, { children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("real-estate.show", {
                id: original.id
              }),
              children: "Pogledaj"
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
  useRealEstateColumns as default
};
