import{bu as t,z as e,o as n,t as o,S as r,N as a,aY as s,B as i}from"./calfSystem-db2edbef.js"
import{e as f}from"./errorDialog-1238d963.js"
import"./dialogMsg-edbc265b.js"
function u(e){return function(e){return t({subcmd:"removeskill",skill_id:e})}(e)}function l(t,e){e&&e.s&&i("",t.parentNode)}function c(t,e){if(!e.returnValue)return
const n=function(t){let e=t
return"IMG"===e.tagName&&(s(t),e=e.parentNode),e}(e.target)
"A"===n.tagName&&(function(t){1===t.eventPhase&&t.stopPropagation()}(e),e.preventDefault(),function(t,e){t?(r("profile","doDebuff"),u(e.href.match(/(\d+)$/)[1]).then(f).then(o(l,e))):a(e.href)}(t,n))}function d(t,r){const a=e("profileRightColumn")
a&&n(a.lastElementChild,o(c,t),r)}export default d
//# sourceMappingURL=debuff-6b6c01ae.js.map
