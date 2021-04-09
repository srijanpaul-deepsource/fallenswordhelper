import{N as o,t as n,o as t,a5 as e,z as c,f as r,_ as f,aA as a}from"./calfSystem-71efcdd9.js"
import{h as s}from"./hideElement-9b8f5190.js"
import{t as i}from"./toggleForce-6fbd75e0.js"
const u=[]
let d,h
function w(o){s(o.row)}function p(o){o.rows.forEach(w),o.open=!1}function m(o){o.open&&p(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function x(o){o.open||E(o)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%h==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function N(o){d&&function(o){const n=I(o.target)
if(!n)return
const t=n.rowIndex/h,e=u[t]
!1===e.open?(l(),E(e)):p(e)}(o)}function T(o,n,t,c){0===n&&(t.header=o,function(o){d&&o.classList.add("fshPoint")}(o),function(o,n){a(o)&&o(n)}(c.extraFn,o)),c.articleTest(n)&&(t.rows[n]=e(t[n],{}),t.rows[n].row=o,function(o,n){d?(s(o),n.open=!1):n.open=!0}(o,t))}function b(o,n){const t=n.rowIndex%h,c=(n.rowIndex-t)/h
u[c]=e(u[c],{})
const r=u[c]
r.rows=r.rows||[],T(n,t,r,o)}function j(o){o.header.classList.toggle("fshPoint")}function L(o){d=!d,f(o,d),d?l():u.forEach(x),u.forEach(j)}function A(e){h=e.headInd,function(o){const t=c(o)
d=t.checked,r(c(o),"change",n(L,o))}(e.prefName),o(e.theTable.rows).forEach(n(b,e)),t(e.theTable,N)}export{A as c}
//# sourceMappingURL=collapse-26c3d166.js.map
