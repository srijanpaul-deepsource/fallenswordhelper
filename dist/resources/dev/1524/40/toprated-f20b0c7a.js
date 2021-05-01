import{c as t}from"./createInput-8ffbb09b.js"
import{a as n}from"./allthen-7b3f20e7.js"
import{u as e,v as r,z as s,b as a,d as i,V as o,bx as c,H as l,by as u,x as f,$ as d,bq as m,g as p,p as h,t as b,bz as v,I as g,i as _,aQ as j,aW as N,X as y,R as w,o as x,j as L,ah as k}from"./calfSystem-c464cb1d.js"
import{g as C}from"./getProfile-757b7e26.js"
import{g as E}from"./guild-fd341d08.js"
import{d as P}from"./dataRows-ddba9ba2.js"
import{i as S}from"./intValue-e485889b.js"
import{p as F}from"./playerName-c64906b6.js"
import{c as H}from"./currentGuildId-72946831.js"
import{o as O}from"./onlineDot-7b0d5ece.js"
import{a as T,g as I}from"./levelHighlight-1b92eaba.js"
import{c as V}from"./createSpan-79ff8b4f.js"
import{h as W}from"./hideElement-512851a2.js"
import{f as z}from"./functionPasses-5a92ba59.js"
import{i as A}from"./insertElementAfterBegin-1e95816f.js"
import"./all-be4763d3.js"
import"./cmdExport-5edaf067.js"
import"./indexAjaxJson-9476707b.js"
import"./valueText-96bc4024.js"
import"./insertElementBefore-6e80e0ff.js"
const B={}
function M(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function R(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(n)}}function $(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:S(l(t.cells[4])),rank_name:l(t.cells[3])}}function q(t,n){return{rank_index:n,...R(t),...$(t)}}function D(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return P(t.rows,5,1).map(q).reduce(D,[])}function J(t){const n=r(t),e=s("pCC",n),o=a(i,e),c=o[o.length-1]
return c?{r:{ranks:G(c)},s:!0}:{s:!1}}function Q(t){return B[t]||(B[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),B[t]}function U(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function X(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return C(t).then(X)}function Y(t){return E({subcmd:"view",guild_id:t})}function Z(){return m({subcmd:"view"})}function tt(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(v.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function nt(t,n){return n[0]===t[2]}function et(t,n){const e=t.find(b(nt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function rt(t,n){return n[0]===t}function st(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(b(rt,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function at(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,ot
const ct=[()=>it,t=>j(t)||t!==ot,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=T(),(t,n)=>n.virtual_level<=I()]
function lt(t,n,e){_(t.rows[0],`<td>${O({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let ut
function ft(){W(ut)}function dt(t,n){lt(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function pt(t,n){const e=t.find(b(mt,n))
e&&dt(n,e)}function ht(t,n){n.s&&w(n.r)&&dt(t,n.r[0])}function bt(t,n){n.s&&dt(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function gt(t,n){return t.concat(n.members)}function _t(t,n){const e=(r=n.r.ranks,s="id",r.filter(b(at,s,{}))).reduce(gt,[])
var r,s
t[1].forEach(b(pt,e))}function jt(t,n){n.s&&_t(t,n)}function Nt(t){return(n=t[0],d(Y,Q,n)).then(b(jt,t))
var n}function yt(t){return-1===t[0]}function wt(t){return t[1]!==F()?(n=t[1],d(U,K,n)).then(b(ht,t)):d(Z).then(b(bt,t))
var n}function xt(){const t=p(i,h).slice(4).map(tt).reduce(et,[]).reduce(st,[])
let e=t.filter(vt).map(Nt)
t.find(yt)&&(e=e.concat(t.find(yt)[1].map(wt))),n(e,ft)}function Lt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),ut=V({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(ut,n),it=g("highlightPlayersNearMyLvl"),it&&(ot=H()),xt()}const kt=[()=>L(),()=>k(h),()=>k(h.children[0]),()=>k(h.children[0].rows),()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Ct(){kt.every(z)&&function(){const n=a("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
A(n,e),x(e,Lt)}()}export default Ct
//# sourceMappingURL=toprated-f20b0c7a.js.map
