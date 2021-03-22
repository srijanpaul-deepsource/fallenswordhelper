import{c as t}from"./closestTable-09114f0e.js"
import{c as n}from"./createSpan-8d9e047a.js"
import{z as e,h as o,f as s,t as r,B as c,C as a,_ as i,bv as u,aA as f,m,p as l,e as p}from"./calfSystem-03050396.js"
import{i as d}from"./intValue-1ce02c09.js"
import{n as g}from"./numberIsNaN-1e8b4508.js"
import{a as b}from"./alpha-5123f505.js"
import"./closest-1ff01e01.js"
import"./toLowerCase-5dc9e42d.js"
function h(t,n,e){c("",t)
const o=Number(e.value)
g(o)||0===o||function(t,n,e){const o=d(a(n)),s=Math.floor(o/e).toString()
c(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(c){!function(n){t(n).removeAttribute("width")}(c),function(t,n,e){const o=r($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(c),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return b(t[0],n[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${p(n).sort(S).map(_).join("")}`}function q(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return M(n)}(e)}return t}function w(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),c(q(),(v||(v=m(),o(l,v)),c("",v),v))}}function x(){!function(){const t=sendRequest
f(t)&&(sendRequest=w(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default x
//# sourceMappingURL=scavenging-d33edd74.js.map
