import{g as i}from"./getArrayByClassName-a799501a.js"
import{at as a,t as e,c as t,af as n,M as s,z as o,y as f,o as c,l,H as u}from"./calfSystem-9ab64478.js"
import{h as d}from"./hideElement-3021ab25.js"
import{o as r}from"./openQuickBuffByName-2b4b1ff5.js"
import{s as m}from"./selfIdIs-21ffa3c4.js"
function g(a,e){i("player-name",a).forEach(e)}function b(i,a){const e=i.dataset.tipped,t=/Last Activity:<\/td><td>(\d+) mins/.exec(e)[1]
t<2?i.classList.add(a.l1):t<5?i.classList.add(a.l2):i.classList.add(a.l3)}function p(i){a(i).forEach(d)}const h=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function k(i,a,e){t[e[0]]&&p(n(e[a],i))}function x(i,a){h.forEach(e(k,i,a))}function y(i,a,e){e.preventDefault(),e.target.classList.toggle(i),e.target.classList.toggle(a)}function j(a,e){const t=i(e,a).map((i=>u(i.nextElementSibling)))
r(t.join())}function B(i,a){const e=i.find((i=>i[0](a.target)))
if(e)return e[1](a)}function I([i,a,t,n]){return e(B,function([i,a,t,n]){return[[e(l,a),e(y,a,t)],[e(l,t),e(y,a,t)],[m(n),e(j,i,a)]]}([i,a,t,n]))}function L(i,a){const e=`${a}-buff-check-on`,n=`${a}-quick-buff`
t.hideBuffSelected?(p(s(e,i)),d(o(n))):t.fixBuffSelected&&function([i,a,e,t]){if(f)return
const n=`${a}-buff-check-off`
$(`.${e}`).off("click"),$(`.${n}`).off("click"),$(`#${t}`).off("click"),c(i.parentNode,I([i,e,n,t]))}([i,a,e,n])}export{L as a,b,g as c,x as d}
//# sourceMappingURL=doHideBuffSelected-883166a1.js.map
