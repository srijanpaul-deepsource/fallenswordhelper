import{c as t}from"./createInput-d71226f9.js"
import{a as e}from"./allthen-e8de2991.js"
import{x as n,$ as r,g as s,p as i,d as a,H as o,t as l,bz as c,I as u,i as f,aK as d,V as m,aQ as p,X as h,bA as v,R as g,b,o as j,j as y,ah as _}from"./calfSystem-186455ab.js"
import{g as w}from"./getProfile-0139b316.js"
import{g as N}from"./guild-7919b015.js"
import{g as x}from"./guildView-bd6f17b6.js"
import{p as L}from"./playerName-2ef49def.js"
import{c as E}from"./currentGuildId-7dd95943.js"
import{o as P}from"./onlineDot-c09eceb7.js"
import{a as C,g as S}from"./levelHighlight-92a5e76a.js"
import{c as F}from"./createSpan-8048fffb.js"
import{h as H}from"./hideElement-2c661b2e.js"
import{f as O}from"./functionPasses-dfde2ed6.js"
import{i as T}from"./insertElementAfterBegin-22d97b25.js"
import"./all-3be74659.js"
import"./cmdExport-c033d991.js"
import"./indexAjaxJson-d4ea205b.js"
import"./dataRows-f1e5d572.js"
import"./intValue-1ce02c09.js"
import"./valueText-453036fb.js"
import"./insertElementBefore-9228b012.js"
function A(t){return n({cmd:"findplayer",subcmd:"view",search_username:t})}function I(t){let e=t.last_login
return e||(e=0),{r:[{last_activity:Number(e),vl:t.virtual_level}],s:!0}}function V(t){return w(t).then(I)}function k(t){return N({subcmd:"view",guild_id:t})}function B(t){return[t,o(t),(e=t,e.rows[0].cells[0].children[0]?Number(c.exec(e.rows[0].cells[0].children[0].href)[1]):-1)]
var e}function M(t,e){return e[0]===t[2]}function R(t,e){const n=t.find(l(M,e))
return n?n[1].push(e):t.push([e[2],[e]]),t}function W(t,e){return e[0]===t}function $(t,e){let n=e[0]
e[1].length<5&&(n=-1)
const r=t.find(l(W,n))
return r?r[1]=r[1].concat(e[1]):t.push([n,e[1]]),t}function z(t,e,n){const r=function(t,e){return t?e[t]:e}(t,n)
if(!e[r])return e[r]=!0,!0}let D,G
const J=[()=>D,t=>d(t)||t!==G,(t,e)=>e.last_login>=m-604800,(t,e)=>e.virtual_level>=C(),(t,e)=>e.virtual_level<=S()]
function K(t,e,n){f(t.rows[0],`<td>${P({last_login:n.last_login})}</td>`),function(t,e){return J.every((n=>n(t,e)))}(e,n)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let Q
function U(){H(Q)}function X(t,e){K(t[0],t[2],{last_login:String(e.last_activity),virtual_level:e.vl})}function q(t,e){return e.name===t[1]}function Y(t,e){const n=t.find(l(q,e))
n&&X(e,n)}function Z(t,e){e.s&&g(e.r)&&X(t,e.r[0])}function tt(t,e){e.s&&X(t,{last_activity:m-e.r.last_activity,vl:e.r.virtual_level})}function et(t){return-1!==t[0]}function nt(t,e){return t.concat(e.members)}function rt(t,e){const n=(r=e.r.ranks,s="id",r.filter(l(z,s,{}))).reduce(nt,[])
var r,s
t[1].forEach(l(Y,n))}function st(t,e){e.s&&rt(t,e)}function it(t){return(e=t[0],r(k,x,e)).then(l(st,t))
var e}function at(t){return-1===t[0]}function ot(t){return t[1]!==L()?(e=t[1],r(A,V,e)).then(l(Z,t)):v().then(l(tt,t))
var e}function lt(){const t=s(a,i).slice(4).map(B).reduce(R,[]).reduce($,[])
let n=t.filter(et).map(it)
t.find(at)&&(n=n.concat(t.find(at)[1].map(ot))),e(n,U)}function ct(t){var e
h("toprated","FindOnlinePlayers"),e=t.target,p(e),Q=F({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),e.parentNode.replaceChild(Q,e),D=u("highlightPlayersNearMyLvl"),D&&(G=E()),lt()}const ut=[()=>y(),()=>_(i),()=>_(i.children[0]),()=>_(i.children[0].rows),()=>i.children[0].rows.length>2,()=>o(i.children[0].rows[1]).startsWith("Last Updated")]
function ft(){ut.every(O)&&function(){const e=b("td",i)[0]
e.children[0].className="fshTopListWrap"
const n=t({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
T(e,n),j(n,ct)}()}export default ft
//# sourceMappingURL=toprated-f04046f0.js.map
