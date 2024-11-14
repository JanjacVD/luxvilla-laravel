import { jsxs, jsx } from "react/jsx-runtime";
import { B as BasicTable } from "./Table-CwfO25x8.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-D2ZQk8jz.js";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import useContactColumns from "./ColumnDefinitions-BQpWuBej.js";
import { useState } from "react";
import { M as Modal } from "./Modal-BeSeEOS3.js";
import "./utils-H80jjgLf.js";
import "clsx";
import "tailwind-merge";
import "./ApplicationLogo-Ciywr56m.js";
import "./logo-Bjl7k8Lf.js";
import "@headlessui/react";
import "@inertiajs/react";
import "./PrimaryButton-DgVfVBwo.js";
const ContactIndex = ({
  contacts
}) => {
  const [detailedMsg, setDetailedMsg] = useState();
  const { columns } = useContactColumns({ setModal: setDetailedMsg });
  const table = useReactTable({
    data: contacts,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { header: "Tipovi nekretnine", children: [
    /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsx(BasicTable, { tableDef: table }) }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        onClose: () => setDetailedMsg(void 0),
        show: !!detailedMsg,
        closeable: true,
        maxWidth: "2xl",
        children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "ID: ",
            detailedMsg == null ? void 0 : detailedMsg.estate_id
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Ime: ",
            detailedMsg == null ? void 0 : detailedMsg.name
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Email: ",
            detailedMsg == null ? void 0 : detailedMsg.email
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Mobitel: ",
            detailedMsg == null ? void 0 : detailedMsg.phone
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Poruka: ",
            detailedMsg == null ? void 0 : detailedMsg.msg
          ] })
        ] })
      }
    )
  ] });
};
export {
  ContactIndex as default
};
