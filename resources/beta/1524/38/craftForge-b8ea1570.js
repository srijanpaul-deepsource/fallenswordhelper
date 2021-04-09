import{e,j as t,a as n,g as r,b as o,p as s,d as a,c,o as i,i as f,f as m,h as d,k as u,l as p,m as l}from"./calfSystem-71efcdd9.js"
import{c as h}from"./createInput-b623eea7.js"
import{c as j}from"./createLabel-e7af3641.js"
import{g}from"./getInventoryById-c1b4f3f9.js"
import{h as b}from"./hideElement-9b8f5190.js"
import{i as N}from"./insertElementAfterBegin-4d53c0af.js"
import{m as E}from"./makeFolderSpan-300fb339.js"
import{t as k}from"./toggleForce-6fbd75e0.js"
import"./getInventory-1acd4200.js"
import"./cmdExport-29c620b8.js"
import"./indexAjaxJson-9e9c7404.js"
import"./insertElementBefore-71272774.js"
function x(e){return E(e[0],e[1])}function y(t,n){return E("0","All")+function(e){return e?E("-2","Worn"):""}(n)+E("-1","Main")+e(t).map(x).join("")}let I,v,L,M,A,B=0
function F(e){const t=l(),n=e[0].parentNode
d(t,n),d(A,t)}function S(e){const t=e[0].parentNode.parentNode
k(t,function(e){return 0!==B&&e[2]!==B}(e)||function(e){return M.checked&&"Perfect"!==e[3]}(e))}function C(){A||(A=l({className:"fshItemGrid"}),v.forEach(F),N(I.parentNode,A),b(I)),v.forEach(S)}function P(e){if(!p("fshFolder",e.target))return
const t=Number(e.target.dataset.folder)
t!==B&&(B=t,C())}function V(e){const t=L[e[1]]
t&&e.push(function(e){return e.equipped?-2:e.folder_id}(t),t.craft)}function q(){v.forEach(V)}function G(e){if(e.items&&I){L=e.items,n(4,q)
!function(e){if("crafting"===c.cmd)return void(M={checked:!1})
const t=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),m(M,"change",C),d(t,M),f(e," &ensp;"),d(e,t)}(function(e){const t=I.parentNode.parentNode.previousElementSibling.children[0]
return t.classList.add("fshCenter"),i(t,P),f(t,y(e,!0)),t}(e.folders))}}function H(e){const{tipped:t}=e.dataset
return[e,t.match(u)[2]]}function J(){I=function(){const e=o(a,s.lastElementChild)
return"crafting"===c.cmd?e[1]:e[0]}(),v=r("img",I).map(H)}function T(){t()&&(g().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-b8ea1570.js.map
