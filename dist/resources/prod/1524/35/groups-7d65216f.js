import{c as t}from"./closestTr-35c47492.js"
import{c as s}from"./csvSplit-f0a1b444.js"
import{d as e,g as n}from"./getGroupStats-d359fd3f.js"
import{g as o}from"./getArrayByClassName-7dbc6c3a.js"
import{t as r,B as a,C as i,i as c,a4 as f,h as l,ad as u,o as d,E as p,D as h,c as m,bY as b,W as g,m as j,u as C,y as $,I as S}from"./calfSystem-fe0ebf32.js"
import{o as w}from"./onlineDot-6de579ac.js"
import{g as A}from"./getMembrList-48fdd1f0.js"
import{c as x}from"./createInput-47702c1d.js"
import{h as v}from"./hideElement-2c661b2e.js"
import"./closest-1ff01e01.js"
import"./chunk-e04f591f.js"
import"./createButton-f3d952bf.js"
import"./createLi-1136f028.js"
import"./createUl-995f97e4.js"
import"./openQuickBuffByName-6871b68f.js"
import"./fshOpen-363b7f52.js"
import"./groupViewStats-f863abe7.js"
import"./intValue-1ce02c09.js"
import"./currentGuildId-09820c92.js"
import"./cmdExport-fd555515.js"
import"./indexAjaxJson-a9fbc5f9.js"
import"./idb-b0de0ac7.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function T(t){const s=t.cells[3],e=B.exec(i(s)),n=(new Date).getFullYear()
c(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(u.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function N(t,s){return t[s]?t[s].level:0}function G(t,s,e){return N(t,e)-N(t,s)}function y(t,s){return t[s]?`<a href="${f}${t[s].id}">${s}</a>`:s}function J(t){return"[none]"!==t&&-1===t.indexOf("<font")}function M(t,n){const o=n.cells[0]
a(function(t,s){const e=i(s.children[0])
return t[e]?`${w({last_login:t[e].last_login})}&nbsp;<a href="${f}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const u=n.cells[1],d=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(r(G,t)),n}(t,u)
!function(t,s){const n=s.filter(J)
n.length>0&&l(t,e(n)),c(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,d),function(t,s,e){const n=e.map(r(y,t))
a(`<span>${n.join(", ")}</span>`,s)}(t,u,d),T(n)}function U(s){o("group-action-container").map((s=>t(s))).forEach(r(M,s))}function D(t,s){const e=x({className:"custombutton",type:"button",value:s})
return c(t,"&nbsp;"),l(t,e),e}function E(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
c(n,e)}function L(t){n(t.href).then(r(E,t))}function k(t){t.target.disabled=!0,p('#pCC a[href*="=viewstats&"]').forEach(L)}function z(t){return!t.includes("#000099")}function R(t){a('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(i(e)).filter(z).length<m.maxGroupSizeToJoin){const s=j({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(r(R,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function F(){g("groups","joinAllGroupsUnderSize"),p('#pCC a[href*="confirmJoin"]').forEach(H)}function I(){const t=h('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
m.enableMaxGroupSizeToJoin&&(v(t),function(t){const s=D(t,`Join All Groups < ${m.maxGroupSizeToJoin} Members`)
d(s,F)}(s)),function(t){const s=D(t,"Fetch Group Stats")
d(s,k)}(s),m.subcmd2===b&&F()}function O(){$()||(A(!1).then(U),function(){const t=S("minGroupLevel")
t&&c(h("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),I(),function(){const t=p("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default O
//# sourceMappingURL=groups-7d65216f.js.map
