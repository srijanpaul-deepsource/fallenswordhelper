import{o as t,bM as n,b as e,p as o,t as a,bZ as r,B as i,au as s,W as c,bu as u,aD as p,m as l,aU as f,Q as m,h as d,n as b,f as g,a as h,e as y,A as M,i as j,q as L,a5 as x,ac as C,C as $,c as I,a4 as v,S as H,E as N,aB as R,aH as S,y as T}from"./calfSystem-15b00143.js"
import{e as k}from"./useItem-a4028e58.js"
import{a as E}from"./queue-45c57c49.js"
import{g as w}from"./getMembrList-5ac332a8.js"
import{b as A}from"./batch-37795904.js"
import{e as B}from"./eventHandler5-618e181e.js"
import{i as D}from"./isChecked-cf65e779.js"
import{s as G}from"./selfIdIs-b6892aa6.js"
import{a as W}from"./alpha-7993f8ac.js"
import{t as F}from"./testRange-596d1063.js"
import{c as P}from"./createInput-ff6bf89d.js"
import{c as _}from"./createSelect-0ca50808.js"
import{c as q}from"./createTable-c2551f6f.js"
import{c as J}from"./createTr-e1e496d4.js"
import{g as Q,s as U}from"./idb-1c9eb1ac.js"
import{o as Y}from"./onlineDot-4297be27.js"
import"./dialog-aad1c6e1.js"
import"./dialogMsg-5b0fd825.js"
import"./indexAjaxJson-430cd162.js"
import"./daUseItem-654b871a.js"
import"./errorDialog-14a51b34.js"
import"./htmlResult-fa6afb78.js"
import"./takeItem-f1be436e.js"
import"./guild-d096f588.js"
import"./currentGuildId-ad15ffa8.js"
import"./cmdExport-22e87ca6.js"
import"./toLowerCase-8d8df902.js"
import"./numberIsNaN-484c0124.js"
function Z(t){return t.match(/&id=(\d+)/)[1]}const z=`<span class="guildReportSpinner" style="background-image: url('${s}ui/misc/spinner.gif');"></span>`
function K(t){i('<span class="fastWorn">Worn</span>',t)}function O(t){return t.match(u)[1]}function V(t,n,e){1!==e.r&&("recall"===t?function(t){i('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):K(n))}function X(t,n,e,o){E(Z(n),O(n),e,o).then(a(V,o,t))}function tt(t,n,e){X(t,n,e,"recall")}const nt=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),tt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),tt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(O(n))===p()?k(Z(n)).then(a(K,t)):X(t,n,0,"wear")}]]
const et=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(nt.find(a(r,t))[1](n,e),i(z,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const ot='<span class="sendLink fast-bp">Fast BP</span> | ',at='<span class="sendLink fast-gs">Fast GS</span>',rt=' | <span class="sendLink fast-wear">Fast Wear</span>'
let it,st,ct,ut,pt
const lt=[[!0,!0,function(){return ut||(ut=l({innerHTML:ot+at+rt})),ut.cloneNode(!0)}],[!0,!1,function(){return pt||(pt=l({innerHTML:at+rt})),pt.cloneNode(!0)}],[!1,!0,function(){return ct||(ct=l({innerHTML:ot+at})),ct.cloneNode(!0)}],[!1,!1,function(){return st||(st=l({innerHTML:at})),st.cloneNode(!0)}]]
function ft(t,n,e){return e[0]===t&&e[1]===n}function mt(t){const n=!(it||(it=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),it).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return lt.find(a(ft,n,e))[2]()}function dt(t,n,e){return n[e]=t[e],n}function bt(t){return f(t).sort(W).reduce(a(dt,t),{})}let gt,ht,yt
function Mt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function jt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function Lt(t,n){c("potReport","drawInventory")
const e=bt(f(n).reduce(a(Mt,t,n),{}))
i(`<table><tbody>${f(e).reduce(a(jt,t,e),"")}</tbody></table>`,gt)}function xt(){const t=J()
return t.insertCell(-1),t.insertCell(-1),t}function Ct(t){const n=b("option",e)
var e
return n.value=t,n.text=t,n}function $t(t,n){d(t,Ct(n[0]))}function It(){if(!yt){yt=xt()
const t=_({className:"tip-static",dataset:{tipped:'Set to "Ignore" to exclude from report'},style:{width:"130px"}})
d(yt.cells[1],t)}return yt.cloneNode(!0)}function vt(t,n){const e=It()
M(n[0],e.cells[0])
const o=e.cells[1].children[0]
d(o,Ct(n[1])),[o.name,o.value]=n,d(t.tBodies[0],e)}function Ht(t,n,e){const o=P({id:n,type:"button",value:e})
d(t.cells[1],o)}function Nt(t){const n=xt()
Ht(n,"fshIgnoreAll","Ignore All"),j(n.cells[1],"&nbsp;"),Ht(n,"fshReset","Reset"),d(t.tBodies[0],n)}function Rt(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
i("",e),d(e,Ct("Ignore")),y(t).forEach(a($t,e)),e.value=o}}function St(t){c("potReport","drawMapping")
const n=q({innerHTML:"<tbody></tbody>"})
ht.replaceChild(n,ht.children[0]),g(ht,"mousedown",a(Rt,t.myMap)),h(3,A,[[5,3,y(t.myMap),0,a(vt,n),a(Nt,n)]])}const Tt="fsh_potMap",kt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function Et(t,n){t.myMap[n]||(t.myMap[n]=n)}function wt(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,U(Tt,t),Lt(t,n))}function At(t,n,e){return n[e]=t?"Ignore":e,n}function Bt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(At,e),{})}(t,n,e),U(Tt,t),St(t),Lt(t,n)}function Dt(t){return/^pottab\d$/.test(t.id)}function Gt(t,n){t[n.id]=n.checked,U(Tt,t)}function Wt(t,n,e){const o=e.target.id,a=F(e.target.value,0,999)
a&&(t[o]=a,U(Tt,t),Lt(t,n))}function Ft(n,e,o){g(o,"change",a(wt,n,e)),t(o,B(function(t,n){return[[G("fshIgnoreAll"),a(Bt,t,n,!0)],[G("fshReset"),a(Bt,t,n,null)],[Dt,a(Gt,t)]]}(n,e))),g(o,"input",a(Wt,n,e))}function Pt(t,n){const e=function(t){return l({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${D(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${D(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${D(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=l({id:"panels"})
d(e,r),function(t,n,e){gt=l({id:"inventory"}),t.pottab1?Lt(t,n):m(e.parentNode.children[0],"change",a(Lt,t,n)),d(e,gt)}(t,n,r),function(t,n){ht=l({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?St(t):m(n.parentNode.children[2],"change",a(St,t)),d(n,ht)}(t,r),function(t,n){const e=l({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
d(n,e)}(t,r),d(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Ft(t,n,e),e}(t,n),e)}function _t(t,n){const e=L({},kt)
L(e,x(n,{})),e.myMap=function(t,n){return f(n).forEach(a(Et,t)),bt(t.myMap)}(e,t),U(Tt,e),Pt(e,t)}function qt(t){Q(Tt).then(a(_t,t))}let Jt,Qt,Ut,Yt,Zt
function zt(t,n){const e=Qt[n]
d(e,t)}function Kt(t){Jt.push(mt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Ut[n]=(Ut[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Ot(){A([5,3,Jt,0,zt,a(qt,Ut)])}function Vt(){Qt=C("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Ut={},Jt=[],A([5,3,Qt,0,Kt,Ot])}function Xt(t){const n=$(t)
I.membrList[n]&&i(function(t){return`${Y({last_login:I.membrList[t].last_login})}<a href="${v}${I.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function tn(){const t=C('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
A([5,3,t,0,Xt])}function nn(t){t.children[0].hasAttribute("bgcolor")&&(Zt=S(Yt,t.children[0].children[0])),Zt||(t.className="fshHide")}function en(){if(Yt=H("user"),!Yt)return
if(!N('#pCC table table td[bgcolor="#DAA534"] b').some(R(Yt)))return
const t=C("#pCC table table tr")
A([5,2,t,0,nn])}function on(){h(3,tn)}function an(){T()||(w(!1).then(on),h(2,en),h(3,Vt),t(e("table",o)[1],n(et)))}export default an
//# sourceMappingURL=guildReport-18420df6.js.map
