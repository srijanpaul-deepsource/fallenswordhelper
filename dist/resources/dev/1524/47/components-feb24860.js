import{bw as n,$ as t,T as e,t as o,Q as c,B as r,h as s,i as a,aB as i,aL as u,m as d,ah as l,A as m,u as p,w as f,M as h,z as b,g as N,k as g,C,D as y,o as T,bT as $,X as j,ce as D,R as k}from"./calfSystem-bfc1f6c0.js"
import{c as v}from"./createSpan-009a409b.js"
import{c as B}from"./createTBody-6a96517d.js"
import{c as E}from"./createTable-57eae8d3.js"
import{i as x}from"./insertTextBeforeEnd-16ab61b0.js"
import{a as A}from"./allthen-2719c129.js"
import{c as S}from"./chunk-c0e724c2.js"
import{e as w}from"./errorDialog-1238d963.js"
import{g as L}from"./getArrayByClassName-2fc630c7.js"
import{h as Q}from"./hideElement-7486432a.js"
import"./all-ceaf9817.js"
import"./dialogMsg-edbc265b.js"
function O(){return n({subcmd:"loadcomponents"})}let R,_,q
function I(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function M(n,t){return`${n}<tr><td><img src="${i}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${u()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function z(n){const t=B()
return function(n){R=n.r.reduce(I,{})}(n),a(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(R).reduce(M,"")}`),t}function V(n,t){const e=function(n){const t=n.insertRow(-1)
a(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
s(e,function(n){const t=n.r.length,e=v()
return r(t,e),e}(t)),x(e," / TODO")}function X(n,t){if(!c(t.r))return
const e=n.parentNode
e&&(r("",e),s(e,function(n){const t=E({className:"fshTblCenter",id:"fshTally"})
return s(t,z(n)),V(t,n),t}(t)))}function F(n){const t=d(),e=v({className:`sendLink ${l(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),s(t,e),a(t,"]"),t}function G(t){return n({subcmd:"destroycomponent",removeIndex:t})}function H(n,t){const e=f(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function J(n){return p({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(H,n))}function K(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function P(n){return A(n.map(J),K)}function U(n){return t(G,P,n)}function W(){if(!_){const n=h("inventory-table",b("profileRightColumn"))
2===n.length&&([,_]=n)}return _}function Y(n,t){return n[t.dataset.tipped.match(g)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!q){const n=N("img",W())
q=n.reduce(Y,{})}return q}()))}function tn(n){const t=W().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,c=o[o.length-1].cells[1].children[0]
let r=Number(C(c))
r-=n,m(r,c)}function en(n){n.s&&c(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function cn(n){return U(n).then(en)}function rn(n,t,e){e.s&&(!function(n){const t=y(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(C(e))-1
m(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return s(n,F(t)),n}function un(n){a(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const dn=[["quick-extract-components",function(){e("components","insertQuickExtract"),j(D)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
Q(t)
const o=t.parentNode
s(o,F("Delete All Visible")),N("img",W()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(k)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(g),c=e[1]
U([e[2]]).then(w).then(o(rn,n,c))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(X,n))}],["compDelType",function(n){const t=R[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${i}ui/misc/spinner.gif')`}(e)
const c=S(30,t).map(cn)
A(c,o(on,e))}]]
function ln(n){const t=n.parentNode
s(t,sn.reduce(an,d({className:"fshCenter"}))),T(t,$(dn))}function mn(){const n=W()
n&&ln(n)}export default mn
//# sourceMappingURL=components-feb24860.js.map
