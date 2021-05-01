import{a as e}from"./addCommas-6123a9f9.js"
import{g as a}from"./getMercStats-ed6d0c00.js"
import{g as t}from"./groupViewStats-8fe19289.js"
import{y as m,B as s}from"./calfSystem-ab393688.js"
import"./intValue-e485889b.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-de9c4d54.js.map
