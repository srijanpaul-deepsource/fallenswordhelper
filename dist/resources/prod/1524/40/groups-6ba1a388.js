import{c as t}from"./closestTr-366a895b.js"
import{c as s}from"./csvSplit-e7651da4.js"
import{d as n,g as e}from"./getGroupStats-0ddea20a.js"
import{g as o}from"./getArrayByClassName-58503ecd.js"
import{t as a,B as r,C as i,i as c,a4 as l,h as f,af as u,o as d,E as p,D as h,c as m,bX as b,W as g,m as j,u as C,y as $,I as S}from"./calfSystem-540da563.js"
import{o as w}from"./onlineDot-87712eda.js"
import{g as A}from"./getMembrList-ae5a867b.js"
import{c as x}from"./createInput-7c5a8b53.js"
import{h as v}from"./hideElement-512851a2.js"
import"./closest-abbeba17.js"
import"./chunk-b7db8c6b.js"
import"./createButton-bcd88351.js"
import"./createLi-2a7ae77f.js"
import"./createUl-500d20b9.js"
import"./openQuickBuffByName-5c5f0fdb.js"
import"./fshOpen-9656868c.js"
import"./groupViewStats-cb0c4b39.js"
import"./intValue-e485889b.js"
import"./currentGuildId-dc83d308.js"
import"./cmdExport-a330f27a.js"
import"./indexAjaxJson-8f18f901.js"
import"./idb-62a50947.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function T(t){const s=t.cells[3],n=B.exec(i(s)),e=(new Date).getFullYear()
c(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const n=new Date
return n.setUTCDate(t[2]),n.setUTCMonth(u.indexOf(t[3])),n.setUTCFullYear(s),n.setUTCHours(t[4]),n.setUTCMinutes(t[5]),n}(n,e).toString().substr(0,21)}</span>`)}function N(t,s){return t[s]?t[s].level:0}function G(t,s,n){return N(t,n)-N(t,s)}function y(t,s){return t[s]?`<a href="${l}${t[s].id}">${s}</a>`:s}function J(t){return"[none]"!==t&&-1===t.indexOf("<font")}function M(t,e){const o=e.cells[0]
r(function(t,s){const n=i(s.children[0])
return t[n]?`${w({last_login:t[n].last_login})}&nbsp;<a href="${l}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,o),o)
const u=e.cells[1],d=function(t,n){const e=s(n.innerHTML)
return e.length>1&&e.sort(a(G,t)),e}(t,u)
!function(t,s){const e=s.filter(J)
e.length>0&&f(t,n(e)),c(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}(o,d),function(t,s,n){const e=n.map(a(y,t))
r(`<span>${e.join(", ")}</span>`,s)}(t,u,d),T(e)}function U(s){o("group-action-container").map((s=>t(s))).forEach(a(M,s))}function D(t,s){const n=x({className:"custombutton",type:"button",value:s})
return c(t,"&nbsp;"),f(t,n),n}function E(t,s){const n=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,e=t.parentNode.parentNode.previousElementSibling
c(e,n)}function L(t){e(t.href).then(a(E,t))}function k(t){t.target.disabled=!0,p('#pCC a[href*="=viewstats&"]').forEach(L)}function z(t){return!t.includes("#000099")}function R(t){r('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const n=t.parentNode.parentNode.parentNode.cells[1]
if(s(i(n)).filter(z).length<m.maxGroupSizeToJoin){const s=j({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(a(R,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function X(){g("groups","joinAllGroupsUnderSize"),p('#pCC a[href*="confirmJoin"]').forEach(H)}function F(){const t=h('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
m.enableMaxGroupSizeToJoin&&(v(t),function(t){const s=D(t,`Join All Groups < ${m.maxGroupSizeToJoin} Members`)
d(s,X)}(s)),function(t){const s=D(t,"Fetch Group Stats")
d(s,k)}(s),m.subcmd2===b&&X()}function I(){$()||(A(!1).then(U),function(){const t=S("minGroupLevel")
t&&c(h("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),F(),function(){const t=p("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default I
//# sourceMappingURL=groups-6ba1a388.js.map
