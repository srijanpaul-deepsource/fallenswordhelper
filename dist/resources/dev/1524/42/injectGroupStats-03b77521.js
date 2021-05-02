import{a as e}from"./addCommas-99f495b9.js"
import{g as a}from"./getMercStats-9f5e5d83.js"
import{g as t}from"./groupViewStats-21cfd076.js"
import{y as m,B as s}from"./calfSystem-4b6b865d.js"
import"./intValue-9eb8a210.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function f(){m()||(n=t(document),n.attackElement&&a().then(r))}export default f
//# sourceMappingURL=injectGroupStats-03b77521.js.map
