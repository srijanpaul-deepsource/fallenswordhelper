import{y as s,o as a,p as e,i as t,D as n,aN as o,t as r,g as i,R as c,w as l,B as f}from"./calfSystem-bfc1f6c0.js"
import{c as m}from"./closestTable-7130e192.js"
import{d as p}from"./dialog-a4dfa31d.js"
import"./closest-4542e515.js"
import"./dialogMsg-edbc265b.js"
function d(s){const a=l(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(c)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-fade5b69.js.map
