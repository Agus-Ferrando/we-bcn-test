import{a as u,k as _,l as d,b as p,o as m,f as h,i as t,h as f,w as k,j as x,t as l,u as i,F as v,r as w}from"./entry.6a79d300.js";const C={class:"details"},b=t("br",null,null,-1),g=t("br",null,null,-1),y=t("i",{class:"material-icons"},"add_shopping_cart",-1),j=u({__name:"[id]",async setup(B){let e,o;const c=_().params.id,n=([e,o]=d(()=>fetch(`https://fakestoreapi.com/products/${c}`).then(s=>s.json()).then(s=>s)),e=await e,o(),e),a=`${n.title}`;return p({title:a,meta:[{name:"title",content:a},{name:"description",content:n.description}]}),(s,R)=>{const r=w("RouterLink");return m(),h(v,null,[t("nav",null,[t("ul",null,[t("li",null,[f(r,{to:"/"},{default:k(()=>[x("Home")]),_:1})])])]),t("div",C,[t("h2",null,l(i(n).title),1),t("div",null,l(i(n).description),1)]),b,g,y],64)}}});export{j as default};