import{e as n,am as e,E as a,an as t,ao as s,F as r,i as o,ap as c,H as i,x as l,u as f,t as u,v as m,z as d,C as p,T as h,$ as g,V as b,aq as w,D as y,ar as _,ad as v,h as $,m as C,A as P,I as k,a9 as L,as as j,a0 as T,y as G}from"./calfSystem-9ab64478.js"
import{i as A}from"./insertHtmlAfterEnd-1cda96b6.js"
import{c as E}from"./currentGuildId-c05147ac.js"
import{g as S}from"./getMembrList-ad7be9d5.js"
import{c as x}from"./closestTr-e99b6a01.js"
import{a as I}from"./addCommas-1f67a5b9.js"
import{p as R}from"./parseDateAsTimestamp-caf8e72d.js"
import{g as z,s as B}from"./idb-9da90398.js"
import{c as Y}from"./createStyle-a3ebff9c.js"
import{m as H}from"./myStats-eafccf98.js"
import{g as M}from"./addLogColoring-865f5d3e.js"
let N
async function D(a){return E()&&!N&&(N=async function(){return n(await S(!1)).filter((([,n])=>e(n))).map((([n])=>n))}()),(await N).includes(a)}const U=n=>[n,t(n.href,"target_username")],Z=async([n,e])=>[n,e,await D(e)]
function q(n,[e,a]){o(a.cells[1],`<font size="1"><br>[ ${((n,e)=>`<a${(n=>n?' class="pmIgnoreUrl"':"")(n)} href="${c}${i(e)}" data-tooltip="Add to Ignore List">Ignore</a>`)(n,e)} ]</font>`)}function F(n){return l({cmd:"combat",subcmd:"view",combat_id:n})}function V(n){return Number(n.getAttribute("background").match(/\/(\d+)/)[1])}function W(n,e){const a=new RegExp(`${e} = (\\d+)`)
return Number(n.match(a)[1])}const X=[[18,/(\w+)+ leeched the buff '([A-Za-z ]+)'./],[21,/(\w+)+ was mesmerized by Spell Breaker, losing the '([A-Za-z ]+)' buff./]]
function J(n){const e=X.map((([e,a])=>[e,n.match(a)])).find((([,n])=>n))
return e?{id:e[0],params:[e[1][1],e[1][2]]}:(h("Logs","Missing PvP Special",n),{id:-1,params:["-1","-1"]})}function K(n){return a("#specialsDiv",n).map(i).filter((n=>["leeched","Spell"].some((e=>n.includes(e))))).map(J)}function O(n){return{id:V(n.rows[1].cells[0]),name:i(n.rows[0].cells[0])}}function Q(n){return{id:V(n.rows[1].cells[2]),name:i(n.rows[0].cells[2])}}function nn(n,e){const a=e.children[0].rows[5].cells[0].children[0]
return{attacker:O(a),defender:Q(a),id:Number(n),specials:K(e)}}function en(n){const e=p(n.children[1])
return{gold_gain:W(e,"goldGain"),gold_stolen:W(e,"goldStolen"),pvp_prestige_gain:W(e,"prestigeGain"),pvp_rating_change:W(e,"pvpRatingChange"),winner:W(e,"winner"),xp_gain:W(e,"xpGain")}}function an(n,e){return{...nn(n,e),...en(e)}}function tn(n,e){const a=m(e)
return{r:an(n,d("pCC",a)),s:!0}}function sn(n){return function(n){return f({cmd:"combat",subcmd:"view",combat_id:n})}(n).then(u(tn,n))}let rn,on
function cn(n,[e,a]){return"lastCheck"===e||a.logTime&&a.logTime>n}async function ln(){const e=await z("fsh_pvpCombat")
if(!e)return{lastCheck:b}
const a=b-86400
return!e.lastCheck||e.lastCheck<a?function(e){const a=b-604800,t=n(e).filter(u(cn,a)),s={...w(t),lastCheck:b}
return B("fsh_pvpCombat",s),s}(e):e}async function fn(n,e,a){const t=await(s=e,g(F,sn,s))
var s
if(t&&t.s)return on||(on={...a}),on[e]={...t,logTime:R(i(n.cells[1]))/1e3},B("fsh_pvpCombat",on),t}async function un(n,e){rn||(rn=ln())
const a=await rn
return a[e]&&a[e].logTime?a[e]:fn(n,e,a)}const mn=n=>y(_,n),dn=([,n])=>!/\(Guild Conflict\)/.test(n),pn=async([n,e])=>[n,e,await un(n,/combat_id=(\d+)/.exec(e)[1])]
function hn(n,e,a){return 0!==n?`${e}:<span class="${a}">${I(n)}</span> `:""}function gn(n,e){return 18===e.id?`${n}<br><span class="fshRed fshBold">${e.params[0]} leeched the buff '${e.params[1]}'.</span>`:21===e.id?`${n}<br><span class="fshRed fshBold">${e.params[0]} was mesmerized by Spell Breaker, losing the '${e.params[1]}' buff.</span>`:n}function bn([n,e,a]){const[t,s]=function(n,e){return/You were victorious over/.test(e)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(e)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",p(n.cells[2].firstChild)]}(n,e),r=function(n,e){return hn(n.r.xp_gain,"XP stolen",e)+hn(n.r.gold_gain,"Gold lost",e)+hn(n.r.gold_stolen,"Gold stolen",e)+hn(n.r.pvp_prestige_gain,"Prestige gain",e)+hn(n.r.pvp_rating_change,"PvP change",e)+n.r.specials.reduce(gn,"")}(a,t)
n.cells[2].firstChild.remove(),v(n.cells[2],s),$(n.cells[2],C({innerHTML:r}))}const wn=([,,n])=>n&&n.s
const yn=n=>n.username
let _n
async function vn(){const n=await H(!1)
return{_allies:n._allies.map(yn),_enemies:n._enemies.map(yn)}}async function $n(n){return _n||(_n=vn()),(await _n)._allies.includes(n)}async function Cn(n){return _n||(_n=vn()),(await _n)._enemies.includes(n)}async function Pn(n){let e=""
const a=i(n),[t,s,r]=await Promise.all([D(a),$n(a),Cn(a)])
return t?e="guild":s?e="ally":r&&(e="enemy"),[`.fshPlayerColoring tr:nth-of-type(${x(n).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,e]}function kn(n,[e,a]){return n[a]?n[a].push(e):n[a]=[e],n}const Ln={guild:"green",ally:"blue",enemy:"red"}
function jn([n,e]){return`${e.join(", ")} { color: ${Ln[n]}; }`}const Tn=([,n])=>n
function Gn(e,a,t){const s=function(e){return n(e.filter(Tn).reduce(kn,{})).map(jn)}(a)
s.length&&(!function(n,e){const a=n.rows[0].cells[2]
a&&!e&&o(a,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(e,t),e.classList.add("fshPlayerColoring"),$(document.body,Y(s.join("\n"))))}let An
const En=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Sn(n){return En.test(p(n.cells[2]))}function xn(n){const e=R(i(n.cells[1]))
e>An&&(T(L,e),An=e)}const In=[["addIgnoreLink",function(n,e){const t=a(r,n)
if(0===t.length)return
t.map((n=>[n,x(n)])).forEach((n=>q(e,n)))}],["colorPlayerNames",async function(n,e){const t=a(r,n)
if(!t.length)return
Gn(n,await Promise.all(t.map(Pn)),e)}],["addAttackLinkToLog",async function(n,e){const t=a('a[href*="=createsecure&"]',n)
if(!t.length)return
const r=t.map(U);(await Promise.all(r.map(Z))).filter((([,,n])=>!n)).forEach((n=>function(n,[e,a]){A(e,` | <a${(n=>n?' class="pmAttackUrl"':"")(n)} href="${s}${a}">Attack</a>`)}(e,n)))}],["changeButtonLabels",function(n){a('a[href*="=trade&"]',n).forEach((n=>P("Trade",n))),a('a[href*="=createsecure&"]',n).forEach((n=>P("ST",n)))}],["trackLadderReset",function(n){An=k(L),a(j,n).map(x).filter(Sn).forEach(xn)}],["showPvPSummaryInLog",async function(n){const e=a('a[href*="&combat_id="]',n)
if(0===e.length)return;(await Promise.all(function(n){return n.map(x).filter(mn).map((n=>[n,n.cells[2].innerHTML])).filter(dn).map(pn)}(e))).filter(wn).forEach(bn)}]]
function Rn(n,e,a){k(a[0])&&a[1](n,e)}function zn(n){if(G())return
const e=M()
e&&function(n,e){In.forEach(u(Rn,n,e))}(e,n)}export{zn as a}
//# sourceMappingURL=addLogWidgets-14f62f53.js.map
