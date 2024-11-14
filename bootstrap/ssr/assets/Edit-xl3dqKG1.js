import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-D2ZQk8jz.js";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./DeleteUserForm-D-7MHk8r.js";
import UpdatePasswordForm from "./UpdatePasswordForm-IKn-Z_Zy.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-B8jWyUQ7.js";
import "./ApplicationLogo-Ciywr56m.js";
import "./logo-Bjl7k8Lf.js";
import "@headlessui/react";
import "react";
import "./DangerButton-B7to2Tbx.js";
import "./InputError-DiSBWiye.js";
import "./InputLabel-CE_n4Upz.js";
import "./Modal-BeSeEOS3.js";
import "./SecondaryButton-C9TQBbBR.js";
import "./TextInput-uXC4T8wO.js";
import "./PrimaryButton-DgVfVBwo.js";
function Edit({
  mustVerifyEmail,
  status
}) {
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      header: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
