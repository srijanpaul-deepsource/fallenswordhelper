import{a as e}from"./addCommas-27b35f1c.js"
import{g as a}from"./getMercStats-c194bcf7.js"
import{g as t}from"./groupViewStats-84ab9158.js"
import{y as m,B as s}from"./calfSystem-a2fd9017.js"
import"./intValue-e4ce6bb5.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-abf35903.js.map
