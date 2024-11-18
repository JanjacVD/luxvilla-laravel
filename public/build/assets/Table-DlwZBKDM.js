import{r as o,j as a}from"./app-BIyIoRqK.js";import{b as g}from"./index-Dn_gIyUs.js";import{c as r}from"./utils-rlTQ_qti.js";/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function m(e,t){return e?h(e)?o.createElement(e,t):e:null}function h(e){return N(e)||typeof e=="function"||j(e)}function N(e){return typeof e=="function"&&(()=>{const t=Object.getPrototypeOf(e);return t.prototype&&t.prototype.isReactComponent})()}function j(e){return typeof e=="object"&&typeof e.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}function S(e){const t={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[l]=o.useState(()=>({current:g(t)})),[n,s]=o.useState(()=>l.current.initialState);return l.current.setOptions(p=>({...p,...e,state:{...n,...e.state},onStateChange:i=>{s(i),e.onStateChange==null||e.onStateChange(i)}})),l.current}const b=o.forwardRef(({className:e,...t},l)=>a.jsx("div",{className:"relative w-full overflow-auto",children:a.jsx("table",{ref:l,className:r("w-full caption-bottom text-sm",e),...t})}));b.displayName="Table";const u=o.forwardRef(({className:e,...t},l)=>a.jsx("thead",{ref:l,className:r("[&_tr]:border-b",e),...t}));u.displayName="TableHeader";const x=o.forwardRef(({className:e,...t},l)=>a.jsx("tbody",{ref:l,className:r("[&_tr:last-child]:border-0",e),...t}));x.displayName="TableBody";const y=o.forwardRef(({className:e,...t},l)=>a.jsx("tfoot",{ref:l,className:r("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t}));y.displayName="TableFooter";const c=o.forwardRef(({className:e,...t},l)=>a.jsx("tr",{ref:l,className:r("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));c.displayName="TableRow";const f=o.forwardRef(({className:e,...t},l)=>a.jsx("th",{ref:l,className:r("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));f.displayName="TableHead";const d=o.forwardRef(({className:e,...t},l)=>a.jsx("td",{ref:l,className:r("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));d.displayName="TableCell";const w=o.forwardRef(({className:e,...t},l)=>a.jsx("caption",{ref:l,className:r("mt-4 text-sm text-muted-foreground",e),...t}));w.displayName="TableCaption";const k=({tableDef:e,renderSubtable:t})=>{var l;return a.jsxs(b,{children:[a.jsx(u,{className:r("z-[1] border-spacing-x-12 bg-white"),children:e.getHeaderGroups().map(n=>a.jsx(c,{className:r("border-collapse border-0 border-solid"),children:n.headers.map(s=>a.jsx(f,{colSpan:s.colSpan,onClick:s.column.getToggleSortingHandler(),style:{width:s.column.getSize()},className:r("h-8 border-collapse border-0 border-solid text-sm"),children:s.isPlaceholder?null:m(s.column.columnDef.header,s.getContext())},s.id))},n.id))}),a.jsx(x,{className:"bg-slate-50",children:((l=e.getRowModel().rows)==null?void 0:l.length)===0?a.jsx(c,{children:a.jsx(d,{colSpan:e.getAllColumns().length,className:"h-12 text-center",children:"No Data"})}):e.getRowModel().rows.map(n=>a.jsxs(a.Fragment,{children:[a.jsx(c,{className:r("border-collapse border border-solid"),children:n.getVisibleCells().map(s=>a.jsx(d,{style:{width:s.column.getSize()},className:r("border-collapse flex-1 border-0 border-solid text-lg text-black"),children:m(s.column.columnDef.cell,s.getContext())},s.id))},n.id),t&&a.jsx(c,{className:"w-full",children:a.jsx(d,{colSpan:e.getAllColumns().length,className:"w-full border-t-2 border-t-gray-200 px-12",children:a.jsx("div",{className:"w-full",children:t(n.original)})})})]},n.id))})]})};export{k as B,S as u};