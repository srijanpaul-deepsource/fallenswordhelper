import{c as t}from"./createInput-b54e35e9.js"
import{a as n}from"./allthen-f7cedfa7.js"
import{u as e,v as r,z as s,b as i,d as a,U as o,bC as c,H as l,bD as u,x as d,$ as f,bu as m,g as p,p as h,t as b,bE as v,I as g,i as _,a6 as j,aY as N,S as y,o as w,j as x}from"./calfSystem-2172498b.js"
import{g as C}from"./getProfile-8db6fc9e.js"
import{g as L}from"./guild-8b9b510e.js"
import{d as k}from"./dataRows-535168ee.js"
import{i as E}from"./intValue-f11572ef.js"
import{i as S}from"./isArray-be6d57af.js"
import{p as P}from"./playerName-a5989c6d.js"
import{c as F}from"./currentGuildId-7d9d343b.js"
import{o as H}from"./onlineDot-06d8c9a0.js"
import{a as I,g as O}from"./levelHighlight-58b71263.js"
import{c as T}from"./createSpan-b3281070.js"
import{h as A}from"./hideElement-3021ab25.js"
import{f as B}from"./functionPasses-dfd0a9eb.js"
import{i as D}from"./insertElementAfterBegin-538ae729.js"
import"./all-bb953856.js"
import"./cmdExport-b6bb85ab.js"
import"./indexAjaxJson-b5d4e9de.js"
import"./asInt-c78388ed.js"
import"./valueText-c5773d3b.js"
import"./insertElementBefore-c7161beb.js"
const M={}
function U(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function V(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:U(n)}}function W(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:E(l(t.cells[4])),rank_name:l(t.cells[3])}}function $(t,n){return{rank_index:n,...V(t),...W(t)}}function z(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return k(t.rows,5,1).map($).reduce(z,[])}function J(t){const n=r(t),e=s("pCC",n),o=i(a,e),c=o[o.length-1]
return c?{r:{ranks:G(c)},s:!0}:{s:!1}}function R(t){return M[t]||(M[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),M[t]}function Y(t){return d({cmd:"findplayer",subcmd:"view",search_username:t})}function q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return C(t).then(q)}function Q(t){return L({subcmd:"view",guild_id:t})}function X(){return m({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(v.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(b(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(b(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,at
const ot=[()=>it,t=>j(t)||t!==at,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=I(),(t,n)=>n.virtual_level<=O()]
function ct(t,n,e){_(t.rows[0],`<td>${H({last_login:e.last_login})}</td>`),function(t,n){return ot.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){A(lt)}function dt(t,n){ct(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function ft(t,n){return n.name===t[1]}function mt(t,n){const e=t.find(b(ft,n))
e&&dt(n,e)}function pt(t,n){n&&n.s&&S(n.r)&&n.r.length>0&&dt(t,n.r[0])}function ht(t,n){n.s&&dt(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function bt(t){return-1!==t[0]}function vt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(b(st,s,{}))).reduce(vt,[])
var r,s
t[1].forEach(b(mt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],f(Q,R,n)).then(b(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==P()?(n=t[1],f(Y,K,n)).then(b(pt,t)):f(X).then(b(ht,t))
var n}function wt(){const t=p(a,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(bt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),lt=T({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),it=g("highlightPlayersNearMyLvl"),it&&(at=F()),wt()}const Ct=[()=>x(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Lt(){Ct.every(B)&&function(){const n=i("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
D(n,e),w(e,xt)}()}export default Lt
//# sourceMappingURL=toprated-5b8aeb20.js.map
