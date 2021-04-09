import{bn as t,z as e,o as n,t as a,W as o,O as r,aL as s,B as f}from"./calfSystem-7a1cce43.js"
import{e as i}from"./errorDialog-f60f17b2.js"
import"./dialogMsg-a0c49d9a.js"
function u(e){return function(e){return t({subcmd:"removeskill",skill_id:e})}(e)}function l(t,e){e&&e.s&&f("",t.parentNode)}function c(t,e){if(!e.returnValue)return
const n=function(t){let e=t
return"IMG"===e.tagName&&(s(t),e=e.parentNode),e}(e.target)
"A"===n.tagName&&(function(t){1===t.eventPhase&&t.stopPropagation()}(e),e.preventDefault(),function(t,e){t?(o("profile","doDebuff"),u(e.href.match(/(\d+)$/)[1]).then(i).then(a(l,e))):r(e.href)}(t,n))}function m(t,o){const r=e("profileRightColumn")
r&&n(r.lastElementChild,a(c,t),o)}export default m
//# sourceMappingURL=debuff-f7bbbfa4.js.map
