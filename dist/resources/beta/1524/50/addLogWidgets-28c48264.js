import{e as n,al as e,E as t,am as a,an as s,F as r,i as o,ao as c,H as i,x as l,u as f,t as u,v as m,z as d,C as p,S as h,$ as g,U as b,ap as w,D as y,aq as _,ac as v,h as $,m as C,A as P,I as k,a8 as L,ar as j,_ as T,y as G}from"./calfSystem-617f9a5d.js"
import{i as S}from"./insertHtmlAfterEnd-b1e65dcb.js"
import{c as A}from"./currentGuildId-3b40ad81.js"
import{g as E}from"./getMembrList-331ed151.js"
import{c as x}from"./closestTr-bf59743f.js"
import{a as I}from"./addCommas-b66fde4c.js"
import{p as R}from"./parseDateAsTimestamp-874ef6fd.js"
import{g as z,s as B}from"./idb-443c992c.js"
import{c as Y}from"./createStyle-b99b7d2e.js"
import{m as H}from"./myStats-a71050f1.js"
import{g as M}from"./addLogColoring-6257b1c4.js"
let N
async function D(t){return A()&&!N&&(N=async function(){return n(await E(!1)).filter((([,n])=>e(n))).map((([n])=>n))}()),(await N).includes(t)}const U=n=>[n,a(n.href,"target_username")],Z=async([n,e])=>[n,e,await D(e)]
function q(n,[e,t]){o(t.cells[1],`<font size="1"><br>[ ${((n,e)=>`<a${(n=>n?' class="pmIgnoreUrl"':"")(n)} href="${c}${i(e)}" data-tooltip="Add to Ignore List">Ignore</a>`)(n,e)} ]</font>`)}function F(n){return l({cmd:"combat",subcmd:"view",combat_id:n})}function W(n){return Number(n.getAttribute("background").match(/\/(\d+)/)[1])}function X(n,e){const t=new RegExp(`${e} = (\\d+)`)
return Number(n.match(t)[1])}const J=[[18,/(\w+)+ leeched the buff '([A-Za-z ]+)'./],[21,/(\w+)+ was mesmerized by Spell Breaker, losing the '([A-Za-z ]+)' buff./]]
function K(n){const e=J.map((([e,t])=>[e,n.match(t)])).find((([,n])=>n))
return e?{id:e[0],params:[e[1][1],e[1][2]]}:(h("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function O(n){return t("#specialsDiv",n).map(i).filter((n=>["leeched","Spell"].some((e=>n.includes(e))))).map(K)}function Q(n){return{id:W(n.rows[1].cells[0]),name:i(n.rows[0].cells[0])}}function V(n){return{id:W(n.rows[1].cells[2]),name:i(n.rows[0].cells[2])}}function nn(n,e){const t=e.children[0].rows[5].cells[0].children[0]
return{attacker:Q(t),defender:V(t),id:Number(n),specials:O(e)}}function en(n){const e=p(n.children[1])
return{gold_gain:X(e,"goldGain"),gold_stolen:X(e,"goldStolen"),pvp_prestige_gain:X(e,"prestigeGain"),pvp_rating_change:X(e,"pvpRatingChange"),winner:X(e,"winner"),xp_gain:X(e,"xpGain")}}function tn(n,e){return{...nn(n,e),...en(e)}}function an(n,e){const t=m(e)
return{r:tn(n,d("pCC",t)),s:!0}}function sn(n){return function(n){return f({cmd:"combat",subcmd:"view",combat_id:n})}(n).then(u(an,n))}let rn,on
function cn(n,[e,t]){return"lastCheck"===e||t.logTime&&t.logTime>n}async function ln(){const e=await z("fsh_pvpCombat")
if(!e)return{lastCheck:b}
const t=b-86400
return!e.lastCheck||e.lastCheck<t?function(e){const t=b-604800,a=n(e).filter(u(cn,t)),s={...w(a),lastCheck:b}
return B("fsh_pvpCombat",s),s}(e):e}async function fn(n,e,t){const a=await(s=e,g(F,sn,s))
var s
if(a&&a.s)return on||(on={...t}),on[e]={...a,logTime:R(i(n.cells[1]))/1e3},B("fsh_pvpCombat",on),a}async function un(n,e){rn||(rn=ln())
const t=await rn
return t[e]&&t[e].logTime?t[e]:fn(n,e,t)}const mn=n=>y(_,n),dn=([,n])=>!/\(Guild Conflict\)/.test(n),pn=async([n,e])=>[n,e,await un(n,/combat_id=(\d+)/.exec(e)[1])]
function hn(n,e,t){return 0!==n?`${e}:<span class="${t}">${I(n)}</span> `:""}function gn(n,e){return 18===e.id?`${n}<br><span class="fshRed fshBold">${e.params[0]} leeched the buff '${e.params[1]}'.</span>`:21===e.id?`${n}<br><span class="fshRed fshBold">${e.params[0]} was mesmerized by Spell Breaker, losing the '${e.params[1]}' buff.</span>`:n}function bn([n,e,t]){const[a,s]=function(n,e){return/You were victorious over/.test(e)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(e)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",p(n.cells[2].firstChild)]}(n,e),r=function(n,e){return hn(n.r.xp_gain,"XP stolen",e)+hn(n.r.gold_gain,"Gold lost",e)+hn(n.r.gold_stolen,"Gold stolen",e)+hn(n.r.pvp_prestige_gain,"Prestige gain",e)+hn(n.r.pvp_rating_change,"PvP change",e)+n.r.specials.reduce(gn,"")}(t,a)
n.cells[2].firstChild.remove(),v(n.cells[2],s),$(n.cells[2],C({innerHTML:r}))}const wn=([,,n])=>n&&n.s
const yn=n=>n.username
let _n
async function vn(){const n=await H(!1)
return{_allies:n._allies.map(yn),_enemies:n._enemies.map(yn)}}async function $n(n){return _n||(_n=vn()),(await _n)._allies.includes(n)}async function Cn(n){return _n||(_n=vn()),(await _n)._enemies.includes(n)}async function Pn(n){let e=""
const t=i(n),[a,s,r]=await Promise.all([D(t),$n(t),Cn(t)])
return a?e="guild":s?e="ally":r&&(e="enemy"),[`.fshPlayerColoring tr:nth-of-type(${x(n).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function kn(n,[e,t]){return n[t]?n[t].push(e):n[t]=[e],n}const Ln={guild:"green",ally:"blue",enemy:"red"}
function jn([n,e]){return`${e.join(", ")} { color: ${Ln[n]}; }`}const Tn=([,n])=>n
function Gn(e,t,a){const s=function(e){return n(e.filter(Tn).reduce(kn,{})).map(jn)}(t)
s.length&&(!function(n,e){const t=n.rows[0].cells[2]
t&&!e&&o(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(e,a),e.classList.add("fshPlayerColoring"),$(document.body,Y(s.join("\n"))))}let Sn
const An=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function En(n){return An.test(p(n.cells[2]))}function xn(n){const e=R(i(n.cells[1]))
e>Sn&&(T(L,e),Sn=e)}const In=[["addIgnoreLink",function(n,e){const a=t(r,n)
if(0===a.length)return
a.map((n=>[n,x(n)])).forEach((n=>q(e,n)))}],["colorPlayerNames",async function(n,e){const a=t(r,n)
if(!a.length)return
Gn(n,await Promise.all(a.map(Pn)),e)}],["addAttackLinkToLog",async function(n,e){const a=t('a[href*="=createsecure&"]',n)
if(!a.length)return
const r=a.map(U);(await Promise.all(r.map(Z))).filter((([,,n])=>!n)).forEach((n=>function(n,[e,t]){S(e,` | <a${(n=>n?' class="pmAttackUrl"':"")(n)} href="${s}${t}">Attack</a>`)}(e,n)))}],["changeButtonLabels",function(n){t('a[href*="=trade&"]',n).forEach((n=>P("Trade",n))),t('a[href*="=createsecure&"]',n).forEach((n=>P("ST",n)))}],["trackLadderReset",function(n){Sn=k(L),t(j,n).map(x).filter(En).forEach(xn)}],["showPvPSummaryInLog",async function(n){const e=t('a[href*="&combat_id="]',n)
if(0===e.length)return;(await Promise.all(function(n){return n.map(x).filter(mn).map((n=>[n,n.cells[2].innerHTML])).filter(dn).map(pn)}(e))).filter(wn).forEach(bn)}]]
function Rn(n,e,t){k(t[0])&&t[1](n,e)}function zn(n){if(G())return
const e=M()
e&&function(n,e){In.forEach(u(Rn,n,e))}(e,n)}export{zn as a}
//# sourceMappingURL=addLogWidgets-28c48264.js.map
