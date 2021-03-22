import{y as s,o as e,p as a,i as t,D as n,az as o,t as r,g as i,R as f,w as l,B as c}from"./calfSystem-03050396.js"
import{c as m}from"./closestTable-09114f0e.js"
import{d}from"./dialog-bd85dd64.js"
import"./closest-1ff01e01.js"
import"./dialogMsg-eb4e9d8f.js"
function p(s){const e=l(s)
let a={r:1,m:e}
return"Item was transferred to the guild store!"===e&&(a={r:0,m:""}),a}function g(s,e){0===e.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:e}=s
if("IMG"===e.tagName){s.preventDefault()
const a=e.parentNode.href;(t=a,o(t).then(p).then(d)).then(r(g,e))}var t
"sendLink"===e.className&&i("img",a).forEach(f)}function u(){s()||(e(a,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-a85b9c77.js.map
