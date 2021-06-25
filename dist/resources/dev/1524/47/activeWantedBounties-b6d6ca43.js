import{u as e,C as t,D as n,bN as s,I as r,V as i,_ as a,z as o,q as c,H as l,c as u,m as b,bR as d,bP as f,B as p,bU as h,h as m,i as y,v as L,y as g,o as v}from"./calfSystem-bfc1f6c0.js"
import{f as $}from"./functionPasses-bd6902f6.js"
import{s as w}from"./shouldBeArray-47720a12.js"
import{i as N}from"./insertElementAfterBegin-8e0b3cdc.js"
import{c as x}from"./createSpan-009a409b.js"
import"./csvSplit-e3b3e000.js"
import"./insertElementBefore-165ce171.js"
function R(t){return e({cmd:"bounty",page:t})}function k(e){return n("img",e[2]).title}function B(e){const n="A"===(s=e[0]).children[0].tagName?s.children[0]:s.children[0].children[0]
var s
return{target:t(n),link:n.href,lvl:t(n.nextSibling).replace(/[[|\]]/g,""),reward:t(e[2]),rewardType:k(e),posted:t(e[3]),xpLoss:t(e[4])}}let A,T,j,P,S,W
function C(e){return c(B(e),{progress:t(e[5])})}function H(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=C(e.rows[t].cells)
A.bounty.push(n)}}(e)}function M(){return A&&i-A.lastUpdate>P||T&&i-T.lastUpdate>P}function U(e){const t=e[6]
return"[n/a]"!==l(t)?t.children[0].children[0].getAttribute("onclick"):""}const E=[()=>W.includes("*"),e=>W.includes(e),(e,t)=>u.wantedGuildMembers&&"[n/a]"===l(t.cells[6])]
function O(e,t){var n;(function(e,t){return"[active]"!==l(t.cells[6])&&E.some((n=>n(e,t)))})(e,t)&&T.bounty.push((n=t.cells,c(B(n),{offerer:l(n[1].children[0].children[0]),tickets:l(n[5]),accept:U(n)})))}let q,G,X,z,D,I
function K(){return b({className:"minibox"})}function V(){f("bountyList",A),p("",q)
const e=b({innerHTML:`<a href="${h}">Active Bounties</a> `})
X=x({className:"xxsLink",textContent:"Reset"}),m(e,X),m(q,e)
let t=""
if(0===A.bounty.length)t+='<div class="xsOrange">[No active bounties]</div>'
else for(let e=0;e<A.bounty.length;e+=1)t+=`<a href="${A.bounty[e].link}" class="tip-static" data-tipped="${n=A.bounty[e],`Level:  ${n.lvl}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Progress:  ${n.progress}`}">${A.bounty[e].target}</a><br>`
var n
y(q,t)}function _(){f("wantedList",T),p("",G)
const e=b({innerHTML:`<a href="${h}">Wanted Bounties</a> `})
z=x({className:"xxsLink",textContent:"Reset"}),m(e,z),m(G,e)
let t=""
if(0===T.bounty.length)t+='<div class="xsOrange">[No wanted bounties]</div>'
else for(let e=0;e<T.bounty.length;e+=1)t+=`${s=T.bounty[e],s.accept?`<span class="xsGreen" onclick="${s.accept}">[a]</span>&nbsp;`:""}<a class="xsKhaki tip-static" data-tipped="${n=T.bounty[e],`Target Level:  ${n.lvl}<br>Offerer: ${n.offerer}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Posted: ${n.posted}<br>Tickets Req.:  ${n.tickets}`}" href="${T.bounty[e].link}">${T.bounty[e].target}</a><br>`
var n,s
y(G,t)}function F(e){const t=n('#pCC input[name="page"]',e)
if(!t)return
D=Number(t.value),I=Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])
const s=o("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
s&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],s=l(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
O(s,n)}}(s)}function J(e){u.enableActiveBountyList&&!j&&(!function(e){const t=o("bounty-info",e)
if(!t)return
const n=t.parentNode.parentNode.previousElementSibling.children[0].children[0]
A={},A.bounty=[],A.isRefreshed=!0,A.lastUpdate=i,n&&H(n),j=!0}(e),V())}function Q(e){const t=L(e)
J(t),u.enableWantedList&&(F(t),D<I?R(D+1).then(Q):_())}const Y=[()=>!A,()=>!T,()=>S]
function Z(e,t){A=s("bountyList"),T=s("wantedList"),P=r("bountyListRefreshTime"),S=r("bwNeedsRefresh"),S||M()&&(S=!0),Y.some($)?(T={},T.bounty=[],T.isRefreshed=!0,T.lastUpdate=i,j=!1,W=w("wantedNames"),a("bwNeedsRefresh",!1),R(1).then(Q)):function(e,t){t&&(T.isRefreshed=!1,_()),e&&(A.isRefreshed=!1,V())}(e,t)}function ee(e){e.target===X&&(f("bountyList",null),Z(u.enableActiveBountyList,u.enableWantedList)),e.target===z&&(f("wantedList",null),Z(u.enableActiveBountyList,u.enableWantedList))}function te(){g()||(u.enableWantedList&&(G=K(),N(d,G)),u.enableActiveBountyList&&(q=K(),N(d,q)),q&&v(q,ee),G&&v(G,ee),Z(u.enableActiveBountyList,u.enableWantedList))}export default te
//# sourceMappingURL=activeWantedBounties-b6d6ca43.js.map
