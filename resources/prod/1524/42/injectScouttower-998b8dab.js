import{c as t}from"./createAnchor-f58b5ccd.js"
import{d as n}from"./dataRows-89a16eef.js"
import{c as e}from"./createTBody-27cf31f7.js"
import{c as o}from"./createTable-c2551f6f.js"
import{h as s,i as r,e as c,a7 as a,N as l,o as i,l as f,aH as u,C as m,y as d,b as h,p,d as b,t as T,aI as g,B as j}from"./calfSystem-15b00143.js"
import{g as w,a as C}from"./getTitanString-94f745c9.js"
import{g as N}from"./getTitle-66f54e5d.js"
import{o as $}from"./openQuickBuffByName-62891ff5.js"
import{p as B}from"./parseDateAsTimestamp-41bbfb83.js"
import{r as S}from"./roundToString-334a34af.js"
import{g as x,s as E}from"./idb-1c9eb1ac.js"
import"./fshOpen-cce15559.js"
import"./numberIsNaN-484c0124.js"
function _(t){return[t[0],t[1].cooldownText,t[1].coolTime,t[1].seen]}function y(t){return t[2]>a}function k(t,n){return t[2]-n[2]}function v(t){return`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${t[1]}</td><td class="fshCenter">${t[3]}</td></tr>`}function I(t){const n=o({className:"fshTTracker"}),a=e({innerHTML:'<tr><td class="header fshCenter">Titan</td><td class="header fshCenter">Cooldown</td><td class="header fshCenter">Visible</td></tr>'})
return s(n,a),r(a,function(t){return c(t).map(_).filter(y).sort(k).map(v).join("")}(t)),n}function R(t){return m(t.cells[0].children[0].children[0])}function A(t){const{target:e}=t
u("[b]",e)&&function(t){t.previousElementSibling&&$(m(t.previousElementSibling))}(e),u("all",e)&&function(t){const e=t.parentNode.parentNode.parentNode.parentNode,o=n(e.rows,3,0).map(R)
$(o.join())}(e)}function H(t){f("fshBl",t.target)&&A(t)}function O(t){r(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function X(t){n(t.rows,3,0).forEach(O),r(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function D(t,n){return t.rows.length>1&&n>1}function L(t){t.length>2&&function(t){l(t).filter(D).forEach(X),i(t[1],H)}(t)}function M(t){return N(t.cells[0].children[0])}function Q(t,n){t[n[0]]||n[1].coolTime<=a||(t[n[0]]={cooldownText:n[1].cooldownText,coolTime:n[1].coolTime,seen:"no"})}function U(t,n){const e=n.split("/")
var o,s,c
r(t.cells[3],(o=Number(m(t.cells[3])),s=Number(e[0]),c=Number(e[1]),`<br><span class="fshBlue"> (${S(w(c-s,o),2)}% Current <br>${S(100*o/c,2)}% Total<br>${C(o,c,s)})`))}function V(n,e){!function(t){const n=m(t.cells[2]);-1===n.indexOf("-")&&U(t,n)}(e),function(t,n){const e=M(n).replace(" (Titan)","")
if(!t[e]){const o=m(n.nextElementSibling.cells[0])
let s=0
o.includes("until")&&(s=B(o.replace("Cooldown until: ",""))),t[e]={cooldownText:o,coolTime:s,seen:"yes"}}}(n,e),function(n){const e=encodeURIComponent(M(n)),o=n.cells[0].children[0],r=t({href:`${g}creatures&search_name=${e}`,target:"_blank"})
s(r,o),s(n.cells[0],r)
const c=n.cells[1],a=m(c)
j(`<a href="${g}realms&search_name=${a}" target="_blank">${a}</a>`,c)}(e)}function q(t){const e=h(b,p)
L(e)
const o={}
!function(t,e){n(t.rows,4,0).forEach(T(V,e))}(e[1],o),function(t,n){t&&c(t).forEach(T(Q,n))}(t,o),function(t,n){if(t.rows.length>5){const e=I(n),o=t.insertRow(5).insertCell(-1)
o.colSpan=3,s(o,e)}}(e[0],o),E("fsh_titans",o)}function z(){d()||x("fsh_titans").then(q)}export default z
//# sourceMappingURL=injectScouttower-998b8dab.js.map
