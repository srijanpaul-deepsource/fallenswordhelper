import{c as t}from"./closestTr-709cb52e.js"
import{c as s}from"./csvSplit-a4e91aa0.js"
import{d as n,g as e}from"./getGroupStats-caa79374.js"
import{g as a}from"./getArrayByClassName-b62a000f.js"
import{t as o,A as r,B as i,i as c,a2 as l,h as f,as as u,o as d,D as p,C as h,c as m,bW as b,V as g,m as j,u as C,x as $,H as S}from"./calfSystem-45544049.js"
import{o as A}from"./onlineDot-d26b9768.js"
import{g as w}from"./getMembrList-dc370f1b.js"
import{c as x}from"./createInput-8791792e.js"
import{h as v}from"./hideElement-7c48eb54.js"
import"./closest-331833f9.js"
import"./chunk-b2ca1969.js"
import"./createButton-ba5300bd.js"
import"./createLi-d9f67232.js"
import"./createUl-cac51f38.js"
import"./openQuickBuffByName-81a3ab3b.js"
import"./fshOpen-56a6fafa.js"
import"./groupViewStats-fa028c91.js"
import"./intValue-da5ad0eb.js"
import"./currentGuildId-2687cdb7.js"
import"./cmdExport-4fdfd8a3.js"
import"./indexAjaxJson-e79ad7ee.js"
import"./idb-ca3578bc.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function T(t){const s=t.cells[3],n=B.exec(i(s)),e=(new Date).getFullYear()
c(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const n=new Date
return n.setUTCDate(t[2]),n.setUTCMonth(u.indexOf(t[3])),n.setUTCFullYear(s),n.setUTCHours(t[4]),n.setUTCMinutes(t[5]),n}(n,e).toString().substr(0,21)}</span>`)}function N(t,s){return t[s]?t[s].level:0}function G(t,s,n){return N(t,n)-N(t,s)}function J(t,s){return t[s]?`<a href="${l}${t[s].id}">${s}</a>`:s}function M(t){return"[none]"!==t&&-1===t.indexOf("<font")}function y(t,e){const a=e.cells[0]
r(function(t,s){const n=i(s.children[0])
return t[n]?`${A({last_login:t[n].last_login})}&nbsp;<a href="${l}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,a),a)
const u=e.cells[1],d=function(t,n){const e=s(n.innerHTML)
return e.length>1&&e.sort(o(G,t)),e}(t,u)
!function(t,s){const e=s.filter(M)
e.length>0&&f(t,n(e)),c(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}(a,d),function(t,s,n){const e=n.map(o(J,t))
r(`<span>${e.join(", ")}</span>`,s)}(t,u,d),T(e)}function U(s){a("group-action-container").map((s=>t(s))).forEach(o(y,s))}function D(t,s){const n=x({className:"custombutton",type:"button",value:s})
return c(t,"&nbsp;"),f(t,n),n}function L(t,s){const n=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,e=t.parentNode.parentNode.previousElementSibling
c(e,n)}function k(t){e(t.href).then(o(L,t))}function z(t){t.target.disabled=!0,p('#pCC a[href*="=viewstats&"]').forEach(k)}function E(t){return!t.includes("#000099")}function R(t){r('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const n=t.parentNode.parentNode.parentNode.cells[1]
if(s(i(n)).filter(E).length<m.maxGroupSizeToJoin){const s=j({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(o(R,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function F(){g("groups","joinAllGroupsUnderSize"),p('#pCC a[href*="confirmJoin"]').forEach(H)}function O(){const t=h('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
m.enableMaxGroupSizeToJoin&&(v(t),function(t){const s=D(t,`Join All Groups < ${m.maxGroupSizeToJoin} Members`)
d(s,F)}(s)),function(t){const s=D(t,"Fetch Group Stats")
d(s,z)}(s),m.subcmd2===b&&F()}function V(){$()||(w(!1).then(U),function(){const t=S("minGroupLevel")
t&&c(h("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),O(),function(){const t=p("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default V
//# sourceMappingURL=groups-811e1223.js.map