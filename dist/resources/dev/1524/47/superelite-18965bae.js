import{y as e,B as t,f as a,c as r,p as n,_ as s,e as o,h as c,t as f,i}from"./calfSystem-bfc1f6c0.js"
import{c as l}from"./createTBody-6a96517d.js"
import{c as d}from"./createTable-57eae8d3.js"
import{i as m,f as u}from"./isDate-3cdbefa8.js"
import{p as h}from"./padZ-65ad9136.js"
import{b as T}from"./simpleCheckbox-1757ba2a.js"
import{getFshSeLog as p,doBackgroundCheck as b,oldLog as C,disableBackgroundChecks as S}from"./seLog-8af6fb4a.js"
import"./numberIsNaN-2f104aa2.js"
import"./isChecked-5c7617f4.js"
import"./idb-d8a4a427.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){i(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=d({className:"fshTTracker"}),a=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,a),e.forEach(f(j,a)),t}(e)
k=U(),c(k,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(o(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(r.enableSeTracker=!r.enableSeTracker,s("enableSeTracker",r.enableSeTracker),r.enableSeTracker?b().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){b().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(T("enableSeTracker"),n),a(n,"change",B),r.enableSeTracker&&p().then(D)}export default L
//# sourceMappingURL=superelite-18965bae.js.map
