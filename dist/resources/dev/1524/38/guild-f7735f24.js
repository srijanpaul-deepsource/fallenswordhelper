import{a as t}from"./addCommas-cec84c43.js"
import{g as e,p as n,av as s,E as a,by as o,D as i,i as c,d as r,m as l,B as f,h as d,I as u,T as m,b as p,ad as h,a5 as b,o as g,u as j,t as C,v as N,s as L,bB as S,f as v,a0 as y,n as $,aS as k,a as w,aK as x,b6 as T,Q as M,X as A,c as B,bC as H,F as E,y as R,bD as D}from"./calfSystem-d56087e1.js"
import{l as I}from"./onlineDot-0283d5c6.js"
import{s as G}from"./setTipped-f59a320f.js"
import{c as P}from"./colouredDots-d5bef308.js"
import X from"./compressBio-acf446f6.js"
import{c as V}from"./createStyle-c144dc93.js"
import{c as _}from"./currentGuildId-1893e725.js"
import{a as F,g as U,c as O,b as Q}from"./levelHighlight-48b907f1.js"
import{b as z}from"./batch-efcbbd95.js"
import{o as J}from"./openQuickBuffByName-d6026140.js"
import{d as K}from"./dataRows-ce1a2933.js"
import{c as Z}from"./createInput-0182b589.js"
import{c as q}from"./createUl-3d5c471f.js"
import{s as W,g as Y}from"./idb-a1e4e2c2.js"
import{i as tt}from"./insertElementAfterBegin-2d4418e8.js"
import{b as et}from"./simpleCheckbox-8b0bdf14.js"
import{a as nt}from"./alpha-f430aa22.js"
import{c as st}from"./createTBody-921c0ab9.js"
import{c as at}from"./createTable-5e7fa021.js"
import{f as ot}from"./formatLocalDateTime-206840d8.js"
import{u as it,l as ct,v as rt,c as lt,m as ft,a as dt,g as ut}from"./indexConstants-c6c4e0d4.js"
import{c as mt,t as pt}from"./toggleVisibilty-092c60fb.js"
import{c as ht}from"./createButton-489c57dd.js"
import{c as bt}from"./createTextArea-88c07d7e.js"
import{d as gt}from"./dialogMsg-a0c49d9a.js"
import{p as jt}from"./playerName-78fba94b.js"
import{c as Ct}from"./createSpan-65434787.js"
import{h as Nt}from"./hideElement-9b8f5190.js"
import"./createLabel-abb72e31.js"
import"./insertElementBefore-71272774.js"
import"./intValue-ba9b9e5a.js"
import"./valueText-72f14761.js"
import"./fshOpen-ec83b065.js"
import"./isChecked-16fc7684.js"
import"./toLowerCase-b0c4634d.js"
import"./isDate-d24d25bc.js"
import"./numberIsNaN-30cde299.js"
import"./padZ-8b68b081.js"
function Lt(t,e){const n=o.exec(e.dataset.tipped)
return I({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function St(){const o=e("b",n).find(s("Members"))
if(o){const e=a('#pCC a[data-tipped*="Last Activity"]'),n=function(t){return t.reduce(Lt,[0,0])}(e)
o.classList.add("tip-static"),G(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,o)}}function vt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function yt(e){const n=e.dataset.tipped,s=vt(n,/XP Lock: <b>(\d*)/),a=vt(n,/XP: <b>(\d*)/)
c(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`)}function $t(){const t=i('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&yt(t)}let kt,wt
function xt(t){return kt&&t>=F()&&t<=U()}function Tt(t){return wt&&t>=O()&&t<=Q()}const Mt=t=>[t,o.exec(t.dataset.tipped)[1]],At=([,t])=>t<7,Bt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Ht=([t,e])=>[t.parentNode.parentNode.rowIndex,xt(e),Tt(e)]
const Et=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Rt(){const t=a('#pCC a[data-tipped*="<td>VL:</td>"]').map(Mt).filter(At).map(Bt).map(Ht),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Et(t)} {background-color: #4671C8;}`
d(document.body,V(e))}}(e),function(t){if(t.length){const e=`${Et(t)} {background-color: #FF9900;}`
d(document.body,V(e))}}(s),function(t,e){if(t.length+e.length){const t=p(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function Dt(){Number(m("guild_id"))!==_()&&(kt||wt)&&Rt()}function It(){kt=u("highlightPlayersNearMyLvl"),wt=u("highlightGvGPlayersNearMyLvl"),Dt(),u("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],s=l({id:"profile-bio",innerHTML:t.innerHTML})
f("",t),d(t,s),X()}()}function Gt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function Pt(t){"smallLink"===t.target.className&&J(t.target.previousElementSibling.text)}function Xt(){const t=h(`#pCC a[href^="${b}"]`)
z([5,3,t,0,Gt]),g(n,Pt)}function Vt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function _t(t,e){f(e,t.insertCell(-1))}function Ft(t,e,n){const s=t.insertRow(t.rows.length-2)
_t(s,e),_t(s,n)}function Ut(t,e){Ft(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ot(t,e,n){1===e&&function(t){Ft(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),K(t.rows,7,0).forEach(C(Ut,n))}function Qt(t,e){const n=N(e),s=i('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=i("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Ot(s,e,n)}(n,a,t.node),o>a&&function(t,e,n){Vt(t+1).then(C(e,n))}(a,Qt,t)}function zt(t){const e=t.rows[6].cells[0].children[0]
e&&Vt(1).then(C(Qt,{node:e}))}function Jt(t){t.target.id===S&&y(S,!u(S))}let Kt,Zt,qt,Wt,Yt,te,ee,ne,se,ae,oe,ie,ce
function re(t,e){return`${t}<option value="${e}">${e}</option>`}function le(t){return x(t)?"#DEF":t.toLocaleString()}function fe(t,e,n){return`${e}<tr><td>${ot(new Date(1e3*n[it]))}</td><td>${t}</td><td class="fshRight">${le(n[ct])}</td><td class="fshRight">${le(n[rt])}</td><td class="fshRight">${le(n[lt])}</td><td class="fshRight">${le(n[ft])}</td><td class="fshRight">${Math.floor(n[lt]/n[ft]*100)}</td><td class="fshRight">${n[dt]}</td><td class="fshRight">${le(n[ut])}</td></tr>`}function de(t,e){return function(t){return Zt&&"- All -"!==Zt&&Zt!==t}(e)?t:t+Yt[e].reduce(C(fe,e),"")}function ue(){Yt&&f(k(Yt).reduce(de,""),Kt),qt.classList.remove("fshSpinner")}function me(){qt.classList.add("fshSpinner"),w(3,ue)}function pe(t){Zt=t.target.value,me()}function he(t){t&&(Yt=t,f(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(nt).reduce(re,"")}</select>`,Wt),me())}function be(){const t=$("th",{textContent:"Member"})
return Wt=l(),d(t,Wt),t}function ge(){const t=at({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
c(e,"<th>Date</th>")
const n=be()
d(e,n),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Kt=st(),d(t,Kt)}(t),v(t,"change",pe),qt=l({className:"tgCont fshSpinner64"}),d(qt,t),qt}function je(t){te.value=t,se.classList.remove("fshSpinner")}function Ce(){te.value='{"lastUpdate": 0, "members": {}}'}function Ne(t){gt("Update successful"),he(t.members)}function Le(){const t=T(te.value)
W("fsh_guildActivity",t).then(C(Ne,t)).catch(gt)}function Se(t,e){const n=ht({className:"custombutton",textContent:t})
return g(n,e),n}function ve(){return se=l({id:"io",className:"fshSpinner64"}),te=bt(),te.setAttribute("autocapitalize","off"),te.setAttribute("autocomplete","off"),te.setAttribute("autocorrect","off"),te.setAttribute("spellcheck","false"),ee=Se("Save",Le),ne=Se("Reset",Ce),d(se,te),d(se,mt()),d(se,ee),d(se,ne),se}function ye(){return!oe.checked}function $e(t){oe.checked&&"Escape"===t.code&&(oe.checked=!1)}function ke(t){ye()&&(t.style.transform=null)}function we(){A("guildTracker","updateRawData"),ae&&function(t){t&&(se.classList.add("fshSpinner"),w(4,je,[t]))}(ae)}function xe(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return ce=Z({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),M(ce,"change",we),d(t,ce),t}(),e=q({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return d(t,e),H(e,t),t}function Te(){const t=xe(),e=function(){const t=l({className:"fsh-dialog-content"})
return d(t,ge()),d(t,ve()),t}()
d(t,e),v(oe,"change",C(ke,t)),d(ie,t)}function Me(t){t&&(ae=JSON.stringify(t),he(t.members))}function Ae(){A("guildTracker","openDialog"),Y("fsh_guildActivity").then(Me),B.dialogIsClosed=ye,c(ie,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Te()}function Be(){!function(){const t=i("#pCC img.guild_openGuildStore"),e=t.parentNode,n=l({className:"fsh-tracker"}),s=l({innerHTML:`${et(S)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
v(s,"change",Jt),d(n,t),d(n,s),tt(e,n)}(),oe=Z({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),M(oe,"change",Ae),ie=l({className:"fsh-dialog"}),d(ie,oe),v(document.body,"keydown",$e),d(document.body,ie)}let He,Ee
function Re(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function De(){Ee?Ee.disabled=!He:function(){const t=p(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=a(E,e).map(Re).join("\n")
Ee=d(document.body,V(s)).sheet}()}function Ie(){He=!He,y("enableStamBars",He),De(),A("guildManage","StamBars")}function Ge(){!function(){const t=i("#pCC img.guild_openGuildStore").parentNode,e=d(t,l({className:"fshCenter",innerHTML:et("enableStamBars")}))
v(e,"change",Ie)}(),He=u("enableStamBars"),He&&De()}function Pe(t,e,n){const s=function(t){return Ct({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
d(t,function(t){const e=Ct({innerHTML:"[&nbsp;"})
return d(e,t),c(e,"&nbsp;]"),e}(s)),e.id=n,u(n)&&Nt(e),g(s,pt)}function Xe(t){Pe(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Ve(t){const e=t.rows[4].cells[1].children[0]
f(e.innerHTML.trim(),e),Pe(e,t.rows[6].cells[0].children[0],"statisticsControl")}function _e(t){Pe(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Fe(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
f(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,a)}function Ue(t){const e=p("li",t),n=e[e.length-1].parentNode
c(n,`<li><a href="${D}${jt()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Oe(t,e){w(3,e,[t])}function Qe(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Xe,Ve,_e,Fe,Ue].forEach(C(Oe,t))}(t),w(3,Xt),function(t){R()||(u("detailedConflictInfo")&&w(3,zt,[t]),w(4,Be))}(t),Ge()}function ze(){const t=i('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Je(){w(3,P),w(3,ze),w(3,$t),w(3,St),"manage"===B.subcmd&&Qe(),"view"===B.subcmd&&It()}export default Je
//# sourceMappingURL=guild-f7735f24.js.map
