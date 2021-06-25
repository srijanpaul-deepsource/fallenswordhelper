import{c as t}from"./createInput-02002827.js"
import{a as n}from"./allthen-2719c129.js"
import{u as e,v as r,z as s,b as i,d as a,V as c,bD as o,H as l,bE as u,x as f,$ as m,bw as d,g as p,p as h,t as v,bF as b,I as g,i as _,a7 as j,b0 as N,T as y,Q as w,o as x,j as L}from"./calfSystem-bfc1f6c0.js"
import{g as k}from"./getProfile-84988fb5.js"
import{g as C}from"./guild-ba17fcb6.js"
import{d as E}from"./dataRows-7d251346.js"
import{i as P}from"./intValue-e4ce6bb5.js"
import{p as S}from"./playerName-3c8c8393.js"
import{c as F}from"./currentGuildId-92fe6d54.js"
import{o as T}from"./onlineDot-3ab91a4e.js"
import{a as H,g as I}from"./levelHighlight-3a72b3fa.js"
import{c as O}from"./createSpan-009a409b.js"
import{h as V}from"./hideElement-7486432a.js"
import{f as A}from"./functionPasses-bd6902f6.js"
import{i as B}from"./insertElementAfterBegin-8e0b3cdc.js"
import"./all-ceaf9817.js"
import"./cmdExport-f5d5b9e2.js"
import"./indexAjaxJson-bf365b96.js"
import"./asInt-95882709.js"
import"./valueText-ff818578.js"
import"./insertElementBefore-165ce171.js"
const D={}
function M(t){const n=t.match(u)
return c-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function W(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(n)}}function $(t){return{id:Number(t.cells[1].children[0].href.match(o)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:P(l(t.cells[4])),rank_name:l(t.cells[3])}}function z(t,n){return{rank_index:n,...W(t),...$(t)}}function G(t,n){const e=n.rank_name,r=n.rank_index,s=t.find((t=>t.name===e))
return s?s.members.push(n):t.push({id:r,name:e,members:[n]}),t}function J(t){return E(t.rows,5,1).map(z).reduce(G,[])}function Q(t){const n=r(t),e=s("pCC",n),c=i(a,e),o=c[c.length-1]
return o?{r:{ranks:J(o)},s:!0}:{s:!1}}function R(t){return D[t]||(D[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(Q)),D[t]}function U(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return k(t).then(q)}function X(t){return C({subcmd:"view",guild_id:t})}function Y(){return d({subcmd:"view"})}function Z(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function st(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let it,at
const ct=[()=>it,t=>j(t)||t!==at,(t,n)=>n.last_login>=c-604800,(t,n)=>n.virtual_level>=H(),(t,n)=>n.virtual_level<=I()]
function ot(t,n,e){_(t.rows[0],`<td>${T({last_login:e.last_login})}</td>`),function(t,n){return ct.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){V(lt)}function ft(t,n){ot(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function dt(t,n){const e=t.find(v(mt,n))
e&&ft(n,e)}function pt(t,n){n&&n.s&&w(n.r)&&n.r.length>0&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:c-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,s="id",r.filter(v(st,s,{}))).reduce(bt,[])
var r,s
t[1].forEach(v(dt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],m(X,R,n)).then(v(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==S()?(n=t[1],m(U,K,n)).then(v(pt,t)):m(Y).then(v(ht,t))
var n}function wt(){const t=p(a,h).slice(4).map(Z).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),lt=O({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),it=g("highlightPlayersNearMyLvl"),it&&(at=F()),wt()}const Lt=[()=>L(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(A)&&function(){const n=i("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
B(n,e),x(e,xt)}()}export default kt
//# sourceMappingURL=toprated-6de792ca.js.map
