import{y as e,B as t,f as r,c as a,p as s,_ as n,e as o,h as c,t as i,i as f}from"./calfSystem-03050396.js"
import{c as l}from"./createTBody-1db68872.js"
import{c as d}from"./createTable-fc21d3c3.js"
import{i as m,f as u}from"./isDate-37768d15.js"
import{p as b}from"./padZ-3a7e6015.js"
import{b as h}from"./simpleCheckbox-36bbb034.js"
import{getFshSeLog as p,doBackgroundCheck as T,oldLog as C,disableBackgroundChecks as S}from"./seLog-cd4ec6e9.js"
import"./numberIsNaN-1e8b4508.js"
import"./isChecked-36c474a7.js"
import"./dataRows-737117b7.js"
import"./idb-02fb3250.js"
function g(e){return[e.getUTCFullYear().toString()].concat(function(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(b)}(e))}let j
function k(e,t){f(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${function(e){if(m(e))return u(g(e))}(new Date(1e3*t[1]))}</td></tr>`)}function U(){const e=s.lastElementChild.insertRow(-1).insertCell(-1)
return e.colSpan=3,e}function y(e){const t=function(e){const t=d({className:"fshTTracker"}),r=l({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'})
return c(t,r),e.forEach(i(k,r)),t}(e)
j=U(),c(j,t)}function N(e,t){return e[1]-t[1]}function w(){C&&C.se&&y(o(C.se).sort(N))}function B(e){"enableSeTracker"===e.target.id&&(a.enableSeTracker=!a.enableSeTracker,n("enableSeTracker",a.enableSeTracker),a.enableSeTracker?T().finally(w):(j&&(j.parentNode.remove(),j=!1),S()))}function D(){T().finally(w)}function L(){if(e())return
let s=U()
s.height=20,s=U(),s.className="fshCenter",t(h("enableSeTracker"),s),r(s,"change",B),a.enableSeTracker&&p().then(D)}export default L
//# sourceMappingURL=superelite-286879b4.js.map
