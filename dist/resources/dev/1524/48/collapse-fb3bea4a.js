import{at as o,t as n,o as t,a6 as c,z as e,f as r,a0 as a,aP as s}from"./calfSystem-01849445.js"
import{h as f}from"./hideElement-3852cc2c.js"
import{t as i}from"./toggleForce-5151034c.js"
const u=[]
let h,d
function w(o){f(o.row)}function p(o){o.rows.forEach(w),o.open=!1}function m(o){o.open&&p(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function x(o){o.open||E(o)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%d==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function T(o){h&&function(o){const n=I(o.target)
if(!n)return
const t=n.rowIndex/d,c=u[t]
!1===c.open?(l(),E(c)):p(c)}(o)}function N(o,n,t,e){0===n&&(t.header=o,function(o){h&&o.classList.add("fshPoint")}(o),function(o,n){s(o)&&o(n)}(e.extraFn,o)),e.articleTest(n)&&(t.rows[n]=c(t[n],{}),t.rows[n].row=o,function(o,n){h?(f(o),n.open=!1):n.open=!0}(o,t))}function j(o,n){const t=n.rowIndex%d,e=(n.rowIndex-t)/d
u[e]=c(u[e],{})
const r=u[e]
r.rows=r.rows||[],N(n,t,r,o)}function L(o){o.header.classList.toggle("fshPoint")}function P(o){h=!h,a(o,h),h?l():u.forEach(x),u.forEach(L)}function b(c){d=c.headInd,function(o){const t=e(o)
h=t.checked,r(e(o),"change",n(P,o))}(c.prefName),o(c.theTable.rows).forEach(n(j,c)),t(c.theTable,T)}export{b as c}
//# sourceMappingURL=collapse-fb3bea4a.js.map
