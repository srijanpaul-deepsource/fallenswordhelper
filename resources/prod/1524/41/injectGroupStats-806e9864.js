import{a}from"./addCommas-81c8f148.js"
import{g as e}from"./getMercStats-38507ada.js"
import{g as t}from"./groupViewStats-0f80ecf2.js"
import{y as m,B as s}from"./calfSystem-030d7057.js"
import"./intValue-af3aed3f.js"
let n
function o(e,t,m){s(`<span class="fshBlue">${a(t)}</span> ( ${a(t-m)} )`,e)}function f(a){o(n.attackElement,n.attack,a.attack),o(n.defenseElement,n.defense,a.defense),o(n.armorElement,n.armor,a.armor),o(n.damageElement,n.damage,a.damage),o(n.hpElement,n.hp,a.hp)}function r(){m()||(n=t(document),n.attackElement&&e().then(f))}export default r
//# sourceMappingURL=injectGroupStats-806e9864.js.map
