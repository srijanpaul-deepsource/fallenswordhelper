import{bn as e,z as t,o as n,t as o,W as r,O as a,aL as f,B as s}from"./calfSystem-fe0ebf32.js"
import{e as i}from"./errorDialog-f7744f6f.js"
import"./dialogMsg-eb4e9d8f.js"
function u(t){return function(t){return e({subcmd:"removeskill",skill_id:t})}(t)}function l(e,t){t&&t.s&&s("",e.parentNode)}function c(e,t){if(!t.returnValue)return
const n=function(e){let t=e
return"IMG"===t.tagName&&(f(e),t=t.parentNode),t}(t.target)
"A"===n.tagName&&(function(e){1===e.eventPhase&&e.stopPropagation()}(t),t.preventDefault(),function(e,t){e?(r("profile","doDebuff"),u(t.href.match(/(\d+)$/)[1]).then(i).then(o(l,t))):a(t.href)}(e,n))}function m(e,r){const a=t("profileRightColumn")
a&&n(a.lastElementChild,o(c,e),r)}export default m
//# sourceMappingURL=debuff-f0859659.js.map
