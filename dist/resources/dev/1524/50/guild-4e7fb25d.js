import{a as t}from"./addCommas-b66fde4c.js"
import{g as e,p as n,aK as s,bF as a,H as o,D as i,i as c,d as r,m as l,B as f,h as u,I as d,S as m,E as p,b as h,af as b,a5 as g,o as j,u as N,t as C,v as S,s as L,bH as v,f as y,a0 as $,n as k,b3 as w,bD as T,a as x,a8 as M,bj as H,X as A,P as B,T as E,c as R,bI as D,F as I,y as P,bJ as G}from"./calfSystem-b3667af8.js"
import{g as X,c as F}from"./colouredDots-72a91295.js"
import{l as V}from"./onlineDot-38946dd7.js"
import{s as _}from"./setTipped-5e35ee46.js"
import{c as U}from"./closestTr-868b7fea.js"
import{i as J}from"./intValue-76dfee09.js"
import{s as O}from"./sum-eeb2c33d.js"
import z from"./compressBio-faf9c964.js"
import{c as K}from"./createStyle-7b65d830.js"
import{c as Q}from"./currentGuildId-01980e74.js"
import{a as W,g as Z,c as q,b as Y}from"./levelHighlight-dff87aa8.js"
import{b as tt}from"./batch-1a09a87c.js"
import{o as et}from"./openQuickBuffByName-18de8163.js"
import{d as nt}from"./dataRows-f96281bd.js"
import{c as st}from"./createInput-18c4c6d4.js"
import{c as at}from"./createUl-f2354fe8.js"
import{s as ot,g as it}from"./idb-22dd2687.js"
import{i as ct}from"./insertElementAfterBegin-f84b0883.js"
import{b as rt}from"./simpleCheckbox-20ff8122.js"
import{c as lt}from"./createTBody-d091f7d9.js"
import{c as ft}from"./createTable-e47cc154.js"
import{f as ut}from"./formatLocalDateTime-76d0f341.js"
import{u as dt,l as mt,v as pt,c as ht,m as bt,a as gt,g as jt}from"./indexConstants-430344ec.js"
import{c as Nt,t as Ct}from"./toggleVisibilty-dad27109.js"
import{c as St}from"./createButton-2cb8f044.js"
import{c as Lt}from"./createTextArea-05172be9.js"
import{p as vt}from"./playerName-8bccbcca.js"
import{c as yt}from"./createSpan-a8a5c715.js"
import{h as $t}from"./hideElement-e21a7422.js"
import"./closest-06418423.js"
import"./createLabel-be5d4ba1.js"
import"./insertElementBefore-784d4581.js"
import"./asInt-4d304164.js"
import"./valueText-5f82bcfb.js"
import"./fshOpen-90a0d847.js"
import"./isChecked-8825c1a8.js"
import"./isDate-c0f20234.js"
import"./numberIsNaN-bf55a311.js"
import"./padZ-a45d0ad0.js"
function kt(t,e){const n=a.exec(e.dataset.tipped)
return V({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function wt(){const a=e("b",n).find(s("Members"))
if(a){const e=X(),n=function(t){return t.reduce(kt,[0,0])}(e)
a.classList.add("tip-static"),_(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,a)}}const Tt=t=>J(o(U(t).cells[4]))
function xt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function Mt(e){const n=e.dataset.tipped,s=xt(n,/XP Lock: <b>(\d*)/),a=xt(n,/XP: <b>(\d*)/)
c(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`),console.log(t(X().map(Tt).reduce(O,0)))}function Ht(){const t=i('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&Mt(t)}let At,Bt
function Et(t){return At&&t>=W()&&t<=Z()}function Rt(t){return Bt&&t>=q()&&t<=Y()}const Dt=t=>[t,a.exec(t.dataset.tipped)[1]],It=([,t])=>t<7,Pt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Gt=([t,e])=>[t.parentNode.parentNode.rowIndex,Et(e),Rt(e)]
const Xt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Ft(){const t=p('#pCC a[data-tipped*="<td>VL:</td>"]').map(Dt).filter(It).map(Pt).map(Gt),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Xt(t)} {background-color: #4671C8;}`
u(document.body,K(e))}}(e),function(t){if(t.length){const e=`${Xt(t)} {background-color: #FF9900;}`
u(document.body,K(e))}}(s),function(t,e){if(t.length+e.length){const t=h(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function Vt(){Number(m("guild_id"))!==Q()&&(At||Bt)&&Ft()}function _t(){At=d("highlightPlayersNearMyLvl"),Bt=d("highlightGvGPlayersNearMyLvl"),Vt(),d("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],s=l({id:"profile-bio",innerHTML:t.innerHTML})
f("",t),u(t,s),z()}()}function Ut(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function Jt(t){"smallLink"===t.target.className&&et(t.target.previousElementSibling.text)}function Ot(){const t=b(`#pCC a[href^="${g}"]`)
tt([5,3,t,0,Ut]),j(n,Jt)}function zt(t){return N({cmd:"guild",subcmd:"conflicts",page:t})}function Kt(t,e){f(e,t.insertCell(-1))}function Qt(t,e,n){const s=t.insertRow(t.rows.length-2)
Kt(s,e),Kt(s,n)}function Wt(t,e){Qt(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Zt(t,e,n){1===e&&function(t){Qt(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),nt(t.rows,7,0).forEach(C(Wt,n))}function qt(t,e){const n=S(e),s=i('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=i("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Zt(s,e,n)}(n,a,t.node),o>a&&function(t,e,n){zt(t+1).then(C(e,n))}(a,qt,t)}function Yt(t){const e=t.rows[6].cells[0].children[0]
e&&zt(1).then(C(qt,{node:e}))}function te(t){t.target.id===v&&$(v,!d(v))}let ee,ne,se,ae,oe,ie,ce,re,le,fe,ue,de,me
function pe(t,e){return`${t}<option value="${e}">${e}</option>`}function he(t){return M(t)?"#DEF":t.toLocaleString()}function be(t,e,n){return`${e}<tr><td>${ut(new Date(1e3*n[dt]))}</td><td>${t}</td><td class="fshRight">${he(n[mt])}</td><td class="fshRight">${he(n[pt])}</td><td class="fshRight">${he(n[ht])}</td><td class="fshRight">${he(n[bt])}</td><td class="fshRight">${Math.floor(n[ht]/n[bt]*100)}</td><td class="fshRight">${n[gt]}</td><td class="fshRight">${he(n[jt])}</td></tr>`}function ge(t,e){return function(t){return ne&&"- All -"!==ne&&ne!==t}(e)?t:t+oe[e].reduce(C(be,e),"")}function je(){oe&&f(w(oe).reduce(ge,""),ee),se.classList.remove("fshSpinner")}function Ne(){se.classList.add("fshSpinner"),x(3,je)}function Ce(t){ne=t.target.value,Ne()}function Se(t){t&&(oe=t,f(`<select name="member"><option value="- All -" selected>- All -</option>${w(t).sort(T).reduce(pe,"")}</select>`,ae),Ne())}function Le(){const t=k("th",{textContent:"Member"})
return ae=l(),u(t,ae),t}function ve(){const t=ft({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
c(e,"<th>Date</th>")
const n=Le()
u(e,n),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){ee=lt(),u(t,ee)}(t),y(t,"change",Ce),se=l({className:"tgCont fshSpinner64"}),u(se,t),se}function ye(t){ie.value=t,le.classList.remove("fshSpinner")}function $e(){ie.value='{"lastUpdate": 0, "members": {}}'}function ke(t){A("Update successful"),Se(t.members)}function we(){const t=H(ie.value)
ot("fsh_guildActivity",t).then(C(ke,t)).catch(A)}function Te(t,e){const n=St({className:"custombutton",textContent:t})
return j(n,e),n}function xe(){return le=l({id:"io",className:"fshSpinner64"}),ie=Lt(),ie.setAttribute("autocapitalize","off"),ie.setAttribute("autocomplete","off"),ie.setAttribute("autocorrect","off"),ie.setAttribute("spellcheck","false"),ce=Te("Save",we),re=Te("Reset",$e),u(le,ie),u(le,Nt()),u(le,ce),u(le,re),le}function Me(){return!ue.checked}function He(t){ue.checked&&"Escape"===t.code&&(ue.checked=!1)}function Ae(t){Me()&&(t.style.transform=null)}function Be(){E("guildTracker","updateRawData"),fe&&function(t){t&&(le.classList.add("fshSpinner"),x(4,ye,[t]))}(fe)}function Ee(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return me=st({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),B(me,"change",Be),u(t,me),t}(),e=at({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return u(t,e),D(e,t),t}function Re(){const t=Ee(),e=function(){const t=l({className:"fsh-dialog-content"})
return u(t,ve()),u(t,xe()),t}()
u(t,e),y(ue,"change",C(Ae,t)),u(de,t)}function De(t){t&&(fe=JSON.stringify(t),Se(t.members))}function Ie(){E("guildTracker","openDialog"),it("fsh_guildActivity").then(De),R.dialogIsClosed=Me,c(de,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Re()}function Pe(){!function(){const t=i("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=l({className:"fsh-tracker"}),s=l({innerHTML:`${rt(v)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(s,"change",te),u(n,t),u(n,s),ct(e,n)}(),ue=st({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),B(ue,"change",Ie),de=l({className:"fsh-dialog"}),u(de,ue),y(document.body,"keydown",He),u(document.body,de)}let Ge,Xe
function Fe(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ve(){Xe?Xe.disabled=!Ge:function(){const t=h(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=p(I,e).map(Fe).join("\n")
Xe=u(document.body,K(s)).sheet}()}function _e(){Ge=!Ge,$("enableStamBars",Ge),Ve(),E("guildManage","StamBars")}function Ue(){!function(){const t=i("#pCC img.guild_openGuildStore")
if(!t)return
const e=t.parentNode,n=u(e,l({className:"fshCenter",innerHTML:rt("enableStamBars")}))
y(n,"change",_e)}(),Ge=d("enableStamBars"),Ge&&Ve()}function Je(t,e,n){const s=function(t){return yt({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}(n)
u(t,function(t){const e=yt({className:"fshNoWrap",innerHTML:"[&nbsp;"})
return u(e,t),c(e,"&nbsp;]"),e}(s)),e.id=n,d(n)&&$t(e),j(s,Ct)}function Oe(t){Je(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function ze(t){const e=t.rows[4].cells[1].children[0]
f(e.innerHTML.trim(),e),Je(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Ke(t){Je(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Qe(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
f(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,a)}function We(t){const e=h("li",t)
if(!e||!e.length)return
const n=e[e.length-1].parentNode
c(n,`<li><a href="${G}${vt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function Ze(t,e){x(3,e,[t])}function qe(){if(!n)return
const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Oe,ze,Ke,Qe,We].forEach(C(Ze,t))}(t),x(3,Ot),function(t){P()||(d("detailedConflictInfo")&&x(3,Yt,[t]),x(4,Pe))}(t),Ue()}function Ye(){const t=i('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function tn(){x(3,F),x(3,Ye),x(3,Ht),x(3,wt),"manage"===R.subcmd&&qe(),"view"===R.subcmd&&_t()}export default tn
//# sourceMappingURL=guild-4e7fb25d.js.map
