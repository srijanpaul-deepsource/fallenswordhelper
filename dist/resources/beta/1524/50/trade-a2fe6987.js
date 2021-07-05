import{y as e,a as t,I as s,aw as n,g as i,z as a,d as c,ax as o,e as r,o as d,t as l,m as f,b as m,h,l as p,a5 as u,bg as k,av as b,E as L,c as S}from"./calfSystem-617f9a5d.js"
import{c as g}from"./createTr-e3b41cf4.js"
import{g as j}from"./getInventoryById-c970cb7e.js"
import{h as y}from"./hideElement-e21a7422.js"
import{i as N}from"./insertElementBefore-784d4581.js"
import{i as v}from"./insertHtmlBeforeBegin-4bda1ddf.js"
import{n as I}from"./numberIsNaN-bf55a311.js"
import"./getInventory-b6eae9c2.js"
import"./cmdExport-39e5a4b7.js"
import"./indexAjaxJson-1f941a45.js"
let E
function $(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const s=p("fshHide",t),n="folderid0"===e,i=p(e,t);(function(e,t,s){return e&&u(t,s)})(s,n,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,s){return!e&&!t&&!s}(s,n,i)&&(t.classList.remove("fshBlock"),y(t))}function A(e){i(c,function(){let e=a("item-div")
if(!e){e=f({id:"item-div",className:"itemDiv"})
const t=a("item-list"),s=m(c,t)
for(;s.length;)s[0].classList.add("fshBlock"),h(e,s[0])
N(e,t)}return e}()).forEach(l($,e.target.id))}function H(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&A(e)}function T(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function C(e){const t=e.children[0].lastElementChild.children[0]
if(!t)return
const s=t.children[0]
if(!s)return
const n=E[s.getAttribute("value")]
n&&(e.classList.add(`folderid${n.folder_id}`),E.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,n),s.classList.add(`itemid${n.item_id}`),s.classList.add(`itemtype${n.type}`))}function x(e){const t=s("betaOptIn")
t&&n("trade.processTrade"),E=e.items
i(c,a("item-list")).forEach(C),function(e){const t=g({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${r(e).map(T).join("")}`})
d(t,H)
const s=a("item-list").parentNode.parentNode
v(s,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(t,s)}(e.folders),t&&o("trade.processTrade")}function B(e){t(3,x,[e])}function M(){e()||j().then(B)}function w(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&p("itemtype12",t)}(e,t)||p(e,t)}function W(e,t){return e||!p("isInST",t)}function _(e){return e.children[0].lastElementChild.children[0].children[0]}function z(e,t){t.checked=e}function O(e){z(!1,e)}function D(e){z(!0,e)}function F(e,t){t.filter(l(W,function(){const e=a("itemsInSt")
if(e)return e.checked}())).map(_).filter(l(w,e)).slice(0,function(e){const t=parseInt(a("fshSendHowMany").value,10)
return I(t)?e.length:"-"!==S.subcmd?Math.min(100,t):t}(t)).forEach(D)}function J(e){p("fshCheckAll",e.target)&&function(e){const t=a("item-div")||a("item-list"),s=L("table:not(.fshHide)",t)
s.map(_).forEach(O),F(e.target.id,s)}(e)}function P(e){return k(`[${e}]`)}function R(){const e=P(s("sendClasses"))
return e||P(b.sendClasses)}function q(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function G(e){const t=g({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${R().map(q).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
d(t,J),N(t,e.parentNode.parentNode)}function K(){const e=a("item-list")
e&&(t(3,M),t(3,G,[e]))}export default K
//# sourceMappingURL=trade-a2fe6987.js.map
