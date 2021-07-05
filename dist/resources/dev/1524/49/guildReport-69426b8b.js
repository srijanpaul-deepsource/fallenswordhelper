import{o as t,bV as n,b as e,p as o,t as a,aj as r,B as i,aC as s,T as c,bE as u,aM as l,m as p,b3 as f,bD as d,P as m,h as b,n as g,f as h,a as y,e as M,A as j,i as L,q as x,a6 as C,af as $,C as I,c as v,a5 as T,S as E,E as H,aK as N,aQ as R,y as S}from"./calfSystem-9ab64478.js"
import{c as k}from"./currentGuildId-c05147ac.js"
import{e as w}from"./useItem-d6cae79f.js"
import{a as A}from"./queue-d4db638a.js"
import{g as B}from"./getMembrList-ad7be9d5.js"
import{b as D}from"./batch-53744af0.js"
import{e as G}from"./eventHandler5-653e18d2.js"
import{i as F}from"./isChecked-ecfa0022.js"
import{s as P}from"./selfIdIs-21ffa3c4.js"
import{t as W}from"./testRange-8b988294.js"
import{c as _}from"./createInput-48825441.js"
import{c as q}from"./createSelect-7e51edd8.js"
import{c as J}from"./createTable-54039451.js"
import{c as Q}from"./createTr-048aa3a4.js"
import{g as K,s as U}from"./idb-9da90398.js"
import{o as V}from"./onlineDot-1df6212d.js"
import"./dialog-f1cd510f.js"
import"./indexAjaxJson-b31a9d3b.js"
import"./daUseItem-94ec6cfd.js"
import"./errorDialog-e8577c9a.js"
import"./htmlResult-4fc4b99a.js"
import"./takeItem-3d07b862.js"
import"./guild-3e01f77e.js"
import"./cmdExport-22edc582.js"
import"./numberIsNaN-9a364388.js"
function Y(t){return t.match(/&id=(\d+)/)[1]}const z=`<span class="guildReportSpinner" style="background-image: url('${s}ui/misc/spinner.gif');"></span>`
function O(t){i('<span class="fastWorn">Worn</span>',t)}function X(t){return t.match(u)[1]}function Z(t,n,e){1!==e.r&&("recall"===t?function(t){i('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):O(n))}function tt(t,n,e,o){A(Y(n),X(n),e,o).then(a(Z,o,t))}function nt(t,n,e){tt(t,n,e,"recall")}const et=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),nt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),nt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(X(n))===l()?w(Y(n)).then(a(O,t)):tt(t,n,0,"wear")}]]
const ot=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(et.find(a(r,t))[1](n,e),i(z,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
const at='<span class="sendLink fast-bp">Fast BP</span> | ',rt='<span class="sendLink fast-gs">Fast GS</span>',it=' | <span class="sendLink fast-wear">Fast Wear</span>'
let st,ct,ut,lt,pt
const ft=[[!0,!0,function(){return lt||(lt=p({innerHTML:at+rt+it})),lt.cloneNode(!0)}],[!0,!1,function(){return pt||(pt=p({innerHTML:rt+it})),pt.cloneNode(!0)}],[!1,!0,function(){return ut||(ut=p({innerHTML:at+rt})),ut.cloneNode(!0)}],[!1,!1,function(){return ct||(ct=p({innerHTML:rt})),ct.cloneNode(!0)}]]
function dt(t,n,e){return e[0]===t&&e[1]===n}function mt(t){const n=!(st||(st=new RegExp("<b>|Bottle|Brew|Draft|Elixir|Potion|Jagua Egg|Gut Rot Head Splitter|Serum")),st).test(t.previousElementSibling.innerHTML),e=2===t.children.length
return ft.find(a(dt,n,e))[2]()}function bt(t,n,e){return n[e]=t[e],n}function gt(t){return f(t).sort(d).reduce(a(bt,t),{})}let ht,yt,Mt
function jt(t,n,e,o){return"Ignore"!==t.myMap[o]&&(e[t.myMap[o]]?e[t.myMap[o]]+=n[o]:e[t.myMap[o]]=n[o]),e}function Lt(t,n,e,o){return`${e}<tr><td>${o}</td><td style="background-color: ${function(t){const n=Math.max(Math.min(t,100),0)
let e,o
return n<50?(e=255,o=Math.round(5.1*n)):(o=255,e=Math.round(510-5.1*n)),`#${`000000${(65536*e+256*o+0).toString(16)}`.slice(-6)}`}((n[o]-t.minpoint)/(t.maxpoint-t.minpoint)*100)};">${n[o].toString()}</td></tr>`}function xt(t,n){c("potReport","drawInventory")
const e=gt(f(n).reduce(a(jt,t,n),{}))
i(`<table><tbody>${f(e).reduce(a(Lt,t,e),"")}</tbody></table>`,ht)}function Ct(){const t=Q()
return t.insertCell(-1),t.insertCell(-1),t}function $t(t){const n=g("option",e)
var e
return n.value=t,n.text=t,n}function It(t,n){b(t,$t(n[0]))}function vt(){if(!Mt){Mt=Ct()
const t=q({style:{width:"130px"}})
Mt.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',b(Mt.cells[1],t)}return Mt.cloneNode(!0)}function Tt(t,n){const e=vt()
j(n[0],e.cells[0])
const o=e.cells[1].children[0]
b(o,$t(n[1])),[o.name,o.value]=n,b(t.tBodies[0],e)}function Et(t,n,e){const o=_({id:n,type:"button",value:e})
b(t.cells[1],o)}function Ht(t){const n=Ct()
Et(n,"fshIgnoreAll","Ignore All"),L(n.cells[1],"&nbsp;"),Et(n,"fshReset","Reset"),b(t.tBodies[0],n)}function Nt(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
i("",e),b(e,$t("Ignore")),M(t).forEach(a(It,e)),e.value=o}}function Rt(t){c("potReport","drawMapping")
const n=J({innerHTML:"<tbody></tbody>"})
yt.replaceChild(n,yt.children[0]),h(yt,"mousedown",a(Nt,t.myMap)),y(3,D,[[5,3,M(t.myMap),0,a(Tt,n),a(Ht,n)]])}const St="fsh_potMap",kt={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function wt(t,n){t.myMap[n]||(t.myMap[n]=n)}function At(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,U(St,t),xt(t,n))}function Bt(t,n,e){return n[e]=t?"Ignore":e,n}function Dt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(Bt,e),{})}(t,n,e),U(St,t),Rt(t),xt(t,n)}function Gt(t){return/^pottab\d$/.test(t.id)}function Ft(t,n){t[n.id]=n.checked,U(St,t)}function Pt(t,n,e){const o=e.target.id,a=W(e.target.value,0,999)
a&&(t[o]=a,U(St,t),xt(t,n))}function Wt(n,e,o){h(o,"change",a(At,n,e)),t(o,G(function(t,n){return[[P("fshIgnoreAll"),a(Dt,t,n,!0)],[P("fshReset"),a(Dt,t,n,null)],[Gt,a(Ft,t)]]}(n,e))),h(o,"input",a(Pt,n,e))}function _t(t,n){const e=function(t){return p({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${F(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${F(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${F(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=p({id:"panels"})
b(e,r),function(t,n,e){ht=p({id:"inventory"}),t.pottab1?xt(t,n):m(e.parentNode.children[0],"change",a(xt,t,n)),b(e,ht)}(t,n,r),function(t,n){yt=p({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?Rt(t):m(n.parentNode.children[2],"change",a(Rt,t)),b(n,yt)}(t,r),function(t,n){const e=p({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
b(n,e)}(t,r),b(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Wt(t,n,e),e}(t,n),e)}function qt(t,n){const e=x({},kt)
x(e,C(n,{})),e.myMap=function(t,n){return f(n).forEach(a(wt,t)),gt(t.myMap)}(e,t),U(St,e),_t(e,t)}function Jt(t){o&&K(St).then(a(qt,t))}let Qt,Kt,Ut,Vt,Yt
function zt(t,n){const e=Kt[n]
b(e,t)}function Ot(t){Qt.push(mt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Ut[n]=(Ut[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Xt(){D([5,3,Qt,0,zt,a(Jt,Ut)])}function Zt(){Kt=$("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Ut={},Qt=[],D([5,3,Kt,0,Ot,Xt])}function tn(t){const n=I(t)
v.membrList[n]&&i(function(t){return`${V({last_login:v.membrList[t].last_login})}<a href="${T}${v.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function nn(){const t=$('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
D([5,3,t,0,tn])}function en(t){t.children[0].hasAttribute("bgcolor")&&(Yt=R(Vt,t.children[0].children[0])),Yt||(t.className="fshHide")}function on(){if(Vt=E("user"),!Vt)return
if(!H('#pCC table table td[bgcolor="#DAA534"] b').some(N(Vt)))return
const t=$("#pCC table table tr")
D([5,2,t,0,en])}function an(){!S()&&k()&&(!async function(){await B(!1),y(3,nn)}(),y(2,on),y(3,Zt),t(e("table",o)[1],n(ot)))}export default an
//# sourceMappingURL=guildReport-69426b8b.js.map
