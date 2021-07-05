import{y as e,a as t,I as n,ax as s,g as i,z as a,d as o,ay as c,e as r,o as l,t as d,m as f,b as m,h as u,l as p,a6 as h,$ as b,D as j,E as k,bj as y,aw as g,c as S}from"./calfSystem-b3667af8.js"
import{c as L}from"./createTr-ccd348b3.js"
import{g as v}from"./getInventoryById-68508d8c.js"
import{h as I}from"./hideElement-e21a7422.js"
import{i as N}from"./insertElementBefore-784d4581.js"
import{i as B}from"./insertHtmlBeforeBegin-62ac6426.js"
import{n as E}from"./numberIsNaN-bf55a311.js"
import{c as $}from"./createButton-2cb8f044.js"
import{a as A,s as C}from"./sendItems-cccb8cdb.js"
import{i as H}from"./insertElementAfter-7851228c.js"
import"./getInventory-6a7f3864.js"
import"./guildStore-f5cf7d1f.js"
import"./cmdExport-31421fb2.js"
import"./indexAjaxJson-79cecebf.js"
import"./htmlResult-98b40524.js"
let T
function x(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const n=p("fshHide",t),s="folderid0"===e,i=p(e,t);(function(e,t,n){return e&&h(t,n)})(n,s,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,n){return!e&&!t&&!n}(n,s,i)&&(t.classList.remove("fshBlock"),I(t))}function w(e){i(o,function(){let e=a("item-div")
if(!e){e=f({id:"item-div",className:"itemDiv"})
const t=a("item-list"),n=m(o,t)
for(;n.length;)n[0].classList.add("fshBlock"),u(e,n[0])
N(e,t)}return e}()).forEach(d(x,e.target.id))}function M(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&w(e)}function O(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function _(e){const t=e.children[0].lastElementChild.children[0]
if(!t)return
const n=t.children[0]
if(!n)return
const s=T[n.getAttribute("value")]
s&&(e.classList.add(`folderid${s.folder_id}`),T.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,s),n.classList.add(`itemid${s.item_id}`),n.classList.add(`itemtype${s.type}`))}function W(e){const t=n("betaOptIn")
t&&s("trade.processTrade"),T=e.items
i(o,a("item-list")).forEach(_),function(e){const t=L({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${r(e).map(O).join("")}`})
l(t,M)
const n=a("item-list").parentNode.parentNode
B(n,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(t,n)}(e.folders),t&&c("trade.processTrade")}function F(e){t(3,W,[e])}function R(){e()||v().then(F)}async function z(e,t){const n=await e
return console.log("promise data",n),null===n||n.s?(s=t[0],i=t[1],b(C,A,s,i)):n
var s,i}async function D(){const e=j('form[name="sendItemForm"] [name="target_username"]'),t=k('[name="sendItemList[]"]:checked').map((t=>[e.value,[t.value]])),n=await t.reduce(z,Promise.resolve(null))
console.log("finalResult",n)}function P(){const e=j('form[name="sendItemForm"] input[value="Send"]'),t=$({className:"fshBl",id:"oneByOneBtn",textContent:"OneByOne",type:"button"})
H(t,e),l(t,D)}function J(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&p("itemtype12",t)}(e,t)||p(e,t)}function q(e,t){return e||!p("isInST",t)}function G(e){return e.children[0].lastElementChild.children[0].children[0]}function K(e,t){t.checked=e}function Q(e){K(!1,e)}function U(e){K(!0,e)}function V(e,t){t.filter(d(q,function(){const e=a("itemsInSt")
if(e)return e.checked}())).map(G).filter(d(J,e)).slice(0,function(e){const t=parseInt(a("fshSendHowMany").value,10)
return E(t)?e.length:"-"!==S.subcmd?Math.min(100,t):t}(t)).forEach(U)}function X(e){p("fshCheckAll",e.target)&&function(e){const t=a("item-div")||a("item-list"),n=k("table:not(.fshHide)",t)
n.map(G).forEach(Q),V(e.target.id,n)}(e)}function Y(e){return y(`[${e}]`)}function Z(){const e=Y(n("sendClasses"))
return e||Y(g.sendClasses)}function ee(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function te(e){const t=L({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${Z().map(ee).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
l(t,X),N(t,e.parentNode.parentNode)}function ne(){const e=a("item-list")
e&&(t(3,R),t(3,te,[e]),t(3,P))}export default ne
//# sourceMappingURL=trade-a454755b.js.map
