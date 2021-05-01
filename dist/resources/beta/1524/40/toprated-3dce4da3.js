import{c as t}from"./createInput-c427de8f.js"
import{a as n}from"./allthen-7b3f20e7.js"
import{u as e,v as r,z as s,b as i,d as a,U as o,bw as c,H as l,bx as u,x as f,$ as m,bp as d,g as p,p as h,t as v,by as b,I as g,i as _,aP as j,aT as y,W as N,o as w,j as x,ag as L}from"./calfSystem-ab393688.js"
import{g as k}from"./getProfile-2959c6fc.js"
import{g as C}from"./guild-ac82eb09.js"
import{d as P}from"./dataRows-52e3a5bd.js"
import{i as E}from"./intValue-e485889b.js"
import{i as S}from"./isArray-4f4e9312.js"
import{p as T}from"./playerName-17cbc946.js"
import{c as F}from"./currentGuildId-0cbe4e98.js"
import{o as H}from"./onlineDot-c57058d1.js"
import{a as O,g as A}from"./levelHighlight-99f5b27b.js"
import{c as I}from"./createSpan-12f0c446.js"
import{h as W}from"./hideElement-512851a2.js"
import{f as B}from"./functionPasses-5a92ba59.js"
import{i as M}from"./insertElementAfterBegin-925be257.js"
import"./all-be4763d3.js"
import"./cmdExport-72a02624.js"
import"./indexAjaxJson-e927e360.js"
import"./valueText-d39824a3.js"
import"./insertElementBefore-6e80e0ff.js"
const U={}
function V(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function $(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:V(n)}}function z(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:E(l(t.cells[4])),rank_name:l(t.cells[3])}}function D(t,n){return{rank_index:n,...$(t),...z(t)}}function G(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function J(t){return P(t.rows,5,1).map(D).reduce(G,[])}function R(t){const n=r(t),e=s("pCC",n),o=i(a,e),c=o[o.length-1]
return c?{r:{ranks:J(c)},s:!0}:{s:!1}}function q(t){return U[t]||(U[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(R)),U[t]}function K(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function Q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function X(t){return k(t).then(Q)}function Y(t){return C({subcmd:"view",guild_id:t})}function Z(){return d({subcmd:"view"})}function tt(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function nt(t,n){return n[0]===t[2]}function et(t,n){const e=t.find(v(nt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function rt(t,n){return n[0]===t}function st(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(rt,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function it(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let at,ot
const ct=[()=>at,t=>j(t)||t!==ot,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=O(),(t,n)=>n.virtual_level<=A()]
function lt(t,n,e){_(t.rows[0],`<td>${H({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let ut
function ft(){W(ut)}function mt(t,n){lt(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function dt(t,n){return n.name===t[1]}function pt(t,n){const e=t.find(v(dt,n))
e&&mt(n,e)}function ht(t,n){n.s&&S(n.r)&&mt(t,n.r[0])}function vt(t,n){n.s&&mt(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function bt(t){return-1!==t[0]}function gt(t,n){return t.concat(n.members)}function _t(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(it,s,{}))).reduce(gt,[])
var r,s
t[1].forEach(v(pt,e))}function jt(t,n){n.s&&_t(t,n)}function yt(t){return(n=t[0],m(Y,q,n)).then(v(jt,t))
var n}function Nt(t){return-1===t[0]}function wt(t){return t[1]!==T()?(n=t[1],m(K,X,n)).then(v(ht,t)):m(Z).then(v(vt,t))
var n}function xt(){const t=p(a,h).slice(4).map(tt).reduce(et,[]).reduce(st,[])
let e=t.filter(bt).map(yt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(wt))),n(e,ft)}function Lt(t){var n
N("toprated","FindOnlinePlayers"),n=t.target,y(n),ut=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(ut,n),at=g("highlightPlayersNearMyLvl"),at&&(ot=F()),xt()}const kt=[()=>x(),()=>L(h),()=>L(h.children[0]),()=>L(h.children[0].rows),()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Ct(){kt.every(B)&&function(){const n=i("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
M(n,e),w(e,Lt)}()}export default Ct
//# sourceMappingURL=toprated-3dce4da3.js.map
