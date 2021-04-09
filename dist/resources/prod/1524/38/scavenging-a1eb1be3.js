import{c as t}from"./closestTable-7b41125a.js"
import{c as n}from"./createSpan-e8d911bd.js"
import{z as e,h as o,f as s,t as c,B as r,C as a,_ as i,bs as u,ay as f,m,p as l,e as d}from"./calfSystem-7a1cce43.js"
import{i as b}from"./intValue-ba9b9e5a.js"
import{n as p}from"./numberIsNaN-30cde299.js"
import{a as g}from"./alpha-f430aa22.js"
import"./closest-4ebdb6d3.js"
import"./toLowerCase-b0c4634d.js"
function h(t,n,e){r("",t)
const o=Number(e.value)
p(o)||0===o||function(t,n,e){const o=b(a(n)),s=Math.floor(o/e).toString()
r(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(r){!function(n){t(n).removeAttribute("width")}(r),function(t,n,e){const o=c($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(r),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return g(t[0],n[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function y(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${d(n).sort(S).map(_).join("")}`}function M(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return y(n)}(e)}return t}function q(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),r(M(),(v||(v=m(),o(l,v)),r("",v),v))}}function w(){!function(){const t=sendRequest
f(t)&&(sendRequest=q(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default w
//# sourceMappingURL=scavenging-a1eb1be3.js.map
