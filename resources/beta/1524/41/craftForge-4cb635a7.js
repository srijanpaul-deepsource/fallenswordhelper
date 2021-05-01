import{e as t,j as e,a as n,g as r,b as o,p as s,d as a,c as i,o as c,i as f,f as m,h as d,k as u,l as p,m as l}from"./calfSystem-587dd8d3.js"
import{c as h}from"./createInput-b30d8b81.js"
import{c as b}from"./createLabel-838167b2.js"
import{g as j}from"./getInventoryById-e512680f.js"
import{h as g}from"./hideElement-9426b096.js"
import{i as N}from"./insertElementAfterBegin-95fb87ae.js"
import{m as E}from"./makeFolderSpan-cdf30af8.js"
import{t as k}from"./toggleForce-a6b1c4fe.js"
import"./getInventory-86af4251.js"
import"./cmdExport-8bedb500.js"
import"./indexAjaxJson-a5185e0b.js"
import"./insertElementBefore-2bf2da7f.js"
function x(t){return E(t[0],t[1])}function y(e,n){return E("0","All")+function(t){return t?E("-2","Worn"):""}(n)+E("-1","Main")+t(e).map(x).join("")}let I,v,L,M,A,B=0
function F(t){const e=l(),n=t[0].parentNode
d(e,n),d(A,e)}function S(t){const e=t[0].parentNode.parentNode
k(e,function(t){return 0!==B&&t[2]!==B}(t)||function(t){return M.checked&&"Perfect"!==t[3]}(t))}function C(){A||(A=l({className:"fshItemGrid"}),v.forEach(F),N(I.parentNode,A),g(I)),v.forEach(S)}function P(t){if(!p("fshFolder",t.target))return
const e=Number(t.target.dataset.folder)
e!==B&&(B=e,C())}function V(t){const e=L[t[1]]
e&&t.push(function(t){return t.equipped?-2:t.folder_id}(e),e.craft)}function q(){v.forEach(V)}function G(t){if(t.items&&I){L=t.items,n(4,q)
!function(t){if("crafting"===i.cmd)return void(M={checked:!1})
const e=b({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),m(M,"change",C),d(e,M),f(t," &ensp;"),d(t,e)}(function(t){const e=I.parentNode.parentNode.previousElementSibling.children[0]
return e.classList.add("fshCenter"),c(e,P),f(e,y(t,!0)),e}(t.folders))}}function H(t){const{tipped:e}=t.dataset
return[t,e.match(u)[2]]}function J(){I=function(){const t=o(a,s.lastElementChild)
return"crafting"===i.cmd?t[1]:t[0]}(),v=r("img",I).map(H)}function T(){e()&&(j().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-4cb635a7.js.map
