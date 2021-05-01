import{a as e}from"./addCommas-81c8f148.js"
import{g as a}from"./getMercStats-6e0b432e.js"
import{g as t}from"./groupViewStats-1be20046.js"
import{y as m,B as s}from"./calfSystem-817ceb25.js"
import"./intValue-af3aed3f.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-fc5f4c0d.js.map
