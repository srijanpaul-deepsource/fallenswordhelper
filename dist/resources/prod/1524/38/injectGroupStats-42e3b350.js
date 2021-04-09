import{a as e}from"./addCommas-cec84c43.js"
import{g as a}from"./getMercStats-c85b3b96.js"
import{g as t}from"./groupViewStats-661b2e52.js"
import{y as m,B as s}from"./calfSystem-7a1cce43.js"
import"./intValue-ba9b9e5a.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function c(){m()||(n=t(document),n.attackElement&&a().then(r))}export default c
//# sourceMappingURL=injectGroupStats-42e3b350.js.map
