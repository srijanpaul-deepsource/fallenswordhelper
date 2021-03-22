import{o as t,bQ as n,b as e,p as o,t as a,c1 as s,B as r,ao as i,X as c,bw as p,ay as l,m as u,aS as f,Q as d,h as m,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a6 as x,ad as C,C as $,c as I,a5 as k,T as v,E as N,aw as T,aD as w,y as H}from"./calfSystem-186455ab.js"
import{e as R}from"./useItem-93fd109f.js"
import{i as S,a as E}from"./queue-fa1cf464.js"
import{g as A}from"./getMembrList-c6679e1f.js"
import{b as B}from"./batch-a036d767.js"
import{e as D}from"./eventHandler5-021bd420.js"
import{i as G}from"./isChecked-36c474a7.js"
import{s as F}from"./selfIdIs-b3f24820.js"
import{a as W}from"./alpha-5123f505.js"
import{t as P}from"./testRange-b67918af.js"
import{c as _}from"./createInput-d71226f9.js"
import{c as Q}from"./createSelect-3c00643c.js"
import{c as q}from"./createTable-4ac162e1.js"
import{c as J}from"./createTr-bcff0e09.js"
import{g as U,s as X}from"./idb-97f66b86.js"
import{o as Y}from"./onlineDot-c09eceb7.js"
import"./dialog-bd85dd64.js"
import"./dialogMsg-eb4e9d8f.js"
import"./indexAjaxJson-d4ea205b.js"
import"./daUseItem-efd2f584.js"
import"./errorDialog-f7744f6f.js"
import"./backpack-b90c384c.js"
import"./htmlResult-6abf2074.js"
import"./takeItem-1446e931.js"
import"./guild-7919b015.js"
import"./currentGuildId-7dd95943.js"
import"./cmdExport-c033d991.js"
import"./toLowerCase-5dc9e42d.js"
import"./numberIsNaN-1e8b4508.js"
const z=`<span class="guildReportSpinner" style="background-image: url('${i}ui/misc/spinner.gif');"></span>`
function K(t){r('<span class="fastWorn">Worn</span>',t)}function O(t){return t.match(p)[1]}function V(t,n,e){1!==e.r&&("recall"===t?function(t){r('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):K(n))}function Z(t,n,e,o){E(S(n),O(n),e,o).then(a(V,o,t))}function tt(t,n,e){Z(t,n,e,"recall")}const nt=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),tt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),tt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(O(n))===l()?R(S(n)).then(a(K,t)):Z(t,n,0,"wear")}]]
const et=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(nt.find(a(s,t))[1](n,e),r(z,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const ot='<span class="sendLink fast-bp">Fast BP</span> | ',at='<span class="sendLink fast-gs">Fast GS</span>',st=' | <span class="sendLink fast-wear">Fast Wear</span>'
let rt,it,ct,pt,lt
const ut=[[!0,!0,function(){return pt||(pt=u({innerHTML:ot+at+st})),pt.cloneNode(!0)}],[!0,!1,function(){return lt||(lt=u({innerHTML:at+st})),lt.cloneNode(!0)}],[!1,!0,function(){return ct||(ct=u({innerHTML:ot+at})),ct.cloneNode(!0)}],[!1,!1,function(){return it||(it=u({innerHTML:at})),it.cloneNode(!0)}]]
function ft(t,n,e){return e[0]===t&&e[1]===n}function dt(t){const n=!(rt||(rt=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),rt).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return ut.find(a(ft,n,e))[2]()}function mt(t,n,e){return n[e]=t[e],n}function bt(t){return f(t).sort(W).reduce(a(mt,t),{})}let gt,ht,yt
function Mt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function jt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function Lt(t,n){c("potReport","drawInventory")
const e=bt(f(n).reduce(a(Mt,t,n),{}))
r(`<table><tbody>${f(e).reduce(a(jt,t,e),"")}</tbody></table>`,gt)}function xt(){const t=J()
return t.insertCell(-1),t.insertCell(-1),t}function Ct(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function $t(t,n){m(t,Ct(n[0]))}function It(){if(!yt){yt=xt()
const t=Q({className:"tip-static",dataset:{tipped:'Set to "Ignore" to exclude from report'},style:{width:"130px"}})
m(yt.cells[1],t)}return yt.cloneNode(!0)}function kt(t,n){const e=It()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
m(o,Ct(n[1])),[o.name,o.value]=n,m(t.tBodies[0],e)}function vt(t,n,e){const o=_({id:n,type:"button",value:e})
m(t.cells[1],o)}function Nt(t){const n=xt()
vt(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),vt(n,"fshReset","Reset"),m(t.tBodies[0],n)}function Tt(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
r("",e),m(e,Ct("Ignore")),y(t).forEach(a($t,e)),e.value=o}}function wt(t){c("potReport","drawMapping")
const n=q({innerHTML:"<tbody></tbody>"})
ht.replaceChild(n,ht.children[0]),g(ht,"mousedown",a(Tt,t.myMap)),h(3,B,[[5,3,y(t.myMap),0,a(kt,n),a(Nt,n)]])}const Ht="fsh_potMap",Rt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function St(t,n){t.myMap[n]||(t.myMap[n]=n)}function Et(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,X(Ht,t),Lt(t,n))}function At(t,n,e){return n[e]=t?"Ignore":e,n}function Bt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(At,e),{})}(t,n,e),X(Ht,t),wt(t),Lt(t,n)}function Dt(t){return/^pottab\d$/.test(t.id)}function Gt(t,n){t[n.id]=n.checked,X(Ht,t)}function Ft(t,n,e){const o=e.target.id,a=P(e.target.value,0,999)
a&&(t[o]=a,X(Ht,t),Lt(t,n))}function Wt(n,e,o){g(o,"change",a(Et,n,e)),t(o,D(function(t,n){return[[F("fshIgnoreAll"),a(Bt,t,n,!0)],[F("fshReset"),a(Bt,t,n,null)],[Dt,a(Gt,t)]]}(n,e))),g(o,"input",a(Ft,n,e))}function Pt(t,n){const e=function(t){return u({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${G(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${G(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${G(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),s=u({id:"panels"})
m(e,s),function(t,n,e){gt=u({id:"inventory"}),t.pottab1?Lt(t,n):d(e.parentNode.children[0],"change",a(Lt,t,n)),m(e,gt)}(t,n,s),function(t,n){ht=u({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?wt(t):d(n.parentNode.children[2],"change",a(wt,t)),m(n,ht)}(t,s),function(t,n){const e=u({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
m(n,e)}(t,s),m(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Wt(t,n,e),e}(t,n),e)}function _t(t,n){const e=L({},Rt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(St,t)),bt(t.myMap)}(e,t),X(Ht,e),Pt(e,t)}function Qt(t){U(Ht).then(a(_t,t))}let qt,Jt,Ut,Xt,Yt
function zt(t,n){const e=Jt[n]
m(e,t)}function Kt(t){qt.push(dt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Ut[n]=(Ut[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Ot(){B([5,3,qt,0,zt,a(Qt,Ut)])}function Vt(){Jt=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Ut={},qt=[],B([5,3,Jt,0,Kt,Ot])}function Zt(t){const n=$(t)
I.membrList[n]&&r(function(t){return`${Y({last_login:I.membrList[t].last_login})}<a href="${k}${I.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function tn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
B([5,3,t,0,Zt])}function nn(t){t.children[0].hasAttribute("bgcolor")&&(Yt=w(Xt,t.children[0].children[0])),Yt||(t.className="fshHide")}function en(){if(Xt=v("user"),!Xt)return
if(!N('#pCC table table td[bgcolor="#DAA534"] b').some(T(Xt)))return
const t=C("#pCC table table tr")
B([5,2,t,0,nn])}function on(){h(3,tn)}function an(){H()||(A(!1).then(on),h(2,en),h(3,Vt),t(e("table",o)[1],n(et)))}export default an
//# sourceMappingURL=guildReport-515e61aa.js.map
