import{n,M as t,o as e,s as r,i as s,f as o,A as a,a5 as i,D as c,p as f,w as u,l as d,aD as p}from"./calfSystem-9554b525.js"
import"./numberIsNaN-f35fe828.js"
import{a as m}from"./roundToString-df4d21d0.js"
import{p as l}from"./playerName-855f1e8d.js"
import{t as h}from"./toLowerCase-5de73e6e.js"
import{c as b}from"./createInput-73435eda.js"
import{b as g}from"./batch-da10f058.js"
import"./currentGuildId-7c7a6b86.js"
import"./idb-e27acc21.js"
import{i as j}from"./insertElementBefore-5f238f78.js"
import{c as w}from"./createSpan-40c5f348.js"
import"./indexAjaxJson-24e555fb.js"
import"./cmdExport-d8ee0a12.js"
import{g as x}from"./guild-8fdef2fb.js"
import{g as N}from"./getMembrList-a47eb3dc.js"
import{r as k}from"./replaceChild-bf0b7d7a.js"
import{n as v}from"./notLastUpdate-a1a49972.js"
import{b as S}from"./bitwiseAnd-0a2efc5f.js"
function C(t){return x(n({subcmd:"ranks"},t))}const I=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function y(n,t){const e=t.children[0],r=a(e.firstChild),s=n.find(n=>n.name===r)
var o
s&&i(e,`<span class="fshBlue">(${o=s.permissions,m(I.filter(([n])=>S(o,n)).reduce((n,[,t])=>n+t-1,0)+o.toString(2).split("").map(Number).reduce((n,t)=>n+t,0),1)}) Tax:(${s.tax}%)</span> `)}function B(n,t,e){e.s&&(n.forEach(r(y,[e.r[0]].concat(e.r.ranks))),t.classList.remove("fshSpinner"))}function E(n,t){const e=w({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
k(e,t),C().then(r(B,n,e))}function A(n){const a=t('#pCC a[href*="=ranks&subcmd2=add"]')
a&&function(n,t){const a=b({className:"custombutton",type:"button",value:"Get Rank Weightings"})
e(a,r(E,n,a))
const i=t.parentNode.parentNode
s(i,"&nbsp;"),o(i,a)}(n,a)}function L(n,t){return function(n,t){return C({subcmd2:n,rank_id:t})}(n,t)}let U
function _(n){const t=n.target.parentNode.parentNode.parentNode,e=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return U>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,e)||function(n,t,e){const r=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
L(h(n.target.value),r[1])
const s=t.parentNode.rows[e]
j(t,s)
const o="Up"===n.target.value?-22:22
window.scrollBy(0,o),n.stopPropagation()}(n,t,e)}function D(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&_(n)}function G(n,t){return t[0]===n}function M(n,t){const e=t.children[0],o=function(n,t){return 1===n.rowIndex?"Guild Founder":a(t)}(t,e),i=n.find(r(G,o));(function(n){return n&&n[1].length>0})(i)&&(!function(n,t){t&&t[1].includes(l())&&(U=n.rowIndex)}(t,i),s(e,` <span class="fshBlue">- ${i[1].join(", ")}</span>`))}function R(n){const t=function(){const n=f.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return p(n.rows[7].children[0].children[0].rows)}()
t&&(g([5,3,t,1,r(M,n)]),A(t),U&&c("ajaxifyRankControls")&&e(f,D,!0))}function $(n,t){const e=n.find(r(G,t[1].rank_name))
return e?e[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function T(n){return d(n).filter(v).reduce($,[])}export default function(){u()||N(!1).then(T).then(R)}
//# sourceMappingURL=rank-dd194267.js.map