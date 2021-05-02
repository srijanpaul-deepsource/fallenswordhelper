import{c as t}from"./closestTable-0c49f776.js"
import{c as n}from"./createSpan-dab32f7a.js"
import{z as o,h as e,f as s,t as a,B as r,C as c,a0 as i,bx as u,aJ as f,m,p as l,e as d}from"./calfSystem-4b6b865d.js"
import{i as p}from"./intValue-9eb8a210.js"
import{n as b}from"./numberIsNaN-484c0124.js"
import{a as g}from"./alpha-7993f8ac.js"
import"./closest-9a08f4fa.js"
import"./toLowerCase-8d8df902.js"
function h(t,n,o){r("",t)
const e=Number(o.value)
b(e)||0===e||function(t,n,o){const e=p(c(n)),s=Math.floor(e/o).toString()
r(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,e)}function $(t,n,o){t&&h(t,n,o)}function j(r){!function(n){t(n).removeAttribute("width")}(r),function(t,n,o){const e=a($,t,n,o)
e(),s(o,"keyup",e)}(function(t){const o=n()
return e(t.parentNode,o),o}(r),o("statbar-gold"),o("gold"))}let v
function N(t,n){const o=n.match(/>([^<]+)</)[1]
return t[o]=(t[o]||0)+1,t}function S(t,n){return g(t[0],n[0])}function x(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${d(n).sort(S).map(x).join("")}`}function _(){let t=""
const n=o("scavenge_results")
if(n){const o=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(o),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(o),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
return n?M(n):""}(o)}return t}function q(t){return function(n,o,s){t(n,o,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${o}`),r(_(),(v||(v=m(),e(l,v)),r("",v),v))}}function w(){!function(){const t=sendRequest
f(t)&&(sendRequest=q(t))}(),function(){const t=o("multiplier_count")
t&&j(t)}()}export default w
//# sourceMappingURL=scavenging-48b9e0bc.js.map
