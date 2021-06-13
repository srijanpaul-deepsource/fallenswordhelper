import{a as t}from"./addCommas-8af578e2.js"
import{q as s,ay as e,aZ as n,e as a,aT as r,c as i,j as o,p as c,B as f,z as l,o as h,t as d,l as u}from"./calfSystem-cbf77dd7.js"
import{d as m}from"./doSortParams-a50c6de4.js"
import{p,s as g,a as y}from"./stringSort-ff11b8c2.js"
import{g as b,s as C}from"./idb-82a91df1.js"
function $(t){return`${t.min.toString()} - ${t.max.toString()}`}function k(t){return`<span class="fshNoWrap">${t[0]}: ${$(t[1])}</span>`}function v(t){if(function(t){return t&&n(t).length>0}(t)){let s='<span class="fshXXSmall">'
return s+=a(t).map(k).join("<br>"),`${s}</span>`}return'<span class="fshGrey">**Missing**</span>'}function L(n,a){return s(n[a],{name:a,image:(r=n[a].image_id,`<img class="tip-static" src="${e}creatures/${r}.png" data-tipped="<img src='${e}creatures/${r}.png' width=200 height=200>" width=40 height=40>`),level:t(n[a].level),attack:$(n[a].attack),defense:$(n[a].defense),armor:$(n[a].armor),damage:$(n[a].damage),hp:$(n[a].hp),enhancements:v(n[a].enhancements)})
var r}function j(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function w(t,s){if(function(t){return!r(t.type)&&t.type>8}(t))return 1
if(function(t,s){return!r(t.type)&&s.type>8}(t,s))return-1
let e=p(t,i.sortBy,1),n=p(s,i.sortBy,1)
e=j(e),n=j(n)
return g(e-n)}let S,A
function B(){f("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",S)}function E(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function _(){const t=l("entityTableOutput")
A&&t&&f(A.map(E).join(""),t)}function P(t){m(t)
!function(t){"string"===t?A.sort(y):A.sort(w)}(function(t){return t.getAttribute("sortType")||"string"}(t)),_()}function T(t){const{target:s}=t
if("clearEntityLog"===s.id)return C("fsh_monsterLog",""),void B();(function(t){return u("fshLink",t)&&t.hasAttribute("sortkey")})(s)&&P(s)}function O(t){t?(!function(t){A=n(t).map(d(L,t))}(t),i.sortBy="level",i.sortAsc=!0,A.sort(w),A&&(f('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',S),h(S,T)),_()):B()}function x(t){o()&&function(t){S=t||c,S&&b("fsh_monsterLog").then(O)}(t)}export default x
//# sourceMappingURL=monstorLog-ecbdb33f.js.map
