import{q as n,C as t,o as e,t as r,i as s,h as o,B as a,a8 as i,H as c,p as f,x as u,e as p,M as d}from"./calfSystem-3bdf319e.js"
import"./numberIsNaN-871eca26.js"
import{a as m}from"./roundToString-5fa05af1.js"
import{p as l}from"./playerName-26a1f7d9.js"
import{t as h}from"./toLowerCase-33399b5a.js"
import{c as b}from"./createInput-52b88e62.js"
import{b as g}from"./batch-06380bde.js"
import{i as j}from"./insertElementBefore-543d9ef0.js"
import"./currentGuildId-e8170186.js"
import"./idb-31fb041e.js"
import{c as w}from"./createSpan-a10d5602.js"
import"./indexAjaxJson-5033dc48.js"
import"./cmdExport-7ba590c1.js"
import{g as x}from"./guild-68bbf674.js"
import{g as N}from"./getMembrList-3ee4310f.js"
import{r as k}from"./replaceChild-1f496ff9.js"
import{n as v}from"./notLastUpdate-bcee3664.js"
import{b as C}from"./bitwiseAnd-87ffdbbf.js"
function S(t){return x(n({subcmd:"ranks"},t))}const I=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function y(n,t){const e=t.children[0],r=a(e.firstChild),s=n.find(n=>n.name===r)
var o
s&&i(e,`<span class="fshBlue">(${o=s.permissions,m(I.filter(([n])=>C(o,n)).reduce((n,[,t])=>n+t-1,0)+o.toString(2).split("").map(Number).reduce((n,t)=>n+t,0),1)}) Tax:(${s.tax}%)</span> `)}function B(n,t,e){e.s&&(n.forEach(r(y,[e.r[0]].concat(e.r.ranks))),t.classList.remove("fshSpinner"))}function E(n,t){const e=w({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
k(e,t),S().then(r(B,n,e))}function L(n){const a=t('#pCC a[href*="=ranks&subcmd2=add"]')
a&&function(n,t){const a=b({className:"custombutton",type:"button",value:"Get Rank Weightings"})
e(a,r(E,n,a))
const i=t.parentNode.parentNode
s(i,"&nbsp;"),o(i,a)}(n,a)}function U(n,t){return function(n,t){return S({subcmd2:n,rank_id:t})}(n,t)}let _
function A(n){const t=n.target.parentNode.parentNode.parentNode,e=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return _>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,e)||function(n,t,e){const r=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
U(h(n.target.value),r[1])
const s=t.parentNode.rows[e]
j(t,s)
const o="Up"===n.target.value?-22:22
window.scrollBy(0,o),n.stopPropagation()}(n,t,e)}function G(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&A(n)}function M(n,t){return t[0]===n}function R(n,t){const e=t.children[0],o=function(n,t){return 1===n.rowIndex?"Guild Founder":a(t)}(t,e),i=n.find(r(M,o));(function(n){return n&&n[1].length>0})(i)&&(!function(n,t){t&&t[1].includes(l())&&(_=n.rowIndex)}(t,i),s(e,` <span class="fshBlue">- ${i[1].join(", ")}</span>`))}function $(n){const t=function(){const n=f.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return d(n.rows[7].children[0].children[0].rows)}()
t&&(g([5,3,t,1,r(R,n)]),L(t),_&&c("ajaxifyRankControls")&&e(f,G,!0))}function T(n,t){const e=n.find(r(M,t[1].rank_name))
return e?e[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function q(n){return p(n).filter(v).reduce(T,[])}function D(){u()||N(!1).then(q).then($)}export default D
//# sourceMappingURL=rank-ec2e9289.js.map