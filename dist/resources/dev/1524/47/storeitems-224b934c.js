import{S as t,i as e,s,b as n,t as o,f as r,a as c,l as i,n as l,d as a,p as f,g as m,j as u,c as d,o as p,r as b}from"./index-6ed75119.js"
import{T as j,e as g,j as h,I as v,t as x,as as k}from"./calfSystem-bfc1f6c0.js"
import{b as y}from"./batch-8ae36ec2.js"
import{c as I}from"./closestTr-c2f47269.js"
import{i as S,b as C,g as A,c as F}from"./injectStoreItems-bbc50967.js"
import{t as w}from"./toggleForce-41b0f4ee.js"
import"./closest-4542e515.js"
import"./daAjaxSendItemsToRecipient-ffe3e324.js"
import"./sendItems-8e5b9457.js"
import"./htmlResult-f4aeaae6.js"
import"./errorDialog-1238d963.js"
import"./dialogMsg-edbc265b.js"
import"./getInventoryById-06ca3545.js"
import"./getInventory-1314a425.js"
import"./guildStore-0e0c654d.js"
import"./cmdExport-f5d5b9e2.js"
import"./indexAjaxJson-bf365b96.js"
import"./doStatTotal-b8475745.js"
function T(t){let e,s,f,m
return{c(){e=n("button"),e.textContent="Check All",s=o(" "),r(e,"class","custombutton svelte-1recp8w"),r(e,"type","button")},m(n,o){c(n,e,o),c(n,s,o),f||(m=i(e,"click",t[0]),f=!0)},p:l,i:l,o:l,d(t){t&&a(e),t&&a(s),f=!1,m()}}}function $(t){const e=f()
return[function(){j("storeitems","Check All"),e("checkall")}]}class E extends t{constructor(t){super(),e(this,t,$,T,s,{})}}function N(t,e,s){const n=t.slice()
return n[6]=e[s][0],n[7]=e[s][1],n}function M(t){let e,s,l,f,d=t[7]+""
function p(){return t[4](t[6])}return{c(){e=n("button"),s=o(d),r(e,"type","button"),r(e,"class","svelte-1gvij2s")},m(t,n){c(t,e,n),m(e,s),l||(f=i(e,"click",p),l=!0)},p(e,n){t=e,1&n&&d!==(d=t[7]+"")&&u(s,d)},d(t){t&&a(e),l=!1,f()}}}function R(t){let e,s,o,f,u,j,h,v,x=g(t[0].folders),k=[]
for(let e=0;e<x.length;e+=1)k[e]=M(N(t,x,e))
return{c(){e=n("tr"),s=n("td"),o=n("button"),o.textContent="All",f=d(),u=n("button"),u.textContent="Main",j=d()
for(let t=0;t<k.length;t+=1)k[t].c()
r(o,"type","button"),r(o,"class","svelte-1gvij2s"),r(u,"type","button"),r(u,"class","svelte-1gvij2s"),r(s,"colspan","3"),r(e,"class","fshCenter")},m(n,r){c(n,e,r),m(e,s),m(s,o),m(s,f),m(s,u),m(s,j)
for(let t=0;t<k.length;t+=1)k[t].m(s,null)
h||(v=[i(o,"click",t[2]),i(u,"click",t[3])],h=!0)},p(t,[e]){if(3&e){let n
for(x=g(t[0].folders),n=0;n<x.length;n+=1){const o=N(t,x,n)
k[n]?k[n].p(o,e):(k[n]=M(o),k[n].c(),k[n].m(s,null))}for(;n<k.length;n+=1)k[n].d(1)
k.length=x.length}},i:l,o:l,d(t){t&&a(e),p(k,t),h=!1,b(v)}}}function B(t,e,s){const n=f()
let{inv:o={folders:{}}}=e
function r(t){j("storeitems","Filter Folder"),n("filter",t)}return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,r,()=>r("-2"),()=>r("-1"),t=>r(t)]}class D extends t{constructor(t){super(),e(this,t,B,R,s,{inv:0})}}function J(t,e,s){s.checked=!1
const n=I(s),o=t.items[s.value].folder_id,r=-2!==e&&e!==o
w(n,r),w(n.nextElementSibling,r)}function _(t,e){y([5,3,A(),0,x(J,t,Number(e.detail))])}function q(){F().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function z(){h()&&v("enableFolderFilter")&&async function(){const t=await C()
if(!t||!t.folders)return
const e=document.forms[0]
new D({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",x(_,t))}(),function(){const t=k(document.forms[0].elements).filter((t=>"submit"===t.type))[0]
new E({anchor:t,target:t.parentNode}).$on("checkall",q)}(),S()}export default z
//# sourceMappingURL=storeitems-224b934c.js.map
