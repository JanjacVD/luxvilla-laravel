import{r as n,W as j,j as e}from"./app-BzQvzgsZ.js";import{D as c}from"./DangerButton-fVBpjM1L.js";import{I as g}from"./InputError-C_YjnpA2.js";import{I as N}from"./InputLabel-Bwpnf6QJ.js";import{M as D}from"./Modal--wd60SAG.js";import{S as v}from"./SecondaryButton-BeasTKPq.js";import{T as b}from"./TextInput-DePB2b5l.js";import"./transition-CVrpky3p.js";function B({className:d=""}){const[i,r]=n.useState(!1),o=n.useRef(null),{data:m,setData:u,delete:p,processing:x,reset:a,errors:f,clearErrors:y}=j({password:""}),h=()=>{r(!0)},w=t=>{t.preventDefault(),p(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>s(),onError:()=>{var l;return(l=o.current)==null?void 0:l.focus()},onFinish:()=>a()})},s=()=>{r(!1),y(),a()};return e.jsxs("section",{className:`space-y-6 ${d}`,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsx(c,{onClick:h,children:"Delete Account"}),e.jsx(D,{show:i,onClose:s,children:e.jsxs("form",{onSubmit:w,className:"p-6",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),e.jsxs("div",{className:"mt-6",children:[e.jsx(N,{htmlFor:"password",value:"Password",className:"sr-only"}),e.jsx(b,{id:"password",type:"password",name:"password",ref:o,value:m.password,onChange:t=>u("password",t.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e.jsx(g,{message:f.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(v,{onClick:s,children:"Cancel"}),e.jsx(c,{className:"ms-3",disabled:x,children:"Delete Account"})]})]})})]})}export{B as default};
