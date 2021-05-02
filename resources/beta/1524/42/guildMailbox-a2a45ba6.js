import{y as s,o as a,p as e,i as t,D as n,aH as o,t as r,g as f,R as i,w as l,B as c}from"./calfSystem-e76f1a7d.js"
import{c as m}from"./closestTable-50b48b6f.js"
import{d as p}from"./dialog-aad1c6e1.js"
import"./closest-9a08f4fa.js"
import"./dialogMsg-5b0fd825.js"
function d(s){const a=l(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&f("img",e).forEach(i)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-a2a45ba6.js.map
