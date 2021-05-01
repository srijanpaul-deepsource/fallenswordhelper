import{g as i}from"./getArrayByClassName-f0b57594.js"
import{N as a,t as e,c as n,ac as t,K as s,z as o,y as c,o as f,l,H as u}from"./calfSystem-ab393688.js"
import{h as d}from"./hideElement-512851a2.js"
import{o as r}from"./openQuickBuffByName-a32a2b4a.js"
import{s as m}from"./selfIdIs-70806dca.js"
function g(a,e){i("player-name",a).forEach(e)}function b(i,a){const e=i.dataset.tipped,n=/Last Activity:<\/td><td>(\d+) mins/.exec(e)[1]
n<2?i.classList.add(a.l1):n<5?i.classList.add(a.l2):i.classList.add(a.l3)}function p(i){a(i).forEach(d)}const h=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(i,a,e){n[e[0]]&&p(t(e[a],i))}function x(i,a){h.forEach(e(k,i,a))}function y(i,a,e){e.preventDefault(),e.target.classList.toggle(i),e.target.classList.toggle(a)}function j(a,e){const n=i(e,a).map((i=>u(i.nextElementSibling)))
r(n.join())}function B(i,a){const e=i.find((i=>i[0](a.target)))
if(e)return e[1](a)}function I([i,a,n,t]){return e(B,function([i,a,n,t]){return[[e(l,a),e(y,a,n)],[e(l,n),e(y,a,n)],[m(t),e(j,i,a)]]}([i,a,n,t]))}function L(i,a){const e=`${a}-buff-check-on`,t=`${a}-quick-buff`
n.hideBuffSelected?(p(s(e,i)),d(o(t))):n.fixBuffSelected&&function([i,a,e,n]){if(c)return
const t=`${a}-buff-check-off`
$(`.${e}`).off("click"),$(`.${t}`).off("click"),$(`#${n}`).off("click"),f(i.parentNode,I([i,e,t,n]))}([i,a,e,t])}export{L as a,b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-c1329649.js.map
