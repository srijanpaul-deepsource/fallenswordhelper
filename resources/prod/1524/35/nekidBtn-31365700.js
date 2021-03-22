import{c as e}from"./createButton-f3d952bf.js"
import{u as n,w as t,bn as s,$ as o,z as i,m as r,h as f,o as a,W as c,g as u,t as m,B as d}from"./calfSystem-fe0ebf32.js"
import{i as l}from"./insertTextBeforeEnd-df8c1dd5.js"
function p(e){const n=t(e)
return n?{e:{message:n},s:!1}:{s:!0}}function h(e){return n({cmd:"profile",subcmd:"unequipitem",inventory_id:e}).then(p)}function b(e){return s({subcmd:"unequipitem",inventory_id:e})}let x
function B(e,n){n.s&&d("",e.parentNode)}function g(e){const n=/inventory_id=(\d+)/.exec(e.href)[1]
n&&function(e){return o(b,h,e)}(n).then(m(B,e))}function C(){c("profile","nekidBtn")
const e=x.nextElementSibling
u("a",e).forEach(g)}function N(){const n=i("profileRightColumn")
x=i("profileCombatSetDiv")
const t=x.parentNode.nextElementSibling,s=function(){const n=r({className:"fshCenter"}),t=e({className:"fshBl fshBls",textContent:"Nekid"})
return l(n,"[ "),f(n,t),l(n," ]"),a(t,C),n}()
n.replaceChild(s,t)}export default N
//# sourceMappingURL=nekidBtn-31365700.js.map
