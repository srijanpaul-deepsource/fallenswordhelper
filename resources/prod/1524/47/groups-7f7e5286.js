import{c as t}from"./closestTr-c667a8e5.js"
import{c as s}from"./csvSplit-e3b3e000.js"
import{d as e,g as n}from"./getGroupStats-c59fd5fc.js"
import{g as o}from"./getArrayByClassName-44af3bfd.js"
import{t as a,B as r,C as i,i as c,a3 as l,h as f,as as u,o as p,E as d,c as h,b$ as m,S as b,m as g,u as j,y as C,D as $,I as S}from"./calfSystem-a2fd9017.js"
import{o as w}from"./onlineDot-20a56643.js"
import{g as A}from"./getMembrList-be74c9ce.js"
import{c as x}from"./createInput-ca1e27eb.js"
import{h as v}from"./hideElement-7486432a.js"
import"./closest-4542e515.js"
import"./chunk-c0e724c2.js"
import"./createButton-66938c57.js"
import"./createLi-053a1346.js"
import"./createUl-2391781a.js"
import"./openQuickBuffByName-713316ef.js"
import"./fshOpen-a2455e89.js"
import"./groupViewStats-84ab9158.js"
import"./intValue-e4ce6bb5.js"
import"./currentGuildId-871ea013.js"
import"./cmdExport-84fee8d4.js"
import"./indexAjaxJson-9619f1ba.js"
import"./idb-09e8fa3a.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function T(t){const s=t.cells[3],e=B.exec(i(s)),n=(new Date).getFullYear()
c(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(u.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function N(t,s){return t[s]?t[s].level:0}function G(t,s,e){return N(t,e)-N(t,s)}function y(t,s){return t[s]?`<a href="${l}${t[s].id}">${s}</a>`:s}function J(t){return"[none]"!==t&&-1===t.indexOf("<font")}function M(t,n){const o=n.cells[0]
r(function(t,s){const e=i(s.children[0])
return t[e]?`${w({last_login:t[e].last_login})}&nbsp;<a href="${l}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,o),o)
const u=n.cells[1],p=function(t,e){const n=s(e.innerHTML)
return n.length>1&&n.sort(a(G,t)),n}(t,u)
!function(t,s){const n=s.filter(J)
n.length>0&&f(t,e(n)),c(t,`<span class="fshXSmall">Members: ${n.length}</span>`)}(o,p),function(t,s,e){const n=e.map(a(y,t))
r(`<span>${n.join(", ")}</span>`,s)}(t,u,p),T(n)}function U(s){o("group-action-container").map((s=>t(s))).forEach(a(M,s))}function D(t,s){const e=x({className:"custombutton",type:"button",value:s})
return c(t,"&nbsp;"),f(t,e),e}function E(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
c(n,e)}function L(t){n(t.href).then(a(E,t))}function k(t){t.target.disabled=!0,d('#pCC a[href*="=viewstats&"]').forEach(L)}function z(t){return!t.includes("#000099")}function R(t){r('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(s(i(e)).filter(z).length<h.maxGroupSizeToJoin){const s=g({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){j({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(a(R,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function F(){b("groups","joinAllGroupsUnderSize"),d('#pCC a[href*="confirmJoin"]').forEach(H)}function I(t){const s=t.parentNode
h.enableMaxGroupSizeToJoin&&(v(t),function(t){const s=D(t,`Join All Groups < ${h.maxGroupSizeToJoin} Members`)
p(s,F)}(s)),function(t){const s=D(t,"Fetch Group Stats")
p(s,k)}(s),h.subcmd2===m&&F()}function O(){if(C())return
const t=$('#pCC input[value="Join All Available Groups"]')
t&&(A(!1).then(U),function(){const t=S("minGroupLevel")
t&&c($("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),I(t),function(){const t=d("#pCC td.header-dark")
t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}())}export default O
//# sourceMappingURL=groups-7f7e5286.js.map
