import{W as s,j as t}from"./app-BIyIoRqK.js";import{P as p}from"./PrimaryButton-BrU-Be5t.js";import{T as n}from"./TranslatableInput-B--y9ikM.js";import{A as u}from"./AuthenticatedLayout-DKTkzpRm.js";import"./index-bM0ESTwN.js";import"./index-BW9_V74j.js";import"./TextInput-CkCdq0_l.js";import"./InputLabel-DfeGo_J0.js";import"./ApplicationLogo-DcfZZQcp.js";import"./logo-Cr4xRgwm.js";import"./transition-CDTj5UpZ.js";const S=({type:e})=>{const{data:a,setData:r,put:m}=s({name:{...e.name}}),i=o=>{o.preventDefault(),m(route("estate-type.update",{estate_type:e}))};return t.jsx(u,{header:"Uredi Tip",children:t.jsx("div",{className:"p-8",children:t.jsxs("form",{onSubmit:i,children:[t.jsx(n,{label:"Naziv",setData:r,value:a}),t.jsx(p,{className:"mt-4 ml-auto",type:"submit",children:"Spremi"})]})})})};export{S as default};
