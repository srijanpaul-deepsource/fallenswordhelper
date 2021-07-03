import{a as e}from"./addCommas-5de3e9c4.js"
import{g as a}from"./getMercStats-59501427.js"
import{g as t}from"./groupViewStats-4d61b315.js"
import{y as m,B as s}from"./calfSystem-01849445.js"
import"./intValue-9eb5015a.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-1a3739a4.js.map
