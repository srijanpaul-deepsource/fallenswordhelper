import{C as t,S as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as f,Z as l,y as m,bJ as d}from"./calfSystem-85fa6364.js"
import{g as u,d as p,a as h,i as j}from"./injectStoreItems-c5d82465.js"
import{S as b,i as g,s as v,b as x,t as y,a as _,g as C,j as E,d as I,c as k,f as S,k as D,m as N,l as $,n as w,o as A,r as M,p as T,q as J}from"./index-2f0e5ca2.js"
import{c as B}from"./chunk-7ed9b1d2.js"
import{c as R}from"./closestTable-7025a1a3.js"
import{c as q}from"./closestTr-5f6e9767.js"
import{m as F}from"./moveItem-83e93e6f.js"
import{e as V}from"./errorDialog-f5ff5027.js"
import{b as X}from"./simpleCheckbox-530485d6.js"
import"./daAjaxSendItemsToRecipient-4b691006.js"
import"./htmlResult-1ba139ea.js"
import"./getInventoryById-fd76220a.js"
import"./getInventory-f75cd6a9.js"
import"./cmdExport-62f110d4.js"
import"./indexAjaxJson-4fb780dc.js"
import"./doStatTotal-40063ed2.js"
import"./batch-5a4fc6b0.js"
import"./closest-3a475e96.js"
import"./dialog-8ce28e39.js"
import"./dialogMsg-752657d7.js"
import"./isChecked-b16dd421.js"
function Z(t,e,o){const s=t.slice()
return s[7]=e[o],s}function z(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),C(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&E(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&I(e)}}}function G(t){let e,o,s,n,a,r,c,i,f,l,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=z(Z(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),f=x("button"),f.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&D((()=>t[5].call(a))),S(f,"class","custombutton"),S(f,"type","button"),S(o,"class","fshCenter")},m(d,p){_(d,e,p),C(e,o),C(o,s),C(o,n),C(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
N(a,t[1]),C(o,r),C(o,c),C(o,i),C(o,f),l||(m=[$(a,"change",t[5]),$(f,"click",t[4])],l=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=Z(t,d,o)
u[o]?u[o].p(s,e):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&N(a,t[1])},i:w,o:w,d(t){t&&I(e),A(u,t),l=!1,M(m)}}}function H(o,s,n){const a=T()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=J(this),n(1,r),n(2,i),n(0,c)}]}class K extends b{constructor(t){super(),g(this,t,H,G,v,{folders:0})}}function L(t,e){return F(e,t).then((()=>({r:e})))}function O(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(t){const e=q(t)
e.nextElementSibling.remove(),e.remove()}async function U(t,e){(await function(t,e){return s(O,L,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(Q)}function W(t){B(30,P()).forEach(a(U,t.detail))}function Y(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(V).then((e=>{e.s&&t.forEach(Q)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),B(30,P()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,l("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=q(R(t[0]))
new K({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",W)},j,function(){(()=>{const t=i('input[type="submit"]')
f(t.parentNode,`&nbsp;&nbsp;${X("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Y}]
function at(){!m()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-d2a76374.js.map
