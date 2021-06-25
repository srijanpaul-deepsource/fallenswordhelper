import{c as t}from"./closestTr-c2f47269.js"
import{c as s}from"./csvSplit-e3b3e000.js"
import{d as e,g as n}from"./getGroupStats-93110ece.js"
import{g as o}from"./getArrayByClassName-2fc630c7.js"
import{aw as a,t as r,ax as i,B as c,C as l,i as u,a4 as f,h as p,at as d,o as h,E as m,c as b,c3 as g,T as j,m as C,u as $,y as S,D as w,I as x}from"./calfSystem-bfc1f6c0.js"
import{o as A}from"./onlineDot-3ab91a4e.js"
import{g as v}from"./getMembrList-c0254b8a.js"
import{c as B}from"./createInput-02002827.js"
import{h as T}from"./hideElement-7486432a.js"
import"./closest-4542e515.js"
import"./chunk-c0e724c2.js"
import"./createButton-ae2671d1.js"
import"./createLi-5893f8ef.js"
import"./createUl-beea3df2.js"
import"./openQuickBuffByName-3a3b6dee.js"
import"./fshOpen-a2455e89.js"
import"./groupViewStats-13057ed4.js"
import"./intValue-e4ce6bb5.js"
import"./currentGuildId-92fe6d54.js"
import"./cmdExport-f5d5b9e2.js"
import"./indexAjaxJson-bf365b96.js"
import"./idb-d8a4a427.js"
const G=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],e=G.exec(l(s)),n=(new Date).getFullYear()
u(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(d.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function y(t,s){return t[s]?t[s].level:0}function J(t,s,e){return y(t,e)-y(t,s)}function M(t,s){return t[s]?`<a href="${f}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,n){const o=n.cells[0]
c(function(t,s){const e=l(s.children[0])
return t[e]?`${A({last_login:t[e].last_login})}&nbsp;<a href="${f}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const a=n.cells[1],i=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(r(J,t)),n}(t,a)
!function(t,s){const n=s.filter(U)
n.length>0&&p(t,e(n)),u(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,i),function(t,s,e){const n=e.map(r(M,t))
c(`<span>${n.join(", ")}</span>`,s)}(t,a,i),N(n)}function E(s){a("groups.doGroupPaint"),o("group-action-container").map((s=>t(s))).forEach(r(D,s)),i("groups.doGroupPaint")}function L(t,s){const e=B({className:"custombutton",type:"button",value:s})
return u(t,"&nbsp;"),p(t,e),e}function k(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
u(n,e)}function z(t){n(t.href).then(r(k,t))}function R(t){t.target.disabled=!0,m('#pCC a[href*="=viewstats&"]').forEach(z)}function H(t){return!t.includes("#000099")}function F(t){c('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function I(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(l(e)).filter(H).length<b.maxGroupSizeToJoin){const s=C({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){$({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(r(F,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function O(){j("groups","joinAllGroupsUnderSize"),m('#pCC a[href*="confirmJoin"]').forEach(I)}function P(t){const s=t.parentNode
b.enableMaxGroupSizeToJoin&&(T(t),function(t){const s=L(t,`Join All Groups < ${b.maxGroupSizeToJoin} Members`)
h(s,O)}(s)),function(t){const s=L(t,"Fetch Group Stats")
h(s,R)}(s),b.subcmd2===g&&O()}function X(){if(S())return
const t=w('#pCC input[value="Join All Available Groups"]')
t&&(v(!1).then(E),function(){const t=x("minGroupLevel")
t&&u(w("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),P(t),function(){const t=m("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default X
//# sourceMappingURL=groups-0ac316db.js.map
