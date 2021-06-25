import{q as n,$ as t,D as r,o as s,t as e,i as o,h as a,C as i,ac as c,u,I as f,p as d,ah as m,y as p,e as l,as as h}from"./calfSystem-bfc1f6c0.js"
import{b}from"./batch-8ae36ec2.js"
import{g}from"./getMembrList-c0254b8a.js"
import{n as j}from"./notLastUpdate-4c06ebf4.js"
import{b as w}from"./bitwiseAnd-66d656b9.js"
import{c as k}from"./createInput-02002827.js"
import{c as x}from"./createSpan-009a409b.js"
import{g as N}from"./guild-ba17fcb6.js"
import{r as v}from"./replaceChild-018a3df2.js"
import{r as I}from"./roundToString-042f58fd.js"
import{s as S}from"./sum-284576db.js"
import{i as y}from"./insertElementBefore-165ce171.js"
import{p as C}from"./playerName-3c8c8393.js"
import"./currentGuildId-92fe6d54.js"
import"./cmdExport-f5d5b9e2.js"
import"./indexAjaxJson-bf365b96.js"
import"./idb-d8a4a427.js"
import"./numberIsNaN-2f104aa2.js"
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
//# sourceMappingURL=rank-a728f4d8.js.map
