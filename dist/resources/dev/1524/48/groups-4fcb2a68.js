import{c as t}from"./closestTr-74f72fa1.js"
import{c as s}from"./csvSplit-a090804f.js"
import{d as n,g as e}from"./getGroupStats-3550c890.js"
import{g as o}from"./getArrayByClassName-da632221.js"
import{I as a,ax as r,t as i,ay as c,B as l,C as u,i as d,a5 as f,h as p,au as h,o as m,E as b,c as g,bU as j,T as C,m as $,u as S,y as w,D as x}from"./calfSystem-01849445.js"
import{o as A}from"./onlineDot-807eb365.js"
import{g as v}from"./getMembrList-88b56641.js"
import{c as B}from"./createInput-a507cfd0.js"
import{h as T}from"./hideElement-3852cc2c.js"
import"./closest-3a475e96.js"
import"./chunk-7ed9b1d2.js"
import"./createButton-bde35073.js"
import"./createLi-90108ed9.js"
import"./createUl-fd16b713.js"
import"./openQuickBuffByName-a7eecc9f.js"
import"./fshOpen-b549d330.js"
import"./groupViewStats-4d61b315.js"
import"./intValue-9eb5015a.js"
import"./currentGuildId-8dd620e8.js"
import"./cmdExport-703b1590.js"
import"./indexAjaxJson-0f9790ea.js"
import"./idb-72291501.js"
const G=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],n=G.exec(u(s)),e=(new Date).getFullYear()
d(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const n=new Date
return n.setUTCDate(t[2]),n.setUTCMonth(h.indexOf(t[3])),n.setUTCFullYear(s),n.setUTCHours(t[4]),n.setUTCMinutes(t[5]),n}(n,e).toString().substr(0,21)}</span>`)}function y(t,s){return t[s]?t[s].level:0}function J(t,s,n){return y(t,n)-y(t,s)}function M(t,s){return t[s]?`<a href="${f}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,e){const o=e.cells[0]
l(function(t,s){const n=u(s.children[0])
return t[n]?`${A({last_login:t[n].last_login})}&nbsp;<a href="${f}${t[n].id}"><b>${n}</b></a> [${t[n].level}]`:`<b>${n}</b>`}(t,o),o)
const a=e.cells[1],r=function(t,n){const e=s(n.innerHTML)
return e.length>1&&e.sort(i(J,t)),e}(t,a)
!function(t,s){const e=s.filter(U)
e.length>0&&p(t,n(e)),d(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}(o,r),function(t,s,n){const e=n.map(i(M,t))
l(`<span>${e.join(", ")}</span>`,s)}(t,a,r),N(e)}function E(s){const n=a("betaOptIn")
n&&r("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(i(D,s)),n&&c("groups.doGroupPaint")}function L(t,s){const n=B({className:"custombutton",type:"button",value:s})
return d(t,"&nbsp;"),p(t,n),n}function k(t,s){const n=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,e=t.parentNode.parentNode.previousElementSibling
d(e,n)}function z(t){e(t.href).then(i(k,t))}function R(t){t.target.disabled=!0,b('#pCC a[href*="=viewstats&"]').forEach(z)}function H(t){return!t.includes("#000099")}function I(t){l('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function O(t){const n=t.parentNode.parentNode.parentNode.cells[1]
if(s(u(n)).filter(H).length<g.maxGroupSizeToJoin){const s=$({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){S({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(i(I,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function F(){C("groups","joinAllGroupsUnderSize"),b('#pCC a[href*="confirmJoin"]').forEach(O)}function P(t){const s=t.parentNode
g.enableMaxGroupSizeToJoin&&(T(t),function(t){const s=L(t,`Join All Groups < ${g.maxGroupSizeToJoin} Members`)
m(s,F)}(s)),function(t){const s=L(t,"Fetch Group Stats")
m(s,R)}(s),g.subcmd2===j&&F()}function X(){if(w())return
const t=x('#pCC input[value="Join All Available Groups"]')
t&&(v(!1).then(E),function(){const t=a("minGroupLevel")
t&&d(x("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),P(t),function(){const t=b("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default X
//# sourceMappingURL=groups-4fcb2a68.js.map
