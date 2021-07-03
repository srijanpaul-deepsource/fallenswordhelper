import{a7 as t,a5 as s,al as a,c as n,bC as r}from"./calfSystem-8af1dca2.js"
function o(n,r,o){const c=function(t,n,r){let o=t
const c=n.split("."),e=c.length
for(let t=0;t<e;t+=1){if(s(!o,!a(o)))return r
o=o[c[t]]}return o}(n,r,o)
return t(c)?o:c}function c(t){return n.sortAsc?t:-t}function e(t,s){const a=o(t,n.sortBy,"a"),e=o(s,n.sortBy,"a")
return c(r(a,e))}export{e as a,o as p,c as s}
//# sourceMappingURL=stringSort-37546f48.js.map
