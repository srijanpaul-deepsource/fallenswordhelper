import{e,j as t,a as n,g as r,b as a,p as o,d as s,c,o as i,i as f,f as m,h as d,k as u,l as p,m as l}from"./calfSystem-ec5e5725.js"
import{c as h}from"./createInput-a9a25c4d.js"
import{c as j}from"./createLabel-de3c44aa.js"
import"./insertElementBefore-543d9ef0.js"
import{i as g}from"./insertElementAfterBegin-21a4a979.js"
import{h as b}from"./hideElement-b0b3e820.js"
import"./indexAjaxJson-b7f888c6.js"
import"./cmdExport-2a00007a.js"
import"./guildStore-1c101a49.js"
import"./getInventory-e3d9aaa4.js"
import{g as N}from"./getInventoryById-a3024f06.js"
import{t as E}from"./toggleForce-7e736fc3.js"
import{m as k}from"./makeFolderSpan-b10ef92b.js"
function x(e){return k(e[0],e[1])}function y(t,n){return k("0","All")+function(e){return e?k("-2","Worn"):""}(n)+k("-1","Main")+e(t).map(x).join("")}let I,v,L,M,S,A=0
function B(e){const t=l(),n=e[0].parentNode
d(t,n),d(S,t)}function F(e){const t=e[0].parentNode.parentNode
E(t,function(e){return 0!==A&&e[2]!==A}(e)||function(e){return M.checked&&"Perfect"!==e[3]}(e))}function C(){S||(S=l({className:"fshItemGrid"}),v.forEach(B),g(I.parentNode,S),b(I)),v.forEach(F)}function P(e){if(!p("fshFolder",e.target))return
const t=Number(e.target.dataset.folder)
t!==A&&(A=t,C())}function V(e){const t=L[e[1]]
t&&e.push(function(e){return e.equipped?-2:e.folder_id}(t),t.craft)}function q(){v.forEach(V)}function G(e){if(e.items&&I){L=e.items,n(4,q)
!function(e){if("crafting"===c.cmd)return void(M={checked:!1})
const t=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),m(M,"change",C),d(t,M),f(e," &ensp;"),d(e,t)}(function(e){const t=I.parentNode.parentNode.previousElementSibling.children[0]
return t.classList.add("fshCenter"),i(t,P),f(t,y(e,!0)),t}(e.folders))}}function H(e){const{tipped:t}=e.dataset
return[e,t.match(u)[2]]}function J(){I=function(){const e=a(s,o.lastElementChild)
return"crafting"===c.cmd?e[1]:e[0]}(),v=r("img",I).map(H)}function T(){t()&&(N().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-b1c3d4fe.js.map