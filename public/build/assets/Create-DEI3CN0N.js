import{W as n,j as t}from"./app-CGJ-POVG.js";import{P as p}from"./PrimaryButton-CY4jvF3z.js";import{T as l}from"./TranslatableInput-H8eIUHXx.js";import{A as u}from"./AuthenticatedLayout-DPOT4Wic.js";import"./index-FzMvuTP5.js";import"./index-CsMcbAyz.js";import"./TextInput-CZ8NGlvE.js";import"./InputLabel-BseII9su.js";import"./ApplicationLogo-C4D5jNCP.js";import"./logo-Cr4xRgwm.js";import"./transition-CAB3gdSs.js";const g=({group:r})=>{const{data:a,setData:e,post:s,reset:o}=n({name:{hr:"",en:""}}),m=i=>{i.preventDefault(),s(route("hashtag.store",{group:r}),{onSuccess:()=>o()})};return t.jsx(u,{header:"Kreiraj Hashtag",children:t.jsx("div",{className:"p-8",children:t.jsxs("form",{onSubmit:m,children:[t.jsx(l,{label:"Naziv",setData:e,value:a}),t.jsx(p,{className:"mt-4 ml-auto",type:"submit",children:"Spremi"})]})})})};export{g as default};
