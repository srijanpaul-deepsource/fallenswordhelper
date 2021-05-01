import{y as e,a as t,as as s,g as n,z as i,d as a,at as o,e as c,o as r,t as l,m as d,b as f,h as m,l as u,a6 as p,$ as h,D as k,E as g,I as j,bc as y,ar as S,c as L}from"./calfSystem-c464cb1d.js"
import{c as v}from"./createTr-441f2d04.js"
import{g as b}from"./getInventoryById-dc2e97f5.js"
import{h as I}from"./hideElement-512851a2.js"
import{i as N}from"./insertElementBefore-6e80e0ff.js"
import{i as B}from"./insertHtmlBeforeBegin-9bf2f034.js"
import{n as E}from"./numberIsNaN-2764ce9c.js"
import{c as $}from"./createButton-cc9ed041.js"
import{a as A,s as C}from"./sendItems-a17011ca.js"
import{i as H}from"./insertElementAfter-edfc87ec.js"
import"./getInventory-609e6eb9.js"
import"./guildStore-3f19a00f.js"
import"./cmdExport-5edaf067.js"
import"./indexAjaxJson-9476707b.js"
import"./htmlResult-4cc00d51.js"
let T
function x(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const s=u("fshHide",t),n="folderid0"===e,i=u(e,t);(function(e,t,s){return e&&p(t,s)})(s,n,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,s){return!e&&!t&&!s}(s,n,i)&&(t.classList.remove("fshBlock"),I(t))}function M(e){n(a,function(){let e=i("item-div")
if(!e){e=d({id:"item-div",className:"itemDiv"})
const t=i("item-list"),s=f(a,t)
for(;s.length;)s[0].classList.add("fshBlock"),m(e,s[0])
N(e,t)}return e}()).forEach(l(x,e.target.id))}function w(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&M(e)}function _(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function O(e){const t=e.children[0].lastElementChild.children[0].children[0],s=T[t.getAttribute("value")]
s&&(e.classList.add(`folderid${s.folder_id}`),T.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,s),t.classList.add(`itemid${s.item_id}`),t.classList.add(`itemtype${s.type}`))}function W(e){s("trade.processTrade"),T=e.items
n(a,i("item-list")).forEach(O),function(e){const t=v({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${c(e).map(_).join("")}`})
r(t,w)
const s=i("item-list").parentNode.parentNode
B(s,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(t,s)}(e.folders),o("trade.processTrade")}function F(e){t(3,W,[e])}function R(){e()||b().then(F)}async function z(e,t){const s=await e
return console.log("promise data",s),null===s||s.s?(n=t[0],i=t[1],h(C,A,n,i)):s
var n,i}async function D(){const e=k('form[name="sendItemForm"] [name="target_username"]'),t=g('[name="sendItemList[]"]:checked').map((t=>[e.value,[t.value]])),s=await t.reduce(z,Promise.resolve(null))
console.log("finalResult",s)}function P(){const e=k('form[name="sendItemForm"] input[value="Send"]'),t=$({className:"fshBl",id:"oneByOneBtn",textContent:"OneByOne",type:"button"})
H(t,e),r(t,D)}function J(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&u("itemtype12",t)}(e,t)||u(e,t)}function q(e,t){return e||!u("isInST",t)}function G(e){return e.children[0].lastElementChild.children[0].children[0]}function K(e,t){t.checked=e}function Q(e){K(!1,e)}function U(e){K(!0,e)}function V(e,t){t.filter(l(q,function(){const e=i("itemsInSt")
if(e)return e.checked}())).map(G).filter(l(J,e)).slice(0,function(e){const t=parseInt(i("fshSendHowMany").value,10)
return E(t)?e.length:"-"!==L.subcmd?Math.min(100,t):t}(t)).forEach(U)}function X(e){u("fshCheckAll",e.target)&&function(e){const t=i("item-div")||i("item-list"),s=g("table:not(.fshHide)",t)
s.map(G).forEach(Q),V(e.target.id,s)}(e)}function Y(e){return y(`[${e}]`)}function Z(){const e=Y(j("sendClasses"))
return e||Y(S.sendClasses)}function ee(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function te(){const e=v({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${Z().map(ee).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
r(e,X)
const t=i("item-list").parentNode.parentNode
N(e,t)}function se(){t(3,R),t(3,te),t(3,P)}export default se
//# sourceMappingURL=trade-0245747b.js.map
