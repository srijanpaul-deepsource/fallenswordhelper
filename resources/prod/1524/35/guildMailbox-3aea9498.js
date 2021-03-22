import{y as s,o as e,p as a,i as t,D as n,ax as o,t as r,g as f,R as i,w as l,B as c}from"./calfSystem-fe0ebf32.js"
import{c as m}from"./closestTable-e206f233.js"
import{d}from"./dialog-bd85dd64.js"
import"./closest-1ff01e01.js"
import"./dialogMsg-eb4e9d8f.js"
function p(s){const e=l(s)
let a={r:1,m:e}
return"Item was transferred to the guild store!"===e&&(a={r:0,m:""}),a}function g(s,e){0===e.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:e}=s
if("IMG"===e.tagName){s.preventDefault()
const a=e.parentNode.href;(t=a,o(t).then(p).then(d)).then(r(g,e))}var t
"sendLink"===e.className&&f("img",a).forEach(i)}function u(){s()||(e(a,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-3aea9498.js.map
