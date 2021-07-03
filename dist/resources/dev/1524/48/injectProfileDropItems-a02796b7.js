import{C as e,T as t,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as f,a0 as l,y as m,bL as d}from"./calfSystem-01849445.js"
import{g as u,d as p,a as h,i as j}from"./injectStoreItems-266cf7d6.js"
import{S as b,i as g,s as v,b as x,t as y,a as I,g as _,j as C,d as E,c as k,f as S,k as D,m as N,l as $,n as T,o as w,r as A,p as M,q as B}from"./index-2f0e5ca2.js"
import{c as J}from"./chunk-7ed9b1d2.js"
import{c as R}from"./closestTable-9e76cce0.js"
import{c as q}from"./closestTr-74f72fa1.js"
import{m as F}from"./moveItem-9d6282cb.js"
import{e as L}from"./errorDialog-e70faa9e.js"
import{b as V}from"./simpleCheckbox-7471ae0f.js"
import"./daAjaxSendItemsToRecipient-5dff9944.js"
import"./sendItems-8353f2b1.js"
import"./htmlResult-d475b4cb.js"
import"./getInventoryById-275c3e5d.js"
import"./getInventory-b274a32e.js"
import"./guildStore-899ed4eb.js"
import"./cmdExport-703b1590.js"
import"./indexAjaxJson-0f9790ea.js"
import"./doStatTotal-20f2ac46.js"
import"./batch-367d6f7a.js"
import"./closest-3a475e96.js"
import"./dialog-6e4d0a83.js"
import"./isChecked-b16dd421.js"
function X(e,t,o){const s=e.slice()
return s[7]=t[o],s}function z(e){let t,o,s,n=e[3](e[7])+""
return{c(){t=x("option"),o=y(n),t.__value=s=e[2](e[7]),t.value=t.__value},m(e,s){I(e,t,s),_(t,o)},p(e,a){1&a&&n!==(n=e[3](e[7])+"")&&C(o,n),1&a&&s!==(s=e[2](e[7]))&&(t.__value=s,t.value=t.__value)},d(e){e&&E(t)}}}function G(e){let t,o,s,n,a,r,c,i,f,l,m,d=e[0],u=[]
for(let t=0;t<d.length;t+=1)u[t]=z(X(e,d,t))
return{c(){t=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let e=0;e<u.length;e+=1)u[e].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),f=x("button"),f.textContent="Move",S(a,"class","customselect"),void 0===e[1]&&D((()=>e[5].call(a))),S(f,"class","custombutton"),S(f,"type","button"),S(o,"class","fshCenter")},m(d,p){I(d,t,p),_(t,o),_(o,s),_(o,n),_(o,a)
for(let e=0;e<u.length;e+=1)u[e].m(a,null)
N(a,e[1]),_(o,r),_(o,c),_(o,i),_(o,f),l||(m=[$(a,"change",e[5]),$(f,"click",e[4])],l=!0)},p(e,[t]){if(13&t){let o
for(d=e[0],o=0;o<d.length;o+=1){const s=X(e,d,o)
u[o]?u[o].p(s,t):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&t&&N(a,e[1])},i:T,o:T,d(e){e&&E(t),w(u,e),l=!1,A(m)}}}function H(o,s,n){const a=M()
let r,{folders:c}=s
const i=e=>e.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=e=>{"folders"in e&&n(0,c=e.folders)},[c,r,i,t=>e(t.parentNode.parentNode),function(){t("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class K extends b{constructor(e){super(),g(this,e,H,G,v,{folders:0})}}function O(e,t){return F(t,e).then((()=>({r:t})))}function P(e,t){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:e,folderItem:t})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(e){const t=q(e)
t.nextElementSibling.remove(),t.remove()}async function W(e,t){(await function(e,t){return s(P,O,e,t)}(e,t.map((e=>e.value)))).s&&t.forEach(U)}function Y(e){J(30,Q()).forEach(a(W,e.detail))}function Z(e){u().forEach((t=>{t.checked=Boolean(e)}))}let ee
const te=e=>{p(e.map((e=>e.value))).then(L).then((t=>{t.s&&e.forEach(U)}))},oe=e=>{e.returnValue&&ee&&(e.preventDefault(),J(30,Q()).forEach(te),t("dropitems","Destroy by AJAX"))}
function se(){ee=!ee,l("ajaxifyDestroy",ee)}const ne=[function(){const e=n('#pCC img[src$="/folder.png"]')
if(0===e.length)return
const t=q(R(e[0]))
new K({anchor:t.nextElementSibling,props:{folders:e},target:t.parentNode}).$on("move",Y)},j,function(){(()=>{const e=i('input[type="submit"]')
f(e.parentNode,`&nbsp;&nbsp;${V("ajaxifyDestroy")}`),c(e.parentNode,"change",se)})(),ee=r("ajaxifyDestroy"),c(document.forms[0],"submit",oe),window.check=Z}]
function ae(){!m()&&h()&&d(ne)}export default ae
//# sourceMappingURL=injectProfileDropItems-a02796b7.js.map
