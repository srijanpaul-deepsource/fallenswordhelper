import{y as s,o as e,p as a,i as t,D as n,aM as o,t as r,g as i,Q as c,w as l,B as f}from"./calfSystem-2172498b.js"
import{c as m}from"./closestTable-143f3288.js"
import{d as p}from"./dialog-cb76c307.js"
import"./closest-0e1c7a1d.js"
import"./dialogMsg-1dee29e9.js"
function d(s){const e=l(s)
let a={r:1,m:e}
return"Item was transferred to the guild store!"===e&&(a={r:0,m:""}),a}function g(s,e){0===e.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:e}=s
if("IMG"===e.tagName){s.preventDefault()
const a=e.parentNode.href;(t=a,o(t).then(d).then(p)).then(r(g,e))}var t
"sendLink"===e.className&&i("img",a).forEach(c)}function u(){s()||(e(a,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-2cf9365d.js.map
