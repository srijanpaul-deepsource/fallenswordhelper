import{c as t}from"./createInput-b20906d4.js"
import{a as e}from"./allthen-13a2ca46.js"
import{u as n,v as r,z as s,b as a,d as i,V as o,by as c,H as l,bz as u,x as f,$ as d,br as m,g as p,p as h,t as v,bA as b,I as g,i as _,aR as j,aX as N,X as y,R as w,o as x,j as L,ah as k}from"./calfSystem-817ceb25.js"
import{g as C}from"./getProfile-a80eecd0.js"
import{g as E}from"./guild-90cfec83.js"
import{d as P}from"./dataRows-dbbb793f.js"
import{i as S}from"./intValue-af3aed3f.js"
import{p as F}from"./playerName-43ee76fa.js"
import{c as H}from"./currentGuildId-0741b5a4.js"
import{o as O}from"./onlineDot-9e87e4ee.js"
import{a as T,g as A}from"./levelHighlight-0234fe17.js"
import{c as I}from"./createSpan-56de4e57.js"
import{h as R}from"./hideElement-9426b096.js"
import{f as V}from"./functionPasses-d13672a2.js"
import{i as z}from"./insertElementAfterBegin-fb5a3996.js"
import"./all-73a73e22.js"
import"./cmdExport-a8921dc9.js"
import"./indexAjaxJson-50c9cfe2.js"
import"./valueText-35bd586a.js"
import"./insertElementBefore-2bf2da7f.js"
const B={}
function M(t){const e=t.match(u)
return o-(24*Number(e[1])*60*60+60*Number(e[2])*60+60*Number(e[3])+Number(e[4]))}function W(t){const{tipped:e}=t.cells[1].children[0].dataset,n=e.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(n[1]),max_stamina:Number(n[2]),vl:Number(e.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:M(e)}}function X(t){return{id:Number(t.cells[1].children[0].href.match(c)[1]),name:l(t.cells[1].children[0]),level:Number(l(t.cells[2])),xp:0,guild_xp:S(l(t.cells[4])),rank_name:l(t.cells[3])}}function $(t,e){return{rank_index:e,...W(t),...X(t)}}function D(t,e){const n=e.rank_name,r=e.rank_index,s=t.find((t=>t.name===n))
return s?s.members.push(e):t.push({id:r,name:n,members:[e]}),t}function G(t){return P(t.rows,5,1).map($).reduce(D,[])}function J(t){const e=r(t),n=s("pCC",e),o=a(i,n),c=o[o.length-1]
return c?{r:{ranks:G(c)},s:!0}:{s:!1}}function U(t){return B[t]||(B[t]=n({cmd:"guild",subcmd:"view",guild_id:t}).then(J)),B[t]}function q(t){return f({cmd:"findplayer",subcmd:"view",search_username:t})}function K(t){let e=t.last_login
return e||(e=0),{r:[{last_activity:Number(e),vl:t.virtual_level}],s:!0}}function Q(t){return C(t).then(K)}function Y(t){return E({subcmd:"view",guild_id:t})}function Z(){return m({subcmd:"view"})}function tt(t){return[t,l(t),(e=t,e.rows[0].cells[0].children[0]?Number(b.exec(e.rows[0].cells[0].children[0].href)[1]):-1)]
var e}function et(t,e){return e[0]===t[2]}function nt(t,e){const n=t.find(v(et,e))
return n?n[1].push(e):t.push([e[2],[e]]),t}function rt(t,e){return e[0]===t}function st(t,e){let n=e[0]
e[1].length<5&&(n=-1)
const r=t.find(v(rt,n))
return r?r[1]=r[1].concat(e[1]):t.push([n,e[1]]),t}function at(t,e,n){const r=function(t,e){return t?e[t]:e}(t,n)
if(!e[r])return e[r]=!0,!0}let it,ot
const ct=[()=>it,t=>j(t)||t!==ot,(t,e)=>e.last_login>=o-604800,(t,e)=>e.virtual_level>=T(),(t,e)=>e.virtual_level<=A()]
function lt(t,e,n){_(t.rows[0],`<td>${O({last_login:n.last_login})}</td>`),function(t,e){return ct.every((n=>n(t,e)))}(e,n)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let ut
function ft(){R(ut)}function dt(t,e){lt(t[0],t[2],{last_login:String(e.last_activity),virtual_level:e.vl})}function mt(t,e){return e.name===t[1]}function pt(t,e){const n=t.find(v(mt,e))
n&&dt(e,n)}function ht(t,e){e.s&&w(e.r)&&dt(t,e.r[0])}function vt(t,e){e.s&&dt(t,{last_activity:o-e.r.last_activity,vl:e.r.virtual_level})}function bt(t){return-1!==t[0]}function gt(t,e){return t.concat(e.members)}function _t(t,e){const n=(r=e.r.ranks,s="id",r.filter(v(at,s,{}))).reduce(gt,[])
var r,s
t[1].forEach(v(pt,n))}function jt(t,e){e.s&&_t(t,e)}function Nt(t){return(e=t[0],d(Y,U,e)).then(v(jt,t))
var e}function yt(t){return-1===t[0]}function wt(t){return t[1]!==F()?(e=t[1],d(q,Q,e)).then(v(ht,t)):d(Z).then(v(vt,t))
var e}function xt(){const t=p(i,h).slice(4).map(tt).reduce(nt,[]).reduce(st,[])
let n=t.filter(bt).map(Nt)
t.find(yt)&&(n=n.concat(t.find(yt)[1].map(wt))),e(n,ft)}function Lt(t){var e
y("toprated","FindOnlinePlayers"),e=t.target,N(e),ut=I({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),e.parentNode.replaceChild(ut,e),it=g("highlightPlayersNearMyLvl"),it&&(ot=H()),xt()}const kt=[()=>L(),()=>k(h),()=>k(h.children[0]),()=>k(h.children[0].rows),()=>h.children[0].rows.length>2,()=>l(h.children[0].rows[1]).startsWith("Last Updated")]
function Ct(){kt.every(V)&&function(){const e=a("td",h)[0]
e.children[0].className="fshTopListWrap"
const n=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
z(e,n),x(n,Lt)}()}export default Ct
//# sourceMappingURL=toprated-4c3da251.js.map
