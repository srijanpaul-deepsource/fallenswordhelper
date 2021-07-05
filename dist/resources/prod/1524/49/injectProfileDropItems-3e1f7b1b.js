import{C as t,S as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as l,Z as f,y as m,bJ as d}from"./calfSystem-2172498b.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-2f654ae3.js"
import{S as j,i as g,s as v,b as x,t as y,a as _,g as C,j as E,d as I,c as k,f as S,k as D,m as N,l as $,n as w,o as A,r as M,p as T,q as J}from"./index-c7b13239.js"
import{c as B}from"./chunk-91a9a131.js"
import{c as R}from"./closestTable-143f3288.js"
import{c as q}from"./closestTr-3eb9ff66.js"
import{m as F}from"./moveItem-9af7e8a0.js"
import{e as V}from"./errorDialog-0c5c9521.js"
import{b as X}from"./simpleCheckbox-b36336fb.js"
import"./daAjaxSendItemsToRecipient-3f859fa1.js"
import"./htmlResult-2c343464.js"
import"./getInventoryById-f4d5c4b7.js"
import"./getInventory-30c0077d.js"
import"./cmdExport-b6bb85ab.js"
import"./indexAjaxJson-b5d4e9de.js"
import"./doStatTotal-c56a956c.js"
import"./batch-04c769d2.js"
import"./closest-0e1c7a1d.js"
import"./dialog-cb76c307.js"
import"./dialogMsg-1dee29e9.js"
import"./isChecked-ecfa0022.js"
function Z(t,e,o){const s=t.slice()
return s[7]=e[o],s}function z(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),C(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&E(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&I(e)}}}function G(t){let e,o,s,n,a,r,c,i,l,f,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=z(Z(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),l=x("button"),l.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&D((()=>t[5].call(a))),S(l,"class","custombutton"),S(l,"type","button"),S(o,"class","fshCenter")},m(d,p){_(d,e,p),C(e,o),C(o,s),C(o,n),C(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
N(a,t[1]),C(o,r),C(o,c),C(o,i),C(o,l),f||(m=[$(a,"change",t[5]),$(l,"click",t[4])],f=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=Z(t,d,o)
u[o]?u[o].p(s,e):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&N(a,t[1])},i:w,o:w,d(t){t&&I(e),A(u,t),f=!1,M(m)}}}function H(o,s,n){const a=T()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=J(this),n(1,r),n(2,i),n(0,c)}]}class K extends j{constructor(t){super(),g(this,t,H,G,v,{folders:0})}}function L(t,e){return F(e,t).then((()=>({r:e})))}function O(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function P(){return n('[name="removeIndex[]"]:checked')}function Q(t){const e=q(t)
e.nextElementSibling.remove(),e.remove()}async function U(t,e){(await function(t,e){return s(O,L,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(Q)}function W(t){B(30,P()).forEach(a(U,t.detail))}function Y(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(V).then((e=>{e.s&&t.forEach(Q)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),B(30,P()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,f("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=q(R(t[0]))
new K({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",W)},b,function(){(()=>{const t=i('input[type="submit"]')
l(t.parentNode,`&nbsp;&nbsp;${X("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Y}]
function at(){!m()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-3e1f7b1b.js.map
