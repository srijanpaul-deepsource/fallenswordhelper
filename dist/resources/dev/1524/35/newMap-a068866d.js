import{c as e,m as t,z as a,A as n,h as r,t as o,i,o as s,aF as u,R as l,aG as c,aH as f,aI as d,a0 as m,b as h,f as p,E as b,D as g,X as v,ao as y,I as k,aJ as w,C,aB as L,aK as D,aL as A,aM as M,aN as V,aO as N,aP as S,aQ as H,aR as B,au as G,aE as x,B as T,aS as E,a5 as j,V as P,v as R,ad as I,a6 as O,aT as F,aU as _,Q as q,u as K,aV as Y,aW as z,aX as U,aY as Q,aA as W,q as J,a as X,K as Z,aZ as ee,a_ as te,a$ as ae,b0 as ne,b1 as re,l as oe,N as ie,H as se,ae as ue,a8 as le,$ as ce,b2 as fe,b3 as de,b4 as me,b5 as he,b6 as pe,b7 as be,b8 as ge}from"./calfSystem-186455ab.js"
import{i as ve}from"./insertElementAfter-cbddba0b.js"
import{t as ye}from"./toggleForce-e38cb2b0.js"
import{c as ke}from"./createSpan-8048fffb.js"
import{i as we}from"./insertTextBeforeEnd-2ef03822.js"
import{a as Ce,r as Le}from"./roundToString-29c5853e.js"
import{a as De}from"./addCommas-fa3f11ee.js"
import{d as Ae,q as Me}from"./quickbuffSuccess-f7949959.js"
import{p as Ve}from"./playerName-2ef49def.js"
import{g as $e,s as Ne}from"./idb-97f66b86.js"
import{c as Se}from"./createStyle-8a0701e7.js"
import{g as He}from"./getArrayByClassName-0545a3cf.js"
import{e as Be}from"./executeAll-19d23fbc.js"
import{c as Ge}from"./createButton-3e0d72e2.js"
import{e as xe}from"./eventHandler5-021bd420.js"
import{i as Te}from"./insertElementBefore-9228b012.js"
import{c as Ee}from"./createInput-d71226f9.js"
import{c as je}from"./createLabel-66b85c7d.js"
import{o as Pe}from"./openQuickBuffByName-058f1f1e.js"
import{a as Re}from"./all-3be74659.js"
import{a as Ie}from"./allthen-e8de2991.js"
import{d as Oe,g as Fe}from"./getGroupStats-5aec1a57.js"
import{g as _e}from"./getMercStats-51bf40e5.js"
import{g as qe}from"./getProfile-0139b316.js"
import{g as Ke}from"./getMembrList-c6679e1f.js"
import{h as Ye}from"./hideElement-2c661b2e.js"
import{n as ze}from"./numberIsNaN-1e8b4508.js"
import{r as Ue}from"./reduceBuffArray-9636784d.js"
import{r as Qe}from"./rnd-3eb735d9.js"
import{h as We}from"./hasClasses-ce081b21.js"
import{v as Je}from"./valueText-453036fb.js"
import{g as Xe}from"./guild-7919b015.js"
import{c as Ze}from"./chunk-e04f591f.js"
import{d as et}from"./dataRows-f1e5d572.js"
import{g as tt,a as at}from"./getTitanString-fc6587aa.js"
import{p as nt}from"./padZ-3a7e6015.js"
import{c as rt}from"./createTable-4ac162e1.js"
import{t as ot}from"./testQuant-b66b331b.js"
import{g as it}from"./groupViewStats-9f893786.js"
import{m as st}from"./myStats-e0a1e9d8.js"
import{a as ut}from"./huntingBuffs-c83340d7.js"
import{b as lt}from"./simpleCheckbox-5f4d89bf.js"
import{b as ct}from"./bitwiseAnd-b4e86482.js"
import{s as ft}from"./shouldBeArray-e79aae97.js"
import"./getBuff-fc0cef8c.js"
import"./buffObj-8137966e.js"
import"./fshOpen-363b7f52.js"
import"./createLi-d686123b.js"
import"./createUl-760b5257.js"
import"./cmdExport-c033d991.js"
import"./indexAjaxJson-d4ea205b.js"
import"./currentGuildId-7dd95943.js"
import"./testRange-b67918af.js"
import"./intValue-1ce02c09.js"
import"./isChecked-36c474a7.js"
import"./isSelected-8b20baae.js"
import"./csvSplit-f0a1b444.js"
let dt,mt,ht,pt,bt,gt,vt,yt,kt
function wt(e){return e}function Ct(n){if(function(t){return e.showBuffInfo&&t.some(wt)}(n))return function(){if(dt)ye(dt,!1)
else{dt=t({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div><div></div>"})
const e=a("actionContainer")
ve(dt,e.children[2])}return dt}()
dt&&ye(dt,!0)}function Lt(e,t){mt?ye(mt,!1):function(e){mt=e.children[3],mt.className="fshBlue",n("CA ",mt),ht=ke(),r(mt,ht),we(mt," active")}(e),n(t.level,ht)}function Dt(e,t){t?Lt(e,t):mt&&ye(mt,!0)}function At(e,t){pt?ye(pt,!1):function(e){pt=e.children[4],pt.className="fshRed",n("Doubler ",pt),bt=ke(),r(pt,bt),we(pt," active")}(e),n(t.level,bt)}function Mt(e,t){t?At(e,t):pt&&ye(pt,!0)}function Vt(e,t,a){gt?ye(gt,!1):function(e){gt=e.children[2],n("Damage bonus: ",gt),vt=ke(),r(gt,vt),we(gt,"%")}(e),n(function(e,t){if(e){const a=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return Ce(a,2).toString()}return"0"}(t,Number(a)),vt)}function $t(e,t,a){t?Vt(e,t,a):gt&&ye(gt,!0)}function Nt(e,t){n(De(e),t)}function St(e,t){yt?ye(yt,!1):function(e){yt=e.children[1],n("Kill Streak: ",yt),kt=ke(),r(yt,kt)}(e),Nt(t,kt)}function Ht(e,t,a,n){t||a?St(e,n):yt&&ye(yt,!0)}function Bt(e,t){return t.name===e}function Gt(e){const{buffs:t}=GameData.player()
if(t)return t.find(o(Bt,e))}const xt=["red","orange","yellow"]
let Tt,Et
function jt(e){Me(e)&&GameData.fetch(u)}function Pt(){Gt("Summon Shield Imp")||Ae([Ve()],[55]).then(jt)}const Rt=["imp-0","imp-1","imp-1"]
function It(e,t){Tt?ye(Tt,!1):function(e){Tt=e.children[0],n("Shield Imps Remaining: ",Tt),Et=ke(),r(Tt,Et),i(Tt,"&nbsp;")
const t=ke({className:"xSmallLink",textContent:"Recast"})
r(Tt,t),s(t,Pt)}(e)
const a=function(e){return e?Number(e.stack):0}(t)
Tt.className=function(e){return Rt[e]||"fshGreen"}(a),n(a,Et)}function Ot(e,t,a){t||a?It(e,t):Tt&&ye(Tt,!0)}function Ft(e){return 0===e.type}function _t(e){return ke({textContent:e})}let qt,Kt,Yt,zt,Ut,Qt,Wt,Jt,Xt,Zt
function ea(e,t){qt?ye(qt,!1):function(e,t){qt=e.children[5],n("Teleport Cooldown: ",qt),Kt=_t(t.toString()),r(qt,Kt)}(e,t)}function ta(){const e=Math.max(Math.ceil((Yt-Date.now())/1e3),0)
n(e,Kt),e>0&&setTimeout(ta,500)}function aa(e,t){t?ea(e,t):qt&&ye(qt,!0)}function na(){zt=Gt("Death Dealer"),Ut=Gt("Doubler"),Qt=Gt("Counter Attack"),Wt=Gt("Summon Shield Imp"),Jt=function(){const e=GameData.player().teleportCooldown
return e>1&&e}(),Xt=function(){const{dynamic:e}=GameData.realm()
return l(e)&&e.some(Ft)}(),Zt=GameData.player().killStreak}function ra(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",xt[e.text()]||"#ad8043")}(),na()
const e=Ct([zt,Ut,Qt,Wt,Jt,Xt])
e&&(Ot(e,Wt,zt),Ht(e,zt,Xt,Zt),$t(e,zt,Zt),Dt(e,Qt),Mt(e,Ut),aa(e,Jt))}function oa(e,t){var a
a=t.player.teleportCooldown,Kt&&(Yt=Date.now()+1e3*a,ta())}const ia=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"]
let sa=!1
function ua(e){return g(".verb.attack",e)}function la(e){const t=ia.indexOf(e.toUpperCase())
return b(`#actionList .actionListItem.creature.creature-${t}`)}function ca(e){const t=["LEGENDARY","NORMAL"].flatMap(la),a=la("CHAMPION"),[n,r]=e?[t,a]:[a,t],o=`url("${y}ui/world/icon_action_attack_`
n.map(ua).filter((e=>null!==e)).forEach((e=>{e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""})),r.slice(0,8).map(ua).forEach(((e,t)=>{null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${o}${t+1}.png")`)}))}function fa(e){if(!e.ctrlKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(sa||ca(!0),sa=!0,!e.code.match(/(Digit|Numpad)[1-8]/))return
const t=la("CHAMPION"),a=parseInt(e.code.slice(-1),10)-1
if(a<t.length){const e=ua(t[a])
null!==e&&(v("world","ChampionAttack"),e.click())}}function da(e){!sa||e.ctrlKey&&e.shiftKey||(sa=!1,ca(!1))}const ma=["Breaker","Protection","Master Thief","Protect Gold","Disarm","Duelist","Thievery","Master Blacksmith","Master Crafter","Fury Caster","Master Inventor","Sustain"]
let ha,pa=[]
function ba(e){54!==e.id&&26!==e.id||(ha.player.buffs[e.id]=parseInt(e.level,10))}function ga(e){-1===ma.indexOf(e.name)&&(ha.player.enhancements[e.name]=e.value)}function va(e,t){ha={},ha.combat=t.response.data,ha.combat.inventory_id&&(ha.combat.drop=ha.combat.item.id),ha.player={},ha.player.buffs={},ha.player.enhancements={},function(e){e.player.buffs&&e.player.buffs.forEach(ba)}(t),function(e){e.player.enhancements&&e.player.enhancements.forEach(ga)}(t),ha.time=t.time,pa.push(ha),Ne("fsh_combatLog",pa)}function ya(e,t){0===t.response.response&&va(0,t)}function ka(e){e&&(pa=e),$.subscribe(w,ya)}function wa(t){return e.doNotKillList.includes(t.trim())}function Ca(e){e.classList.toggle("fshBlue",wa(C(e)))}function La(){const e=a("actionList")
He("creature",e).forEach(Ca)}function Da(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(wa(e))return a("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const Aa={2:function(e){return function(t,a,n,r){Da(n.passback)||e(t,a,n,r)}}}
function Ma(e){return function(t,a,n,r){const o=Aa[t];(function(e){return e&&L(e)})(o)&&function(e){return D(e)||0===e}(r)?o(e)(t,a,n,r):e(t,a,n,r)}}function Va(e){e.remove()}function $a(e,t){!function(e){(function(e){return e.response&&e.response.msg&&e.response.msg.startsWith("Creature did not exist at that location")})(e)&&GameData.fetch(M+V)}(t),b(".creature-4 > .quickCombat > .verbs").forEach(Va)}function Na(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function Sa(e,t,a){return je({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:a})}function Ha(e){const a=t({className:"fshToggle"}),n=Ee({checked:e.prefVal,id:e.checkId,type:"checkbox"})
r(a,n)
const o=Sa(e.onClass,e.onTip,e.checkId)
r(a,o)
const i=Sa(e.offClass,e.offTip,e.checkId)
return r(a,i),r(e.worldName,a),n}let Ba,Ga,xa,Ta,Ea,ja,Pa,Ra,Ia
function Oa(e){return e?e.toString():"?"}function Fa(e){const a=t({className:"fshFsty"})
r(a,function(){const e=t({textContent:"Min Lvl: "})
return Ga=_t(Oa(GameData.realm().minlevel)),r(e,Ga),e}()),r(a,function(){const e=t({textContent:"Your Lvl: "})
return xa=_t(Oa(GameData.player().level)),r(e,xa),e}()),r(e,a)}function _a(e,t,a){const n=Ge({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return r(a,n),n}function qa(){var t
Fa(t=Ba),Ta=_a("fshFormGroup","Quick Create Attack Group",t),Ea=_a("fshQuickBuff","Open Quick Buff Popup",t),ja=_a("fshRealmMap","Open Realm Map",t),Pa=_a("fshTempleOne","Search map in Ultimate FSG",t),function(e){if(k("showSpeakerOnWorld")){const t=k("playNewMessageSound")
Ra=Ha({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(Ba),function(t){const a=e.huntingMode
Ia=Ha({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:t})}(Ba)}const Ka=[[e=>e===Ra,function(){m("playNewMessageSound",!k("playNewMessageSound"))}],[e=>e===Ia,function(){e.huntingMode=!e.huntingMode,m("huntingMode",e.huntingMode)}]],Ya=[[e=>e===Ta,function(e){H(e),GameData.doAction(12,401,{},0)}],[e=>e===Ea,function(){Pe(Ve())}],[e=>e===ja,function(){window.open(`${B+G}map`,"fsMap")}],[e=>e===Pa,function(){const e=GameData.realm()
window.open(`${x}realms${G}view&realm_id=${e.id}`,"mapUfsg")}]]
function za(){Ba||(Ba=t({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),qa(),s(Ba,xe(Ya)),p(Ba,"change",xe(Ka)),Te(Ba,a("worldCoord")))}function Ua(e,t){Ga&&t.b.minlevel&&(Na(),n(t.b.minlevel,Ga))}function Qa(e,t){xa&&n(t.b,xa)}function Wa(e){return!e||!e.response||!e.response.data}let Ja,Xa,Za,en,tn,an,nn,rn,on,sn,un,ln,cn,fn,dn,mn,hn,pn,bn,gn,vn,yn,kn,wn,Cn,Ln,Dn,An,Mn,Vn,$n,Nn,Sn,Hn,Bn
function Gn(e){return e.player_name}function xn(e){!function(e){en=e.defenders.map(Gn)}(e),Ja?T("",Ja):Ja=t({className:"body"}),function(e){Xa=t({className:"fshFloatLeft fshRelicLeftDiv"}),r(Ja,Xa),e.is_owner&&r(Xa,Oe(en)),Za=Ge({className:"custombutton",textContent:"Fetch Stats"}),r(Xa,Za)}(e)
const n=a("dialog-relic")
r(n,Ja)}const Tn=[e=>"lastUpdate"!==e,e=>!en.includes(e),e=>tn[e].last_login,e=>Number(tn[e].last_login)<an,e=>Number(tn[e].last_login)>nn,e=>tn[e].level<400||tn[e].level>421,e=>tn[e].level<441||tn[e].level>450]
function En(e,t){return t(e)}function jn(e){return Tn.every(o(En,e))}function Pn(e){return`<a href="${j}${tn[e].id}">${e}</a>`}function Rn(e){tn=e,an=P-120,nn=P-604800
const t=E(tn).filter(jn).map(Pn)
i(Ja,`<div class="fshFloatLeft fshRelicLowDiv"><table class="relicT"><thead><tr><th>${t.length.toString()} Offline guild members not at relic:</th></tr></thead><tbody><tr><td>${t.join(" ")}</td></tr></tbody></table></div>`)}function In(e){Ye(Za)
const n=k("hideRelicOffline")
e.is_owner&&!n&&Ke(!0).then(Rn),i(Xa,'<table class="relicT"><thead><tr><th colspan="2">Processing</th></tr></thead><tbody><tr><td class="fshGreen" colspan="2" id="ProcessingStatus">Parsing defending guild stats ...</td></tr></tbody><thead><tr><th colspan="2">Assumptions</th></tr></thead><tbody><tr><td colspan="2" class="fshGrey">Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that order) on both the defending group and attacking group.</td></tr></tbody></table>'),Bn=a("ProcessingStatus")
const o=t({className:"fshFloatLeft fshRelicMidDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Defending Guild Stats</th></tr></thead><tbody><tr><td>Relic Count:</td><td id="relicCount">0</td></tr><tr><td>Lead Defender Bonus:</td><td id="LDPercentage">0</td></tr><tr><td>Lead Defender Cloaked:</td><td id="LDCloaked">No</td></tr></tbody><thead><tr><th colspan="2">Other Defender Stats</th></tr></thead><tbody><tr><td>Raw Attack:</td><td class="fshGrey" id="attackValue">0</td></tr><tr><td>Attack w/ buffs:</td><td id="attackValueBuffed">0</td></tr><tr><td>Raw Defense:</td><td class="fshGrey" id="defenseValue">0</td></tr><tr><td>Defense w/buffs:</td><td id="defenseValueBuffed">0</td></tr><tr><td>Raw Armor:</td><td class="fshGrey" id="armorValue">0</td></tr><tr><td>Armor w/ buffs:</td><td id="armorValueBuffed">0</td></tr><tr><td>Raw Damage:</td><td class="fshGrey" id="damageValue">0</td></tr><tr><td>Damage w/ buffs:</td><td id="damageValueBuffed">0</td></tr><tr><td>Raw HP:</td><td class="fshGrey" id="hpValue">0</td></tr><tr><td>HP w/ buffs:</td><td id="hpValueBuffed">0</td></tr><tr><td>Cloaked:</td><td id="defendersCloaked">0</td></tr><tr><td>Processed:</td><td id="defendersProcessed">0</td></tr></tbody></table>'})
r(Ja,o),rn=a("relicCount"),on=a("LDPercentage"),sn=a("LDCloaked"),un=a("attackValue"),ln=a("attackValueBuffed"),cn=a("defenseValue"),fn=a("defenseValueBuffed"),dn=a("armorValue"),mn=a("armorValueBuffed"),hn=a("damageValue"),pn=a("damageValueBuffed"),bn=a("hpValue"),gn=a("hpValueBuffed"),vn=a("defendersCloaked"),yn=a("defendersProcessed")
const s=t({className:"fshFloatLeft fshRelicRightDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Adjusted defense values</th></tr></thead><tbody><tr><td>DC225:</td><td id="DC225">0</td></tr><tr><td>DC175:</td><td id="DC175">0</td></tr><tr><td colspan="2">&nbsp;</td></tr></tbody><thead><tr><th colspan="2">Attacking Group Stats</th></tr></thead><tbody><tr><td>Raw Group Attack:</td><td class="fshGrey" id="GroupAttack"></td></tr><tr><td>Group Attack w/ buffs:</td><td id="GroupAttackBuffed"></td></tr><tr><td>Raw Group Defense:</td><td class="fshGrey" id="GroupDefense"></td></tr><tr><td>Group Defense w/ buffs:</td><td id="GroupDefenseBuffed"></td></tr><tr><td>Raw Group Armor:</td><td class="fshGrey" id="GroupArmor"></td></tr><tr><td>Group Armor w/ buffs:</td><td id="GroupArmorBuffed"></td></tr><tr><td>Raw Group Damage:</td><td class="fshGrey" id="GroupDamage"></td></tr><tr><td>Group Damage w/ buffs:</td><td id="GroupDamageBuffed"></td></tr><tr><td>Raw Group HP:</td><td class="fshGrey" id="GroupHP"></td></tr><tr><td>Group HP w/ buffs:</td><td id="GroupHPBuffed"></td></tr></tbody></table>'})
r(Ja,s),kn=a("DC225"),wn=a("DC175"),Cn=a("GroupAttack"),Ln=a("GroupAttackBuffed"),Dn=a("GroupDefense"),An=a("GroupDefenseBuffed"),Mn=a("GroupArmor"),Vn=a("GroupArmorBuffed"),$n=a("GroupDamage"),Nn=a("GroupDamageBuffed"),Sn=a("GroupHP"),Hn=a("GroupHPBuffed")}let On
function Fn(e){const t=R(e),a=I('#pCC img[src*="/relics/"]',t).length
var r
n(a,rn),On=1===(r=a)?1.5:Ce(1-r/10,2),n(`${String(100*On)}%`,on)}function _n(e,t){return e>10*t||e<t?e:10*t}const qn=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function Kn(e,t,a){e[a[0]]=Number(t[a[1]])}const Yn=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function zn(e,t,a){e[a[0]]=t[a[1]]||0}function Un(e){const t=Ue(e._skills),a={}
return function(e,t){qn.forEach(o(Kn,e,t))}(a,e),function(e,t){Yn.forEach(o(zn,e,t))}(a,t),a.superEliteSlayerMultiplier=Ce(.002*a.superEliteSlayerLevel,2),ze(a.armorValue)&&function(e){e.attackValue=_n(e.attackBonus,e.levelValue),e.defenseValue=_n(e.defenseBonus,e.levelValue),e.armorValue=_n(e.armorBonus,e.levelValue),e.damageValue=_n(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(a),a}let Qn,Wn,Jn,Xn,Zn,er,tr,ar,nr,rr,or,ir,sr,ur
function lr(e){return Math.round(e*On)}function cr(){Nt(Qn,un),Nt(Jn,cn),Nt(Xn,dn),Nt(Zn,hn),Nt(tr,bn),n(ar,vn),nr+=1,n(nr,yn)}function fr(e){const t=function(e){return Math.ceil(or.attack*(.0025*O(e["Nightmare Visage"],0)))}(e)
or.attack-=t,function(){const e=Math.ceil(or.attack*rr.flinchLevel*.001)
Nt(or.attack-e,Ln)}()
const a=function(e){return Math.ceil(or.defense*(1+.001*O(e.Constitution,0)))}(e)
Nt(a+t,An),function(e){Nt(or.armor+Math.floor(or.armor*O(e.Sanctuary,0)*.001),Vn)}(e)
const n=function(e,t){return Math.ceil(t*O(e.Fortitude,0)*.001)}(e,a)
!function(e){Nt(or.hp+e,Hn)}(n),function(e,t){const a=Math.ceil((or.hp+t)*O(e["Chi Strike"],0)*.001),n=Math.ceil(or.damage*rr.terrorizeLevel*.001)
Nt(or.damage+a-n,Nn)}(e,n)}function dr(){n("Processing attacking group stats ... ",Bn),ir&&(or.attack-=ir.attack,or.defense-=ir.defense,or.armor-=ir.armor,or.damage-=ir.damage,or.hp-=ir.hp),Nt(or.attack,Cn),Nt(or.defense,Dn),Nt(or.armor,Mn),Nt(or.damage,$n),Nt(or.hp,Sn)
const e=Ue(GameData.player().buffs)
fr(e),function(e){const t=Math.ceil(Wn*O(e.Flinch,0)*.001)
Nt(Wn-t,ln)}(e),function(e){const t=Math.ceil(er*O(e.Terrorize,0)*.001)
Nt(er-t,pn)}(e),n("Done.",Bn)}function mr(){n("Processing defending guild stats ... ",Bn),Qn+=lr(rr.attackValue),Jn+=lr(rr.defenseValue),Xn+=lr(rr.armorValue),Zn+=lr(rr.damageValue),tr+=lr(rr.hpValue),cr()
const e=Math.ceil(Qn*(.0025*rr.nightmareVisageLevel))
!function(e){Wn=Qn-e,Nt(Wn,ln)}(e)
const t=Math.ceil(Jn*(1+.001*rr.constitutionLevel))
!function(e,t){const a=t+e
Nt(a,fn),Nt(Math.ceil(.55*a),kn),Nt(Math.ceil(.65*a),wn)}(e,t),Nt(Xn+Math.floor(Xn*rr.sanctuaryLevel*.001),mn)
const a=tr+function(e){return Math.ceil(e*rr.fortitudeLevel*.001)}(t)
Nt(a,gn),function(e){er=Zn+Math.ceil(e*rr.chiStrikeLevel*.001),Nt(er)}(a),0!==rr.cloakLevel&&n("Yes",sn),GameData.player().hasGroup&&or?dr():n("Done.",Bn)}function hr(e){const t=Un(e)
Qn+=Math.round(t.attackValue*F),Jn+=Math.round(t.defenseValue*F),Xn+=Math.round(t.armorValue*F),Zn+=Math.round(t.damageValue*F),tr+=Math.round(t.hpValue*F),0!==t.cloakLevel&&(ar+=1),cr()}function pr(e){rr=Un(e)}function br(e){or=e}function gr(e){ir=e}function vr(e){n(e.message,Bn)}function yr(e){const t=R(e),a=g('#pCC a[href*="confirmDisband"]',t)
if(!a)return
const n=function(e){const t=e.previousElementSibling.href,a=[Fe(t).then(br)]
return function(e){return-1!==e.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML.indexOf('"#000099"')}(e)&&a.push(_e().then(gr)),a}(a)
return Re(n)}function kr(e,t){return 0===t?qe(e).then(pr):qe(e).then(hr).catch(vr)}function wr(){let e=[K({cmd:"guild",subcmd:"view",guild_id:sr.controlled_by.guild_id}).then(Fn)]
return GameData.player().hasGroup&&e.push(K({cmd:"guild",subcmd:"groups"}).then(yr)),e=e.concat(en.map(kr)),e}function Cr(){In(sr),Qn=0,Jn=0,Xn=0,Zn=0,tr=0,ar=0,nr=0
const e=wr()
Ie(e,mr)}function Lr(e,t){Wa(t)||(sr=t.response.data,sr.defenders.length>0&&(xn(sr),q(Za,"click",Cr)))}function Dr(e){$("#statbar-gold").css("background-color",e)}function Ar(){$("#HelperSendTotal").html(De(k("currentGoldSentTotal"))),Number(GameData.player().gold)>ur?Dr("red"):Dr("inherit")}function Mr(){ur=k("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${k("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${De(ur)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${De(k("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",U),Ar(),$.subscribe(Q,Ar)}function Vr(e){return W({cache:!1,url:"fetchdata.php",data:J(e,{fshrnd:Qe()}),dataType:"json"})}const $r=[]
function Nr(e){return Wa(e)||$r.push(e),e}function Sr(e,t){return e===Number(t.response.data.id)}function Hr(e,t){e(t)}function Br(e,t){const a=$r.find(o(Sr,e))
return a?function(e){return new Promise((t=>{X(3,Hr,[t,e])}))}(a):Vr({a:1,id:e,passback:t}).then(Nr)}let Gr,xr,Tr,Er,jr,Pr
function Rr(e,t){return Je(Z(t,e))}function Ir(){var e
Gr=GameData.player().level,e=a("statbar-character-tooltip-stats"),Tr=Rr(e,re),xr=Rr(e,ee),jr=Rr(e,te),Er=Rr(e,ae),Pr=Rr(e,ne)}function Or(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function Fr(e,t,a){return function(e){return`<table><tr><td><img src="${y}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return`<tr><td>Class:&nbsp;</td><td width="40%">${e.creature_class}</td><td>Level:&nbsp;</td><td width="40%">${e.level} (your level:<span class="${t}">${Gr}</span>)</td></tr>`}(e,a)+function(e){return`<tr><td>Attack:&nbsp;</td><td width="40%">${e.attack} (your defense:<span class="fshYellow">${xr}</span>)</td><td>Defense:&nbsp;</td><td width="40%">${e.defense} (your attack:<span class="fshYellow">${Tr}</span>)</td></tr>`}(e)+function(e){return`<tr><td>Armor:&nbsp;</td><td width="40%">${e.armor} (your damage:<span class="fshYellow">${Er}</span>)</td><td>Damage:&nbsp;</td><td width="40%">${e.damage} (your armor:<span class="fshYellow">${jr}</span>)</td></tr>`}(e)+function(e,t){return`<tr><td>HP:&nbsp;</td><td width="40%">${e.hp} (your HP:<span class="fshYellow">${Pr}</span>)(1H: <span class="fshRed">${t}</span>)</td><td>Gold:&nbsp;</td><td width="40%">${e.gold}</td></tr>`}(e,t)+'<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(Or).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function _r(t){if(!Wa(t))return function(t){const a=Math.ceil(t.hp*e.hpVariable+t.armor*e.generalVariable)
let n="fshYellow"
return Ir(),Gr>t.level&&(n="fshRed"),Fr(t,a,n)}(t.response.data)}const qr=["verb","view","tip-static"]
function Kr(e,t){const a=_r(t)
e.set("content.text",a)}function Yr(e,t,a){return Br(GameData.actions()[e].data.id,e).then(o(Kr,a)),"Loading..."}function zr(e,t){v("NewMap","CreatureInfo")
const a=ie((n=t).parentNode.children).indexOf(n)
var n,r,i
e.classList.add("fshTip"),r=e,i=o(Yr,a),$(r).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:i},hide:{effect:!1}})}function Ur(t){if(!e.showCreatureInfo)return
const{target:a}=t,n=a.parentNode.parentNode.parentNode;(function(e,t){return We(qr,e)&&!oe("fshTip",e)&&oe("creature",t)})(a,n)&&zr(a,n)}function Qr(){return Xe({subcmd:"scouttower"})}function Wr(e){const t=se(e[1])
return"No active cooldown"===t?0:Math.ceil((function(e){const t=e.split(/[: /[]/)
return new Date(Number(t[4]),ue.indexOf(t[3]),Number(t[2]),Number(t[0]),Number(t[1]))}(t.slice(16))-le)/1e3)}function Jr(e){const t=e[0].cells[0].children[0]
return{base_id:Number(t.src.match(/s\/(\w+)\.p/)[1].slice(0,-32)),name:t.title}}function Xr(e){return{cooldown:Wr(e),creature:Jr(e),kills:Number(se(e[0].cells[3]))}}function Zr(e){const t=se(e[0].cells[1])
if("n/a"!==t){const a=se(e[0].cells[2]).match(/(\d+)\/(\d+)/)
return{realm:t,current_hp:Number(a[1]),max_hp:Number(a[2])}}}function eo(e){const t=e[2].cells[0].children
if(1===t.length){return{contributors:et(t[0].rows,3,0).map((e=>({kills:Number(se(e.cells[1])),player:{name:se(e.cells[0])}})))}}}function to(e){return{...Xr(e),...Zr(e),...eo(e)}}function ao(e){const t=R(e),a=g('table[width="500"]',t)
if(!a)return{s:!1}
const n=ie(a.rows).filter(((e,t,a)=>0!==t&&t<a.length-1&&(t-1)%6<3))
return{r:Ze(3,n).map(to),s:!0}}function no(){return K({cmd:"guild",subcmd:"scouttower"}).then(ao)}function ro(e,t){const a=e.insertCell(-1)
return[a.colSpan]=t,t[2]&&(a.className="header"),r(a,t[1]),a}function oo(e,t,a){const n=e.insertRow(-1)
return a&&(n.className="fshBlue"),function(e,t){t.forEach(o(ro,e))}(n,t),n}function io(e,t){oo(e,t[0],t[1])}function so(e,t){t.forEach(o(io,e))}let uo,lo,co,fo,mo,ho,po,bo,go,vo,yo,ko,wo,Co,Lo,Do,Ao,Mo,Vo,$o,No,So,Ho,Bo,Go,xo,To,Eo
function jo(){lo=_t("Current"),co=_t("Kills"),fo=_t("Member"),mo=_t("% of Total"),ho=_t("Status"),po=_t("Titan HP"),bo=_t("Total"),go=_t("Your Guild")}function Po(){for(;Ao.rows.length>7;)Ao.deleteRow(7)}function Ro(){const e=ke()
return r(e,vo),we(e,"/"),r(e,yo),e}function Io(e){const t=ke()
return r(t,e),we(t,"%"),t}function Oo(){Vo=null,Mo&&!oe("fshHide",Mo)&&(ye(Mo,!0),n("",vo),n("",yo),n("",ko),n("",wo),n("",Co),T("",Lo),T("",Do),Po())}function Fo(e){return 0===e.type&&(Vo=e.base_creature_id,!0)}function _o(){if(Mo)ye(Mo,!1)
else{const e=a("actionContainer")
Mo=t({className:"fshActionBox titanInfo"}),vo=ke(),yo=ke(),ko=ke(),wo=ke(),Co=ke(),Lo=ke(),Do=ke(),Ao=rt({className:"fshCenter"}),jo(),so(Ao,[[[[2,po,!0],[4,go,!0]]],[[[2,Ro()],[4,ko]]],[[[2,lo,!0],[4,Io(wo)]],!0],[[[2,bo,!0],[4,Io(Co)]],!0],[[[2,ho,!0],[4,Lo]],!0],[[[6,Do]]],[[[2,fo,!0],[2,co,!0],[2,mo,!0]]]]),r(Mo,Ao),r(e,Mo)}}function qo(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(le+1e3*e)
return`${nt(t.getHours())}:${nt(t.getMinutes())} ${nt(t.getDate())}/${ue[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function Ko(e){return Le(tt(e.max_hp-e.current_hp,e.kills),2)}function Yo(e){return Le(100*e.kills/e.max_hp,2)}function zo(e){[[e.current_hp,vo],[e.max_hp,yo],[e.kills,ko],[Ko(e),wo],[Yo(e),Co]].forEach((([e,t])=>{n(e,t)})),T(function(e){return at(e.kills,e.max_hp,e.current_hp)}(e),Lo),T(qo(e.cooldown),Do)}function Uo(e,t){return[[[2,_t(t.player.name)],[2,_t(t.kills.toString())],[2,_t(`${Le(100*t.kills/e.kills,2)}%`)]]]}function Qo(e){return e.realm&&e.creature.base_id===Vo&&e.realm===uo}function Wo(e){const t=e.find(Qo)
t&&(zo(t),function(e){if(Po(),!e.contributors)return
const t=e.contributors.map(o(Uo,e))
so(Ao,t)}(t))}function Jo(t){return e.showTitanInfo&&l(t)&&t.some(Fo)}function Xo(e,t){(function(e){return e.s&&l(e.r)})(t)&&(Wo(t.r),Jo(GameData.realm().dynamic)?$o=window.setTimeout(e,3e4):Oo())}function Zo(){ce(Qr,no).then(o(Xo,Zo))}function ei(e){$o&&(window.clearTimeout($o),$o=null),Jo(e)?(_o(),Zo()):Oo()}function ti(e){var t
e.dynamic&&(t=e.name,uo=t,ei(e.dynamic))}function ai(e,t){(function(e){return e.realm&&e.realm.name})(t)&&ti(t.realm)}function ni(e){const t=e.response.response,a=e.response.msg
let n
if(0!==t){const e=a.indexOf("<")
n=-1!==e?a.substring(0,e):a}else n=`You purchased ${e.response.data.name} for ${De(e.response.data.cost)} gold.`
i(To,`${n}<br>`)}function ri(){GameData.doAction(14,3,{id:No.id,item_id:No.itemId},0),Ho.close()}function oi(){const e=ot(Go.value)
if(!e)return
const t=[]
for(let a=1;a<e;a+=1)t.push(Vr({a:14,d:0,id:No.id,item_id:No.itemId}).then(ni))
Ie(t,ri)}function ii(){Bo?n("",To):(Bo=t({className:"fshClear",textContent:"Select how many to quick-buy:"}),Go=Ee({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),r(Bo,Go),xo=Ge({textContent:"Quick-buy"}),s(xo,oi),r(Bo,xo),To=t(),r(Bo,To),r(So,Bo))}function si(e,t){No=t,So=So||a("shopDialogConfirm"),So&&(Ho=Ho||$(So).data("hcsWorldDialogShopConfirm"),Ho&&ii())}function ui(e){Eo[e.name]?Eo[e.name].seen&&(Eo[e.name].seen+=1):(Eo[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,Eo[e.name]))}function li(e,t,a){return t?e(t,a):a}function ci(e,t){const a=e||{}
return a.min=li(Math.min,a.min,t),a.max=li(Math.max,a.max,t),a}const fi=["attack","armor","damage","defense","hp"]
function di(e,t,a){const n=ci(t[a],Number(e[a]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[a],n)&&(t[a]=n)}function mi(e,t){e[t.name]=ci(e[t.name],Number(t.value))}function hi(e){Eo||(Eo={}),ui(e),function(e,t){fi.forEach(o(di,e,t))}(e,Eo[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(o(mi,t.enhancements)))}(e,Eo[e.name]),Ne("fsh_monsterLog",Eo)}function pi(e){Eo=e||{}}const bi=[]
function gi(t){Wa(t)||(v("NewMap","MonsterLog"),function(t){e.showMonsterLog&&hi(t)}(t.response.data))}function vi(e,t){return e.id===t.id}function yi(e,t){6!==e.type||function(e){if(bi.find(o(vi,e.data)))return!0
bi.push(e.data)}(e)||Br(e.data.id,t).then(gi)}function ki(){e.showMonsterLog&&GameData.actions().forEach(yi)}function wi(e){const t=R(e),a=it(t)
return{r:{attributes:[{value:a.attack},{value:a.defense},{value:a.armor},{value:a.damage},{value:a.hp}]}}}function Ci(e){return K({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:e}).then(wi)}function Li(e){return Xe(J({subcmd:"groups"},e))}function Di(e){return Li({subcmd2:"viewstats",group_id:e})}function Ai(){return Li({subcmd2:"view"})}function Mi(e){const t=R(e),a=g('#pCC img[src$="disband.png"]',t)
if(!a)return{}
return{r:[{id:Number(a.parentNode.href.match(/\((\d+)\)/)[1]),members:[{name:Ve()}]}]}}function Vi(){return K({cmd:"guild",subcmd:"groups"}).then(Mi)}function $i(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}const Ni=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${$i(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${$i(e)}`]]
function Si(e,t){return t[0](e)}function Hi(e){e.playerHits=function(e){return"-"===e.numberOfCreatureHitsTillDead?e.numberOfHitsRequired:function(e){return"-"===e.numberOfHitsRequired||e.numberOfHitsRequired>e.numberOfCreatureHitsTillDead}(e)?"-":e.numberOfHitsRequired}(e),e.creatureHits=function(e){return"-"===e.numberOfHitsRequired?e.numberOfCreatureHitsTillDead:function(e){return"-"===e.numberOfCreatureHitsTillDead||e.numberOfCreatureHitsTillDead>e.numberOfHitsRequired}(e)?"-":e.numberOfCreatureHitsTillDead}(e),e.fightStatus=function(e){const t=Ni.find(o(Si,e))
return t?t[1](e):"Unknown"}(e)}function Bi(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function Gi(e){!function(e){const t=function(e){return e.callback.groupExists?e.callback.groupArmorValue:e.player.armorValue}(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}(e),function(e){e.player.sanctuaryLevel>0&&(e.extraNotes+=`Sanc Bonus Armor = ${Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}<br>`)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),Bi(e)}function xi(e){const t=function(e){return e.callback.groupExists?e.callback.groupAttackValue:e.player.attackValue}(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${Math.floor(e.creature.defense*e.player.darkCurseLevel*.002)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-e.creature.defense*e.player.darkCurseLevel*.002
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}function Ti(e){e.lowestCALevelToStillHit=Math.max(Math.ceil((e.counterAttackBonusAttack-e.hitByHowMuch+1)/e.player.attackValue/.0025),0),e.lowestCALevelToStillKill=Math.max(Math.ceil((e.counterAttackBonusDamage-e.damageDone+1)/e.player.damageValue/.0025),0)}function Ei(e){Ti(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function ji(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&Ei(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){Ti(e),function(e){e.lowestCALevelToStillHit>175?e.extraNotes+="Even with CA175 you cannot hit this creature<br>":0!==e.lowestCALevelToStillHit&&(e.extraNotes+=`You need a minimum of CA${e.lowestCALevelToStillHit} to hit this creature<br>`)}(e),function(e){e.lowestCALevelToStillKill>175?e.extraNotes+="Even with CA175 you cannot 1-hit kill this creature<br>":0!==e.lowestCALevelToStillKill&&(e.extraNotes+=`You need a minimum of CA${e.lowestCALevelToStillKill} to 1-hit kill this creature<br>`)}(e)}(e)}function Pi(e){!function(e){const t=function(e){return e.callback.groupExists?e.callback.groupHPValue:e.player.hpValue}(e),{fortitudeLevel:a}=e.player
e.fortitudeExtraHPs=Math.floor(t*a*.001),a>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e)
const t=function(e){return e.callback.groupExists?e.callback.groupDamageValue:e.player.damageValue}(e)
if(e.overallDamageValue=t+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage,e.damageDone=Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp)),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}function Ri(e){return e.callback.groupExists?e.callback.groupDefenseValue:e.player.defenseValue}function Ii(e){e.overallDefenseValue=Ri(e)+Math.floor(Ri(e)*e.player.constitutionLevel*.001)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${Math.floor(Ri(e)*e.player.constitutionLevel*.001)}<br>`)}(e),function(e){e.player.flinchLevel>0&&(e.extraNotes+=`Flinch Bonus Attack Reduction = ${Math.floor(e.creature.attack*e.player.flinchLevel*.001)}<br>`)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue-50))}function Oi(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}let Fi,_i,qi,Ki,Yi,zi,Ui,Qi,Wi,Ji
function Xi(){return wa(_i)?"Remove from do not kill list":"Add to the do not kill list"}function Zi(){n(Xi(),qi)}function es(){const t=e.doNotKillList.indexOf(_i);-1===t?e.doNotKillList.push(_i):e.doNotKillList.splice(t,1),Zi(),m("doNotKillList",e.doNotKillList.join()),La()}function ts(){qi?Zi():function(){qi=Ge({className:"fshBl",textContent:Xi(),type:"button"})
const e=t({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
r(e,qi),r(Fi,e),s(qi,es)}()}function as(e,t){!function(e){if(!Fi){const t=Z("body",e)
1===t.length&&([Fi]=t)}}(t),Fi&&(_i=e.trim(),ts())}function ns(){zi||(Yi||(Yi=t(),r(Ki,Yi),r(Ki,t({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),zi=t(),r(Yi,zi))}function rs(e){ns(),T(e,zi)}function os(e){Ui||(ns(),Ui=t(),r(Yi,Ui)),T(e,Ui)}function is(e,t){const a={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,a){3===a&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,a,e.type),a}function ss(t,a,n){const r={}
r.callback=n,r.player=Un(a),function(t){t.combatEvaluatorBias=e.combatEvaluatorBias,t.attackVariable=1.1053,t.generalVariable=e.generalVariable,t.hpVariable=e.hpVariable}(r),r.creature=is(t.response.data,r.player.superEliteSlayerMultiplier),function(e){Oi(e),xi(e),Pi(e),Ii(e),Gi(e),Hi(e),ji(e)}(r),r.evaluatorHTML=function(e){return`<table width="100%"><tbody>${function(e){return`<tr><td bgcolor="#CD9E4B" colspan="4" align="center">${function(e){return e.callback.groupExists?"Group ":""}(e)}Combat Evaluation</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Will I hit it? </td><td align="left">${function(e){return e.hitByHowMuch>0?"Yes":"No"}(e)}</td><td align="right"><span style="color:#333333">Extra Attack: </td><td align="left">( ${e.hitByHowMuch} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333"># Hits to kill it? </td><td align="left">${e.numberOfHitsRequired}</td><td align="right"><span style="color:#333333">Extra Damage: </td><td align="left">( ${e.damageDone} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Will I be hit? </td><td align="left">${function(e){return e.creatureHitByHowMuch>=0?"Yes":"No"}(e)}</td><td align="right"><span style="color:#333333">Extra Defense: </td><td align="left">( ${-1*e.creatureHitByHowMuch} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333"># Hits to kill me? </td><td align="left">${e.numberOfCreatureHitsTillDead}</td><td align="right"><span style="color:#333333">Extra Armor + HP: </td><td align="left">( ${-1*e.creatureDamageDone} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333"># Player Hits? </td><td align="left">${e.playerHits}</td><td align="right"><span style="color:#333333"># Creature Hits? </td><td align="left">${e.creatureHits}</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Fight Status: </span></td><td align="left" colspan="3"><span>${e.fightStatus}</span></td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Notes: </span></td><td align="left" colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td></tr>`}(e)}</tbody></table>`}(r),n.groupExists?os(r.evaluatorHTML):rs(r.evaluatorHTML)}function us(e){return e.members[0].name===Ve()}function ls(e){if(l(e.r))return e.r.find(us).id}function cs(e,t,a){if(!a.r||!a.r.attributes)return
const n=a.r.attributes
ss(e,t,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}function fs(e,t,a){a&&function(e){return ce(Di,Ci,e)}(a).then(o(cs,e,t))}function ds(e,t){ce(Ai,Vi).then(ls).then(o(fs,e,t))}function ms(e,t){e.player.hasGroup&&ds(e,t),ss(e,t,{groupExists:!1})}function hs(e,t){Ki||(Ki=a("dialog-viewcreature")),Ki&&(rs(""),os(""),function(e){return e.response&&e.response.data}(t)&&(as(t.response.data.name,Ki),st(!0).then(o(ms,t))))}function ps(){const t=[,[e.buffs,e.buffsName],[e.buffs2,e.buffs2Name],[e.buffs3,e.buffs3Name]][e.enabledHuntingMode]
l(t)&&([Qi,Wi]=t)}function bs(t){"enabledHuntingMode"===t.target.name&&(e.enabledHuntingMode=t.target.value,m("enabledHuntingMode",e.enabledHuntingMode),ps(),GameData.fetch(u))}function gs(e){const t=Z("verbs",e)
1===t.length&&Ye(t[0])}function vs(){if(!Ji)return
const e=a("actionList")
He("player",e).forEach(gs)}const ys={hideSubLvlCreature:function(){e.hideSubLvlCreature=!e.hideSubLvlCreature,m("hideSubLvlCreature",e.hideSubLvlCreature),GameData.fetch(V)},hidePlayerActions:function(){Ji=!Ji,m("hidePlayerActions",Ji),GameData.fetch(V)},showCreatureInfo:function(){e.showCreatureInfo=!e.showCreatureInfo,m("showCreatureInfo",e.showCreatureInfo)},showHuntingBuffs:function(){e.showBuffs=!e.showBuffs,m("showHuntingBuffs",e.showBuffs),GameData.fetch(u)},showMonsterLog:function(){e.showMonsterLog=!e.showMonsterLog,m("showMonsterLog",e.showMonsterLog)},showTitanInfo:function(){e.showTitanInfo=!e.showTitanInfo,m("showTitanInfo",e.showTitanInfo),ei(GameData.realm().dynamic)},showBuffInfo:function(){e.showBuffInfo=!e.showBuffInfo,m("showBuffInfo",e.showBuffInfo),ra()}}
function ks(e){const t=ys[e.target.name]
L(t)&&(e.target.blur(),t(e))}function ws(){const e=t({className:"fshCenter fshFten"}),n=t({id:"fshWorldPrefs",innerHTML:`${lt("showCreatureInfo")}&nbsp;&nbsp;${lt("showMonsterLog")}&nbsp;&nbsp;${lt("showTitanInfo")}&nbsp;&nbsp;${lt("showBuffInfo")}<br>${lt("hideSubLvlCreature")}&nbsp;&nbsp;${lt("hidePlayerActions")}&nbsp;&nbsp;${ut()}`})
s(n,ks),p(n,"change",bs),r(e,n)
const o=t()
r(e,o)
const i=a("worldContainerBelow").children[0]
return Te(e,i),o}function Cs(e,t){return e[t.name]=!0,e}function Ls(e,t,a){return e[a.trim()]||t.push(a),t}function Ds(e){T("",e)}function As(e,t){const a=t.b.reduce(Cs,{}),n=Qi.reduce(o(Ls,a),[])
n.length>0?function(e,t){T(`You are missing some ${Wi} hunting buffs<br>(${t.join(", ")})`,e)}(e,n):Ds(e)}function Ms(t,a,n){Qi&&function(t,a,n){e.showBuffs?As(t,n):Ds(t)}(t,0,n)}const Vs=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function $s(){var t
e.combatEvaluatorBias=k("combatEvaluatorBias"),e.generalVariable=(t=e.combatEvaluatorBias,Vs[t]?Vs[t].generalVariable:1.1053),e.hpVariable=function(e){return Vs[e]?Vs[e].hpVariable:1.1}(e.combatEvaluatorBias)}function Ns(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function Ss(e){const t=pe(e)
return function(e){return!e||!e.actions||0===e.actions.length}(t)?e:(t.actions=t.actions.filter(o(Ns,function(e){return e.realm&&e.realm.minlevel||GameData.realm().minlevel}(t))),JSON.stringify(t))}function Hs(t,a){e.hideSubLvlCreature&&function(e){return e.data&&e.data.d&&ct(e.data.d,V)}(a)&&(t.dataFilter=Ss)}function Bs(t){e[t[0]]=ft(t[1])}function Gs(t){e[t]=ft(t)}function xs(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Bs),["doNotKillList"].forEach(Gs)}function Ts(t){e[t[0]]=k(t[1])}function Es(t){e[t]=k(t)}function js(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showBuffs","showHuntingBuffs"]].forEach(Ts),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(Es)}function Ps(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const Rs=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function Is(e,t){var a
k(e)&&(a=t+1,$.subscribe(A,o(Ps,a)),Ps(t+1))}function Os(e,t){"ACT_REPAIR"===t&&GameData.fetch(ge+u+M+V)}function Fs(e){H(e.target)}const _s=[function(){$s(),xs(),js()
const t=ws()
$.ajaxPrefilter("JSON",Hs),e.hideSubLvlCreature&&GameData.fetch(V),function(t){ps()
const a=o(Ms,t)
$.subscribe(c,a),e.showBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(t),Ji=k("hidePlayerActions"),$.subscribe(A,vs),vs()},function(){Y(),z&&Mr()},function(){$.subscribe(he,hs)},function(){Rs.forEach(Is)},function(){k("enableCreatureColoring")&&r(document.body,Se("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(A,La),La(),function(){const e=GameData.doAction
GameData.doAction=Ma(e)}()},function(){$e("fsh_monsterLog").then(pi),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",ki),ki()},function(){$.subscribe(be,Os)},function(){k("keepLogs")&&$e("fsh_combatLog").then(ka)},function(){window.initialGameData&&ai(0,window.initialGameData),$.subscribe(`${fe} ${de}`,ai)},function(){$.subscribe(me,si)},function(){$.subscribe(_,Lr)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){H("#mapTooltip")},function(){za(),$.subscribe(N,Ua),$.subscribe(S,Qa)},function(){ra(),$.subscribe(`${c} ${f}`,ra),$.subscribe(d,oa)},function(){s(a("buffList"),Fs)},function(){p(a("actionList"),"mouseover",Ur)},function(){const e=h("body")[0]
p(e,"keydown",fa),p(e,"keyup",da)}]
function qs(){Be(_s),$.subscribe(w,$a)}export default qs
//# sourceMappingURL=newMap-a068866d.js.map
