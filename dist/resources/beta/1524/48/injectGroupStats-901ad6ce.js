import{a as e}from"./addCommas-5de3e9c4.js"
import{g as a}from"./getMercStats-16277974.js"
import{g as t}from"./groupViewStats-11eeb586.js"
import{y as m,B as s}from"./calfSystem-8af1dca2.js"
import"./intValue-9eb5015a.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-901ad6ce.js.map
