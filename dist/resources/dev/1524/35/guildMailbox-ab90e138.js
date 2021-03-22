import{y as s,o as a,p as e,i as t,D as n,aA as o,t as r,g as i,S as f,w as l,B as c}from"./calfSystem-186455ab.js"
import{c as m}from"./closestTable-24eadf35.js"
import{d}from"./dialog-bd85dd64.js"
import"./closest-1ff01e01.js"
import"./dialogMsg-eb4e9d8f.js"
function p(s){const a=l(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(p).then(d)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(f)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-ab90e138.js.map
