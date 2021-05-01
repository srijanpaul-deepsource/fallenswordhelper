import{y as s,o as e,p as a,i as t,D as n,aH as o,t as r,g as i,S as c,w as l,B as m}from"./calfSystem-c464cb1d.js"
import{c as f}from"./closestTable-e6163be9.js"
import{d as p}from"./dialog-17ce66e6.js"
import"./closest-abbeba17.js"
import"./dialogMsg-3d2031b8.js"
function d(s){const e=l(s)
let a={r:1,m:e}
return"Item was transferred to the guild store!"===e&&(a={r:0,m:""}),a}function g(s,e){0===e.r&&m('<span class="fshGreen">Taken</span>',f(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:e}=s
if("IMG"===e.tagName){s.preventDefault()
const a=e.parentNode.href;(t=a,o(t).then(d).then(p)).then(r(g,e))}var t
"sendLink"===e.className&&i("img",a).forEach(c)}function b(){s()||(e(a,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default b
//# sourceMappingURL=guildMailbox-20e394d9.js.map
