import{j as e,a as t,g as n,b as s,p as r,d as o,c as a,o as c,i,e as f,f as m,h as d,k as p}from"./calfSystem-dec5e071.js"
import{c as u}from"./createInput-6f4c3b04.js"
import{c as l}from"./createLabel-2805259f.js"
import"./insertElementBefore-1d764477.js"
import{i as h}from"./insertElementAfterBegin-80cc8c86.js"
import{h as j}from"./hideElement-3fc45118.js"
import"./indexAjaxJson-ecf8d1f5.js"
import"./makeFolderSpan-46bebe5a.js"
import{m as g}from"./makeFolderSpans-af604e8b.js"
import"./cmdExport-965d881b.js"
import"./getInventory-722fd75f.js"
import{g as b}from"./getInventoryById-a2e66e56.js"
import{t as N}from"./toggleForce-93af29f7.js"
let E,k,x,y,I,L=0
function v(e){const t=p(),n=e[0].parentNode
m(t,n),m(I,t)}function F(e){const t=e[0].parentNode.parentNode
N(t,function(e){return 0!==L&&e[2]!==L}(e)||function(e){return y.checked&&"Perfect"!==e[3]}(e))}function S(){I||(I=p({className:"fshItemGrid"}),k.forEach(v),h(E.parentNode,I),j(E)),k.forEach(F)}function B(e){if(!e.target.classList.contains("fshFolder"))return
const t=Number(e.target.dataset.folder)
t!==L&&(L=t,S())}function M(e){const t=x[e[1]]
t&&e.push(function(e){return e.equipped?-2:e.folder_id}(t),t.craft)}function A(){k.forEach(M)}function C(e){if(e.items&&E){x=e.items,t(4,A)
!function(e){if("crafting"===a.cmd)return void(y={checked:!1})
const t=l({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
y=u({className:"fshVMid",type:"checkbox"}),f(y,"change",S),m(t,y),i(e," &ensp;"),m(e,t)}(function(e){const t=E.parentNode.parentNode.previousElementSibling.children[0]
return t.classList.add("fshCenter"),c(t,B),i(t,g(e,!0)),t}(e.folders))}}function P(e){const{tipped:t}=e.dataset
return[e,t.match(d)[2]]}function V(){E=function(){const e=s(o,r.lastElementChild)
return"crafting"===a.cmd?e[1]:e[0]}(),k=n("img",E).map(P)}export default function(){e()&&(b().then(C),t(3,V))}
//# sourceMappingURL=craftForge-74af57fe.js.map