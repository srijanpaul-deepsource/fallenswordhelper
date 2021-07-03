import{y as t,a as s,I as e,av as n,g as i,z as a,d as c,aw as o,e as r,o as d,t as l,m as f,b as m,h,l as p,a4 as u,bf as k,au as L,E as S,c as g}from"./calfSystem-85fa6364.js"
import{c as b}from"./createTr-a40c4c0a.js"
import{g as j}from"./getInventoryById-fd76220a.js"
import{h as y}from"./hideElement-3852cc2c.js"
import{i as N}from"./insertElementBefore-5adb1609.js"
import{i as v}from"./insertHtmlBeforeBegin-9416d9d6.js"
import{n as I}from"./numberIsNaN-68797c81.js"
import"./getInventory-f75cd6a9.js"
import"./cmdExport-62f110d4.js"
import"./indexAjaxJson-4fb780dc.js"
let E
function $(t,s){s.children[0].lastElementChild.children[0].children[0].checked=!1
const e=p("fshHide",s),n="folderid0"===t,i=p(t,s);(function(t,s,e){return t&&u(s,e)})(e,n,i)&&(s.classList.remove("fshHide"),s.classList.add("fshBlock")),function(t,s,e){return!t&&!s&&!e}(e,n,i)&&(s.classList.remove("fshBlock"),y(s))}function A(t){i(c,function(){let t=a("item-div")
if(!t){t=f({id:"item-div",className:"itemDiv"})
const s=a("item-list"),e=m(c,s)
for(;e.length;)e[0].classList.add("fshBlock"),h(t,e[0])
N(t,s)}return t}()).forEach(l($,t.target.id))}function H(t){"SPAN"===t.target.nodeName&&-1!==t.target.id.indexOf("folderid")&&A(t)}function T(t){return` &ensp;<span id="folderid${t[0]}" class="fshLink fshNoWrap" fid=${t[0]}>${t[1]}</span> `}function C(t){const s=t.children[0].lastElementChild.children[0]
if(!s)return
const e=s.children[0]
if(!e)return
const n=E[e.getAttribute("value")]
n&&(t.classList.add(`folderid${n.folder_id}`),E.fshHasST&&function(t,s){s.is_in_st&&t.classList.add("isInST")}(t,n),e.classList.add(`itemid${n.item_id}`),e.classList.add(`itemtype${n.type}`))}function x(t){const s=e("betaOptIn")
s&&n("trade.processTrade"),E=t.items
i(c,a("item-list")).forEach(C),function(t){const s=b({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${r(t).map(T).join("")}`})
d(s,H)
const e=a("item-list").parentNode.parentNode
v(e,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(s,e)}(t.folders),s&&o("trade.processTrade")}function B(t){s(3,x,[t])}function M(){t()||j().then(B)}function w(t,s){return"itemid-1"===t||function(t,s){return"itemid-2"===t&&p("itemtype12",s)}(t,s)||p(t,s)}function W(t,s){return t||!p("isInST",s)}function _(t){return t.children[0].lastElementChild.children[0].children[0]}function z(t,s){s.checked=t}function O(t){z(!1,t)}function D(t){z(!0,t)}function F(t,s){s.filter(l(W,function(){const t=a("itemsInSt")
if(t)return t.checked}())).map(_).filter(l(w,t)).slice(0,function(t){const s=parseInt(a("fshSendHowMany").value,10)
return I(s)?t.length:"-"!==g.subcmd?Math.min(100,s):s}(s)).forEach(D)}function J(t){p("fshCheckAll",t.target)&&function(t){const s=a("item-div")||a("item-list"),e=S("table:not(.fshHide)",s)
e.map(_).forEach(O),F(t.target.id,e)}(t)}function P(t){return k(`[${t}]`)}function R(){const t=P(e("sendClasses"))
return t||P(L.sendClasses)}function q(t){return` &ensp;<span id="itemid${t[1]}" class="fshCheckAll fshLink fshNoWrap">${t[0]}</span>`}function G(t){const s=b({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${R().map(q).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
d(s,J),N(s,t.parentNode.parentNode)}function K(){const t=a("item-list")
t&&(s(3,M),s(3,G,[t]))}export default K
//# sourceMappingURL=trade-3ccddf01.js.map
