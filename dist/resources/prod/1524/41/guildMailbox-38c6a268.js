import{y as s,o as e,p as a,i as t,D as n,aF as o,t as r,g as i,R as l,w as f,B as c}from"./calfSystem-030d7057.js"
import{c as m}from"./closestTable-ffd1999e.js"
import{d as p}from"./dialog-1254e587.js"
import"./closest-865e9de8.js"
import"./dialogMsg-0570b3b3.js"
function d(s){const e=f(s)
let a={r:1,m:e}
return"Item was transferred to the guild store!"===e&&(a={r:0,m:""}),a}function g(s,e){0===e.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:e}=s
if("IMG"===e.tagName){s.preventDefault()
const a=e.parentNode.href;(t=a,o(t).then(d).then(p)).then(r(g,e))}var t
"sendLink"===e.className&&i("img",a).forEach(l)}function u(){s()||(e(a,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-38c6a268.js.map
