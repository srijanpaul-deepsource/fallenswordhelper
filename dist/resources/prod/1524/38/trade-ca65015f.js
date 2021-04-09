import{y as e,a as t,g as n,z as s,d as i,e as a,o as c,t as o,m as d,b as r,h as l,l as f,a5 as m,I as h,b2 as p,ag as u,E as k,c as b}from"./calfSystem-7a1cce43.js"
import{c as L}from"./createTr-895f233e.js"
import{g as S}from"./getInventoryById-1d2b4072.js"
import{h as g}from"./hideElement-9b8f5190.js"
import{i as j}from"./insertElementBefore-71272774.js"
import{i as y}from"./insertHtmlBeforeBegin-a5bddce3.js"
import{n as N}from"./numberIsNaN-30cde299.js"
import"./getInventory-0954ffd6.js"
import"./cmdExport-b5bb530e.js"
import"./indexAjaxJson-48ec5c5d.js"
let v
function E(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const n=f("fshHide",t),s="folderid0"===e,i=f(e,t);(function(e,t,n){return e&&m(t,n)})(n,s,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,n){return!e&&!t&&!n}(n,s,i)&&(t.classList.remove("fshBlock"),g(t))}function I(e){n(i,function(){let e=s("item-div")
if(!e){e=d({id:"item-div",className:"itemDiv"})
const t=s("item-list"),n=r(i,t)
for(;n.length;)n[0].classList.add("fshBlock"),l(e,n[0])
j(e,t)}return e}()).forEach(o(E,e.target.id))}function $(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&I(e)}function A(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function H(e){const t=e.children[0].lastElementChild.children[0].children[0],n=v[t.getAttribute("value")]
n&&(e.classList.add(`folderid${n.folder_id}`),v.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,n),t.classList.add(`itemid${n.item_id}`),t.classList.add(`itemtype${n.type}`))}function C(e){v=e.items
n(i,s("item-list")).forEach(H),function(e){const t=L({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${a(e).map(A).join("")}`})
c(t,$)
const n=s("item-list").parentNode.parentNode
y(n,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),j(t,n)}(e.folders)}function T(e){t(3,C,[e])}function x(){e()||S().then(T)}function B(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&f("itemtype12",t)}(e,t)||f(e,t)}function M(e,t){return e||!f("isInST",t)}function w(e){return e.children[0].lastElementChild.children[0].children[0]}function W(e,t){t.checked=e}function _(e){W(!1,e)}function z(e){W(!0,e)}function D(e,t){t.filter(o(M,function(){const e=s("itemsInSt")
if(e)return e.checked}())).map(w).filter(o(B,e)).slice(0,function(e){const t=parseInt(s("fshSendHowMany").value,10)
return N(t)?e.length:"-"!==b.subcmd?Math.min(100,t):t}(t)).forEach(z)}function F(e){f("fshCheckAll",e.target)&&function(e){const t=s("item-div")||s("item-list"),n=k("table:not(.fshHide)",t)
n.map(w).forEach(_),D(e.target.id,n)}(e)}function J(e){return p(`[${e}]`)}function O(){const e=J(h("sendClasses"))
return e||J(u.sendClasses)}function P(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function R(){const e=L({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${O().map(P).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
c(e,F)
const t=s("item-list").parentNode.parentNode
j(e,t)}function q(){t(3,x),t(3,R)}export default q
//# sourceMappingURL=trade-ca65015f.js.map
