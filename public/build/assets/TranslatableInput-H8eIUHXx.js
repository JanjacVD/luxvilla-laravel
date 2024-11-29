import{r as a,j as e}from"./app-CGJ-POVG.js";import{d as S,u as $,b as L,c as M,P as D,e as k}from"./index-FzMvuTP5.js";import{P as C,u as q}from"./index-CsMcbAyz.js";import{T as I}from"./TextInput-CZ8NGlvE.js";import{I as T}from"./InputLabel-BseII9su.js";var x="Collapsible",[F,Z]=S(x),[B,h]=F(x),w=a.forwardRef((t,n)=>{const{__scopeCollapsible:r,open:s,defaultOpen:o,disabled:c,onOpenChange:i,...f}=t,[p=!1,d]=$({prop:s,defaultProp:o,onChange:i});return e.jsx(B,{scope:r,disabled:c,contentId:L(),open:p,onOpenToggle:a.useCallback(()=>d(m=>!m),[d]),children:e.jsx(C.div,{"data-state":v(p),"data-disabled":c?"":void 0,...f,ref:n})})});w.displayName=x;var _="CollapsibleTrigger",O=a.forwardRef((t,n)=>{const{__scopeCollapsible:r,...s}=t,o=h(_,r);return e.jsx(C.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":v(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...s,ref:n,onClick:M(t.onClick,o.onOpenToggle)})});O.displayName=_;var g="CollapsibleContent",A=a.forwardRef((t,n)=>{const{forceMount:r,...s}=t,o=h(g,t.__scopeCollapsible);return e.jsx(D,{present:r||o.open,children:({present:c})=>e.jsx(G,{...s,ref:n,present:c})})});A.displayName=g;var G=a.forwardRef((t,n)=>{const{__scopeCollapsible:r,present:s,children:o,...c}=t,i=h(g,r),[f,p]=a.useState(s),d=a.useRef(null),m=q(n,d),R=a.useRef(0),j=R.current,N=a.useRef(0),y=N.current,b=i.open||f,P=a.useRef(b),u=a.useRef();return a.useEffect(()=>{const l=requestAnimationFrame(()=>P.current=!1);return()=>cancelAnimationFrame(l)},[]),k(()=>{const l=d.current;if(l){u.current=u.current||{transitionDuration:l.style.transitionDuration,animationName:l.style.animationName},l.style.transitionDuration="0s",l.style.animationName="none";const E=l.getBoundingClientRect();R.current=E.height,N.current=E.width,P.current||(l.style.transitionDuration=u.current.transitionDuration,l.style.animationName=u.current.animationName),p(s)}},[i.open,s]),e.jsx(C.div,{"data-state":v(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!b,...c,ref:m,style:{"--radix-collapsible-content-height":j?`${j}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...t.style},children:b&&o})});function v(t){return t?"open":"closed"}var H=w;const z=H,J=O,K=A,Q=({title:t,children:n})=>e.jsxs(z,{defaultOpen:!0,children:[e.jsx(J,{className:"border bg-stone-300 rounded-md py-2 px-4 w-full",children:t}),e.jsx(K,{children:n})]}),ee=({label:t,value:n,setData:r})=>e.jsx("div",{children:e.jsxs(Q,{title:t,children:[e.jsxs("div",{className:"px-4 py-1",children:[e.jsx(T,{children:"HR"}),e.jsx(I,{required:!0,className:"w-full",value:n.name.hr,onChange:s=>r("name",{...n.name,hr:s.target.value})})]}),e.jsxs("div",{className:"px-4 py-1",children:[e.jsx(T,{children:"EN"}),e.jsx(I,{required:!0,className:"w-full",value:n.name.en,onChange:s=>r("name",{...n.name,en:s.target.value})})]})]})});export{Q as C,ee as T};