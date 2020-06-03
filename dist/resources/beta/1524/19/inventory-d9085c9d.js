import{c as t,s as e,a0 as n,bf as i,bg as s,l as a,$ as r,n as d,D as c,bh as o,f as l,p as f,I as u,al as p,aB as h,z as m,w as b,b0 as y,a as v,aW as g,aX as k,aL as _}from"./calfSystem-57340987.js"
import{i as x}from"./isArray-f770eec0.js"
import"./numberIsNaN-9e712afc.js"
import"./currentGuildId-fd144a5c.js"
import{i as I}from"./intValue-e99f58ac.js"
import{s as R,g as L}from"./idb-c55e2904.js"
import{c as M}from"./createTable-f10ae272.js"
import"./dialogMsg-e1203629.js"
import"./all-82b4870b.js"
import{a as E}from"./allthen-298d46c2.js"
import{e as S}from"./errorDialog-b114c11e.js"
import{d as j}from"./dialog-bc1710e0.js"
import{i as D}from"./indexAjaxJson-f0b26dd6.js"
import{e as T,u as w}from"./useItem-45980044.js"
import{a as N}from"./ajaxReturnCode-76c0bbbd.js"
import"./daUseItem-1a5662fc.js"
import{d as A,a as G}from"./dropItem-6e3fd0d5.js"
import"./cmdExport-1b96d8bc.js"
import{g as q}from"./getInventory-9c5779da.js"
import{l as P,p as U}from"./lvlTests-e8a45565.js"
import{l as C}from"./loadDataTables-72045bea.js"
import{d as O}from"./daLoadInventory-88bf4de2.js"
import{g as W}from"./guild-0ba7b16f.js"
import{c as B}from"./changeMinMax-c6b97c52.js"
import{i as F}from"./isSelected-fb089e99.js"
import{g as V}from"./getMembrList-53881834.js"
import{g as H}from"./guildInventory-fe313f99.js"
import{q as Q,a as Y}from"./queue-7e154eeb.js"
import{n as z}from"./notLastUpdate-f9051eb8.js"
function J(){return W({subcmd:"fetchinv"})}function X(){return H({subcmd2:"report"})}let K,Z=[]
function tt(t){K=t}const et=t=>15===t.t
function nt(t){x(t.r)&&(Z=Array.prototype.concat.apply([],t.r.map(t=>t.items)).filter(et))}function it(t){x(t.r)&&(Z=Z.concat(t.r.filter(et)))}function st(t,e){return e.a===t}function at(t){if(15===t.type){const n=Z.find(e(st,t.inv_id))
n&&(t.item_name=n.n)}}function rt(){K.items.forEach(at)}function dt(){const e=[q().then(tt)]
return"invmanagernew"===t.subcmd&&e.push(O().then(nt)),"guildinvmgr"===t.subcmd&&(e.push(J().then(it)),e.push(X().then(it))),E(e,rt)}function ct(t,e){e.val(""),$(t).DataTable().search("").draw()}function ot(){K.folders&&(K.folders[-1]="Main")}const lt={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},ft='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td><input id="fshMinLvl" size="5" value="1"/></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td><td><input id="fshMaxLvl" size="5" value="9999"/></td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',ut={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},pt={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
function ht(t){return pt[t]?pt[t].abbr:""}function mt(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n)}function bt(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function yt(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${n(t.player_id,K.player_id)}" mode="1" action="recall">GS</span>`}function vt(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function gt(t,e,n){return"display"===t?n(e):"GS"}function kt(t,e){const n=function(t){return-1===t.player_id?4:bt(t)?7:1}(e),a=function(t,e,n){return t||(-1!==e?e:n)}(K.player_id,e.player_id,K.guild_id)
let r=t
e.equipped&&(r=`<b>${t}</b>`)
let d=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(d=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${i}${t}" class="fshInvItem tip-dynamic ${s[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${a}">${r}</a>${d}`}const _t=[[t=>t.player_id&&-1===t.player_id,(t,e)=>'takeItem" action="'+e.a],[t=>t.player_id&&t.player_id!==K.current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===K.current_player_id}(t),(t,e)=>e.c]]
function $t(t,e){const n=_t.find(e=>e[0](t))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function xt(t){return n(t.folder_id,t.player_id)}function It(e){return t.membrList[e]?t.membrList[e].username:"???"}function Rt(t,e){return t[0]-e[0]}function Lt(t,e){return`<option value="${e[0]}"${F(Number(e[0]),t)}>${e[1]}</option>`}let Mt,Et,St
function jt(t){Mt=d({},lt),d(Mt,n(t,{})),Et=c("showQuickDropLinks"),St=c("showQuickSendLinks")}const Dt=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:kt(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:xt,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":It(n.player_id)},display:function(t,n,i){return i.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${r}${t.player_id}">${It(t.player_id)}</a>`}(i):i.equipped?"Worn":`<select class="fshMoveItem" data-inv="${i.inv_id}">${s=i.folder_id,d=K.folders,a(d).sort(Rt).map(e(Lt,s)).join("")}</select>`
var s,d},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":It(t.player_id)}(n):n.equipped?"Worn":K.folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>o[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>pt[t]?pt[t].index:0,display:ht,filter:ht}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.ceil(n.durability/n.max_durability*100)}},{title:"BP",data:xt,render:function(t,e,n){if(!n.folder_id&&n.player_id!==K.current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:xt,render:function(t,e,n){return bt(n)?gt(e,n,yt):function(t){return t.folder_id&&!t.bound}(n)?gt(e,n,vt):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const i=[1,1,1,1,1,1,1,1,1,,2,2,,,,2][t]
return 1===i?$t(n,{a:"wear",b:"Wear",c:"wearItem"}):2===i?$t(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem tip-static dropLink" data-tipped="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem tip-static sendLink" data-tipped="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function Tt(){return"player_id"in K}function wt(){const t=function(){const t=M({className:"hover fshXSmall",id:Tt()?"fshUserInv":"fshGuildInv"})
return l(f,t),t}()
return function(t){t.column(12).visible("current_player_id"in K),t.column(17).visible(Tt()&&Et),t.column(18).visible(Tt()&&St)}(function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:Dt,createdRow:mt,data:K.items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)),t}function Nt(e){R("fsh_"+t.subcmd,e)}function At(){u('table.fshInvFilter input[type="checkbox"]').forEach(t=>{t.checked=1===Mt.checkedElements[t.getAttribute("item")]}),Nt(Mt)}function Gt(t){Mt.checkedElements=ut,At(),$(t).DataTable().draw(!1)}function qt(t,e){Mt.fshMinLvl=t,Mt.fshMaxLvl=e,Nt(Mt)}function Pt(t){$(t).DataTable().draw(!1)}function Ut(t){B(qt,e(Pt,t))}function Ct(t){return Number(t[0])>=100}function Ot(t,e){return t[e[0]]=e[1],t}function Wt(t){var e
Mt.checkedElements=(e=Mt.checkedElements,a(e).filter(Ct).reduce(Ot,{})),At(),$(t).DataTable().draw()}function Bt(t,e){t.eq(e).empty()}function Ft(t,n){if(1===n.r)return
const i=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(e(Bt,t))}($("td",i)),i.css("text-decoration","line-through")}function Vt(t,n){p(n),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(n),t().then(e(Ft,n)),function(t){t.empty().append(`<img src="${h}ui/misc/spinner.gif" width="11" height="11">`)}(n)}function Ht(t){Mt.checkedElements={},u('table.fshInvFilter input[type="checkbox"][item]:checked').forEach(t=>{Mt.checkedElements[t.getAttribute("item")]=1}),Nt(Mt),$(t).DataTable().draw(!1)}function Qt(t){Mt.checkedElements=lt.checkedElements,At(),$(t).DataTable().draw(!1)}function Yt(t){Mt.fshMinLvl=lt.fshMinLvl,Mt.fshMaxLvl=lt.fshMaxLvl,Nt(Mt),$("#fshMinLvl").val(Mt.fshMinLvl),$("#fshMaxLvl").val(Mt.fshMaxLvl),$(t).DataTable().draw(!1)}function zt(t){return function(t){return H({subcmd2:"dostoreitems",storeIndex:t})}(t)}function Jt(t){return zt(t).then(S).then(N)}function Xt(t,e){$(t).DataTable().search($(e.target).attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Kt(t){const n=$(t.target)
Vt(e(Q,n.attr("invid"),n.attr("action")),n)}function Zt(t){const n=$(t.target)
Vt(e(Y,n.attr("invid"),n.attr("playerid"),n.attr("mode"),n.attr("action")),n)}function te(t){const n=$(t.target)
Vt(e(T,n.attr("invid")),n)}function ee(t){const n=$(t.target)
Vt(e(w,n.attr("invid")),n)}function ne(t){const e=$(t.target)
var n,i
n=[e.data("inv")],i=e.val(),D({cmd:"profile",subcmd:"sendtofolder",inv_list:JSON.stringify(n),folder_id:i,ajax:1}).then(j)}function ie(t){const n=$(t.target)
Vt(e(Jt,[n.attr("invid")]),n)}function se(t){const n=$(t.target)
Vt(e(A,[n.data("inv")]),n)}function ae(t){const n=$(t.target)
Vt(e(G,[n.data("inv")]),n)}function re(t,n){$(n[0]).on("click",e(n[1],t))}function de(t,e){$(t).on("click","span."+e[0],e[1])}function ce(t){!function(t){[["#fshReset",Yt],["#fshAll",Gt],["#fshNone",Wt],["#fshDefault",Qt]].forEach(e(re,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',e(Ht,t)),function(t){[["setName",e(Xt,t)],["takeItem",Kt],["recallItem",Zt],["wearItem",te],["useItem",ee],["dropItem",se],["sendItem",ae],["storeItem",ie]].forEach(e(de,t))}(t)}function oe(){let t
t=K.player_id?`<b>&nbsp;Inventory Manager</b> ${K.items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${K.items.length} items (maroon = in BP, blue=guild store)`,m(ft.replace("@@reportTitle@@",t),f)}function le(){$("#fshMinLvl").val(Mt.fshMinLvl),$("#fshMaxLvl").val(Mt.fshMaxLvl)}let fe
function ue(t,e){return P(fe,I(e[1]),Mt.fshMinLvl,Mt.fshMaxLvl)}function pe(){fe=[t=>0===t].concat(U),$.fn.dataTable.ext.search.push(ue)}function he(){$.fn.dataTable.ext.search.push((t,e,n,i)=>!Mt.checkedElements||Mt.checkedElements[i.type])}function me(){$.fn.dataTable.ext.search.push((t,e,n,i)=>!Mt.checkedElements||!Mt.checkedElements[-1]||function(t){return Mt.checkedElements[-1]&&t.stats&&-1!==t.stats.set_id}(i))}function be(){$.fn.dataTable.ext.search.push((t,e,n,i)=>{const s=(parseInt(i.rarity,10)+100).toString()
return!Mt.checkedElements||Mt.checkedElements[s]})}function ye(t,e){return t[e[1].id]=e[1],t}function ve(){t.membrList=a(t.membrList).filter(z).reduce(ye,{})}function ge(){_([ot,pe,he,me,be,oe,At,le])
const t=wt()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",e(Ut,t)),$(t).on("change","select.fshMoveItem",ne),ce(t)}(t),$("#fshRefresh").on("click",$e),function(t){const n=$(`#${t.id}_filter input`)
n.prop("type","text")
const i=$("<span>&times;</span>")
n.wrap($('<span class="text-input-wrapper"/>')),n.after(i),i.on("click",e(ct,t,n))}(t)}function ke(){g("inventory.getInvMan"),ge(),k("inventory.getInvMan")}function _e(){v(3,ke)}function $e(){b()||(m(`<span id="fshInvMan"><img src = "${y}">&nbsp;Getting inventory data...</span>`,f),function(){const e=[C(),dt()]
"guildinvmgr"===t.subcmd&&e.push(V(!1).then(ve)),e.push(L("fsh_"+t.subcmd).then(jt)),E(e,_e)}())}export default $e
//# sourceMappingURL=inventory-d9085c9d.js.map
