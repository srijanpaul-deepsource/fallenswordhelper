import{a as t}from"./addCommas-5de3e9c4.js"
import{g as e,p as n,aJ as a,bE as s,D as o,i,d as c,m as r,B as l,h as f,I as u,R as d,E as m,b as p,ae as h,a4 as b,o as g,u as N,t as j,v as C,s as S,bG as L,f as v,_ as y,n as $,a$ as k,bC as w,a as x,a7 as T,bg as M,W as A,P as H,S as E,c as R,bH as B,F as I,y as D,bI as G}from"./calfSystem-8af1dca2.js"
import{g as P,c as _}from"./colouredDots-3e58d691.js"
import{l as V}from"./onlineDot-bb9216af.js"
import{s as X}from"./setTipped-71facd91.js"
import F from"./compressBio-ec04542d.js"
import{c as U}from"./createStyle-6339f1bb.js"
import{c as J}from"./currentGuildId-ae75dbfc.js"
import{a as O,g as W,c as z,b as Q}from"./levelHighlight-823ca554.js"
import{b as Z}from"./batch-891ec1a6.js"
import{o as q}from"./openQuickBuffByName-ad6d10b7.js"
import{d as K}from"./dataRows-a0ea22f1.js"
import{c as Y}from"./createInput-75b7145b.js"
import{c as tt}from"./createUl-c13e9145.js"
import{s as et,g as nt}from"./idb-30d71a28.js"
import{i as at}from"./insertElementAfterBegin-a140326f.js"
import{b as st}from"./simpleCheckbox-1071aa74.js"
import{c as ot}from"./createTBody-075eaa0d.js"
import{c as it}from"./createTable-0267c13e.js"
import{f as ct}from"./formatLocalDateTime-4c03aab5.js"
import{u as rt,l as lt,v as ft,c as ut,m as dt,a as mt,g as pt}from"./indexConstants-5aacac15.js"
import{c as ht,t as bt}from"./toggleVisibilty-6610f442.js"
import{c as gt}from"./createButton-a1d9b50b.js"
import{c as Nt}from"./createTextArea-ea8fa7e1.js"
import{p as jt}from"./playerName-7218c72a.js"
import{c as Ct}from"./createSpan-0e686680.js"
import{h as St}from"./hideElement-3852cc2c.js"
import"./createLabel-02b3d8e2.js"
import"./insertElementBefore-5adb1609.js"
import"./asInt-74ac71c8.js"
import"./intValue-9eb5015a.js"
import"./valueText-ad23c08d.js"
import"./fshOpen-b549d330.js"
import"./isChecked-b16dd421.js"
import"./isDate-5fc0e8bf.js"
import"./numberIsNaN-68797c81.js"
import"./padZ-b9e73e86.js"
function Lt(t,e){const n=s.exec(e.dataset.tipped)
return V({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function vt(){const s=e("b",n).find(a("Members"))
if(s){const e=P(),n=function(t){return t.reduce(Lt,[0,0])}(e)
s.classList.add("tip-static"),X(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,s)}}function yt(t,e){let n
const a=t.replace(/,/g,"").match(e)
return n=a?parseInt(a[1],10):0,n}function $t(e){const n=e.dataset.tipped,a=yt(n,/XP Lock: <b>(\d*)/),s=yt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let a=""
return e>n&&(a="+"),a+t(e-n)}(s,a)}</b>)`)}function kt(){const t=o('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&$t(t)}let wt,xt
function Tt(t){return wt&&t>=O()&&t<=W()}function Mt(t){return xt&&t>=z()&&t<=Q()}const At=t=>[t,s.exec(t.dataset.tipped)[1]],Ht=([,t])=>t<7,Et=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Rt=([t,e])=>[t.parentNode.parentNode.rowIndex,Tt(e),Mt(e)]
const Bt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function It(){const t=m('#pCC a[data-tipped*="<td>VL:</td>"]').map(At).filter(Ht).map(Et).map(Rt),e=t.filter((([,t])=>t)),a=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Bt(t)} {background-color: #4671C8;}`
f(document.body,U(e))}}(e),function(t){if(t.length){const e=`${Bt(t)} {background-color: #FF9900;}`
f(document.body,U(e))}}(a),function(t,e){if(t.length+e.length){const t=p(c,n)
t[t.length-1].classList.add("fshHighlight")}}(e,a)}function Dt(){Number(d("guild_id"))!==J()&&(wt||xt)&&It()}function Gt(){wt=u("highlightPlayersNearMyLvl"),xt=u("highlightGvGPlayersNearMyLvl"),Dt(),u("enableHistoryCompressor")&&function(){const t=e(c,n).slice(-2,-1)[0].rows[0].cells[0],a=r({id:"profile-bio",innerHTML:t.innerHTML})
l("",t),f(t,a),F()}()}function Pt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function _t(t){"smallLink"===t.target.className&&q(t.target.previousElementSibling.text)}function Vt(){const t=h(`#pCC a[href^="${b}"]`)
Z([5,3,t,0,Pt]),g(n,_t)}function Xt(t){return N({cmd:"guild",subcmd:"conflicts",page:t})}function Ft(t,e){l(e,t.insertCell(-1))}function Ut(t,e,n){const a=t.insertRow(t.rows.length-2)
Ft(a,e),Ft(a,n)}function Jt(t,e){Ut(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ot(t,e,n){1===e&&function(t){Ut(t,`<a href="${S}conflicts">Active Conflicts</a>`,"Score")}(n),K(t.rows,7,0).forEach(j(Jt,n))}function Wt(t,e){const n=C(e),a=o('#pCC input[name="page"]',n)
if(!a)return
const s=Number(a.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(a)
!function(t,e,n){const a=o("#pCC > table > tbody > tr > td > table",t)
a&&a.rows.length>3&&Ot(a,e,n)}(n,s,t.node),i>s&&function(t,e,n){Xt(t+1).then(j(e,n))}(s,Wt,t)}function zt(t){const e=t.rows[6].cells[0].children[0]
e&&Xt(1).then(j(Wt,{node:e}))}function Qt(t){t.target.id===L&&y(L,!u(L))}let Zt,qt,Kt,Yt,te,ee,ne,ae,se,oe,ie,ce,re
function le(t,e){return`${t}<option value="${e}">${e}</option>`}function fe(t){return T(t)?"#DEF":t.toLocaleString()}function ue(t,e,n){return`${e}<tr><td>${ct(new Date(1e3*n[rt]))}</td><td>${t}</td><td class="fshRight">${fe(n[lt])}</td><td class="fshRight">${fe(n[ft])}</td><td class="fshRight">${fe(n[ut])}</td><td class="fshRight">${fe(n[dt])}</td><td class="fshRight">${Math.floor(n[ut]/n[dt]*100)}</td><td class="fshRight">${n[mt]}</td><td class="fshRight">${fe(n[pt])}</td></tr>`}function de(t,e){return function(t){return qt&&"- All -"!==qt&&qt!==t}(e)?t:t+te[e].reduce(j(ue,e),"")}function me(){te&&l(k(te).reduce(de,""),Zt),Kt.classList.remove("fshSpinner")}function pe(){Kt.classList.add("fshSpinner"),x(3,me)}function he(t){qt=t.target.value,pe()}function be(t){t&&(te=t,l(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(w).reduce(le,"")}</select>`,Yt),pe())}function ge(){const t=$("th",{textContent:"Member"})
return Yt=r(),f(t,Yt),t}function Ne(){const t=it({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=ge()
f(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Zt=ot(),f(t,Zt)}(t),v(t,"change",he),Kt=r({className:"tgCont fshSpinner64"}),f(Kt,t),Kt}function je(t){ee.value=t,se.classList.remove("fshSpinner")}function Ce(){ee.value='{"lastUpdate": 0, "members": {}}'}function Se(t){A("Update successful"),be(t.members)}function Le(){const t=M(ee.value)
et("fsh_guildActivity",t).then(j(Se,t)).catch(A)}function ve(t,e){const n=gt({className:"custombutton",textContent:t})
return g(n,e),n}function ye(){return se=r({id:"io",className:"fshSpinner64"}),ee=Nt(),ee.setAttribute("autocapitalize","off"),ee.setAttribute("autocomplete","off"),ee.setAttribute("autocorrect","off"),ee.setAttribute("spellcheck","false"),ne=ve("Save",Le),ae=ve("Reset",Ce),f(se,ee),f(se,ht()),f(se,ne),f(se,ae),se}function $e(){return!ie.checked}function ke(t){ie.checked&&"Escape"===t.code&&(ie.checked=!1)}function we(t){$e()&&(t.style.transform=null)}function xe(){E("guildTracker","updateRawData"),oe&&function(t){t&&(se.classList.add("fshSpinner"),x(4,je,[t]))}(oe)}function Te(){const t=function(){const t=r({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return re=Y({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),H(re,"change",xe),f(t,re),t}(),e=tt({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return f(t,e),B(e,t),t}function Me(){const t=Te(),e=function(){const t=r({className:"fsh-dialog-content"})
return f(t,Ne()),f(t,ye()),t}()
f(t,e),v(ie,"change",j(we,t)),f(ce,t)}function Ae(t){t&&(oe=JSON.stringify(t),be(t.members))}function He(){E("guildTracker","openDialog"),nt("fsh_guildActivity").then(Ae),R.dialogIsClosed=$e,i(ce,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Me()}function Ee(){!function(){const t=o("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=r({className:"fsh-tracker"}),a=r({innerHTML:`${st(L)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(a,"change",Qt),f(n,t),f(n,a),at(e,n)}(),ie=Y({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),H(ie,"change",He),ce=r({className:"fsh-dialog"}),f(ce,ie),v(document.body,"keydown",ke),f(document.body,ce)}let Re,Be
function Ie(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function De(){Be?Be.disabled=!Re:function(){const t=p(c,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const a=m(I,e).map(Ie).join("\n")
Be=f(document.body,U(a)).sheet}()}function Ge(){Re=!Re,y("enableStamBars",Re),De(),E("guildManage","StamBars")}function Pe(){!function(){const t=o("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=f(e,r({className:"fshCenter",innerHTML:st("enableStamBars")}))
v(n,"change",Ge)}(),Re=u("enableStamBars"),Re&&De()}function _e(t,e,n){const a=function(t){return Ct({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(n)
f(t,function(t){const e=Ct({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return f(e,t),i(e,"&nbsp;]"),e}(a)),e.id=n,u(n)&&St(e),g(a,bt)}function Ve(t){_e(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xe(t){const e=t.rows[4].cells[1].children[0]
l(e.innerHTML.trim(),e),_e(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Fe(t){_e(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ue(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
l(`[ <a href="${S}reliclist">Control</a> ]&nbsp;`,s)}function Je(t){const e=p("li",t)
if(!e||!e.length)return
const n=e[e.length-1].parentNode
i(n,`<li><a href="${G}${jt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function Oe(t,e){x(3,e,[t])}function We(){if(!n)return
const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Ve,Xe,Fe,Ue,Je].forEach(j(Oe,t))}(t),x(3,Vt),function(t){D()||(u("detailedConflictInfo")&&x(3,zt,[t]),x(4,Ee))}(t),Pe()}function ze(){const t=o('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Qe(){x(3,_),x(3,ze),x(3,kt),x(3,vt),"manage"===R.subcmd&&We(),"view"===R.subcmd&&Gt()}export default Qe
//# sourceMappingURL=guild-c64239fa.js.map
