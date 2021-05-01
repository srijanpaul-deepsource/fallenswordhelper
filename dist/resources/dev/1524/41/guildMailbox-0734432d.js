import{y as s,o as e,p as a,i as t,D as n,aI as o,t as r,g as i,S as l,w as c,B as m}from"./calfSystem-817ceb25.js"
import{c as f}from"./closestTable-c2864887.js"
import{d as p}from"./dialog-1254e587.js"
import"./closest-865e9de8.js"
import"./dialogMsg-0570b3b3.js"
function d(s){const e=c(s)
let a={r:1,m:e}
return"Item was transferred to the guild store!"===e&&(a={r:0,m:""}),a}function g(s,e){0===e.r&&m('<span class="fshGreen">Taken</span>',f(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:e}=s
if("IMG"===e.tagName){s.preventDefault()
const a=e.parentNode.href;(t=a,o(t).then(d).then(p)).then(r(g,e))}var t
"sendLink"===e.className&&i("img",a).forEach(l)}function u(){s()||(e(a,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-0734432d.js.map
