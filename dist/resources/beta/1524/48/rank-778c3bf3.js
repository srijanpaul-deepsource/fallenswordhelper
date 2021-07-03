import{q as n,$ as t,D as r,o as s,t as e,i as a,h as o,C as i,ac as c,u,I as d,p as f,ah as p,y as m,e as l,as as h}from"./calfSystem-8af1dca2.js"
import{b}from"./batch-891ec1a6.js"
import{g}from"./getMembrList-cb94da61.js"
import{n as j}from"./notLastUpdate-13bdbaa4.js"
import{b as w}from"./bitwiseAnd-47494c9b.js"
import{c as k}from"./createInput-75b7145b.js"
import{c as x}from"./createSpan-0e686680.js"
import{g as N}from"./guild-08a09d6e.js"
import{r as v}from"./replaceChild-719a8b57.js"
import{r as I}from"./roundToString-a22b7b5d.js"
import{i as S}from"./insertElementBefore-5adb1609.js"
import{p as y}from"./playerName-7218c72a.js"
import"./currentGuildId-ae75dbfc.js"
import"./cmdExport-c3a6f54b.js"
import"./indexAjaxJson-6e1804ba.js"
import"./idb-30d71a28.js"
import"./numberIsNaN-68797c81.js"
function C(n,t){return n+t}function B(t){return N(n({subcmd:"ranks"},t))}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function _(n,t){const r=t.children[0],s=i(r.firstChild),e=n.find((n=>n&&n.name===s))
var a
e&&c(r,`<span class="fshBlue">(${a=e.permissions,I(E.filter((([n])=>w(a,n))).reduce(((n,[,t])=>n+t-1),0)+a.toString(2).split("").map(Number).reduce(C,0),1)}) Tax:(${e.tax}%)</span> `)}function U(n,t,r){r.s&&(n.forEach(e(_,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function $(n,r){const s=x({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
v(s,r),t(B).then(e(U,n,s))}function A(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=k({className:"custombutton",type:"button",value:"Get Rank Weightings"})
s(r,e($,n,r))
const i=t.parentNode.parentNode
a(i,"&nbsp;"),o(i,r)}(n,t)}function G(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function L(n,t){return B({subcmd2:n,rank_id:t})}let R
function D(n,r,s){const e=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var a,o
a=p(n.target.value),o=e[1],t(L,G,a,o)
const i=r.parentNode.rows[s]
S(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function M(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return R>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||D(n,t,r)}function T(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&M(n)}function q(n,t){return t[0]===n}function F(n,t){const r=t.children[0],s=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),o=n.find(e(q,s));(function(n){return n&&n[1].length>0})(o)&&(!function(n,t){t&&t[1].includes(y())&&(R=n.rowIndex)}(t,o),a(r,` <span class="fshBlue">- ${o[1].join(", ")}</span>`))}function J(n){const t=function(){const n=f.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return h(n.rows[7].children[0].children[0].rows)}()
t&&(b([5,3,t,1,e(F,n)]),A(t),R&&d("ajaxifyRankControls")&&s(f,T,!0))}function P(n,t){const r=n.find(e(q,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function W(n){return l(n).filter(j).reduce(P,[])}function z(){m()||g(!1).then(W).then(J)}export default z
//# sourceMappingURL=rank-778c3bf3.js.map
