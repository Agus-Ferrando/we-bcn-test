import{i as V,m as c,k as w,o as a,b as l,f as t,u,e as r,w as h,h as b,A as L,F as I,x as N,t as m,r as j,y as A,z as B,a as F}from"./entry.a27faca1.js";const p=_=>(A("data-v-f3412712"),_=_(),B(),_),T={key:0},$={key:1},H=["onClick"],M=p(()=>t("br",null,null,-1)),R=p(()=>t("br",null,null,-1)),z=p(()=>t("br",null,null,-1)),D=p(()=>t("br",null,null,-1)),E={class:"productContainer"},q=["innerHTML"],G=V({__name:"index",async setup(_){let n,d;const y=c(),i=c(),g=c(),k=c(),x=c([]),v=c();y.value=([n,d]=w(()=>fetch("https://bibliotech.bymotto.com/api/hubs").then(e=>e.json()).then(e=>e.data)),n=await n,d(),n),i.value=([n,d]=w(()=>fetch("http://bibliotech.bymotto.com/api/config").then(e=>e.json()).then(e=>e.data)),n=await n,d(),n),g.value=i.value.hide_about_us,k.value=i.value.hide_contact,x.value=i.value.languages_availables,v.value=i.value.title;async function S(e){let C=await fetch(`http://bibliotech.bymotto.com/api/config/${e}`).then(o=>o.json()).then(o=>o.data);v.value=C.title}return(e,C)=>{const o=j("RouterLink");return a(),l("div",null,[t("nav",null,[t("ul",null,[u(g)?(a(),l("li",T,[r(o,{to:"/about"},{default:h(()=>[b("About us")]),_:1})])):L("",!0),u(k)?(a(),l("li",$,[r(o,{to:"/contact"},{default:h(()=>[b("Contact")]),_:1})])):L("",!0),t("li",null,[r(o,{to:"/filter"},{default:h(()=>[b("Filtro")]),_:1})])]),t("ul",null,[(a(!0),l(I,null,N(u(x),(s,f)=>(a(),l("li",{key:f,onClick:J=>S(s)},m(s),9,H))),128))])]),M,R,t("h2",null,m(u(v)),1),z,D,t("div",E,[(a(!0),l(I,null,N(u(y),(s,f)=>(a(),l("div",{class:"product",key:f},[r(o,{to:`/details/${s.id}`},{default:h(()=>[t("div",null,m(s.name),1)]),_:2},1032,["to"]),t("div",{innerHTML:s.description},null,8,q)]))),128))])])}}});const O=F(G,[["__scopeId","data-v-f3412712"]]);export{O as default};
