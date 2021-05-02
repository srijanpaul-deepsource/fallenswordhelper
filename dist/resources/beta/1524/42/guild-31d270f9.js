import{a as t}from"./addCommas-99f495b9.js"
import{g as e,p as n,aD as s,by as a,D as o,i,d as c,m as r,B as l,h as f,I as d,S as u,E as m,b as p,ac as h,a4 as b,o as g,u as j,t as C,v as N,s as L,bA as S,f as y,_ as v,n as $,aW as k,a as w,aQ as x,bb as M,Q as T,W as A,c as B,bB as H,F as E,y as R,bC as D}from"./calfSystem-e76f1a7d.js"
import{g as I,c as G}from"./colouredDots-5ef437c3.js"
import{l as P}from"./onlineDot-887cc7ac.js"
import{s as _}from"./setTipped-1ee3895d.js"
import V from"./compressBio-e90931ed.js"
import{c as X}from"./createStyle-ce532e9f.js"
import{c as F}from"./currentGuildId-b1971071.js"
import{a as Q,g as U,c as O,b as W}from"./levelHighlight-29580558.js"
import{b as z}from"./batch-64f65e71.js"
import{o as J}from"./openQuickBuffByName-7ee8d6bd.js"
import{d as Z}from"./dataRows-8e0a4838.js"
import{c as q}from"./createInput-d7164015.js"
import{c as K}from"./createUl-b2109287.js"
import{s as Y,g as tt}from"./idb-fb8483d2.js"
import{i as et}from"./insertElementAfterBegin-38aedae9.js"
import{b as nt}from"./simpleCheckbox-af40cdcd.js"
import{a as st}from"./alpha-7993f8ac.js"
import{c as at}from"./createTBody-e54e4fe4.js"
import{c as ot}from"./createTable-aa311cb0.js"
import{f as it}from"./formatLocalDateTime-7dbf592b.js"
import{u as ct,l as rt,v as lt,c as ft,m as dt,a as ut,g as mt}from"./indexConstants-6fab66f5.js"
import{c as pt,t as ht}from"./toggleVisibilty-b21ac868.js"
import{c as bt}from"./createButton-29309565.js"
import{c as gt}from"./createTextArea-57c44282.js"
import{d as jt}from"./dialogMsg-5b0fd825.js"
import{p as Ct}from"./playerName-957aed2f.js"
import{c as Nt}from"./createSpan-c7e7a9e6.js"
import{h as Lt}from"./hideElement-30ade5f0.js"
import"./createLabel-17f39709.js"
import"./insertElementBefore-34b77984.js"
import"./intValue-9eb8a210.js"
import"./valueText-ffb2b814.js"
import"./fshOpen-cce15559.js"
import"./isChecked-cf65e779.js"
import"./toLowerCase-8d8df902.js"
import"./isDate-0659c8ad.js"
import"./numberIsNaN-484c0124.js"
import"./padZ-babdd575.js"
function St(t,e){const n=a.exec(e.dataset.tipped)
return P({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function yt(){const a=e("b",n).find(s("Members"))
if(a){const e=I(),n=function(t){return t.reduce(St,[0,0])}(e)
a.classList.add("tip-static"),_(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,a)}}function vt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function $t(e){const n=e.dataset.tipped,s=vt(n,/XP Lock: <b>(\d*)/),a=vt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`)}function kt(){const t=o('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&$t(t)}let wt,xt
function Mt(t){return wt&&t>=Q()&&t<=U()}function Tt(t){return xt&&t>=O()&&t<=W()}const At=t=>[t,a.exec(t.dataset.tipped)[1]],Bt=([,t])=>t<7,Ht=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Et=([t,e])=>[t.parentNode.parentNode.rowIndex,Mt(e),Tt(e)]
const Rt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Dt(){const t=m('#pCC a[data-tipped*="<td>VL:</td>"]').map(At).filter(Bt).map(Ht).map(Et),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Rt(t)} {background-color: #4671C8;}`
f(document.body,X(e))}}(e),function(t){if(t.length){const e=`${Rt(t)} {background-color: #FF9900;}`
f(document.body,X(e))}}(s),function(t,e){if(t.length+e.length){const t=p(c,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function It(){Number(u("guild_id"))!==F()&&(wt||xt)&&Dt()}function Gt(){wt=d("highlightPlayersNearMyLvl"),xt=d("highlightGvGPlayersNearMyLvl"),It(),d("enableHistoryCompressor")&&function(){const t=e(c,n).slice(-2,-1)[0].rows[0].cells[0],s=r({id:"profile-bio",innerHTML:t.innerHTML})
l("",t),f(t,s),V()}()}function Pt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function _t(t){"smallLink"===t.target.className&&J(t.target.previousElementSibling.text)}function Vt(){const t=h(`#pCC a[href^="${b}"]`)
z([5,3,t,0,Pt]),g(n,_t)}function Xt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function Ft(t,e){l(e,t.insertCell(-1))}function Qt(t,e,n){const s=t.insertRow(t.rows.length-2)
Ft(s,e),Ft(s,n)}function Ut(t,e){Qt(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ot(t,e,n){1===e&&function(t){Qt(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),Z(t.rows,7,0).forEach(C(Ut,n))}function Wt(t,e){const n=N(e),s=o('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=o("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Ot(s,e,n)}(n,a,t.node),i>a&&function(t,e,n){Xt(t+1).then(C(e,n))}(a,Wt,t)}function zt(t){const e=t.rows[6].cells[0].children[0]
e&&Xt(1).then(C(Wt,{node:e}))}function Jt(t){t.target.id===S&&v(S,!d(S))}let Zt,qt,Kt,Yt,te,ee,ne,se,ae,oe,ie,ce,re
function le(t,e){return`${t}<option value="${e}">${e}</option>`}function fe(t){return x(t)?"#DEF":t.toLocaleString()}function de(t,e,n){return`${e}<tr><td>${it(new Date(1e3*n[ct]))}</td><td>${t}</td><td class="fshRight">${fe(n[rt])}</td><td class="fshRight">${fe(n[lt])}</td><td class="fshRight">${fe(n[ft])}</td><td class="fshRight">${fe(n[dt])}</td><td class="fshRight">${Math.floor(n[ft]/n[dt]*100)}</td><td class="fshRight">${n[ut]}</td><td class="fshRight">${fe(n[mt])}</td></tr>`}function ue(t,e){return function(t){return qt&&"- All -"!==qt&&qt!==t}(e)?t:t+te[e].reduce(C(de,e),"")}function me(){te&&l(k(te).reduce(ue,""),Zt),Kt.classList.remove("fshSpinner")}function pe(){Kt.classList.add("fshSpinner"),w(3,me)}function he(t){qt=t.target.value,pe()}function be(t){t&&(te=t,l(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(st).reduce(le,"")}</select>`,Yt),pe())}function ge(){const t=$("th",{textContent:"Member"})
return Yt=r(),f(t,Yt),t}function je(){const t=ot({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=ge()
f(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Zt=at(),f(t,Zt)}(t),y(t,"change",he),Kt=r({className:"tgCont fshSpinner64"}),f(Kt,t),Kt}function Ce(t){ee.value=t,ae.classList.remove("fshSpinner")}function Ne(){ee.value='{"lastUpdate": 0, "members": {}}'}function Le(t){jt("Update successful"),be(t.members)}function Se(){const t=M(ee.value)
Y("fsh_guildActivity",t).then(C(Le,t)).catch(jt)}function ye(t,e){const n=bt({className:"custombutton",textContent:t})
return g(n,e),n}function ve(){return ae=r({id:"io",className:"fshSpinner64"}),ee=gt(),ee.setAttribute("autocapitalize","off"),ee.setAttribute("autocomplete","off"),ee.setAttribute("autocorrect","off"),ee.setAttribute("spellcheck","false"),ne=ye("Save",Se),se=ye("Reset",Ne),f(ae,ee),f(ae,pt()),f(ae,ne),f(ae,se),ae}function $e(){return!ie.checked}function ke(t){ie.checked&&"Escape"===t.code&&(ie.checked=!1)}function we(t){$e()&&(t.style.transform=null)}function xe(){A("guildTracker","updateRawData"),oe&&function(t){t&&(ae.classList.add("fshSpinner"),w(4,Ce,[t]))}(oe)}function Me(){const t=function(){const t=r({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return re=q({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),T(re,"change",xe),f(t,re),t}(),e=K({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return f(t,e),H(e,t),t}function Te(){const t=Me(),e=function(){const t=r({className:"fsh-dialog-content"})
return f(t,je()),f(t,ve()),t}()
f(t,e),y(ie,"change",C(we,t)),f(ce,t)}function Ae(t){t&&(oe=JSON.stringify(t),be(t.members))}function Be(){A("guildTracker","openDialog"),tt("fsh_guildActivity").then(Ae),B.dialogIsClosed=$e,i(ce,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Te()}function He(){!function(){const t=o("#pCC img.guild_openGuildStore"),e=t.parentNode,n=r({className:"fsh-tracker"}),s=r({innerHTML:`${nt(S)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(s,"change",Jt),f(n,t),f(n,s),et(e,n)}(),ie=q({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),T(ie,"change",Be),ce=r({className:"fsh-dialog"}),f(ce,ie),y(document.body,"keydown",ke),f(document.body,ce)}let Ee,Re
function De(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ie(){Re?Re.disabled=!Ee:function(){const t=p(c,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=m(E,e).map(De).join("\n")
Re=f(document.body,X(s)).sheet}()}function Ge(){Ee=!Ee,v("enableStamBars",Ee),Ie(),A("guildManage","StamBars")}function Pe(){!function(){const t=o("#pCC img.guild_openGuildStore").parentNode,e=f(t,r({className:"fshCenter",innerHTML:nt("enableStamBars")}))
y(e,"change",Ge)}(),Ee=d("enableStamBars"),Ee&&Ie()}function _e(t,e,n){const s=function(t){return Nt({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
f(t,function(t){const e=Nt({innerHTML:"[&nbsp;"})
return f(e,t),i(e,"&nbsp;]"),e}(s)),e.id=n,d(n)&&Lt(e),g(s,ht)}function Ve(t){_e(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xe(t){const e=t.rows[4].cells[1].children[0]
l(e.innerHTML.trim(),e),_e(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Fe(t){_e(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Qe(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
l(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,a)}function Ue(t){const e=p("li",t),n=e[e.length-1].parentNode
i(n,`<li><a href="${D}${Ct()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Oe(t,e){w(3,e,[t])}function We(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Ve,Xe,Fe,Qe,Ue].forEach(C(Oe,t))}(t),w(3,Vt),function(t){R()||(d("detailedConflictInfo")&&w(3,zt,[t]),w(4,He))}(t),Pe()}function ze(){const t=o('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Je(){w(3,G),w(3,ze),w(3,kt),w(3,yt),"manage"===B.subcmd&&We(),"view"===B.subcmd&&Gt()}export default Je
//# sourceMappingURL=guild-31d270f9.js.map
