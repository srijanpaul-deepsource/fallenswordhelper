import{C as t,S as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as f,_ as l,y as m,bK as d}from"./calfSystem-617f9a5d.js"
import{g as u,d as p,a as h,i as b}from"./injectStoreItems-c3efb4fd.js"
import{S as j,i as g,s as v,b as x,t as y,a as _,g as C,j as E,d as I,c as k,f as S,k as D,m as N,l as $,n as w,o as A,r as T,p as M,q as B}from"./index-c31cc1d2.js"
import{c as J}from"./chunk-965f25a6.js"
import{c as R}from"./closestTable-b12094ca.js"
import{c as q}from"./closestTr-bf59743f.js"
import{m as F}from"./moveItem-eb688559.js"
import{e as K}from"./errorDialog-b76ba3fb.js"
import{b as V}from"./simpleCheckbox-af0b5ade.js"
import"./daAjaxSendItemsToRecipient-d47f27f4.js"
import"./htmlResult-5a492fed.js"
import"./getInventoryById-c970cb7e.js"
import"./getInventory-b6eae9c2.js"
import"./cmdExport-39e5a4b7.js"
import"./indexAjaxJson-1f941a45.js"
import"./doStatTotal-0ef44207.js"
import"./batch-4134d884.js"
import"./closest-06418423.js"
import"./dialog-a0295936.js"
import"./isChecked-8825c1a8.js"
function X(t,e,o){const s=t.slice()
return s[7]=e[o],s}function z(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){_(t,e,s),C(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&E(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&I(e)}}}function G(t){let e,o,s,n,a,r,c,i,f,l,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=z(X(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),f=x("button"),f.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&D((()=>t[5].call(a))),S(f,"class","custombutton"),S(f,"type","button"),S(o,"class","fshCenter")},m(d,p){_(d,e,p),C(e,o),C(o,s),C(o,n),C(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
N(a,t[1]),C(o,r),C(o,c),C(o,i),C(o,f),l||(m=[$(a,"change",t[5]),$(f,"click",t[4])],l=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=X(t,d,o)
u[o]?u[o].p(s,e):(u[o]=z(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&N(a,t[1])},i:w,o:w,d(t){t&&I(e),A(u,t),l=!1,T(m)}}}function H(o,s,n){const a=M()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class L extends j{constructor(t){super(),g(this,t,H,G,v,{folders:0})}}function O(t,e){return F(e,t).then((()=>({r:e})))}function P(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(t){const e=q(t)
e.nextElementSibling.remove(),e.remove()}async function W(t,e){(await function(t,e){return s(P,O,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(U)}function Y(t){J(30,Q()).forEach(a(W,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(K).then((e=>{e.s&&t.forEach(U)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),J(30,Q()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,l("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=q(R(t[0]))
new L({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},b,function(){(()=>{const t=i('input[type="submit"]')
f(t.parentNode,`&nbsp;&nbsp;${V("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!m()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-b0cd0b42.js.map
