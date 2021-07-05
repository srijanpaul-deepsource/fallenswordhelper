import{c as t}from"./createInput-48825441.js"
import{a as n}from"./allthen-f7cedfa7.js"
import{u as e,v as r,z as s,b as i,d as a,V as c,bE as o,H as l,bF as u,x as f,$ as d,bx as m,g as p,p as h,t as v,bG as b,I as g,i as _,a8 as j,b1 as N,T as y,Q as w,o as x,j as L}from"./calfSystem-9ab64478.js"
import{g as k}from"./getProfile-f5771e2a.js"
import{g as C}from"./guild-3e01f77e.js"
import{d as E}from"./dataRows-7f547576.js"
import{i as P}from"./intValue-f11572ef.js"
import{p as S}from"./playerName-b4c2ff3f.js"
import{c as F}from"./currentGuildId-c05147ac.js"
import{o as T}from"./onlineDot-1df6212d.js"
import{a as H,g as I}from"./levelHighlight-bb555b0d.js"
import{c as O}from"./createSpan-7ce539c8.js"
import{h as V}from"./hideElement-3021ab25.js"
import{f as A}from"./functionPasses-dfd0a9eb.js"
import{i as B}from"./insertElementAfterBegin-ff2c1da5.js"
import"./all-bb953856.js"
import"./cmdExport-22edc582.js"
import"./indexAjaxJson-b31a9d3b.js"
import"./asInt-61644392.js"
import"./valueText-99c24f27.js"
import"./insertElementBefore-c7161beb.js"
const G={}
function M(t){const n=t.match(u)
return c-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function W(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(n)}}function $(t){return{id:Number(t.cells[1].children[0].href.match(o)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function z(t,n){return{rank_index:n,...W(t),...$(t)}}function D(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function J(t){return E(t.rows,5,1).map(z).reduce(D,[])}function Q(t){const n=r(t),e=s("pCC",n),c=i(a,e),o=c[c.length-1]
return o?{r:{ranks:J(o)},s:!0}:{s:!1}}function R(t){return G[t]||(G[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(Q)),G[t]}function U(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return k(t).then(q)}function X(t){return C({subcmd:"view",guild_id:t})}function Y(){return m({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,at
const ct=[()=>it,t=>j(t)||t!==at,(t,n)=>n.last_login>=c-604800,(t,n)=>n.virtual_level>=H(),(t,n)=>n.virtual_level<=I()]
function ot(t,n,e){_(t.rows[0],`<td>${T({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){V(lt)}function ft(t,n){ot(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function dt(t,n){return n.name===t[1]}function mt(t,n){const e=t.find(v(dt,n))
e&&ft(n,e)}function pt(t,n){n&&n.s&&w(n.r)&&n.r.length>0&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:c-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(v(mt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],d(X,R,n)).then(v(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==S()?(n=t[1],d(U,K,n)).then(v(pt,t)):d(Y).then(v(ht,t))
var n}function wt(){const t=p(a,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),lt=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),it=g("highlightPlayersNearMyLvl"),it&&(at=F()),wt()}const Lt=[()=>L(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(A)&&function(){const n=i("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
B(n,e),x(e,xt)}()}export default kt
//# sourceMappingURL=toprated-a5043f93.js.map
