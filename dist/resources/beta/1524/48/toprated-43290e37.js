import{c as t}from"./createInput-75b7145b.js"
import{a as n}from"./allthen-d828bb84.js"
import{u as e,v as r,z as a,b as s,d as i,U as o,bD as c,H as l,bE as u,x as f,$ as m,bv as d,g as p,p as h,t as v,bF as b,I as g,i as _,a7 as j,aZ as N,S as y,o as w,j as x}from"./calfSystem-8af1dca2.js"
import{g as L}from"./getProfile-9774b117.js"
import{g as k}from"./guild-08a09d6e.js"
import{d as C}from"./dataRows-a0ea22f1.js"
import{i as E}from"./intValue-9eb5015a.js"
import{i as S}from"./isArray-f9d2634e.js"
import{p as P}from"./playerName-7218c72a.js"
import{c as F}from"./currentGuildId-ae75dbfc.js"
import{o as H}from"./onlineDot-bb9216af.js"
import{a as I,g as O}from"./levelHighlight-823ca554.js"
import{c as T}from"./createSpan-0e686680.js"
import{h as A}from"./hideElement-3852cc2c.js"
import{f as B}from"./functionPasses-8a4ab4e1.js"
import{i as D}from"./insertElementAfterBegin-a140326f.js"
import"./all-f24d81d0.js"
import"./cmdExport-c3a6f54b.js"
import"./indexAjaxJson-6e1804ba.js"
import"./asInt-74ac71c8.js"
import"./valueText-ad23c08d.js"
import"./insertElementBefore-5adb1609.js"
const M={}
function U(t){const n=t.match(u)
return o-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function V(t){const{tipped:n}=t.cells[1].children[0].dataset,e=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(e[1]),max_stamina:Number(e[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:U(n)}}function W(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:E(l(t.cells[4])),rank_name:l(t.cells[3])}}function $(t,n){return{rank_index:n,...V(t),...W(t)}}function z(t,n){const e=n.rank_name,r=n.rank_index,a=t.find((t=>t.name===e))
return a?a.members.push(n):t.push({id:r,name:e,members:[n]}),t}function G(t){return C(t.rows,5,1).map($).reduce(z,[])}function J(t){const n=r(t),e=a("pCC",n),o=s(i,e),c=o[o.length-1]
return c?{r:{ranks:G(c)},s:!0}:{s:!1}}function R(t){return M[t]||(M[t]=e({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),M[t]}function Z(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function q(t){let n=t.last_login
return n||(n=0),{r:[{last_activity:Number(n),vl:t.virtual_level}],s:!0}}function K(t){return L(t).then(q)}function Q(t){return k({subcmd:"view",guild_id:t})}function X(){return d({subcmd:"view"})}function Y(t){return[t,l(t),(n=t,n.rows[0].cells[0].children[0]?Number(b.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function tt(t,n){return n[0]===t[2]}function nt(t,n){const e=t.find(v(tt,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function et(t,n){return n[0]===t}function rt(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(v(et,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function at(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let st,it
const ot=[()=>st,t=>j(t)||t!==it,(t,n)=>n.last_login>=o-604800,(t,n)=>n.virtual_level>=I(),(t,n)=>n.virtual_level<=O()]
function ct(t,n,e){_(t.rows[0],`<td>${H({last_login:e.last_login})}</td>`),function(t,n){return ot.every((e=>e(t,n)))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let lt
function ut(){A(lt)}function ft(t,n){ct(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function mt(t,n){return n.name===t[1]}function dt(t,n){const e=t.find(v(mt,n))
e&&ft(n,e)}function pt(t,n){n&&n.s&&S(n.r)&&n.r.length>0&&ft(t,n.r[0])}function ht(t,n){n.s&&ft(t,{last_activity:o-n.r.last_activity,vl:n.r.virtual_level})}function vt(t){return-1!==t[0]}function bt(t,n){return t.concat(n.members)}function gt(t,n){const e=(r=n.r.ranks,a="id",r.filter(v(at,a,{}))).reduce(bt,[])
var r,a
t[1].forEach(v(dt,e))}function _t(t,n){n.s&&gt(t,n)}function jt(t){return(n=t[0],m(Q,R,n)).then(v(_t,t))
var n}function Nt(t){return-1===t[0]}function yt(t){return t[1]!==P()?(n=t[1],m(Z,K,n)).then(v(pt,t)):m(X).then(v(ht,t))
var n}function wt(){const t=p(i,h).slice(4).map(Y).reduce(nt,[]).reduce(rt,[])
let e=t.filter(vt).map(jt)
t.find(Nt)&&(e=e.concat(t.find(Nt)[1].map(yt))),n(e,ut)}function xt(t){var n
y("toprated","FindOnlinePlayers"),n=t.target,N(n),lt=T({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(lt,n),st=g("highlightPlayersNearMyLvl"),st&&(it=F()),wt()}const Lt=[()=>x(),()=>h,()=>h.children[0],()=>h.children[0].rows,()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function kt(){Lt.every(B)&&function(){const n=s("td",h)[0]
n.children[0].className="fshTopListWrap"
const e=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
D(n,e),w(e,xt)}()}export default kt
//# sourceMappingURL=toprated-43290e37.js.map
