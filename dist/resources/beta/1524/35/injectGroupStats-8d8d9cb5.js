import{a as e}from"./addCommas-fa3f11ee.js"
import{g as a}from"./getMercStats-c1072aa8.js"
import{g as t}from"./groupViewStats-ba09bb3d.js"
import{y as m,B as s}from"./calfSystem-03050396.js"
import"./intValue-1ce02c09.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-8d8d9cb5.js.map
