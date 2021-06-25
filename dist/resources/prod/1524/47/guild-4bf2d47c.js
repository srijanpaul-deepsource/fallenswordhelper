import{a as t}from"./addCommas-27b35f1c.js"
import{g as e,p as n,aG as a,bA as s,D as o,i,d as c,m as r,B as l,h as f,I as u,R as d,E as m,b as p,ad as h,a3 as b,o as g,u as j,t as N,v as C,s as S,bC as L,f as y,Z as v,n as $,aY as k,by as w,a as x,a6 as M,bd as T,P as A,S as E,c as H,bD as R,F as B,y as D,bE as I}from"./calfSystem-a2fd9017.js"
import{g as G,c as P}from"./colouredDots-e6e48020.js"
import{l as V}from"./onlineDot-20a56643.js"
import{s as X}from"./setTipped-27e246a8.js"
import _ from"./compressBio-3f413ecb.js"
import{c as F}from"./createStyle-15ddb95b.js"
import{c as U}from"./currentGuildId-871ea013.js"
import{a as O,g as Z,c as z,b as J}from"./levelHighlight-c360a2b9.js"
import{b as Q}from"./batch-0f132e33.js"
import{o as W}from"./openQuickBuffByName-713316ef.js"
import{d as Y}from"./dataRows-15e7a209.js"
import{c as q}from"./createInput-ca1e27eb.js"
import{c as K}from"./createUl-2391781a.js"
import{s as tt,g as et}from"./idb-09e8fa3a.js"
import{i as nt}from"./insertElementAfterBegin-0945414a.js"
import{b as at}from"./simpleCheckbox-d5d2e0cb.js"
import{c as st}from"./createTBody-6cf259c5.js"
import{c as ot}from"./createTable-fb7a908d.js"
import{f as it}from"./formatLocalDateTime-c49a8868.js"
import{u as ct,l as rt,v as lt,c as ft,m as ut,a as dt,g as mt}from"./indexConstants-ddd91137.js"
import{c as pt,t as ht}from"./toggleVisibilty-02802a30.js"
import{c as bt}from"./createButton-66938c57.js"
import{c as gt}from"./createTextArea-281ba174.js"
import{d as jt}from"./dialogMsg-edbc265b.js"
import{p as Nt}from"./playerName-fab1659b.js"
import{c as Ct}from"./createSpan-42da4831.js"
import{h as St}from"./hideElement-7486432a.js"
import"./createLabel-16999105.js"
import"./insertElementBefore-165ce171.js"
import"./asInt-bc42d23b.js"
import"./intValue-e4ce6bb5.js"
import"./valueText-8b6ccd61.js"
import"./fshOpen-a2455e89.js"
import"./isChecked-5c7617f4.js"
import"./isDate-3cdbefa8.js"
import"./numberIsNaN-2f104aa2.js"
import"./padZ-65ad9136.js"
function Lt(t,e){const n=s.exec(e.dataset.tipped)
return V({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function yt(){const s=e("b",n).find(a("Members"))
if(s){const e=G(),n=function(t){return t.reduce(Lt,[0,0])}(e)
s.classList.add("tip-static"),X(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,s)}}function vt(t,e){let n
const a=t.replace(/,/g,"").match(e)
return n=a?parseInt(a[1],10):0,n}function $t(e){const n=e.dataset.tipped,a=vt(n,/XP Lock: <b>(\d*)/),s=vt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let a=""
return e>n&&(a="+"),a+t(e-n)}(s,a)}</b>)`)}function kt(){const t=o('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&$t(t)}let wt,xt
function Mt(t){return wt&&t>=O()&&t<=Z()}function Tt(t){return xt&&t>=z()&&t<=J()}const At=t=>[t,s.exec(t.dataset.tipped)[1]],Et=([,t])=>t<7,Ht=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Rt=([t,e])=>[t.parentNode.parentNode.rowIndex,Mt(e),Tt(e)]
const Bt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Dt(){const t=m('#pCC a[data-tipped*="<td>VL:</td>"]').map(At).filter(Et).map(Ht).map(Rt),e=t.filter((([,t])=>t)),a=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Bt(t)} {background-color: #4671C8;}`
f(document.body,F(e))}}(e),function(t){if(t.length){const e=`${Bt(t)} {background-color: #FF9900;}`
f(document.body,F(e))}}(a),function(t,e){if(t.length+e.length){const t=p(c,n)
t[t.length-1].classList.add("fshHighlight")}}(e,a)}function It(){Number(d("guild_id"))!==U()&&(wt||xt)&&Dt()}function Gt(){wt=u("highlightPlayersNearMyLvl"),xt=u("highlightGvGPlayersNearMyLvl"),It(),u("enableHistoryCompressor")&&function(){const t=e(c,n).slice(-2,-1)[0].rows[0].cells[0],a=r({id:"profile-bio",innerHTML:t.innerHTML})
l("",t),f(t,a),_()}()}function Pt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function Vt(t){"smallLink"===t.target.className&&W(t.target.previousElementSibling.text)}function Xt(){const t=h(`#pCC a[href^="${b}"]`)
Q([5,3,t,0,Pt]),g(n,Vt)}function _t(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function Ft(t,e){l(e,t.insertCell(-1))}function Ut(t,e,n){const a=t.insertRow(t.rows.length-2)
Ft(a,e),Ft(a,n)}function Ot(t,e){Ut(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Zt(t,e,n){1===e&&function(t){Ut(t,`<a href="${S}conflicts">Active Conflicts</a>`,"Score")}(n),Y(t.rows,7,0).forEach(N(Ot,n))}function zt(t,e){const n=C(e),a=o('#pCC input[name="page"]',n)
if(!a)return
const s=Number(a.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(a)
!function(t,e,n){const a=o("#pCC > table > tbody > tr > td > table",t)
a&&a.rows.length>3&&Zt(a,e,n)}(n,s,t.node),i>s&&function(t,e,n){_t(t+1).then(N(e,n))}(s,zt,t)}function Jt(t){const e=t.rows[6].cells[0].children[0]
e&&_t(1).then(N(zt,{node:e}))}function Qt(t){t.target.id===L&&v(L,!u(L))}let Wt,Yt,qt,Kt,te,ee,ne,ae,se,oe,ie,ce,re
function le(t,e){return`${t}<option value="${e}">${e}</option>`}function fe(t){return M(t)?"#DEF":t.toLocaleString()}function ue(t,e,n){return`${e}<tr><td>${it(new Date(1e3*n[ct]))}</td><td>${t}</td><td class="fshRight">${fe(n[rt])}</td><td class="fshRight">${fe(n[lt])}</td><td class="fshRight">${fe(n[ft])}</td><td class="fshRight">${fe(n[ut])}</td><td class="fshRight">${Math.floor(n[ft]/n[ut]*100)}</td><td class="fshRight">${n[dt]}</td><td class="fshRight">${fe(n[mt])}</td></tr>`}function de(t,e){return function(t){return Yt&&"- All -"!==Yt&&Yt!==t}(e)?t:t+te[e].reduce(N(ue,e),"")}function me(){te&&l(k(te).reduce(de,""),Wt),qt.classList.remove("fshSpinner")}function pe(){qt.classList.add("fshSpinner"),x(3,me)}function he(t){Yt=t.target.value,pe()}function be(t){t&&(te=t,l(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(w).reduce(le,"")}</select>`,Kt),pe())}function ge(){const t=$("th",{textContent:"Member"})
return Kt=r(),f(t,Kt),t}function je(){const t=ot({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=ge()
f(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Wt=st(),f(t,Wt)}(t),y(t,"change",he),qt=r({className:"tgCont fshSpinner64"}),f(qt,t),qt}function Ne(t){ee.value=t,se.classList.remove("fshSpinner")}function Ce(){ee.value='{"lastUpdate": 0, "members": {}}'}function Se(t){jt("Update successful"),be(t.members)}function Le(){const t=T(ee.value)
tt("fsh_guildActivity",t).then(N(Se,t)).catch(jt)}function ye(t,e){const n=bt({className:"custombutton",textContent:t})
return g(n,e),n}function ve(){return se=r({id:"io",className:"fshSpinner64"}),ee=gt(),ee.setAttribute("autocapitalize","off"),ee.setAttribute("autocomplete","off"),ee.setAttribute("autocorrect","off"),ee.setAttribute("spellcheck","false"),ne=ye("Save",Le),ae=ye("Reset",Ce),f(se,ee),f(se,pt()),f(se,ne),f(se,ae),se}function $e(){return!ie.checked}function ke(t){ie.checked&&"Escape"===t.code&&(ie.checked=!1)}function we(t){$e()&&(t.style.transform=null)}function xe(){E("guildTracker","updateRawData"),oe&&function(t){t&&(se.classList.add("fshSpinner"),x(4,Ne,[t]))}(oe)}function Me(){const t=function(){const t=r({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return re=q({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),A(re,"change",xe),f(t,re),t}(),e=K({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return f(t,e),R(e,t),t}function Te(){const t=Me(),e=function(){const t=r({className:"fsh-dialog-content"})
return f(t,je()),f(t,ve()),t}()
f(t,e),y(ie,"change",N(we,t)),f(ce,t)}function Ae(t){t&&(oe=JSON.stringify(t),be(t.members))}function Ee(){E("guildTracker","openDialog"),et("fsh_guildActivity").then(Ae),H.dialogIsClosed=$e,i(ce,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Te()}function He(){!function(){const t=o("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=r({className:"fsh-tracker"}),a=r({innerHTML:`${at(L)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(a,"change",Qt),f(n,t),f(n,a),nt(e,n)}(),ie=q({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),A(ie,"change",Ee),ce=r({className:"fsh-dialog"}),f(ce,ie),y(document.body,"keydown",ke),f(document.body,ce)}let Re,Be
function De(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ie(){Be?Be.disabled=!Re:function(){const t=p(c,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const a=m(B,e).map(De).join("\n")
Be=f(document.body,F(a)).sheet}()}function Ge(){Re=!Re,v("enableStamBars",Re),Ie(),E("guildManage","StamBars")}function Pe(){!function(){const t=o("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=f(e,r({className:"fshCenter",innerHTML:at("enableStamBars")}))
y(n,"change",Ge)}(),Re=u("enableStamBars"),Re&&Ie()}function Ve(t,e,n){const a=function(t){return Ct({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(n)
f(t,function(t){const e=Ct({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return f(e,t),i(e,"&nbsp;]"),e}(a)),e.id=n,u(n)&&St(e),g(a,ht)}function Xe(t){Ve(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function _e(t){const e=t.rows[4].cells[1].children[0]
l(e.innerHTML.trim(),e),Ve(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Fe(t){Ve(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ue(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
l(`[ <a href="${S}reliclist">Control</a> ]&nbsp;`,s)}function Oe(t){const e=p("li",t)
if(!e||!e.length)return
const n=e[e.length-1].parentNode
i(n,`<li><a href="${I}${Nt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function Ze(t,e){x(3,e,[t])}function ze(){if(!n)return
const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Xe,_e,Fe,Ue,Oe].forEach(N(Ze,t))}(t),x(3,Xt),function(t){D()||(u("detailedConflictInfo")&&x(3,Jt,[t]),x(4,He))}(t),Pe()}function Je(){const t=o('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Qe(){x(3,P),x(3,Je),x(3,kt),x(3,yt),"manage"===H.subcmd&&ze(),"view"===H.subcmd&&Gt()}export default Qe
//# sourceMappingURL=guild-4bf2d47c.js.map
