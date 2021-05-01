import{c as t}from"./createInput-7c5a8b53.js"
import{a as n}from"./allthen-7b3f20e7.js"
import{u as e,v as r,z as s,b as a,d as i,U as o,bt as c,H as l,bu as u,x as f,$ as m,bn as d,g as p,p as h,t as v,bv as b,I as g,i as _,aN as j,aR as N,W as y,o as w,j as x,ag as L}from"./calfSystem-540da563.js"
import{g as k}from"./getProfile-b67e3e0c.js"
import{g as C}from"./guild-7417abb7.js"
import{d as E}from"./dataRows-72fe4f4b.js"
import{i as P}from"./intValue-e485889b.js"
import{i as S}from"./isArray-4f4e9312.js"
import{p as F}from"./playerName-c00ebc45.js"
import{c as H}from"./currentGuildId-dc83d308.js"
import{o as O}from"./onlineDot-87712eda.js"
import{a as T,g as A}from"./levelHighlight-b4a2e4a2.js"
import{c as I}from"./createSpan-8477dde4.js"
import{h as W}from"./hideElement-512851a2.js"
import{f as B}from"./functionPasses-5a92ba59.js"
import{i as M}from"./insertElementAfterBegin-873997cf.js"
import"./all-be4763d3.js"
import"./cmdExport-a330f27a.js"
import"./indexAjaxJson-8f18f901.js"
import"./valueText-87497ead.js"
import"./insertElementBefore-6e80e0ff.js"
const R={}
function U(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function V(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:U(n)}}function $(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function z(t,n){return{rank_index:n,...V(t),...$(t)}}function D(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return E(t.rows,5,1).map(z).reduce(D,[])}function J(t){const n=r(t),e=s("pCC",n),o=a(i,e),c=o[o.length-1]
return c?{r:{ranks:G(c)},s:!0}:{s:!1}}function q(t){return R[t]||(R[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),R[t]}function K(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function Q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function X(t){return k(t).then(Q)}function Y(t){return C({subcmd:"view",guild_id:t})}function Z(){return d({subcmd:"view"})}function tt(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function nt(t,n){return n[0]===t[2]}function et(t,n){const e=t.find(v(nt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function rt(t,n){return n[0]===t}function st(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(rt,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function at(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,ot
const ct=[()=>it,t=>j(t)||t!==ot,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=T(),(t,n)=>n.virtual_level<=A()]
function lt(t,n,e){_(t.rows[0],`<td>${O({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let ut
function ft(){W(ut)}function mt(t,n){lt(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function dt(t,n){return n.name===t[1]}function pt(t,n){const e=t.find(v(dt,n))
e&&mt(n,e)}function ht(t,n){n.s&&S(n.r)&&mt(t,n.r[0])}function vt(t,n){n.s&&mt(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function bt(t){return-1!==t[0]}function gt(t,n){return t.concat(n.members)}function _t(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(at,s,{}))).reduce(gt,[])
var r,s
t[1].forEach(v(pt,e))}function jt(t,n){n.s&&_t(t,n)}function Nt(t){return(n=t[0],m(Y,q,n)).then(v(jt,t))
var n}function yt(t){return-1===t[0]}function wt(t){return t[1]!==F()?(n=t[1],m(K,X,n)).then(v(ht,t)):m(Z).then(v(vt,t))
var n}function xt(){const t=p(i,h).slice(4).map(tt).reduce(et,[]).reduce(st,[])
let e=t.filter(bt).map(Nt)
t.find(yt)&&(e=e.concat(t.find(yt)[1].map(wt))),n(e,ft)}function Lt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),ut=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(ut,n),it=g("highlightPlayersNearMyLvl"),it&&(ot=H()),xt()}const kt=[()=>x(),()=>L(h),()=>L(h.children[0]),()=>L(h.children[0].rows),()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Ct(){kt.every(B)&&function(){const n=a("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
M(n,e),w(e,Lt)}()}export default Ct
//# sourceMappingURL=toprated-1ce8250a.js.map
