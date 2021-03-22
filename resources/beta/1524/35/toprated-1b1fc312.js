import{c as t}from"./createInput-c4b18abd.js"
import{a as e}from"./allthen-e8de2991.js"
import{x as n,$ as r,g as s,p as i,d as a,H as o,t as l,bw as c,I as u,i as f,aJ as d,U as m,aN as p,W as h,bx as v,b,o as g,j,ag as y}from"./calfSystem-03050396.js"
import{g as _}from"./getProfile-fdde6617.js"
import{g as w}from"./guild-61d59bbe.js"
import{g as N}from"./guildView-b7aa8e6b.js"
import{i as x}from"./isArray-c05157b9.js"
import{p as L}from"./playerName-3ca7fe81.js"
import{c as E}from"./currentGuildId-4235046f.js"
import{o as P}from"./onlineDot-77b2d184.js"
import{a as C,g as S}from"./levelHighlight-e9b063b0.js"
import{c as F}from"./createSpan-8d9e047a.js"
import{h as H}from"./hideElement-2c661b2e.js"
import{f as O}from"./functionPasses-dfde2ed6.js"
import{i as T}from"./insertElementAfterBegin-ee5de178.js"
import"./all-3be74659.js"
import"./cmdExport-c8e611b1.js"
import"./indexAjaxJson-d9ed18eb.js"
import"./dataRows-737117b7.js"
import"./intValue-1ce02c09.js"
import"./valueText-c92275e2.js"
import"./insertElementBefore-9228b012.js"
function A(t){return n({cmd:"findplayer",subcmd:"view",search_username:t})}function I(t){let e=t.last_login
return e||(e=0),{r:[{last_activity:Number(e),vl:t.virtual_level}],s:!0}}function W(t){return _(t).then(I)}function k(t){return w({subcmd:"view",guild_id:t})}function B(t){return[t,o(t),(e=t,e.rows[0].cells[0].children[0]?Number(c.exec(e.rows[0].cells[0].children[0].href)[1]):-1)]
var e}function J(t,e){return e[0]===t[2]}function M(t,e){const n=t.find(l(J,e))
return n?n[1].push(e):t.push([e[2],[e]]),t}function U(t,e){return e[0]===t}function V(t,e){let n=e[0]
e[1].length<5&&(n=-1)
const r=t.find(l(U,n))
return r?r[1]=r[1].concat(e[1]):t.push([n,e[1]]),t}function $(t,e,n){const r=function(t,e){return t?e[t]:e}(t,n)
if(!e[r])return e[r]=!0,!0}let D,G
const R=[()=>D,t=>d(t)||t!==G,(t,e)=>e.last_login>=m-604800,(t,e)=>e.virtual_level>=C(),(t,e)=>e.virtual_level<=S()]
function q(t,e,n){f(t.rows[0],`<td>${P({last_login:n.last_login})}</td>`),function(t,e){return R.every((n=>n(t,e)))}(e,n)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let z
function K(){H(z)}function Q(t,e){q(t[0],t[2],{last_login:String(e.last_activity),virtual_level:e.vl})}function X(t,e){return e.name===t[1]}function Y(t,e){const n=t.find(l(X,e))
n&&Q(e,n)}function Z(t,e){e.s&&x(e.r)&&Q(t,e.r[0])}function tt(t,e){e.s&&Q(t,{last_activity:m-e.r.last_activity,vl:e.r.virtual_level})}function et(t){return-1!==t[0]}function nt(t,e){return t.concat(e.members)}function rt(t,e){const n=(r=e.r.ranks,s="id",r.filter(l($,s,{}))).reduce(nt,[])
var r,s
t[1].forEach(l(Y,n))}function st(t,e){e.s&&rt(t,e)}function it(t){return(e=t[0],r(k,N,e)).then(l(st,t))
var e}function at(t){return-1===t[0]}function ot(t){return t[1]!==L()?(e=t[1],r(A,W,e)).then(l(Z,t)):v().then(l(tt,t))
var e}function lt(){const t=s(a,i).slice(4).map(B).reduce(M,[]).reduce(V,[])
let n=t.filter(et).map(it)
t.find(at)&&(n=n.concat(t.find(at)[1].map(ot))),e(n,K)}function ct(t){var e
h("toprated","FindOnlinePlayers"),e=t.target,p(e),z=F({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),e.parentNode.replaceChild(z,e),D=u("highlightPlayersNearMyLvl"),D&&(G=E()),lt()}const ut=[()=>j(),()=>y(i),()=>y(i.children[0]),()=>y(i.children[0].rows),()=>i.children[0].rows.length>2,()=>o(i.children[0].rows[1]).startsWith("Last Updated")]
function ft(){ut.every(O)&&function(){const e=b("td",i)[0]
e.children[0].className="fshTopListWrap"
const n=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
T(e,n),g(n,ct)}()}export default ft
//# sourceMappingURL=toprated-1b1fc312.js.map
