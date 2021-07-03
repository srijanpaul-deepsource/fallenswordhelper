import{S as t,i as e,s,b as n,t as o,f as r,a as c,l as i,n as l,d as a,p as f,g as u,j as m,c as d,o as p,r as j}from"./index-2f0e5ca2.js"
import{S as b,e as g,j as h,I as v,t as x,ar as k}from"./calfSystem-85fa6364.js"
import{b as y}from"./batch-5a4fc6b0.js"
import{c as S}from"./closestTr-5f6e9767.js"
import{i as C,b as I,g as A,c as F}from"./injectStoreItems-c5d82465.js"
import{t as w}from"./toggleForce-5151034c.js"
import"./closest-3a475e96.js"
import"./daAjaxSendItemsToRecipient-4b691006.js"
import"./htmlResult-1ba139ea.js"
import"./errorDialog-f5ff5027.js"
import"./dialogMsg-752657d7.js"
import"./getInventoryById-fd76220a.js"
import"./getInventory-f75cd6a9.js"
import"./cmdExport-62f110d4.js"
import"./indexAjaxJson-4fb780dc.js"
import"./doStatTotal-40063ed2.js"
function $(t){let e,s,f,u
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(u=i(e,"click",t[0]),f=!0)},p:l,i:l,o:l,d(t){t&&a(e),t&&a(s),f=!1,u()}}}function E(t){const e=f()
return[function(){b("storeitems","Check All"),e("checkall")}]}class N extends t{constructor(t){super(),e(this,t,E,$,s,{})}}function T(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,l,f,d=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(d),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),u(e,s),l||(f=i(e,"click",p),l=!0)},p(e,n){t=e,1&n&&d!==(d=t[7]+"")&&m(s,d)},d(t){t&&a(e),l=!1,f()}}}function R(t){let e,s,o,f,m,b,h,v,x=g(t[0].folders),k=[]
for(let e=0;e<x.length;e+=1)k[e]=M(T(t,x,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=d(),m=n("button"),m.textContent="Main",b=d()
for(let t=0;t<k.length;t+=1)k[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(m,"type","button"),r(m,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),u(e,s),u(s,o),u(s,f),u(s,m),u(s,b)
for(let t=0;t<k.length;t+=1)k[t].m(s,null)
h||(v=[i(o,"click",t[2]),i(m,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(x=g(t[0].folders),n=0;n<x.length;n+=1){const o=T(t,x,n)
k[n]?k[n].p(o,e):(k[n]=M(o),k[n].c(),k[n].m(s,null))}for(;n<k.length;n+=1)k[n].d(1)
k.length=x.length}},i:l,o:l,d(t){t&&a(e),p(k,t),h=!1,j(v)}}}function B(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){b("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class D extends t{constructor(t){super(),e(this,t,B,R,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=S(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function _(t,e){y([5,3,A(),0,x(J,t,Number(e.detail))])}function q(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function z(){h()&&v("enableFolderFilter")&&async function(){const t=await I()
if(!t||!t.folders)return
const e=document.forms[0]
new D({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",x(_,t))}(),function(){const t=k(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new N({anchor:t,target:t.parentNode}).$on("checkall",q)}(),C()}export default z
//# sourceMappingURL=storeitems-2faf4ebd.js.map
