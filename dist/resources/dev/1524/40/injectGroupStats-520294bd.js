import{a as e}from"./addCommas-6123a9f9.js"
import{g as a}from"./getMercStats-b2c7f240.js"
import{g as t}from"./groupViewStats-fd327eec.js"
import{y as m,B as s}from"./calfSystem-c464cb1d.js"
import"./intValue-e485889b.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-520294bd.js.map
