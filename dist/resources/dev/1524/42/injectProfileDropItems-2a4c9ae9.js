import{C as t,X as e,x as o,$ as s,E as n,t as a,I as r,f as c,D as i,i as f,a0 as l,y as m,bF as d}from"./calfSystem-4b6b865d.js"
import{g as u,d as p,a as h,i as j}from"./injectStoreItems-df1985bd.js"
import{S as b,i as g,s as v,e as x,t as y,a as I,b as _,c as C,d as E,f as k,g as S,h as D,l as N,n as $,j as w,r as A,k as M,m as T,o as B}from"./index-931013a9.js"
import{c as F}from"./chunk-89253199.js"
import{c as J}from"./closestTable-0c49f776.js"
import{c as R}from"./closestTr-2426267d.js"
import{m as X}from"./moveItem-b701fa0c.js"
import{e as V}from"./errorDialog-14a51b34.js"
import{b as q}from"./simpleCheckbox-90be58c0.js"
import"./daAjaxSendItemsToRecipient-51d4df7a.js"
import"./sendItems-aa9128b6.js"
import"./htmlResult-48fd0e15.js"
import"./getInventoryById-0d163274.js"
import"./getInventory-bd8c3f01.js"
import"./guildStore-be851561.js"
import"./cmdExport-bf6b936d.js"
import"./indexAjaxJson-9849e745.js"
import"./doStatTotal-7f8855af.js"
import"./batch-49c32951.js"
import"./closest-9a08f4fa.js"
import"./dialog-aad1c6e1.js"
import"./dialogMsg-5b0fd825.js"
import"./isChecked-cf65e779.js"
function z(t,e,o){const s=t.slice()
return s[7]=e[o],s}function G(t){let e,o,s,n=t[3](t[7])+""
return{c(){e=x("option"),o=y(n),e.__value=s=t[2](t[7]),e.value=e.__value},m(t,s){I(t,e,s),_(e,o)},p(t,a){1&a&&n!==(n=t[3](t[7])+"")&&C(o,n),1&a&&s!==(s=t[2](t[7]))&&(e.__value=s,e.value=e.__value)},d(t){t&&E(e)}}}function H(t){let e,o,s,n,a,r,c,i,f,l,m,d=t[0],u=[]
for(let e=0;e<d.length;e+=1)u[e]=G(z(t,d,e))
return{c(){e=x("tr"),o=x("td"),s=x("span"),s.textContent="Move selected items to:",n=k(),a=x("select")
for(let t=0;t<u.length;t+=1)u[t].c()
r=k(),c=x("span"),c.textContent=" ",i=k(),f=x("button"),f.textContent="Move",S(a,"class","customselect"),void 0===t[1]&&T((()=>t[5].call(a))),S(f,"class","custombutton"),S(f,"type","button"),S(o,"class","fshCenter")},m(d,p){I(d,e,p),_(e,o),_(o,s),_(o,n),_(o,a)
for(let t=0;t<u.length;t+=1)u[t].m(a,null)
D(a,t[1]),_(o,r),_(o,c),_(o,i),_(o,f),l||(m=[N(a,"change",t[5]),N(f,"click",t[4])],l=!0)},p(t,[e]){if(13&e){let o
for(d=t[0],o=0;o<d.length;o+=1){const s=z(t,d,o)
u[o]?u[o].p(s,e):(u[o]=G(s),u[o].c(),u[o].m(a,null))}for(;o<u.length;o+=1)u[o].d(1)
u.length=d.length}7&e&&D(a,t[1])},i:$,o:$,d(t){t&&E(e),w(u,t),l=!1,A(m)}}}function K(o,s,n){const a=M()
let r,{folders:c}=s
const i=t=>t.parentNode.href.match(/&folder_id=(-?\d+)/i)[1]
return o.$$set=t=>{"folders"in t&&n(0,c=t.folders)},[c,r,i,e=>t(e.parentNode.parentNode),function(){e("dropitems","Move to Folder"),a("move",r)},function(){r=B(this),n(1,r),n(2,i),n(0,c)}]}class L extends b{constructor(t){super(),g(this,t,K,H,v,{folders:0})}}function O(t,e){return X(e,t).then((()=>({r:e})))}function P(t,e){return o({cmd:"profile",subcmd:"sendtofolder",folder_id:t,folderItem:e})}function Q(){return n('[name="removeIndex[]"]:checked')}function U(t){const e=R(t)
e.nextElementSibling.remove(),e.remove()}async function W(t,e){(await function(t,e){return s(P,O,t,e)}(t,e.map((t=>t.value)))).s&&e.forEach(U)}function Y(t){F(30,Q()).forEach(a(W,t.detail))}function Z(t){u().forEach((e=>{e.checked=Boolean(t)}))}let tt
const et=t=>{p(t.map((t=>t.value))).then(V).then((e=>{e.s&&t.forEach(U)}))},ot=t=>{t.returnValue&&tt&&(t.preventDefault(),F(30,Q()).forEach(et),e("dropitems","Destroy by AJAX"))}
function st(){tt=!tt,l("ajaxifyDestroy",tt)}const nt=[function(){const t=n('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const e=R(J(t[0]))
new L({anchor:e.nextElementSibling,props:{folders:t},target:e.parentNode}).$on("move",Y)},j,function(){(()=>{const t=i('input[type="submit"]')
f(t.parentNode,`&nbsp;&nbsp;${q("ajaxifyDestroy")}`),c(t.parentNode,"change",st)})(),tt=r("ajaxifyDestroy"),c(document.forms[0],"submit",ot),window.check=Z}]
function at(){!m()&&h()&&d(nt)}export default at
//# sourceMappingURL=injectProfileDropItems-2a4c9ae9.js.map
