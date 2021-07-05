import{y as e,B as t,f as r,c as a,p as n,Z as s,e as o,h as c,t as i,i as f}from"./calfSystem-2172498b.js"
import{c as l}from"./createTBody-65e7ccdb.js"
import{c as m}from"./createTable-514c5663.js"
import{i as u,f as d}from"./isDate-06316630.js"
import{p as h}from"./padZ-3a27e144.js"
import{b as T}from"./simpleCheckbox-b36336fb.js"
import{getFshSeLog as p,doBackgroundCheck as b,oldLog as C,disableBackgroundChecks as S}from"./seLog-9c06a514.js"
import"./numberIsNaN-9a364388.js"
import"./isChecked-ecfa0022.js"
import"./idb-35c610a0.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(h)}(e))}let k
function j(e,t){f(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(u(e))return d(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=m({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,r),e.forEach(i(j,r)),t}(e)
k=U(),c(k,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(o(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?b().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){b().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(T("enableSeTracker"),n),r(n,"change",B),a.enableSeTracker&&p().then(D)}export default L
//# sourceMappingURL=superelite-79638c3f.js.map
