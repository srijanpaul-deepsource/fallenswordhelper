import{a as t}from"./addCommas-b66fde4c.js"
import{g as e,p as n,aI as s,bD as a,D as o,i,d as c,m as r,B as l,h as f,I as d,R as u,E as m,b as p,ad as h,a3 as b,o as g,u as j,t as N,v as C,s as S,bF as L,f as v,Z as y,n as $,a_ as k,bB as w,a as x,a6 as M,bf as T,P as A,S as H,c as B,bG as R,F as E,y as D,bH as I}from"./calfSystem-365d90f3.js"
import{g as G,c as P}from"./colouredDots-89d37194.js"
import{l as _}from"./onlineDot-84e0098c.js"
import{s as F}from"./setTipped-5e35ee46.js"
import V from"./compressBio-c8db0d17.js"
import{c as X}from"./createStyle-ed7b9ea6.js"
import{c as U}from"./currentGuildId-605c07b2.js"
import{a as O,g as Z,c as z,b as J}from"./levelHighlight-affb3d0a.js"
import{b as Q}from"./batch-c397b474.js"
import{o as W}from"./openQuickBuffByName-586c4bc1.js"
import{d as q}from"./dataRows-be19a2f8.js"
import{c as K}from"./createInput-7ea7a166.js"
import{c as Y}from"./createUl-d4bbd19f.js"
import{s as tt,g as et}from"./idb-62f64cd2.js"
import{i as nt}from"./insertElementAfterBegin-91a0ceb3.js"
import{b as st}from"./simpleCheckbox-9bd461a4.js"
import{c as at}from"./createTBody-ee45d24e.js"
import{c as ot}from"./createTable-61e2377b.js"
import{f as it}from"./formatLocalDateTime-76d0f341.js"
import{u as ct,l as rt,v as lt,c as ft,m as dt,a as ut,g as mt}from"./indexConstants-430344ec.js"
import{c as pt,t as ht}from"./toggleVisibilty-d1d80e94.js"
import{c as bt}from"./createButton-a14dda00.js"
import{c as gt}from"./createTextArea-14c804d1.js"
import{d as jt}from"./dialogMsg-fefcc43f.js"
import{p as Nt}from"./playerName-17f8d780.js"
import{c as Ct}from"./createSpan-8a3a7e34.js"
import{h as St}from"./hideElement-e21a7422.js"
import"./createLabel-776ff4e5.js"
import"./insertElementBefore-784d4581.js"
import"./asInt-28c95ec4.js"
import"./intValue-76dfee09.js"
import"./valueText-790aad9b.js"
import"./fshOpen-90a0d847.js"
import"./isChecked-8825c1a8.js"
import"./isDate-c0f20234.js"
import"./numberIsNaN-bf55a311.js"
import"./padZ-a45d0ad0.js"
function Lt(t,e){const n=a.exec(e.dataset.tipped)
return _({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function vt(){const a=e("b",n).find(s("Members"))
if(a){const e=G(),n=function(t){return t.reduce(Lt,[0,0])}(e)
a.classList.add("tip-static"),F(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,a)}}function yt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function $t(e){const n=e.dataset.tipped,s=yt(n,/XP Lock: <b>(\d*)/),a=yt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`)}function kt(){const t=o('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&$t(t)}let wt,xt
function Mt(t){return wt&&t>=O()&&t<=Z()}function Tt(t){return xt&&t>=z()&&t<=J()}const At=t=>[t,a.exec(t.dataset.tipped)[1]],Ht=([,t])=>t<7,Bt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Rt=([t,e])=>[t.parentNode.parentNode.rowIndex,Mt(e),Tt(e)]
const Et=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Dt(){const t=m('#pCC a[data-tipped*="<td>VL:</td>"]').map(At).filter(Ht).map(Bt).map(Rt),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Et(t)} {background-color: #4671C8;}`
f(document.body,X(e))}}(e),function(t){if(t.length){const e=`${Et(t)} {background-color: #FF9900;}`
f(document.body,X(e))}}(s),function(t,e){if(t.length+e.length){const t=p(c,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function It(){Number(u("guild_id"))!==U()&&(wt||xt)&&Dt()}function Gt(){wt=d("highlightPlayersNearMyLvl"),xt=d("highlightGvGPlayersNearMyLvl"),It(),d("enableHistoryCompressor")&&function(){const t=e(c,n).slice(-2,-1)[0].rows[0].cells[0],s=r({id:"profile-bio",innerHTML:t.innerHTML})
l("",t),f(t,s),V()}()}function Pt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function _t(t){"smallLink"===t.target.className&&W(t.target.previousElementSibling.text)}function Ft(){const t=h(`#pCC a[href^="${b}"]`)
Q([5,3,t,0,Pt]),g(n,_t)}function Vt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function Xt(t,e){l(e,t.insertCell(-1))}function Ut(t,e,n){const s=t.insertRow(t.rows.length-2)
Xt(s,e),Xt(s,n)}function Ot(t,e){Ut(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Zt(t,e,n){1===e&&function(t){Ut(t,`<a href="${S}conflicts">Active Conflicts</a>`,"Score")}(n),q(t.rows,7,0).forEach(N(Ot,n))}function zt(t,e){const n=C(e),s=o('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=o("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Zt(s,e,n)}(n,a,t.node),i>a&&function(t,e,n){Vt(t+1).then(N(e,n))}(a,zt,t)}function Jt(t){const e=t.rows[6].cells[0].children[0]
e&&Vt(1).then(N(zt,{node:e}))}function Qt(t){t.target.id===L&&y(L,!d(L))}let Wt,qt,Kt,Yt,te,ee,ne,se,ae,oe,ie,ce,re
function le(t,e){return`${t}<option value="${e}">${e}</option>`}function fe(t){return M(t)?"#DEF":t.toLocaleString()}function de(t,e,n){return`${e}<tr><td>${it(new Date(1e3*n[ct]))}</td><td>${t}</td><td class="fshRight">${fe(n[rt])}</td><td class="fshRight">${fe(n[lt])}</td><td class="fshRight">${fe(n[ft])}</td><td class="fshRight">${fe(n[dt])}</td><td class="fshRight">${Math.floor(n[ft]/n[dt]*100)}</td><td class="fshRight">${n[ut]}</td><td class="fshRight">${fe(n[mt])}</td></tr>`}function ue(t,e){return function(t){return qt&&"- All -"!==qt&&qt!==t}(e)?t:t+te[e].reduce(N(de,e),"")}function me(){te&&l(k(te).reduce(ue,""),Wt),Kt.classList.remove("fshSpinner")}function pe(){Kt.classList.add("fshSpinner"),x(3,me)}function he(t){qt=t.target.value,pe()}function be(t){t&&(te=t,l(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(w).reduce(le,"")}</select>`,Yt),pe())}function ge(){const t=$("th",{textContent:"Member"})
return Yt=r(),f(t,Yt),t}function je(){const t=ot({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=ge()
f(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Wt=at(),f(t,Wt)}(t),v(t,"change",he),Kt=r({className:"tgCont fshSpinner64"}),f(Kt,t),Kt}function Ne(t){ee.value=t,ae.classList.remove("fshSpinner")}function Ce(){ee.value='{"lastUpdate": 0, "members": {}}'}function Se(t){jt("Update successful"),be(t.members)}function Le(){const t=T(ee.value)
tt("fsh_guildActivity",t).then(N(Se,t)).catch(jt)}function ve(t,e){const n=bt({className:"custombutton",textContent:t})
return g(n,e),n}function ye(){return ae=r({id:"io",className:"fshSpinner64"}),ee=gt(),ee.setAttribute("autocapitalize","off"),ee.setAttribute("autocomplete","off"),ee.setAttribute("autocorrect","off"),ee.setAttribute("spellcheck","false"),ne=ve("Save",Le),se=ve("Reset",Ce),f(ae,ee),f(ae,pt()),f(ae,ne),f(ae,se),ae}function $e(){return!ie.checked}function ke(t){ie.checked&&"Escape"===t.code&&(ie.checked=!1)}function we(t){$e()&&(t.style.transform=null)}function xe(){H("guildTracker","updateRawData"),oe&&function(t){t&&(ae.classList.add("fshSpinner"),x(4,Ne,[t]))}(oe)}function Me(){const t=function(){const t=r({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return re=K({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),A(re,"change",xe),f(t,re),t}(),e=Y({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return f(t,e),R(e,t),t}function Te(){const t=Me(),e=function(){const t=r({className:"fsh-dialog-content"})
return f(t,je()),f(t,ye()),t}()
f(t,e),v(ie,"change",N(we,t)),f(ce,t)}function Ae(t){t&&(oe=JSON.stringify(t),be(t.members))}function He(){H("guildTracker","openDialog"),et("fsh_guildActivity").then(Ae),B.dialogIsClosed=$e,i(ce,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Te()}function Be(){!function(){const t=o("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=r({className:"fsh-tracker"}),s=r({innerHTML:`${st(L)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(s,"change",Qt),f(n,t),f(n,s),nt(e,n)}(),ie=K({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),A(ie,"change",He),ce=r({className:"fsh-dialog"}),f(ce,ie),v(document.body,"keydown",ke),f(document.body,ce)}let Re,Ee
function De(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ie(){Ee?Ee.disabled=!Re:function(){const t=p(c,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=m(E,e).map(De).join("\n")
Ee=f(document.body,X(s)).sheet}()}function Ge(){Re=!Re,y("enableStamBars",Re),Ie(),H("guildManage","StamBars")}function Pe(){!function(){const t=o("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=f(e,r({className:"fshCenter",innerHTML:st("enableStamBars")}))
v(n,"change",Ge)}(),Re=d("enableStamBars"),Re&&Ie()}function _e(t,e,n){const s=function(t){return Ct({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(n)
f(t,function(t){const e=Ct({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return f(e,t),i(e,"&nbsp;]"),e}(s)),e.id=n,d(n)&&St(e),g(s,ht)}function Fe(t){_e(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Ve(t){const e=t.rows[4].cells[1].children[0]
l(e.innerHTML.trim(),e),_e(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Xe(t){_e(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ue(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
l(`[ <a href="${S}reliclist">Control</a> ]&nbsp;`,a)}function Oe(t){const e=p("li",t)
if(!e||!e.length)return
const n=e[e.length-1].parentNode
i(n,`<li><a href="${I}${Nt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function Ze(t,e){x(3,e,[t])}function ze(){if(!n)return
const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Fe,Ve,Xe,Ue,Oe].forEach(N(Ze,t))}(t),x(3,Ft),function(t){D()||(d("detailedConflictInfo")&&x(3,Jt,[t]),x(4,Be))}(t),Pe()}function Je(){const t=o('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Qe(){x(3,P),x(3,Je),x(3,kt),x(3,vt),"manage"===B.subcmd&&ze(),"view"===B.subcmd&&Gt()}export default Qe
//# sourceMappingURL=guild-8f1b203d.js.map
