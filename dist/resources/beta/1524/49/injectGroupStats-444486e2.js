import{a as e}from"./addCommas-1f67a5b9.js"
import{g as a}from"./getMercStats-2890d43f.js"
import{g as t}from"./groupViewStats-26576bf9.js"
import{y as m,B as s}from"./calfSystem-42f137cb.js"
import"./intValue-f11572ef.js"
let n
function f(a,t,m){s(`<span class="fshBlue">${e(t)}</span> ( ${e(t-m)} )`,a)}function o(e){f(n.attackElement,n.attack,e.attack),f(n.defenseElement,n.defense,e.defense),f(n.armorElement,n.armor,e.armor),f(n.damageElement,n.damage,e.damage),f(n.hpElement,n.hp,e.hp)}function r(){m()||(n=t(document),n.attackElement&&a().then(o))}export default r
//# sourceMappingURL=injectGroupStats-444486e2.js.map
