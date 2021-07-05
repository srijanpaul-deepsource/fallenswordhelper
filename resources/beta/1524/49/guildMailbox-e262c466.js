import{y as s,o as a,p as e,i as t,D as n,aN as r,t as o,g as c,Q as f,w as i,B as l}from"./calfSystem-42f137cb.js"
import{c as m}from"./closestTable-4a848789.js"
import{d as p}from"./dialog-4ff9c696.js"
import"./closest-0e1c7a1d.js"
function d(s){const a=i(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function h(s,a){0===a.r&&l('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function g(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,r(t).then(d).then(p)).then(o(h,a))}var t
"sendLink"===a.className&&c("img",e).forEach(f)}function u(){s()||(a(e,g),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-e262c466.js.map
