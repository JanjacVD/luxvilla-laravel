import { jsx, jsxs } from "react/jsx-runtime";
import { P as PrimaryButton } from "./PrimaryButton-DgVfVBwo.js";
import { router } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
const useContactColumns = ({
  setModal
}) => {
  const markAsRead = (contact) => {
    router.patch(route("contacts.update", { contact }), {
      read: true
    });
  };
  const markAsUnread = (contact) => {
    router.patch(route("contacts.update", { contact }), {
      read: false
    });
  };
  const seeDetails = (contact) => {
    setModal(contact);
  };
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("estate_id", { header: "ID Nekretnine" }),
    columnHelper.accessor("name", { header: "Ime" }),
    columnHelper.accessor("email", { header: "Email" }),
    columnHelper.accessor("phone", { header: "Mobitel" }),
    columnHelper.accessor("read", {
      header: "Pročitano",
      cell: ({ row: { original } }) => {
        return original.read ? "Da" : "Ne";
      }
    }),
    columnHelper.accessor("id", {
      header: "Akcije",
      cell: ({ row: { original } }) => {
        return original.read ? /* @__PURE__ */ jsx("div", { className: "flex items-center gap-x-2", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => markAsUnread(original), children: "Vrati u nepročitano" }) }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => markAsRead(original), children: "Označi kao pročitano" }),
          /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => seeDetails(original), children: "Pogledaj detalje" })
        ] });
      }
    })
  ];
  return { columns };
};
export {
  useContactColumns as default
};
