import{r as m,j as t,a as l}from"./app-BzQvzgsZ.js";import{u as c,B as x}from"./Table-DEfciZ9g.js";import{A as h}from"./AuthenticatedLayout-DTFAqz1t.js";import u from"./ColumnDefinitions-CVPH-TAJ.js";import g from"./HashtagTable-6ksHiasc.js";import{g as f,a as R}from"./index-Dn_gIyUs.js";import"./utils-DKOzRpXH.js";import"./ApplicationLogo-BMgrFhpm.js";import"./logo-Cr4xRgwm.js";import"./transition-CVrpky3p.js";import"./DangerButton-fVBpjM1L.js";import"./PrimaryButton-WqG_Qfdo.js";import"./SubtableColumnDefinitions-BOLpZ-7j.js";const B=({groups:o})=>{const[s,r]=m.useState(),d=e=>{r(a=>a===e?void 0:e)},{columns:p}=u({setExpandedRowId:d}),n=c({data:o.sort((e,a)=>(""+a.deleted_at).localeCompare(e.deleted_at+"")),columns:p,getCoreRowModel:f(),getRowCanExpand:()=>!0,getExpandedRowModel:R()}),i=e=>{if(e.id===s)return t.jsx(g,{hashtags:e.hashtags})};return t.jsx(h,{header:"Hashtagovi",children:t.jsxs("div",{className:"p-8",children:[t.jsx("div",{className:"py-4",children:t.jsx(l,{className:"bg-stone-800 text-white px-4 py-2 rounded-md",href:route("hashtag-group.create"),children:"Create"})}),t.jsx(x,{tableDef:n,renderSubtable:i})]})})};export{B as default};