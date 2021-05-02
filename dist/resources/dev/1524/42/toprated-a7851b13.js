import{c as t}from"./createInput-4be43807.js"
import{a as n}from"./allthen-3a0631ad.js"
import{u as e,v as r,z as s,b as a,d as i,V as o,by as c,H as l,bz as u,x as f,$ as m,br as d,g as p,p as h,t as v,bA as b,I as g,i as _,aR as j,aX as N,X as y,R as w,o as x,j as L,ah as k}from"./calfSystem-4b6b865d.js"
import{g as C}from"./getProfile-827ab461.js"
import{g as E}from"./guild-91284196.js"
import{d as P}from"./dataRows-096bc406.js"
import{i as S}from"./intValue-9eb8a210.js"
import{p as F}from"./playerName-64ba6f1f.js"
import{c as H}from"./currentGuildId-830390c7.js"
import{o as O}from"./onlineDot-a8b83ea6.js"
import{a as T,g as A}from"./levelHighlight-a19a06aa.js"
import{c as I}from"./createSpan-dab32f7a.js"
import{h as R}from"./hideElement-30ade5f0.js"
import{f as V}from"./functionPasses-e2f17f43.js"
import{i as z}from"./insertElementAfterBegin-4ec7552e.js"
import"./all-9f53e8b3.js"
import"./cmdExport-bf6b936d.js"
import"./indexAjaxJson-9849e745.js"
import"./valueText-3b73f119.js"
import"./insertElementBefore-34b77984.js"
const B={}
function M(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function W(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(n)}}function X(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:S(l(t.cells[4])),rank_name:l(t.cells[3])}}function $(t,n){return{rank_index:n,...W(t),...X(t)}}function D(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return P(t.rows,5,1).map($).reduce(D,[])}function J(t){const n=r(t),e=s("pCC",n),o=a(i,e),c=o[o.length-1]
return c?{r:{ranks:G(c)},s:!0}:{s:!1}}function U(t){return B[t]||(B[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),B[t]}function q(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function K(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function Q(t){return C(t).then(K)}function Y(t){return E({subcmd:"view",guild_id:t})}function Z(){return d({subcmd:"view"})}function tt(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function nt(t,n){return n[0]===t[2]}function et(t,n){const e=t.find(v(nt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function rt(t,n){return n[0]===t}function st(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(rt,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function at(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,ot
const ct=[()=>it,t=>j(t)||t!==ot,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=T(),(t,n)=>n.virtual_level<=A()]
function lt(t,n,e){_(t.rows[0],`<td>${O({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let ut
function ft(){R(ut)}function mt(t,n){lt(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function dt(t,n){return n.name===t[1]}function pt(t,n){const e=t.find(v(dt,n))
e&&mt(n,e)}function ht(t,n){n.s&&w(n.r)&&mt(t,n.r[0])}function vt(t,n){n.s&&mt(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function bt(t){return-1!==t[0]}function gt(t,n){return t.concat(n.members)}function _t(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(at,s,{}))).reduce(gt,[])
var r,s
t[1].forEach(v(pt,e))}function jt(t,n){n.s&&_t(t,n)}function Nt(t){return(n=t[0],m(Y,U,n)).then(v(jt,t))
var n}function yt(t){return-1===t[0]}function wt(t){return t[1]!==F()?(n=t[1],m(q,Q,n)).then(v(ht,t)):m(Z).then(v(vt,t))
var n}function xt(){const t=p(i,h).slice(4).map(tt).reduce(et,[]).reduce(st,[])
let e=t.filter(bt).map(Nt)
t.find(yt)&&(e=e.concat(t.find(yt)[1].map(wt))),n(e,ft)}function Lt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),ut=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(ut,n),it=g("highlightPlayersNearMyLvl"),it&&(ot=H()),xt()}const kt=[()=>L(),()=>k(h),()=>k(h.children[0]),()=>k(h.children[0].rows),()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Ct(){kt.every(V)&&function(){const n=a("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
z(n,e),x(e,Lt)}()}export default Ct
//# sourceMappingURL=toprated-a7851b13.js.map
