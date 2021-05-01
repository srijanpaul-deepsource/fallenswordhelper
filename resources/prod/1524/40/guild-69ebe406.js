import{a as t}from"./addCommas-6123a9f9.js"
import{g as e,p as n,aA as a,bu as s,D as o,i,d as c,m as r,B as l,h as f,I as d,S as u,E as m,b as p,ac as h,a4 as b,o as g,u as j,t as N,v as C,s as L,bw as S,f as y,_ as v,n as $,aT as w,a as k,aN as x,b8 as T,Q as M,W as A,c as H,bx as B,F as E,y as R,by as D}from"./calfSystem-540da563.js"
import{g as I,c as G}from"./colouredDots-72576aa3.js"
import{l as P}from"./onlineDot-87712eda.js"
import{s as _}from"./setTipped-c42cf871.js"
import V from"./compressBio-8e6ab50a.js"
import{c as X}from"./createStyle-25bc0126.js"
import{c as F}from"./currentGuildId-dc83d308.js"
import{a as U,g as O,c as Q,b as z}from"./levelHighlight-b4a2e4a2.js"
import{b as J}from"./batch-735e3bee.js"
import{o as W}from"./openQuickBuffByName-5c5f0fdb.js"
import{d as Z}from"./dataRows-72fe4f4b.js"
import{c as q}from"./createInput-7c5a8b53.js"
import{c as K}from"./createUl-500d20b9.js"
import{s as Y,g as tt}from"./idb-62a50947.js"
import{i as et}from"./insertElementAfterBegin-873997cf.js"
import{b as nt}from"./simpleCheckbox-8a40d72d.js"
import{a as at}from"./alpha-9ef10f70.js"
import{c as st}from"./createTBody-4aec92a7.js"
import{c as ot}from"./createTable-4d8f73c4.js"
import{f as it}from"./formatLocalDateTime-7acb75ce.js"
import{u as ct,l as rt,v as lt,c as ft,m as dt,a as ut,g as mt}from"./indexConstants-eecdd98e.js"
import{c as pt,t as ht}from"./toggleVisibilty-a05d09a2.js"
import{c as bt}from"./createButton-bcd88351.js"
import{c as gt}from"./createTextArea-57c1bf37.js"
import{d as jt}from"./dialogMsg-3d2031b8.js"
import{p as Nt}from"./playerName-c00ebc45.js"
import{c as Ct}from"./createSpan-8477dde4.js"
import{h as Lt}from"./hideElement-512851a2.js"
import"./createLabel-d9c1f15c.js"
import"./insertElementBefore-6e80e0ff.js"
import"./intValue-e485889b.js"
import"./valueText-87497ead.js"
import"./fshOpen-9656868c.js"
import"./isChecked-a9c3c9fe.js"
import"./toLowerCase-d053e281.js"
import"./isDate-497a3429.js"
import"./numberIsNaN-2764ce9c.js"
import"./padZ-827c036e.js"
function St(t,e){const n=s.exec(e.dataset.tipped)
return P({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function yt(){const s=e("b",n).find(a("Members"))
if(s){const e=I(),n=function(t){return t.reduce(St,[0,0])}(e)
s.classList.add("tip-static"),_(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,s)}}function vt(t,e){let n
const a=t.replace(/,/g,"").match(e)
return n=a?parseInt(a[1],10):0,n}function $t(e){const n=e.dataset.tipped,a=vt(n,/XP Lock: <b>(\d*)/),s=vt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let a=""
return e>n&&(a="+"),a+t(e-n)}(s,a)}</b>)`)}function wt(){const t=o('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&$t(t)}let kt,xt
function Tt(t){return kt&&t>=U()&&t<=O()}function Mt(t){return xt&&t>=Q()&&t<=z()}const At=t=>[t,s.exec(t.dataset.tipped)[1]],Ht=([,t])=>t<7,Bt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Et=([t,e])=>[t.parentNode.parentNode.rowIndex,Tt(e),Mt(e)]
const Rt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Dt(){const t=m('#pCC a[data-tipped*="<td>VL:</td>"]').map(At).filter(Ht).map(Bt).map(Et),e=t.filter((([,t])=>t)),a=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Rt(t)} {background-color: #4671C8;}`
f(document.body,X(e))}}(e),function(t){if(t.length){const e=`${Rt(t)} {background-color: #FF9900;}`
f(document.body,X(e))}}(a),function(t,e){if(t.length+e.length){const t=p(c,n)
t[t.length-1].classList.add("fshHighlight")}}(e,a)}function It(){Number(u("guild_id"))!==F()&&(kt||xt)&&Dt()}function Gt(){kt=d("highlightPlayersNearMyLvl"),xt=d("highlightGvGPlayersNearMyLvl"),It(),d("enableHistoryCompressor")&&function(){const t=e(c,n).slice(-2,-1)[0].rows[0].cells[0],a=r({id:"profile-bio",innerHTML:t.innerHTML})
l("",t),f(t,a),V()}()}function Pt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function _t(t){"smallLink"===t.target.className&&W(t.target.previousElementSibling.text)}function Vt(){const t=h(`#pCC a[href^="${b}"]`)
J([5,3,t,0,Pt]),g(n,_t)}function Xt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function Ft(t,e){l(e,t.insertCell(-1))}function Ut(t,e,n){const a=t.insertRow(t.rows.length-2)
Ft(a,e),Ft(a,n)}function Ot(t,e){Ut(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Qt(t,e,n){1===e&&function(t){Ut(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),Z(t.rows,7,0).forEach(N(Ot,n))}function zt(t,e){const n=C(e),a=o('#pCC input[name="page"]',n)
if(!a)return
const s=Number(a.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(a)
!function(t,e,n){const a=o("#pCC > table > tbody > tr > td > table",t)
a&&a.rows.length>3&&Qt(a,e,n)}(n,s,t.node),i>s&&function(t,e,n){Xt(t+1).then(N(e,n))}(s,zt,t)}function Jt(t){const e=t.rows[6].cells[0].children[0]
e&&Xt(1).then(N(zt,{node:e}))}function Wt(t){t.target.id===S&&v(S,!d(S))}let Zt,qt,Kt,Yt,te,ee,ne,ae,se,oe,ie,ce,re
function le(t,e){return`${t}<option value="${e}">${e}</option>`}function fe(t){return x(t)?"#DEF":t.toLocaleString()}function de(t,e,n){return`${e}<tr><td>${it(new Date(1e3*n[ct]))}</td><td>${t}</td><td class="fshRight">${fe(n[rt])}</td><td class="fshRight">${fe(n[lt])}</td><td class="fshRight">${fe(n[ft])}</td><td class="fshRight">${fe(n[dt])}</td><td class="fshRight">${Math.floor(n[ft]/n[dt]*100)}</td><td class="fshRight">${n[ut]}</td><td class="fshRight">${fe(n[mt])}</td></tr>`}function ue(t,e){return function(t){return qt&&"- All -"!==qt&&qt!==t}(e)?t:t+te[e].reduce(N(de,e),"")}function me(){te&&l(w(te).reduce(ue,""),Zt),Kt.classList.remove("fshSpinner")}function pe(){Kt.classList.add("fshSpinner"),k(3,me)}function he(t){qt=t.target.value,pe()}function be(t){t&&(te=t,l(`<select name="member"><option value="- All -" selected>- All -</option>${w(t).sort(at).reduce(le,"")}</select>`,Yt),pe())}function ge(){const t=$("th",{textContent:"Member"})
return Yt=r(),f(t,Yt),t}function je(){const t=ot({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=ge()
f(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Zt=st(),f(t,Zt)}(t),y(t,"change",he),Kt=r({className:"tgCont fshSpinner64"}),f(Kt,t),Kt}function Ne(t){ee.value=t,se.classList.remove("fshSpinner")}function Ce(){ee.value='{"lastUpdate": 0, "members": {}}'}function Le(t){jt("Update successful"),be(t.members)}function Se(){const t=T(ee.value)
Y("fsh_guildActivity",t).then(N(Le,t)).catch(jt)}function ye(t,e){const n=bt({className:"custombutton",textContent:t})
return g(n,e),n}function ve(){return se=r({id:"io",className:"fshSpinner64"}),ee=gt(),ee.setAttribute("autocapitalize","off"),ee.setAttribute("autocomplete","off"),ee.setAttribute("autocorrect","off"),ee.setAttribute("spellcheck","false"),ne=ye("Save",Se),ae=ye("Reset",Ce),f(se,ee),f(se,pt()),f(se,ne),f(se,ae),se}function $e(){return!ie.checked}function we(t){ie.checked&&"Escape"===t.code&&(ie.checked=!1)}function ke(t){$e()&&(t.style.transform=null)}function xe(){A("guildTracker","updateRawData"),oe&&function(t){t&&(se.classList.add("fshSpinner"),k(4,Ne,[t]))}(oe)}function Te(){const t=function(){const t=r({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return re=q({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),M(re,"change",xe),f(t,re),t}(),e=K({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return f(t,e),B(e,t),t}function Me(){const t=Te(),e=function(){const t=r({className:"fsh-dialog-content"})
return f(t,je()),f(t,ve()),t}()
f(t,e),y(ie,"change",N(ke,t)),f(ce,t)}function Ae(t){t&&(oe=JSON.stringify(t),be(t.members))}function He(){A("guildTracker","openDialog"),tt("fsh_guildActivity").then(Ae),H.dialogIsClosed=$e,i(ce,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Me()}function Be(){!function(){const t=o("#pCC img.guild_openGuildStore"),e=t.parentNode,n=r({className:"fsh-tracker"}),a=r({innerHTML:`${nt(S)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(a,"change",Wt),f(n,t),f(n,a),et(e,n)}(),ie=q({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),M(ie,"change",He),ce=r({className:"fsh-dialog"}),f(ce,ie),y(document.body,"keydown",we),f(document.body,ce)}let Ee,Re
function De(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ie(){Re?Re.disabled=!Ee:function(){const t=p(c,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const a=m(E,e).map(De).join("\n")
Re=f(document.body,X(a)).sheet}()}function Ge(){Ee=!Ee,v("enableStamBars",Ee),Ie(),A("guildManage","StamBars")}function Pe(){!function(){const t=o("#pCC img.guild_openGuildStore").parentNode,e=f(t,r({className:"fshCenter",innerHTML:nt("enableStamBars")}))
y(e,"change",Ge)}(),Ee=d("enableStamBars"),Ee&&Ie()}function _e(t,e,n){const a=function(t){return Ct({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
f(t,function(t){const e=Ct({innerHTML:"[&nbsp;"})
return f(e,t),i(e,"&nbsp;]"),e}(a)),e.id=n,d(n)&&Lt(e),g(a,ht)}function Ve(t){_e(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xe(t){const e=t.rows[4].cells[1].children[0]
l(e.innerHTML.trim(),e),_e(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Fe(t){_e(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ue(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
l(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,s)}function Oe(t){const e=p("li",t),n=e[e.length-1].parentNode
i(n,`<li><a href="${D}${Nt()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Qe(t,e){k(3,e,[t])}function ze(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Ve,Xe,Fe,Ue,Oe].forEach(N(Qe,t))}(t),k(3,Vt),function(t){R()||(d("detailedConflictInfo")&&k(3,Jt,[t]),k(4,Be))}(t),Pe()}function Je(){const t=o('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function We(){k(3,G),k(3,Je),k(3,wt),k(3,yt),"manage"===H.subcmd&&ze(),"view"===H.subcmd&&Gt()}export default We
//# sourceMappingURL=guild-69ebe406.js.map
