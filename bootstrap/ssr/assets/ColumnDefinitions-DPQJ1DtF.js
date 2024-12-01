import { jsxs, jsx } from "react/jsx-runtime";
import { D as DangerButton } from "./DangerButton-B7to2Tbx.js";
import { P as PrimaryButton } from "./PrimaryButton-DgVfVBwo.js";
import { Link, router } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
const useEstateTypeColumns = () => {
  const handleDelete = (type) => {
    router.delete(route("estate-type.destroy", { estate_type: type }));
  };
  const handleRestore = (type) => {
    router.post(route("estate-type.restore", { estate_type: type }));
  };
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("name.hr", { header: "Naziv Hrvatski" }),
    columnHelper.accessor((row) => row.name.en, {
      header: "Naziv Engleski",
      cell: ({
        row: {
          original: { name }
        }
      }) => name.en
    }),
    columnHelper.accessor("slug", {
      header: "Akcije",
      cell: ({ row: { original } }) => {
        return original.deleted_at ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => handleRestore(original), children: "Obnovi" }),
          /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => handleDelete(original), children: "Izbriši trajno" })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx(PrimaryButton, { children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("estate-type.edit", {
                id: original.id
              }),
              children: "Uredi"
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
  useEstateTypeColumns as default
};
