import{c as n}from"./createButton-bcd88351.js"
import{u as e,w as t,bn as s,$ as o,z as i,m as r,h as a,o as c,W as f,g as u,t as m,B as l}from"./calfSystem-540da563.js"
import{i as d}from"./insertTextBeforeEnd-522555ff.js"
function p(n){const e=t(n)
return e?{e:{message:e},s:!1}:{s:!0}}function h(n){return e({cmd:"profile",subcmd:"unequipitem",inventory_id:n}).then(p)}function b(n){return s({subcmd:"unequipitem",inventory_id:n})}let x
function B(n,e){e&&e.s&&l("",n.parentNode)}function g(n){const e=/inventory_id=(\d+)/.exec(n.href)[1]
e&&function(n){return o(b,h,n)}(e).then(m(B,n))}function C(){f("profile","nekidBtn")
const n=x.nextElementSibling
u("a",n).forEach(g)}function N(){const e=i("profileRightColumn")
x=i("profileCombatSetDiv")
const t=x.parentNode.nextElementSibling,s=function(){const e=r({className:"fshCenter"}),t=n({className:"fshBl fshBls",textContent:"Nekid"})
return d(e,"[ "),a(e,t),d(e," ]"),c(t,C),e}()
e.replaceChild(s,t)}export default N
//# sourceMappingURL=nekidBtn-4ea5e484.js.map
