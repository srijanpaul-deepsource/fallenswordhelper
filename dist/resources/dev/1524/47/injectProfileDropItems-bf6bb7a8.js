import{C as e,T as t,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,_ as f,y as m,bK as d}from"./calfSystem-bfc1f6c0.js"
import{g as p,d as u,a as h,i as j}from"./injectStoreItems-bbc50967.js"
import{S as b,i as g,s as v,b as x,t as y,a as _,g as I,j as C,d as E,c as k,f as S,k as D,m as N,l as $,n as T,o as w,r as A,p as M,q as B}from"./index-6ed75119.js"
import{c as J}from"./chunk-c0e724c2.js"
import{c as R}from"./closestTable-7130e192.js"
import{c as q}from"./closestTr-c2f47269.js"
import{m as F}from"./moveItem-cd152f26.js"
import{e as K}from"./errorDialog-1238d963.js"
import{b as V}from"./simpleCheckbox-1757ba2a.js"
import"./daAjaxSendItemsToRecipient-ffe3e324.js"
import"./sendItems-8e5b9457.js"
import"./htmlResult-f4aeaae6.js"
import"./getInventoryById-06ca3545.js"
import"./getInventory-1314a425.js"
import"./guildStore-0e0c654d.js"
import"./cmdExport-f5d5b9e2.js"
import"./indexAjaxJson-bf365b96.js"
import"./doStatTotal-b8475745.js"
import"./batch-8ae36ec2.js"
import"./closest-4542e515.js"
import"./dialog-a4dfa31d.js"
import"./dialogMsg-edbc265b.js"
import"./isChecked-5c7617f4.js"
function X(e,t,o){const s=e.slice()
return s[7]=t[o],s}function z(e){let t,o,s,n=e[3](e[7])+""
return{c(){t=x("option"),o=y(n),t.__value=s=e[2](e[7]),t.value=t.__value},m(e,s){_(e,t,s),I(t,o)},p(e,a){1&a&&n!==(n=e[3](e[7])+"")&&C(o,n),1&a&&s!==(s=e[2](e[7]))&&(t.__value=s,t.value=t.__value)},d(e){e&&E(t)}}}function G(e){let t,o,s,n,a,r,c,i,l,f,m,d=e[0],p=[]
for(let t=0;t<d.length;t+=1)p[t]=z(X(e,d,t))
return{c(){t=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let e=0;e<p.length;e+=1)p[e].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(a,"class","customselect"),void 0===e[1]&&D((()=>e[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(d,u){_(d,t,u),I(t,o),I(o,s),I(o,n),I(o,a)
for(let e=0;e<p.length;e+=1)p[e].m(a,null)
N(a,e[1]),I(o,r),I(o,c),I(o,i),I(o,l),f||(m=[$(a,"change",e[5]),$(l,"click",e[4])],f=!0)},p(e,[t]){if(13&t){let o
for(d=e[0],o=0;o<d.length;o+=1){const s=X(e,d,o)
p[o]?p[o].p(s,t):(p[o]=z(s),p[o].c(),p[o].m(a,null))}for(;o<p.length;o+=1)p[o].d(1)
p.length=d.length}7&t&&N(a,e[1])},i:T,o:T,d(e){e&&E(t),w(p,e),f=!1,A(m)}}}function H(o,s,n){const a=M()
let r,{folders:c}=s
const i=e=>e.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=e=>{"folders"in e&&n(0,c=e.folders)},[c,r,i,t=>e(t.parentNode.parentNode),function(){t("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class L extends b{constructor(e){super(),g(this,e,H,G,v,{folders:0})}}function O(e,t){return F(t,e).then((()=>({r:t})))}function P(e,t){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:e,folderItem:t})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(e){const t=q(e)
t.nextElementSibling.remove(),t.remove()}async function W(e,t){(await function(e,t){return s(P,O,e,t)}(e,t.map((e=>e.value)))).s&&t.forEach(U)}function Y(e){J(30,Q()).forEach(a(W,e.detail))}function Z(e){p().forEach((t=>{t.checked=Boolean(e)}))}let ee
const te=e=>{u(e.map((e=>e.value))).then(K).then((t=>{t.s&&e.forEach(U)}))},oe=e=>{e.returnValue&&ee&&(e.preventDefault(),J(30,Q()).forEach(te),t("dropitems","Destroy by AJAX"))}
function se(){ee=!ee,f("ajaxifyDestroy",ee)}const ne=[function(){const e=n('#pCC img[src$="/folder.png"]')
if(0===e.length)return
const t=q(R(e[0]))
new L({anchor:t.nextElementSibling,props:{folders:e},target:t.parentNode}).$on("move",Y)},j,function(){(()=>{const e=i('input[type="submit"]')
l(e.parentNode,`&nbsp;&nbsp;${V("ajaxifyDestroy")}`),c(e.parentNode,"change",se)})(),ee=r("ajaxifyDestroy"),c(document.forms[0],"submit",oe),window.check=Z}]
function ae(){!m()&&h()&&d(ne)}export default ae
//# sourceMappingURL=injectProfileDropItems-bf6bb7a8.js.map
