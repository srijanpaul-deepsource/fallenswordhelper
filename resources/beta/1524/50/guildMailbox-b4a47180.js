import{y as s,o as a,p as t,i as e,D as n,aN as r,t as o,g as i,Q as l,w as c,B as f}from"./calfSystem-617f9a5d.js"
import{c as m}from"./closestTable-b12094ca.js"
import{d as p}from"./dialog-a0295936.js"
import"./closest-06418423.js"
function d(s){const a=c(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}function h(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function g(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href;(e=t,r(e).then(d).then(p)).then(o(h,a))}var e
"sendLink"===a.className&&i("img",t).forEach(l)}function u(){s()||(a(t,g),e(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-b4a47180.js.map
