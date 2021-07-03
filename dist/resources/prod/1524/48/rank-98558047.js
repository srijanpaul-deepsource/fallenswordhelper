import{q as n,$ as t,D as r,o as s,t as e,i as o,h as a,C as i,ab as c,u,I as f,p as d,ag as p,y as m,e as l,ar as h}from"./calfSystem-85fa6364.js"
import{b}from"./batch-5a4fc6b0.js"
import{g}from"./getMembrList-3b37048c.js"
import{n as j}from"./notLastUpdate-13bdbaa4.js"
import{b as w}from"./bitwiseAnd-47494c9b.js"
import{c as k}from"./createInput-6b491c72.js"
import{c as x}from"./createSpan-54352f01.js"
import{g as N}from"./guild-4d3dc7f1.js"
import{r as v}from"./replaceChild-719a8b57.js"
import{r as I}from"./roundToString-a22b7b5d.js"
import{i as S}from"./insertElementBefore-5adb1609.js"
import{p as y}from"./playerName-2fc4f5c9.js"
import"./currentGuildId-01e2fed9.js"
import"./cmdExport-62f110d4.js"
import"./indexAjaxJson-4fb780dc.js"
import"./idb-160add45.js"
import"./numberIsNaN-68797c81.js"
function C(n,t){return n+t}function B(t){return N(n({subcmd:"ranks"},t))}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function _(n,t){const r=t.children[0],s=i(r.firstChild),e=n.find((n=>n&&n.name===s))
var o
e&&c(r,`<span class="fshBlue">(${o=e.permissions,I(E.filter((([n])=>w(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(C,0),1)}) Tax:(${e.tax}%)</span> `)}function U(n,t,r){r.s&&(n.forEach(e(_,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function $(n,r){const s=x({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
v(s,r),t(B).then(e(U,n,s))}function A(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=k({className:"custombutton",type:"button",value:"Get Rank Weightings"})
s(r,e($,n,r))
const i=t.parentNode.parentNode
o(i,"&nbsp;"),a(i,r)}(n,t)}function G(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function L(n,t){return B({subcmd2:n,rank_id:t})}let R
function D(n,r,s){const e=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var o,a
o=p(n.target.value),a=e[1],t(L,G,o,a)
const i=r.parentNode.rows[s]
S(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function M(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return R>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||D(n,t,r)}function T(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&M(n)}function q(n,t){return t[0]===n}function F(n,t){const r=t.children[0],s=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),a=n.find(e(q,s));(function(n){return n&&n[1].length>0})(a)&&(!function(n,t){t&&t[1].includes(y())&&(R=n.rowIndex)}(t,a),o(r,` <span class="fshBlue">- ${a[1].join(", ")}</span>`))}function J(n){const t=function(){const n=d.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return h(n.rows[7].children[0].children[0].rows)}()
t&&(b([5,3,t,1,e(F,n)]),A(t),R&&f("ajaxifyRankControls")&&s(d,T,!0))}function P(n,t){const r=n.find(e(q,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function W(n){return l(n).filter(j).reduce(P,[])}function z(){m()||g(!1).then(W).then(J)}export default z
//# sourceMappingURL=rank-98558047.js.map
