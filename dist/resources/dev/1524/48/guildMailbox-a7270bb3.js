import{y as s,o as e,p as a,i as t,D as n,aO as r,t as o,g as c,R as i,w as l,B as f}from"./calfSystem-01849445.js"
import{c as m}from"./closestTable-9e76cce0.js"
import{d as p}from"./dialog-6e4d0a83.js"
import"./closest-3a475e96.js"
function d(s){const e=l(s)
let a={r:1,m:e}
return"Item was transferred to the guild store!"===e&&(a={r:0,m:""}),a}function h(s,e){0===e.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function g(s){const{target:e}=s
if("IMG"===e.tagName){s.preventDefault()
const a=e.parentNode.href;(t=a,r(t).then(d).then(p)).then(o(h,e))}var t
"sendLink"===e.className&&c("img",a).forEach(i)}function u(){s()||(e(a,g),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-a7270bb3.js.map
