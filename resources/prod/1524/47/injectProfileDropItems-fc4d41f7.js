import{C as t,S as e,x as o,$ as s,E as n,t as r,I as a,f as c,D as i,i as f,Z as l,y as m,bG as d}from"./calfSystem-a2fd9017.js"
import{g as u,d as p,a as h,i as j}from"./injectStoreItems-5dc7b542.js"
import{S as b,i as g,s as v,b as x,t as y,a as _,g as C,j as E,d as I,c as k,f as S,k as D,m as N,l as $,n as w,o as A,r as M,p as T,q as B}from"./index-6ed75119.js"
import{c as J}from"./chunk-c0e724c2.js"
import{c as R}from"./closestTable-b233f1b2.js"
import{c as q}from"./closestTr-c667a8e5.js"
import{m as F}from"./moveItem-1d959fae.js"
import{e as G}from"./errorDialog-1238d963.js"
import{b as V}from"./simpleCheckbox-d5d2e0cb.js"
import"./daAjaxSendItemsToRecipient-51ff5580.js"
import"./htmlResult-84c3f534.js"
import"./getInventoryById-7fb67bd6.js"
import"./getInventory-834edb10.js"
import"./cmdExport-84fee8d4.js"
import"./indexAjaxJson-9619f1ba.js"
import"./doStatTotal-7cdd55ce.js"
import"./batch-0f132e33.js"
import"./closest-4542e515.js"
import"./dialog-a4dfa31d.js"
import"./dialogMsg-edbc265b.js"
import"./isChecked-5c7617f4.js"
function X(t,e,o){const s=t.slice()
return s[7]=e[o],s}function Z(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),C(e,o)},p(t,r){1&r&&n!==(n=t[3](t[7])+"")&&E(o,n),1&r&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&I(e)}}}function z(t){let e,o,s,n,r,a,c,i,f,l,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=Z(X(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),r=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
a=k(),c=x("span"),c.textContent=" ",i=k(),f=x("button"),f.textContent="Move",S(r,"class","customselect"),void 0===t[1]&&D((()=>t[5].call(r))),S(f,"class","custombutton"),S(f,"type","button"),S(o,"class","fshCenter")},m(d,p){_(d,e,p),C(e,o),C(o,s),C(o,n),C(o,r)
for(let t=0;t<u.length;t+=1)u[t].m(r,null)
N(r,t[1]),C(o,a),C(o,c),C(o,i),C(o,f),l||(m=[$(r,"change",t[5]),$(f,"click",t[4])],l=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=X(t,d,o)
u[o]?u[o].p(s,e):(u[o]=Z(s),u[o].c(),u[o].m(r,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&N(r,t[1])},i:w,o:w,d(t){t&&I(e),A(u,t),l=!1,M(m)}}}function H(o,s,n){const r=T()
let a,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,a,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),r("move",a)},function(){a=B(this),n(1,a),n(2,i),n(0,c)}]}class K extends b{constructor(t){super(),g(this,t,H,z,v,{folders:0})}}function L(t,e){return F(e,t).then((()=>({r:e})))}function O(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(t){const e=q(t)
e.nextElementSibling.remove(),e.remove()}async function U(t,e){(await function(t,e){return s(O,L,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(Q)}function W(t){J(30,P()).forEach(r(U,t.detail))}function Y(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(G).then((e=>{e.s&&t.forEach(Q)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),J(30,P()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,l("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=q(R(t[0]))
new K({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",W)},j,function(){(()=>{const t=i('input[type="submit"]')
f(t.parentNode,`&nbsp;&nbsp;${V("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=a("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Y}]
function rt(){!m()&&h()&&d(nt)}export default rt
//# sourceMappingURL=injectProfileDropItems-fc4d41f7.js.map
