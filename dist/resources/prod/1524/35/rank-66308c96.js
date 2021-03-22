import{q as n,u as t,v as r,E as e,D as s,$ as a,o,t as i,i as c,h as u,C as d,aa as m,I as f,p,y as l,e as h,N as b}from"./calfSystem-fe0ebf32.js"
import{b as g}from"./batch-0d4bdf85.js"
import{g as j}from"./getMembrList-48fdd1f0.js"
import{n as k}from"./notLastUpdate-03352984.js"
import{b as N}from"./bitwiseAnd-b4e86482.js"
import{c as v}from"./createInput-47702c1d.js"
import{c as w}from"./createSpan-0da61261.js"
import{g as x}from"./guild-8f63aac2.js"
import{a as _}from"./allthen-e8de2991.js"
import{r as C}from"./replaceChild-b7da266a.js"
import{r as I}from"./roundToString-29c5853e.js"
import{i as S}from"./insertElementBefore-9228b012.js"
import{p as y}from"./playerName-dca56241.js"
import{t as E}from"./toLowerCase-5dc9e42d.js"
import"./currentGuildId-09820c92.js"
import"./cmdExport-fd555515.js"
import"./indexAjaxJson-a9fbc5f9.js"
import"./idb-b0de0ac7.js"
import"./all-3be74659.js"
import"./numberIsNaN-1e8b4508.js"
function B(t){return x(n({subcmd:"ranks"},t))}const A=n=>{return r=n.getAttribute("onclick").match(/[=](\d+)/)[1],t({cmd:"guild",subcmd:"ranks",subcmd2:"add",rank_id:r})
var r},L=n=>e('input[name^="permission"]:checked',n).reduce(((n,t)=>n+2**Number(t.name.match(/\[(\d+)\]/)[1])),0)
function U(n){return{id:Number(s('input[name="rank_id"]',n).value),name:s('input[name="rank_name"]',n).value,permissions:L(n),tax:Number(s('input[name="rank_tax"]',n).value)}}function $(n){const t=n.map(r).map(U)
return{r:{0:t[0],ranks:t.slice(1)},s:!0}}function G(n){const t=r(n),s=e('input[value="Edit"]',t)
return _(s.map(A),$)}function R(){return t({cmd:"guild",subcmd:"ranks"}).then(G)}const D=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function M(n,t){const r=t.children[0],e=d(r.firstChild),s=n.find((n=>n&&n.name===e))
var a
s&&m(r,`<span class="fshBlue">(${a=s.permissions,I(D.filter((([n])=>N(a,n))).reduce(((n,[,t])=>n+t-1),0)+a.toString(2).split("").map(Number).reduce(((n,t)=>n+t),0),1)}) Tax:(${s.tax}%)</span> `)}function T(n,t,r){r.s&&(n.forEach(i(M,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function q(n,t){const r=w({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
C(r,t),a(B,R).then(i(T,n,r))}function F(n){const t=s('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=v({className:"custombutton",type:"button",value:"Get Rank Weightings"})
o(r,i(q,n,r))
const e=t.parentNode.parentNode
c(e,"&nbsp;"),u(e,r)}(n,t)}function J(n,r){return t({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:r}).then((()=>({s:!0})))}function P(n,t){return B({subcmd2:n,rank_id:t})}let W
function z(n,t,r){const e=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var s,o
s=E(n.target.value),o=e[1],a(P,J,s,o)
const i=t.parentNode.rows[r]
S(t,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function H(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return W>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||z(n,t,r)}function K(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&H(n)}function O(n,t){return t[0]===n}function Q(n,t){const r=t.children[0],e=function(n,t){return 1===n.rowIndex?"Guild Founder":d(t)}(t,r),s=n.find(i(O,e));(function(n){return n&&n[1].length>0})(s)&&(!function(n,t){t&&t[1].includes(y())&&(W=n.rowIndex)}(t,s),c(r,` <span class="fshBlue">- ${s[1].join(", ")}</span>`))}function V(n){const t=function(){const n=p.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return b(n.rows[7].children[0].children[0].rows)}()
t&&(g([5,3,t,1,i(Q,n)]),F(t),W&&f("ajaxifyRankControls")&&o(p,K,!0))}function X(n,t){const r=n.find(i(O,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function Y(n){return h(n).filter(k).reduce(X,[])}function Z(){l()||j(!1).then(Y).then(V)}export default Z
//# sourceMappingURL=rank-66308c96.js.map
