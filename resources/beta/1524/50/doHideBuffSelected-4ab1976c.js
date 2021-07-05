import{g as e}from"./getArrayByClassName-3e46aa9a.js"
import{as as i,t as a,c as n,ae as t,M as s,z as o,y as c,o as f,l,H as d}from"./calfSystem-617f9a5d.js"
import{h as u}from"./hideElement-e21a7422.js"
import{o as r}from"./openQuickBuffByName-a794d2ad.js"
import{s as m}from"./selfIdIs-c3cce407.js"
function g(i,a){e("player-name",i).forEach(a)}function p(e,i){const a=e.dataset.tipped,n=/Last Activity:<\/td><td>(\d+) mins/.exec(a)[1]
n<2?e.classList.add(i.l1):n<5?e.classList.add(i.l2):e.classList.add(i.l3)}function h(e){i(e).forEach(u)}const b=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(e,i,a){n[a[0]]&&h(t(a[i],e))}function x(e,i){b.forEach(a(k,e,i))}function y(e,i,a){a.preventDefault(),a.target.classList.toggle(e),a.target.classList.toggle(i)}function j(i,a){const n=e(a,i).map((e=>d(e.nextElementSibling)))
r(n.join())}function B(e,i){const a=e.find((e=>e[0](i.target)))
if(a)return a[1](i)}function I([e,i,n,t]){return a(B,function([e,i,n,t]){return[[a(l,i),a(y,i,n)],[a(l,n),a(y,i,n)],[m(t),a(j,e,i)]]}([e,i,n,t]))}function L(e,i){const a=`${i}-buff-check-on`,t=`${i}-quick-buff`
n.hideBuffSelected?(h(s(a,e)),u(o(t))):n.fixBuffSelected&&function([e,i,a,n]){if(c)return
const t=`${i}-buff-check-off`
$(`.${a}`).off("click"),$(`.${t}`).off("click"),$(`#${n}`).off("click"),f(e.parentNode,I([e,a,t,n]))}([e,i,a,t])}export{L as a,p as b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-4ab1976c.js.map
