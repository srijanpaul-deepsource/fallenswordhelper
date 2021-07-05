import{y as t,a as e,I as s,av as n,g as i,z as a,d as c,aw as o,e as r,o as d,t as l,m as f,b as m,h,l as p,a4 as u,bf as b,au as k,E as L,c as S}from"./calfSystem-2172498b.js"
import{c as g}from"./createTr-acd21719.js"
import{g as j}from"./getInventoryById-f4d5c4b7.js"
import{h as y}from"./hideElement-3021ab25.js"
import{i as N}from"./insertElementBefore-c7161beb.js"
import{i as v}from"./insertHtmlBeforeBegin-6f6dcc84.js"
import{n as I}from"./numberIsNaN-9a364388.js"
import"./getInventory-30c0077d.js"
import"./cmdExport-b6bb85ab.js"
import"./indexAjaxJson-b5d4e9de.js"
let E
function $(t,e){e.children[0].lastElementChild.children[0].children[0].checked=!1
const s=p("fshHide",e),n="folderid0"===t,i=p(t,e);(function(t,e,s){return t&&u(e,s)})(s,n,i)&&(e.classList.remove("fshHide"),e.classList.add("fshBlock")),function(t,e,s){return!t&&!e&&!s}(s,n,i)&&(e.classList.remove("fshBlock"),y(e))}function A(t){i(c,function(){let t=a("item-div")
if(!t){t=f({id:"item-div",className:"itemDiv"})
const e=a("item-list"),s=m(c,e)
for(;s.length;)s[0].classList.add("fshBlock"),h(t,s[0])
N(t,e)}return t}()).forEach(l($,t.target.id))}function H(t){"SPAN"===t.target.nodeName&&-1!==t.target.id.indexOf("folderid")&&A(t)}function T(t){return` &ensp;<span id="folderid${t[0]}" class="fshLink fshNoWrap" fid=${t[0]}>${t[1]}</span> `}function C(t){const e=t.children[0].lastElementChild.children[0]
if(!e)return
const s=e.children[0]
if(!s)return
const n=E[s.getAttribute("value")]
n&&(t.classList.add(`folderid${n.folder_id}`),E.fshHasST&&function(t,e){e.is_in_st&&t.classList.add("isInST")}(t,n),s.classList.add(`itemid${n.item_id}`),s.classList.add(`itemtype${n.type}`))}function x(t){const e=s("betaOptIn")
e&&n("trade.processTrade"),E=t.items
i(c,a("item-list")).forEach(C),function(t){const e=g({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${r(t).map(T).join("")}`})
d(e,H)
const s=a("item-list").parentNode.parentNode
v(s,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(e,s)}(t.folders),e&&o("trade.processTrade")}function B(t){e(3,x,[t])}function M(){t()||j().then(B)}function w(t,e){return"itemid-1"===t||function(t,e){return"itemid-2"===t&&p("itemtype12",e)}(t,e)||p(t,e)}function W(t,e){return t||!p("isInST",e)}function _(t){return t.children[0].lastElementChild.children[0].children[0]}function z(t,e){e.checked=t}function O(t){z(!1,t)}function D(t){z(!0,t)}function F(t,e){e.filter(l(W,function(){const t=a("itemsInSt")
if(t)return t.checked}())).map(_).filter(l(w,t)).slice(0,function(t){const e=parseInt(a("fshSendHowMany").value,10)
return I(e)?t.length:"-"!==S.subcmd?Math.min(100,e):e}(e)).forEach(D)}function J(t){p("fshCheckAll",t.target)&&function(t){const e=a("item-div")||a("item-list"),s=L("table:not(.fshHide)",e)
s.map(_).forEach(O),F(t.target.id,s)}(t)}function P(t){return b(`[${t}]`)}function R(){const t=P(s("sendClasses"))
return t||P(k.sendClasses)}function q(t){return` &ensp;<span id="itemid${t[1]}" class="fshCheckAll fshLink fshNoWrap">${t[0]}</span>`}function G(t){const e=g({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${R().map(q).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
d(e,J),N(e,t.parentNode.parentNode)}function K(){const t=a("item-list")
t&&(e(3,M),e(3,G,[t]))}export default K
//# sourceMappingURL=trade-9f320437.js.map
