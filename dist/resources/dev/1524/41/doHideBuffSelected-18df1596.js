import{g as e}from"./getArrayByClassName-fde4b553.js"
import{N as i,t as n,c as t,ad as a,K as s,z as o,y as c,o as f,l,H as d}from"./calfSystem-817ceb25.js"
import{h as u}from"./hideElement-9426b096.js"
import{o as r}from"./openQuickBuffByName-82ae0d1d.js"
import{s as m}from"./selfIdIs-8ecf14b7.js"
function g(i,n){e("player-name",i).forEach(n)}function b(e,i){const n=e.dataset.tipped,t=/Last Activity:<\/td><td>(\d+) mins/.exec(n)[1]
t<2?e.classList.add(i.l1):t<5?e.classList.add(i.l2):e.classList.add(i.l3)}function p(e){i(e).forEach(u)}const h=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(e,i,n){t[n[0]]&&p(a(n[i],e))}function x(e,i){h.forEach(n(k,e,i))}function y(e,i,n){n.preventDefault(),n.target.classList.toggle(e),n.target.classList.toggle(i)}function j(i,n){const t=e(n,i).map((e=>d(e.nextElementSibling)))
r(t.join())}function B(e,i){const n=e.find((e=>e[0](i.target)))
if(n)return n[1](i)}function I([e,i,t,a]){return n(B,function([e,i,t,a]){return[[n(l,i),n(y,i,t)],[n(l,t),n(y,i,t)],[m(a),n(j,e,i)]]}([e,i,t,a]))}function L(e,i){const n=`${i}-buff-check-on`,a=`${i}-quick-buff`
t.hideBuffSelected?(p(s(n,e)),u(o(a))):t.fixBuffSelected&&function([e,i,n,t]){if(c)return
const a=`${i}-buff-check-off`
$(`.${n}`).off("click"),$(`.${a}`).off("click"),$(`#${t}`).off("click"),f(e.parentNode,I([e,n,a,t]))}([e,i,n,a])}export{L as a,b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-18df1596.js.map
