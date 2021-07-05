import{ar as o,t as n,o as t,a4 as e,z as r,f as a,Z as c,aN as s}from"./calfSystem-2172498b.js"
import{h as f}from"./hideElement-3021ab25.js"
import{t as i}from"./toggleForce-d61da182.js"
const u=[]
let h,d
function w(o){f(o.row)}function p(o){o.rows.forEach(w),o.open=!1}function m(o){o.open&&p(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function x(o){o.open||E(o)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%d==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function N(o){h&&function(o){const n=I(o.target)
if(!n)return
const t=n.rowIndex/d,e=u[t]
!1===e.open?(l(),E(e)):p(e)}(o)}function T(o,n,t,r){0===n&&(t.header=o,function(o){h&&o.classList.add("fshPoint")}(o),function(o,n){s(o)&&o(n)}(r.extraFn,o)),r.articleTest(n)&&(t.rows[n]=e(t[n],{}),t.rows[n].row=o,function(o,n){h?(f(o),n.open=!1):n.open=!0}(o,t))}function b(o,n){const t=n.rowIndex%d,r=(n.rowIndex-t)/d
u[r]=e(u[r],{})
const a=u[r]
a.rows=a.rows||[],T(n,t,a,o)}function j(o){o.header.classList.toggle("fshPoint")}function L(o){h=!h,c(o,h),h?l():u.forEach(x),u.forEach(j)}function F(e){d=e.headInd,function(o){const t=r(o)
h=t.checked,a(r(o),"change",n(L,o))}(e.prefName),o(e.theTable.rows).forEach(n(b,e)),t(e.theTable,N)}export{F as c}
//# sourceMappingURL=collapse-14541d66.js.map
