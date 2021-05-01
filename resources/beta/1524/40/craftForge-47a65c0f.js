import{e,j as t,a as n,g as r,b as o,p as s,d as a,c as i,o as c,i as f,f as m,h as d,k as u,l as p,m as l}from"./calfSystem-ab393688.js"
import{c as h}from"./createInput-c427de8f.js"
import{c as j}from"./createLabel-d7c4f0d0.js"
import{g}from"./getInventoryById-11ef40d9.js"
import{h as N}from"./hideElement-512851a2.js"
import{i as E}from"./insertElementAfterBegin-925be257.js"
import{m as b}from"./makeFolderSpan-b092137d.js"
import{t as k}from"./toggleForce-4ff42c01.js"
import"./getInventory-d8387689.js"
import"./cmdExport-72a02624.js"
import"./indexAjaxJson-e927e360.js"
import"./insertElementBefore-6e80e0ff.js"
function x(e){return b(e[0],e[1])}function y(t,n){return b("0","All")+function(e){return e?b("-2","Worn"):""}(n)+b("-1","Main")+e(t).map(x).join("")}let I,v,L,M,A,B=0
function F(e){const t=l(),n=e[0].parentNode
d(t,n),d(A,t)}function S(e){const t=e[0].parentNode.parentNode
k(t,function(e){return 0!==B&&e[2]!==B}(e)||function(e){return M.checked&&"Perfect"!==e[3]}(e))}function C(){A||(A=l({className:"fshItemGrid"}),v.forEach(F),E(I.parentNode,A),N(I)),v.forEach(S)}function P(e){if(!p("fshFolder",e.target))return
const t=Number(e.target.dataset.folder)
t!==B&&(B=t,C())}function V(e){const t=L[e[1]]
t&&e.push(function(e){return e.equipped?-2:e.folder_id}(t),t.craft)}function q(){v.forEach(V)}function G(e){if(e.items&&I){L=e.items,n(4,q)
!function(e){if("crafting"===i.cmd)return void(M={checked:!1})
const t=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),m(M,"change",C),d(t,M),f(e," &ensp;"),d(e,t)}(function(e){const t=I.parentNode.parentNode.previousElementSibling.children[0]
return t.classList.add("fshCenter"),c(t,P),f(t,y(e,!0)),t}(e.folders))}}function H(e){const{tipped:t}=e.dataset
return[e,t.match(u)[2]]}function J(){I=function(){const e=o(a,s.lastElementChild)
return"crafting"===i.cmd?e[1]:e[0]}(),v=r("img",I).map(H)}function T(){t()&&(g().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-47a65c0f.js.map
