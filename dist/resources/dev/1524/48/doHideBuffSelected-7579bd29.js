import{g as i}from"./getArrayByClassName-da632221.js"
import{at as e,t,c as n,af as a,M as s,z as o,y as c,o as f,l,H as u}from"./calfSystem-01849445.js"
import{h as d}from"./hideElement-3852cc2c.js"
import{o as r}from"./openQuickBuffByName-a7eecc9f.js"
import{s as m}from"./selfIdIs-fe2b98f6.js"
function g(e,t){i("player-name",e).forEach(t)}function p(i,e){const t=i.dataset.tipped,n=/Last Activity:<\/td><td>(\d+) mins/.exec(t)[1]
n<2?i.classList.add(e.l1):n<5?i.classList.add(e.l2):i.classList.add(e.l3)}function b(i){e(i).forEach(d)}const h=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(i,e,t){n[t[0]]&&b(a(t[e],i))}function x(i,e){h.forEach(t(k,i,e))}function y(i,e,t){t.preventDefault(),t.target.classList.toggle(i),t.target.classList.toggle(e)}function j(e,t){const n=i(t,e).map((i=>u(i.nextElementSibling)))
r(n.join())}function B(i,e){const t=i.find((i=>i[0](e.target)))
if(t)return t[1](e)}function I([i,e,n,a]){return t(B,function([i,e,n,a]){return[[t(l,e),t(y,e,n)],[t(l,n),t(y,e,n)],[m(a),t(j,i,e)]]}([i,e,n,a]))}function L(i,e){const t=`${e}-buff-check-on`,a=`${e}-quick-buff`
n.hideBuffSelected?(b(s(t,i)),d(o(a))):n.fixBuffSelected&&function([i,e,t,n]){if(c)return
const a=`${e}-buff-check-off`
$(`.${t}`).off("click"),$(`.${a}`).off("click"),$(`#${n}`).off("click"),f(i.parentNode,I([i,t,a,n]))}([i,e,t,a])}export{L as a,p as b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-7579bd29.js.map
