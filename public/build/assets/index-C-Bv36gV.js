import{r as s,j as h,d as C}from"./app-BqIElpsO.js";import{u as g}from"./index-DlCV_gpW.js";function $(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function j(t,e){const n=s.createContext(e),o=c=>{const{children:i,...a}=c,f=s.useMemo(()=>a,Object.values(a));return h.jsx(n.Provider,{value:f,children:i})};o.displayName=t+"Provider";function r(c){const i=s.useContext(n);if(i)return i;if(e!==void 0)return e;throw new Error(`\`${c}\` must be used within \`${t}\``)}return[o,r]}function L(t,e=[]){let n=[];function o(c,i){const a=s.createContext(i),f=n.length;n=[...n,i];const u=d=>{var P;const{scope:m,children:l,...p}=d,v=((P=m==null?void 0:m[t])==null?void 0:P[f])||a,S=s.useMemo(()=>p,Object.values(p));return h.jsx(v.Provider,{value:S,children:l})};u.displayName=c+"Provider";function N(d,m){var v;const l=((v=m==null?void 0:m[t])==null?void 0:v[f])||a,p=s.useContext(l);if(p)return p;if(i!==void 0)return i;throw new Error(`\`${d}\` must be used within \`${c}\``)}return[u,N]}const r=()=>{const c=n.map(i=>s.createContext(i));return function(a){const f=(a==null?void 0:a[t])||c;return s.useMemo(()=>({[`__scope${t}`]:{...a,[t]:f}}),[a,f])}};return r.scopeName=t,[o,O(r,...e)]}function O(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const o=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(c){const i=o.reduce((a,{useScope:f,scopeName:u})=>{const d=f(c)[`__scope${u}`];return{...a,...d}},{});return s.useMemo(()=>({[`__scope${e.scopeName}`]:i}),[i])}};return n.scopeName=e.scopeName,n}function A(t){const e=s.useRef(t);return s.useEffect(()=>{e.current=t}),s.useMemo(()=>(...n)=>{var o;return(o=e.current)==null?void 0:o.call(e,...n)},[])}function D({prop:t,defaultProp:e,onChange:n=()=>{}}){const[o,r]=R({defaultProp:e,onChange:n}),c=t!==void 0,i=c?t:o,a=A(n),f=s.useCallback(u=>{if(c){const d=typeof u=="function"?u(t):u;d!==t&&a(d)}else r(u)},[c,t,r,a]);return[i,f]}function R({defaultProp:t,onChange:e}){const n=s.useState(t),[o]=n,r=s.useRef(o),c=A(e);return s.useEffect(()=>{r.current!==o&&(c(o),r.current=o)},[o,r,c]),n}var M=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{};function w(t,e){return s.useReducer((n,o)=>e[n][o]??n,t)}var T=t=>{const{present:e,children:n}=t,o=E(e),r=typeof n=="function"?n({present:o.isPresent}):s.Children.only(n),c=g(o.ref,I(r));return typeof n=="function"||o.isPresent?s.cloneElement(r,{ref:c}):null};T.displayName="Presence";function E(t){const[e,n]=s.useState(),o=s.useRef({}),r=s.useRef(t),c=s.useRef("none"),i=t?"mounted":"unmounted",[a,f]=w(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const u=x(o.current);c.current=a==="mounted"?u:"none"},[a]),M(()=>{const u=o.current,N=r.current;if(N!==t){const m=c.current,l=x(u);t?f("MOUNT"):l==="none"||(u==null?void 0:u.display)==="none"?f("UNMOUNT"):f(N&&m!==l?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,f]),M(()=>{if(e){let u;const N=e.ownerDocument.defaultView??window,d=l=>{const v=x(o.current).includes(l.animationName);if(l.target===e&&v&&(f("ANIMATION_END"),!r.current)){const S=e.style.animationFillMode;e.style.animationFillMode="forwards",u=N.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=S)})}},m=l=>{l.target===e&&(c.current=x(o.current))};return e.addEventListener("animationstart",m),e.addEventListener("animationcancel",d),e.addEventListener("animationend",d),()=>{N.clearTimeout(u),e.removeEventListener("animationstart",m),e.removeEventListener("animationcancel",d),e.removeEventListener("animationend",d)}}else f("ANIMATION_END")},[e,f]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:s.useCallback(u=>{u&&(o.current=getComputedStyle(u)),n(u)},[])}}function x(t){return(t==null?void 0:t.animationName)||"none"}function I(t){var o,r;let e=(o=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:o.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var y=C.useId||(()=>{}),U=0;function W(t){const[e,n]=s.useState(y());return M(()=>{n(o=>o??String(U++))},[t]),e?`radix-${e}`:""}export{T as P,A as a,W as b,$ as c,L as d,M as e,j as f,D as u};
