import{y as s,o as a,p as e,i as t,D as n,aE as o,t as r,g as i,R as l,w as c,B as m}from"./calfSystem-540da563.js"
import{c as f}from"./closestTable-d049606a.js"
import{d as p}from"./dialog-17ce66e6.js"
import"./closest-abbeba17.js"
import"./dialogMsg-3d2031b8.js"
function d(s){const a=c(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&m('<span class="fshGreen">Taken</span>',f(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(l)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-57f79ff6.js.map
