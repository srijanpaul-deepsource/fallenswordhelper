import{c as t}from"./closestTr-c53b56bf.js"
import{c as s}from"./csvSplit-3bc5f3ee.js"
import{d as e,g as n}from"./getGroupStats-539a005f.js"
import{g as o}from"./getArrayByClassName-c7b90480.js"
import{t as a,B as r,C as i,i as c,a4 as f,h as l,af as u,o as p,E as d,D as h,c as m,bY as b,W as g,m as j,u as C,y as $,I as S}from"./calfSystem-15b00143.js"
import{o as w}from"./onlineDot-4297be27.js"
import{g as A}from"./getMembrList-5ac332a8.js"
import{c as x}from"./createInput-ff6bf89d.js"
import{h as v}from"./hideElement-30ade5f0.js"
import"./closest-9a08f4fa.js"
import"./chunk-89253199.js"
import"./createButton-920f87da.js"
import"./createLi-0e1933bb.js"
import"./createUl-cbf8e403.js"
import"./openQuickBuffByName-62891ff5.js"
import"./fshOpen-cce15559.js"
import"./groupViewStats-3aeaae59.js"
import"./intValue-9eb8a210.js"
import"./currentGuildId-ad15ffa8.js"
import"./cmdExport-22e87ca6.js"
import"./indexAjaxJson-430cd162.js"
import"./idb-1c9eb1ac.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function T(t){const s=t.cells[3],e=B.exec(i(s)),n=(new Date).getFullYear()
c(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(u.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function N(t,s){return t[s]?t[s].level:0}function G(t,s,e){return N(t,e)-N(t,s)}function y(t,s){return t[s]?`<a href="${f}${t[s].id}">${s}</a>`:s}function J(t){return"[none]"!==t&&-1===t.indexOf("<font")}function M(t,n){const o=n.cells[0]
r(function(t,s){const e=i(s.children[0])
return t[e]?`${w({last_login:t[e].last_login})}&nbsp;<a href="${f}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const u=n.cells[1],p=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(a(G,t)),n}(t,u)
!function(t,s){const n=s.filter(J)
n.length>0&&l(t,e(n)),c(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,p),function(t,s,e){const n=e.map(a(y,t))
r(`<span>${n.join(", ")}</span>`,s)}(t,u,p),T(n)}function U(s){o("group-action-container").map((s=>t(s))).forEach(a(M,s))}function D(t,s){const e=x({className:"custombutton",type:"button",value:s})
return c(t,"&nbsp;"),l(t,e),e}function E(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
c(n,e)}function L(t){n(t.href).then(a(E,t))}function k(t){t.target.disabled=!0,d('#pCC a[href*="=viewstats&"]').forEach(L)}function z(t){return!t.includes("#000099")}function R(t){r('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(i(e)).filter(z).length<m.maxGroupSizeToJoin){const s=j({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(a(R,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function F(){g("groups","joinAllGroupsUnderSize"),d('#pCC a[href*="confirmJoin"]').forEach(H)}function I(){const t=h('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
m.enableMaxGroupSizeToJoin&&(v(t),function(t){const s=D(t,`Join All Groups < ${m.maxGroupSizeToJoin} Members`)
p(s,F)}(s)),function(t){const s=D(t,"Fetch Group Stats")
p(s,k)}(s),m.subcmd2===b&&F()}function O(){$()||(A(!1).then(U),function(){const t=S("minGroupLevel")
t&&c(h("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),I(),function(){const t=d("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default O
//# sourceMappingURL=groups-da199eb5.js.map
