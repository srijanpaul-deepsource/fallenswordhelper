import{bq as n,$ as t,X as e,t as o,R as r,B as c,h as s,i as a,aw as i,aF as u,m as d,A as m,u as l,w as p,K as f,z as b,g as h,k as N,C as g,D as C,o as y,bP as j,Y as $,cb as D,S as T}from"./calfSystem-c464cb1d.js"
import{c as k}from"./createSpan-79ff8b4f.js"
import{c as v}from"./createTBody-4b5f03a3.js"
import{c as E}from"./createTable-8b5b7f23.js"
import{i as B}from"./insertTextBeforeEnd-6301c804.js"
import{t as x}from"./toLowerCase-d053e281.js"
import{a as S}from"./allthen-7b3f20e7.js"
import{c as w}from"./chunk-b7db8c6b.js"
import{e as A}from"./errorDialog-58b05366.js"
import{g as L}from"./getArrayByClassName-fe0fed4e.js"
import{h as q}from"./hideElement-512851a2.js"
import"./all-be4763d3.js"
import"./dialogMsg-3d2031b8.js"
function O(){return n({subcmd:"loadcomponents"})}let Q,R,_
function I(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function z(n,t){return`${n}<tr><td><img src="${i}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${u()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function F(n){const t=v()
return function(n){Q=n.r.reduce(I,{})}(n),a(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(Q).reduce(z,"")}`),t}function K(n,t){const e=function(n){const t=n.insertRow(-1)
a(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
s(e,function(n){const t=n.r.length,e=k()
return c(t,e),e}(t)),B(e," / TODO")}function M(n,t){if(!r(t.r))return
const e=n.parentNode
e&&(c("",e),s(e,function(n){const t=E({className:"fshTblCenter",id:"fshTally"})
return s(t,F(n)),K(t,n),t}(t)))}function P(n){const t=d(),e=k({className:`sendLink ${x(n).replace(/ /g,"-")}`,textContent:n})
return m("[",t),s(t,e),a(t,"]"),t}function V(t){return n({subcmd:"destroycomponent",removeIndex:t})}function X(n,t){const e=p(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function Y(n){return l({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(X,n))}function G(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function H(n){return S(n.map(Y),G)}function J(n){return t(V,H,n)}function U(){if(!R){const n=f("inventory-table",b("profileRightColumn"))
2===n.length&&([,R]=n)}return R}function W(n,t){return n[t.dataset.tipped.match(N)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&c("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!_){const n=h("img",U())
_=n.reduce(W,{})}return _}()))}function tn(n){const t=U().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(g(r))
c-=n,m(c,r)}function en(n){n.s&&r(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return J(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=C(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(g(e))-1
m(o,e)}(t),tn(1),n.parentNode&&c("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return s(n,P(t)),n}function un(n){a(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const dn=[["quick-extract-components",function(){e("components","insertQuickExtract"),$(D)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
q(t)
const o=t.parentNode
s(o,P("Delete All Visible")),h("img",U()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(T)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(N),r=e[1]
J([e[2]]).then(A).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(M,n))}],["compDelType",function(n){const t=Q[n.dataset.compid].del,e=n.parentNode
!function(n){c("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${i}ui/misc/spinner.gif')`}(e)
const r=w(30,t).map(rn)
S(r,o(on,e))}]]
function mn(n){const t=n.parentNode
s(t,sn.reduce(an,d({className:"fshCenter"}))),y(t,j(dn))}function ln(){const n=U()
n&&mn(n)}export default ln
//# sourceMappingURL=components-225b7f8c.js.map
