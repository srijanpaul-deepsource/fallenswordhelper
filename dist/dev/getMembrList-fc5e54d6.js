import{s as n,b4 as t,v as e,ai as r,e as s,aO as u,ak as i,b5 as o}from"./calfSystem-94018cd0.js"
function c(n,t){const e=t||{}
i("fsh_membrList",$.extend(e,n))}function a(n){return r("fsh_membrList").then(e(c,n)),n}function f(n,t,e){n[t][e.username]=e}function m(n,t){const r={}
return r[n]={},r[n].lastUpdate=u,t.forEach(e(f,r,n)),r}function d(t){return function(t){return n({guild_id:t,subcmd:"guild_members"})}(t).then(e(m,t))}function b(n){return d(n).then(a)}const h=[(n,t)=>t,(n,t)=>o(t),(n,t)=>o(t[n]),(n,t)=>"number"==typeof t[n].lastUpdate,(n,t)=>t[n].lastUpdate>u-3e5]
function l(n,t,e){return e(n,t)}function p(n,t){return function(n,t){return h.every(e(l,n,t))}(n,t)?t:b(n)}function L(n,t){return s.membrList=t[n],s.membrList}function _(n){const s=t()
return s?function(n,t){return n?b(t):r("fsh_membrList").then(e(p,t))}(n,s).then(e(L,s)):Promise.reject(new Error("no guild id"))}export{_ as g}
//# sourceMappingURL=getMembrList-fc5e54d6.js.map
