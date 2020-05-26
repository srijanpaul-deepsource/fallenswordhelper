import{n as t,at as s,ag as e,l as n,a8 as a,c as r,j as c,a4 as i,p as o,z as l,x as f,o as h,s as d,a6 as u}from"./calfSystem-1262535f.js"
import"./toLowerCase-0c270c29.js"
import{a as p}from"./addCommas-feda1131.js"
import"./alpha-cdb4272d.js"
import{d as m}from"./doSortParams-1e080cc5.js"
import{p as g,s as y,a as C}from"./stringSort-f2d4f03f.js"
function b(t){return`${t.min.toString()} - ${t.max.toString()}`}function $(t){return`<span class="fshNoWrap">${t[0]}: ${b(t[1])}</span>`}function k(t){if(function(t){return t&&e(t).length>0}(t)){let s='<span class="fshXXSmall">'
return s+=n(t).map($).join("<br>"),s+"</span>"}return'<span class="fshGrey">**Missing**</span>'}function L(e,n){return t(e[n],{name:n,image:(a=e[n].image_id,`<img class="tip-static" src="${s}creatures/${a}.png" data-tipped="<img src='${s}creatures/${a}.png' width=200 height=200>" width=40 height=40>`),level:p(e[n].level),attack:b(e[n].attack),defense:b(e[n].defense),armor:b(e[n].armor),damage:b(e[n].damage),hp:b(e[n].hp),enhancements:k(e[n].enhancements)})
var a}function j(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function v(t,s){if(function(t){return!a(t.type)&&t.type>8}(t))return 1
if(function(t,s){return!a(t.type)&&s.type>8}(t,s))return-1
let e=g(t,r.sortBy,1),n=g(s,r.sortBy,1)
e=j(e),n=j(n)
return y(e-n)}let w,S
function A(){l("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",w)}function E(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function _(){const t=f("entityTableOutput")
S&&t&&l(S.map(E).join(""),t)}function B(t){m(t)
!function(t){"string"===t?S.sort(C):S.sort(v)}(function(t){return t.getAttribute("sortType")||"string"}(t)),_()}function P(t){const{target:s}=t
if("clearEntityLog"===s.id)return u("fsh_monsterLog",""),void A();(function(t){return t.classList.contains("fshLink")&&t.hasAttribute("sortkey")})(s)&&B(s)}function x(t){t?(!function(t){S=e(t).map(d(L,t))}(t),r.sortBy="level",r.sortAsc=!0,S.sort(v),S&&(l('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',w),h(w,P)),_()):A()}export default function(t){c()&&function(t){w=t||o,w&&i("fsh_monsterLog").then(x)}(t)}
//# sourceMappingURL=monstorLog-40e38a47.js.map
