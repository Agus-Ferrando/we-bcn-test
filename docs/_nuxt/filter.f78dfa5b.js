import{T as k,M as H,H as g}from"./components.753c045e.js";import{i as B,m as c,p as L,o as p,b as m,e as s,w as u,h as v,f as e,q as h,v as b,u as _,s as y,x as N,F as V,y as C,r as F,t as I,z as $,A as D,a as R}from"./entry.7dc19a25.js";const d=i=>($("data-v-6f475620"),i=i(),D(),i),j=d(()=>e("h2",null,"Busqueda:",-1)),q=d(()=>e("br",null,null,-1)),z=d(()=>e("br",null,null,-1)),A=d(()=>e("br",null,null,-1)),O=["innerHTML"],U=B({__name:"filter",setup(i){const r=c(),a=c(""),l=c("");L(async()=>{r.value=await fetch("https://bibliotech.bymotto.com/api/searcher").then(t=>t.json()).then(t=>t.data)});async function x(){return r.value=await fetch(`https://bibliotech.bymotto.com/api/searcher?name=${a.value}&description=${l.value}`,{method:"POST",body:JSON.stringify({name:a,description:l})}).then(t=>t.json()).then(t=>t.data),r.value}return(t,n)=>{const M=k,T=H,w=g,f=F("RouterLink");return p(),m("div",null,[s(w,null,{default:u(()=>[s(M,null,{default:u(()=>[v("We bcn | Filter")]),_:1}),s(T,{name:"Description",content:"We bcn is a company especialized in technology..."})]),_:1}),e("nav",null,[e("ul",null,[e("li",null,[s(f,{to:"/"},{default:u(()=>[v("Home")]),_:1})])])]),j,q,e("form",{onSubmit:n[3]||(n[3]=N(()=>{},["prevent"]))},[h(e("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>y(a)?a.value=o:null),type:"text",name:"name",placeholder:"nombre"},null,512),[[b,_(a)]]),h(e("input",{"onUpdate:modelValue":n[1]||(n[1]=o=>y(l)?l.value=o:null),type:"text",name:"description",placeholder:"descripción"},null,512),[[b,_(l)]]),e("button",{onClick:n[2]||(n[2]=o=>x())}," Aplicar filtros ")],32),z,A,e("div",null,[(p(!0),m(V,null,C(_(r),(o,S)=>(p(),m("div",{class:"product",key:S},[s(f,{to:`/details/${o.id}`},{default:u(()=>[e("div",null,I(o.name),1)]),_:2},1032,["to"]),e("div",{innerHTML:o.description},null,8,O)]))),128))])])}}});const J=R(U,[["__scopeId","data-v-6f475620"]]);export{J as default};