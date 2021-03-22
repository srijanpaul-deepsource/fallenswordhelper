import{o as t,bP as n,b as e,p as o,t as a,c0 as s,B as r,an as i,W as c,by as p,ax as l,m as u,aP as f,Q as d,h as m,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a5 as x,ac as C,C as $,c as v,a4 as I,S as k,E as N,av as H,aC as R,y as S}from"./calfSystem-03050396.js"
import{e as T}from"./useItem-d974c16e.js"
import{i as E,a as w}from"./queue-b16256f2.js"
import{g as A}from"./getMembrList-59c1e7a8.js"
import{b as B}from"./batch-003cd06a.js"
import{e as G}from"./eventHandler5-bd60a2ea.js"
import{i as P}from"./isChecked-36c474a7.js"
import{s as W}from"./selfIdIs-b14a16c9.js"
import{a as D}from"./alpha-5123f505.js"
import{t as F}from"./testRange-b67918af.js"
import{c as _}from"./createInput-c4b18abd.js"
import{c as q}from"./createSelect-b198aed8.js"
import{c as J}from"./createTable-fc21d3c3.js"
import{c as Q}from"./createTr-2af648e3.js"
import{g as U,s as Y}from"./idb-02fb3250.js"
import{o as z}from"./onlineDot-77b2d184.js"
import"./dialog-bd85dd64.js"
import"./dialogMsg-eb4e9d8f.js"
import"./indexAjaxJson-d9ed18eb.js"
import"./daUseItem-1cbe13aa.js"
import"./errorDialog-f7744f6f.js"
import"./backpack-9260425d.js"
import"./htmlResult-c1deb73a.js"
import"./takeItem-094b39bf.js"
import"./guild-61d59bbe.js"
import"./currentGuildId-4235046f.js"
import"./cmdExport-c8e611b1.js"
import"./toLowerCase-5dc9e42d.js"
import"./numberIsNaN-1e8b4508.js"
const K=`<span class="guildReportSpinner" style="background-image: url('${i}ui/misc/spinner.gif');"></span>`
function O(t){r('<span class="fastWorn">Worn</span>',t)}function V(t){return t.match(p)[1]}function X(t,n,e){1!==e.r&&("recall"===t?function(t){r('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):O(n))}function Z(t,n,e,o){w(E(n),V(n),e,o).then(a(X,o,t))}function tt(t,n,e){Z(t,n,e,"recall")}const nt=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),tt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),tt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(V(n))===l()?T(E(n)).then(a(O,t)):Z(t,n,0,"wear")}]]
const et=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(nt.find(a(s,t))[1](n,e),r(K,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const ot='<span class="sendLink fast-bp">Fast BP</span> | ',at='<span class="sendLink fast-gs">Fast GS</span>',st=' | <span class="sendLink fast-wear">Fast Wear</span>'
let rt,it,ct,pt,lt
const ut=[[!0,!0,function(){return pt||(pt=u({innerHTML:ot+at+st})),pt.cloneNode(!0)}],[!0,!1,function(){return lt||(lt=u({innerHTML:at+st})),lt.cloneNode(!0)}],[!1,!0,function(){return ct||(ct=u({innerHTML:ot+at})),ct.cloneNode(!0)}],[!1,!1,function(){return it||(it=u({innerHTML:at})),it.cloneNode(!0)}]]
function ft(t,n,e){return e[0]===t&&e[1]===n}function dt(t){const n=!(rt||(rt=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),rt).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return ut.find(a(ft,n,e))[2]()}function mt(t,n,e){return n[e]=t[e],n}function bt(t){return f(t).sort(D).reduce(a(mt,t),{})}let gt,ht,yt
function Mt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function jt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function Lt(t,n){c("potReport","drawInventory")
const e=bt(f(n).reduce(a(Mt,t,n),{}))
r(`<table><tbody>${f(e).reduce(a(jt,t,e),"")}</tbody></table>`,gt)}function xt(){const t=Q()
return t.insertCell(-1),t.insertCell(-1),t}function Ct(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function $t(t,n){m(t,Ct(n[0]))}function vt(){if(!yt){yt=xt()
const t=q({className:"tip-static",dataset:{tipped:'Set to "Ignore" to exclude from report'},style:{width:"130px"}})
m(yt.cells[1],t)}return yt.cloneNode(!0)}function It(t,n){const e=vt()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
m(o,Ct(n[1])),[o.name,o.value]=n,m(t.tBodies[0],e)}function kt(t,n,e){const o=_({id:n,type:"button",value:e})
m(t.cells[1],o)}function Nt(t){const n=xt()
kt(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),kt(n,"fshReset","Reset"),m(t.tBodies[0],n)}function Ht(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
r("",e),m(e,Ct("Ignore")),y(t).forEach(a($t,e)),e.value=o}}function Rt(t){c("potReport","drawMapping")
const n=J({innerHTML:"<tbody></tbody>"})
ht.replaceChild(n,ht.children[0]),g(ht,"mousedown",a(Ht,t.myMap)),h(3,B,[[5,3,y(t.myMap),0,a(It,n),a(Nt,n)]])}const St="fsh_potMap",Tt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function Et(t,n){t.myMap[n]||(t.myMap[n]=n)}function wt(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,Y(St,t),Lt(t,n))}function At(t,n,e){return n[e]=t?"Ignore":e,n}function Bt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(At,e),{})}(t,n,e),Y(St,t),Rt(t),Lt(t,n)}function Gt(t){return/^pottab\d$/.test(t.id)}function Pt(t,n){t[n.id]=n.checked,Y(St,t)}function Wt(t,n,e){const o=e.target.id,a=F(e.target.value,0,999)
a&&(t[o]=a,Y(St,t),Lt(t,n))}function Dt(n,e,o){g(o,"change",a(wt,n,e)),t(o,G(function(t,n){return[[W("fshIgnoreAll"),a(Bt,t,n,!0)],[W("fshReset"),a(Bt,t,n,null)],[Gt,a(Pt,t)]]}(n,e))),g(o,"input",a(Wt,n,e))}function Ft(t,n){const e=function(t){return u({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${P(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${P(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${P(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),s=u({id:"panels"})
m(e,s),function(t,n,e){gt=u({id:"inventory"}),t.pottab1?Lt(t,n):d(e.parentNode.children[0],"change",a(Lt,t,n)),m(e,gt)}(t,n,s),function(t,n){ht=u({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?Rt(t):d(n.parentNode.children[2],"change",a(Rt,t)),m(n,ht)}(t,s),function(t,n){const e=u({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
m(n,e)}(t,s),m(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Dt(t,n,e),e}(t,n),e)}function _t(t,n){const e=L({},Tt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(Et,t)),bt(t.myMap)}(e,t),Y(St,e),Ft(e,t)}function qt(t){U(St).then(a(_t,t))}let Jt,Qt,Ut,Yt,zt
function Kt(t,n){const e=Qt[n]
m(e,t)}function Ot(t){Jt.push(dt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Ut[n]=(Ut[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Vt(){B([5,3,Jt,0,Kt,a(qt,Ut)])}function Xt(){Qt=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Ut={},Jt=[],B([5,3,Qt,0,Ot,Vt])}function Zt(t){const n=$(t)
v.membrList[n]&&r(function(t){return`${z({last_login:v.membrList[t].last_login})}<a href="${I}${v.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function tn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
B([5,3,t,0,Zt])}function nn(t){t.children[0].hasAttribute("bgcolor")&&(zt=R(Yt,t.children[0].children[0])),zt||(t.className="fshHide")}function en(){if(Yt=k("user"),!Yt)return
if(!N('#pCC table table td[bgcolor="#DAA534"] b').some(H(Yt)))return
const t=C("#pCC table table tr")
B([5,2,t,0,nn])}function on(){h(3,tn)}function an(){S()||(A(!1).then(on),h(2,en),h(3,Xt),t(e("table",o)[1],n(et)))}export default an
//# sourceMappingURL=guildReport-f3a8ab7e.js.map
