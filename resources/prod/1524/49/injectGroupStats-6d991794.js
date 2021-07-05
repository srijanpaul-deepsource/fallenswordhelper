import{a as e}from"./addCommas-1f67a5b9.js"
import{g as a}from"./getMercStats-deaa8646.js"
import{g as t}from"./groupViewStats-6b3e492f.js"
import{y as m,B as s}from"./calfSystem-2172498b.js"
import"./intValue-f11572ef.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-6d991794.js.map
