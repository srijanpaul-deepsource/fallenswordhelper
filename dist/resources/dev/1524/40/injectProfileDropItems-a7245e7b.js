import{C as e,X as t,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,a0 as f,y as m,bE as d}from"./calfSystem-c464cb1d.js"
import{g as u,d as p,a as b,i as h}from"./injectStoreItems-9b590e19.js"
import{S as j,i as g,s as v,e as x,t as y,a as E,b as I,c as _,d as C,f as k,g as S,h as D,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-b63851a0.js"
import{c as J}from"./chunk-b7db8c6b.js"
import{c as R}from"./closestTable-e6163be9.js"
import{c as X}from"./closestTr-810f6a0f.js"
import{m as F}from"./moveItem-46dfcb8a.js"
import{e as V}from"./errorDialog-58b05366.js"
import{b as q}from"./simpleCheckbox-1b81e8e2.js"
import"./daAjaxSendItemsToRecipient-64608db6.js"
import"./sendItems-a17011ca.js"
import"./htmlResult-4cc00d51.js"
import"./getInventoryById-dc2e97f5.js"
import"./getInventory-609e6eb9.js"
import"./guildStore-3f19a00f.js"
import"./cmdExport-5edaf067.js"
import"./indexAjaxJson-9476707b.js"
import"./doStatTotal-ddf4bb8a.js"
import"./batch-715ae1fd.js"
import"./closest-abbeba17.js"
import"./dialog-17ce66e6.js"
import"./dialogMsg-3d2031b8.js"
import"./isChecked-a9c3c9fe.js"
function z(e,t,o){const s=e.slice()
return s[7]=t[o],s}function G(e){let t,o,s,n=e[3](e[7])+""
return{c(){t=x("option"),o=y(n),t.__value=s=e[2](e[7]),t.value=t.__value},m(e,s){E(e,t,s),I(t,o)},p(e,a){1&a&&n!==(n=e[3](e[7])+"")&&_(o,n),1&a&&s!==(s=e[2](e[7]))&&(t.__value=s,t.value=t.__value)},d(e){e&&C(t)}}}function H(e){let t,o,s,n,a,r,c,i,l,f,m,d=e[0],u=[]
for(let t=0;t<d.length;t+=1)u[t]=G(z(e,d,t))
return{c(){t=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let e=0;e<u.length;e+=1)u[e].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(a,"class","customselect"),void 0===e[1]&&T((()=>e[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(d,p){E(d,t,p),I(t,o),I(o,s),I(o,n),I(o,a)
for(let e=0;e<u.length;e+=1)u[e].m(a,null)
D(a,e[1]),I(o,r),I(o,c),I(o,i),I(o,l),f||(m=[N(a,"change",e[5]),N(l,"click",e[4])],f=!0)},p(e,[t]){if(13&t){let o
for(d=e[0],o=0;o<d.length;o+=1){const s=z(e,d,o)
u[o]?u[o].p(s,t):(u[o]=G(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&t&&D(a,e[1])},i:$,o:$,d(e){e&&C(t),w(u,e),f=!1,A(m)}}}function K(o,s,n){const a=M()
let r,{folders:c}=s
const i=e=>e.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=e=>{"folders"in e&&n(0,c=e.folders)},[c,r,i,t=>e(t.parentNode.parentNode),function(){t("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class L extends j{constructor(e){super(),g(this,e,K,H,v,{folders:0})}}function O(e,t){return F(t,e).then((()=>({r:t})))}function P(e,t){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:e,folderItem:t})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(e){const t=X(e)
t.nextElementSibling.remove(),t.remove()}async function W(e,t){(await function(e,t){return s(P,O,e,t)}(e,t.map((e=>e.value)))).s&&t.forEach(U)}function Y(e){J(30,Q()).forEach(a(W,e.detail))}function Z(e){u().forEach((t=>{t.checked=Boolean(e)}))}let ee
const te=e=>{p(e.map((e=>e.value))).then(V).then((t=>{t.s&&e.forEach(U)}))},oe=e=>{e.returnValue&&ee&&(e.preventDefault(),J(30,Q()).forEach(te),t("dropitems","Destroy by AJAX"))}
function se(){ee=!ee,f("ajaxifyDestroy",ee)}const ne=[function(){const e=n('#pCC img[src$="/folder.png"]')
if(0===e.length)return
const t=X(R(e[0]))
new L({anchor:t.nextElementSibling,props:{folders:e},target:t.parentNode}).$on("move",Y)},h,function(){(()=>{const e=i('input[type="submit"]')
l(e.parentNode,`&nbsp;&nbsp;${q("ajaxifyDestroy")}`),c(e.parentNode,"change",se)})(),ee=r("ajaxifyDestroy"),c(document.forms[0],"submit",oe),window.check=Z}]
function ae(){!m()&&b()&&d(ne)}export default ae
//# sourceMappingURL=injectProfileDropItems-a7245e7b.js.map
