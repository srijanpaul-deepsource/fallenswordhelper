import{c as t}from"./closestTr-2426267d.js"
import{c as s}from"./csvSplit-3bc5f3ee.js"
import{d as n,g as e}from"./getGroupStats-870dd232.js"
import{g as o}from"./getArrayByClassName-c0c751ca.js"
import{as as a,t as r,at as i,B as c,C as l,i as u,a5 as f,h as d,ag as p,o as h,E as m,D as b,c as g,c0 as j,X as C,m as $,u as S,y as w,I as A}from"./calfSystem-4b6b865d.js"
import{o as x}from"./onlineDot-a8b83ea6.js"
import{g as v}from"./getMembrList-574158ec.js"
import{c as B}from"./createInput-4be43807.js"
import{h as G}from"./hideElement-30ade5f0.js"
import"./closest-9a08f4fa.js"
import"./chunk-89253199.js"
import"./createButton-ab007289.js"
import"./createLi-9d84a031.js"
import"./createUl-a6afb11f.js"
import"./openQuickBuffByName-390aeb1d.js"
import"./fshOpen-cce15559.js"
import"./groupViewStats-21cfd076.js"
import"./intValue-9eb8a210.js"
import"./currentGuildId-830390c7.js"
import"./cmdExport-bf6b936d.js"
import"./indexAjaxJson-9849e745.js"
import"./idb-a46a6973.js"
const T=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],n=T.exec(l(s)),e=(new Date).getFullYear()
u(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const n=new Date
return n.setUTCDate(t[2]),n.setUTCMonth(p.indexOf(t[3])),n.setUTCFullYear(s),n.setUTCHours(t[4]),n.setUTCMinutes(t[5]),n}(n,e).toString().substr(0,21)}</span>`)}function y(t,s){return t[s]?t[s].level:0}function J(t,s,n){return y(t,n)-y(t,s)}function M(t,s){return t[s]?`<a href="${f}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,e){const o=e.cells[0]
c(function(t,s){const n=l(s.children[0])
return t[n]?`${x({last_login:t[n].last_login})}&nbsp;<a href="${f}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,o),o)
const a=e.cells[1],i=function(t,n){const e=s(n.innerHTML)
return e.length>1&&e.sort(r(J,t)),e}(t,a)
!function(t,s){const e=s.filter(U)
e.length>0&&d(t,n(e)),u(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}(o,i),function(t,s,n){const e=n.map(r(M,t))
c(`<span>${e.join(", ")}</span>`,s)}(t,a,i),N(e)}function E(s){a("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(r(D,s)),i("groups.doGroupPaint")}function L(t,s){const n=B({className:"custombutton",type:"button",value:s})
return u(t,"&nbsp;"),d(t,n),n}function k(t,s){const n=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,e=t.parentNode.parentNode.previousElementSibling
u(e,n)}function z(t){e(t.href).then(r(k,t))}function R(t){t.target.disabled=!0,m('#pCC a[href*="=viewstats&"]').forEach(z)}function H(t){return!t.includes("#000099")}function X(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function F(t){const n=t.parentNode.parentNode.parentNode.cells[1]
if(s(l(n)).filter(H).length<g.maxGroupSizeToJoin){const s=$({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){S({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(r(X,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function I(){C("groups","joinAllGroupsUnderSize"),m('#pCC a[href*="confirmJoin"]').forEach(F)}function O(){const t=b('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(G(t),function(t){const s=L(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
h(s,I)}(s)),function(t){const s=L(t,"Fetch Group Stats")
h(s,R)}(s),g.subcmd2===j&&I()}function P(){w()||(v(!1).then(E),function(){const t=A("minGroupLevel")
t&&u(b("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),O(),function(){const t=m("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default P
//# sourceMappingURL=groups-961452e5.js.map