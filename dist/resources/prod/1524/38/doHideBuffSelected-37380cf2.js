import{g as i}from"./getArrayByClassName-0cc51c94.js"
import{N as e,t as a,c as n,ac as t,K as s,z as c,o,l as f,H as l}from"./calfSystem-7a1cce43.js"
import{h as d}from"./hideElement-9b8f5190.js"
import{o as u}from"./openQuickBuffByName-18faab75.js"
import{s as r}from"./selfIdIs-4d75eaef.js"
function m(e,a){i("player-name",e).forEach(a)}function g(i,e){const a=i.dataset.tipped,n=/Last Activity:<\/td><td>(\d+) mins/.exec(a)[1]
n<2?i.classList.add(e.l1):n<5?i.classList.add(e.l2):i.classList.add(e.l3)}function b(i){e(i).forEach(d)}const p=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function h(i,e,a){n[a[0]]&&b(t(a[e],i))}function k(i,e){p.forEach(a(h,i,e))}function x(i,e,a){a.preventDefault(),a.target.classList.toggle(i),a.target.classList.toggle(e)}function j(e,a){const n=i(a,e).map((i=>l(i.nextElementSibling)))
u(n.join())}function y(i,e){const a=i.find((i=>i[0](e.target)))
if(a)return a[1](e)}function B([i,e,n,t]){return a(y,function([i,e,n,t]){return[[a(f,e),a(x,e,n)],[a(f,n),a(x,e,n)],[r(t),a(j,i,e)]]}([i,e,n,t]))}function I(i,e){const a=`${e}-buff-check-on`,t=`${e}-quick-buff`
n.hideBuffSelected?(b(s(a,i)),d(c(t))):n.fixBuffSelected&&function([i,e,a,n]){const t=`${e}-buff-check-off`
$(`.${a}`).off("click"),$(`.${t}`).off("click"),$(`#${n}`).off("click"),o(i.parentNode,B([i,a,t,n]))}([i,e,a,t])}export{I as a,g as b,m as c,k as d}
//# sourceMappingURL=doHideBuffSelected-37380cf2.js.map
