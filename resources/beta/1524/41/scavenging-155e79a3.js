import{c as t}from"./closestTable-a912937d.js"
import{c as n}from"./createSpan-f508c88b.js"
import{z as e,h as o,f as s,t as c,B as r,C as a,_ as i,bw as u,aI as f,m,p as d,e as l}from"./calfSystem-587dd8d3.js"
import{i as p}from"./intValue-af3aed3f.js"
import{n as b}from"./numberIsNaN-9d4c441b.js"
import{a as g}from"./alpha-32b3f9dc.js"
import"./closest-865e9de8.js"
import"./toLowerCase-39a6c297.js"
function h(t,n,e){r("",t)
const o=Number(e.value)
b(o)||0===o||function(t,n,e){const o=p(a(n)),s=Math.floor(o/e).toString()
r(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(r){!function(n){t(n).removeAttribute("width")}(r),function(t,n,e){const o=c($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(r),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return g(t[0],n[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function w(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${l(n).sort(S).map(_).join("")}`}function I(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
return n?w(n):""}(e)}return t}function M(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),r(I(),(v||(v=m(),o(d,v)),r("",v),v))}}function q(){!function(){const t=sendRequest
f(t)&&(sendRequest=M(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default q
//# sourceMappingURL=scavenging-155e79a3.js.map
