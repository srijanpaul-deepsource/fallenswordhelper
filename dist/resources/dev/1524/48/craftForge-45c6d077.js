import{e as t,j as e,a as n,g as r,b as o,p as s,d as a,c,o as i,i as f,f as m,h as d,k as u,l as p,m as l}from"./calfSystem-01849445.js"
import{c as h}from"./createInput-a507cfd0.js"
import{c as j}from"./createLabel-4aaf0b34.js"
import{g}from"./getInventoryById-275c3e5d.js"
import{h as b}from"./hideElement-3852cc2c.js"
import{i as N}from"./insertElementAfterBegin-93df6fa4.js"
import{m as E}from"./makeFolderSpan-0671f0a0.js"
import{t as k}from"./toggleForce-5151034c.js"
import"./getInventory-b274a32e.js"
import"./guildStore-899ed4eb.js"
import"./cmdExport-703b1590.js"
import"./indexAjaxJson-0f9790ea.js"
import"./insertElementBefore-5adb1609.js"
function x(t){return E(t[0],t[1])}function y(e,n){return E("0","All")+function(t){return t?E("-2","Worn"):""}(n)+E("-1","Main")+t(e).map(x).join("")}let I,v,L,M,S,A=0
function B(t){const e=l(),n=t[0].parentNode
d(e,n),d(S,e)}function F(t){const e=t[0].parentNode.parentNode
k(e,function(t){return 0!==A&&t[2]!==A}(t)||function(t){return M.checked&&"Perfect"!==t[3]}(t))}function C(){S||(S=l({className:"fshItemGrid"}),v.forEach(B),N(I.parentNode,S),b(I)),v.forEach(F)}function P(t){if(!p("fshFolder",t.target))return
const e=Number(t.target.dataset.folder)
e!==A&&(A=e,C())}function V(t){const e=L[t[1]]
e&&t.push(function(t){return t.equipped?-2:t.folder_id}(e),e.craft)}function q(){v.forEach(V)}function G(t){if(t.items&&I){L=t.items,n(4,q)
!function(t){if("crafting"===c.cmd)return void(M={checked:!1})
const e=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),m(M,"change",C),d(e,M),f(t," &ensp;"),d(t,e)}(function(t){const e=I.parentNode.parentNode.previousElementSibling.children[0]
return e.classList.add("fshCenter"),i(e,P),f(e,y(t,!0)),e}(t.folders))}}function H(t){const{tipped:e}=t.dataset
return[t,e.match(u)[2]]}function J(){I=function(){const t=o(a,s.lastElementChild)
return"crafting"===c.cmd?t[1]:t[0]}(),v=r("img",I).map(H)}function T(){e()&&(g().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-45c6d077.js.map
