import{a6 as t,a4 as s,ak as n,c as r,by as a}from"./calfSystem-a2fd9017.js"
function o(r,a,o){const c=function(t,r,a){let o=t
const c=r.split("."),e=c.length
for(let t=0;t<e;t+=1){if(s(!o,!n(o)))return a
o=o[c[t]]}return o}(r,a,o)
return t(c)?o:c}function c(t){return r.sortAsc?t:-t}function e(t,s){const n=o(t,r.sortBy,"a"),e=o(s,r.sortBy,"a")
return c(a(n,e))}export{e as a,o as p,c as s}
//# sourceMappingURL=stringSort-a1f3c520.js.map
