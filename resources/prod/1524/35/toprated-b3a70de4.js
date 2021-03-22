import{c as t}from"./createInput-47702c1d.js"
import{a as e}from"./allthen-e8de2991.js"
import{x as n,$ as r,g as s,p as i,d as a,H as o,t as c,bt as l,I as f,i as u,aH as d,U as m,aL as p,W as h,bu as v,b as g,o as j,j as b,ag as y}from"./calfSystem-fe0ebf32.js"
import{g as _}from"./getProfile-9e74c09c.js"
import{g as w}from"./guild-8f63aac2.js"
import{g as N}from"./guildView-a2e4ecef.js"
import{i as L}from"./isArray-c05157b9.js"
import{p as x}from"./playerName-dca56241.js"
import{c as E}from"./currentGuildId-09820c92.js"
import{o as P}from"./onlineDot-6de579ac.js"
import{a as C,g as H}from"./levelHighlight-71d51155.js"
import{c as S}from"./createSpan-0da61261.js"
import{h as F}from"./hideElement-2c661b2e.js"
import{f as O}from"./functionPasses-dfde2ed6.js"
import{i as T}from"./insertElementAfterBegin-eef98cf1.js"
import"./all-3be74659.js"
import"./cmdExport-fd555515.js"
import"./indexAjaxJson-a9fbc5f9.js"
import"./dataRows-fe9c44ea.js"
import"./intValue-1ce02c09.js"
import"./valueText-2234f468.js"
import"./insertElementBefore-9228b012.js"
function A(t){return n({cmd:"findplayer",subcmd:"view",search_username:t})}function I(t){let e=t.last_login
return e||(e=0),{r:[{last_activity:Number(e),vl:t.virtual_level}],s:!0}}function W(t){return _(t).then(I)}function k(t){return w({subcmd:"view",guild_id:t})}function B(t){return[t,o(t),(e=t,e.rows[0].cells[0].children[0]?Number(l.exec(e.rows[0].cells[0].children[0].href)[1]):-1)]
var e}function M(t,e){return e[0]===t[2]}function U(t,e){const n=t.find(c(M,e))
return n?n[1].push(e):t.push([e[2],[e]]),t}function V(t,e){return e[0]===t}function $(t,e){let n=e[0]
e[1].length<5&&(n=-1)
const r=t.find(c(V,n))
return r?r[1]=r[1].concat(e[1]):t.push([n,e[1]]),t}function D(t,e,n){const r=function(t,e){return t?e[t]:e}(t,n)
if(!e[r])return e[r]=!0,!0}let G,J
const R=[()=>G,t=>d(t)||t!==J,(t,e)=>e.last_login>=m-604800,(t,e)=>e.virtual_level>=C(),(t,e)=>e.virtual_level<=H()]
function q(t,e,n){u(t.rows[0],`<td>${P({last_login:n.last_login})}</td>`),function(t,e){return R.every((n=>n(t,e)))}(e,n)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let z
function K(){F(z)}function Q(t,e){q(t[0],t[2],{last_login:String(e.last_activity),virtual_level:e.vl})}function X(t,e){return e.name===t[1]}function Y(t,e){const n=t.find(c(X,e))
n&&Q(e,n)}function Z(t,e){e.s&&L(e.r)&&Q(t,e.r[0])}function tt(t,e){e.s&&Q(t,{last_activity:m-e.r.last_activity,vl:e.r.virtual_level})}function et(t){return-1!==t[0]}function nt(t,e){return t.concat(e.members)}function rt(t,e){const n=(r=e.r.ranks,s="id",r.filter(c(D,s,{}))).reduce(nt,[])
var r,s
t[1].forEach(c(Y,n))}function st(t,e){e.s&&rt(t,e)}function it(t){return(e=t[0],r(k,N,e)).then(c(st,t))
var e}function at(t){return-1===t[0]}function ot(t){return t[1]!==x()?(e=t[1],r(A,W,e)).then(c(Z,t)):v().then(c(tt,t))
var e}function ct(){const t=s(a,i).slice(4).map(B).reduce(U,[]).reduce($,[])
let n=t.filter(et).map(it)
t.find(at)&&(n=n.concat(t.find(at)[1].map(ot))),e(n,K)}function lt(t){var e
h("toprated","FindOnlinePlayers"),e=t.target,p(e),z=S({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),e.parentNode.replaceChild(z,e),G=f("highlightPlayersNearMyLvl"),G&&(J=E()),ct()}const ft=[()=>b(),()=>y(i),()=>y(i.children[0]),()=>y(i.children[0].rows),()=>i.children[0].rows.length>2,()=>o(i.children[0].rows[1]).startsWith("Last Updated")]
function ut(){ft.every(O)&&function(){const e=g("td",i)[0]
e.children[0].className="fshTopListWrap"
const n=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
T(e,n),j(n,lt)}()}export default ut
//# sourceMappingURL=toprated-b3a70de4.js.map
