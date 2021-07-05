import{a as e}from"./addCommas-b66fde4c.js"
import{g as a}from"./getMercStats-6a32d864.js"
import{g as t}from"./groupViewStats-6bf51b21.js"
import{y as m,B as s}from"./calfSystem-b3667af8.js"
import"./intValue-76dfee09.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-ef88ba73.js.map
