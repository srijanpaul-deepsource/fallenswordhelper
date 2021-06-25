import{bs as n,$ as t,S as e,t as o,B as r,h as c,i as s,ay as a,aI as i,m as u,ag as d,A as m,u as l,w as p,M as f,z as h,g as b,k as g,C as N,D as y,o as C,bP as j,W as $,cb as D,Q as T}from"./calfSystem-a2fd9017.js"
import{c as k}from"./createSpan-42da4831.js"
import{c as v}from"./createTBody-6cf259c5.js"
import{c as E}from"./createTable-fb7a908d.js"
import{i as B}from"./insertTextBeforeEnd-5cd2b8c8.js"
import{i as x}from"./isArray-fb536e29.js"
import{a as A}from"./allthen-2719c129.js"
import{c as S}from"./chunk-c0e724c2.js"
import{e as Q}from"./errorDialog-1238d963.js"
import{g as w}from"./getArrayByClassName-44af3bfd.js"
import{h as I}from"./hideElement-7486432a.js"
import"./all-ceaf9817.js"
import"./dialogMsg-edbc265b.js"
function L(){return n({subcmd:"loadcomponents"})}let O,_,q
function M(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function R(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function z(n){const t=v()
return function(n){O=n.r.reduce(M,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(O).reduce(R,"")}`),t}function P(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=k()
return r(t,e),e}(t)),B(e," / TODO")}function V(n,t){if(!x(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=E({className:"fshTblCenter",id:"fshTally"})
return c(t,z(n)),P(t,n),t}(t)))}function W(n){const t=u(),e=k({className:`sendLink ${d(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),c(t,e),s(t,"]"),t}function F(t){return n({subcmd:"destroycomponent",removeIndex:t})}function G(n,t){const e=p(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function H(n){return l({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(G,n))}function J(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function K(n){return A(n.map(H),J)}function U(n){return t(F,K,n)}function X(){if(!_){const n=f("inventory-table",h("profileRightColumn"))
2===n.length&&([,_]=n)}return _}function Y(n,t){return n[t.dataset.tipped.match(g)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!q){const n=b("img",X())
q=n.reduce(Y,{})}return q}()))}function tn(n){const t=X().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(N(r))
c-=n,m(c,r)}function en(n){n.s&&x(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return U(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=y(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(N(e))-1
m(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return c(n,W(t)),n}function un(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const dn=[["quick-extract-components",function(){e("components","insertQuickExtract"),$(D)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
I(t)
const o=t.parentNode
c(o,W("Delete All Visible")),b("img",X()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
w("compDelBtn",t).forEach(T)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(g),r=e[1]
U([e[2]]).then(Q).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(L).then(o(V,n))}],["compDelType",function(n){const t=O[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(e)
const c=S(30,t).map(rn)
A(c,o(on,e))}]]
function mn(n){const t=n.parentNode
c(t,sn.reduce(an,u({className:"fshCenter"}))),C(t,j(dn))}function ln(){const n=X()
n&&mn(n)}export default ln
//# sourceMappingURL=components-22c1e7e8.js.map
