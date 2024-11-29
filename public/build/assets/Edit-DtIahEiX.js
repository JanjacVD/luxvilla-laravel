import{W as F,r as p,j as a}from"./app-CGJ-POVG.js";import{C as u}from"./Checkbox-CZ5TvDT1.js";import{T as C,M as T,I as S}from"./TranslatableBlockInput-BGdXo8lJ.js";import{I as s}from"./InputLabel-BseII9su.js";import{P as I}from"./PrimaryButton-CY4jvF3z.js";import{T as n}from"./TextInput-CZ8NGlvE.js";import{T as B}from"./TranslatableInput-H8eIUHXx.js";import{B as D}from"./button-CCpRQZMf.js";import{A as $}from"./AuthenticatedLayout-DPOT4Wic.js";import"./SecondaryButton-B6Lg20DQ.js";import"./utils-B3W_D02W.js";import"./index-FzMvuTP5.js";import"./index-CsMcbAyz.js";import"./ApplicationLogo-C4D5jNCP.js";import"./logo-Cr4xRgwm.js";import"./transition-CAB3gdSs.js";const Q=({estate:d,counties:o,types:j,hashtagGroups:g,images:N,videos:q})=>{var x,v;const{data:r,setData:i,post:f,reset:b}=F({...d,description:d.description??{en:"",hr:""},hashtags:((x=d==null?void 0:d.hashtags)==null?void 0:x.map(e=>e.id))??[],area:d.area_size,year_built:String(d.year_built),year_renovated:String(d.year_renovated),imagesToDelete:[],images:[],removeVideo:!1,video:void 0}),y=e=>{if(e.preventDefault(),!r.area_id)return alert("Potrebno je unijeti lokaciju");f(route("real-estate.update",{real_estate:d}),{onSuccess:()=>b(),forceFormData:!0})},[l,_]=p.useState(o.find(e=>e.id===d.area.city.county.id)),[m,h]=p.useState((v=o.find(e=>e.id===d.area.city.county.id))==null?void 0:v.cities.find(e=>e.id===d.area.city.id));return a.jsx($,{header:"Kreiraj Nekretninu",children:a.jsx("div",{className:"p-8",children:a.jsxs("form",{encType:"multipart/form-data",onSubmit:y,children:[a.jsx(B,{label:"Naziv",setData:i,value:r}),a.jsx(C,{value:r,label:"Opis",setData:i}),a.jsxs("div",{className:"flex flex-row items-center gap-x-4",children:[a.jsxs(s,{htmlFor:"featured",className:"text-lg mt-4",children:[a.jsx(u,{className:"mr-2",id:"featured",name:"featured",checked:r.featured,onChange:e=>i("featured",e.target.checked)}),"Istaknuto?"]}),a.jsxs(s,{htmlFor:"parkingAvailable",className:"text-lg mt-4",children:[a.jsx(u,{className:"mr-2",id:"parkingAvailable",name:"parkingAvailable",checked:r.parking_available,onChange:e=>i("parking_available",e.target.checked)}),"Parking?"]}),r.parking_available&&a.jsxs(s,{htmlFor:"parkingSpaces",className:"text-lg mt-4",children:["Broj mjesta?",a.jsx(n,{className:"ml-2 w-16",id:"parkingSpaces",name:"parkingSpaces",value:r.parking_spaces??void 0,onChange:e=>i("parking_spaces",isNaN(Number(e.target.value))?0:Number(e.target.value))})]}),a.jsxs(s,{htmlFor:"rooms",className:"text-lg mt-4",children:["Broj Soba?",a.jsx(n,{className:"ml-2 w-16",id:"rooms",name:"rooms",value:r.rooms??void 0,onChange:e=>i("rooms",isNaN(Number(e.target.value))?0:Number(e.target.value))})]}),a.jsxs(s,{htmlFor:"area",className:"text-lg mt-4",children:["Površina",a.jsx(n,{className:"ml-2 w-16",id:"area",name:"area",value:r.area,onChange:e=>i("area",isNaN(Number(e.target.value))?0:Number(e.target.value))})]}),a.jsxs(s,{htmlFor:"price",className:"text-lg mt-4",children:["Cijena",a.jsx(n,{className:"ml-2 w-16",id:"price",name:"price",value:r.price,onChange:e=>i("price",isNaN(Number(e.target.value))?0:Number(e.target.value))})]}),a.jsxs(s,{htmlFor:"yearBuilt",className:"text-lg mt-4",children:["Godina Izgradnje",a.jsx(n,{className:"ml-2 w-16",id:"yearBuilt",type:"text",name:"yearBuilt",value:r.year_built,onChange:e=>{i("year_built",e.target.value)}})]}),a.jsxs(s,{htmlFor:"yearRenovated",className:"text-lg mt-4",children:["Godina Zadnje Renovacije",a.jsx(n,{className:"ml-2 w-16",id:"yearRenovated",name:"yearRenovated",value:r.year_renovated,onChange:e=>{i("year_renovated",e.target.value)}})]})]}),a.jsx("div",{className:"flex flex-row items-center gap-x-4 my-4",children:a.jsxs(s,{htmlFor:"estateType",className:"text-lg",children:["Tip Nekretnine",a.jsxs("select",{id:"estateType",name:"estateType",className:"rounded-md ml-4",value:r==null?void 0:r.estate_type_id,required:!0,onChange:e=>{i("estate_type_id",Number(e.target.value))},children:[a.jsx("option",{hidden:!0,value:void 0,children:"Odaberi Tip"}),j.map(e=>a.jsx("option",{value:e.id,children:e.name.hr},e.id))]})]})}),a.jsxs("div",{className:"grid grid-cols-2",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"p-4",children:["Podaci o vlasniku",a.jsxs("div",{className:"pl-4 pt-2",children:[a.jsxs(s,{htmlFor:"ownerName",className:"text-lg",children:["Ime i Prezine",a.jsx(n,{className:"ml-2",id:"ownerName",name:"ownerName",required:!0,value:r.owner_name,onChange:e=>i("owner_name",e.target.value)})]}),a.jsxs(s,{htmlFor:"ownerContact",className:"text-lg mt-4",children:["Kontakt",a.jsx(n,{className:"ml-2 ",id:"ownerContact",required:!0,name:"ownerContact",value:r.owner_contact,onChange:e=>i("owner_contact",e.target.value)})]})]})]}),a.jsxs("div",{className:"p-4",children:["Lokacija",a.jsxs("div",{className:"pl-4 pt-2 flex flex-col gap-y-4",children:[a.jsxs(s,{htmlFor:"county",className:"text-lg",children:["Županija",a.jsxs("select",{id:"county",name:"county",required:!0,className:"rounded-md ml-4",value:l==null?void 0:l.id,onChange:e=>{_(o.find(t=>String(t.id)===e.target.value)),h(void 0),i("area_id",void 0),i("coordinates",void 0)},children:[a.jsx("option",{hidden:!0,value:void 0,children:"Odaberi Županiju"}),o.map(e=>a.jsx("option",{value:e.id,children:e.name.hr},e.id))]})]}),a.jsxs(s,{htmlFor:"city",className:"text-lg",children:["Grad",l==null?void 0:l.id,a.jsxs("select",{id:"city",required:!0,disabled:!l,name:"city",value:m==null?void 0:m.id,className:"rounded-md ml-4",onChange:e=>{h(l==null?void 0:l.cities.find(t=>String(t.id)===e.target.value)),i("area_id",void 0),i("coordinates",void 0)},children:[a.jsx("option",{hidden:!0,value:void 0,children:"Odaberi Grad"}),l==null?void 0:l.cities.map(e=>a.jsx("option",{value:e.id,children:e.name}))]})]}),a.jsxs(s,{htmlFor:"area",className:"text-lg",children:["Naselje",a.jsxs("select",{id:"area",name:"area",className:"rounded-md ml-4",required:!0,disabled:!m,onChange:e=>{i("coordinates",void 0),i("area_id",Number(e.currentTarget.value))},value:r.area_id,children:[a.jsx("option",{hidden:!0,value:void 0,children:"Odaberi Naselje"}),m==null?void 0:m.areas.map(e=>a.jsx("option",{value:e.id,children:e.name}))]})]}),a.jsxs(s,{htmlFor:"address",className:"text-lg",children:["Adresa",a.jsx(n,{className:"ml-2",id:"address",name:"address",required:!0,value:r.address,onChange:e=>i("address",e.target.value)})]}),a.jsxs(s,{htmlFor:"radius",className:"text-lg",children:["Radius",a.jsx(n,{className:"ml-2",id:"radius",type:"range",min:1,max:1e4,name:"radius",value:r.radius,onChange:e=>i("radius",Number(e.target.value))}),a.jsx(n,{className:"ml-2",id:"radius",type:"number",min:0,max:1e4,name:"radius",value:r.radius,onChange:e=>i("radius",Math.max(0,Math.min(Number(e.target.value),1e4)))})]}),a.jsx(T,{setData:e=>i("coordinates",e),value:r.coordinates,address:r.address,area:m==null?void 0:m.areas.find(e=>e.id===r.area_id),county:l,radius:r.radius})]})]})]}),a.jsxs("div",{className:"h-full",children:[a.jsx("p",{className:"py-2 text-left",children:"Hashtags"}),g.map(e=>a.jsxs("div",{children:[e.name.hr,a.jsx("div",{className:"px-4 grid grid-cols-4 mb-4",children:e.hashtags.map(t=>a.jsxs(s,{htmlFor:`${e.id}_${t.id}`,children:[a.jsx(u,{className:"mr-2",id:`${e.id}_${t.id}`,name:`${e.id}_${t.id}`,defaultChecked:r.hashtags.includes(t.id),onChange:c=>{const k=c.target.checked;i("hashtags",k?[...r.hashtags,t.id]:r.hashtags.filter(w=>w!==t.id))}}),t.name.hr]},`${e.id}_${t.id}`))})]},"Group_"+e.id))]})]}),a.jsx(S,{images:r.images,setImages:e=>i("images",e)}),a.jsx("div",{children:N.filter(e=>!r.imagesToDelete.includes(e.id)).map(e=>a.jsxs("div",{className:"flex flex-row items-end gap-x-6 my-4",children:[a.jsx("img",{src:e.original_url,alt:e.alt_text.hr,style:{width:"100px",height:"100px",objectFit:"cover"}}),a.jsx(D,{onClick:()=>i("imagesToDelete",[...r.imagesToDelete,e.id]),children:"Ukloni"})]},e.id))}),a.jsx("p",{className:"mt-8",children:"Video"}),a.jsx(n,{type:"file",accept:"video/*",onChange:e=>{var t,c;i("video",(c=(t=e==null?void 0:e.target)==null?void 0:t.files)==null?void 0:c[0])}}),a.jsxs(s,{htmlFor:"removeVideo",className:"text-lg mt-4",children:[a.jsx(u,{className:"mr-2",id:"removeVideo",name:"removeVideo",checked:r.removeVideo,onChange:e=>i("removeVideo",e.target.checked)}),"Ukloni postojeći video?"]}),a.jsx("div",{className:"w-full flex items-end justify-end",children:a.jsx(I,{className:"mt-4 ml-auto",type:"submit",children:"Spremi"})})]})})})};export{Q as default};