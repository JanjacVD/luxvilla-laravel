import{j as e,a as m}from"./app-CGJ-POVG.js";import{u as i,B as l}from"./Table-BK7hpKfJ.js";import{A as d}from"./AuthenticatedLayout-DPOT4Wic.js";import p from"./ColumnDefinitions-B7ktJSxw.js";import{g as n}from"./index-Dn_gIyUs.js";import"./utils-B3W_D02W.js";import"./ApplicationLogo-C4D5jNCP.js";import"./logo-Cr4xRgwm.js";import"./transition-CAB3gdSs.js";import"./DangerButton-Fu-QM7TH.js";import"./PrimaryButton-CY4jvF3z.js";const w=({estates:t})=>{const{columns:a}=p(),o=i({data:t.sort((r,s)=>(""+s.deleted_at).localeCompare(r.deleted_at+"")),columns:a,getCoreRowModel:n()});return e.jsx(d,{header:"Nekretnine",children:e.jsxs("div",{className:"p-8",children:[e.jsx("div",{className:"py-4",children:e.jsx(m,{className:"bg-stone-800 text-white px-4 py-2 rounded-md",href:route("real-estate.create"),children:"Create"})}),e.jsx(l,{tableDef:o})]})})};export{w as default};