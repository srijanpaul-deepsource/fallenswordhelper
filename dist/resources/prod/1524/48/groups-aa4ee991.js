import{c as t}from"./closestTr-5f6e9767.js"
import{c as s}from"./csvSplit-a090804f.js"
import{d as n,g as e}from"./getGroupStats-6f33e882.js"
import{g as o}from"./getArrayByClassName-4fe5cf41.js"
import{I as a,av as r,t as i,aw as c,B as l,C as f,i as u,a3 as d,h as p,as as h,o as m,E as b,c as g,bS as j,S as C,m as S,u as $,y as w,D as A}from"./calfSystem-85fa6364.js"
import{o as v}from"./onlineDot-00bdd8cc.js"
import{g as x}from"./getMembrList-3b37048c.js"
import{c as B}from"./createInput-6b491c72.js"
import{h as G}from"./hideElement-3852cc2c.js"
import"./closest-3a475e96.js"
import"./chunk-7ed9b1d2.js"
import"./createButton-8b0b448f.js"
import"./createLi-636df231.js"
import"./createUl-f88b7938.js"
import"./openQuickBuffByName-fd250012.js"
import"./fshOpen-b549d330.js"
import"./groupViewStats-c23e533e.js"
import"./intValue-9eb5015a.js"
import"./currentGuildId-01e2fed9.js"
import"./cmdExport-62f110d4.js"
import"./indexAjaxJson-4fb780dc.js"
import"./idb-160add45.js"
const T=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],n=T.exec(f(s)),e=(new Date).getFullYear()
u(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const n=new Date
return n.setUTCDate(t[2]),n.setUTCMonth(h.indexOf(t[3])),n.setUTCFullYear(s),n.setUTCHours(t[4]),n.setUTCMinutes(t[5]),n}(n,e).toString().substr(0,21)}</span>`)}function y(t,s){return t[s]?t[s].level:0}function J(t,s,n){return y(t,n)-y(t,s)}function M(t,s){return t[s]?`<a href="${d}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,e){const o=e.cells[0]
l(function(t,s){const n=f(s.children[0])
return t[n]?`${v({last_login:t[n].last_login})}&nbsp;<a href="${d}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,o),o)
const a=e.cells[1],r=function(t,n){const e=s(n.innerHTML)
return e.length>1&&e.sort(i(J,t)),e}(t,a)
!function(t,s){const e=s.filter(U)
e.length>0&&p(t,n(e)),u(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}(o,r),function(t,s,n){const e=n.map(i(M,t))
l(`<span>${e.join(", ")}</span>`,s)}(t,a,r),N(e)}function E(s){const n=a("betaOptIn")
n&&r("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(i(D,s)),n&&c("groups.doGroupPaint")}function L(t,s){const n=B({className:"custombutton",type:"button",value:s})
return u(t,"&nbsp;"),p(t,n),n}function k(t,s){const n=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,e=t.parentNode.parentNode.previousElementSibling
u(e,n)}function z(t){e(t.href).then(i(k,t))}function R(t){t.target.disabled=!0,b('#pCC a[href*="=viewstats&"]').forEach(z)}function H(t){return!t.includes("#000099")}function I(t){l('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function O(t){const n=t.parentNode.parentNode.parentNode.cells[1]
if(s(f(n)).filter(H).length<g.maxGroupSizeToJoin){const s=S({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){$({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(i(I,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function F(){C("groups","joinAllGroupsUnderSize"),b('#pCC a[href*="confirmJoin"]').forEach(O)}function P(t){const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(G(t),function(t){const s=L(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
m(s,F)}(s)),function(t){const s=L(t,"Fetch Group Stats")
m(s,R)}(s),g.subcmd2===j&&F()}function X(){if(w())return
const t=A('#pCC input[value="Join All Available Groups"]')
t&&(x(!1).then(E),function(){const t=a("minGroupLevel")
t&&u(A("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),P(t),function(){const t=b("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default X
//# sourceMappingURL=groups-aa4ee991.js.map
