import{bs as t,z as e,o as n,t as o,S as a,N as r,aW as s,B as i}from"./calfSystem-a2fd9017.js"
import{e as f}from"./errorDialog-1238d963.js"
import"./dialogMsg-edbc265b.js"
function u(e){return function(e){return t({subcmd:"removeskill",skill_id:e})}(e)}function l(t,e){e&&e.s&&i("",t.parentNode)}function c(t,e){if(!e.returnValue)return
const n=function(t){let e=t
return"IMG"===e.tagName&&(s(t),e=e.parentNode),e}(e.target)
"A"===n.tagName&&(function(t){1===t.eventPhase&&t.stopPropagation()}(e),e.preventDefault(),function(t,e){t?(a("profile","doDebuff"),u(e.href.match(/(\d+)$/)[1]).then(f).then(o(l,e))):r(e.href)}(t,n))}function m(t,a){const r=e("profileRightColumn")
r&&n(r.lastElementChild,o(c,t),a)}export default m
//# sourceMappingURL=debuff-3e0aaca8.js.map
