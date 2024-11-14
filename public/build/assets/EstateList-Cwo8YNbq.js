import{r as s,j as t,R as V,a as Yt,q as Ht,Y as qt}from"./app-BzQvzgsZ.js";import{I as se,B as Xt}from"./input-BlPSxXI2.js";import{c as Oe,A as Wt,h as Zt,u as Jt,F as Qt,D as en,C as tn,a as nn,R as on,P as rn,b as an,d as sn,e as ee,E as cn}from"./EstateCard-C9oVILCy.js";import{c as L}from"./utils-DKOzRpXH.js";import{I as ce}from"./InputLabel-Bwpnf6QJ.js";import{B as z}from"./button-Bu0-mNtV.js";import{c as de,u as ke,C as ie,A as ln}from"./AppLayout-CUwh90Ir.js";import{u as Le,a as _e,c as M,b as we,d as Ge,P as pe}from"./index-fVS0iSYd.js";import{u as U,S as Ce,P as B,c as $e,d as un}from"./index-DY7t0UO_.js";import"./logo-Cr4xRgwm.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=de("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=de("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=de("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=de("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);function xn(e,o=[]){let n=[];function r(c,l){const i=s.createContext(l),f=n.length;n=[...n,l];function x(u){const{scope:d,children:v,...p}=u,C=(d==null?void 0:d[e][f])||i,b=s.useMemo(()=>p,Object.values(p));return t.jsx(C.Provider,{value:b,children:v})}function m(u,d){const v=(d==null?void 0:d[e][f])||i,p=s.useContext(v);if(p)return p;if(l!==void 0)return l;throw new Error(`\`${u}\` must be used within \`${c}\``)}return x.displayName=c+"Provider",[x,m]}const a=()=>{const c=n.map(l=>s.createContext(l));return function(i){const f=(i==null?void 0:i[e])||c;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:f}}),[i,f])}};return a.scopeName=e,[r,hn(a,...o)]}function hn(...e){const o=e[0];if(e.length===1)return o;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(c){const l=r.reduce((i,{useScope:f,scopeName:x})=>{const u=f(c)[`__scope${x}`];return{...i,...u}},{});return s.useMemo(()=>({[`__scope${o.scopeName}`]:l}),[l])}};return n.scopeName=o.scopeName,n}function Ke(e){const o=e+"CollectionProvider",[n,r]=xn(o),[a,c]=n(o,{collectionRef:{current:null},itemMap:new Map}),l=v=>{const{scope:p,children:C}=v,b=V.useRef(null),w=V.useRef(new Map).current;return t.jsx(a,{scope:p,itemMap:w,collectionRef:b,children:C})};l.displayName=o;const i=e+"CollectionSlot",f=V.forwardRef((v,p)=>{const{scope:C,children:b}=v,w=c(i,C),_=U(p,w.collectionRef);return t.jsx(Ce,{ref:_,children:b})});f.displayName=i;const x=e+"CollectionItemSlot",m="data-radix-collection-item",u=V.forwardRef((v,p)=>{const{scope:C,children:b,...w}=v,_=V.useRef(null),y=U(p,_),E=c(x,C);return V.useEffect(()=>(E.itemMap.set(_,{ref:_,...w}),()=>void E.itemMap.delete(_))),t.jsx(Ce,{[m]:"",ref:y,children:b})});u.displayName=x;function d(v){const p=c(e+"CollectionConsumer",v);return V.useCallback(()=>{const b=p.collectionRef.current;if(!b)return[];const w=Array.from(b.querySelectorAll(`[${m}]`));return Array.from(p.itemMap.values()).sort((E,R)=>w.indexOf(E.ref.current)-w.indexOf(R.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:l,Slot:f,ItemSlot:u},d,r]}var vn=s.createContext(void 0);function Ue(e){const o=s.useContext(vn);return e||o||"ltr"}function gn(e,o=[]){let n=[];function r(c,l){const i=s.createContext(l),f=n.length;n=[...n,l];function x(u){const{scope:d,children:v,...p}=u,C=(d==null?void 0:d[e][f])||i,b=s.useMemo(()=>p,Object.values(p));return t.jsx(C.Provider,{value:b,children:v})}function m(u,d){const v=(d==null?void 0:d[e][f])||i,p=s.useContext(v);if(p)return p;if(l!==void 0)return l;throw new Error(`\`${u}\` must be used within \`${c}\``)}return x.displayName=c+"Provider",[x,m]}const a=()=>{const c=n.map(l=>s.createContext(l));return function(i){const f=(i==null?void 0:i[e])||c;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:f}}),[i,f])}};return a.scopeName=e,[r,wn(a,...o)]}function wn(...e){const o=e[0];if(e.length===1)return o;const n=()=>{const r=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(c){const l=r.reduce((i,{useScope:f,scopeName:x})=>{const u=f(c)[`__scope${x}`];return{...i,...u}},{});return s.useMemo(()=>({[`__scope${o.scopeName}`]:l}),[l])}};return n.scopeName=o.scopeName,n}var ge="rovingFocusGroup.onEntryFocus",Cn={bubbles:!1,cancelable:!0},fe="RovingFocusGroup",[Me,Be,Mn]=Ke(fe),[bn,Ve]=gn(fe,[Mn]),[_n,Rn]=bn(fe),ze=s.forwardRef((e,o)=>t.jsx(Me.Provider,{scope:e.__scopeRovingFocusGroup,children:t.jsx(Me.Slot,{scope:e.__scopeRovingFocusGroup,children:t.jsx(Sn,{...e,ref:o})})}));ze.displayName=fe;var Sn=s.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:a=!1,dir:c,currentTabStopId:l,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:f,onEntryFocus:x,preventScrollOnEntryFocus:m=!1,...u}=e,d=s.useRef(null),v=U(o,d),p=Ue(c),[C=null,b]=Le({prop:l,defaultProp:i,onChange:f}),[w,_]=s.useState(!1),y=_e(x),E=Be(n),R=s.useRef(!1),[A,I]=s.useState(0);return s.useEffect(()=>{const S=d.current;if(S)return S.addEventListener(ge,y),()=>S.removeEventListener(ge,y)},[y]),t.jsx(_n,{scope:n,orientation:r,dir:p,loop:a,currentTabStopId:C,onItemFocus:s.useCallback(S=>b(S),[b]),onItemShiftTab:s.useCallback(()=>_(!0),[]),onFocusableItemAdd:s.useCallback(()=>I(S=>S+1),[]),onFocusableItemRemove:s.useCallback(()=>I(S=>S-1),[]),children:t.jsx(B.div,{tabIndex:w||A===0?-1:0,"data-orientation":r,...u,ref:v,style:{outline:"none",...e.style},onMouseDown:M(e.onMouseDown,()=>{R.current=!0}),onFocus:M(e.onFocus,S=>{const F=!R.current;if(S.target===S.currentTarget&&F&&!w){const D=new CustomEvent(ge,Cn);if(S.currentTarget.dispatchEvent(D),!D.defaultPrevented){const O=E().filter(h=>h.focusable),G=O.find(h=>h.active),q=O.find(h=>h.id===C),J=[G,q,...O].filter(Boolean).map(h=>h.ref.current);qe(J,m)}}R.current=!1}),onBlur:M(e.onBlur,()=>_(!1))})})}),Ye="RovingFocusGroupItem",He=s.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:a=!1,tabStopId:c,...l}=e,i=we(),f=c||i,x=Rn(Ye,n),m=x.currentTabStopId===f,u=Be(n),{onFocusableItemAdd:d,onFocusableItemRemove:v}=x;return s.useEffect(()=>{if(r)return d(),()=>v()},[r,d,v]),t.jsx(Me.ItemSlot,{scope:n,id:f,focusable:r,active:a,children:t.jsx(B.span,{tabIndex:m?0:-1,"data-orientation":x.orientation,...l,ref:o,onMouseDown:M(e.onMouseDown,p=>{r?x.onItemFocus(f):p.preventDefault()}),onFocus:M(e.onFocus,()=>x.onItemFocus(f)),onKeyDown:M(e.onKeyDown,p=>{if(p.key==="Tab"&&p.shiftKey){x.onItemShiftTab();return}if(p.target!==p.currentTarget)return;const C=jn(p,x.orientation,x.dir);if(C!==void 0){if(p.metaKey||p.ctrlKey||p.altKey||p.shiftKey)return;p.preventDefault();let w=u().filter(_=>_.focusable).map(_=>_.ref.current);if(C==="last")w.reverse();else if(C==="prev"||C==="next"){C==="prev"&&w.reverse();const _=w.indexOf(p.currentTarget);w=x.loop?In(w,_+1):w.slice(_+1)}setTimeout(()=>qe(w))}})})})});He.displayName=Ye;var yn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Nn(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function jn(e,o,n){const r=Nn(e.key,n);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return yn[r]}function qe(e,o=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:o}),document.activeElement!==n))return}function In(e,o){return e.map((n,r)=>e[(o+r)%e.length])}var En=ze,Dn=He,be=["Enter"," "],Pn=["ArrowDown","PageUp","Home"],Xe=["ArrowUp","PageDown","End"],Tn=[...Pn,...Xe],An={ltr:[...be,"ArrowRight"],rtl:[...be,"ArrowLeft"]},Fn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},re="Menu",[ne,On,kn]=Ke(re),[Y,We]=Ge(re,[kn,Oe,Ve]),me=Oe(),Ze=Ve(),[Ln,H]=Y(re),[Gn,ae]=Y(re),Je=e=>{const{__scopeMenu:o,open:n=!1,children:r,dir:a,onOpenChange:c,modal:l=!0}=e,i=me(o),[f,x]=s.useState(null),m=s.useRef(!1),u=_e(c),d=Ue(a);return s.useEffect(()=>{const v=()=>{m.current=!0,document.addEventListener("pointerdown",p,{capture:!0,once:!0}),document.addEventListener("pointermove",p,{capture:!0,once:!0})},p=()=>m.current=!1;return document.addEventListener("keydown",v,{capture:!0}),()=>{document.removeEventListener("keydown",v,{capture:!0}),document.removeEventListener("pointerdown",p,{capture:!0}),document.removeEventListener("pointermove",p,{capture:!0})}},[]),t.jsx(an,{...i,children:t.jsx(Ln,{scope:o,open:n,onOpenChange:u,content:f,onContentChange:x,children:t.jsx(Gn,{scope:o,onClose:s.useCallback(()=>u(!1),[u]),isUsingKeyboardRef:m,dir:d,modal:l,children:r})})})};Je.displayName=re;var $n="MenuAnchor",Re=s.forwardRef((e,o)=>{const{__scopeMenu:n,...r}=e,a=me(n);return t.jsx(Wt,{...a,...r,ref:o})});Re.displayName=$n;var Se="MenuPortal",[Kn,Qe]=Y(Se,{forceMount:void 0}),et=e=>{const{__scopeMenu:o,forceMount:n,children:r,container:a}=e,c=H(Se,o);return t.jsx(Kn,{scope:o,forceMount:n,children:t.jsx(pe,{present:n||c.open,children:t.jsx(rn,{asChild:!0,container:a,children:r})})})};et.displayName=Se;var T="MenuContent",[Un,ye]=Y(T),tt=s.forwardRef((e,o)=>{const n=Qe(T,e.__scopeMenu),{forceMount:r=n.forceMount,...a}=e,c=H(T,e.__scopeMenu),l=ae(T,e.__scopeMenu);return t.jsx(ne.Provider,{scope:e.__scopeMenu,children:t.jsx(pe,{present:r||c.open,children:t.jsx(ne.Slot,{scope:e.__scopeMenu,children:l.modal?t.jsx(Bn,{...a,ref:o}):t.jsx(Vn,{...a,ref:o})})})})}),Bn=s.forwardRef((e,o)=>{const n=H(T,e.__scopeMenu),r=s.useRef(null),a=U(o,r);return s.useEffect(()=>{const c=r.current;if(c)return Zt(c)},[]),t.jsx(Ne,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:M(e.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),Vn=s.forwardRef((e,o)=>{const n=H(T,e.__scopeMenu);return t.jsx(Ne,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),Ne=s.forwardRef((e,o)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:a,onOpenAutoFocus:c,onCloseAutoFocus:l,disableOutsidePointerEvents:i,onEntryFocus:f,onEscapeKeyDown:x,onPointerDownOutside:m,onFocusOutside:u,onInteractOutside:d,onDismiss:v,disableOutsideScroll:p,...C}=e,b=H(T,n),w=ae(T,n),_=me(n),y=Ze(n),E=On(n),[R,A]=s.useState(null),I=s.useRef(null),S=U(o,I,b.onContentChange),F=s.useRef(0),D=s.useRef(""),O=s.useRef(0),G=s.useRef(null),q=s.useRef("right"),X=s.useRef(0),J=p?on:s.Fragment,h=p?{as:Ce,allowPinchZoom:!0}:void 0,N=g=>{var Z,Te;const P=D.current+g,k=E().filter($=>!$.disabled),K=document.activeElement,he=(Z=k.find($=>$.ref.current===K))==null?void 0:Z.textValue,ve=k.map($=>$.textValue),Pe=no(ve,P,he),Q=(Te=k.find($=>$.textValue===Pe))==null?void 0:Te.ref.current;(function $(Ae){D.current=Ae,window.clearTimeout(F.current),Ae!==""&&(F.current=window.setTimeout(()=>$(""),1e3))})(P),Q&&setTimeout(()=>Q.focus())};s.useEffect(()=>()=>window.clearTimeout(F.current),[]),Jt();const W=s.useCallback(g=>{var k,K;return q.current===((k=G.current)==null?void 0:k.side)&&ro(g,(K=G.current)==null?void 0:K.area)},[]);return t.jsx(Un,{scope:n,searchRef:D,onItemEnter:s.useCallback(g=>{W(g)&&g.preventDefault()},[W]),onItemLeave:s.useCallback(g=>{var P;W(g)||((P=I.current)==null||P.focus(),A(null))},[W]),onTriggerLeave:s.useCallback(g=>{W(g)&&g.preventDefault()},[W]),pointerGraceTimerRef:O,onPointerGraceIntentChange:s.useCallback(g=>{G.current=g},[]),children:t.jsx(J,{...h,children:t.jsx(Qt,{asChild:!0,trapped:a,onMountAutoFocus:M(c,g=>{var P;g.preventDefault(),(P=I.current)==null||P.focus({preventScroll:!0})}),onUnmountAutoFocus:l,children:t.jsx(en,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:x,onPointerDownOutside:m,onFocusOutside:u,onInteractOutside:d,onDismiss:v,children:t.jsx(En,{asChild:!0,...y,dir:w.dir,orientation:"vertical",loop:r,currentTabStopId:R,onCurrentTabStopIdChange:A,onEntryFocus:M(f,g=>{w.isUsingKeyboardRef.current||g.preventDefault()}),preventScrollOnEntryFocus:!0,children:t.jsx(tn,{role:"menu","aria-orientation":"vertical","data-state":vt(b.open),"data-radix-menu-content":"",dir:w.dir,..._,...C,ref:S,style:{outline:"none",...C.style},onKeyDown:M(C.onKeyDown,g=>{const k=g.target.closest("[data-radix-menu-content]")===g.currentTarget,K=g.ctrlKey||g.altKey||g.metaKey,he=g.key.length===1;k&&(g.key==="Tab"&&g.preventDefault(),!K&&he&&N(g.key));const ve=I.current;if(g.target!==ve||!Tn.includes(g.key))return;g.preventDefault();const Q=E().filter(Z=>!Z.disabled).map(Z=>Z.ref.current);Xe.includes(g.key)&&Q.reverse(),eo(Q)}),onBlur:M(e.onBlur,g=>{g.currentTarget.contains(g.target)||(window.clearTimeout(F.current),D.current="")}),onPointerMove:M(e.onPointerMove,oe(g=>{const P=g.target,k=X.current!==g.clientX;if(g.currentTarget.contains(P)&&k){const K=g.clientX>X.current?"right":"left";q.current=K,X.current=g.clientX}}))})})})})})})});tt.displayName=T;var zn="MenuGroup",je=s.forwardRef((e,o)=>{const{__scopeMenu:n,...r}=e;return t.jsx(B.div,{role:"group",...r,ref:o})});je.displayName=zn;var Yn="MenuLabel",nt=s.forwardRef((e,o)=>{const{__scopeMenu:n,...r}=e;return t.jsx(B.div,{...r,ref:o})});nt.displayName=Yn;var le="MenuItem",Fe="menu.itemSelect",xe=s.forwardRef((e,o)=>{const{disabled:n=!1,onSelect:r,...a}=e,c=s.useRef(null),l=ae(le,e.__scopeMenu),i=ye(le,e.__scopeMenu),f=U(o,c),x=s.useRef(!1),m=()=>{const u=c.current;if(!n&&u){const d=new CustomEvent(Fe,{bubbles:!0,cancelable:!0});u.addEventListener(Fe,v=>r==null?void 0:r(v),{once:!0}),un(u,d),d.defaultPrevented?x.current=!1:l.onClose()}};return t.jsx(ot,{...a,ref:f,disabled:n,onClick:M(e.onClick,m),onPointerDown:u=>{var d;(d=e.onPointerDown)==null||d.call(e,u),x.current=!0},onPointerUp:M(e.onPointerUp,u=>{var d;x.current||(d=u.currentTarget)==null||d.click()}),onKeyDown:M(e.onKeyDown,u=>{const d=i.searchRef.current!=="";n||d&&u.key===" "||be.includes(u.key)&&(u.currentTarget.click(),u.preventDefault())})})});xe.displayName=le;var ot=s.forwardRef((e,o)=>{const{__scopeMenu:n,disabled:r=!1,textValue:a,...c}=e,l=ye(le,n),i=Ze(n),f=s.useRef(null),x=U(o,f),[m,u]=s.useState(!1),[d,v]=s.useState("");return s.useEffect(()=>{const p=f.current;p&&v((p.textContent??"").trim())},[c.children]),t.jsx(ne.ItemSlot,{scope:n,disabled:r,textValue:a??d,children:t.jsx(Dn,{asChild:!0,...i,focusable:!r,children:t.jsx(B.div,{role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0,...c,ref:x,onPointerMove:M(e.onPointerMove,oe(p=>{r?l.onItemLeave(p):(l.onItemEnter(p),p.defaultPrevented||p.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:M(e.onPointerLeave,oe(p=>l.onItemLeave(p))),onFocus:M(e.onFocus,()=>u(!0)),onBlur:M(e.onBlur,()=>u(!1))})})})}),Hn="MenuCheckboxItem",rt=s.forwardRef((e,o)=>{const{checked:n=!1,onCheckedChange:r,...a}=e;return t.jsx(lt,{scope:e.__scopeMenu,checked:n,children:t.jsx(xe,{role:"menuitemcheckbox","aria-checked":ue(n)?"mixed":n,...a,ref:o,"data-state":Ee(n),onSelect:M(a.onSelect,()=>r==null?void 0:r(ue(n)?!0:!n),{checkForDefaultPrevented:!1})})})});rt.displayName=Hn;var at="MenuRadioGroup",[qn,Xn]=Y(at,{value:void 0,onValueChange:()=>{}}),st=s.forwardRef((e,o)=>{const{value:n,onValueChange:r,...a}=e,c=_e(r);return t.jsx(qn,{scope:e.__scopeMenu,value:n,onValueChange:c,children:t.jsx(je,{...a,ref:o})})});st.displayName=at;var ct="MenuRadioItem",it=s.forwardRef((e,o)=>{const{value:n,...r}=e,a=Xn(ct,e.__scopeMenu),c=n===a.value;return t.jsx(lt,{scope:e.__scopeMenu,checked:c,children:t.jsx(xe,{role:"menuitemradio","aria-checked":c,...r,ref:o,"data-state":Ee(c),onSelect:M(r.onSelect,()=>{var l;return(l=a.onValueChange)==null?void 0:l.call(a,n)},{checkForDefaultPrevented:!1})})})});it.displayName=ct;var Ie="MenuItemIndicator",[lt,Wn]=Y(Ie,{checked:!1}),ut=s.forwardRef((e,o)=>{const{__scopeMenu:n,forceMount:r,...a}=e,c=Wn(Ie,n);return t.jsx(pe,{present:r||ue(c.checked)||c.checked===!0,children:t.jsx(B.span,{...a,ref:o,"data-state":Ee(c.checked)})})});ut.displayName=Ie;var Zn="MenuSeparator",dt=s.forwardRef((e,o)=>{const{__scopeMenu:n,...r}=e;return t.jsx(B.div,{role:"separator","aria-orientation":"horizontal",...r,ref:o})});dt.displayName=Zn;var Jn="MenuArrow",pt=s.forwardRef((e,o)=>{const{__scopeMenu:n,...r}=e,a=me(n);return t.jsx(nn,{...a,...r,ref:o})});pt.displayName=Jn;var Qn="MenuSub",[sr,ft]=Y(Qn),te="MenuSubTrigger",mt=s.forwardRef((e,o)=>{const n=H(te,e.__scopeMenu),r=ae(te,e.__scopeMenu),a=ft(te,e.__scopeMenu),c=ye(te,e.__scopeMenu),l=s.useRef(null),{pointerGraceTimerRef:i,onPointerGraceIntentChange:f}=c,x={__scopeMenu:e.__scopeMenu},m=s.useCallback(()=>{l.current&&window.clearTimeout(l.current),l.current=null},[]);return s.useEffect(()=>m,[m]),s.useEffect(()=>{const u=i.current;return()=>{window.clearTimeout(u),f(null)}},[i,f]),t.jsx(Re,{asChild:!0,...x,children:t.jsx(ot,{id:a.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":a.contentId,"data-state":vt(n.open),...e,ref:$e(o,a.onTriggerChange),onClick:u=>{var d;(d=e.onClick)==null||d.call(e,u),!(e.disabled||u.defaultPrevented)&&(u.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:M(e.onPointerMove,oe(u=>{c.onItemEnter(u),!u.defaultPrevented&&!e.disabled&&!n.open&&!l.current&&(c.onPointerGraceIntentChange(null),l.current=window.setTimeout(()=>{n.onOpenChange(!0),m()},100))})),onPointerLeave:M(e.onPointerLeave,oe(u=>{var v,p;m();const d=(v=n.content)==null?void 0:v.getBoundingClientRect();if(d){const C=(p=n.content)==null?void 0:p.dataset.side,b=C==="right",w=b?-5:5,_=d[b?"left":"right"],y=d[b?"right":"left"];c.onPointerGraceIntentChange({area:[{x:u.clientX+w,y:u.clientY},{x:_,y:d.top},{x:y,y:d.top},{x:y,y:d.bottom},{x:_,y:d.bottom}],side:C}),window.clearTimeout(i.current),i.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(u),u.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:M(e.onKeyDown,u=>{var v;const d=c.searchRef.current!=="";e.disabled||d&&u.key===" "||An[r.dir].includes(u.key)&&(n.onOpenChange(!0),(v=n.content)==null||v.focus(),u.preventDefault())})})})});mt.displayName=te;var xt="MenuSubContent",ht=s.forwardRef((e,o)=>{const n=Qe(T,e.__scopeMenu),{forceMount:r=n.forceMount,...a}=e,c=H(T,e.__scopeMenu),l=ae(T,e.__scopeMenu),i=ft(xt,e.__scopeMenu),f=s.useRef(null),x=U(o,f);return t.jsx(ne.Provider,{scope:e.__scopeMenu,children:t.jsx(pe,{present:r||c.open,children:t.jsx(ne.Slot,{scope:e.__scopeMenu,children:t.jsx(Ne,{id:i.contentId,"aria-labelledby":i.triggerId,...a,ref:x,align:"start",side:l.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:m=>{var u;l.isUsingKeyboardRef.current&&((u=f.current)==null||u.focus()),m.preventDefault()},onCloseAutoFocus:m=>m.preventDefault(),onFocusOutside:M(e.onFocusOutside,m=>{m.target!==i.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:M(e.onEscapeKeyDown,m=>{l.onClose(),m.preventDefault()}),onKeyDown:M(e.onKeyDown,m=>{var v;const u=m.currentTarget.contains(m.target),d=Fn[l.dir].includes(m.key);u&&d&&(c.onOpenChange(!1),(v=i.trigger)==null||v.focus(),m.preventDefault())})})})})})});ht.displayName=xt;function vt(e){return e?"open":"closed"}function ue(e){return e==="indeterminate"}function Ee(e){return ue(e)?"indeterminate":e?"checked":"unchecked"}function eo(e){const o=document.activeElement;for(const n of e)if(n===o||(n.focus(),document.activeElement!==o))return}function to(e,o){return e.map((n,r)=>e[(o+r)%e.length])}function no(e,o,n){const a=o.length>1&&Array.from(o).every(x=>x===o[0])?o[0]:o,c=n?e.indexOf(n):-1;let l=to(e,Math.max(c,0));a.length===1&&(l=l.filter(x=>x!==n));const f=l.find(x=>x.toLowerCase().startsWith(a.toLowerCase()));return f!==n?f:void 0}function oo(e,o){const{x:n,y:r}=e;let a=!1;for(let c=0,l=o.length-1;c<o.length;l=c++){const i=o[c].x,f=o[c].y,x=o[l].x,m=o[l].y;f>r!=m>r&&n<(x-i)*(r-f)/(m-f)+i&&(a=!a)}return a}function ro(e,o){if(!o)return!1;const n={x:e.clientX,y:e.clientY};return oo(n,o)}function oe(e){return o=>o.pointerType==="mouse"?e(o):void 0}var ao=Je,so=Re,co=et,io=tt,lo=je,uo=nt,po=xe,fo=rt,mo=st,xo=it,ho=ut,vo=dt,go=pt,wo=mt,Co=ht,De="DropdownMenu",[Mo,cr]=Ge(De,[We]),j=We(),[bo,gt]=Mo(De),wt=e=>{const{__scopeDropdownMenu:o,children:n,dir:r,open:a,defaultOpen:c,onOpenChange:l,modal:i=!0}=e,f=j(o),x=s.useRef(null),[m=!1,u]=Le({prop:a,defaultProp:c,onChange:l});return t.jsx(bo,{scope:o,triggerId:we(),triggerRef:x,contentId:we(),open:m,onOpenChange:u,onOpenToggle:s.useCallback(()=>u(d=>!d),[u]),modal:i,children:t.jsx(ao,{...f,open:m,onOpenChange:u,dir:r,modal:i,children:n})})};wt.displayName=De;var Ct="DropdownMenuTrigger",Mt=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...a}=e,c=gt(Ct,n),l=j(n);return t.jsx(so,{asChild:!0,...l,children:t.jsx(B.button,{type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...a,ref:$e(o,c.triggerRef),onPointerDown:M(e.onPointerDown,i=>{!r&&i.button===0&&i.ctrlKey===!1&&(c.onOpenToggle(),c.open||i.preventDefault())}),onKeyDown:M(e.onKeyDown,i=>{r||(["Enter"," "].includes(i.key)&&c.onOpenToggle(),i.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(i.key)&&i.preventDefault())})})})});Mt.displayName=Ct;var _o="DropdownMenuPortal",bt=e=>{const{__scopeDropdownMenu:o,...n}=e,r=j(o);return t.jsx(co,{...r,...n})};bt.displayName=_o;var _t="DropdownMenuContent",Rt=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=gt(_t,n),c=j(n),l=s.useRef(!1);return t.jsx(io,{id:a.contentId,"aria-labelledby":a.triggerId,...c,...r,ref:o,onCloseAutoFocus:M(e.onCloseAutoFocus,i=>{var f;l.current||(f=a.triggerRef.current)==null||f.focus(),l.current=!1,i.preventDefault()}),onInteractOutside:M(e.onInteractOutside,i=>{const f=i.detail.originalEvent,x=f.button===0&&f.ctrlKey===!0,m=f.button===2||x;(!a.modal||m)&&(l.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Rt.displayName=_t;var Ro="DropdownMenuGroup",So=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(lo,{...a,...r,ref:o})});So.displayName=Ro;var yo="DropdownMenuLabel",St=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(uo,{...a,...r,ref:o})});St.displayName=yo;var No="DropdownMenuItem",yt=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(po,{...a,...r,ref:o})});yt.displayName=No;var jo="DropdownMenuCheckboxItem",Nt=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(fo,{...a,...r,ref:o})});Nt.displayName=jo;var Io="DropdownMenuRadioGroup",Eo=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(mo,{...a,...r,ref:o})});Eo.displayName=Io;var Do="DropdownMenuRadioItem",jt=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(xo,{...a,...r,ref:o})});jt.displayName=Do;var Po="DropdownMenuItemIndicator",It=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(ho,{...a,...r,ref:o})});It.displayName=Po;var To="DropdownMenuSeparator",Et=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(vo,{...a,...r,ref:o})});Et.displayName=To;var Ao="DropdownMenuArrow",Fo=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(go,{...a,...r,ref:o})});Fo.displayName=Ao;var Oo="DropdownMenuSubTrigger",Dt=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(wo,{...a,...r,ref:o})});Dt.displayName=Oo;var ko="DropdownMenuSubContent",Pt=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,a=j(n);return t.jsx(Co,{...a,...r,ref:o,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Pt.displayName=ko;var Lo=wt,Go=Mt,$o=bt,Tt=Rt,At=St,Ft=yt,Ot=Nt,kt=jt,Lt=It,Gt=Et,$t=Dt,Kt=Pt;const Ko=Lo,Uo=Go,Bo=s.forwardRef(({className:e,inset:o,children:n,...r},a)=>t.jsxs($t,{ref:a,className:L("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",o&&"pl-8",e),...r,children:[n,t.jsx(fn,{className:"ml-auto"})]}));Bo.displayName=$t.displayName;const Vo=s.forwardRef(({className:e,...o},n)=>t.jsx(Kt,{ref:n,className:L("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));Vo.displayName=Kt.displayName;const Ut=s.forwardRef(({className:e,sideOffset:o=4,...n},r)=>t.jsx($o,{children:t.jsx(Tt,{ref:r,sideOffset:o,className:L("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));Ut.displayName=Tt.displayName;const zo=s.forwardRef(({className:e,inset:o,...n},r)=>t.jsx(Ft,{ref:r,className:L("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",o&&"pl-8",e),...n}));zo.displayName=Ft.displayName;const Bt=s.forwardRef(({className:e,children:o,checked:n,...r},a)=>t.jsxs(Ot,{ref:a,className:L("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...r,children:[t.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:t.jsx(Lt,{children:t.jsx(dn,{className:"h-4 w-4"})})}),o]}));Bt.displayName=Ot.displayName;const Yo=s.forwardRef(({className:e,children:o,...n},r)=>t.jsxs(kt,{ref:r,className:L("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[t.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:t.jsx(Lt,{children:t.jsx(mn,{className:"h-2 w-2 fill-current"})})}),o]}));Yo.displayName=kt.displayName;const Vt=s.forwardRef(({className:e,inset:o,...n},r)=>t.jsx(At,{ref:r,className:L("px-2 py-1.5 text-sm font-semibold",o&&"pl-8",e),...n}));Vt.displayName=At.displayName;const zt=s.forwardRef(({className:e,...o},n)=>t.jsx(Gt,{ref:n,className:L("-mx-1 my-1 h-px bg-muted",e),...o}));zt.displayName=Gt.displayName;const Ho=({values:e,options:o,handleValueClick:n,handleClear:r})=>{const[a,c]=s.useState(!1);return t.jsxs(Ko,{open:a,children:[t.jsx(Uo,{asChild:!0,className:"w-full",onClick:l=>{l.preventDefault(),c(i=>!i)},children:t.jsx(z,{variant:"outline",className:"w-full block text-black whitespace-normal text-ellipsis overflow-hidden",children:o.flatMap(l=>l.hashtags).filter(l=>e.includes(String(l.id))).map(l=>l.name).toLocaleString()})}),t.jsxs(Ut,{className:"w-auto min-w-96 max-h-96 grid grid-rows-8 ",onEscapeKeyDown:()=>c(!1),onInteractOutside:()=>c(!1),children:[t.jsx("div",{className:"w-full row-span-7 overflow-y-auto overflow-hidden",children:o.map(l=>t.jsxs("div",{children:[t.jsx(Vt,{children:l.name}),l.hashtags.map(i=>t.jsx(Bt,{checked:e.includes(String(i.id)),onCheckedChange:()=>n(String(i.id)),children:i.name},i.id)),t.jsx(zt,{})]},l.id))}),t.jsx("div",{className:"row-span-1 w-full h-full flex items-end border-t",children:t.jsx(z,{onClick:r,children:"Clear all"})})]})]})},qo=({})=>{const{t:e}=ke(),{location:o,types:n,selectedCounty:r,selectedCity:a,selectedArea:c,selectedType:l,listLink:i,hashtags:f,sortValue:x,area:m,isCollapsed:u,price:d,urlParams:v,selectedHashtags:p,handleClearFeatures:C,resetFilter:b,setArea:w,handleFeature:_,handleSort:y,setIsCollapsed:E,setPrice:R,setSelectedType:A,handleChangeCounty:I,handleChangeCity:S,renderSearchCount:F,handleChangeArea:D,renderTypeLabel:O,renderCountyLabel:G,renderCityLabel:q,renderAreaLabel:X}=sn(),J=s.useMemo(()=>F(),[c,a,r,p,f,d,m]);return t.jsxs("div",{className:"w-full mx-auto sm:mt-0 mt-24",children:[t.jsxs("button",{onClick:()=>E(h=>!h),className:"flex items-center justify-between w-full bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none",children:[t.jsx("span",{className:"text-xl","aria-label":"ToggleFilter",children:"Filter"}),t.jsx(pn,{className:L("transition-all",u&&"rotate-180"),width:20,height:20})]}),t.jsxs("form",{"aria-label":"Filters","aria-hidden":u,className:L("transition-all  place-items-center bg-opacity w-full mx-auto items-center  py-10  rounded-md grid xl:grid-cols-2 md:grid-cols-1 gap-4 4xl:grid-cols-4 p-9",u&&"h-0 !mt-0 overflow-hidden bg-red-50 opacity-0 p-0 "),children:[t.jsx(ee,{value:l,options:n.map(h=>({label:h.name,value:String(h.id)}))??[],placeholder:e("estateFilter.type"),setValue:A,renderLabel:h=>O(h)}),t.jsx(ee,{value:String(r==null?void 0:r.id),options:o.map(h=>({label:h.name,value:String(h.id)}))??[],placeholder:e("estateFilter.county"),setValue:I,renderLabel:h=>G(h)}),t.jsx(ee,{value:String(a==null?void 0:a.id),options:(r==null?void 0:r.cities.map(h=>({label:h.name,value:String(h.id)})))??[],placeholder:e("estateFilter.city"),setValue:S,disabled:!r,renderLabel:h=>q(h)}),t.jsx(ee,{value:String(c==null?void 0:c.id),options:(a==null?void 0:a.areas.map(h=>({label:h.name,value:String(h.id)})))??[],placeholder:e("estateFilter.area"),setValue:D,disabled:!r||!a,renderLabel:h=>X(h)}),t.jsxs("div",{className:"flex flex-col  text-white w-full",children:[t.jsx("span",{className:"col-span-2 text-xl pr-4",id:"Square",children:e("estateFilter.square")}),t.jsxs("div",{className:"flex flex-row w-full gap-x-4",children:[t.jsx("div",{className:"flex flex-col w-1/2","aria-labelledby":"Square",children:t.jsxs(ce,{htmlFor:"minArea",className:"text-base","aria-label":e("estateFilter.from"),children:[e("estateFilter.from"),t.jsxs("div",{className:"relative",children:[t.jsx(se,{className:"text-black",name:"minArea",value:String((m==null?void 0:m.from)??""),onChange:h=>w(N=>({...N??{},from:Number(h.target.value)>=0?Number(h.target.value):0}))}),t.jsx(z,{variant:"ghost",size:"icon",className:"absolute top-0 right-1",onClick:h=>{h.preventDefault(),w(N=>({...N??{},from:void 0}))},children:t.jsx(ie,{})})]})]})}),t.jsx("div",{className:"flex flex-col w-1/2 ml-auto","aria-labelledby":"Square",children:t.jsxs(ce,{className:"text-base",htmlFor:"maxArea","aria-label":e("estateFilter.to"),children:[e("estateFilter.to"),t.jsxs("div",{className:"relative",children:[t.jsx(se,{className:"text-black",name:"maxArea",value:String((m==null?void 0:m.to)??""),onChange:h=>w(N=>({...N??{},to:Number(h.target.value)>=0?Number(h.target.value):void 0}))}),t.jsx(z,{variant:"ghost",size:"icon",className:"absolute top-0 right-1",onClick:h=>{h.preventDefault(),w(N=>({...N??{},to:void 0}))},children:t.jsx(ie,{})})]})]})})]})]}),t.jsxs("div",{className:"flex flex-col  text-white w-full",children:[t.jsx("span",{className:"col-span-2 text-xl pr-4",id:"price",children:e("estateFilter.price")}),t.jsxs("div",{className:"flex flex-row w-full  gap-x-4","aria-labelledby":"price",children:[t.jsx("div",{className:"flex flex-col w-1/2",children:t.jsxs(ce,{htmlFor:"minPrice",className:"text-base",children:[e("estateFilter.from"),t.jsxs("div",{className:"relative",children:[t.jsx(se,{className:"text-black",name:"minPrice",value:String((d==null?void 0:d.from)??""),onChange:h=>R(N=>({...N??{},from:Number(h.target.value)>=0?Number(h.target.value):0}))}),t.jsx(z,{variant:"ghost",size:"icon",className:"absolute top-0 right-1",onClick:h=>{h.preventDefault(),R(N=>({...N??{},from:void 0}))},children:t.jsx(ie,{})})]})]})}),t.jsx("div",{className:"flex flex-col w-1/2 ml-auto","aria-labelledby":"price",children:t.jsxs(ce,{className:"text-base",htmlFor:"maxPrice",children:[e("estateFilter.to"),t.jsxs("div",{className:"relative",children:[t.jsx(se,{className:"text-black",name:"maxPrice",value:String((d==null?void 0:d.to)??""),onChange:h=>R(N=>({...N??{},to:Number(h.target.value)>=0?Number(h.target.value):void 0}))}),t.jsx(z,{variant:"ghost",size:"icon",className:"absolute top-0 right-1",onClick:h=>{h.preventDefault(),R(N=>({...N??{},to:void 0}))},children:t.jsx(ie,{})})]})]})})]})]}),t.jsxs("div",{className:"w-full grid grid-cols-1 sm:grid-cols-2 items-end h-full gap-x-4",children:[t.jsxs("div",{children:[t.jsx("span",{className:"col-span-2 text-xl pr-4",children:e("estateFilter.additional")}),t.jsx(Ho,{options:f,values:p,handleValueClick:_,handleClear:C})]}),t.jsxs("div",{children:[t.jsx("span",{className:"col-span-2 text-xl pr-4",children:e("sort.sort")}),t.jsx(ee,{value:x,options:[{label:e("sort.priceAsc"),value:"price_asc"},{label:e("sort.priceDesc"),value:"price_desc"},{label:e("sort.dateDesc"),value:"date_desc"},{label:e("sort.dateAsc"),value:"date_asc"}],placeholder:e("sort.sort"),setValue:y})]})]}),t.jsxs("div",{className:"w-full grid grid-cols-1 sm:grid-cols-2 items-end h-full gap-x-4 gap-y-4",children:[t.jsx(Yt,{"aria-label":"Reset",className:"transition ease-in-out px-4 w-full h-9 rounded-md bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center duration-300 mb-[1px] text-black",href:i,data:v,children:`${e("estateFilter.search")} (${J})`}),t.jsx(z,{"aria-label":"Reset",className:"transition ease-in-out px-4 w-full h-9 rounded-md bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center duration-300 mb-[1px] text-black",onClick:b,children:"Reset"})]})]})]})},Xo=()=>{const{estates:e}=Ht().props;return t.jsx("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3  w-full",children:e.map((o,n)=>t.jsx(cn,{estate:o,className:"min-h-96 !w-full"},n))})},ir=({types:e,params:o,locale:n,location:r,estates:a})=>{var f,x,m,u,d;const{t:c}=ke(),l=s.useMemo(()=>e.find(v=>v.slug===o.typeSlug)??{slug:"all",name:c("allEstates")},[o]),i=s.useMemo(()=>{const{areaSlug:v,citySlug:p,countySlug:C}=o,b=r.find(R=>R.slug===C),w=b==null?void 0:b.cities.find(R=>R.slug===p),_=w==null?void 0:w.areas.find(R=>R.slug===v),y=[l,b,w,_];return y.reduce((R,A,I)=>{var S,F,D,O;if(A!=null&&A.name){const G={typeSlug:(S=y[0])==null?void 0:S.slug,countySlug:I>=1?(F=y[1])==null?void 0:F.slug:void 0,citySlug:I>=2?(D=y[2])==null?void 0:D.slug:void 0,areaSlug:I>=3?(O=y[3])==null?void 0:O.slug:void 0,locale:n};R.push({label:A.name,url:route("estates.list",G)})}return R},[])},[o,r,l]);return t.jsxs(ln,{children:[t.jsxs(qt,{children:[t.jsx("title",{children:(f=i==null?void 0:i.at(-1))==null?void 0:f.label}),t.jsx("meta",{name:"description",content:i.length<2?c("exploreEstatesGeneral"):c("exploreEstates",{name:(x=i==null?void 0:i.at(-1))==null?void 0:x.label})}),t.jsx("meta",{name:"keywords"}),t.jsx("meta",{property:"og:title",content:(m=i==null?void 0:i.at(-1))==null?void 0:m.label}),t.jsx("meta",{property:"og:description",content:i.length<2?c("exploreEstatesGeneral"):c("exploreEstates",{name:(u=i==null?void 0:i.at(-1))==null?void 0:u.label})}),t.jsx("link",{rel:"apple-touch-icon",href:"/apple-icon.png"}),t.jsx("meta",{property:"og:image",content:"/logo.png"}),t.jsx("meta",{property:"og:url",content:(d=i==null?void 0:i.at(-1))==null?void 0:d.url}),t.jsx("meta",{property:"og:type",content:"website"})]}),t.jsx("div",{className:"relative flex min-h-screen p-4 pb-20 gap-16 sm:p-20",children:t.jsx("div",{className:"relative z-10 sm:p-10 w-full h-full",children:t.jsxs("section",{className:"flex flex-col min-h-[100svh] ","aria-label":c("salesIn"),children:[t.jsx(qo,{}),t.jsx(Xt,{items:i}),t.jsx("h1",{className:"sm:text-7xl text-5xl mb-4 mt-16",children:l==null?void 0:l.name}),t.jsx(Xo,{})]})})})]})};export{ir as default};
