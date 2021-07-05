import{q as n,$ as t,D as r,o as s,t as e,i as o,h as a,C as i,ad as c,u,I as f,p as d,ai as m,y as p,e as l,at as h}from"./calfSystem-9ab64478.js"
import{b}from"./batch-53744af0.js"
import{g}from"./getMembrList-ad7be9d5.js"
import{n as j}from"./notLastUpdate-f2276c77.js"
import{b as w}from"./bitwiseAnd-e091ed55.js"
import{c as k}from"./createInput-48825441.js"
import{c as x}from"./createSpan-7ce539c8.js"
import{g as N}from"./guild-3e01f77e.js"
import{r as v}from"./replaceChild-684dfa86.js"
import{r as I}from"./roundToString-98c640ba.js"
import{s as S}from"./sum-59469ce4.js"
import{i as y}from"./insertElementBefore-c7161beb.js"
import{p as C}from"./playerName-b4c2ff3f.js"
import"./currentGuildId-c05147ac.js"
import"./cmdExport-22edc582.js"
import"./indexAjaxJson-b31a9d3b.js"
import"./idb-9da90398.js"
import"./numberIsNaN-9a364388.js"
function B(t){return N(n({subcmd:"ranks"},t))}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function _(n,t){const r=t.children[0],s=i(r.firstChild),e=n.find((n=>n&&n.name===s))
var o
e&&c(r,`<span class="fshBlue">(${o=e.permissions,I(E.filter((([n])=>w(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(S,0),1)}) Tax:(${e.tax}%)</span> `)}function U(n,t,r){r.s&&(n.forEach(e(_,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function $(n,r){const s=x({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
v(s,r),t(B).then(e(U,n,s))}function A(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=k({className:"custombutton",type:"button",value:"Get Rank Weightings"})
s(r,e($,n,r))
const i=t.parentNode.parentNode
o(i,"&nbsp;"),a(i,r)}(n,t)}function G(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function L(n,t){return B({subcmd2:n,rank_id:t})}let R
function D(n,r,s){const e=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var o,a
o=m(n.target.value),a=e[1],t(L,G,o,a)
const i=r.parentNode.rows[s]
y(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function M(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return R>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||D(n,t,r)}function T(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&M(n)}function q(n,t){return t[0]===n}function F(n,t){const r=t.children[0],s=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),a=n.find(e(q,s));(function(n){return n&&n[1].length>0})(a)&&(!function(n,t){t&&t[1].includes(C())&&(R=n.rowIndex)}(t,a),o(r,` <span class="fshBlue">- ${a[1].join(", ")}</span>`))}function J(n){const t=function(){const n=d.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return h(n.rows[7].children[0].children[0].rows)}()
t&&(b([5,3,t,1,e(F,n)]),A(t),R&&f("ajaxifyRankControls")&&s(d,T,!0))}function P(n,t){const r=n.find(e(q,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function W(n){return l(n).filter(j).reduce(P,[])}function z(){p()||g(!1).then(W).then(J)}export default z
//# sourceMappingURL=rank-33746926.js.map
