import { jsx, jsxs } from "react/jsx-runtime";
import { P as PrimaryButton } from "./PrimaryButton-DgVfVBwo.js";
import { T as TranslatableInput } from "./TranslatableInput-IuRL4WPO.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-D2ZQk8jz.js";
import { useForm } from "@inertiajs/react";
import "@radix-ui/react-collapsible";
import "./TextInput-uXC4T8wO.js";
import "react";
import "./InputLabel-CE_n4Upz.js";
import "./ApplicationLogo-Ciywr56m.js";
import "./logo-Bjl7k8Lf.js";
import "@headlessui/react";
const Create = ({ hashtag }) => {
  const { data, setData, put, reset } = useForm({
    name: {
      ...hashtag.name
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("hashtag.update", { hashtag }), {
      onSuccess: () => reset()
    });
  };
  return /* @__PURE__ */ jsx(AuthenticatedLayout, { header: "Kreiraj Hashtag", children: /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(
      TranslatableInput,
      {
        label: "Naziv",
        setData,
        value: data
      }
    ),
    /* @__PURE__ */ jsx(PrimaryButton, { className: "mt-4 ml-auto", type: "submit", children: "Spremi" })
  ] }) }) });
};
export {
  Create as default
};
