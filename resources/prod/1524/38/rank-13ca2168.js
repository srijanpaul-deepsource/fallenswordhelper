import{q as n,$ as t,D as r,o as e,t as s,i as o,h as a,C as i,aa as c,u,I as d,p as f,y as m,e as p,N as l}from"./calfSystem-7a1cce43.js"
import{b}from"./batch-895bb182.js"
import{g as h}from"./getMembrList-bfb04e21.js"
import{n as g}from"./notLastUpdate-e60d4692.js"
import{b as j}from"./bitwiseAnd-7bfebdac.js"
import{c as w}from"./createInput-76cdb39b.js"
import{c as N}from"./createSpan-e8d911bd.js"
import{g as k}from"./guild-6cfdbf69.js"
import{r as x}from"./replaceChild-300e1396.js"
import{r as v}from"./roundToString-a20f2465.js"
import{i as C}from"./insertElementBefore-71272774.js"
import{p as I}from"./playerName-1f8ebec9.js"
import{t as S}from"./toLowerCase-b0c4634d.js"
import"./currentGuildId-c3cf68bc.js"
import"./cmdExport-b5bb530e.js"
import"./indexAjaxJson-48ec5c5d.js"
import"./idb-c572d898.js"
import"./numberIsNaN-30cde299.js"
function y(t){return k(n({subcmd:"ranks"},t))}const B=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function E(n,t){const r=t.children[0],e=i(r.firstChild),s=n.find((n=>n&&n.name===e))
var o
s&&c(r,`<span class="fshBlue">(${o=s.permissions,v(B.filter((([n])=>j(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(((n,t)=>n+t),0),1)}) Tax:(${s.tax}%)</span> `)}function _(n,t,r){r.s&&(n.forEach(s(E,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function L(n,r){const e=N({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
x(e,r),t(y).then(s(_,n,e))}function U(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=w({className:"custombutton",type:"button",value:"Get Rank Weightings"})
e(r,s(L,n,r))
const i=t.parentNode.parentNode
o(i,"&nbsp;"),a(i,r)}(n,t)}function $(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function A(n,t){return y({subcmd2:n,rank_id:t})}let G
function R(n,r,e){const s=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var o,a
o=S(n.target.value),a=s[1],t(A,$,o,a)
const i=r.parentNode.rows[e]
C(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function D(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return G>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||R(n,t,r)}function M(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&D(n)}function T(n,t){return t[0]===n}function q(n,t){const r=t.children[0],e=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),a=n.find(s(T,e));(function(n){return n&&n[1].length>0})(a)&&(!function(n,t){t&&t[1].includes(I())&&(G=n.rowIndex)}(t,a),o(r,` <span class="fshBlue">- ${a[1].join(", ")}</span>`))}function F(n){const t=function(){const n=f.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return l(n.rows[7].children[0].children[0].rows)}()
t&&(b([5,3,t,1,s(q,n)]),U(t),G&&d("ajaxifyRankControls")&&e(f,M,!0))}function J(n,t){const r=n.find(s(T,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function P(n){return p(n).filter(g).reduce(J,[])}function W(){m()||h(!1).then(P).then(F)}export default W
//# sourceMappingURL=rank-13ca2168.js.map
