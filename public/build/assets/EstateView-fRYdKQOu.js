import{r as D,j as e,y as W,B as O,Y}from"./app-BqIElpsO.js";import{I as z,B as Z}from"./input-CP7vtZdL.js";import{P as J}from"./index-DlCV_gpW.js";import{c as G,B as F}from"./button-Dx895b2C.js";import{c as u}from"./utils-Dj4vKr9q.js";import{c as L,u as A,A as K}from"./AppLayout-DbDsOfs8.js";import{a as Q,C as U,b as X}from"./react-icons.esm-BRh438JB.js";import{M as ee,T as se,C as re}from"./leaflet-BDAEz313.js";import"./logo-Cr4xRgwm.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=L("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=L("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=L("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=L("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=L("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);var ce="Label",V=D.forwardRef((s,r)=>e.jsx(J.label,{...s,ref:r,onMouseDown:a=>{var c;a.target.closest("button, input, select, textarea")||((c=s.onMouseDown)==null||c.call(s,a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));V.displayName=ce;var _=V;const ne=G("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),q=D.forwardRef(({className:s,...r},a)=>e.jsx(_,{ref:a,className:u(ne(),s),...r}));q.displayName=_.displayName;const ie=({estate:s})=>{const{t:r}=A(),a=D.useRef(null),i=c=>{c.preventDefault();const m=new FormData(c.currentTarget);W.post(route("contact.store"),m,{onSuccess:()=>{var n;(n=a==null?void 0:a.current)==null||n.reset(),O.success(r("contact.emailSent"))},onError:n=>{O.error(r("contact.sendError"))}})};return e.jsxs("form",{className:"border rounded-md px-8 py-4 bg-white h-auto",ref:a,onSubmit:i,children:[e.jsx("p",{className:"text-xl text-center pb-2",children:r("contact.title")}),e.jsxs(q,{htmlFor:"name",children:[r("contact.name"),e.jsx(z,{id:"name",required:!0,name:"name",type:"text",autoComplete:"name"})]}),e.jsxs(q,{htmlFor:"email",children:[r("contact.email"),e.jsx(z,{id:"email",name:"email",required:!0,type:"email",autoComplete:"email"})]}),e.jsxs(q,{htmlFor:"phone",children:[r("contact.phone"),e.jsx(z,{id:"phone",name:"phone",required:!0,type:"phone",autoComplete:"tel"})]}),e.jsx(z,{type:"hidden",name:"estate_id",value:s.estateId}),e.jsxs(q,{htmlFor:"msg",children:[r("contact.msg"),e.jsx("textarea",{id:"msg",name:"msg",required:!0,className:"resize-y border text-sm border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground !theme flex w-full rounded-md  px-3 py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"})]}),e.jsx(F,{className:"mt-2",type:"submit",children:r("contact.submit")})]})},de=({estate:s})=>{const{t:r}=A();return e.jsxs("section",{className:"w-full px-8 estate-details text-sm text-center grid grid-cols-2 h-1/2 items-center",children:[e.jsxs("p",{"aria-label":"ID",children:[e.jsx("span",{className:"w-full text-sm",children:"ID:"}),s.estateId,e.jsx(le,{className:"text-gold ml-2"})]}),e.jsxs("p",{"aria-label":r("estateCard.area"),children:[e.jsxs("span",{className:"w-full text-sm",children:[r("estateCard.area"),":"]}),s.areaSize," m²",e.jsx(oe,{className:"text-gold ml-2"})]}),e.jsxs("p",{"aria-label":r("estateCard.rooms"),children:[e.jsxs("span",{className:"w-full text-sm",children:[r("estateCard.rooms"),":"]}),s.rooms,e.jsx(ae,{className:"text-gold ml-2"})]}),s.parking&&e.jsxs("p",{"aria-label":r("estateCard.parking"),children:[e.jsxs("span",{className:"w-full text-sm",children:[r("estateCard.parking"),":"]}),s.parking,e.jsx(te,{className:"text-gold ml-2"})]}),s.yearBuilt&&e.jsxs("p",{"aria-label":r("estateCard.dateBuilt"),children:[e.jsxs("span",{className:"w-full text-sm",children:[r("estateCard.dateBuilt"),":"]}),s.yearBuilt,e.jsx(P,{className:"text-gold ml-2"})]}),s.yearRenovated&&e.jsxs("p",{"aria-label":r("estateCard.dateRenovated"),children:[e.jsxs("span",{className:"w-full text-sm",children:[r("estateCard.dateRenovated"),":"]}),new Date(s.yearRenovated).getFullYear(),e.jsx(P,{className:"text-gold ml-2"})]})]})},me=({estate:s})=>{var m,n,x,h,p,f,g,j,y,v,b,w,N,k,C,S,I,M,T,$,B,R;const[r,a]=D.useState(),i=D.useRef([]),c=l=>{var o;const t=l<0?s.images.length-1:l>=s.images.length?0:l;a(t),a(t),(o=i.current[t])==null||o.scrollIntoView({block:"center",inline:"center",behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gap-1 w-full  grid grid-cols-3 grid-rows-3 aspect-square sm:aspect-video overflow-hidden",children:[((m=s.images)==null?void 0:m[0])&&e.jsx("div",{className:u("border w-full h-full cursor-pointer overflow-hidden","col-span-3 row-span-2"),children:e.jsx("img",{src:(x=(n=s.images[0])==null?void 0:n.sources)==null?void 0:x.desktop,height:700,alt:((h=s.images[0])==null?void 0:h.altText)??"Estate image",srcSet:`${(g=(f=(p=s.images)==null?void 0:p[0])==null?void 0:f.sources)==null?void 0:g.mobile} 600w, ${(v=(y=(j=s.images)==null?void 0:j[0])==null?void 0:y.sources)==null?void 0:v.desktop} 1200w`,width:700,onClick:()=>a(0),className:u("border w-full h-full object-cover cursor-pointer hover:scale-110 transition-all")})}),e.jsx("div",{className:"row-span-1 col-span-3 flex flex-row  max-h-20 items-center overflow-x-scroll overflow-y-hidden",children:s.images.slice(1).map((l,t)=>{var o,d,E;return e.jsx("div",{className:u("border cursor-pointer overflow-hidden aspect-square flex items-center"),children:e.jsx("img",{src:(o=l==null?void 0:l.sources)==null?void 0:o.desktop,height:700,alt:(l==null?void 0:l.altText)??"Estate image",width:700,onClick:()=>a(t+1),srcSet:`${(d=l==null?void 0:l.sources)==null?void 0:d.mobile} 600w, ${(E=l==null?void 0:l.sources)==null?void 0:E.desktop} 1200w`,className:u("border object-cover cursor-pointer hover:scale-110 transition-all")})},t)})})]}),e.jsxs("div",{"aria-label":"Image list","aria-disabled":!0,onClick:l=>{l.target===l.currentTarget&&a(void 0)},className:u("fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-80 flex flex-row",r===void 0&&"hidden"),children:[e.jsx(F,{className:"mt-auto mb-auto sm:w-16 sm:h-16 h-8 w-8 rounded-full",onClick:()=>c(Number(r)-1),children:e.jsx(Q,{})}),e.jsxs("div",{className:"flex flex-col h-full w-full py-4  flex-1",onClick:l=>{l.target===l.currentTarget&&a(void 0)},children:[e.jsxs("div",{className:"relative w-full h-[90%] py-4  flex flex-col",onClick:l=>{l.target===l.currentTarget&&a(void 0)},children:[e.jsx(F,{className:"absolute top-0 right-0  sm:w-16 sm:h-16 h-8 w-8 rounded-full rotate-90",onClick:()=>a(void 0),children:e.jsx(U,{})}),r!==void 0&&((b=s.images)==null?void 0:b[r])&&e.jsx("img",{src:`${(k=(N=(w=s.images)==null?void 0:w[r])==null?void 0:N.sources)==null?void 0:k.desktop}`,alt:((C=s.images)==null?void 0:C[r].altText)??"Estate Image",srcSet:`${(M=(I=(S=s.images)==null?void 0:S[r])==null?void 0:I.sources)==null?void 0:M.mobile} 600w, ${(B=($=(T=s.images)==null?void 0:T[r])==null?void 0:$.sources)==null?void 0:B.desktop} 1200w`,width:1920,onClick:l=>{l.target===l.currentTarget&&a(void 0)},className:"h-full w-full object-contain",height:1080})]}),e.jsx("div",{className:"flex items-center  h-[10%] overflow-x-scroll no-scrollbar",children:e.jsx("div",{className:"flex  gap-x-1 h-full ml-auto mr-auto  overflow-y-hidden ",children:(R=s==null?void 0:s.images)==null?void 0:R.map((l,t)=>{var o,d,E;return e.jsx("img",{src:(o=l==null?void 0:l.sources)==null?void 0:o.desktop,srcSet:`${(d=l==null?void 0:l.sources)==null?void 0:d.mobile} 600w, ${(E=l==null?void 0:l.sources)==null?void 0:E.desktop} 1200w`,height:100,alt:l.altText??"Estate image",width:100,ref:H=>{i.current[t]=H},onClick:()=>c(t),className:u("border object-contain w-auto aspect-square cursor-pointer z-10 transition-all bg-theme hover:-translate-y-2",r===t&&"bg-gold")},t)})})})]}),e.jsx(F,{className:"mt-auto mb-auto sm:w-16 sm:h-16 h-8 w-8 rounded-full",onClick:()=>c(Number(r)+1),children:e.jsx(X,{})})]})]})},ue=({estate:s})=>{var r;return!(s!=null&&s.coordinates)||((r=s.coordinates)==null?void 0:r.length)!==2?null:e.jsx("div",{className:"w-full h-96 z-0 mt-8",children:e.jsxs(ee,{style:{width:"100%",height:"90%",zIndex:0},center:s.coordinates,zoom:13,scrollWheelZoom:!1,children:[e.jsx(se,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(re,{center:s.coordinates,radius:s.radius??500})]},JSON.stringify(s.coordinates))})},we=({estate:s,locale:r})=>{var i,c,m,n,x,h,p,f,g,j,y,v,b,w,N,k,C,S,I,M,T,$,B,R,l,t;const{t:a}=A();return e.jsxs(K,{children:[e.jsxs(Y,{children:[e.jsx("title",{children:s==null?void 0:s.name}),e.jsx("meta",{name:"description",content:s.description.replace(/<\/?[^>]+(>|$)/g,"")}),e.jsx("meta",{name:"keywords",content:`${(i=s.estateType)==null?void 0:i.name}, ${(c=s==null?void 0:s.area)==null?void 0:c.name}, ${(n=(m=s==null?void 0:s.area)==null?void 0:m.city)==null?void 0:n.name}, ${(p=(h=(x=s==null?void 0:s.area)==null?void 0:x.city)==null?void 0:h.county)==null?void 0:p.name}`}),e.jsx("meta",{property:"og:title",content:a("meta.homepage.title")}),e.jsx("meta",{property:"og:description",content:s.description.replace(/<\/?[^>]+(>|$)/g,"")}),e.jsx("link",{rel:"apple-touch-icon",href:"/apple-icon.png"}),e.jsx("meta",{property:"og:image",content:(j=(g=(f=s.images)==null?void 0:f[0])==null?void 0:g.sources)==null?void 0:j.og}),e.jsx("meta",{property:"og:url",content:`https://luxvilla.hr/${r}/${s.estateId}`}),e.jsx("meta",{property:"og:type",content:"website"})]}),e.jsxs("div",{className:"pt-32 sm:px-20 px-8",children:[e.jsx("h1",{className:"text-center text-5xl",children:s.name}),s.sold&&e.jsx("div",{className:"bg-red-600 flex items-center justify-center text-4xl text-white w-full h-32 rounded-md",children:"SOLD"}),e.jsx("div",{className:"my-6",children:e.jsx(Z,{items:[{url:route("estates.list",{typeSlug:(y=s.estateType)==null?void 0:y.slug,locale:r}),label:(v=s.estateType)==null?void 0:v.name},{url:route("estates.list",{typeSlug:(b=s.estateType)==null?void 0:b.slug,countySlug:(w=s.area.city.county)==null?void 0:w.slug,locale:r}),label:(N=s.area.city.county)==null?void 0:N.name},{url:route("estates.list",{typeSlug:(k=s.estateType)==null?void 0:k.slug,countySlug:(C=s.area.city.county)==null?void 0:C.slug,citySlug:(S=s.area.city)==null?void 0:S.slug,locale:r}),label:(I=s.area.city)==null?void 0:I.name},{url:route("estates.list",{typeSlug:(M=s.estateType)==null?void 0:M.slug,countySlug:(T=s.area.city.county)==null?void 0:T.slug,citySlug:($=s.area.city)==null?void 0:$.slug,areaSlug:(B=s.area)==null?void 0:B.slug,locale:r}),label:s.area.name},{url:route("estates.show",{estateId:s.estateId,locale:r}),label:s.estateId}]})}),e.jsx("div",{className:"flex flex-row  w-full flex-wrap relative",children:e.jsxs("div",{className:"grid sm:grid-cols-2 grid-cols-1 gap-x-1",children:[s.images.length>0&&e.jsx(me,{estate:s}),e.jsxs("div",{className:"sm:hidden flex flex-row flex-wrap -mt-2 mb-4 ",children:[e.jsxs("p",{"aria-label":a("estateCard.price"),className:"text-5xl w-full",children:[e.jsx("span",{className:"text-gold font-semibold mr-3",children:"€"}),s.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),e.jsxs("div",{className:"my-2",children:[a("estateCard.vat1"),e.jsx("br",{}),e.jsxs("span",{className:"font-semibold",children:["3% + ",a("estateCard.vat")," "]}),a("estateCard.vat2")]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-y-20 sm:grid-cols-2",children:[e.jsx(de,{estate:s}),e.jsx(ie,{estate:s})]}),e.jsxs("div",{className:"hidden  sm:flex flex-row flex-wrap",children:[e.jsxs("p",{"aria-label":a("estateCard.price"),className:"text-5xl w-full",children:[e.jsx("span",{className:"text-gold font-semibold mr-3",children:"€"}),s.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),e.jsxs("div",{className:"my-2",children:[a("estateCard.vat1"),e.jsx("br",{}),e.jsxs("span",{className:"font-semibold",children:["3% + ",a("estateCard.vat")," "]}),a("estateCard.vat2")]})]})]})}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold text-3xl mb-4",children:a("estateCard.features")}),e.jsx("ul",{className:"flex items-start justify-start flex-wrap gap-y-12 pb-6",children:(R=Object.keys(s.hashtags))==null?void 0:R.map(o=>e.jsxs("li",{className:"w-1/2 sm:w-1/3",children:[e.jsx("div",{className:"flex items-center text-lg font-semibold flex-row",children:e.jsx("p",{children:o})},o),e.jsx("ul",{className:"pt-2",children:s.hashtags[o].map(d=>e.jsx("li",{className:"flex items-center ml-2",children:e.jsx("p",{children:d.name})},d.id+o))})]},o))})]}),e.jsxs("div",{className:"py-4",children:[e.jsx("h2",{className:"font-semibold text-3xl mb-4",children:a("description")}),e.jsx("div",{dangerouslySetInnerHTML:{__html:s.description}})]}),((l=s==null?void 0:s.video)==null?void 0:l.url)&&e.jsx("video",{controls:!0,src:((t=s.video)==null?void 0:t.url)??"",autoPlay:!1}),e.jsx(ue,{estate:s})]})]})};export{we as default};
