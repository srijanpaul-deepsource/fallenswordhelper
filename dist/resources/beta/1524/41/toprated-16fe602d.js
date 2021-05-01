import{c as t}from"./createInput-b30d8b81.js"
import{a as n}from"./allthen-13a2ca46.js"
import{u as e,v as r,z as s,b as a,d as i,U as o,bx as c,H as l,by as u,x as f,$ as d,bq as m,g as p,p as h,t as v,bz as b,I as g,i as _,aQ as j,aU as y,W as N,o as w,j as x,ag as L}from"./calfSystem-587dd8d3.js"
import{g as k}from"./getProfile-09bb87ab.js"
import{g as C}from"./guild-f587f40f.js"
import{d as E}from"./dataRows-31e1e8d2.js"
import{i as P}from"./intValue-af3aed3f.js"
import{i as S}from"./isArray-562fbe88.js"
import{p as F}from"./playerName-79fdbfb0.js"
import{c as H}from"./currentGuildId-f1814c84.js"
import{o as O}from"./onlineDot-50c6aee6.js"
import{a as T,g as A}from"./levelHighlight-f645e82d.js"
import{c as I}from"./createSpan-f508c88b.js"
import{h as U}from"./hideElement-9426b096.js"
import{f as W}from"./functionPasses-d13672a2.js"
import{i as z}from"./insertElementAfterBegin-95fb87ae.js"
import"./all-73a73e22.js"
import"./cmdExport-8bedb500.js"
import"./indexAjaxJson-a5185e0b.js"
import"./valueText-c4f1622c.js"
import"./insertElementBefore-2bf2da7f.js"
const B={}
function M(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function V(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(n)}}function $(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function q(t,n){return{rank_index:n,...V(t),...$(t)}}function D(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return E(t.rows,5,1).map(q).reduce(D,[])}function J(t){const n=r(t),e=s("pCC",n),o=a(i,e),c=o[o.length-1]
return c?{r:{ranks:G(c)},s:!0}:{s:!1}}function Q(t){return B[t]||(B[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),B[t]}function R(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function K(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function X(t){return k(t).then(K)}function Y(t){return C({subcmd:"view",guild_id:t})}function Z(){return m({subcmd:"view"})}function tt(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function nt(t,n){return n[0]===t[2]}function et(t,n){const e=t.find(v(nt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function rt(t,n){return n[0]===t}function st(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(rt,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function at(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,ot
const ct=[()=>it,t=>j(t)||t!==ot,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=T(),(t,n)=>n.virtual_level<=A()]
function lt(t,n,e){_(t.rows[0],`<td>${O({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let ut
function ft(){U(ut)}function dt(t,n){lt(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function pt(t,n){const e=t.find(v(mt,n))
e&&dt(n,e)}function ht(t,n){n.s&&S(n.r)&&dt(t,n.r[0])}function vt(t,n){n.s&&dt(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function bt(t){return-1!==t[0]}function gt(t,n){return t.concat(n.members)}function _t(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(at,s,{}))).reduce(gt,[])
var r,s
t[1].forEach(v(pt,e))}function jt(t,n){n.s&&_t(t,n)}function yt(t){return(n=t[0],d(Y,Q,n)).then(v(jt,t))
var n}function Nt(t){return-1===t[0]}function wt(t){return t[1]!==F()?(n=t[1],d(R,X,n)).then(v(ht,t)):d(Z).then(v(vt,t))
var n}function xt(){const t=p(i,h).slice(4).map(tt).reduce(et,[]).reduce(st,[])
let e=t.filter(bt).map(yt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(wt))),n(e,ft)}function Lt(t){var n
N("toprated","FindOnlinePlayers"),n=t.target,y(n),ut=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(ut,n),it=g("highlightPlayersNearMyLvl"),it&&(ot=H()),xt()}const kt=[()=>x(),()=>L(h),()=>L(h.children[0]),()=>L(h.children[0].rows),()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Ct(){kt.every(W)&&function(){const n=a("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
z(n,e),w(e,Lt)}()}export default Ct
//# sourceMappingURL=toprated-16fe602d.js.map
