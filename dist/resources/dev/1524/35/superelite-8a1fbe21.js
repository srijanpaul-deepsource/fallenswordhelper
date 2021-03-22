import{y as e,B as t,f as r,c as a,p as s,a0 as n,e as o,h as c,t as i,i as f}from"./calfSystem-186455ab.js"
import{c as l}from"./createTBody-26a52307.js"
import{c as m}from"./createTable-4ac162e1.js"
import{i as d,f as u}from"./isDate-37768d15.js"
import{p as h}from"./padZ-3a7e6015.js"
import{b as p}from"./simpleCheckbox-5f4d89bf.js"
import{getFshSeLog as T,doBackgroundCheck as b,oldLog as C,disableBackgroundChecks as S}from"./seLog-69607833.js"
import"./numberIsNaN-1e8b4508.js"
import"./isChecked-36c474a7.js"
import"./dataRows-f1e5d572.js"
import"./idb-97f66b86.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let j
function k(e,t){f(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(d(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=s.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=m({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,r),e.forEach(i(k,r)),t}(e)
j=U(),c(j,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(o(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,n("enableSeTracker",a.enableSeTracker),a.enableSeTracker?b().finally(w):(j&&(j.parentNode.remove(),j=!1),S()))}function D(){b().finally(w)}function L(){if(e())return
let s=U()
s.height=20,s=U(),s.className="fshCenter",t(p("enableSeTracker"),s),r(s,"change",B),a.enableSeTracker&&T().then(D)}export default L
//# sourceMappingURL=superelite-8a1fbe21.js.map
