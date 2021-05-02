import{y as s,o as a,p as t,i as e,D as n,aI as o,t as r,g as i,S as f,w as l,B as c}from"./calfSystem-4b6b865d.js"
import{c as m}from"./closestTable-0c49f776.js"
import{d as p}from"./dialog-aad1c6e1.js"
import"./closest-9a08f4fa.js"
import"./dialogMsg-5b0fd825.js"
function d(s){const a=l(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}function g(s,a){0===a.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href;(e=t,o(e).then(d).then(p)).then(r(g,a))}var e
"sendLink"===a.className&&i("img",t).forEach(f)}function u(){s()||(a(t,h),e(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-678b33d2.js.map
