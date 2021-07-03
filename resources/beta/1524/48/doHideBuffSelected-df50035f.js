import{g as i}from"./getArrayByClassName-11de01ae.js"
import{as as e,t as a,c as n,ae as t,M as s,z as o,y as c,o as f,l as d,H as l}from"./calfSystem-8af1dca2.js"
import{h as u}from"./hideElement-3852cc2c.js"
import{o as r}from"./openQuickBuffByName-ad6d10b7.js"
import{s as m}from"./selfIdIs-19c7a3d6.js"
function g(e,a){i("player-name",e).forEach(a)}function p(i,e){const a=i.dataset.tipped,n=/Last Activity:<\/td><td>(\d+) mins/.exec(a)[1]
n<2?i.classList.add(e.l1):n<5?i.classList.add(e.l2):i.classList.add(e.l3)}function b(i){e(i).forEach(u)}const h=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(i,e,a){n[a[0]]&&b(t(a[e],i))}function x(i,e){h.forEach(a(k,i,e))}function y(i,e,a){a.preventDefault(),a.target.classList.toggle(i),a.target.classList.toggle(e)}function j(e,a){const n=i(a,e).map((i=>l(i.nextElementSibling)))
r(n.join())}function B(i,e){const a=i.find((i=>i[0](e.target)))
if(a)return a[1](e)}function I([i,e,n,t]){return a(B,function([i,e,n,t]){return[[a(d,e),a(y,e,n)],[a(d,n),a(y,e,n)],[m(t),a(j,i,e)]]}([i,e,n,t]))}function L(i,e){const a=`${e}-buff-check-on`,t=`${e}-quick-buff`
n.hideBuffSelected?(b(s(a,i)),u(o(t))):n.fixBuffSelected&&function([i,e,a,n]){if(c)return
const t=`${e}-buff-check-off`
$(`.${a}`).off("click"),$(`.${t}`).off("click"),$(`#${n}`).off("click"),f(i.parentNode,I([i,a,t,n]))}([i,e,a,t])}export{L as a,p as b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-df50035f.js.map
