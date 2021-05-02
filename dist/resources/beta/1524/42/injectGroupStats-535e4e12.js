import{a}from"./addCommas-99f495b9.js"
import{g as e}from"./getMercStats-5ad9a8a5.js"
import{g as t}from"./groupViewStats-7ae3ebd0.js"
import{y as m,B as s}from"./calfSystem-e76f1a7d.js"
import"./intValue-9eb8a210.js"
let n
function o(e,t,m){s(`<span class="fshBlue">${a(t)}</span> ( ${a(t-m)} )`,e)}function r(a){o(n.attackElement,n.attack,a.attack),o(n.defenseElement,n.defense,a.defense),o(n.armorElement,n.armor,a.armor),o(n.damageElement,n.damage,a.damage),o(n.hpElement,n.hp,a.hp)}function f(){m()||(n=t(document),n.attackElement&&e().then(r))}export default f
//# sourceMappingURL=injectGroupStats-535e4e12.js.map
