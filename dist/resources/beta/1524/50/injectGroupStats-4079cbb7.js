import{a as e}from"./addCommas-b66fde4c.js"
import{g as a}from"./getMercStats-b4448807.js"
import{g as t}from"./groupViewStats-cb8e1861.js"
import{y as m,B as s}from"./calfSystem-617f9a5d.js"
import"./intValue-76dfee09.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-4079cbb7.js.map
