import{g as i}from"./getArrayByClassName-2345f1a3.js"
import{at as e,t,c as a,af as n,M as s,z as o,y as f,o as c,l,H as d}from"./calfSystem-b3667af8.js"
import{h as u}from"./hideElement-e21a7422.js"
import{o as r}from"./openQuickBuffByName-18de8163.js"
import{s as m}from"./selfIdIs-6669fd92.js"
function g(e,t){i("player-name",e).forEach(t)}function p(i,e){const t=i.dataset.tipped,a=/Last Activity:<\/td><td>(\d+) mins/.exec(t)[1]
a<2?i.classList.add(e.l1):a<5?i.classList.add(e.l2):i.classList.add(e.l3)}function b(i){e(i).forEach(u)}const h=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(i,e,t){a[t[0]]&&b(n(t[e],i))}function x(i,e){h.forEach(t(k,i,e))}function y(i,e,t){t.preventDefault(),t.target.classList.toggle(i),t.target.classList.toggle(e)}function j(e,t){const a=i(t,e).map((i=>d(i.nextElementSibling)))
r(a.join())}function B(i,e){const t=i.find((i=>i[0](e.target)))
if(t)return t[1](e)}function I([i,e,a,n]){return t(B,function([i,e,a,n]){return[[t(l,e),t(y,e,a)],[t(l,a),t(y,e,a)],[m(n),t(j,i,e)]]}([i,e,a,n]))}function L(i,e){const t=`${e}-buff-check-on`,n=`${e}-quick-buff`
a.hideBuffSelected?(b(s(t,i)),u(o(n))):a.fixBuffSelected&&function([i,e,t,a]){if(f)return
const n=`${e}-buff-check-off`
$(`.${t}`).off("click"),$(`.${n}`).off("click"),$(`#${a}`).off("click"),c(i.parentNode,I([i,t,n,a]))}([i,e,t,n])}export{L as a,p as b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-e342a7db.js.map
