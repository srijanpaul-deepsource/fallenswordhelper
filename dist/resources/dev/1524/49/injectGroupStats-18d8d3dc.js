import{a as e}from"./addCommas-1f67a5b9.js"
import{g as a}from"./getMercStats-e65edbdb.js"
import{g as t}from"./groupViewStats-f83dbb09.js"
import{y as m,B as s}from"./calfSystem-9ab64478.js"
import"./intValue-f11572ef.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-18d8d3dc.js.map
