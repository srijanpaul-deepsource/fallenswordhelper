import{y as s,o as a,p as e,i as t,D as n,ax as o,t as r,g as c,R as i,w as l,B as f}from"./calfSystem-7a1cce43.js"
import{c as m}from"./closestTable-7b41125a.js"
import{d as p}from"./dialog-e89b7ecf.js"
import"./closest-4ebdb6d3.js"
import"./dialogMsg-a0c49d9a.js"
function d(s){const a=l(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&c("img",e).forEach(i)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-63cd3810.js.map
