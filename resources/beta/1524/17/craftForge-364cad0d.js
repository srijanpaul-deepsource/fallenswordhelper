import{j as e,a as t,g as n,b as s,p as r,d as o,c as a,o as c,i,e as f,f as d,h as m,k as p}from"./calfSystem-02ae8657.js"
import{c as u}from"./createInput-cbb1c2cb.js"
import{c as l}from"./createLabel-73beda06.js"
import"./insertElementBefore-35d3b41e.js"
import{i as h}from"./insertElementAfterBegin-680701c3.js"
import{h as j}from"./hideElement-2791bd8d.js"
import"./indexAjaxJson-8dbd2034.js"
import"./makeFolderSpan-ab795351.js"
import{m as b}from"./makeFolderSpans-f2c71edc.js"
import"./cmdExport-de6d587e.js"
import"./getInventory-d2026f8d.js"
import{g}from"./getInventoryById-8b3f94ee.js"
import{t as N}from"./toggleForce-f1ceaa74.js"
let E,k,x,y,I,L=0
function v(e){const t=p(),n=e[0].parentNode
d(t,n),d(I,t)}function F(e){const t=e[0].parentNode.parentNode
N(t,function(e){return 0!==L&&e[2]!==L}(e)||function(e){return y.checked&&"Perfect"!==e[3]}(e))}function S(){I||(I=p({className:"fshItemGrid"}),k.forEach(v),h(E.parentNode,I),j(E)),k.forEach(F)}function B(e){if(!e.target.classList.contains("fshFolder"))return
const t=Number(e.target.dataset.folder)
t!==L&&(L=t,S())}function M(e){const t=x[e[1]]
t&&e.push(function(e){return e.equipped?-2:e.folder_id}(t),t.craft)}function A(){k.forEach(M)}function C(e){if(e.items&&E){x=e.items,t(4,A)
!function(e){if("crafting"===a.cmd)return void(y={checked:!1})
const t=l({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
y=u({className:"fshVMid",type:"checkbox"}),f(y,"change",S),d(t,y),i(e," &ensp;"),d(e,t)}(function(e){const t=E.parentNode.parentNode.previousElementSibling.children[0]
return t.classList.add("fshCenter"),c(t,B),i(t,b(e,!0)),t}(e.folders))}}function P(e){const{tipped:t}=e.dataset
return[e,t.match(m)[2]]}function V(){E=function(){const e=s(o,r.lastElementChild)
return"crafting"===a.cmd?e[1]:e[0]}(),k=n("img",E).map(P)}export default function(){e()&&(g().then(C),t(3,V))}
//# sourceMappingURL=craftForge-364cad0d.js.map