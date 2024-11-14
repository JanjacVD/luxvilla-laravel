import { jsx, jsxs } from "react/jsx-runtime";
import { D as DangerButton } from "./DangerButton-B7to2Tbx.js";
import { P as PrimaryButton } from "./PrimaryButton-DgVfVBwo.js";
import { Link, router } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
const useHashtagColumnDefinitions = () => {
  const handleDelete = (type) => {
    router.delete(route("hashtag.destroy", { hashtag: type }));
  };
  const handleRestore = (type) => {
    router.post(route("hashtag.restore", { hashtag: type }));
  };
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor((row) => row.name.en, {
      header: "Naziv Hrvatski",
      cell: ({
        row: {
          original: { name, id }
        }
      }) => name.hr
    }),
    columnHelper.accessor((row) => row.name.en, {
      header: "Naziv Engleski",
      cell: ({
        row: {
          original: { name, id }
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
              href: route("hashtag.edit", {
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
  useHashtagColumnDefinitions as default
};
