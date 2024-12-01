import{r as i,e as Y,f as W,q as L,j as n,a as N,i as q}from"./app-BqIElpsO.js";import{L as M}from"./logo-Cr4xRgwm.js";const G=(...t)=>{console!=null&&console.warn&&(g(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t))},I={},C=(...t)=>{g(t[0])&&I[t[0]]||(g(t[0])&&(I[t[0]]=new Date),G(...t))},O=(t,e)=>()=>{if(t.isInitialized)e();else{const s=()=>{setTimeout(()=>{t.off("initialized",s)},0),e()};t.on("initialized",s)}},k=(t,e,s)=>{t.loadNamespaces(e,O(t,s))},R=(t,e,s,r)=>{if(g(s)&&(s=[s]),t.options.preload&&t.options.preload.indexOf(e)>-1)return k(t,s,r);s.forEach(l=>{t.options.ns.indexOf(l)<0&&t.options.ns.push(l)}),t.loadLanguages(e,O(t,r))},J=(t,e,s={})=>!e.languages||!e.languages.length?(C("i18n.languages were undefined or empty",e.languages),!0):e.hasLoadedNamespace(t,{lng:s.lng,precheck:(r,l)=>{var a;if(((a=s.bindI18n)==null?void 0:a.indexOf("languageChanging"))>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!l(r.isLanguageChangingTo,t))return!1}}),g=t=>typeof t=="string",K=t=>typeof t=="object"&&t!==null,V=i.createContext();class Z{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(s=>{this.usedNamespaces[s]||(this.usedNamespaces[s]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const _=(t,e)=>{const s=i.useRef();return i.useEffect(()=>{s.current=t},[t,e]),s.current},B=(t,e,s,r)=>t.getFixedT(e,s,r),Q=(t,e,s,r)=>i.useCallback(B(t,e,s,r),[t,e,s,r]),U=(t,e={})=>{var E,A,F,$;const{i18n:s}=e,{i18n:r,defaultNS:l}=i.useContext(V)||{},a=s||r||W();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new Z),!a){C("You will need to pass in an i18next instance by using initReactI18next");const c=(u,m)=>g(m)?m:K(m)&&g(m.defaultValue)?m.defaultValue:Array.isArray(u)?u[u.length-1]:u,f=[c,{},!1];return f.t=c,f.i18n={},f.ready=!1,f}(E=a.options.react)!=null&&E.wait&&C("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const h={...Y(),...a.options.react,...e},{useSuspense:b,keyPrefix:p}=h;let o=l||((A=a.options)==null?void 0:A.defaultNS);o=g(o)?[o]:o||["translation"],($=(F=a.reportNamespaces).addUsedNamespaces)==null||$.call(F,o);const d=(a.isInitialized||a.initializedStoreOnce)&&o.every(c=>J(c,a,h)),H=Q(a,e.lng||null,h.nsMode==="fallback"?o:o[0],p),z=()=>H,v=()=>B(a,e.lng||null,h.nsMode==="fallback"?o:o[0],p),[S,j]=i.useState(z);let w=o.join();e.lng&&(w=`${e.lng}${w}`);const T=_(w),x=i.useRef(!0);i.useEffect(()=>{const{bindI18n:c,bindI18nStore:f}=h;x.current=!0,!d&&!b&&(e.lng?R(a,e.lng,o,()=>{x.current&&j(v)}):k(a,o,()=>{x.current&&j(v)})),d&&T&&T!==w&&x.current&&j(v);const u=()=>{x.current&&j(v)};return c&&(a==null||a.on(c,u)),f&&(a==null||a.store.on(f,u)),()=>{x.current=!1,a&&(c==null||c.split(" ").forEach(m=>a.off(m,u))),f&&a&&f.split(" ").forEach(m=>a.store.off(m,u))}},[a,w]),i.useEffect(()=>{x.current&&d&&j(z)},[a,p,d]);const y=[S,a,d];if(y.t=S,y.i18n=a,y.ready=d,d||!d&&!b)return y;throw new Promise(c=>{e.lng?R(a,e.lng,o,()=>c()):k(a,o,()=>c())})};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),D=(...t)=>t.filter((e,s,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ee={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:l="",children:a,iconNode:h,...b},p)=>i.createElement("svg",{ref:p,...ee,width:e,height:e,stroke:t,strokeWidth:r?Number(s)*24/Number(e):s,className:D("lucide",l),...b},[...h.map(([o,d])=>i.createElement(o,d)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(t,e)=>{const s=i.forwardRef(({className:r,...l},a)=>i.createElement(te,{ref:a,iconNode:e,className:D(`lucide-${X(t)}`,r),...l}));return s.displayName=`${t}`,s};/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=se("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),P=()=>{const t=L(),{locale:e}=t.props,s=r=>{const a=t.url.split("/");return a[1]=r,a.join("/")};return n.jsx("ul",{className:"flex items-center gap-x-8 uppercase",children:["en","hr"].map(r=>n.jsx("li",{children:n.jsx(N,{className:e===r?"underline underline-offset-4":"",href:s(r),children:r})},r))})},ne="/build/assets/location-DlYlTTA0.svg",re=({})=>{const t=new Date().getFullYear(),{t:e}=U(),{locale:s}=L().props;return n.jsxs("div",{className:"text-white w-full bg-stone-800 p-10 pb-2 sm:text-left text-center",children:[n.jsxs("footer",{className:"grid grid-cols-1 gap-y-5 sm:grid-cols-3 w-full p-4","aria-label":"Footer",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"sr-only",children:e("footer.companyInfo")}),n.jsx("div",{className:"text-7xl","aria-label":e("footer.logo"),children:n.jsx("img",{src:M,className:"h-full mb-2 mx-auto sm:mx-0 sm:mr-auto",width:300,height:200,alt:"Logo"})}),n.jsx("p",{"aria-label":e("footer.workHours"),className:"text-lg",children:e("footer.workHours")})]}),n.jsxs("div",{className:"flex items-center justify-evenly flex-col text-lg",children:[n.jsxs("address",{className:"not-italic flex items-center",children:[n.jsx("div",{"aria-hidden":"true",children:n.jsx("img",{alt:"Location icon",src:ne,width:30,height:30})}),n.jsx("p",{"aria-label":e("footer.address"),children:"Ante Poljička 50a, Vodice"})]}),n.jsxs("a",{href:"mailto:someone@example.com","aria-label":e("footer.contactEmail"),children:[e("footer.email")," info@luxvilla.hr"]}),n.jsxs("a",{href:"tel:+385992066894","aria-label":e("footer.contactPhone"),children:[e("footer.phone")," +385 99 206 6894"]}),n.jsx(N,{href:route("terms.show",{locale:s}),children:e("terms")})]}),n.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.6179729633004!2d15.773190012647035!3d43.76002937097691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1334d7fb5144ef07%3A0x31bb33cf35c3b721!2sUl.%20Ante%20Polji%C4%8Dka%2050a%2C%2022211%2C%20Vodice!5e0!3m2!1sen!2shr!4v1730746500970!5m2!1sen!2shr",className:"w-full h-full","aria-label":"Map",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",allowFullScreen:!1,title:"Office Location"})]}),n.jsxs("p",{className:"text-center py-1",children:["© ",t," • Lux Villa • ",e("footer.reserved")," •"]}),n.jsx("a",{target:"_blank",referrerPolicy:"no-referrer",href:"https://www.valentino-digital-solutions.hr",className:"text-center py-1",children:e("meta.developedBy")})]})},ie=({children:t})=>{const{t:e}=U(),{locale:s}=L().props;i.useEffect(()=>{q.changeLanguage(s)},[s]);const r=L().props.types;return n.jsxs("div",{className:"bg-stone-100",children:[n.jsx("header",{children:n.jsxs("nav",{className:"w-full flex items-center justify-between py-7 px-12 z-50 fixed top-0 left-0 bg-theme text-gold",children:[n.jsx(N,{href:"/",className:"z-20","aria-label":e("goToHome"),children:n.jsx("img",{src:M,className:"max-h-10",width:100,height:100,alt:"Logo"})}),n.jsx("ul",{className:"sm:flex items-center justify-evenly min-w-[30%] z-10 hidden gap-x-8","aria-label":e("estateFilter.typeDefault"),children:r==null?void 0:r.map(l=>n.jsx("li",{children:n.jsx(N,{"aria-label":`${e("salesIn")} ${l.name}`,href:route("estates.list",{locale:s,typeSlug:l.slug}),children:l.name})},l.slug))}),n.jsx("div",{className:"sm:flex hidden z-10",children:n.jsx(P,{})}),n.jsxs("div",{className:"flex items-center justify-center sm:hidden z-10 relative",children:[n.jsx("input",{type:"checkbox",className:"hidden",id:"menu-toggle"}),n.jsx("label",{htmlFor:"menu-toggle",className:"hamburger-label z-10",children:n.jsx(ae,{width:35,height:35})}),n.jsxs("aside",{id:"sidenav",className:"w-[100svw] h-[100svh] fixed top-0 -left-[100svw] bg-theme flex flex-col items-center justify-center text-gold transition-all",children:[n.jsx("ul",{className:"flex items-center justify-start  w-full min-w-[30%] z-10 pb-12 flex-col gap-y-3 mt-28 overflow-y-auto","aria-label":e("estateFilter.typeDefault"),children:r==null?void 0:r.map(l=>n.jsx("li",{children:n.jsx(N,{"aria-label":`${e("salesIn")} ${l.name}`,href:route("estates.list",{locale:s,typeSlug:l.slug}),children:l.name})},l.slug))}),n.jsx(P,{})]})]})]})}),n.jsx("main",{className:"z-1 pb-20",children:t}),n.jsx(re,{})]})};export{ie as A,se as c,U as u};
