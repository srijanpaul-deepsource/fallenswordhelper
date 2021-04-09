import{C as t,W as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as f,_ as l,y as m,bB as d}from"./calfSystem-7a1cce43.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-f33a12e2.js"
import{S as j,i as g,s as v,e as x,t as y,a as _,b as C,c as E,d as I,f as k,g as D,h as S,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-72f73b9a.js"
import{c as J}from"./chunk-f19f9471.js"
import{c as R}from"./closestTable-7b41125a.js"
import{c as F}from"./closestTr-74523325.js"
import{m as V}from"./moveItem-e73cf16d.js"
import{e as W}from"./errorDialog-f60f17b2.js"
import{b as X}from"./simpleCheckbox-65181dd3.js"
import"./daAjaxSendItemsToRecipient-6d38abbf.js"
import"./htmlResult-8f57b95c.js"
import"./getInventoryById-1d2b4072.js"
import"./getInventory-0954ffd6.js"
import"./cmdExport-b5bb530e.js"
import"./indexAjaxJson-48ec5c5d.js"
import"./doStatTotal-0ed981ee.js"
import"./batch-895bb182.js"
import"./closest-4ebdb6d3.js"
import"./dialog-e89b7ecf.js"
import"./dialogMsg-a0c49d9a.js"
import"./isChecked-16fc7684.js"
function q(t,e,o){const s=t.slice()
return s[7]=e[o],s}function z(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),C(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&E(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&I(e)}}}function G(t){let e,o,s,n,a,r,c,i,f,l,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=z(q(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),f=x("button"),f.textContent="Move",D(a,"class","customselect"),void 0===t[1]&&T((()=>t[5].call(a))),D(f,"class","custombutton"),D(f,"type","button"),D(o,"class","fshCenter")},m(d,p){_(d,e,p),C(e,o),C(o,s),C(o,n),C(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
S(a,t[1]),C(o,r),C(o,c),C(o,i),C(o,f),l||(m=[N(a,"change",t[5]),N(f,"click",t[4])],l=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=q(t,d,o)
u[o]?u[o].p(s,e):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&S(a,t[1])},i:$,o:$,d(t){t&&I(e),w(u,t),l=!1,A(m)}}}function H(o,s,n){const a=M()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class K extends j{constructor(t){super(),g(this,t,H,G,v,{folders:0})}}function L(t,e){return V(e,t).then((()=>({r:e})))}function O(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(t){const e=F(t)
e.nextElementSibling.remove(),e.remove()}async function U(t,e){(await function(t,e){return s(O,L,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(Q)}function Y(t){J(30,P()).forEach(a(U,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(W).then((e=>{e.s&&t.forEach(Q)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),J(30,P()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,l("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=F(R(t[0]))
new K({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},b,function(){(()=>{const t=i('input[type="submit"]')
f(t.parentNode,`&nbsp;&nbsp;${X("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!m()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-1378b4e4.js.map
