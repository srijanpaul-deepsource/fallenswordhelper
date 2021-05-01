import{y as s,o as a,p as e,i as t,D as n,aH as o,t as r,g as i,R as l,w as c,B as m}from"./calfSystem-587dd8d3.js"
import{c as d}from"./closestTable-a912937d.js"
import{d as f}from"./dialog-1254e587.js"
import"./closest-865e9de8.js"
import"./dialogMsg-0570b3b3.js"
function p(s){const a=c(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&m('<span class="fshGreen">Taken</span>',d(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(p).then(f)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(l)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-0ad2b210.js.map
