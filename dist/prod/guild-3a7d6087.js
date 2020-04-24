import{g as t,p as e,bl as a,N as n,ab as s,bF as i,c,G as o,X as r,b3 as l,ax as u,a9 as f,o as d,i as h,ar as m,w as b,v as p,x as g,R as v,C as N,u as L,l as C,f as y,h as S,m as k,a4 as w,r as $,av as j,a as T,bG as M,bH as x,bI as A,bJ as R,bK as H,bL as G,bM as E,am as D,aT as B,aj as I,Q as _,a0 as V,ah as P,e as U,bN as X,b as z,T as F,n as J,z as O,bO as K,ac as Q}from"./calfSystem-3956a623.js"
import"./numberIsNaN-c09ad043.js"
import"./toLowerCase-cc930098.js"
import{c as q}from"./createInput-f6e26d5e.js"
import{l as W}from"./onlineDot-b559f6bb.js"
import{b as Y}from"./batch-b53a2e4f.js"
import{c as Z,a as tt}from"./compressBio-fcb33b6b.js"
import"./createLabel-6f6560b1.js"
import{c as et,b as at,p as nt,a as st,g as it}from"./levelHighlight-4d0b938d.js"
import{d as ct}from"./dataRows-013d3c98.js"
import{c as ot}from"./createUl-f72477f7.js"
import"./isChecked-fb51e5d1.js"
import{b as rt}from"./simpleCheckbox-6ac789e1.js"
import{a as lt}from"./alpha-308d451e.js"
import{c as ut}from"./createTBody-c1bf0f07.js"
import{c as ft}from"./createTable-b54e7aab.js"
import"./isDate-dd83b977.js"
import{f as dt}from"./formatLocalDateTime-4dc4e18e.js"
import{c as ht,t as mt}from"./toggleVisibilty-65e4a0f5.js"
import{c as bt}from"./createButton-eb3647ed.js"
import{c as pt}from"./createTextArea-f13cf914.js"
import{d as gt}from"./dialogMsg-6c4a948a.js"
import{c as vt}from"./createStyle-65e18ca6.js"
function Nt(t,e){const a=i.exec(e.dataset.tipped)
return W({min:a[3],hour:a[2],day:a[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function Lt(){const i=t("b",e).find(a("Members"))
if(i){const t=n('#pCC a[data-tipped*="Last Activity"]'),e=function(t){return t.reduce(Nt,[0,0])}(t)
i.classList.add("tip-static"),i.dataset.tipped=`Active: ${e[0]}/${t.length}<br>`+`Stamina: ${s(e[1])}`}}let Ct,yt,St,kt,wt,$t,jt,Tt,Mt,xt,At,Rt,Ht,Gt,Et
function Dt(t,e){const a=Number(/VL:.+?(\d+)/.exec(e)[1]),n=t.parentNode.parentNode
!function(t){return Ct&&t>=at&&t<=nt}(a)?function(t){return yt&&t>=st&&t<=it}(a)&&n.classList.add("lvlGvGHighlight"):n.classList.add("lvlHighlight")}function Bt(t){const{tipped:e}=t.dataset
i.exec(e)[1]<7&&Dt(t,e)}function It(){Number(r("guild_id"))!==l()&&(Ct||yt)&&(et(),n('#pCC a[data-tipped*="<td>VL:</td>"]').forEach(Bt))}function _t(){Ct=o("highlightPlayersNearMyLvl"),yt=o("highlightGvGPlayersNearMyLvl"),It(),o("enableHistoryCompressor")&&Z(t(c,e).slice(-2,-1)[0].rows[0].cells[0])}function Vt(t){h(t.parentNode,' <span class="smallLink">[b]</span>')}function Pt(t){"smallLink"===t.target.className&&m(t.target.previousElementSibling.text)}function Ut(){const t=u(`#pCC a[href^="${f}"]`)
Y([5,3,t,0,Vt]),d(e,Pt)}function Xt(t){return b({cmd:"guild",subcmd:"conflicts",page:t})}function zt(t,e){N(e,t.insertCell(-1))}function Ft(t,e,a){const n=t.insertRow(t.rows.length-2)
zt(n,e),zt(n,a)}function Jt(t,e){Ft(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ot(t,e,a){1===e&&function(t){Ft(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(a),ct(t.rows,7,0).forEach(p(Jt,a))}function Kt(t,e){const a=g(e),n=v('#pCC input[name="page"]',a)
if(!n)return
const s=Number(n.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(n)
!function(t,e,a){const n=v("#pCC > table > tbody > tr > td > table",t)
n&&n.rows.length>3&&Ot(n,e,a)}(a,s,t.node),i>s&&function(t,e,a){Xt(t+1).then(p(e,a))}(s,Kt,t)}function Qt(t){const e=t.rows[6].cells[0].children[0]
e&&Xt(1).then(p(Kt,{node:e}))}function qt(t){"enableGuildActivityTracker"===t.target.id&&w("enableGuildActivityTracker",!o("enableGuildActivityTracker"))}function Wt(t,e){return`${t}<option value="${e}">${e}</option>`}function Yt(t){return D(t)?"#DEF":t.toLocaleString()}function Zt(t,e,a){return`${e}<tr>`+`<td>${dt(new Date(1e3*a[M]))}</td>`+`<td>${t}</td>`+`<td class="fshRight">${Yt(a[x])}</td>`+`<td class="fshRight">${Yt(a[A])}</td>`+`<td class="fshRight">${Yt(a[R])}</td>`+`<td class="fshRight">${Yt(a[H])}</td>`+`<td class="fshRight">${Math.floor(a[R]/a[H]*100)}</td>`+`<td class="fshRight">${a[G]}</td>`+`<td class="fshRight">${Yt(a[E])}</td>`+"</tr>"}function te(t,e){return function(t){return kt&&"- All -"!==kt&&kt!==t}(e)?t:t+jt[e].reduce(p(Zt,e),"")}function ee(){jt&&N(j(jt).reduce(te,""),St),wt.classList.remove("fshSpinner")}function ae(){wt.classList.add("fshSpinner"),T(3,ee)}function ne(t){kt=t.target.value,ae()}function se(t){t&&(jt=t,N('<select name="member">'+`<option value="- All -" selected>- All -</option>${j(t).sort(lt).reduce(Wt,"")}</select>`,$t),ae())}function ie(){const t=$("th",{textContent:"Member"})
return $t=C(),S(t,$t),t}function ce(){const t=ft({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
h(e,"<th>Date</th>")
const a=ie()
S(e,a),h(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){St=ut(),S(t,St)}(t),y(t,"change",ne),wt=C({className:"tgCont fshSpinner64"}),S(wt,t),wt}function oe(t){Tt.value=t,At.classList.remove("fshSpinner")}function re(){Tt.value='{"lastUpdate": 0, "members": {}}'}function le(t){gt("Update successful"),se(t.members)}function ue(){const t=B(Tt.value)
I("fsh_guildActivity",t).then(p(le,t)).catch(gt)}function fe(t,e){const a=bt({className:"custombutton",textContent:t})
return d(a,e),a}function de(){return At=C({id:"io",className:"fshSpinner64"}),Tt=pt(),Tt.setAttribute("autocapitalize","off"),Tt.setAttribute("autocomplete","off"),Tt.setAttribute("autocorrect","off"),Tt.setAttribute("spellcheck","false"),Mt=fe("Save",ue),xt=fe("Reset",re),S(At,Tt),S(At,ht()),S(At,Mt),S(At,xt),At}function he(){return!Ht.checked}function me(t){Ht.checked&&"Escape"===t.code&&(Ht.checked=!1)}function be(t){he()&&(t.style.transform=null)}function pe(){V("guildTracker","updateRawData"),Rt&&function(t){t&&(At.classList.add("fshSpinner"),T(4,oe,[t]))}(Rt)}function ge(){const t=function(){const t=C({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return Et=q({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),_(Et,"change",pe),S(t,Et),t}(),e=ot({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return S(t,e),X(e,t),t}function ve(){const t=ge(),e=function(){const t=C({className:"fsh-dialog-content"})
return S(t,ce()),S(t,de()),t}()
S(t,e),y(Ht,"change",p(be,t)),S(Gt,t)}function Ne(t){t&&(Rt=JSON.stringify(t),se(t.members))}function Le(){V("guildTracker","openDialog"),P("fsh_guildActivity").then(Ne),U.dialogIsClosed=he,h(Gt,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),ve()}function Ce(){!function(){const t=v("#pCC img.guild_openGuildStore"),e=t.parentNode,a=C({className:"fsh-tracker"}),n=C({innerHTML:`${rt("enableGuildActivityTracker")}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(n,"change",qt),S(a,t),S(a,n),k(e,a)}(),Ht=q({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),_(Ht,"change",Le),Gt=C({className:"fsh-dialog"}),S(Gt,Ht),y(document.body,"keydown",me),S(document.body,Gt)}let ye,Se
function ke(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return"#fshMemberList "+`tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {`+`background: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, `+`transparent ${e+1}%)}`}function we(){Se?Se.disabled=!ye:function(){const t=z(c,e),a=t[t.length-1]
a.id="fshMemberList"
const s=n('a[href*="&player_id="]',a).map(ke).join("\n")
Se=S(document.body,vt(s)).sheet}()}function $e(){ye=!ye,w("enableStamBars",ye),we(),V("guildManage","StamBars")}function je(){!function(){const t=v("#pCC img.guild_openGuildStore").parentNode,e=S(t,C({className:"fshCenter",innerHTML:rt("enableStamBars")}))
y(e,"change",$e)}(),ye=o("enableStamBars"),ye&&we()}function Te(t,e,a){const n=function(t){return F({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(a)
S(t,function(t){const e=F({innerHTML:"[&nbsp;"})
return S(e,t),h(e,"&nbsp;]"),e}(n)),e.id=a,o(a)&&J(e),d(n,mt)}function Me(t){Te(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function xe(t){const e=t.rows[4].cells[1].children[0]
N(e.innerHTML.trim(),e),Te(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Ae(t){Te(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Re(e){const n=t("b",e).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
N(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,s)}function He(t){const e=z("li",t),a=e[e.length-1].parentNode
h(a,`<li><a href="${K}${Q()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Ge(t,e){T(3,e,[t])}function Ee(t){O()||(o("detailedConflictInfo")&&T(3,Qt,[t]),T(4,Ce))}function De(){const t=e.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Me,xe,Ae,Re,He].forEach(p(Ge,t))}(t),T(3,Ut),Ee(t),je()}function Be(){const t=v('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}export default function(){T(3,tt),T(3,Be),T(3,Lt),"manage"===U.subcmd&&De(),"view"===U.subcmd&&_t()}
//# sourceMappingURL=guild-3a7d6087.js.map
