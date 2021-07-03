import{u as e,C as t,D as n,bO as s,I as a,V as r,a0 as i,z as o,q as l,H as c,c as u,m as d,bS as b,bQ as f,B as p,bX as h,h as m,i as y,v as L,y as g,o as v}from"./calfSystem-01849445.js"
import{f as $}from"./functionPasses-8a4ab4e1.js"
import{s as w}from"./shouldBeArray-8db83b5e.js"
import{i as N}from"./insertElementAfterBegin-93df6fa4.js"
import{c as x}from"./createSpan-3a4a65d3.js"
import"./csvSplit-a090804f.js"
import"./insertElementBefore-5adb1609.js"
function R(t){return e({cmd:"bounty",page:t})}function k(e){return n("img",e[2]).title}function B(e){const n="A"===(s=e[0]).children[0].tagName?s.children[0]:s.children[0].children[0]
var s
return{target:t(n),link:n.href,lvl:t(n.nextSibling).replace(/[[|\]]/g,""),reward:t(e[2]),rewardType:k(e),posted:t(e[3]),xpLoss:t(e[4])}}let A,T,j,S,W,C
function H(e){return l(B(e),{progress:t(e[5])})}function M(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=H(e.rows[t].cells)
A.bounty.push(n)}}(e)}function P(){return A&&r-A.lastUpdate>S||T&&r-T.lastUpdate>S}function E(e){const t=e[6]
return"[n/a]"!==c(t)?t.children[0].children[0].getAttribute("onclick"):""}const O=[()=>C.includes("*"),e=>C.includes(e),(e,t)=>u.wantedGuildMembers&&"[n/a]"===c(t.cells[6])]
function U(e,t){var n;(function(e,t){return"[active]"!==c(t.cells[6])&&O.some((n=>n(e,t)))})(e,t)&&T.bounty.push((n=t.cells,l(B(n),{offerer:c(n[1].children[0].children[0]),tickets:c(n[5]),accept:E(n)})))}let X,q,G,z,D,I
function K(){return d({className:"minibox"})}function Q(){f("bountyList",A),p("",X)
const e=d({innerHTML:`<a href="${h}">Active Bounties</a> `})
G=x({className:"xxsLink",textContent:"Reset"}),m(e,G),m(X,e)
let t=""
if(0===A.bounty.length)t+='<div class="xsOrange">[No active bounties]</div>'
else for(let e=0;e<A.bounty.length;e+=1)t+=`<a href="${A.bounty[e].link}" class="tip-static" data-tipped="${n=A.bounty[e],`Level:  ${n.lvl}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Progress:  ${n.progress}`}">${A.bounty[e].target}</a><br>`
var n
y(X,t)}function V(){f("wantedList",T),p("",q)
const e=d({innerHTML:`<a href="${h}">Wanted Bounties</a> `})
z=x({className:"xxsLink",textContent:"Reset"}),m(e,z),m(q,e)
let t=""
if(0===T.bounty.length)t+='<div class="xsOrange">[No wanted bounties]</div>'
else for(let e=0;e<T.bounty.length;e+=1)t+=`${s=T.bounty[e],s.accept?`<span class="xsGreen" onclick="${s.accept}">[a]</span>&nbsp;`:""}<a class="xsKhaki tip-static" data-tipped="${n=T.bounty[e],`Target Level:  ${n.lvl}<br>Offerer: ${n.offerer}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Posted: ${n.posted}<br>Tickets Req.:  ${n.tickets}`}" href="${T.bounty[e].link}">${T.bounty[e].target}</a><br>`
var n,s
y(q,t)}function F(e){const t=n('#pCC input[name="page"]',e)
if(!t)return
D=Number(t.value),I=Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])
const s=o("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
s&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],s=c(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
U(s,n)}}(s)}function J(e){u.enableActiveBountyList&&!j&&(!function(e){const t=o("bounty-info",e)
if(!t)return
const n=t.parentNode.parentNode.previousElementSibling.children[0].children[0]
A={},A.bounty=[],A.isRefreshed=!0,A.lastUpdate=r,n&&M(n),j=!0}(e),Q())}function Y(e){const t=L(e)
J(t),u.enableWantedList&&(F(t),D<I?R(D+1).then(Y):V())}const Z=[()=>!A,()=>!T,()=>W]
function _(e,t){A=s("bountyList"),T=s("wantedList"),S=a("bountyListRefreshTime"),W=a("bwNeedsRefresh"),W||P()&&(W=!0),Z.some($)?(T={},T.bounty=[],T.isRefreshed=!0,T.lastUpdate=r,j=!1,C=w("wantedNames"),i("bwNeedsRefresh",!1),R(1).then(Y)):function(e,t){t&&(T.isRefreshed=!1,V()),e&&(A.isRefreshed=!1,Q())}(e,t)}function ee(e){e.target===G&&(f("bountyList",null),_(u.enableActiveBountyList,u.enableWantedList)),e.target===z&&(f("wantedList",null),_(u.enableActiveBountyList,u.enableWantedList))}function te(){g()||(u.enableWantedList&&(q=K(),N(b,q)),u.enableActiveBountyList&&(X=K(),N(b,X)),X&&v(X,ee),q&&v(q,ee),_(u.enableActiveBountyList,u.enableWantedList))}export default te
//# sourceMappingURL=activeWantedBounties-9154baad.js.map
