import{i as B,m as s,p as I,o,b as a,f as t,u as i,e as _,w as d,h as v,B as x,F as C,y as w,t as f,r as N,z as S,A as V,a as j}from"./entry.7dc19a25.js";const r=u=>(S("data-v-07a5918c"),u=u(),V(),u),F={key:0},M={key:1},T=["onClick"],$=r(()=>t("br",null,null,-1)),A=r(()=>t("br",null,null,-1)),H=r(()=>t("br",null,null,-1)),R=r(()=>t("br",null,null,-1)),z={class:"productContainer"},D=["innerHTML"],E=B({__name:"index",setup(u){const b=s(),c=s(),m=s(),y=s(),g=s([]),h=s();I(async()=>{b.value=await fetch("https://bibliotech.bymotto.com/api/hubs").then(e=>e.json()).then(e=>e.data),c.value=await fetch("http://bibliotech.bymotto.com/api/config").then(e=>e.json()).then(e=>e.data),m.value=c.value.hide_about_us,y.value=c.value.hide_contact,g.value=c.value.languages_availables,h.value=c.value.title});async function L(e){let k=await fetch(`http://bibliotech.bymotto.com/api/config/${e}`).then(n=>n.json()).then(n=>n.data);h.value=k.title}return(e,k)=>{const n=N("RouterLink");return o(),a("div",null,[t("nav",null,[t("ul",null,[i(m)?(o(),a("li",F,[_(n,{to:"/about"},{default:d(()=>[v("About us")]),_:1})])):x("",!0),i(y)?(o(),a("li",M,[_(n,{to:"/contact"},{default:d(()=>[v("Contact")]),_:1})])):x("",!0),t("li",null,[_(n,{to:"/filter"},{default:d(()=>[v("Filtro")]),_:1})])]),t("ul",null,[(o(!0),a(C,null,w(i(g),(l,p)=>(o(),a("li",{key:p,onClick:q=>L(l)},f(l),9,T))),128))])]),$,A,t("h2",null,f(i(h)),1),H,R,t("div",z,[(o(!0),a(C,null,w(i(b),(l,p)=>(o(),a("div",{class:"product",key:p},[_(n,{to:`/details/${l.id}`},{default:d(()=>[t("div",null,f(l.name),1)]),_:2},1032,["to"]),t("div",{innerHTML:l.description},null,8,D)]))),128))])])}}});const J=j(E,[["__scopeId","data-v-07a5918c"]]);export{J as default};