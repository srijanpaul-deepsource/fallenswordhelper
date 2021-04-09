import{y as e,B as t,f as r,c as a,p as n,_ as s,e as c,h as o,t as i,i as f}from"./calfSystem-7a1cce43.js"
import{c as l}from"./createTBody-e7b06bb7.js"
import{c as d}from"./createTable-cbb1ed54.js"
import{i as m,f as u}from"./isDate-d24d25bc.js"
import{p as b}from"./padZ-8b68b081.js"
import{b as h}from"./simpleCheckbox-65181dd3.js"
import{getFshSeLog as T,doBackgroundCheck as p,oldLog as C,disableBackgroundChecks as S}from"./seLog-49d51b53.js"
import"./numberIsNaN-30cde299.js"
import"./isChecked-16fc7684.js"
import"./idb-c572d898.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(b)}(e))}let k
function j(e,t){f(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=n.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return o(t,r),e.forEach(i(j,r)),t}(e)
k=U(),o(k,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(c(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,s("enableSeTracker",a.enableSeTracker),a.enableSeTracker?p().finally(w):(k&&(k.parentNode.remove(),k=!1),S()))}function D(){p().finally(w)}function L(){if(e())return
let n=U()
n.height=20,n=U(),n.className="fshCenter",t(h("enableSeTracker"),n),r(n,"change",B),a.enableSeTracker&&T().then(D)}export default L
//# sourceMappingURL=superelite-818bc9c3.js.map
