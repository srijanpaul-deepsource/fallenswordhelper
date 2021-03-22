import{C as t,X as e,x as o,$ as s,E as n,t as r,I as a,f as i,D as c,i as f,a0 as l,y as m,bF as d}from"./calfSystem-186455ab.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-f088f26b.js"
import{S as j,i as g,s as v,e as x,t as y,a as I,b as _,c as C,d as E,f as k,g as S,h as D,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-4e7b84b7.js"
import{c as F}from"./chunk-e04f591f.js"
import{c as J}from"./closestTable-24eadf35.js"
import{c as R}from"./closestTr-27d31e9d.js"
import{m as X}from"./moveItem-649b9295.js"
import{e as V}from"./errorDialog-f7744f6f.js"
import{b as q}from"./simpleCheckbox-5f4d89bf.js"
import"./daAjaxSendItemsToRecipient-8758e84b.js"
import"./sendItems-baff06e8.js"
import"./htmlResult-6abf2074.js"
import"./getInventoryById-34162341.js"
import"./getInventory-f4bd7c93.js"
import"./guildStore-1a4b81e0.js"
import"./cmdExport-c033d991.js"
import"./indexAjaxJson-d4ea205b.js"
import"./doStatTotal-79b45123.js"
import"./batch-a036d767.js"
import"./closest-1ff01e01.js"
import"./dialog-bd85dd64.js"
import"./dialogMsg-eb4e9d8f.js"
import"./isChecked-36c474a7.js"
function z(t,e,o){const s=t.slice()
return s[7]=e[o],s}function G(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){I(t,e,s),_(e,o)},p(t,r){1&r&&n!==(n=t[3](t[7])+"")&&C(o,n),1&r&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&E(e)}}}function H(t){let e,o,s,n,r,a,i,c,f,l,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=G(z(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),r=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
a=k(),i=x("span"),i.textContent=" ",c=k(),f=x("button"),f.textContent="Move",S(r,"class","customselect"),void 0===t[1]&&T((()=>t[5].call(r))),S(f,"class","custombutton"),S(f,"type","button"),S(o,"class","fshCenter")},m(d,p){I(d,e,p),_(e,o),_(o,s),_(o,n),_(o,r)
for(let t=0;t<u.length;t+=1)u[t].m(r,null)
D(r,t[1]),_(o,a),_(o,i),_(o,c),_(o,f),l||(m=[N(r,"change",t[5]),N(f,"click",t[4])],l=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=z(t,d,o)
u[o]?u[o].p(s,e):(u[o]=G(s),u[o].c(),u[o].m(r,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&D(r,t[1])},i:$,o:$,d(t){t&&E(e),w(u,t),l=!1,A(m)}}}function K(o,s,n){const r=M()
let a,{folders:i}=s
const c=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,i=t.folders)},[i,a,c,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),r("move",a)},function(){a=B(this),n(1,a),n(2,c),n(0,i)}]}class L extends j{constructor(t){super(),g(this,t,K,H,v,{folders:0})}}function O(t,e){return X(e,t).then((()=>({r:e})))}function P(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(t){const e=R(t)
e.nextElementSibling.remove(),e.remove()}async function W(t,e){(await function(t,e){return s(P,O,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(U)}function Y(t){F(30,Q()).forEach(r(W,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(V).then((e=>{e.s&&t.forEach(U)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),F(30,Q()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,l("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=R(J(t[0]))
new L({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},b,function(){(()=>{const t=c('input[type="submit"]')
f(t.parentNode,`&nbsp;&nbsp;${q("ajaxifyDestroy")}`),i(t.parentNode,"change",st)})(),tt=a("ajaxifyDestroy"),i(document.forms[0],"submit",ot),window.check=Z}]
function rt(){!m()&&h()&&d(nt)}export default rt
//# sourceMappingURL=injectProfileDropItems-3eb7145c.js.map
