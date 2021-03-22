import{u as n,v as t,E as e,aA as o,bq as r,$ as c,X as a,t as s,R as i,B as u,h as m,i as d,ao as p,ay as f,m as l,A as h,w as b,K as g,z as N,g as y,k as C,C as $,D as j,o as v,bQ as D,Y as T,cc as k,S as E}from"./calfSystem-186455ab.js"
import{c as x}from"./createSpan-8048fffb.js"
import{c as B}from"./createTBody-26a52307.js"
import{c as S}from"./createTable-4ac162e1.js"
import{a as A}from"./allthen-e8de2991.js"
import{i as _}from"./insertTextBeforeEnd-2ef03822.js"
import{t as w}from"./toLowerCase-5dc9e42d.js"
import{c as L}from"./chunk-e04f591f.js"
import{e as Q}from"./errorDialog-f7744f6f.js"
import{g as q}from"./getArrayByClassName-0545a3cf.js"
import{h as R}from"./hideElement-2c661b2e.js"
import"./all-3be74659.js"
import"./dialogMsg-eb4e9d8f.js"
const I=/\?item_id=(\d+)&inv_id=(\d+)&.*&vcode=([0-9a-f]+)/
function z(n){const t=n.children[0].dataset.tipped.match(I)
return{a:Number(t[2]),b:Number(t[1]),v:t[3]}}const K=n=>e('a[href*="=destroycomponent&"]',n).map(z),M=n=>e('td[background*="1x1mini"]',n).length
function O(n){const e=n.map(t),o=e.map(K),r=[].concat(...o)
return{h:{cm:e.map(M).reduce(((n,t)=>n+t),0)},r:r}}function V(n){const r=t(n),c=e('a[href*="profile&component_page="]',r).map((n=>o(n.href)))
return A(c,O)}function X(){return n({cmd:"profile"}).then(V)}function Y(){return r({subcmd:"loadcomponents"})}let F,G,H
function J(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function P(n,t){return`${n}<tr><td><img src="${p}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${f()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function U(n){const t=B()
return function(n){F=n.r.reduce(J,{})}(n),d(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(F).reduce(P,"")}`),t}function W(n,t){const e=function(n){const t=n.insertRow(-1)
d(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
m(e,function(n){const t=n.r.length,e=x()
return u(t,e),e}(t)),_(e,` / ${t.h.cm.toString()}`)}function Z(n,t){if(!i(t.r))return
const e=n.parentNode
e&&(u("",e),m(e,function(n){const t=S({className:"fshTblCenter",id:"fshTally"})
return m(t,U(n)),W(t,n),t}(t)))}function nn(n){const t=l(),e=x({className:`sendLink ${w(n).replace(/ /g,"-")}`,textContent:n})
return h("[",t),m(t,e),d(t,"]"),t}function tn(n){return r({subcmd:"destroycomponent",removeIndex:n})}function en(n,t){const e=b(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function on(t){return n({cmd:"profile",subcmd:"destroycomponent",component_id:t}).then(s(en,t))}function rn(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function cn(n){return A(n.map(on),rn)}function an(n){return c(tn,cn,n)}function sn(){if(!G){const n=g("inventory-table",N("profileRightColumn"))
2===n.length&&([,G]=n)}return G}function un(n,t){return n[t.dataset.tipped.match(C)[2]]=t.parentNode.parentNode,n}function mn(n,t){n[t]&&u("",n[t])}function dn(n){n.forEach(s(mn,function(){if(!H){const n=y("img",sn())
H=n.reduce(un,{})}return H}()))}function pn(n){const t=sn().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if("TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number($(r))
c-=n,h(c,r)}function fn(n){n.s&&i(n.r)&&(dn(n.r),pn(n.r.length))}function ln(n){n.parentNode.remove()}function hn(n){return an(n).then(fn)}function bn(n,t,e){e.s&&(!function(n){const t=j(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number($(e))-1
h(o,e)}(t),pn(1),n.parentNode&&u("",n.parentNode))}const gn=["Enable Quick Del","Count Components","Quick Extract Components"]
function Nn(n,t){return m(n,nn(t)),n}function yn(n){d(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const Cn=[["quick-extract-components",function(){a("components","insertQuickExtract"),T(k)}],["enable-quick-del",function(n){a("components","enableDelComponent")
const t=n.parentNode
R(t)
const e=t.parentNode
m(e,nn("Delete All Visible")),y("img",sn()).forEach(yn)}],["delete-all-visible",function(n){a("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
q("compDelBtn",t).forEach(E)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(C),o=e[1]
an([e[2]]).then(Q).then(s(bn,n,o))}],["count-components",function(n){a("components","countComponent"),c(Y,X).then(s(Z,n))}],["compDelType",function(n){const t=F[n.dataset.compid].del,e=n.parentNode
!function(n){u("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}(e)
const o=L(30,t).map(hn)
A(o,s(ln,e))}]]
function $n(n){const t=n.parentNode
m(t,gn.reduce(Nn,l({className:"fshCenter"}))),v(t,D(Cn))}function jn(){const n=sn()
n&&$n(n)}export default jn
//# sourceMappingURL=components-ba8f8a9e.js.map
