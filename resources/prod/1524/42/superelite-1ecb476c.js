import{y as e,B as t,f as r,c as a,p as n,_ as s,e as c,h as o,t as f,i}from"./calfSystem-15b00143.js"
import{c as l}from"./createTBody-27cf31f7.js"
import{c as d}from"./createTable-c2551f6f.js"
import{i as m,f as u}from"./isDate-0659c8ad.js"
import{p as h}from"./padZ-babdd575.js"
import{b as T}from"./simpleCheckbox-7ef91a41.js"
import{getFshSeLog as b,doBackgroundCheck as p,oldLog as C,disableBackgroundChecks as S}from"./seLog-d7d1b797.js"
import"./numberIsNaN-484c0124.js"
import"./isChecked-cf65e779.js"
import"./idb-1c9eb1ac.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){i(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return o(t,r),e.forEach(f(j,r)),t}(e)
k=U(),o(k,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(c(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?p().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){p().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(T("enableSeTracker"),n),r(n,"change",B),a.enableSeTracker&&b().then(D)}export default L
//# sourceMappingURL=superelite-1ecb476c.js.map
