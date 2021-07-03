import{a as t}from"./addCommas-5de3e9c4.js"
import{q as s,aB as e,a$ as n,e as a,a7 as r,c as i,j as o,p as c,B as l,z as f,o as h,t as d,l as u}from"./calfSystem-8af1dca2.js"
import{d as m}from"./doSortParams-b907c95e.js"
import{p,s as g,a as y}from"./stringSort-37546f48.js"
import{g as C,s as b}from"./idb-30d71a28.js"
function $(t){return`${t.min.toString()} - ${t.max.toString()}`}function k(t){return`<span class="fshNoWrap">${t[0]}: ${$(t[1])}</span>`}function v(t){if(function(t){return t&&n(t).length>0}(t)){let s='<span class="fshXXSmall">'
return s+=a(t).map(k).join("<br>"),`${s}</span>`}return'<span class="fshGrey">**Missing**</span>'}function L(n,a){return s(n[a],{name:a,image:(r=n[a].image_id,`<img class="tip-static" src="${e}creatures/${r}.png" data-tipped="<img src='${e}creatures/${r}.png' width=200 height=200>" width=40 height=40>`),level:t(n[a].level),attack:$(n[a].attack),defense:$(n[a].defense),armor:$(n[a].armor),damage:$(n[a].damage),hp:$(n[a].hp),enhancements:v(n[a].enhancements)})
var r}function j(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function w(t,s){if(function(t){return!r(t.type)&&t.type>8}(t))return 1
if(function(t,s){return!r(t.type)&&s.type>8}(t,s))return-1
let e=p(t,i.sortBy,1),n=p(s,i.sortBy,1)
e=j(e),n=j(n)
return g(e-n)}let S,B
function A(){l("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",S)}function E(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function _(){const t=f("entityTableOutput")
B&&t&&l(B.map(E).join(""),t)}function P(t){m(t)
!function(t){"string"===t?B.sort(y):B.sort(w)}(function(t){return t.getAttribute("sortType")||"string"}(t)),_()}function O(t){const{target:s}=t
if("clearEntityLog"===s.id)return b("fsh_monsterLog",""),void A();(function(t){return u("fshLink",t)&&t.hasAttribute("sortkey")})(s)&&P(s)}function T(t){t?(!function(t){B=n(t).map(d(L,t))}(t),i.sortBy="level",i.sortAsc=!0,B.sort(w),B&&(l('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',S),h(S,O)),_()):A()}function x(t){o()&&function(t){S=t||c,S&&C("fsh_monsterLog").then(T)}(t)}export default x
//# sourceMappingURL=monstorLog-d7b03b3c.js.map
