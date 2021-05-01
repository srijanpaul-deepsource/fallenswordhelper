import{C as e,X as t,x as o,$ as s,E as n,t as r,I as a,f as c,D as i,i as l,a0 as m,y as f,bF as d}from"./calfSystem-817ceb25.js"
import{g as u,d as p,a as h,i as j}from"./injectStoreItems-be3eaf27.js"
import{S as b,i as g,s as v,e as x,t as y,a as I,b as _,c as C,d as E,f as k,g as S,h as D,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-5c81749d.js"
import{c as F}from"./chunk-af680637.js"
import{c as J}from"./closestTable-c2864887.js"
import{c as R}from"./closestTr-710e3fd1.js"
import{m as X}from"./moveItem-b333d2f7.js"
import{e as V}from"./errorDialog-864e4ba8.js"
import{b as q}from"./simpleCheckbox-9d63f5f6.js"
import"./daAjaxSendItemsToRecipient-7ba07486.js"
import"./sendItems-61bd4c0b.js"
import"./htmlResult-98602483.js"
import"./getInventoryById-498734d2.js"
import"./getInventory-8cee8712.js"
import"./guildStore-ed57b1f1.js"
import"./cmdExport-a8921dc9.js"
import"./indexAjaxJson-50c9cfe2.js"
import"./doStatTotal-546d5c63.js"
import"./batch-cdbfc7ea.js"
import"./closest-865e9de8.js"
import"./dialog-1254e587.js"
import"./dialogMsg-0570b3b3.js"
import"./isChecked-0eb4a700.js"
function z(e,t,o){const s=e.slice()
return s[7]=t[o],s}function G(e){let t,o,s,n=e[3](e[7])+""
return{c(){t=x("option"),o=y(n),t.__value=s=e[2](e[7]),t.value=t.__value},m(e,s){I(e,t,s),_(t,o)},p(e,r){1&r&&n!==(n=e[3](e[7])+"")&&C(o,n),1&r&&s!==(s=e[2](e[7]))&&(t.__value=s,t.value=t.__value)},d(e){e&&E(t)}}}function H(e){let t,o,s,n,r,a,c,i,l,m,f,d=e[0],u=[]
for(let t=0;t<d.length;t+=1)u[t]=G(z(e,d,t))
return{c(){t=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),r=x("select")
for(let e=0;e<u.length;e+=1)u[e].c()
a=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(r,"class","customselect"),void 0===e[1]&&T((()=>e[5].call(r))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(d,p){I(d,t,p),_(t,o),_(o,s),_(o,n),_(o,r)
for(let e=0;e<u.length;e+=1)u[e].m(r,null)
D(r,e[1]),_(o,a),_(o,c),_(o,i),_(o,l),m||(f=[N(r,"change",e[5]),N(l,"click",e[4])],m=!0)},p(e,[t]){if(13&t){let o
for(d=e[0],o=0;o<d.length;o+=1){const s=z(e,d,o)
u[o]?u[o].p(s,t):(u[o]=G(s),u[o].c(),u[o].m(r,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&t&&D(r,e[1])},i:$,o:$,d(e){e&&E(t),w(u,e),m=!1,A(f)}}}function K(o,s,n){const r=M()
let a,{folders:c}=s
const i=e=>e.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=e=>{"folders"in e&&n(0,c=e.folders)},[c,a,i,t=>e(t.parentNode.parentNode),function(){t("dropitems","Move to Folder"),r("move",a)},function(){a=B(this),n(1,a),n(2,i),n(0,c)}]}class L extends b{constructor(e){super(),g(this,e,K,H,v,{folders:0})}}function O(e,t){return X(t,e).then((()=>({r:t})))}function P(e,t){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:e,folderItem:t})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(e){const t=R(e)
t.nextElementSibling.remove(),t.remove()}async function W(e,t){(await function(e,t){return s(P,O,e,t)}(e,t.map((e=>e.value)))).s&&t.forEach(U)}function Y(e){F(30,Q()).forEach(r(W,e.detail))}function Z(e){u().forEach((t=>{t.checked=Boolean(e)}))}let ee
const te=e=>{p(e.map((e=>e.value))).then(V).then((t=>{t.s&&e.forEach(U)}))},oe=e=>{e.returnValue&&ee&&(e.preventDefault(),F(30,Q()).forEach(te),t("dropitems","Destroy by AJAX"))}
function se(){ee=!ee,m("ajaxifyDestroy",ee)}const ne=[function(){const e=n('#pCC img[src$="/folder.png"]')
if(0===e.length)return
const t=R(J(e[0]))
new L({anchor:t.nextElementSibling,props:{folders:e},target:t.parentNode}).$on("move",Y)},j,function(){(()=>{const e=i('input[type="submit"]')
l(e.parentNode,`&nbsp;&nbsp;${q("ajaxifyDestroy")}`),c(e.parentNode,"change",se)})(),ee=a("ajaxifyDestroy"),c(document.forms[0],"submit",oe),window.check=Z}]
function re(){!f()&&h()&&d(ne)}export default re
//# sourceMappingURL=injectProfileDropItems-80087a8c.js.map
