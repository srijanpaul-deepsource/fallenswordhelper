import{y as s,o as a,p as e,i as t,D as n,aA as o,t as r,g as i,S as c,w as l,B as f}from"./calfSystem-d56087e1.js"
import{c as m}from"./closestTable-c8a39f92.js"
import{d}from"./dialog-e89b7ecf.js"
import"./closest-4ebdb6d3.js"
import"./dialogMsg-a0c49d9a.js"
function p(s){const a=l(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(p).then(d)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(c)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-57c129d8.js.map
