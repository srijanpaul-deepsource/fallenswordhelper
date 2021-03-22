import{a as e}from"./addCommas-fa3f11ee.js"
import{g as a}from"./getMercStats-51bf40e5.js"
import{g as t}from"./groupViewStats-9f893786.js"
import{y as m,B as s}from"./calfSystem-186455ab.js"
import"./intValue-1ce02c09.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-cf55b096.js.map
