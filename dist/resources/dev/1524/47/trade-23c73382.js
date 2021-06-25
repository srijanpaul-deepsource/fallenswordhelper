import{y as e,a as t,aw as n,g as s,z as i,d as a,ax as o,e as r,o as c,t as l,m as d,b as f,h as m,l as u,a5 as p,$ as h,D as k,E as b,I as g,bi as j,av as y,c as S}from"./calfSystem-bfc1f6c0.js"
import{c as v}from"./createTr-a7569eaa.js"
import{g as L}from"./getInventoryById-06ca3545.js"
import{h as I}from"./hideElement-7486432a.js"
import{i as N}from"./insertElementBefore-165ce171.js"
import{i as B}from"./insertHtmlBeforeBegin-fac197dc.js"
import{n as E}from"./numberIsNaN-2f104aa2.js"
import{c as $}from"./createButton-ae2671d1.js"
import{a as A,s as C}from"./sendItems-8e5b9457.js"
import{i as H}from"./insertElementAfter-bb7d09fe.js"
import"./getInventory-1314a425.js"
import"./guildStore-0e0c654d.js"
import"./cmdExport-f5d5b9e2.js"
import"./indexAjaxJson-bf365b96.js"
import"./htmlResult-f4aeaae6.js"
let T
function x(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const n=u("fshHide",t),s="folderid0"===e,i=u(e,t);(function(e,t,n){return e&&p(t,n)})(n,s,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,n){return!e&&!t&&!n}(n,s,i)&&(t.classList.remove("fshBlock"),I(t))}function w(e){s(a,function(){let e=i("item-div")
if(!e){e=d({id:"item-div",className:"itemDiv"})
const t=i("item-list"),n=f(a,t)
for(;n.length;)n[0].classList.add("fshBlock"),m(e,n[0])
N(e,t)}return e}()).forEach(l(x,e.target.id))}function M(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&w(e)}function _(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function O(e){const t=e.children[0].lastElementChild.children[0]
if(!t)return
const n=t.children[0]
if(!n)return
const s=T[n.getAttribute("value")]
s&&(e.classList.add(`folderid${s.folder_id}`),T.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,s),n.classList.add(`itemid${s.item_id}`),n.classList.add(`itemtype${s.type}`))}function W(e){n("trade.processTrade"),T=e.items
s(a,i("item-list")).forEach(O),function(e){const t=v({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${r(e).map(_).join("")}`})
c(t,M)
const n=i("item-list").parentNode.parentNode
B(n,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(t,n)}(e.folders),o("trade.processTrade")}function F(e){t(3,W,[e])}function R(){e()||L().then(F)}async function z(e,t){const n=await e
return console.log("promise data",n),null===n||n.s?(s=t[0],i=t[1],h(C,A,s,i)):n
var s,i}async function D(){const e=k('form[name="sendItemForm"] [name="target_username"]'),t=b('[name="sendItemList[]"]:checked').map((t=>[e.value,[t.value]])),n=await t.reduce(z,Promise.resolve(null))
console.log("finalResult",n)}function P(){const e=k('form[name="sendItemForm"] input[value="Send"]'),t=$({className:"fshBl",id:"oneByOneBtn",textContent:"OneByOne",type:"button"})
H(t,e),c(t,D)}function J(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&u("itemtype12",t)}(e,t)||u(e,t)}function q(e,t){return e||!u("isInST",t)}function G(e){return e.children[0].lastElementChild.children[0].children[0]}function K(e,t){t.checked=e}function Q(e){K(!1,e)}function U(e){K(!0,e)}function V(e,t){t.filter(l(q,function(){const e=i("itemsInSt")
if(e)return e.checked}())).map(G).filter(l(J,e)).slice(0,function(e){const t=parseInt(i("fshSendHowMany").value,10)
return E(t)?e.length:"-"!==S.subcmd?Math.min(100,t):t}(t)).forEach(U)}function X(e){u("fshCheckAll",e.target)&&function(e){const t=i("item-div")||i("item-list"),n=b("table:not(.fshHide)",t)
n.map(G).forEach(Q),V(e.target.id,n)}(e)}function Y(e){return j(`[${e}]`)}function Z(){const e=Y(g("sendClasses"))
return e||Y(y.sendClasses)}function ee(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function te(e){const t=v({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${Z().map(ee).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
c(t,X),N(t,e.parentNode.parentNode)}function ne(){const e=i("item-list")
e&&(t(3,R),t(3,te,[e]),t(3,P))}export default ne
//# sourceMappingURL=trade-23c73382.js.map
