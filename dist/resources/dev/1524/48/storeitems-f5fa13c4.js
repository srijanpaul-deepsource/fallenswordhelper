import{S as t,i as e,s,b as n,t as o,f as r,a as c,l as i,n as l,d as a,p as f,g as u,j as m,c as d,o as p,r as j}from"./index-2f0e5ca2.js"
import{T as b,e as h,j as g,I as v,t as x,at as k}from"./calfSystem-01849445.js"
import{b as y}from"./batch-367d6f7a.js"
import{c as I}from"./closestTr-74f72fa1.js"
import{i as S,b as C,g as A,c as F}from"./injectStoreItems-266cf7d6.js"
import{t as w}from"./toggleForce-5151034c.js"
import"./closest-3a475e96.js"
import"./daAjaxSendItemsToRecipient-5dff9944.js"
import"./sendItems-8353f2b1.js"
import"./htmlResult-d475b4cb.js"
import"./errorDialog-e70faa9e.js"
import"./getInventoryById-275c3e5d.js"
import"./getInventory-b274a32e.js"
import"./guildStore-899ed4eb.js"
import"./cmdExport-703b1590.js"
import"./indexAjaxJson-0f9790ea.js"
import"./doStatTotal-20f2ac46.js"
function T(t){let e,s,f,u
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(u=i(e,"click",t[0]),f=!0)},p:l,i:l,o:l,d(t){t&&a(e),t&&a(s),f=!1,u()}}}function $(t){const e=f()
return[function(){b("storeitems","Check All"),e("checkall")}]}class E extends t{constructor(t){super(),e(this,t,$,T,s,{})}}function N(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function R(t){let e,s,l,f,d=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(d),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),u(e,s),l||(f=i(e,"click",p),l=!0)},p(e,n){t=e,1&n&&d!==(d=t[7]+"")&&m(s,d)},d(t){t&&a(e),l=!1,f()}}}function B(t){let e,s,o,f,m,b,g,v,x=h(t[0].folders),k=[]
for(let e=0;e<x.length;e+=1)k[e]=R(N(t,x,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=d(),m=n("button"),m.textContent="Main",b=d()
for(let t=0;t<k.length;t+=1)k[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(m,"type","button"),r(m,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),u(e,s),u(s,o),u(s,f),u(s,m),u(s,b)
for(let t=0;t<k.length;t+=1)k[t].m(s,null)
g||(v=[i(o,"click",t[2]),i(m,"click",t[3])],g=!0)},p(t,[e]){if(3&e){let n
for(x=h(t[0].folders),n=0;n<x.length;n+=1){const o=N(t,x,n)
k[n]?k[n].p(o,e):(k[n]=R(o),k[n].c(),k[n].m(s,null))}for(;n<k.length;n+=1)k[n].d(1)
k.length=x.length}},i:l,o:l,d(t){t&&a(e),p(k,t),g=!1,j(v)}}}function D(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){b("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class J extends t{constructor(t){super(),e(this,t,D,B,s,{inv:0})}}function M(t,e,s){s.checked=!1
const n=I(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function _(t,e){y([5,3,A(),0,x(M,t,Number(e.detail))])}function q(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function z(){g()&&v("enableFolderFilter")&&async function(){const t=await C()
if(!t||!t.folders)return
const e=document.forms[0]
new J({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",x(_,t))}(),function(){const t=k(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new E({anchor:t,target:t.parentNode}).$on("checkall",q)}(),S()}export default z
//# sourceMappingURL=storeitems-f5fa13c4.js.map
