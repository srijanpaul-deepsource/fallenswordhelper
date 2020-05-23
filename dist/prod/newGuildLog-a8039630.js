import{w as t,v as e,bB as s,bC as n,z as i,ah as a,C as o,p as d,o as c,g as r,B as h,A as l,G as f,aj as u,t as p,n as g,x as b,R as m,D as k,K as w,i as y,bi as L,bk as R,a7 as j}from"./calfSystem-d06402b1.js"
import"./dataRows-48658c8b.js"
import{c as G}from"./createTable-ff37d5b3.js"
import{a as N}from"./all-0c4e78e9.js"
import{e as v}from"./eventHandler5-363cd6c2.js"
import{s as x}from"./selfIdIs-1775abee.js"
import{a as H}from"./addLogColoring-7de7f9ed.js"
import"./searchPlayerHref-6d476afa.js"
import{a as T}from"./addGuildLogWidgets-ef51d181.js"
function I(e){return t({cmd:"guild",subcmd:"log",page:e})}const P=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited ([,0-9]+) gold into the guild bank/,/deposited ([,0-9]+) FallenSword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled"],[/resulted in (.*) with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against the guild"],["bought the Titan Reward item","from your guild's contribution to the defeat of the titan","a 7 day cooldown has been activated on your guild for this titan"]]
function S(t,e){return s(e)?t.includes(e):e.test(t)}function A(t,s){return s.some(e(S,t))}function C(t){const s=P.findIndex(e(A,t))
return-1===s?0:s}const E='<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> '+`<a href="${n}" class="sendLink">`+'Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>',D=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],M=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]
let O,$,_,B,F,z,U,q,K={},V=[],W=!0
function Y(t,e){return[()=>1===z,()=>K.log,()=>K.log[0],()=>K.log[0][0],()=>t===K.log[0][0],()=>e===K.log[0][2]].every(j)}function J(){const t=w("width_full",F)
1===t.length&&function(t){const e=t[0],s=e.rows.length-1
for(let t=1;t<s;t+=2){const s=e.rows[t],n=L(s.cells[1]),i=R(n),a=s.cells[2].innerHTML
if(Y(i,a)){W=!1
break}V.push([100*z+t,i,n,a,C(a)])}}(t)}function Q(t){!function(t){F=b(t)
const e=m('input[name="page"]',F)
e&&(z=Number(e.value),U=Number(/\d+/.exec(k(e.parentNode))[0]),1===z&&(B=Math.min(U,_)),h(`Loading ${z} of ${B}...`,$))}(t),J()}function X(t){V.push([0].concat(t))}function Z(){u("fsh_guildLog",K)}function tt(t,e){return e[1]!==t}function et(t){return t.slice(1,5)}function st(t,e){const s=t.insertCell(-1)
o(e,s),s.className="row"}function nt(t){!function(t){const e=q.insertRow(-1)
t.push(e),K.checks[t[4]]||(e.className="fshHide"),st(e,'<span class="newGuildLog"></span>'),st(e,`<nobr>${t[2]}</nobr>`),st(e,t[3])}(t),function(t){const e=q.insertRow(-1)
t.push(e),K.checks[t[4]]||(e.className="fshHide")
const s=e.insertCell(-1)
s.className="divider",s.colSpan=3}(t)}function it(t){t.checked=K.checks[t.getAttribute("item")]}function at(){r("input",O).forEach(it),Z()}function ot(t,e){return t[0]-e[0]}function dt(){W&&V.sort(ot),h("Loading complete.",$),K.log=V.filter(e(tt,(new Date).setSeconds(0,0))).map(et),Z(),function(){q=G({id:"fshInjectHere",className:"width_full"}),y(q,'<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>'),V.forEach(nt)
const t=l("fshInjectHere")
d.replaceChild(q,t),H("myGuildLog",1),T()}()}function ct(t){Q(t),function(){const t=[]
if(W)for(let e=2;e<=B;e+=1)t.push(I(e).then(Q))
else K.log.forEach(X)
return N(t)}().then(dt)}function rt(t,e,s){s[4]===t&&(p(s[5],e),p(s[6],e))}function ht(t){const s=Number(t.getAttribute("item"))
K.checks[s]=!K.checks[s],Z(),V.forEach(e(rt,s,!K.checks[s]))}function lt(t){t&&t.classList&&t.classList.remove("fshHide")}function ft(t){lt(t[5]),lt(t[6])}function ut(){K.checks=D.slice(0),at(),V.forEach(ft)}function pt(t){g(t[5]),g(t[6])}function gt(){K.checks=M.slice(0),at(),V.forEach(pt)}function bt(){K.log=!1,Z(),h("Loading Page 1 ...",$),V=[],W=!0,o("",l("fshInjectHere")),I(1).then(ct)}function mt(t){!function(t){K=t||K,K.checks=K.checks||D.slice(0)}(t),o(E,d),O=l("fshNewGuildLog"),$=l("fshOutput"),c(O,v([[t=>"INPUT"===t.tagName,ht],[x("fshAll"),ut],[x("fshNone"),gt],[x("rfsh"),bt]])),at(),_=Number(f("newGuildLogHistoryPages")),B=_,I(1).then(ct)}export default function(){i()||a("fsh_guildLog").then(mt)}
//# sourceMappingURL=newGuildLog-a8039630.js.map
