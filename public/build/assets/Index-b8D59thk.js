import{j as e,a as m}from"./app-BqIElpsO.js";import{u as i,B as l}from"./Table-DkO3wR_-.js";import{A as d}from"./AuthenticatedLayout-EqF7CAfj.js";import p from"./ColumnDefinitions-CW9n-VzH.js";import{g as n}from"./index-Dn_gIyUs.js";import"./utils-Dj4vKr9q.js";import"./ApplicationLogo-DpaQvfOj.js";import"./logo-Cr4xRgwm.js";import"./transition-BfQpwgu_.js";import"./DangerButton-BfaNE3cp.js";import"./PrimaryButton-BiIIiD2p.js";const w=({estates:t})=>{const{columns:a}=p(),o=i({data:t.sort((r,s)=>(""+s.deleted_at).localeCompare(r.deleted_at+"")),columns:a,getCoreRowModel:n()});return e.jsx(d,{header:"Nekretnine",children:e.jsxs("div",{className:"p-8",children:[e.jsx("div",{className:"py-4",children:e.jsx(m,{className:"bg-stone-800 text-white px-4 py-2 rounded-md",href:route("real-estate.create"),children:"Create"})}),e.jsx(l,{tableDef:o})]})})};export{w as default};
