import{a as e}from"./addCommas-fa3f11ee.js"
import{g as a}from"./getMercStats-724c09e4.js"
import{g as t}from"./groupViewStats-f863abe7.js"
import{y as m,B as s}from"./calfSystem-fe0ebf32.js"
import"./intValue-1ce02c09.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function f(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function r(){m()||(n=t(document),n.attackElement&&a().then(f))}export default r
//# sourceMappingURL=injectGroupStats-9779c31c.js.map
