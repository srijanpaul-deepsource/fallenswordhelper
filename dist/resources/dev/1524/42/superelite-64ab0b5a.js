import{y as e,B as t,f as r,c as a,p as n,a0 as s,e as o,h as c,t as i,i as f}from"./calfSystem-4b6b865d.js"
import{c as l}from"./createTBody-74abfa81.js"
import{c as d}from"./createTable-69c7bb68.js"
import{i as m,f as u}from"./isDate-0659c8ad.js"
import{p as b}from"./padZ-babdd575.js"
import{b as h}from"./simpleCheckbox-90be58c0.js"
import{getFshSeLog as T,doBackgroundCheck as p,oldLog as C,disableBackgroundChecks as S}from"./seLog-706c6aa8.js"
import"./numberIsNaN-484c0124.js"
import"./isChecked-cf65e779.js"
import"./idb-a46a6973.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(b)}(e))}let k
function j(e,t){f(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,r),e.forEach(i(j,r)),t}(e)
k=U(),c(k,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(o(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?p().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){p().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(h("enableSeTracker"),n),r(n,"change",B),a.enableSeTracker&&T().then(D)}export default L
//# sourceMappingURL=superelite-64ab0b5a.js.map
