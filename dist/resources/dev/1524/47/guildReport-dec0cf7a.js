import{o as t,bT as n,b as e,p as o,t as a,ai as r,B as i,aB as s,T as c,bD as u,aL as l,m as p,b2 as f,bC as d,P as m,h as b,n as g,f as h,a as y,e as M,A as j,i as L,q as x,a5 as C,ae as $,C as I,c as T,a4 as v,S as H,E as N,aJ as R,aP as S,y as k}from"./calfSystem-bfc1f6c0.js"
import{c as E}from"./currentGuildId-92fe6d54.js"
import{e as w}from"./useItem-80915e5f.js"
import{a as A}from"./queue-82465d37.js"
import{g as B}from"./getMembrList-c0254b8a.js"
import{b as D}from"./batch-8ae36ec2.js"
import{e as G}from"./eventHandler5-1e102314.js"
import{i as P}from"./isChecked-5c7617f4.js"
import{s as F}from"./selfIdIs-600cb25f.js"
import{t as W}from"./testRange-c05346fa.js"
import{c as _}from"./createInput-02002827.js"
import{c as J}from"./createSelect-9df19b0f.js"
import{c as q}from"./createTable-57eae8d3.js"
import{c as Q}from"./createTr-a7569eaa.js"
import{g as U,s as Y}from"./idb-d8a4a427.js"
import{o as z}from"./onlineDot-3ab91a4e.js"
import"./dialog-a4dfa31d.js"
import"./dialogMsg-edbc265b.js"
import"./indexAjaxJson-bf365b96.js"
import"./daUseItem-c696811e.js"
import"./errorDialog-1238d963.js"
import"./htmlResult-f4aeaae6.js"
import"./takeItem-929bdfdd.js"
import"./guild-ba17fcb6.js"
import"./cmdExport-f5d5b9e2.js"
import"./numberIsNaN-2f104aa2.js"
function K(t){return t.match(/&id=(\d+)/)[1]}const O=`<span class="guildReportSpinner" style="background-image: url('${s}ui/misc/spinner.gif');"></span>`
function V(t){i('<span class="fastWorn">Worn</span>',t)}function X(t){return t.match(u)[1]}function Z(t,n,e){1!==e.r&&("recall"===t?function(t){i('<span class="fastWorn">You successfully recalled the item</span>',t)}(n):V(n))}function tt(t,n,e,o){A(K(n),X(n),e,o).then(a(Z,o,t))}function nt(t,n,e){tt(t,n,e,"recall")}const et=[["fast-bp",function(t,n){c("GuildReport","Fast BP"),nt(t,n,0)}],["fast-gs",function(t,n){c("GuildReport","Fast GS"),nt(t,n,1)}],["fast-wear",function(t,n){c("GuildReport","Fast Wear"),Number(X(n))===l()?w(K(n)).then(a(V,t)):tt(t,n,0,"wear")}]]
const ot=[["sendLink",function(t){const n=t.parentNode.parentNode
if(!n)return
const{href:e}=n.children[0]
e&&(et.find(a(r,t))[1](n,e),i(O,n))}],["a-reply",function(t){window.openQuickMsgDialog(t.getAttribute("target_player"))}]]
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
return n.value=t,n.text=t,n}function It(t,n){b(t,$t(n[0]))}function Tt(){if(!Mt){Mt=Ct()
const t=J({style:{width:"130px"}})
Mt.cells[1].dataset.tooltip='Set to "Ignore" to exclude from report',b(Mt.cells[1],t)}return Mt.cloneNode(!0)}function vt(t,n){const e=Tt()
j(n[0],e.cells[0])
const o=e.cells[1].children[0]
b(o,$t(n[1])),[o.name,o.value]=n,b(t.tBodies[0],e)}function Ht(t,n,e){const o=_({id:n,type:"button",value:e})
b(t.cells[1],o)}function Nt(t){const n=Ct()
Ht(n,"fshIgnoreAll","Ignore All"),L(n.cells[1],"&nbsp;"),Ht(n,"fshReset","Reset"),b(t.tBodies[0],n)}function Rt(t,n){if("SELECT"===n.target.tagName){const e=n.target,{value:o}=e
i("",e),b(e,$t("Ignore")),M(t).forEach(a(It,e)),e.value=o}}function St(t){c("potReport","drawMapping")
const n=q({innerHTML:"<tbody></tbody>"})
yt.replaceChild(n,yt.children[0]),h(yt,"mousedown",a(Rt,t.myMap)),y(3,D,[[5,3,M(t.myMap),0,a(vt,n),a(Nt,n)]])}const kt="fsh_potMap",Et={pottab1:!1,pottab2:!1,pottab3:!1,myMap:{},minpoint:12,maxpoint:20}
function wt(t,n){t.myMap[n]||(t.myMap[n]=n)}function At(t,n,e){"SELECT"===e.target.tagName&&(t.myMap[e.target.name]=e.target.value,Y(kt,t),xt(t,n))}function Bt(t,n,e){return n[e]=t?"Ignore":e,n}function Dt(t,n,e){!function(t,n,e){t.myMap=f(n).reduce(a(Bt,e),{})}(t,n,e),Y(kt,t),St(t),xt(t,n)}function Gt(t){return/^pottab\d$/.test(t.id)}function Pt(t,n){t[n.id]=n.checked,Y(kt,t)}function Ft(t,n,e){const o=e.target.id,a=W(e.target.value,0,999)
a&&(t[o]=a,Y(kt,t),xt(t,n))}function Wt(n,e,o){h(o,"change",a(At,n,e)),t(o,G(function(t,n){return[[F("fshIgnoreAll"),a(Dt,t,n,!0)],[F("fshReset"),a(Dt,t,n,null)],[Gt,a(Pt,t)]]}(n,e))),h(o,"input",a(Ft,n,e))}function _t(t,n){const e=function(t){return p({id:"potReport",innerHTML:`<input id="pottab1" type="checkbox"${P(t.pottab1)}><label for="pottab1">Composed Potion Inventory</label><input id="pottab2" type="checkbox"${P(t.pottab2)}><label for="pottab2">Mapping</label><input id="pottab3" type="checkbox"${P(t.pottab3)}><label for="pottab3">Thresholds</label>`})}(t),r=p({id:"panels"})
b(e,r),function(t,n,e){ht=p({id:"inventory"}),t.pottab1?xt(t,n):m(e.parentNode.children[0],"change",a(xt,t,n)),b(e,ht)}(t,n,r),function(t,n){yt=p({id:"mapping",innerHTML:"<p></p>"}),t.pottab2?St(t):m(n.parentNode.children[2],"change",a(St,t)),b(n,yt)}(t,r),function(t,n){const e=p({id:"thresholds",innerHTML:`Min:<input id="minpoint" type="number" value="${t.minpoint}" min="0" max="999">Max:<input id="maxpoint" type="number" value="${t.maxpoint}" min="0" max="999">`})
b(n,e)}(t,r),b(function(t,n){const e=o.lastElementChild.insertRow(2).insertCell(-1)
return Wt(t,n,e),e}(t,n),e)}function Jt(t,n){const e=x({},Et)
x(e,C(n,{})),e.myMap=function(t,n){return f(n).forEach(a(wt,t)),gt(t.myMap)}(e,t),Y(kt,e),_t(e,t)}function qt(t){o&&U(kt).then(a(Jt,t))}let Qt,Ut,Yt,zt,Kt
function Ot(t,n){const e=Ut[n]
b(e,t)}function Vt(t){Qt.push(mt(t)),function(t){if(t.endsWith(" (Potion)")){const n=t.slice(0,-9)
Yt[n]=(Yt[n]||0)+1}}(t.previousElementSibling.innerHTML)}function Xt(){D([5,3,Qt,0,Ot,a(qt,Yt)])}function Zt(){Ut=$("#pCC table table tr:not(.fshHide) td:nth-of-type(3n)"),Yt={},Qt=[],D([5,3,Ut,0,Vt,Xt])}function tn(t){const n=I(t)
T.membrList[n]&&i(function(t){return`${z({last_login:T.membrList[t].last_login})}<a href="${v}${T.membrList[t].id}">${t}</a> [ <span class="a-reply fshLink" target_player=${t}>m</span> ]`}(n),t)}function nn(){const t=$('#pCC table table tr:not(.fshHide) td[bgcolor="#DAA534"][colspan="2"] b')
D([5,3,t,0,tn])}function en(t){t.children[0].hasAttribute("bgcolor")&&(Kt=S(zt,t.children[0].children[0])),Kt||(t.className="fshHide")}function on(){if(zt=H("user"),!zt)return
if(!N('#pCC table table td[bgcolor="#DAA534"] b').some(R(zt)))return
const t=$("#pCC table table tr")
D([5,2,t,0,en])}function an(){!k()&&E()&&(!async function(){await B(!1),y(3,nn)}(),y(2,on),y(3,Zt),t(e("table",o)[1],n(ot)))}export default an
//# sourceMappingURL=guildReport-dec0cf7a.js.map
