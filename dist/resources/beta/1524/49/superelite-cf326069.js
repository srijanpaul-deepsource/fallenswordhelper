import{y as e,B as t,f as r,c as a,p as n,_ as s,e as c,h as o,t as i,i as f}from"./calfSystem-42f137cb.js"
import{c as l}from"./createTBody-0dd72dc5.js"
import{c as d}from"./createTable-05ee583d.js"
import{i as m,f as u}from"./isDate-06316630.js"
import{p as h}from"./padZ-3a27e144.js"
import{b as T}from"./simpleCheckbox-4ae878ed.js"
import{getFshSeLog as p,doBackgroundCheck as C,oldLog as b,disableBackgroundChecks as S}from"./seLog-c5bf9c3d.js"
import"./numberIsNaN-9a364388.js"
import"./isChecked-ecfa0022.js"
import"./idb-6beadc2c.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){f(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return o(t,r),e.forEach(i(j,r)),t}(e)
k=U(),o(k,t)}function N(e,t){return e[1]-t[1]}function w(){b&&b.se&&y(c(b.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?C().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){C().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(T("enableSeTracker"),n),r(n,"change",B),a.enableSeTracker&&p().then(D)}export default L
//# sourceMappingURL=superelite-cf326069.js.map
