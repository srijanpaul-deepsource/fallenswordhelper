import{bu as n,$ as t,S as e,t as o,B as r,h as c,i as s,aA as a,aK as i,m as u,ag as d,A as m,u as l,w as p,M as f,z as h,g as b,k as g,C as N,D as y,o as C,bT as j,W as T,cd as $,Q as D}from"./calfSystem-365d90f3.js"
import{c as k}from"./createSpan-8a3a7e34.js"
import{c as v}from"./createTBody-ee45d24e.js"
import{c as E}from"./createTable-61e2377b.js"
import{i as B}from"./insertTextBeforeEnd-f8116804.js"
import{i as x}from"./isArray-2f495555.js"
import{a as A}from"./allthen-2ff5fddb.js"
import{c as S}from"./chunk-965f25a6.js"
import{e as Q}from"./errorDialog-d1013a6b.js"
import{g as w}from"./getArrayByClassName-27cf973a.js"
import{h as L}from"./hideElement-e21a7422.js"
import"./all-9b215cd1.js"
import"./dialogMsg-fefcc43f.js"
function O(){return n({subcmd:"loadcomponents"})}let _,q,I
function M(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function R(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function z(n){const t=v()
return function(n){_=n.r.reduce(M,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(_).reduce(R,"")}`),t}function K(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=k()
return r(t,e),e}(t)),B(e," / TODO")}function V(n,t){if(!x(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=E({className:"fshTblCenter",id:"fshTally"})
return c(t,z(n)),K(t,n),t}(t)))}function W(n){const t=u(),e=k({className:`sendLink ${d(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),c(t,e),s(t,"]"),t}function F(t){return n({subcmd:"destroycomponent",removeIndex:t})}function G(n,t){const e=p(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function H(n){return l({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(G,n))}function J(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function P(n){return A(n.map(H),J)}function U(n){return t(F,P,n)}function X(){if(!q){const n=f("inventory-table",h("profileRightColumn"))
2===n.length&&([,q]=n)}return q}function Y(n,t){return n[t.dataset.tipped.match(g)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!I){const n=b("img",X())
I=n.reduce(Y,{})}return I}()))}function tn(n){const t=X().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(N(r))
c-=n,m(c,r)}function en(n){n.s&&x(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return U(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=y(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(N(e))-1
m(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return c(n,W(t)),n}function un(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const dn=[["quick-extract-components",function(){e("components","insertQuickExtract"),T($)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
L(t)
const o=t.parentNode
c(o,W("Delete All Visible")),b("img",X()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
w("compDelBtn",t).forEach(D)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(g),r=e[1]
U([e[2]]).then(Q).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(V,n))}],["compDelType",function(n){const t=_[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(e)
const c=S(30,t).map(rn)
A(c,o(on,e))}]]
function mn(n){const t=n.parentNode
c(t,sn.reduce(an,u({className:"fshCenter"}))),C(t,j(dn))}function ln(){const n=X()
n&&mn(n)}export default ln
//# sourceMappingURL=components-1484c83d.js.map
