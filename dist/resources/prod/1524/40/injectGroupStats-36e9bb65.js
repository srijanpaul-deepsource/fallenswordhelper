import{a as e}from"./addCommas-6123a9f9.js"
import{g as a}from"./getMercStats-ceb85e7e.js"
import{g as t}from"./groupViewStats-cb0c4b39.js"
import{y as m,B as s}from"./calfSystem-540da563.js"
import"./intValue-e485889b.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function c(){m()||(n=t(document),n.attackElement&&a().then(r))}export default c
//# sourceMappingURL=injectGroupStats-36e9bb65.js.map
