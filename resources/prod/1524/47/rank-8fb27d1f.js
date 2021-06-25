import{q as n,$ as t,D as r,o as e,t as s,i as a,h as o,C as i,ab as c,u,I as f,p as d,ag as p,y as m,e as l,ar as h}from"./calfSystem-a2fd9017.js"
import{b}from"./batch-0f132e33.js"
import{g}from"./getMembrList-be74c9ce.js"
import{n as j}from"./notLastUpdate-4c06ebf4.js"
import{b as w}from"./bitwiseAnd-66d656b9.js"
import{c as k}from"./createInput-ca1e27eb.js"
import{c as x}from"./createSpan-42da4831.js"
import{g as N}from"./guild-74003e6b.js"
import{r as v}from"./replaceChild-018a3df2.js"
import{r as I}from"./roundToString-042f58fd.js"
import{i as S}from"./insertElementBefore-165ce171.js"
import{p as y}from"./playerName-fab1659b.js"
import"./currentGuildId-871ea013.js"
import"./cmdExport-84fee8d4.js"
import"./indexAjaxJson-9619f1ba.js"
import"./idb-09e8fa3a.js"
import"./numberIsNaN-2f104aa2.js"
function C(n,t){return n+t}function B(t){return N(n({subcmd:"ranks"},t))}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function _(n,t){const r=t.children[0],e=i(r.firstChild),s=n.find((n=>n&&n.name===e))
var a
s&&c(r,`<span class="fshBlue">(${a=s.permissions,I(E.filter((([n])=>w(a,n))).reduce(((n,[,t])=>n+t-1),0)+a.toString(2).split("").map(Number).reduce(C,0),1)}) Tax:(${s.tax}%)</span> `)}function U(n,t,r){r.s&&(n.forEach(s(_,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function $(n,r){const e=x({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
v(e,r),t(B).then(s(U,n,e))}function A(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=k({className:"custombutton",type:"button",value:"Get Rank Weightings"})
e(r,s($,n,r))
const i=t.parentNode.parentNode
a(i,"&nbsp;"),o(i,r)}(n,t)}function G(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function L(n,t){return B({subcmd2:n,rank_id:t})}let R
function D(n,r,e){const s=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var a,o
a=p(n.target.value),o=s[1],t(L,G,a,o)
const i=r.parentNode.rows[e]
S(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function M(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return R>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||D(n,t,r)}function T(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&M(n)}function q(n,t){return t[0]===n}function F(n,t){const r=t.children[0],e=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),o=n.find(s(q,e));(function(n){return n&&n[1].length>0})(o)&&(!function(n,t){t&&t[1].includes(y())&&(R=n.rowIndex)}(t,o),a(r,` <span class="fshBlue">- ${o[1].join(", ")}</span>`))}function J(n){const t=function(){const n=d.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return h(n.rows[7].children[0].children[0].rows)}()
t&&(b([5,3,t,1,s(F,n)]),A(t),R&&f("ajaxifyRankControls")&&e(d,T,!0))}function P(n,t){const r=n.find(s(q,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function W(n){return l(n).filter(j).reduce(P,[])}function z(){m()||g(!1).then(W).then(J)}export default z
//# sourceMappingURL=rank-8fb27d1f.js.map
