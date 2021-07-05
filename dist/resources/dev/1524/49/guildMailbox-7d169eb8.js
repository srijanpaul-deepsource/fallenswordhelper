import{y as s,o as a,p as e,i as t,D as n,aO as r,t as o,g as c,R as i,w as l,B as f}from"./calfSystem-9ab64478.js"
import{c as m}from"./closestTable-b7a11561.js"
import{d as p}from"./dialog-f1cd510f.js"
import"./closest-0e1c7a1d.js"
function d(s){const a=l(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function h(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function g(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,r(t).then(d).then(p)).then(o(h,a))}var t
"sendLink"===a.className&&c("img",e).forEach(i)}function u(){s()||(a(e,g),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-7d169eb8.js.map
