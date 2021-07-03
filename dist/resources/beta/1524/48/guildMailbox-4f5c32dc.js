import{y as a,o as s,p as e,i as t,D as n,aN as r,t as o,g as i,Q as l,w as c,B as f}from"./calfSystem-8af1dca2.js"
import{c as m}from"./closestTable-b818f80a.js"
import{d as p}from"./dialog-1a39a3d7.js"
import"./closest-3a475e96.js"
function d(a){const s=c(a)
let e={r:1,m:s}
return"Item was transferred to the guild store!"===s&&(e={r:0,m:""}),e}function h(a,s){0===s.r&&f('<span class="fshGreen">Taken</span>',m(a).nextElementSibling.rows[0].cells[0])}function g(a){const{target:s}=a
if("IMG"===s.tagName){a.preventDefault()
const e=s.parentNode.href;(t=e,r(t).then(d).then(p)).then(o(h,s))}var t
"sendLink"===s.className&&i("img",e).forEach(l)}function u(){a()||(s(e,g),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-4f5c32dc.js.map
