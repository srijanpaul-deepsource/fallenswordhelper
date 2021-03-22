import{a as t}from"./addCommas-fa3f11ee.js"
import{g as e,p as n,at as s,E as a,bw as o,D as i,i as c,d as r,m as l,B as f,h as d,I as u,S as m,b as p,ac as h,a4 as b,o as g,u as j,t as C,v as N,s as L,bx as S,f as y,_ as v,n as $,aN as w,a as k,aH as x,b2 as M,Q as T,W as A,c as H,by as B,F as E,y as R,bz as D}from"./calfSystem-fe0ebf32.js"
import{l as I}from"./onlineDot-6de579ac.js"
import{s as G}from"./setTipped-b11fa6f8.js"
import{c as P}from"./colouredDots-74c4a16e.js"
import _ from"./compressBio-40e03b54.js"
import{c as V}from"./createStyle-764720eb.js"
import{c as X}from"./currentGuildId-09820c92.js"
import{a as F,g as U,c as z,b as O}from"./levelHighlight-71d51155.js"
import{b as Q}from"./batch-0d4bdf85.js"
import{o as J}from"./openQuickBuffByName-6871b68f.js"
import{d as W}from"./dataRows-fe9c44ea.js"
import{c as Z}from"./createInput-47702c1d.js"
import{c as q}from"./createUl-995f97e4.js"
import{s as K,g as Y}from"./idb-b0de0ac7.js"
import{i as tt}from"./insertElementAfterBegin-eef98cf1.js"
import{b as et}from"./simpleCheckbox-a56939b2.js"
import{a as nt}from"./alpha-5123f505.js"
import{c as st}from"./createTBody-d4cc74f9.js"
import{c as at}from"./createTable-94e6d4a8.js"
import{f as ot}from"./formatLocalDateTime-6ee91e08.js"
import{u as it,l as ct,v as rt,c as lt,m as ft,a as dt,g as ut}from"./indexConstants-72ee67f7.js"
import{c as mt,t as pt}from"./toggleVisibilty-34ab122c.js"
import{c as ht}from"./createButton-f3d952bf.js"
import{c as bt}from"./createTextArea-b0ccec11.js"
import{d as gt}from"./dialogMsg-eb4e9d8f.js"
import{p as jt}from"./playerName-dca56241.js"
import{c as Ct}from"./createSpan-0da61261.js"
import{h as Nt}from"./hideElement-2c661b2e.js"
import"./createLabel-616c04a1.js"
import"./insertElementBefore-9228b012.js"
import"./intValue-1ce02c09.js"
import"./valueText-2234f468.js"
import"./fshOpen-363b7f52.js"
import"./isChecked-36c474a7.js"
import"./toLowerCase-5dc9e42d.js"
import"./isDate-37768d15.js"
import"./numberIsNaN-1e8b4508.js"
import"./padZ-3a7e6015.js"
function Lt(t,e){const n=o.exec(e.dataset.tipped)
return I({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function St(){const o=e("b",n).find(s("Members"))
if(o){const e=a('#pCC a[data-tipped*="Last Activity"]'),n=function(t){return t.reduce(Lt,[0,0])}(e)
o.classList.add("tip-static"),G(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,o)}}function yt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function vt(e){const n=e.dataset.tipped,s=yt(n,/XP Lock: <b>(\d*)/),a=yt(n,/XP: <b>(\d*)/)
c(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`)}function $t(){const t=i('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&vt(t)}let wt,kt
function xt(t){return wt&&t>=F()&&t<=U()}function Mt(t){return kt&&t>=z()&&t<=O()}const Tt=t=>[t,o.exec(t.dataset.tipped)[1]],At=([,t])=>t<7,Ht=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Bt=([t,e])=>[t.parentNode.parentNode.rowIndex,xt(e),Mt(e)]
const Et=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Rt(){const t=a('#pCC a[data-tipped*="<td>VL:</td>"]').map(Tt).filter(At).map(Ht).map(Bt),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Et(t)} {background-color: #4671C8;}`
d(document.body,V(e))}}(e),function(t){if(t.length){const e=`${Et(t)} {background-color: #FF9900;}`
d(document.body,V(e))}}(s),function(t,e){if(t.length+e.length){const t=p(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function Dt(){Number(m("guild_id"))!==X()&&(wt||kt)&&Rt()}function It(){wt=u("highlightPlayersNearMyLvl"),kt=u("highlightGvGPlayersNearMyLvl"),Dt(),u("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],s=l({id:"profile-bio",innerHTML:t.innerHTML})
f("",t),d(t,s),_()}()}function Gt(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function Pt(t){"smallLink"===t.target.className&&J(t.target.previousElementSibling.text)}function _t(){const t=h(`#pCC a[href^="${b}"]`)
Q([5,3,t,0,Gt]),g(n,Pt)}function Vt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function Xt(t,e){f(e,t.insertCell(-1))}function Ft(t,e,n){const s=t.insertRow(t.rows.length-2)
Xt(s,e),Xt(s,n)}function Ut(t,e){Ft(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function zt(t,e,n){1===e&&function(t){Ft(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),W(t.rows,7,0).forEach(C(Ut,n))}function Ot(t,e){const n=N(e),s=i('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=i("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&zt(s,e,n)}(n,a,t.node),o>a&&function(t,e,n){Vt(t+1).then(C(e,n))}(a,Ot,t)}function Qt(t){const e=t.rows[6].cells[0].children[0]
e&&Vt(1).then(C(Ot,{node:e}))}function Jt(t){t.target.id===S&&v(S,!u(S))}let Wt,Zt,qt,Kt,Yt,te,ee,ne,se,ae,oe,ie,ce
function re(t,e){return`${t}<option value="${e}">${e}</option>`}function le(t){return x(t)?"#DEF":t.toLocaleString()}function fe(t,e,n){return`${e}<tr><td>${ot(new Date(1e3*n[it]))}</td><td>${t}</td><td class="fshRight">${le(n[ct])}</td><td class="fshRight">${le(n[rt])}</td><td class="fshRight">${le(n[lt])}</td><td class="fshRight">${le(n[ft])}</td><td class="fshRight">${Math.floor(n[lt]/n[ft]*100)}</td><td class="fshRight">${n[dt]}</td><td class="fshRight">${le(n[ut])}</td></tr>`}function de(t,e){return function(t){return Zt&&"- All -"!==Zt&&Zt!==t}(e)?t:t+Yt[e].reduce(C(fe,e),"")}function ue(){Yt&&f(w(Yt).reduce(de,""),Wt),qt.classList.remove("fshSpinner")}function me(){qt.classList.add("fshSpinner"),k(3,ue)}function pe(t){Zt=t.target.value,me()}function he(t){t&&(Yt=t,f(`<select name="member"><option value="- All -" selected>- All -</option>${w(t).sort(nt).reduce(re,"")}</select>`,Kt),me())}function be(){const t=$("th",{textContent:"Member"})
return Kt=l(),d(t,Kt),t}function ge(){const t=at({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
c(e,"<th>Date</th>")
const n=be()
d(e,n),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Wt=st(),d(t,Wt)}(t),y(t,"change",pe),qt=l({className:"tgCont fshSpinner64"}),d(qt,t),qt}function je(t){te.value=t,se.classList.remove("fshSpinner")}function Ce(){te.value='{"lastUpdate": 0, "members": {}}'}function Ne(t){gt("Update successful"),he(t.members)}function Le(){const t=M(te.value)
K("fsh_guildActivity",t).then(C(Ne,t)).catch(gt)}function Se(t,e){const n=ht({className:"custombutton",textContent:t})
return g(n,e),n}function ye(){return se=l({id:"io",className:"fshSpinner64"}),te=bt(),te.setAttribute("autocapitalize","off"),te.setAttribute("autocomplete","off"),te.setAttribute("autocorrect","off"),te.setAttribute("spellcheck","false"),ee=Se("Save",Le),ne=Se("Reset",Ce),d(se,te),d(se,mt()),d(se,ee),d(se,ne),se}function ve(){return!oe.checked}function $e(t){oe.checked&&"Escape"===t.code&&(oe.checked=!1)}function we(t){ve()&&(t.style.transform=null)}function ke(){A("guildTracker","updateRawData"),ae&&function(t){t&&(se.classList.add("fshSpinner"),k(4,je,[t]))}(ae)}function xe(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return ce=Z({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),T(ce,"change",ke),d(t,ce),t}(),e=q({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return d(t,e),B(e,t),t}function Me(){const t=xe(),e=function(){const t=l({className:"fsh-dialog-content"})
return d(t,ge()),d(t,ye()),t}()
d(t,e),y(oe,"change",C(we,t)),d(ie,t)}function Te(t){t&&(ae=JSON.stringify(t),he(t.members))}function Ae(){A("guildTracker","openDialog"),Y("fsh_guildActivity").then(Te),H.dialogIsClosed=ve,c(ie,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Me()}function He(){!function(){const t=i("#pCC img.guild_openGuildStore"),e=t.parentNode,n=l({className:"fsh-tracker"}),s=l({innerHTML:`${et(S)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(s,"change",Jt),d(n,t),d(n,s),tt(e,n)}(),oe=Z({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),T(oe,"change",Ae),ie=l({className:"fsh-dialog"}),d(ie,oe),y(document.body,"keydown",$e),d(document.body,ie)}let Be,Ee
function Re(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function De(){Ee?Ee.disabled=!Be:function(){const t=p(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=a(E,e).map(Re).join("\n")
Ee=d(document.body,V(s)).sheet}()}function Ie(){Be=!Be,v("enableStamBars",Be),De(),A("guildManage","StamBars")}function Ge(){!function(){const t=i("#pCC img.guild_openGuildStore").parentNode,e=d(t,l({className:"fshCenter",innerHTML:et("enableStamBars")}))
y(e,"change",Ie)}(),Be=u("enableStamBars"),Be&&De()}function Pe(t,e,n){const s=function(t){return Ct({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
d(t,function(t){const e=Ct({innerHTML:"[&nbsp;"})
return d(e,t),c(e,"&nbsp;]"),e}(s)),e.id=n,u(n)&&Nt(e),g(s,pt)}function _e(t){Pe(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Ve(t){const e=t.rows[4].cells[1].children[0]
f(e.innerHTML.trim(),e),Pe(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Xe(t){Pe(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Fe(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
f(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,a)}function Ue(t){const e=p("li",t),n=e[e.length-1].parentNode
c(n,`<li><a href="${D}${jt()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function ze(t,e){k(3,e,[t])}function Oe(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[_e,Ve,Xe,Fe,Ue].forEach(C(ze,t))}(t),k(3,_t),function(t){R()||(u("detailedConflictInfo")&&k(3,Qt,[t]),k(4,He))}(t),Ge()}function Qe(){const t=i('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Je(){k(3,P),k(3,Qe),k(3,$t),k(3,St),"manage"===H.subcmd&&Oe(),"view"===H.subcmd&&It()}export default Je
//# sourceMappingURL=guild-c86dd3db.js.map
