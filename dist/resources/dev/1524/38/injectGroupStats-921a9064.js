import{a as e}from"./addCommas-cec84c43.js"
import{g as a}from"./getMercStats-5236339d.js"
import{g as t}from"./groupViewStats-dcbd70e3.js"
import{y as m,B as s}from"./calfSystem-d56087e1.js"
import"./intValue-ba9b9e5a.js"
let n
function o(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function r(e){o(n.attackElement,n.attack,e.attack),o(n.defenseElement,n.defense,e.defense),o(n.armorElement,n.armor,e.armor),o(n.damageElement,n.damage,e.damage),o(n.hpElement,n.hp,e.hp)}function c(){m()||(n=t(document),n.attackElement&&a().then(r))}export default c
//# sourceMappingURL=injectGroupStats-921a9064.js.map
