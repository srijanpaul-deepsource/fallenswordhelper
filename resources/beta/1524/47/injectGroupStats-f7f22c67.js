import{a as e}from"./addCommas-27b35f1c.js"
import{g as t}from"./getMercStats-7ccd5343.js"
import{g as a}from"./groupViewStats-d0332725.js"
import{y as m,B as s}from"./calfSystem-db2edbef.js"
import"./intValue-e4ce6bb5.js"
let n
function o(t,a,m){s(`<span class="fshBlue">${e(a)}</span> ( ${e(a-m)} )`,t)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function c(){m()||(n=a(document),n.attackElement&&t().then(r))}export default c
//# sourceMappingURL=injectGroupStats-f7f22c67.js.map
