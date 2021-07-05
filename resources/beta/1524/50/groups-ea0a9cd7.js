import{c as t}from"./closestTr-bf59743f.js"
import{c as s}from"./csvSplit-68cab542.js"
import{d as n,g as e}from"./getGroupStats-c5719148.js"
import{g as o}from"./getArrayByClassName-3e46aa9a.js"
import{I as a,aw as r,t as i,ax as c,B as l,C as u,i as f,a4 as p,h as d,at as h,o as m,E as b,c as g,bT as j,S as C,m as $,u as S,y as w,D as x}from"./calfSystem-617f9a5d.js"
import{o as A}from"./onlineDot-3bf4ce45.js"
import{g as v}from"./getMembrList-331ed151.js"
import{c as B}from"./createInput-f24320ea.js"
import{h as T}from"./hideElement-e21a7422.js"
import"./closest-06418423.js"
import"./chunk-965f25a6.js"
import"./createButton-1c7653ee.js"
import"./createLi-4ca370ba.js"
import"./createUl-fd0a3075.js"
import"./openQuickBuffByName-a794d2ad.js"
import"./fshOpen-90a0d847.js"
import"./groupViewStats-cb8e1861.js"
import"./intValue-76dfee09.js"
import"./currentGuildId-3b40ad81.js"
import"./cmdExport-39e5a4b7.js"
import"./indexAjaxJson-1f941a45.js"
import"./idb-443c992c.js"
const G=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],n=G.exec(u(s)),e=(new Date).getFullYear()
f(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const n=new Date
return n.setUTCDate(t[2]),n.setUTCMonth(h.indexOf(t[3])),n.setUTCFullYear(s),n.setUTCHours(t[4]),n.setUTCMinutes(t[5]),n}(n,e).toString().substr(0,21)}</span>`)}function y(t,s){return t[s]?t[s].level:0}function J(t,s,n){return y(t,n)-y(t,s)}function M(t,s){return t[s]?`<a href="${p}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,e){const o=e.cells[0]
l(function(t,s){const n=u(s.children[0])
return t[n]?`${A({last_login:t[n].last_login})}&nbsp;<a href="${p}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,o),o)
const a=e.cells[1],r=function(t,n){const e=s(n.innerHTML)
return e.length>1&&e.sort(i(J,t)),e}(t,a)
!function(t,s){const e=s.filter(U)
e.length>0&&d(t,n(e)),f(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}(o,r),function(t,s,n){const e=n.map(i(M,t))
l(`<span>${e.join(", ")}</span>`,s)}(t,a,r),N(e)}function E(s){const n=a("betaOptIn")
n&&r("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(i(D,s)),n&&c("groups.doGroupPaint")}function L(t,s){const n=B({className:"custombutton",type:"button",value:s})
return f(t,"&nbsp;"),d(t,n),n}function k(t,s){const n=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,e=t.parentNode.parentNode.previousElementSibling
f(e,n)}function z(t){e(t.href).then(i(k,t))}function R(t){t.target.disabled=!0,b('#pCC a[href*="=viewstats&"]').forEach(z)}function H(t){return!t.includes("#000099")}function I(t){l('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function O(t){const n=t.parentNode.parentNode.parentNode.cells[1]
if(s(u(n)).filter(H).length<g.maxGroupSizeToJoin){const s=$({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){S({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(i(I,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function F(){C("groups","joinAllGroupsUnderSize"),b('#pCC a[href*="confirmJoin"]').forEach(O)}function P(t){const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(T(t),function(t){const s=L(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
m(s,F)}(s)),function(t){const s=L(t,"Fetch Group Stats")
m(s,R)}(s),g.subcmd2===j&&F()}function X(){if(w())return
const t=x('#pCC input[value="Join All Available Groups"]')
t&&(v(!1).then(E),function(){const t=a("minGroupLevel")
t&&f(x("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),P(t),function(){const t=b("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default X
//# sourceMappingURL=groups-ea0a9cd7.js.map
