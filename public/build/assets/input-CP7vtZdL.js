import{j as r,a,r as l}from"./app-BqIElpsO.js";import{c as o}from"./utils-Dj4vKr9q.js";const x=({items:e})=>e.length<2?null:r.jsx("ol",{role:"navigation",className:"flex items-center mt-4 capitalize font-semibold flex-wrap",children:e.map(({url:t,label:n},s)=>r.jsxs("li",{className:o("flex items-center text-xs sm:text-xl",s!==e.length-1&&"text-gray-500"),children:[r.jsx(a,{href:t,children:n}),s!==e.length-1&&r.jsx("span",{className:"mx-4",children:">"})]},t))}),i=l.forwardRef(({className:e,type:t,...n},s)=>r.jsx("input",{type:t,className:o("border text-sm border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground !theme flex h-9 w-full rounded-md  px-3 py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...n}));i.displayName="Input";export{x as B,i as I};
