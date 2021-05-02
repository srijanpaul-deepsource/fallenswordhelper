import{c as t}from"./createInput-ff6bf89d.js"
import{a as n}from"./allthen-3a0631ad.js"
import{u as e,v as r,z as s,b as a,d as i,U as o,bu as c,H as l,bv as u,x as f,$ as d,bo as m,g as p,p as h,t as v,bw as b,I as g,i as _,aO as j,aS as N,W as y,o as w,j as x,ag as L}from"./calfSystem-15b00143.js"
import{g as k}from"./getProfile-a6dabd90.js"
import{g as C}from"./guild-d096f588.js"
import{d as S}from"./dataRows-89a16eef.js"
import{i as E}from"./intValue-9eb8a210.js"
import{i as P}from"./isArray-68a41fd5.js"
import{p as O}from"./playerName-41a4004e.js"
import{c as F}from"./currentGuildId-ad15ffa8.js"
import{o as H}from"./onlineDot-4297be27.js"
import{a as T,g as A}from"./levelHighlight-7695742b.js"
import{c as I}from"./createSpan-2658e7cc.js"
import{h as W}from"./hideElement-30ade5f0.js"
import{f as B}from"./functionPasses-e2f17f43.js"
import{i as M}from"./insertElementAfterBegin-6888d6e1.js"
import"./all-9f53e8b3.js"
import"./cmdExport-22e87ca6.js"
import"./indexAjaxJson-430cd162.js"
import"./valueText-7a9b207a.js"
import"./insertElementBefore-34b77984.js"
const U={}
function V(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function $(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:V(n)}}function z(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:E(l(t.cells[4])),rank_name:l(t.cells[3])}}function D(t,n){return{rank_index:n,...$(t),...z(t)}}function G(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function J(t){return S(t.rows,5,1).map(D).reduce(G,[])}function R(t){const n=r(t),e=s("pCC",n),o=a(i,e),c=o[o.length-1]
return c?{r:{ranks:J(c)},s:!0}:{s:!1}}function q(t){return U[t]||(U[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(R)),U[t]}function K(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function Q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function X(t){return k(t).then(Q)}function Y(t){return C({subcmd:"view",guild_id:t})}function Z(){return m({subcmd:"view"})}function tt(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function nt(t,n){return n[0]===t[2]}function et(t,n){const e=t.find(v(nt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function rt(t,n){return n[0]===t}function st(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(rt,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function at(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,ot
const ct=[()=>it,t=>j(t)||t!==ot,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=T(),(t,n)=>n.virtual_level<=A()]
function lt(t,n,e){_(t.rows[0],`<td>${H({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let ut
function ft(){W(ut)}function dt(t,n){lt(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function pt(t,n){const e=t.find(v(mt,n))
e&&dt(n,e)}function ht(t,n){n.s&&P(n.r)&&dt(t,n.r[0])}function vt(t,n){n.s&&dt(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function bt(t){return-1!==t[0]}function gt(t,n){return t.concat(n.members)}function _t(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(at,s,{}))).reduce(gt,[])
var r,s
t[1].forEach(v(pt,e))}function jt(t,n){n.s&&_t(t,n)}function Nt(t){return(n=t[0],d(Y,q,n)).then(v(jt,t))
var n}function yt(t){return-1===t[0]}function wt(t){return t[1]!==O()?(n=t[1],d(K,X,n)).then(v(ht,t)):d(Z).then(v(vt,t))
var n}function xt(){const t=p(i,h).slice(4).map(tt).reduce(et,[]).reduce(st,[])
let e=t.filter(bt).map(Nt)
t.find(yt)&&(e=e.concat(t.find(yt)[1].map(wt))),n(e,ft)}function Lt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),ut=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(ut,n),it=g("highlightPlayersNearMyLvl"),it&&(ot=F()),xt()}const kt=[()=>x(),()=>L(h),()=>L(h.children[0]),()=>L(h.children[0].rows),()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Ct(){kt.every(B)&&function(){const n=a("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
M(n,e),w(e,Lt)}()}export default Ct
//# sourceMappingURL=toprated-458c20de.js.map
