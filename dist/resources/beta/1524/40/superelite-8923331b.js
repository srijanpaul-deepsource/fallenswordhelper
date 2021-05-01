import{y as e,B as t,f as r,c as a,p as n,_ as s,e as c,h as o,t as i,i as f}from"./calfSystem-ab393688.js"
import{c as l}from"./createTBody-01a827bc.js"
import{c as m}from"./createTable-fc2f2ae0.js"
import{i as u,f as d}from"./isDate-497a3429.js"
import{p as h}from"./padZ-827c036e.js"
import{b as T}from"./simpleCheckbox-116c09bb.js"
import{getFshSeLog as b,doBackgroundCheck as p,oldLog as C,disableBackgroundChecks as S}from"./seLog-ca02b4c9.js"
import"./numberIsNaN-2764ce9c.js"
import"./isChecked-a9c3c9fe.js"
import"./idb-4a088c10.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){f(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(u(e))return d(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=m({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return o(t,r),e.forEach(i(j,r)),t}(e)
k=U(),o(k,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(c(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?p().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){p().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(T("enableSeTracker"),n),r(n,"change",B),a.enableSeTracker&&b().then(D)}export default L
//# sourceMappingURL=superelite-8923331b.js.map
