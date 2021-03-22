import{c as t,m as e,z as a,A as n,h as r,t as o,i,o as s,aC as u,aD as l,aE as c,aF as f,_ as d,b as m,f as h,E as p,D as b,W as g,al as v,I as y,aG as k,C as w,ay as C,aH as L,aI as D,aJ as A,aK as M,aL as V,aM as N,ar as S,aB as H,B,aN as G,a4 as x,U as T,v as E,ac as j,a5 as P,aO as I,aP as O,Q as R,u as F,aQ as _,aR as q,aS as K,aT as Y,ax as z,q as U,a as Q,K as W,aU as J,aV as X,aW as Z,aX as tt,aY as et,l as at,N as nt,H as rt,ad as ot,a7 as it,$ as st,aZ as ut,a_ as lt,a$ as ct,b0 as ft,b1 as dt,b2 as mt,b3 as ht,b4 as pt,b5 as bt}from"./calfSystem-fe0ebf32.js"
import{i as gt}from"./insertElementAfter-fc514f49.js"
import{t as vt}from"./toggleForce-e38cb2b0.js"
import{c as yt}from"./createSpan-0da61261.js"
import{i as kt}from"./insertTextBeforeEnd-df8c1dd5.js"
import{a as wt,r as Ct}from"./roundToString-29c5853e.js"
import{a as Lt}from"./addCommas-fa3f11ee.js"
import{d as Dt,q as At}from"./quickbuffSuccess-ef729694.js"
import{p as Mt}from"./playerName-dca56241.js"
import{i as Vt}from"./isArray-c05157b9.js"
import{g as Nt,s as $t}from"./idb-b0de0ac7.js"
import{c as St}from"./createStyle-764720eb.js"
import{g as Ht}from"./getArrayByClassName-7dbc6c3a.js"
import{e as Bt}from"./executeAll-19d23fbc.js"
import{c as Gt}from"./createButton-f3d952bf.js"
import{e as xt}from"./eventHandler5-b489b45c.js"
import{i as Tt}from"./insertElementBefore-9228b012.js"
import{c as Et}from"./createInput-47702c1d.js"
import{c as jt}from"./createLabel-616c04a1.js"
import{o as Pt}from"./openQuickBuffByName-6871b68f.js"
import{a as It}from"./all-3be74659.js"
import{a as Ot}from"./allthen-e8de2991.js"
import{d as Rt,g as Ft}from"./getGroupStats-d359fd3f.js"
import{g as _t}from"./getMercStats-724c09e4.js"
import{g as qt}from"./getProfile-9e74c09c.js"
import{g as Kt}from"./getMembrList-48fdd1f0.js"
import{h as Yt}from"./hideElement-2c661b2e.js"
import{n as zt}from"./numberIsNaN-1e8b4508.js"
import{r as Ut}from"./reduceBuffArray-9636784d.js"
import{r as Qt}from"./rnd-3eb735d9.js"
import{h as Wt}from"./hasClasses-2723c406.js"
import{v as Jt}from"./valueText-2234f468.js"
import{g as Xt}from"./guild-8f63aac2.js"
import{c as Zt}from"./chunk-e04f591f.js"
import{d as te}from"./dataRows-fe9c44ea.js"
import{g as ee,a as ae}from"./getTitanString-fc6587aa.js"
import{p as ne}from"./padZ-3a7e6015.js"
import{c as re}from"./createTable-94e6d4a8.js"
import{t as oe}from"./testQuant-b66b331b.js"
import{g as ie}from"./groupViewStats-f863abe7.js"
import{m as se}from"./myStats-ba055955.js"
import{a as ue}from"./huntingBuffs-520abee8.js"
import{b as le}from"./simpleCheckbox-a56939b2.js"
import{b as ce}from"./bitwiseAnd-b4e86482.js"
import{s as fe}from"./shouldBeArray-1a828bc8.js"
import"./getBuff-4d87556a.js"
import"./buffObj-8137966e.js"
import"./fshOpen-363b7f52.js"
import"./createLi-1136f028.js"
import"./createUl-995f97e4.js"
import"./cmdExport-fd555515.js"
import"./indexAjaxJson-a9fbc5f9.js"
import"./currentGuildId-09820c92.js"
import"./testRange-b67918af.js"
import"./intValue-1ce02c09.js"
import"./isChecked-36c474a7.js"
import"./isSelected-8b20baae.js"
import"./csvSplit-f0a1b444.js"
let de,me,he,pe,be,ge,ve,ye,ke
function we(t){return t}function Ce(n){if(function(e){return t.showBuffInfo&&e.some(we)}(n))return function(){if(de)vt(de,!1)
else{de=e({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div><div></div>"})
const t=a("actionContainer")
gt(de,t.children[2])}return de}()
de&&vt(de,!0)}function Le(t,e){me?vt(me,!1):function(t){me=t.children[3],me.className="fshBlue",n("CA ",me),he=yt(),r(me,he),kt(me," active")}(t),n(e.level,he)}function De(t,e){e?Le(t,e):me&&vt(me,!0)}function Ae(t,e){pe?vt(pe,!1):function(t){pe=t.children[4],pe.className="fshRed",n("Doubler ",pe),be=yt(),r(pe,be),kt(pe," active")}(t),n(e.level,be)}function Me(t,e){e?Ae(t,e):pe&&vt(pe,!0)}function Ve(t,e,a){ge?vt(ge,!1):function(t){ge=t.children[2],n("Damage bonus: ",ge),ve=yt(),r(ge,ve),kt(ge,"%")}(t),n(function(t,e){if(t){const a=Math.min(.01*Math.round(Math.floor(e/5)*Number(t.level)),20)
return wt(a,2).toString()}return"0"}(e,Number(a)),ve)}function Ne(t,e,a){e?Ve(t,e,a):ge&&vt(ge,!0)}function $e(t,e){n(Lt(t),e)}function Se(t,e){ye?vt(ye,!1):function(t){ye=t.children[1],n("Kill Streak: ",ye),ke=yt(),r(ye,ke)}(t),$e(e,ke)}function He(t,e,a,n){e||a?Se(t,n):ye&&vt(ye,!0)}function Be(t,e){return e.name===t}function Ge(t){const{buffs:e}=GameData.player()
if(e)return e.find(o(Be,t))}const xe=["red","orange","yellow"]
let Te,Ee
function je(t){At(t)&&GameData.fetch(u)}function Pe(){Ge("Summon Shield Imp")||Dt([Mt()],[55]).then(je)}const Ie=["imp-0","imp-1","imp-1"]
function Oe(t,e){Te?vt(Te,!1):function(t){Te=t.children[0],n("Shield Imps Remaining: ",Te),Ee=yt(),r(Te,Ee),i(Te,"&nbsp;")
const e=yt({className:"xSmallLink",textContent:"Recast"})
r(Te,e),s(e,Pe)}(t)
const a=function(t){return t?Number(t.stack):0}(e)
Te.className=function(t){return Ie[t]||"fshGreen"}(a),n(a,Ee)}function Re(t,e,a){e||a?Oe(t,e):Te&&vt(Te,!0)}function Fe(t){return 0===t.type}function _e(t){return yt({textContent:t})}let qe,Ke,Ye,ze,Ue,Qe,We,Je,Xe,Ze
function ta(t,e){qe?vt(qe,!1):function(t,e){qe=t.children[5],n("Teleport Cooldown: ",qe),Ke=_e(e.toString()),r(qe,Ke)}(t,e)}function ea(){const t=Math.max(Math.ceil((Ye-Date.now())/1e3),0)
n(t,Ke),t>0&&setTimeout(ea,500)}function aa(t,e){e?ta(t,e):qe&&vt(qe,!0)}function na(){ze=Ge("Death Dealer"),Ue=Ge("Doubler"),Qe=Ge("Counter Attack"),We=Ge("Summon Shield Imp"),Je=function(){const t=GameData.player().teleportCooldown
return t>1&&t}(),Xe=function(){const{dynamic:t}=GameData.realm()
return Vt(t)&&t.some(Fe)}(),Ze=GameData.player().killStreak}function ra(){!function(){const t=$("#actionlist-shield-imp")
1===t.length&&t.css("background-color",xe[t.text()]||"#ad8043")}(),na()
const t=Ce([ze,Ue,Qe,We,Je,Xe])
t&&(Re(t,We,ze),He(t,ze,Xe,Ze),Ne(t,ze,Ze),De(t,Qe),Me(t,Ue),aa(t,Je))}function oa(t,e){var a
a=e.player.teleportCooldown,Ke&&(Ye=Date.now()+1e3*a,ea())}const ia=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"]
let sa=!1
function ua(t){return b(".verb.attack",t)}function la(t){const e=ia.indexOf(t.toUpperCase())
return p(`#actionList .actionListItem.creature.creature-${e}`)}function ca(t){const e=["LEGENDARY","NORMAL"].flatMap(la),a=la("CHAMPION"),[n,r]=t?[e,a]:[a,e],o=`url("${v}ui/world/icon_action_attack_`
n.map(ua).filter((t=>null!==t)).forEach((t=>{t.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),t.style.backgroundImage=""})),r.slice(0,8).map(ua).forEach(((t,e)=>{null!==t&&(t.classList.add(`attack-${e+1}`),t.style.backgroundImage=`${o}${e+1}.png")`)}))}function fa(t){if(!t.ctrlKey||!t.shiftKey||"INPUT"===t.target.tagName||"TEXTAREA"===t.target.tagName)return
if(sa||ca(!0),sa=!0,!t.code.match(/(Digit|Numpad)[1-8]/))return
const e=la("CHAMPION"),a=parseInt(t.code.slice(-1),10)-1
if(a<e.length){const t=ua(e[a])
null!==t&&(g("world","ChampionAttack"),t.click())}}function da(t){!sa||t.ctrlKey&&t.shiftKey||(sa=!1,ca(!1))}const ma=["Breaker","Protection","Master Thief","Protect Gold","Disarm","Duelist","Thievery","Master Blacksmith","Master Crafter","Fury Caster","Master Inventor","Sustain"]
let ha,pa=[]
function ba(t){54!==t.id&&26!==t.id||(ha.player.buffs[t.id]=parseInt(t.level,10))}function ga(t){-1===ma.indexOf(t.name)&&(ha.player.enhancements[t.name]=t.value)}function va(t,e){ha={},ha.combat=e.response.data,ha.combat.inventory_id&&(ha.combat.drop=ha.combat.item.id),ha.player={},ha.player.buffs={},ha.player.enhancements={},function(t){t.player.buffs&&t.player.buffs.forEach(ba)}(e),function(t){t.player.enhancements&&t.player.enhancements.forEach(ga)}(e),ha.time=e.time,pa.push(ha),$t("fsh_combatLog",pa)}function ya(t,e){0===e.response.response&&va(0,e)}function ka(t){t&&(pa=t),$.subscribe(k,ya)}function wa(e){return t.doNotKillList.includes(e.trim())}function Ca(t){t.classList.toggle("fshBlue",wa(w(t)))}function La(){const t=a("actionList")
Ht("creature",t).forEach(Ca)}function Da(t){const e=GameData.actions()[t]
if(e)return function(t,e){if(wa(t))return a("actionList").children[e].children[0].children[1].classList.remove("loading"),!0}(e.data.name,t)}const Aa={2:function(t){return function(e,a,n,r){Da(n.passback)||t(e,a,n,r)}}}
function Ma(t){return function(e,a,n,r){const o=Aa[e];(function(t){return t&&C(t)})(o)&&function(t){return L(t)||0===t}(r)?o(t)(e,a,n,r):t(e,a,n,r)}}function Va(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function Na(t,e,a){return jt({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${t}`,dataset:{tipped:e},htmlFor:a})}function $a(t){const a=e({className:"fshToggle"}),n=Et({checked:t.prefVal,id:t.checkId,type:"checkbox"})
r(a,n)
const o=Na(t.onClass,t.onTip,t.checkId)
r(a,o)
const i=Na(t.offClass,t.offTip,t.checkId)
return r(a,i),r(t.worldName,a),n}let Sa,Ha,Ba,Ga,xa,Ta,Ea,ja,Pa
function Ia(t){return t?t.toString():"?"}function Oa(t){const a=e({className:"fshFsty"})
r(a,function(){const t=e({textContent:"Min Lvl: "})
return Ha=_e(Ia(GameData.realm().minlevel)),r(t,Ha),t}()),r(a,function(){const t=e({textContent:"Your Lvl: "})
return Ba=_e(Ia(GameData.player().level)),r(t,Ba),t}()),r(t,a)}function Ra(t,e,a){const n=Gt({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${t}`,dataset:{tipped:e}})
return r(a,n),n}function Fa(){var e
Oa(e=Sa),Ga=Ra("fshFormGroup","Quick Create Attack Group",e),xa=Ra("fshQuickBuff","Open Quick Buff Popup",e),Ta=Ra("fshRealmMap","Open Realm Map",e),Ea=Ra("fshTempleOne","Search map in Ultimate FSG",e),function(t){if(y("showSpeakerOnWorld")){const e=y("playNewMessageSound")
ja=$a({prefVal:e,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:t})}}(Sa),function(e){const a=t.huntingMode
Pa=$a({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:e})}(Sa)}const _a=[[t=>t===ja,function(){d("playNewMessageSound",!y("playNewMessageSound"))}],[t=>t===Pa,function(){t.huntingMode=!t.huntingMode,d("huntingMode",t.huntingMode)}]],qa=[[t=>t===Ga,function(t){V(t),GameData.doAction(12,401,{},0)}],[t=>t===xa,function(){Pt(Mt())}],[t=>t===Ta,function(){window.open(`${N+S}map`,"fsMap")}],[t=>t===Ea,function(){const t=GameData.realm()
window.open(`${H}realms${S}view&realm_id=${t.id}`,"mapUfsg")}]]
function Ka(){Sa||(Sa=e({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),Fa(),s(Sa,xt(qa)),h(Sa,"change",xt(_a)),Tt(Sa,a("worldCoord")))}function Ya(t,e){Ha&&e.b.minlevel&&(Va(),n(e.b.minlevel,Ha))}function za(t,e){Ba&&n(e.b,Ba)}function Ua(t){return!t||!t.response||!t.response.data}let Qa,Wa,Ja,Xa,Za,tn,en,an,nn,rn,on,sn,un,ln,cn,fn,dn,mn,hn,pn,bn,gn,vn,yn,kn,wn,Cn,Ln,Dn,An,Mn,Vn,Nn,$n,Sn
function Hn(t){return t.player_name}function Bn(t){!function(t){Xa=t.defenders.map(Hn)}(t),Qa?B("",Qa):Qa=e({className:"body"}),function(t){Wa=e({className:"fshFloatLeft fshRelicLeftDiv"}),r(Qa,Wa),t.is_owner&&r(Wa,Rt(Xa)),Ja=Gt({className:"custombutton",textContent:"Fetch Stats"}),r(Wa,Ja)}(t)
const n=a("dialog-relic")
r(n,Qa)}const Gn=[t=>"lastUpdate"!==t,t=>!Xa.includes(t),t=>Za[t].last_login,t=>Number(Za[t].last_login)<tn,t=>Number(Za[t].last_login)>en,t=>Za[t].level<400||Za[t].level>421,t=>Za[t].level<441||Za[t].level>450]
function xn(t,e){return e(t)}function Tn(t){return Gn.every(o(xn,t))}function En(t){return`<a href="${x}${Za[t].id}">${t}</a>`}function jn(t){Za=t,tn=T-120,en=T-604800
const e=G(Za).filter(Tn).map(En)
i(Qa,`<div class="fshFloatLeft fshRelicLowDiv"><table class="relicT"><thead><tr><th>${e.length.toString()} Offline guild members not at relic:</th></tr></thead><tbody><tr><td>${e.join(" ")}</td></tr></tbody></table></div>`)}function Pn(t){Yt(Ja)
const n=y("hideRelicOffline")
t.is_owner&&!n&&Kt(!0).then(jn),i(Wa,'<table class="relicT"><thead><tr><th colspan="2">Processing</th></tr></thead><tbody><tr><td class="fshGreen" colspan="2" id="ProcessingStatus">Parsing defending guild stats ...</td></tr></tbody><thead><tr><th colspan="2">Assumptions</th></tr></thead><tbody><tr><td colspan="2" class="fshGrey">Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that order) on both the defending group and attacking group.</td></tr></tbody></table>'),Sn=a("ProcessingStatus")
const o=e({className:"fshFloatLeft fshRelicMidDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Defending Guild Stats</th></tr></thead><tbody><tr><td>Relic Count:</td><td id="relicCount">0</td></tr><tr><td>Lead Defender Bonus:</td><td id="LDPercentage">0</td></tr><tr><td>Lead Defender Cloaked:</td><td id="LDCloaked">No</td></tr></tbody><thead><tr><th colspan="2">Other Defender Stats</th></tr></thead><tbody><tr><td>Raw Attack:</td><td class="fshGrey" id="attackValue">0</td></tr><tr><td>Attack w/ buffs:</td><td id="attackValueBuffed">0</td></tr><tr><td>Raw Defense:</td><td class="fshGrey" id="defenseValue">0</td></tr><tr><td>Defense w/buffs:</td><td id="defenseValueBuffed">0</td></tr><tr><td>Raw Armor:</td><td class="fshGrey" id="armorValue">0</td></tr><tr><td>Armor w/ buffs:</td><td id="armorValueBuffed">0</td></tr><tr><td>Raw Damage:</td><td class="fshGrey" id="damageValue">0</td></tr><tr><td>Damage w/ buffs:</td><td id="damageValueBuffed">0</td></tr><tr><td>Raw HP:</td><td class="fshGrey" id="hpValue">0</td></tr><tr><td>HP w/ buffs:</td><td id="hpValueBuffed">0</td></tr><tr><td>Cloaked:</td><td id="defendersCloaked">0</td></tr><tr><td>Processed:</td><td id="defendersProcessed">0</td></tr></tbody></table>'})
r(Qa,o),an=a("relicCount"),nn=a("LDPercentage"),rn=a("LDCloaked"),on=a("attackValue"),sn=a("attackValueBuffed"),un=a("defenseValue"),ln=a("defenseValueBuffed"),cn=a("armorValue"),fn=a("armorValueBuffed"),dn=a("damageValue"),mn=a("damageValueBuffed"),hn=a("hpValue"),pn=a("hpValueBuffed"),bn=a("defendersCloaked"),gn=a("defendersProcessed")
const s=e({className:"fshFloatLeft fshRelicRightDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Adjusted defense values</th></tr></thead><tbody><tr><td>DC225:</td><td id="DC225">0</td></tr><tr><td>DC175:</td><td id="DC175">0</td></tr><tr><td colspan="2">&nbsp;</td></tr></tbody><thead><tr><th colspan="2">Attacking Group Stats</th></tr></thead><tbody><tr><td>Raw Group Attack:</td><td class="fshGrey" id="GroupAttack"></td></tr><tr><td>Group Attack w/ buffs:</td><td id="GroupAttackBuffed"></td></tr><tr><td>Raw Group Defense:</td><td class="fshGrey" id="GroupDefense"></td></tr><tr><td>Group Defense w/ buffs:</td><td id="GroupDefenseBuffed"></td></tr><tr><td>Raw Group Armor:</td><td class="fshGrey" id="GroupArmor"></td></tr><tr><td>Group Armor w/ buffs:</td><td id="GroupArmorBuffed"></td></tr><tr><td>Raw Group Damage:</td><td class="fshGrey" id="GroupDamage"></td></tr><tr><td>Group Damage w/ buffs:</td><td id="GroupDamageBuffed"></td></tr><tr><td>Raw Group HP:</td><td class="fshGrey" id="GroupHP"></td></tr><tr><td>Group HP w/ buffs:</td><td id="GroupHPBuffed"></td></tr></tbody></table>'})
r(Qa,s),vn=a("DC225"),yn=a("DC175"),kn=a("GroupAttack"),wn=a("GroupAttackBuffed"),Cn=a("GroupDefense"),Ln=a("GroupDefenseBuffed"),Dn=a("GroupArmor"),An=a("GroupArmorBuffed"),Mn=a("GroupDamage"),Vn=a("GroupDamageBuffed"),Nn=a("GroupHP"),$n=a("GroupHPBuffed")}let In
function On(t){const e=E(t),a=j('#pCC img[src*="/relics/"]',e).length
var r
n(a,an),In=1===(r=a)?1.5:wt(1-r/10,2),n(`${String(100*In)}%`,nn)}function Rn(t,e){return t>10*e||t<e?t:10*e}const Fn=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function _n(t,e,a){t[a[0]]=Number(e[a[1]])}const qn=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function Kn(t,e,a){t[a[0]]=e[a[1]]||0}function Yn(t){const e=Ut(t._skills),a={}
return function(t,e){Fn.forEach(o(_n,t,e))}(a,t),function(t,e){qn.forEach(o(Kn,t,e))}(a,e),a.superEliteSlayerMultiplier=wt(.002*a.superEliteSlayerLevel,2),zt(a.armorValue)&&function(t){t.attackValue=Rn(t.attackBonus,t.levelValue),t.defenseValue=Rn(t.defenseBonus,t.levelValue),t.armorValue=Rn(t.armorBonus,t.levelValue),t.damageValue=Rn(t.damageBonus,t.levelValue),t.hpValue=t.hpBonus}(a),a}let zn,Un,Qn,Wn,Jn,Xn,Zn,tr,er,ar,nr,rr,or,ir
function sr(t){return Math.round(t*In)}function ur(){$e(zn,on),$e(Qn,un),$e(Wn,cn),$e(Jn,dn),$e(Zn,hn),n(tr,bn),er+=1,n(er,gn)}function lr(t){const e=function(t){return Math.ceil(nr.attack*(.0025*P(t["Nightmare Visage"],0)))}(t)
nr.attack-=e,function(){const t=Math.ceil(nr.attack*ar.flinchLevel*.001)
$e(nr.attack-t,wn)}()
const a=function(t){return Math.ceil(nr.defense*(1+.001*P(t.Constitution,0)))}(t)
$e(a+e,Ln),function(t){$e(nr.armor+Math.floor(nr.armor*P(t.Sanctuary,0)*.001),An)}(t)
const n=function(t,e){return Math.ceil(e*P(t.Fortitude,0)*.001)}(t,a)
!function(t){$e(nr.hp+t,$n)}(n),function(t,e){const a=Math.ceil((nr.hp+e)*P(t["Chi Strike"],0)*.001),n=Math.ceil(nr.damage*ar.terrorizeLevel*.001)
$e(nr.damage+a-n,Vn)}(t,n)}function cr(){n("Processing attacking group stats ... ",Sn),rr&&(nr.attack-=rr.attack,nr.defense-=rr.defense,nr.armor-=rr.armor,nr.damage-=rr.damage,nr.hp-=rr.hp),$e(nr.attack,kn),$e(nr.defense,Cn),$e(nr.armor,Dn),$e(nr.damage,Mn),$e(nr.hp,Nn)
const t=Ut(GameData.player().buffs)
lr(t),function(t){const e=Math.ceil(Un*P(t.Flinch,0)*.001)
$e(Un-e,sn)}(t),function(t){const e=Math.ceil(Xn*P(t.Terrorize,0)*.001)
$e(Xn-e,mn)}(t),n("Done.",Sn)}function fr(){n("Processing defending guild stats ... ",Sn),zn+=sr(ar.attackValue),Qn+=sr(ar.defenseValue),Wn+=sr(ar.armorValue),Jn+=sr(ar.damageValue),Zn+=sr(ar.hpValue),ur()
const t=Math.ceil(zn*(.0025*ar.nightmareVisageLevel))
!function(t){Un=zn-t,$e(Un,sn)}(t)
const e=Math.ceil(Qn*(1+.001*ar.constitutionLevel))
!function(t,e){const a=e+t
$e(a,ln),$e(Math.ceil(.55*a),vn),$e(Math.ceil(.65*a),yn)}(t,e),$e(Wn+Math.floor(Wn*ar.sanctuaryLevel*.001),fn)
const a=Zn+function(t){return Math.ceil(t*ar.fortitudeLevel*.001)}(e)
$e(a,pn),function(t){Xn=Jn+Math.ceil(t*ar.chiStrikeLevel*.001),$e(Xn)}(a),0!==ar.cloakLevel&&n("Yes",rn),GameData.player().hasGroup&&nr?cr():n("Done.",Sn)}function dr(t){const e=Yn(t)
zn+=Math.round(e.attackValue*I),Qn+=Math.round(e.defenseValue*I),Wn+=Math.round(e.armorValue*I),Jn+=Math.round(e.damageValue*I),Zn+=Math.round(e.hpValue*I),0!==e.cloakLevel&&(tr+=1),ur()}function mr(t){ar=Yn(t)}function hr(t){nr=t}function pr(t){rr=t}function br(t){n(t.message,Sn)}function gr(t){const e=E(t),a=b('#pCC a[href*="confirmDisband"]',e)
if(!a)return
const n=function(t){const e=t.previousElementSibling.href,a=[Ft(e).then(hr)]
return function(t){return-1!==t.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML.indexOf('"#000099"')}(t)&&a.push(_t().then(pr)),a}(a)
return It(n)}function vr(t,e){return 0===e?qt(t).then(mr):qt(t).then(dr).catch(br)}function yr(){let t=[F({cmd:"guild",subcmd:"view",guild_id:or.controlled_by.guild_id}).then(On)]
return GameData.player().hasGroup&&t.push(F({cmd:"guild",subcmd:"groups"}).then(gr)),t=t.concat(Xa.map(vr)),t}function kr(){Pn(or),zn=0,Qn=0,Wn=0,Jn=0,Zn=0,tr=0,er=0
const t=yr()
Ot(t,fr)}function wr(t,e){Ua(e)||(or=e.response.data,or.defenders.length>0&&(Bn(or),R(Ja,"click",kr)))}function Cr(t){$("#statbar-gold").css("background-color",t)}function Lr(){$("#HelperSendTotal").html(Lt(y("currentGoldSentTotal"))),Number(GameData.player().gold)>ir?Cr("red"):Cr("inherit")}function Dr(){ir=y("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${y("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${Lt(ir)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${Lt(y("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",K),Lr(),$.subscribe(Y,Lr)}function Ar(t){return z({cache:!1,url:"fetchdata.php",data:U(t,{fshrnd:Qt()}),dataType:"json"})}const Mr=[]
function Vr(t){return Ua(t)||Mr.push(t),t}function Nr(t,e){return t===Number(e.response.data.id)}function $r(t,e){t(e)}function Sr(t,e){const a=Mr.find(o(Nr,t))
return a?function(t){return new Promise((e=>{Q(3,$r,[e,t])}))}(a):Ar({a:1,id:t,passback:e}).then(Vr)}let Hr,Br,Gr,xr,Tr,Er
function jr(t,e){return Jt(W(e,t))}function Pr(){var t
Hr=GameData.player().level,t=a("statbar-character-tooltip-stats"),Gr=jr(t,et),Br=jr(t,J),Tr=jr(t,X),xr=jr(t,Z),Er=jr(t,tt)}function Ir(t){return`<tr><td colspan="2">${t.name}:</td><td colspan="2">${t.value}</td></tr>`}function Or(t,e,a){return function(t){return`<table><tr><td><img src="${v}creatures/${t.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(t)+function(t,e){return`<tr><td>Class:&nbsp;</td><td width="40%">${t.creature_class}</td><td>Level:&nbsp;</td><td width="40%">${t.level} (your level:<span class="${e}">${Hr}</span>)</td></tr>`}(t,a)+function(t){return`<tr><td>Attack:&nbsp;</td><td width="40%">${t.attack} (your defense:<span class="fshYellow">${Br}</span>)</td><td>Defense:&nbsp;</td><td width="40%">${t.defense} (your attack:<span class="fshYellow">${Gr}</span>)</td></tr>`}(t)+function(t){return`<tr><td>Armor:&nbsp;</td><td width="40%">${t.armor} (your damage:<span class="fshYellow">${xr}</span>)</td><td>Damage:&nbsp;</td><td width="40%">${t.damage} (your armor:<span class="fshYellow">${Tr}</span>)</td></tr>`}(t)+function(t,e){return`<tr><td>HP:&nbsp;</td><td width="40%">${t.hp} (your HP:<span class="fshYellow">${Er}</span>)(1H: <span class="fshRed">${e}</span>)</td><td>Gold:&nbsp;</td><td width="40%">${t.gold}</td></tr>`}(t,e)+'<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'+function(t){return 0===t.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':t.enhancements.map(Ir).join("")}(t)+function(t){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${t.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${t.name}</b></td></tr></table>`}(t)}function Rr(e){if(!Ua(e))return function(e){const a=Math.ceil(e.hp*t.hpVariable+e.armor*t.generalVariable)
let n="fshYellow"
return Pr(),Hr>e.level&&(n="fshRed"),Or(e,a,n)}(e.response.data)}const Fr=["verb","view","tip-static"]
function _r(t,e){const a=Rr(e)
t.set("content.text",a)}function qr(t,e,a){return Sr(GameData.actions()[t].data.id,t).then(o(_r,a)),"Loading..."}function Kr(t,e){g("NewMap","CreatureInfo")
const a=nt((n=e).parentNode.children).indexOf(n)
var n,r,i
t.classList.add("fshTip"),r=t,i=o(qr,a),$(r).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:i},hide:{effect:!1}})}function Yr(e){if(!t.showCreatureInfo)return
const{target:a}=e,n=a.parentNode.parentNode.parentNode;(function(t,e){return Wt(Fr,t)&&!at("fshTip",t)&&at("creature",e)})(a,n)&&Kr(a,n)}function zr(){return Xt({subcmd:"scouttower"})}function Ur(t){const e=rt(t[1])
return"No active cooldown"===e?0:Math.ceil((function(t){const e=t.split(/[: /[]/)
return new Date(Number(e[4]),ot.indexOf(e[3]),Number(e[2]),Number(e[0]),Number(e[1]))}(e.slice(16))-it)/1e3)}function Qr(t){const e=t[0].cells[0].children[0]
return{base_id:Number(e.src.match(/s\/(\w+)\.p/)[1].slice(0,-32)),name:e.title}}function Wr(t){return{cooldown:Ur(t),creature:Qr(t),kills:Number(rt(t[0].cells[3]))}}function Jr(t){const e=rt(t[0].cells[1])
if("n/a"!==e){const a=rt(t[0].cells[2]).match(/(\d+)\/(\d+)/)
return{realm:e,current_hp:Number(a[1]),max_hp:Number(a[2])}}}function Xr(t){const e=t[2].cells[0].children
if(1===e.length){return{contributors:te(e[0].rows,3,0).map((t=>({kills:Number(rt(t.cells[1])),player:{name:rt(t.cells[0])}})))}}}function Zr(t){return{...Wr(t),...Jr(t),...Xr(t)}}function to(t){const e=E(t),a=b('table[width="500"]',e)
if(!a)return{s:!1}
const n=nt(a.rows).filter(((t,e,a)=>0!==e&&e<a.length-1&&(e-1)%6<3))
return{r:Zt(3,n).map(Zr),s:!0}}function eo(){return F({cmd:"guild",subcmd:"scouttower"}).then(to)}function ao(t,e){const a=t.insertCell(-1)
return[a.colSpan]=e,e[2]&&(a.className="header"),r(a,e[1]),a}function no(t,e,a){const n=t.insertRow(-1)
return a&&(n.className="fshBlue"),function(t,e){e.forEach(o(ao,t))}(n,e),n}function ro(t,e){no(t,e[0],e[1])}function oo(t,e){e.forEach(o(ro,t))}let io,so,uo,lo,co,fo,mo,ho,po,bo,go,vo,yo,ko,wo,Co,Lo,Do,Ao,Mo,Vo,No,$o,So,Ho,Bo,Go,xo
function To(){so=_e("Current"),uo=_e("Kills"),lo=_e("Member"),co=_e("% of Total"),fo=_e("Status"),mo=_e("Titan HP"),ho=_e("Total"),po=_e("Your Guild")}function Eo(){for(;Lo.rows.length>7;)Lo.deleteRow(7)}function jo(){const t=yt()
return r(t,bo),kt(t,"/"),r(t,go),t}function Po(t){const e=yt()
return r(e,t),kt(e,"%"),e}function Io(){Ao=null,Do&&!at("fshHide",Do)&&(vt(Do,!0),n("",bo),n("",go),n("",vo),n("",yo),n("",ko),B("",wo),B("",Co),Eo())}function Oo(t){return 0===t.type&&(Ao=t.base_creature_id,!0)}function Ro(){if(Do)vt(Do,!1)
else{const t=a("actionContainer")
Do=e({className:"fshActionBox titanInfo"}),bo=yt(),go=yt(),vo=yt(),yo=yt(),ko=yt(),wo=yt(),Co=yt(),Lo=re({className:"fshCenter"}),To(),oo(Lo,[[[[2,mo,!0],[4,po,!0]]],[[[2,jo()],[4,vo]]],[[[2,so,!0],[4,Po(yo)]],!0],[[[2,ho,!0],[4,Po(ko)]],!0],[[[2,fo,!0],[4,wo]],!0],[[[6,Co]]],[[[2,lo,!0],[2,uo,!0],[2,co,!0]]]]),r(Do,Lo),r(t,Do)}}function Fo(t){return t<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(t){const e=new Date(it+1e3*t)
return`${ne(e.getHours())}:${ne(e.getMinutes())} ${ne(e.getDate())}/${ot[e.getMonth()]}/${e.getFullYear()}`}(t)}</span>`}function _o(t){return Ct(ee(t.max_hp-t.current_hp,t.kills),2)}function qo(t){return Ct(100*t.kills/t.max_hp,2)}function Ko(t){[[t.current_hp,bo],[t.max_hp,go],[t.kills,vo],[_o(t),yo],[qo(t),ko]].forEach((([t,e])=>{n(t,e)})),B(function(t){return ae(t.kills,t.max_hp,t.current_hp)}(t),wo),B(Fo(t.cooldown),Co)}function Yo(t,e){return[[[2,_e(e.player.name)],[2,_e(e.kills.toString())],[2,_e(`${Ct(100*e.kills/t.kills,2)}%`)]]]}function zo(t){return t.realm&&t.creature.base_id===Ao&&t.realm===io}function Uo(t){const e=t.find(zo)
e&&(Ko(e),function(t){if(Eo(),!t.contributors)return
const e=t.contributors.map(o(Yo,t))
oo(Lo,e)}(e))}function Qo(e){return t.showTitanInfo&&Vt(e)&&e.some(Oo)}function Wo(t,e){(function(t){return t.s&&Vt(t.r)})(e)&&(Uo(e.r),Qo(GameData.realm().dynamic)?Mo=window.setTimeout(t,3e4):Io())}function Jo(){st(zr,eo).then(o(Wo,Jo))}function Xo(t){Mo&&(window.clearTimeout(Mo),Mo=null),Qo(t)?(Ro(),Jo()):Io()}function Zo(t){var e
t.dynamic&&(e=t.name,io=e,Xo(t.dynamic))}function ti(t,e){(function(t){return t.realm&&t.realm.name})(e)&&Zo(e.realm)}function ei(t){const e=t.response.response,a=t.response.msg
let n
if(0!==e){const t=a.indexOf("<")
n=-1!==t?a.substring(0,t):a}else n=`You purchased ${t.response.data.name} for ${Lt(t.response.data.cost)} gold.`
i(Go,`${n}<br>`)}function ai(){GameData.doAction(14,3,{id:Vo.id,item_id:Vo.itemId},0),$o.close()}function ni(){const t=oe(Ho.value)
if(!t)return
const e=[]
for(let a=1;a<t;a+=1)e.push(Ar({a:14,d:0,id:Vo.id,item_id:Vo.itemId}).then(ei))
Ot(e,ai)}function ri(){So?n("",Go):(So=e({className:"fshClear",textContent:"Select how many to quick-buy:"}),Ho=Et({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),r(So,Ho),Bo=Gt({textContent:"Quick-buy"}),s(Bo,ni),r(So,Bo),Go=e(),r(So,Go),r(No,So))}function oi(t,e){Vo=e,No=No||a("shopDialogConfirm"),No&&($o=$o||$(No).data("hcsWorldDialogShopConfirm"),$o&&ri())}function ii(t){xo[t.name]?xo[t.name].seen&&(xo[t.name].seen+=1):(xo[t.name]={seen:1},function(t,e){e.creature_class=t.creature_class,e.image_id=t.image_id,e.level=Number(t.level),e.type=t.type}(t,xo[t.name]))}function si(t,e,a){return e?t(e,a):a}function ui(t,e){const a=t||{}
return a.min=si(Math.min,a.min,e),a.max=si(Math.max,a.max,e),a}const li=["attack","armor","damage","defense","hp"]
function ci(t,e,a){const n=ui(e[a],Number(t[a]));(function(t,e){return!t||t.min!==e.min||t.max!==e.max})(e[a],n)&&(e[a]=n)}function fi(t,e){t[e.name]=ui(t[e.name],Number(e.value))}function di(t){xo||(xo={}),ii(t),function(t,e){li.forEach(o(ci,t,e))}(t,xo[t.name]),function(t,e){(function(t){return t.enhancements&&t.enhancements.length>0})(t)&&(e.enhancements=e.enhancements||{},t.enhancements.forEach(o(fi,e.enhancements)))}(t,xo[t.name]),$t("fsh_monsterLog",xo)}function mi(t){xo=t||{}}const hi=[]
function pi(e){Ua(e)||(g("NewMap","MonsterLog"),function(e){t.showMonsterLog&&di(e)}(e.response.data))}function bi(t,e){return t.id===e.id}function gi(t,e){6!==t.type||function(t){if(hi.find(o(bi,t.data)))return!0
hi.push(t.data)}(t)||Sr(t.data.id,e).then(pi)}function vi(){t.showMonsterLog&&GameData.actions().forEach(gi)}function yi(t){const e=E(t),a=ie(e)
return{r:{attributes:[{value:a.attack},{value:a.defense},{value:a.armor},{value:a.damage},{value:a.hp}]}}}function ki(t){return F({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:t}).then(yi)}function wi(t){return Xt(U({subcmd:"groups"},t))}function Ci(t){return wi({subcmd2:"viewstats",group_id:t})}function Li(){return wi({subcmd2:"view"})}function Di(t){const e=E(t),a=b('#pCC img[src$="disband.png"]',e)
if(!a)return{}
return{r:[{id:Number(a.parentNode.href.match(/\((\d+)\)/)[1]),members:[{name:Mt()}]}]}}function Ai(){return F({cmd:"guild",subcmd:"groups"}).then(Di)}function Mi(t){return t.numberOfCreatureHitsTillDead-t.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}const Vi=[[t=>"-"===t.playerHits&&"-"===t.creatureHits,()=>"Unresolved"],[t=>"-"===t.playerHits,()=>"Player dies"],[t=>1===t.playerHits,t=>`Player 1 hits${Mi(t)}`],[t=>t.playerHits>1,t=>`Player > 1 hits${Mi(t)}`]]
function Ni(t,e){return e[0](t)}function $i(t){t.playerHits=function(t){return"-"===t.numberOfCreatureHitsTillDead?t.numberOfHitsRequired:function(t){return"-"===t.numberOfHitsRequired||t.numberOfHitsRequired>t.numberOfCreatureHitsTillDead}(t)?"-":t.numberOfHitsRequired}(t),t.creatureHits=function(t){return"-"===t.numberOfHitsRequired?t.numberOfCreatureHitsTillDead:function(t){return"-"===t.numberOfCreatureHitsTillDead||t.numberOfCreatureHitsTillDead>t.numberOfHitsRequired}(t)?"-":t.numberOfCreatureHitsTillDead}(t),t.fightStatus=function(t){const e=Vi.find(o(Ni,t))
return e?e[1](t):"Unknown"}(t)}function Si(t){t.creatureHitByHowMuch>=0?function(t){const e=t.generalVariable*t.creature.damage
e<t.overallArmorValue?t.numberOfCreatureHitsTillDead=t.overallHPValue:t.numberOfCreatureHitsTillDead=Math.ceil(t.overallHPValue/(e-t.overallArmorValue))}(t):t.numberOfCreatureHitsTillDead="-"}function Hi(t){!function(t){const e=function(t){return t.callback.groupExists?t.callback.groupArmorValue:t.player.armorValue}(t)
t.overallArmorValue=e+Math.floor(t.player.armorValue*t.player.sanctuaryLevel*.001)}(t),function(t){t.player.sanctuaryLevel>0&&(t.extraNotes+=`Sanc Bonus Armor = ${Math.floor(t.player.armorValue*t.player.sanctuaryLevel*.001)}<br>`)}(t),function(t){t.terrorizeEffect=Math.floor(t.creature.damage*t.player.terrorizeLevel*.001)}(t),function(t){t.player.terrorizeLevel>0&&(t.extraNotes+=`Terrorize Creature Damage Effect = ${-1*t.terrorizeEffect}<br>`)}(t),t.creature.damage-=t.terrorizeEffect,function(t){t.creatureDamageDone=Math.ceil(t.generalVariable*t.creature.damage-t.overallArmorValue+t.overallHPValue)}(t),Si(t)}function Bi(t){const e=function(t){return t.callback.groupExists?t.callback.groupAttackValue:t.player.attackValue}(t)
t.player.darkCurseLevel>0&&(t.extraNotes+=`DC Bonus Attack = ${Math.floor(t.creature.defense*t.player.darkCurseLevel*.002)}<br>`),t.nightmareVisageAttackMovedToDefense=Math.floor((e+t.counterAttackBonusAttack)*t.player.nightmareVisageLevel*.0025),t.player.nightmareVisageLevel>0&&(t.extraNotes+=`NMV Attack moved to Defense = ${t.nightmareVisageAttackMovedToDefense}<br>`),t.overallAttackValue=e+t.counterAttackBonusAttack-t.nightmareVisageAttackMovedToDefense,t.hitByHowMuch=function(t){const e=t.creature.defense-t.creature.defense*t.player.darkCurseLevel*.002
return 3===t.combatEvaluatorBias?t.overallAttackValue-Math.ceil(e)-50:t.overallAttackValue-Math.ceil(t.attackVariable*e)}(t)}function Gi(t){t.lowestCALevelToStillHit=Math.max(Math.ceil((t.counterAttackBonusAttack-t.hitByHowMuch+1)/t.player.attackValue/.0025),0),t.lowestCALevelToStillKill=Math.max(Math.ceil((t.counterAttackBonusDamage-t.damageDone+1)/t.player.damageValue/.0025),0)}function xi(t){Gi(t),t.lowestFeasibleCALevel=Math.max(t.lowestCALevelToStillHit,t.lowestCALevelToStillKill),t.extraNotes+=`Lowest CA to still 1-hit this creature = ${t.lowestFeasibleCALevel}<br>`,0!==t.lowestFeasibleCALevel&&function(t){t.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*t.player.attackValue*t.lowestFeasibleCALevel),t.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*t.player.damageValue*t.lowestFeasibleCALevel),t.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${t.extraAttackAtLowestFeasibleCALevel} / ${t.extraDamageAtLowestFeasibleCALevel}<br>`}(t),t.extraStaminaPerHitAtLowestFeasibleCALevel=function(t){return t.player.counterAttackLevel>0?Math.ceil(.0025*(1+t.player.doublerLevel/50)*t.lowestFeasibleCALevel):0}(t),t.extraStaminaPerHitAtLowestFeasibleCALevel<t.extraStaminaPerHit?t.extraNotes+=`Extra Stam Used at this lowered CA level = ${t.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:t.extraNotes+="No reduction of stam used at the lower CA level<br>"}function Ti(t){(function(t){return t.player.counterAttackLevel>0&&1===t.numberOfHitsRequired})(t)&&xi(t),function(t){return"-"===t.numberOfHitsRequired||1!==t.numberOfHitsRequired}(t)&&function(t){Gi(t),function(t){t.lowestCALevelToStillHit>175?t.extraNotes+="Even with CA175 you cannot hit this creature<br>":0!==t.lowestCALevelToStillHit&&(t.extraNotes+=`You need a minimum of CA${t.lowestCALevelToStillHit} to hit this creature<br>`)}(t),function(t){t.lowestCALevelToStillKill>175?t.extraNotes+="Even with CA175 you cannot 1-hit kill this creature<br>":0!==t.lowestCALevelToStillKill&&(t.extraNotes+=`You need a minimum of CA${t.lowestCALevelToStillKill} to 1-hit kill this creature<br>`)}(t)}(t)}function Ei(t){!function(t){const e=function(t){return t.callback.groupExists?t.callback.groupHPValue:t.player.hpValue}(t),{fortitudeLevel:a}=t.player
t.fortitudeExtraHPs=Math.floor(e*a*.001),a>0&&(t.extraNotes+=`Fortitude Bonus HP = ${t.fortitudeExtraHPs}<br>`),t.overallHPValue=e+t.fortitudeExtraHPs}(t),function(t){const{chiStrikeLevel:e}=t.player
t.chiStrikeExtraDamage=Math.floor(t.overallHPValue*e*.001),e>0&&(t.extraNotes+=`Chi Strike Bonus Damage = ${t.chiStrikeExtraDamage}<br>`)}(t)
const e=function(t){return t.callback.groupExists?t.callback.groupDamageValue:t.player.damageValue}(t)
if(t.overallDamageValue=e+t.deathDealerBonusDamage+t.counterAttackBonusDamage+t.holyFlameBonusDamage+t.chiStrikeExtraDamage,t.damageDone=Math.floor(t.overallDamageValue-(t.generalVariable*t.creature.armor+t.hpVariable*t.creature.hp)),t.hitByHowMuch>0){let e=1
t.overallDamageValue>=t.generalVariable*t.creature.armor&&(e=t.overallDamageValue-t.generalVariable*t.creature.armor),t.numberOfHitsRequired=Math.ceil(t.hpVariable*t.creature.hp/e)}else t.numberOfHitsRequired="-"}function ji(t){return t.callback.groupExists?t.callback.groupDefenseValue:t.player.defenseValue}function Pi(t){t.overallDefenseValue=ji(t)+Math.floor(ji(t)*t.player.constitutionLevel*.001)+t.nightmareVisageAttackMovedToDefense,function(t){t.player.constitutionLevel>0&&(t.extraNotes+=`Constitution Bonus Defense = ${Math.floor(ji(t)*t.player.constitutionLevel*.001)}<br>`)}(t),function(t){t.player.flinchLevel>0&&(t.extraNotes+=`Flinch Bonus Attack Reduction = ${Math.floor(t.creature.attack*t.player.flinchLevel*.001)}<br>`)}(t),t.creatureHitByHowMuch=Math.floor(t.attackVariable*t.creature.attack-t.creature.attack*t.player.flinchLevel*.001-t.overallDefenseValue),3===t.combatEvaluatorBias&&(t.creatureHitByHowMuch=Math.floor(t.creature.attack-t.creature.attack*t.player.flinchLevel*.001-t.overallDefenseValue-50))}function Ii(t){t.extraNotes="",function(t){t.player.superEliteSlayerLevel>0&&(t.extraNotes+=`SES Stat Reduction Multiplier = ${t.player.superEliteSlayerMultiplier}<br>`)}(t),function(t){t.holyFlameBonusDamage=0,"Undead"===t.creature.class&&(t.holyFlameBonusDamage=Math.max(Math.floor((t.player.damageValue-t.creature.armor)*t.player.holyFlameLevel*.002),0),t.player.holyFlameLevel>0&&(t.extraNotes+=`HF Bonus Damage = ${t.holyFlameBonusDamage}<br>`))}(t),function(t){t.deathDealerBonusDamage=Math.floor(t.player.damageValue*(Math.min(.01*Math.floor(t.player.killStreakValue/5)*t.player.deathDealerLevel,20)/100))}(t),function(t){t.counterAttackBonusAttack=Math.floor(.0025*t.player.attackValue*t.player.counterAttackLevel),t.counterAttackBonusDamage=Math.floor(.0025*t.player.damageValue*t.player.counterAttackLevel)}(t),function(t){t.extraStaminaPerHit=0,t.player.counterAttackLevel>0&&(t.extraStaminaPerHit=Math.ceil(.0025*(1+t.player.doublerLevel/50)*t.player.counterAttackLevel))}(t),function(t){t.player.deathDealerLevel>0&&(t.extraNotes+=`DD Bonus Damage = ${t.deathDealerBonusDamage}<br>`)}(t),function(t){t.player.counterAttackLevel>0&&(t.extraNotes+=`CA Bonus Attack/Damage = ${t.counterAttackBonusAttack} / ${t.counterAttackBonusDamage}<br>CA Extra Stam Used = ${t.extraStaminaPerHit}<br>`)}(t)}let Oi,Ri,Fi,_i,qi,Ki,Yi,zi,Ui,Qi
function Wi(){return wa(Ri)?"Remove from do not kill list":"Add to the do not kill list"}function Ji(){n(Wi(),Fi)}function Xi(){const e=t.doNotKillList.indexOf(Ri);-1===e?t.doNotKillList.push(Ri):t.doNotKillList.splice(e,1),Ji(),d("doNotKillList",t.doNotKillList.join()),La()}function Zi(){Fi?Ji():function(){Fi=Gt({className:"fshBl",textContent:Wi(),type:"button"})
const t=e({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
r(t,Fi),r(Oi,t),s(Fi,Xi)}()}function ts(t,e){!function(t){if(!Oi){const e=W("body",t)
1===e.length&&([Oi]=e)}}(e),Oi&&(Ri=t.trim(),Zi())}function es(){Ki||(qi||(qi=e(),r(_i,qi),r(_i,e({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Ki=e(),r(qi,Ki))}function as(t){es(),B(t,Ki)}function ns(t){Yi||(es(),Yi=e(),r(qi,Yi)),B(t,Yi)}function rs(t,e){const a={name:t.name,class:t.creature_class,attack:Number(t.attack),defense:Number(t.defense),armor:Number(t.armor),damage:Number(t.damage),hp:Number(t.hp)}
return function(t,e,a){3===a&&(e.attack-=Math.ceil(e.attack*t),e.defense-=Math.ceil(e.defense*t),e.armor-=Math.ceil(e.armor*t),e.damage-=Math.ceil(e.damage*t),e.hp-=Math.ceil(e.hp*t))}(e,a,t.type),a}function os(e,a,n){const r={}
r.callback=n,r.player=Yn(a),function(e){e.combatEvaluatorBias=t.combatEvaluatorBias,e.attackVariable=1.1053,e.generalVariable=t.generalVariable,e.hpVariable=t.hpVariable}(r),r.creature=rs(e.response.data,r.player.superEliteSlayerMultiplier),function(t){Ii(t),Bi(t),Ei(t),Pi(t),Hi(t),$i(t),Ti(t)}(r),r.evaluatorHTML=function(t){return`<table width="100%"><tbody>${function(t){return`<tr><td bgcolor="#CD9E4B" colspan="4" align="center">${function(t){return t.callback.groupExists?"Group ":""}(t)}Combat Evaluation</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Will I hit it? </td><td align="left">${function(t){return t.hitByHowMuch>0?"Yes":"No"}(t)}</td><td align="right"><span style="color:#333333">Extra Attack: </td><td align="left">( ${t.hitByHowMuch} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333"># Hits to kill it? </td><td align="left">${t.numberOfHitsRequired}</td><td align="right"><span style="color:#333333">Extra Damage: </td><td align="left">( ${t.damageDone} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Will I be hit? </td><td align="left">${function(t){return t.creatureHitByHowMuch>=0?"Yes":"No"}(t)}</td><td align="right"><span style="color:#333333">Extra Defense: </td><td align="left">( ${-1*t.creatureHitByHowMuch} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333"># Hits to kill me? </td><td align="left">${t.numberOfCreatureHitsTillDead}</td><td align="right"><span style="color:#333333">Extra Armor + HP: </td><td align="left">( ${-1*t.creatureDamageDone} )</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333"># Player Hits? </td><td align="left">${t.playerHits}</td><td align="right"><span style="color:#333333"># Creature Hits? </td><td align="left">${t.creatureHits}</td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Fight Status: </span></td><td align="left" colspan="3"><span>${t.fightStatus}</span></td></tr>`}(t)}${function(t){return`<tr><td align="right"><span style="color:#333333">Notes: </span></td><td align="left" colspan="3"><span style="font-size:x-small;">${t.extraNotes}</span></td></tr>`}(t)}</tbody></table>`}(r),n.groupExists?ns(r.evaluatorHTML):as(r.evaluatorHTML)}function is(t){return t.members[0].name===Mt()}function ss(t){if(Vt(t.r))return t.r.find(is).id}function us(t,e,a){if(!a.r||!a.r.attributes)return
const n=a.r.attributes
os(t,e,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}function ls(t,e,a){a&&function(t){return st(Ci,ki,t)}(a).then(o(us,t,e))}function cs(t,e){st(Li,Ai).then(ss).then(o(ls,t,e))}function fs(t,e){t.player.hasGroup&&cs(t,e),os(t,e,{groupExists:!1})}function ds(t,e){_i||(_i=a("dialog-viewcreature")),_i&&(as(""),ns(""),function(t){return t.response&&t.response.data}(e)&&(ts(e.response.data.name,_i),se(!0).then(o(fs,e))))}function ms(){const e=[,[t.buffs,t.buffsName],[t.buffs2,t.buffs2Name],[t.buffs3,t.buffs3Name]][t.enabledHuntingMode]
Vt(e)&&([zi,Ui]=e)}function hs(e){"enabledHuntingMode"===e.target.name&&(t.enabledHuntingMode=e.target.value,d("enabledHuntingMode",t.enabledHuntingMode),ms(),GameData.fetch(u))}function ps(t){const e=W("verbs",t)
1===e.length&&Yt(e[0])}function bs(){if(!Qi)return
const t=a("actionList")
Ht("player",t).forEach(ps)}const gs={hideSubLvlCreature:function(){t.hideSubLvlCreature=!t.hideSubLvlCreature,d("hideSubLvlCreature",t.hideSubLvlCreature),GameData.fetch(dt)},hidePlayerActions:function(){Qi=!Qi,d("hidePlayerActions",Qi),GameData.fetch(dt)},showCreatureInfo:function(){t.showCreatureInfo=!t.showCreatureInfo,d("showCreatureInfo",t.showCreatureInfo)},showHuntingBuffs:function(){t.showBuffs=!t.showBuffs,d("showHuntingBuffs",t.showBuffs),GameData.fetch(u)},showMonsterLog:function(){t.showMonsterLog=!t.showMonsterLog,d("showMonsterLog",t.showMonsterLog)},showTitanInfo:function(){t.showTitanInfo=!t.showTitanInfo,d("showTitanInfo",t.showTitanInfo),Xo(GameData.realm().dynamic)},showBuffInfo:function(){t.showBuffInfo=!t.showBuffInfo,d("showBuffInfo",t.showBuffInfo),ra()}}
function vs(t){const e=gs[t.target.name]
C(e)&&(t.target.blur(),e(t))}function ys(){const t=e({className:"fshCenter fshFten"}),n=e({id:"fshWorldPrefs",innerHTML:`${le("showCreatureInfo")}&nbsp;&nbsp;${le("showMonsterLog")}&nbsp;&nbsp;${le("showTitanInfo")}&nbsp;&nbsp;${le("showBuffInfo")}<br>${le("hideSubLvlCreature")}&nbsp;&nbsp;${le("hidePlayerActions")}&nbsp;&nbsp;${ue()}`})
s(n,vs),h(n,"change",hs),r(t,n)
const o=e()
r(t,o)
const i=a("worldContainerBelow").children[0]
return Tt(t,i),o}function ks(t,e){return t[e.name]=!0,t}function ws(t,e,a){return t[a.trim()]||e.push(a),e}function Cs(t){B("",t)}function Ls(t,e){const a=e.b.reduce(ks,{}),n=zi.reduce(o(ws,a),[])
n.length>0?function(t,e){B(`You are missing some ${Ui} hunting buffs<br>(${e.join(", ")})`,t)}(t,n):Cs(t)}function Ds(e,a,n){zi&&function(e,a,n){t.showBuffs?Ls(e,n):Cs(e)}(e,0,n)}const As=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function Ms(){var e
t.combatEvaluatorBias=y("combatEvaluatorBias"),t.generalVariable=(e=t.combatEvaluatorBias,As[e]?As[e].generalVariable:1.1053),t.hpVariable=function(t){return As[t]?As[t].hpVariable:1.1}(t.combatEvaluatorBias)}function Vs(t,e){return 6!==e.type||(0!==e.data.creature_type||e.data.level>=t)}function Ns(t){const e=mt(t)
return function(t){return!t||!t.actions||0===t.actions.length}(e)?t:(e.actions=e.actions.filter(o(Vs,function(t){return t.realm&&t.realm.minlevel||GameData.realm().minlevel}(e))),JSON.stringify(e))}function $s(e,a){t.hideSubLvlCreature&&function(t){return t.data&&t.data.d&&ce(t.data.d,dt)}(a)&&(e.dataFilter=Ns)}function Ss(e){t[e[0]]=fe(e[1])}function Hs(e){t[e]=fe(e)}function Bs(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Ss),["doNotKillList"].forEach(Hs)}function Gs(e){t[e[0]]=y(e[1])}function xs(e){t[e]=y(e)}function Ts(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showBuffs","showHuntingBuffs"]].forEach(Gs),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(xs)}function Es(t){$(`#actionList li.creature-${t.toString()} a.create-group`).hide()}const js=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function Ps(t,e){var a
y(t)&&(a=e+1,$.subscribe(D,o(Es,a)),Es(e+1))}function Is(t,e){"ACT_REPAIR"===e&&GameData.fetch(pt+u+bt+dt)}function Os(t){V(t.target)}const Rs=[function(){Ms(),Bs(),Ts()
const e=ys()
$.ajaxPrefilter("JSON",$s),t.hideSubLvlCreature&&GameData.fetch(dt),function(e){ms()
const a=o(Ds,e)
$.subscribe(l,a),t.showBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(e),Qi=y("hidePlayerActions"),$.subscribe(D,bs),bs()},function(){_(),q&&Dr()},function(){$.subscribe(ft,ds)},function(){js.forEach(Ps)},function(){y("enableCreatureColoring")&&r(document.body,St("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(D,La),La(),function(){const t=GameData.doAction
GameData.doAction=Ma(t)}()},function(){Nt("fsh_monsterLog").then(mi),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",vi),vi()},function(){$.subscribe(ht,Is)},function(){y("keepLogs")&&Nt("fsh_combatLog").then(ka)},function(){window.initialGameData&&ti(0,window.initialGameData),$.subscribe(`${ut} ${lt}`,ti)},function(){$.subscribe(ct,oi)},function(){$.subscribe(O,wr)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){V("#mapTooltip")},function(){Ka(),$.subscribe(A,Ya),$.subscribe(M,za)},function(){ra(),$.subscribe(`${l} ${c}`,ra),$.subscribe(f,oa)},function(){s(a("buffList"),Os)},function(){h(a("actionList"),"mouseover",Yr)},function(){const t=m("body")[0]
h(t,"keydown",fa),h(t,"keyup",da)}]
function Fs(){Bt(Rs)}export default Fs
//# sourceMappingURL=newMap-dbdafa4d.js.map
