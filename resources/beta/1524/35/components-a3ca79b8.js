import{u as n,v as t,E as e,az as o,bp as r,$ as c,W as s,t as a,B as i,h as m,i as u,an as d,ax as p,m as f,A as l,w as h,K as b,z as g,g as N,k as y,C,D as j,o as $,bP as v,X as D,cb as T,R as k}from"./calfSystem-03050396.js"
import{c as E}from"./createSpan-8d9e047a.js"
import{c as x}from"./createTBody-1db68872.js"
import{c as B}from"./createTable-fc21d3c3.js"
import{a as A}from"./allthen-e8de2991.js"
import{i as S}from"./insertTextBeforeEnd-2526ea52.js"
import{i as _}from"./isArray-c05157b9.js"
import{t as w}from"./toLowerCase-5dc9e42d.js"
import{c as L}from"./chunk-e04f591f.js"
import{e as Q}from"./errorDialog-f7744f6f.js"
import{g as R}from"./getArrayByClassName-0b05e230.js"
import{h as q}from"./hideElement-2c661b2e.js"
import"./all-3be74659.js"
import"./dialogMsg-eb4e9d8f.js"
const z=/\?item_id=(\d+)&inv_id=(\d+)&.*&vcode=([0-9a-f]+)/
function I(n){const t=n.children[0].dataset.tipped.match(z)
return{a:Number(t[2]),b:Number(t[1]),v:t[3]}}const K=n=>e('a[href*="=destroycomponent&"]',n).map(I),M=n=>e('td[background*="1x1mini"]',n).length
function O(n){const e=n.map(t),o=e.map(K),r=[].concat(...o)
return{h:{cm:e.map(M).reduce(((n,t)=>n+t),0)},r:r}}function P(n){const r=t(n),c=e('a[href*="profile&component_page="]',r).map((n=>o(n.href)))
return A(c,O)}function V(){return n({cmd:"profile"}).then(P)}function W(){return r({subcmd:"loadcomponents"})}let X,F,G
function H(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function J(n,t){return`${n}<tr><td><img src="${d}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${p()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function U(n){const t=x()
return function(n){X=n.r.reduce(H,{})}(n),u(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(X).reduce(J,"")}`),t}function Y(n,t){const e=function(n){const t=n.insertRow(-1)
u(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
m(e,function(n){const t=n.r.length,e=E()
return i(t,e),e}(t)),S(e,` / ${t.h.cm.toString()}`)}function Z(n,t){if(!_(t.r))return
const e=n.parentNode
e&&(i("",e),m(e,function(n){const t=B({className:"fshTblCenter",id:"fshTally"})
return m(t,U(n)),Y(t,n),t}(t)))}function nn(n){const t=f(),e=E({className:`sendLink ${w(n).replace(/ /g,"-")}`,textContent:n})
return l("[",t),m(t,e),u(t,"]"),t}function tn(n){return r({subcmd:"destroycomponent",removeIndex:n})}function en(n,t){const e=h(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function on(t){return n({cmd:"profile",subcmd:"destroycomponent",component_id:t}).then(a(en,t))}function rn(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function cn(n){return A(n.map(on),rn)}function sn(n){return c(tn,cn,n)}function an(){if(!F){const n=b("inventory-table",g("profileRightColumn"))
2===n.length&&([,F]=n)}return F}function mn(n,t){return n[t.dataset.tipped.match(y)[2]]=t.parentNode.parentNode,n}function un(n,t){n[t]&&i("",n[t])}function dn(n){n.forEach(a(un,function(){if(!G){const n=N("img",an())
G=n.reduce(mn,{})}return G}()))}function pn(n){const t=an().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if("TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(C(r))
c-=n,l(c,r)}function fn(n){n.s&&_(n.r)&&(dn(n.r),pn(n.r.length))}function ln(n){n.parentNode.remove()}function hn(n){return sn(n).then(fn)}function bn(n,t,e){e.s&&(!function(n){const t=j(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(C(e))-1
l(o,e)}(t),pn(1),n.parentNode&&i("",n.parentNode))}const gn=["Enable Quick Del","Count Components","Quick Extract Components"]
function Nn(n,t){return m(n,nn(t)),n}function yn(n){u(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const Cn=[["quick-extract-components",function(){s("components","insertQuickExtract"),D(T)}],["enable-quick-del",function(n){s("components","enableDelComponent")
const t=n.parentNode
q(t)
const e=t.parentNode
m(e,nn("Delete All Visible")),N("img",an()).forEach(yn)}],["delete-all-visible",function(n){s("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
R("compDelBtn",t).forEach(k)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(y),o=e[1]
sn([e[2]]).then(Q).then(a(bn,n,o))}],["count-components",function(n){s("components","countComponent"),c(W,V).then(a(Z,n))}],["compDelType",function(n){const t=X[n.dataset.compid].del,e=n.parentNode
!function(n){i("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${d}ui/misc/spinner.gif')`}(e)
const o=L(30,t).map(hn)
A(o,a(ln,e))}]]
function jn(n){const t=n.parentNode
m(t,gn.reduce(Nn,f({className:"fshCenter"}))),$(t,v(Cn))}function $n(){const n=an()
n&&jn(n)}export default $n
//# sourceMappingURL=components-a3ca79b8.js.map
