import{a}from"./addCommas-81c8f148.js"
import{g as e}from"./getMercStats-eeba3fcd.js"
import{g as t}from"./groupViewStats-a04a8ddc.js"
import{y as m,B as s}from"./calfSystem-587dd8d3.js"
import"./intValue-af3aed3f.js"
let n
function o(e,t,m){s(`<span class="fshBlue">${a(t)}</span> ( ${a(t-m)} )`,e)}function r(a){o(n.attackElement,n.attack,a.attack),o(n.defenseElement,n.defense,a.defense),o(n.armorElement,n.armor,a.armor),o(n.damageElement,n.damage,a.damage),o(n.hpElement,n.hp,a.hp)}function d(){m()||(n=t(document),n.attackElement&&e().then(r))}export default d
//# sourceMappingURL=injectGroupStats-1a2d0948.js.map
