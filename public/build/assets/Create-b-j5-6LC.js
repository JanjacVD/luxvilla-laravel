import{W as n,j as t}from"./app-BIyIoRqK.js";import{P as p}from"./PrimaryButton-BrU-Be5t.js";import{T as l}from"./TranslatableInput-B--y9ikM.js";import{A as u}from"./AuthenticatedLayout-DKTkzpRm.js";import"./index-bM0ESTwN.js";import"./index-BW9_V74j.js";import"./TextInput-CkCdq0_l.js";import"./InputLabel-DfeGo_J0.js";import"./ApplicationLogo-DcfZZQcp.js";import"./logo-Cr4xRgwm.js";import"./transition-CDTj5UpZ.js";const g=({group:r})=>{const{data:a,setData:e,post:s,reset:o}=n({name:{hr:"",en:""}}),m=i=>{i.preventDefault(),s(route("hashtag.store",{group:r}),{onSuccess:()=>o()})};return t.jsx(u,{header:"Kreiraj Hashtag",children:t.jsx("div",{className:"p-8",children:t.jsxs("form",{onSubmit:m,children:[t.jsx(l,{label:"Naziv",setData:e,value:a}),t.jsx(p,{className:"mt-4 ml-auto",type:"submit",children:"Spremi"})]})})})};export{g as default};