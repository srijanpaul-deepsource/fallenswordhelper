import{bx as n,$ as t,T as e,t as o,Q as r,B as c,h as s,i as a,aC as i,aM as u,m as l,ai as d,A as m,u as p,w as f,M as h,z as b,g as N,k as g,C,D as y,o as T,bV as $,Y as D,cf as j,R as k}from"./calfSystem-9ab64478.js"
import{c as v}from"./createSpan-7ce539c8.js"
import{c as E}from"./createTBody-70b55e74.js"
import{c as x}from"./createTable-54039451.js"
import{i as B}from"./insertTextBeforeEnd-d4183c50.js"
import{a as A}from"./allthen-f7cedfa7.js"
import{c as S}from"./chunk-91a9a131.js"
import{e as Q}from"./errorDialog-e8577c9a.js"
import{g as w}from"./getArrayByClassName-a799501a.js"
import{h as L}from"./hideElement-3021ab25.js"
import"./all-bb953856.js"
function O(){return n({subcmd:"loadcomponents"})}let R,_,q
function I(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function M(n,t){return`${n}<tr><td><img src="${i}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${u()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function V(n){const t=E()
return function(n){R=n.r.reduce(I,{})}(n),a(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(R).reduce(M,"")}`),t}function z(n,t){const e=function(n){const t=n.insertRow(-1)
a(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
s(e,function(n){const t=n.r.length,e=v()
return c(t,e),e}(t)),B(e," / TODO")}function Y(n,t){if(!r(t.r))return
const e=n.parentNode
e&&(c("",e),s(e,function(n){const t=x({className:"fshTblCenter",id:"fshTally"})
return s(t,V(n)),z(t,n),t}(t)))}function F(n){const t=l(),e=v({className:`sendLink ${d(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),s(t,e),a(t,"]"),t}function G(t){return n({subcmd:"destroycomponent",removeIndex:t})}function H(n,t){const e=f(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function J(n){return p({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(H,n))}function K(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function P(n){return A(n.map(J),K)}function U(n){return t(G,P,n)}function W(){if(!_){const n=h("inventory-table",b("profileRightColumn"))
2===n.length&&([,_]=n)}return _}function X(n,t){return n[t.dataset.tipped.match(g)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&c("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!q){const n=N("img",W())
q=n.reduce(X,{})}return q}()))}function tn(n){const t=W().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(C(r))
c-=n,m(c,r)}function en(n){n.s&&r(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return U(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=y(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(C(e))-1
m(o,e)}(t),tn(1),n.parentNode&&c("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return s(n,F(t)),n}function un(n){a(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const ln=[["quick-extract-components",function(){e("components","insertQuickExtract"),D(j)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
L(t)
const o=t.parentNode
s(o,F("Delete All Visible")),N("img",W()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
w("compDelBtn",t).forEach(k)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(g),r=e[1]
U([e[2]]).then(Q).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(Y,n))}],["compDelType",function(n){const t=R[n.dataset.compid].del,e=n.parentNode
!function(n){c("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${i}ui/misc/spinner.gif')`}(e)
const r=S(30,t).map(rn)
A(r,o(on,e))}]]
function dn(n){const t=n.parentNode
s(t,sn.reduce(an,l({className:"fshCenter"}))),T(t,$(ln))}function mn(){const n=W()
n&&dn(n)}export default mn
//# sourceMappingURL=components-3dd18f53.js.map
