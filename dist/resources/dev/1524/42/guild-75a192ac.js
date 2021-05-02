import{a as t}from"./addCommas-99f495b9.js"
import{g as e,p as n,aE as s,bz as a,H as o,D as i,i as c,d as r,m as l,B as f,h as d,I as u,T as m,E as p,b as h,ad as b,a5 as g,o as j,u as C,t as N,v as L,s as S,bB as v,f as y,a0 as $,n as k,aZ as w,a as T,aR as x,bd as M,Q as A,X as H,c as B,bC as E,F as R,y as D,bD as I}from"./calfSystem-4b6b865d.js"
import{g as G,c as P}from"./colouredDots-1101eb92.js"
import{l as X}from"./onlineDot-a8b83ea6.js"
import{s as V}from"./setTipped-1ee3895d.js"
import{c as _}from"./closestTr-2426267d.js"
import{i as F}from"./intValue-9eb8a210.js"
import{s as U}from"./sum-6b72699b.js"
import z from"./compressBio-0246c6a0.js"
import{c as O}from"./createStyle-7b96b857.js"
import{c as Q}from"./currentGuildId-830390c7.js"
import{a as Z,g as J,c as q,b as K}from"./levelHighlight-a19a06aa.js"
import{b as W}from"./batch-49c32951.js"
import{o as Y}from"./openQuickBuffByName-390aeb1d.js"
import{d as tt}from"./dataRows-096bc406.js"
import{c as et}from"./createInput-4be43807.js"
import{c as nt}from"./createUl-a6afb11f.js"
import{s as st,g as at}from"./idb-a46a6973.js"
import{i as ot}from"./insertElementAfterBegin-4ec7552e.js"
import{b as it}from"./simpleCheckbox-90be58c0.js"
import{a as ct}from"./alpha-7993f8ac.js"
import{c as rt}from"./createTBody-74abfa81.js"
import{c as lt}from"./createTable-69c7bb68.js"
import{f as ft}from"./formatLocalDateTime-7dbf592b.js"
import{u as dt,l as ut,v as mt,c as pt,m as ht,a as bt,g as gt}from"./indexConstants-6fab66f5.js"
import{c as jt,t as Ct}from"./toggleVisibilty-ccf1cd3d.js"
import{c as Nt}from"./createButton-ab007289.js"
import{c as Lt}from"./createTextArea-69837aec.js"
import{d as St}from"./dialogMsg-5b0fd825.js"
import{p as vt}from"./playerName-64ba6f1f.js"
import{c as yt}from"./createSpan-dab32f7a.js"
import{h as $t}from"./hideElement-30ade5f0.js"
import"./closest-9a08f4fa.js"
import"./createLabel-3123bd3b.js"
import"./insertElementBefore-34b77984.js"
import"./valueText-3b73f119.js"
import"./fshOpen-cce15559.js"
import"./isChecked-cf65e779.js"
import"./toLowerCase-8d8df902.js"
import"./isDate-0659c8ad.js"
import"./numberIsNaN-484c0124.js"
import"./padZ-babdd575.js"
function kt(t,e){const n=a.exec(e.dataset.tipped)
return X({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function wt(){const a=e("b",n).find(s("Members"))
if(a){const e=G(),n=function(t){return t.reduce(kt,[0,0])}(e)
a.classList.add("tip-static"),V(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,a)}}const Tt=t=>F(o(_(t).cells[4]))
function xt(t,e){let n
const s=t.replace(/,/g,"").match(e)
return n=s?parseInt(s[1],10):0,n}function Mt(e){const n=e.dataset.tipped,s=xt(n,/XP Lock: <b>(\d*)/),a=xt(n,/XP: <b>(\d*)/)
c(e.parentNode.nextElementSibling,` (<b>${function(e,n){let s=""
return e>n&&(s="+"),s+t(e-n)}(a,s)}</b>)`),console.log(t(G().map(Tt).reduce(U,0)))}function At(){const t=i('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&Mt(t)}let Ht,Bt
function Et(t){return Ht&&t>=Z()&&t<=J()}function Rt(t){return Bt&&t>=q()&&t<=K()}const Dt=t=>[t,a.exec(t.dataset.tipped)[1]],It=([,t])=>t<7,Gt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Pt=([t,e])=>[t.parentNode.parentNode.rowIndex,Et(e),Rt(e)]
const Xt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Vt(){const t=p('#pCC a[data-tipped*="<td>VL:</td>"]').map(Dt).filter(It).map(Gt).map(Pt),e=t.filter((([,t])=>t)),s=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Xt(t)} {background-color: #4671C8;}`
d(document.body,O(e))}}(e),function(t){if(t.length){const e=`${Xt(t)} {background-color: #FF9900;}`
d(document.body,O(e))}}(s),function(t,e){if(t.length+e.length){const t=h(r,n)
t[t.length-1].classList.add("fshHighlight")}}(e,s)}function _t(){Number(m("guild_id"))!==Q()&&(Ht||Bt)&&Vt()}function Ft(){Ht=u("highlightPlayersNearMyLvl"),Bt=u("highlightGvGPlayersNearMyLvl"),_t(),u("enableHistoryCompressor")&&function(){const t=e(r,n).slice(-2,-1)[0].rows[0].cells[0],s=l({id:"profile-bio",innerHTML:t.innerHTML})
f("",t),d(t,s),z()}()}function Ut(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function zt(t){"smallLink"===t.target.className&&Y(t.target.previousElementSibling.text)}function Ot(){const t=b(`#pCC a[href^="${g}"]`)
W([5,3,t,0,Ut]),j(n,zt)}function Qt(t){return C({cmd:"guild",subcmd:"conflicts",page:t})}function Zt(t,e){f(e,t.insertCell(-1))}function Jt(t,e,n){const s=t.insertRow(t.rows.length-2)
Zt(s,e),Zt(s,n)}function qt(t,e){Jt(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Kt(t,e,n){1===e&&function(t){Jt(t,`<a href="${S}conflicts">Active Conflicts</a>`,"Score")}(n),tt(t.rows,7,0).forEach(N(qt,n))}function Wt(t,e){const n=L(e),s=i('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=i("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Kt(s,e,n)}(n,a,t.node),o>a&&function(t,e,n){Qt(t+1).then(N(e,n))}(a,Wt,t)}function Yt(t){const e=t.rows[6].cells[0].children[0]
e&&Qt(1).then(N(Wt,{node:e}))}function te(t){t.target.id===v&&$(v,!u(v))}let ee,ne,se,ae,oe,ie,ce,re,le,fe,de,ue,me
function pe(t,e){return`${t}<option value="${e}">${e}</option>`}function he(t){return x(t)?"#DEF":t.toLocaleString()}function be(t,e,n){return`${e}<tr><td>${ft(new Date(1e3*n[dt]))}</td><td>${t}</td><td class="fshRight">${he(n[ut])}</td><td class="fshRight">${he(n[mt])}</td><td class="fshRight">${he(n[pt])}</td><td class="fshRight">${he(n[ht])}</td><td class="fshRight">${Math.floor(n[pt]/n[ht]*100)}</td><td class="fshRight">${n[bt]}</td><td class="fshRight">${he(n[gt])}</td></tr>`}function ge(t,e){return function(t){return ne&&"- All -"!==ne&&ne!==t}(e)?t:t+oe[e].reduce(N(be,e),"")}function je(){oe&&f(w(oe).reduce(ge,""),ee),se.classList.remove("fshSpinner")}function Ce(){se.classList.add("fshSpinner"),T(3,je)}function Ne(t){ne=t.target.value,Ce()}function Le(t){t&&(oe=t,f(`<select name="member"><option value="- All -" selected>- All -</option>${w(t).sort(ct).reduce(pe,"")}</select>`,ae),Ce())}function Se(){const t=k("th",{textContent:"Member"})
return ae=l(),d(t,ae),t}function ve(){const t=lt({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
c(e,"<th>Date</th>")
const n=Se()
d(e,n),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){ee=rt(),d(t,ee)}(t),y(t,"change",Ne),se=l({className:"tgCont fshSpinner64"}),d(se,t),se}function ye(t){ie.value=t,le.classList.remove("fshSpinner")}function $e(){ie.value='{"lastUpdate": 0, "members": {}}'}function ke(t){St("Update successful"),Le(t.members)}function we(){const t=M(ie.value)
st("fsh_guildActivity",t).then(N(ke,t)).catch(St)}function Te(t,e){const n=Nt({className:"custombutton",textContent:t})
return j(n,e),n}function xe(){return le=l({id:"io",className:"fshSpinner64"}),ie=Lt(),ie.setAttribute("autocapitalize","off"),ie.setAttribute("autocomplete","off"),ie.setAttribute("autocorrect","off"),ie.setAttribute("spellcheck","false"),ce=Te("Save",we),re=Te("Reset",$e),d(le,ie),d(le,jt()),d(le,ce),d(le,re),le}function Me(){return!de.checked}function Ae(t){de.checked&&"Escape"===t.code&&(de.checked=!1)}function He(t){Me()&&(t.style.transform=null)}function Be(){H("guildTracker","updateRawData"),fe&&function(t){t&&(le.classList.add("fshSpinner"),T(4,ye,[t]))}(fe)}function Ee(){const t=function(){const t=l({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return me=et({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),A(me,"change",Be),d(t,me),t}(),e=nt({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return d(t,e),E(e,t),t}function Re(){const t=Ee(),e=function(){const t=l({className:"fsh-dialog-content"})
return d(t,ve()),d(t,xe()),t}()
d(t,e),y(de,"change",N(He,t)),d(ue,t)}function De(t){t&&(fe=JSON.stringify(t),Le(t.members))}function Ie(){H("guildTracker","openDialog"),at("fsh_guildActivity").then(De),B.dialogIsClosed=Me,c(ue,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Re()}function Ge(){!function(){const t=i("#pCC img.guild_openGuildStore"),e=t.parentNode,n=l({className:"fsh-tracker"}),s=l({innerHTML:`${it(v)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(s,"change",te),d(n,t),d(n,s),ot(e,n)}(),de=et({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),A(de,"change",Ie),ue=l({className:"fsh-dialog"}),d(ue,de),y(document.body,"keydown",Ae),d(document.body,ue)}let Pe,Xe
function Ve(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function _e(){Xe?Xe.disabled=!Pe:function(){const t=h(r,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const s=p(R,e).map(Ve).join("\n")
Xe=d(document.body,O(s)).sheet}()}function Fe(){Pe=!Pe,$("enableStamBars",Pe),_e(),H("guildManage","StamBars")}function Ue(){!function(){const t=i("#pCC img.guild_openGuildStore").parentNode,e=d(t,l({className:"fshCenter",innerHTML:it("enableStamBars")}))
y(e,"change",Fe)}(),Pe=u("enableStamBars"),Pe&&_e()}function ze(t,e,n){const s=function(t){return yt({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
d(t,function(t){const e=yt({innerHTML:"[&nbsp;"})
return d(e,t),c(e,"&nbsp;]"),e}(s)),e.id=n,u(n)&&$t(e),j(s,Ct)}function Oe(t){ze(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Qe(t){const e=t.rows[4].cells[1].children[0]
f(e.innerHTML.trim(),e),ze(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Ze(t){ze(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Je(t){const n=e("b",t).filter(s("Relics"))
if(1!==n.length)return
const a=n[0].parentNode.nextElementSibling.children[0]
f(`[ <a href="${S}reliclist">Control</a> ]&nbsp;`,a)}function qe(t){const e=h("li",t),n=e[e.length-1].parentNode
c(n,`<li><a href="${I}${vt()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Ke(t,e){T(3,e,[t])}function We(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Oe,Qe,Ze,Je,qe].forEach(N(Ke,t))}(t),T(3,Ot),function(t){D()||(u("detailedConflictInfo")&&T(3,Yt,[t]),T(4,Ge))}(t),Ue()}function Ye(){const t=i('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function tn(){T(3,P),T(3,Ye),T(3,At),T(3,wt),"manage"===B.subcmd&&We(),"view"===B.subcmd&&Ft()}export default tn
//# sourceMappingURL=guild-75a192ac.js.map
