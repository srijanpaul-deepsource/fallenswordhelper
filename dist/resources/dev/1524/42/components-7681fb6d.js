import{br as n,$ as t,X as e,t as o,R as r,B as c,h as s,i as a,ax as i,aG as d,m as u,A as m,u as l,w as p,K as f,z as h,g as b,k as N,C as g,D as C,o as y,bQ as j,Y as $,cc as D,S as T}from"./calfSystem-4b6b865d.js"
import{c as k}from"./createSpan-dab32f7a.js"
import{c as v}from"./createTBody-74abfa81.js"
import{c as E}from"./createTable-69c7bb68.js"
import{i as x}from"./insertTextBeforeEnd-9dd02aa8.js"
import{t as B}from"./toLowerCase-8d8df902.js"
import{a as S}from"./allthen-3a0631ad.js"
import{c as A}from"./chunk-89253199.js"
import{e as w}from"./errorDialog-14a51b34.js"
import{g as L}from"./getArrayByClassName-c0c751ca.js"
import{h as Q}from"./hideElement-30ade5f0.js"
import"./all-9f53e8b3.js"
import"./dialogMsg-5b0fd825.js"
function O(){return n({subcmd:"loadcomponents"})}let R,_,q
function I(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function z(n,t){return`${n}<tr><td><img src="${i}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${d()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function G(n){const t=v()
return function(n){R=n.r.reduce(I,{})}(n),a(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(R).reduce(z,"")}`),t}function K(n,t){const e=function(n){const t=n.insertRow(-1)
a(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
s(e,function(n){const t=n.r.length,e=k()
return c(t,e),e}(t)),x(e," / TODO")}function M(n,t){if(!r(t.r))return
const e=n.parentNode
e&&(c("",e),s(e,function(n){const t=E({className:"fshTblCenter",id:"fshTally"})
return s(t,G(n)),K(t,n),t}(t)))}function V(n){const t=u(),e=k({className:`sendLink ${B(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),s(t,e),a(t,"]"),t}function X(t){return n({subcmd:"destroycomponent",removeIndex:t})}function Y(n,t){const e=p(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function F(n){return l({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(Y,n))}function H(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function J(n){return S(n.map(F),H)}function P(n){return t(X,J,n)}function U(){if(!_){const n=f("inventory-table",h("profileRightColumn"))
2===n.length&&([,_]=n)}return _}function W(n,t){return n[t.dataset.tipped.match(N)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&c("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!q){const n=b("img",U())
q=n.reduce(W,{})}return q}()))}function tn(n){const t=U().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(g(r))
c-=n,m(c,r)}function en(n){n.s&&r(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return P(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=C(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(g(e))-1
m(o,e)}(t),tn(1),n.parentNode&&c("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return s(n,V(t)),n}function dn(n){a(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const un=[["quick-extract-components",function(){e("components","insertQuickExtract"),$(D)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
Q(t)
const o=t.parentNode
s(o,V("Delete All Visible")),b("img",U()).forEach(dn)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(T)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(N),r=e[1]
P([e[2]]).then(w).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(M,n))}],["compDelType",function(n){const t=R[n.dataset.compid].del,e=n.parentNode
!function(n){c("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${i}ui/misc/spinner.gif')`}(e)
const r=A(30,t).map(rn)
S(r,o(on,e))}]]
function mn(n){const t=n.parentNode
s(t,sn.reduce(an,u({className:"fshCenter"}))),y(t,j(un))}function ln(){const n=U()
n&&mn(n)}export default ln
//# sourceMappingURL=components-7681fb6d.js.map
