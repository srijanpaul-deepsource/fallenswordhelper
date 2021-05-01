import{o as t,bL as n,b as e,p as o,t as a,bY as r,B as i,at as s,W as c,bt as p,aC as u,m as l,aT as f,Q as d,h as m,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a5 as x,ac as C,C as $,c as I,a4 as v,S as N,E as T,aA as H,aG as R,y as S}from"./calfSystem-540da563.js"
import{e as k}from"./useItem-fbfe96d5.js"
import{a as E}from"./queue-68ea17af.js"
import{g as w}from"./getMembrList-ae5a867b.js"
import{b as A}from"./batch-735e3bee.js"
import{e as G}from"./eventHandler5-4ae9b593.js"
import{i as B}from"./isChecked-a9c3c9fe.js"
import{s as W}from"./selfIdIs-d0add4a2.js"
import{a as D}from"./alpha-9ef10f70.js"
import{t as F}from"./testRange-84753860.js"
import{c as P}from"./createInput-7c5a8b53.js"
import{c as _}from"./createSelect-3cae9ccd.js"
import{c as q}from"./createTable-4d8f73c4.js"
import{c as J}from"./createTr-786c06ed.js"
import{g as Q,s as Y}from"./idb-62a50947.js"
import{o as U}from"./onlineDot-87712eda.js"
import"./dialog-17ce66e6.js"
import"./dialogMsg-3d2031b8.js"
import"./indexAjaxJson-8f18f901.js"
import"./daUseItem-22018080.js"
import"./errorDialog-58b05366.js"
import"./htmlResult-4423160d.js"
import"./takeItem-aeb2188c.js"
import"./guild-7417abb7.js"
import"./currentGuildId-dc83d308.js"
import"./cmdExport-a330f27a.js"
import"./toLowerCase-d053e281.js"
import"./numberIsNaN-2764ce9c.js"
function z(t){return t.match(/&id=(\d+)/)[1]}const K=`<span class="guildReportSpinner" style="background-image: url('${s}ui/misc/spinner.gif');"></span>`
function O(t){i('<span class="fastWorn">Worn</span>',t)}function V(t){return t.match(p)[1]}function X(t,n,e){1!==e.r&&("recall"===t?function(t){i('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):O(n))}function Z(t,n,e,o){E(z(n),V(n),e,o).then(a(X,o,t))}function tt(t,n,e){Z(t,n,e,"recall")}const nt=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),tt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),tt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(V(n))===u()?k(z(n)).then(a(O,t)):Z(t,n,0,"wear")}]]
const et=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(nt.find(a(r,t))[1](n,e),i(K,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const ot='<span class="sendLink fast-bp">Fast BP</span> | ',at='<span class="sendLink fast-gs">Fast GS</span>',rt=' | <span class="sendLink fast-wear">Fast Wear</span>'
let it,st,ct,pt,ut
const lt=[[!0,!0,function(){return pt||(pt=l({innerHTML:ot+at+rt})),pt.cloneNode(!0)}],[!0,!1,function(){return ut||(ut=l({innerHTML:at+rt})),ut.cloneNode(!0)}],[!1,!0,function(){return ct||(ct=l({innerHTML:ot+at})),ct.cloneNode(!0)}],[!1,!1,function(){return st||(st=l({innerHTML:at})),st.cloneNode(!0)}]]
function ft(t,n,e){return e[0]===t&&e[1]===n}function dt(t){const n=!(it||(it=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),it).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return lt.find(a(ft,n,e))[2]()}function mt(t,n,e){return n[e]=t[e],n}function bt(t){return f(t).sort(D).reduce(a(mt,t),{})}let gt,ht,yt
function Mt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function jt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function Lt(t,n){c("potReport","drawInventory")
const e=bt(f(n).reduce(a(Mt,t,n),{}))
i(`<table><tbody>${f(e).reduce(a(jt,t,e),"")}</tbody></table>`,gt)}function xt(){const t=J()
return t.insertCell(-1),t.insertCell(-1),t}function Ct(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function $t(t,n){m(t,Ct(n[0]))}function It(){if(!yt){yt=xt()
const t=_({className:"tip-static",dataset:{tipped:'Set to "Ignore" to exclude from report'},style:{width:"130px"}})
m(yt.cells[1],t)}return yt.cloneNode(!0)}function vt(t,n){const e=It()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
m(o,Ct(n[1])),[o.name,o.value]=n,m(t.tBodies[0],e)}function Nt(t,n,e){const o=P({id:n,type:"button",value:e})
m(t.cells[1],o)}function Tt(t){const n=xt()
Nt(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),Nt(n,"fshReset","Reset"),m(t.tBodies[0],n)}function Ht(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
i("",e),m(e,Ct("Ignore")),y(t).forEach(a($t,e)),e.value=o}}function Rt(t){c("potReport","drawMapping")
const n=q({innerHTML:"<tbody></tbody>"})
ht.replaceChild(n,ht.children[0]),g(ht,"mousedown",a(Ht,t.myMap)),h(3,A,[[5,3,y(t.myMap),0,a(vt,n),a(Tt,n)]])}const St="fsh_potMap",kt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function Et(t,n){t.myMap[n]||(t.myMap[n]=n)}function wt(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,Y(St,t),Lt(t,n))}function At(t,n,e){return n[e]=t?"Ignore":e,n}function Gt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(At,e),{})}(t,n,e),Y(St,t),Rt(t),Lt(t,n)}function Bt(t){return/^pottab\d$/.test(t.id)}function Wt(t,n){t[n.id]=n.checked,Y(St,t)}function Dt(t,n,e){const o=e.target.id,a=F(e.target.value,0,999)
a&&(t[o]=a,Y(St,t),Lt(t,n))}function Ft(n,e,o){g(o,"change",a(wt,n,e)),t(o,G(function(t,n){return[[W("fshIgnoreAll"),a(Gt,t,n,!0)],[W("fshReset"),a(Gt,t,n,null)],[Bt,a(Wt,t)]]}(n,e))),g(o,"input",a(Dt,n,e))}function Pt(t,n){const e=function(t){return l({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${B(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${B(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${B(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=l({id:"panels"})
m(e,r),function(t,n,e){gt=l({id:"inventory"}),t.pottab1?Lt(t,n):d(e.parentNode.children[0],"change",a(Lt,t,n)),m(e,gt)}(t,n,r),function(t,n){ht=l({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?Rt(t):d(n.parentNode.children[2],"change",a(Rt,t)),m(n,ht)}(t,r),function(t,n){const e=l({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
m(n,e)}(t,r),m(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Ft(t,n,e),e}(t,n),e)}function _t(t,n){const e=L({},kt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(Et,t)),bt(t.myMap)}(e,t),Y(St,e),Pt(e,t)}function qt(t){Q(St).then(a(_t,t))}let Jt,Qt,Yt,Ut,zt
function Kt(t,n){const e=Qt[n]
m(e,t)}function Ot(t){Jt.push(dt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Yt[n]=(Yt[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Vt(){A([5,3,Jt,0,Kt,a(qt,Yt)])}function Xt(){Qt=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Yt={},Jt=[],A([5,3,Qt,0,Ot,Vt])}function Zt(t){const n=$(t)
I.membrList[n]&&i(function(t){return`${U({last_login:I.membrList[t].last_login})}<a href="${v}${I.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function tn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
A([5,3,t,0,Zt])}function nn(t){t.children[0].hasAttribute("bgcolor")&&(zt=R(Ut,t.children[0].children[0])),zt||(t.className="fshHide")}function en(){if(Ut=N("user"),!Ut)return
if(!T('#pCC table table td[bgcolor="#DAA534"] b').some(H(Ut)))return
const t=C("#pCC table table tr")
A([5,2,t,0,nn])}function on(){h(3,tn)}function an(){S()||(w(!1).then(on),h(2,en),h(3,Xt),t(e("table",o)[1],n(et)))}export default an
//# sourceMappingURL=guildReport-cad1fc1a.js.map
