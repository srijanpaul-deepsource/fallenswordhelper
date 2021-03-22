import{c as e,m as t,z as a,A as n,h as r,t as o,i,o as s,aE as u,aF as l,aG as c,aH as f,_ as d,b as m,f as h,E as p,D as b,W as g,an as v,I as y,aI as k,C as w,aA as C,aJ as L,aK as D,aL as A,aM as M,aN as V,aO as N,at as S,aD as H,B,aP as G,a4 as x,U as T,v as E,ac as j,a5 as P,aQ as I,aR as O,Q as R,u as F,aS as _,aT as q,aU as K,aV as Y,az as z,q as U,a as Q,K as W,aW as J,aX as X,aY as Z,aZ as ee,a_ as te,l as ae,N as ne,H as re,ad as oe,a7 as ie,$ as se,a$ as ue,b0 as le,b1 as ce,b2 as fe,b3 as de,b4 as me,b5 as he,b6 as pe,b7 as be}from"./calfSystem-03050396.js"
import{i as ge}from"./insertElementAfter-43b7fc5a.js"
import{t as ve}from"./toggleForce-e38cb2b0.js"
import{c as ye}from"./createSpan-8d9e047a.js"
import{i as ke}from"./insertTextBeforeEnd-2526ea52.js"
import{a as we,r as Ce}from"./roundToString-29c5853e.js"
import{a as Le}from"./addCommas-fa3f11ee.js"
import{d as De,q as Ae}from"./quickbuffSuccess-d1e7ffee.js"
import{p as Me}from"./playerName-3ca7fe81.js"
import{i as Ve}from"./isArray-c05157b9.js"
import{g as Ne,s as $e}from"./idb-02fb3250.js"
import{c as Se}from"./createStyle-2fa96408.js"
import{g as He}from"./getArrayByClassName-0b05e230.js"
import{e as Be}from"./executeAll-19d23fbc.js"
import{c as Ge}from"./createButton-ba152a34.js"
import{e as xe}from"./eventHandler5-bd60a2ea.js"
import{i as Te}from"./insertElementBefore-9228b012.js"
import{c as Ee}from"./createInput-c4b18abd.js"
import{c as je}from"./createLabel-9c81780d.js"
import{o as Pe}from"./openQuickBuffByName-37d4d190.js"
import{a as Ie}from"./all-3be74659.js"
import{a as Oe}from"./allthen-e8de2991.js"
import{d as Re,g as Fe}from"./getGroupStats-ab330318.js"
import{g as _e}from"./getMercStats-c1072aa8.js"
import{g as qe}from"./getProfile-fdde6617.js"
import{g as Ke}from"./getMembrList-59c1e7a8.js"
import{h as Ye}from"./hideElement-2c661b2e.js"
import{n as ze}from"./numberIsNaN-1e8b4508.js"
import{r as Ue}from"./reduceBuffArray-9636784d.js"
import{r as Qe}from"./rnd-3eb735d9.js"
import{h as We}from"./hasClasses-0c2a9550.js"
import{v as Je}from"./valueText-c92275e2.js"
import{g as Xe}from"./guild-61d59bbe.js"
import{c as Ze}from"./chunk-e04f591f.js"
import{d as et}from"./dataRows-737117b7.js"
import{g as tt,a as at}from"./getTitanString-fc6587aa.js"
import{p as nt}from"./padZ-3a7e6015.js"
import{c as rt}from"./createTable-fc21d3c3.js"
import{t as ot}from"./testQuant-b66b331b.js"
import{g as it}from"./groupViewStats-ba09bb3d.js"
import{m as st}from"./myStats-e7913a0f.js"
import{a as ut}from"./huntingBuffs-2018b2e6.js"
import{b as lt}from"./simpleCheckbox-36bbb034.js"
import{b as ct}from"./bitwiseAnd-b4e86482.js"
import{s as ft}from"./shouldBeArray-f76c9cd1.js"
import"./getBuff-b69df2e6.js"
import"./buffObj-8137966e.js"
import"./fshOpen-363b7f52.js"
import"./createLi-995eeb78.js"
import"./createUl-95780283.js"
import"./cmdExport-c8e611b1.js"
import"./indexAjaxJson-d9ed18eb.js"
import"./currentGuildId-4235046f.js"
import"./testRange-b67918af.js"
import"./intValue-1ce02c09.js"
import"./isChecked-36c474a7.js"
import"./isSelected-8b20baae.js"
import"./csvSplit-f0a1b444.js"
let dt,mt,ht,pt,bt,gt,vt,yt,kt
function wt(e){return e}function Ct(n){if(function(t){return e.showBuffInfo&&t.some(wt)}(n))return function(){if(dt)ve(dt,!1)
else{dt=t({className:"fshActionBox",innerHTML:"<div></div><div></div><div></div><div></div><div></div><div></div>"})
const e=a("actionContainer")
ge(dt,e.children[2])}return dt}()
dt&&ve(dt,!0)}function Lt(e,t){mt?ve(mt,!1):function(e){mt=e.children[3],mt.className="fshBlue",n("CA ",mt),ht=ye(),r(mt,ht),ke(mt," active")}(e),n(t.level,ht)}function Dt(e,t){t?Lt(e,t):mt&&ve(mt,!0)}function At(e,t){pt?ve(pt,!1):function(e){pt=e.children[4],pt.className="fshRed",n("Doubler ",pt),bt=ye(),r(pt,bt),ke(pt," active")}(e),n(t.level,bt)}function Mt(e,t){t?At(e,t):pt&&ve(pt,!0)}function Vt(e,t,a){gt?ve(gt,!1):function(e){gt=e.children[2],n("Damage bonus: ",gt),vt=ye(),r(gt,vt),ke(gt,"%")}(e),n(function(e,t){if(e){const a=Math.min(.01*Math.round(Math.floor(t/5)*Number(e.level)),20)
return we(a,2).toString()}return"0"}(t,Number(a)),vt)}function Nt(e,t,a){t?Vt(e,t,a):gt&&ve(gt,!0)}function $t(e,t){n(Le(e),t)}function St(e,t){yt?ve(yt,!1):function(e){yt=e.children[1],n("Kill Streak: ",yt),kt=ye(),r(yt,kt)}(e),$t(t,kt)}function Ht(e,t,a,n){t||a?St(e,n):yt&&ve(yt,!0)}function Bt(e,t){return t.name===e}function Gt(e){const{buffs:t}=GameData.player()
if(t)return t.find(o(Bt,e))}const xt=["red","orange","yellow"]
let Tt,Et
function jt(e){Ae(e)&&GameData.fetch(u)}function Pt(){Gt("Summon Shield Imp")||De([Me()],[55]).then(jt)}const It=["imp-0","imp-1","imp-1"]
function Ot(e,t){Tt?ve(Tt,!1):function(e){Tt=e.children[0],n("Shield Imps Remaining: ",Tt),Et=ye(),r(Tt,Et),i(Tt,"&nbsp;")
const t=ye({className:"xSmallLink",textContent:"Recast"})
r(Tt,t),s(t,Pt)}(e)
const a=function(e){return e?Number(e.stack):0}(t)
Tt.className=function(e){return It[e]||"fshGreen"}(a),n(a,Et)}function Rt(e,t,a){t||a?Ot(e,t):Tt&&ve(Tt,!0)}function Ft(e){return 0===e.type}function _t(e){return ye({textContent:e})}let qt,Kt,Yt,zt,Ut,Qt,Wt,Jt,Xt,Zt
function ea(e,t){qt?ve(qt,!1):function(e,t){qt=e.children[5],n("Teleport Cooldown: ",qt),Kt=_t(t.toString()),r(qt,Kt)}(e,t)}function ta(){const e=Math.max(Math.ceil((Yt-Date.now())/1e3),0)
n(e,Kt),e>0&&setTimeout(ta,500)}function aa(e,t){t?ea(e,t):qt&&ve(qt,!0)}function na(){zt=Gt("Death Dealer"),Ut=Gt("Doubler"),Qt=Gt("Counter Attack"),Wt=Gt("Summon Shield Imp"),Jt=function(){const e=GameData.player().teleportCooldown
return e>1&&e}(),Xt=function(){const{dynamic:e}=GameData.realm()
return Ve(e)&&e.some(Ft)}(),Zt=GameData.player().killStreak}function ra(){!function(){const e=$("#actionlist-shield-imp")
1===e.length&&e.css("background-color",xt[e.text()]||"#ad8043")}(),na()
const e=Ct([zt,Ut,Qt,Wt,Jt,Xt])
e&&(Rt(e,Wt,zt),Ht(e,zt,Xt,Zt),Nt(e,zt,Zt),Dt(e,Qt),Mt(e,Ut),aa(e,Jt))}function oa(e,t){var a
a=t.player.teleportCooldown,Kt&&(Yt=Date.now()+1e3*a,ta())}const ia=["NORMAL","CHAMPION","ELITE","SUPER ELITE","TITAN","LEGENDARY"]
let sa=!1
function ua(e){return b(".verb.attack",e)}function la(e){const t=ia.indexOf(e.toUpperCase())
return p(`#actionList .actionListItem.creature.creature-${t}`)}function ca(e){const t=["LEGENDARY","NORMAL"].flatMap(la),a=la("CHAMPION"),[n,r]=e?[t,a]:[a,t],o=`url("${v}ui/world/icon_action_attack_`
n.map(ua).filter((e=>null!==e)).forEach((e=>{e.classList.remove("attack-1","attack-2","attack-3","attack-4","attack-5","attack-6","attack-7","attack-8"),e.style.backgroundImage=""})),r.slice(0,8).map(ua).forEach(((e,t)=>{null!==e&&(e.classList.add(`attack-${t+1}`),e.style.backgroundImage=`${o}${t+1}.png")`)}))}function fa(e){if(!e.ctrlKey||!e.shiftKey||"INPUT"===e.target.tagName||"TEXTAREA"===e.target.tagName)return
if(sa||ca(!0),sa=!0,!e.code.match(/(Digit|Numpad)[1-8]/))return
const t=la("CHAMPION"),a=parseInt(e.code.slice(-1),10)-1
if(a<t.length){const e=ua(t[a])
null!==e&&(g("world","ChampionAttack"),e.click())}}function da(e){!sa||e.ctrlKey&&e.shiftKey||(sa=!1,ca(!1))}const ma=["Breaker","Protection","Master Thief","Protect Gold","Disarm","Duelist","Thievery","Master Blacksmith","Master Crafter","Fury Caster","Master Inventor","Sustain"]
let ha,pa=[]
function ba(e){54!==e.id&&26!==e.id||(ha.player.buffs[e.id]=parseInt(e.level,10))}function ga(e){-1===ma.indexOf(e.name)&&(ha.player.enhancements[e.name]=e.value)}function va(e,t){ha={},ha.combat=t.response.data,ha.combat.inventory_id&&(ha.combat.drop=ha.combat.item.id),ha.player={},ha.player.buffs={},ha.player.enhancements={},function(e){e.player.buffs&&e.player.buffs.forEach(ba)}(t),function(e){e.player.enhancements&&e.player.enhancements.forEach(ga)}(t),ha.time=t.time,pa.push(ha),$e("fsh_combatLog",pa)}function ya(e,t){0===t.response.response&&va(0,t)}function ka(e){e&&(pa=e),$.subscribe(k,ya)}function wa(t){return e.doNotKillList.includes(t.trim())}function Ca(e){e.classList.toggle("fshBlue",wa(w(e)))}function La(){const e=a("actionList")
He("creature",e).forEach(Ca)}function Da(e){const t=GameData.actions()[e]
if(t)return function(e,t){if(wa(e))return a("actionList").children[t].children[0].children[1].classList.remove("loading"),!0}(t.data.name,e)}const Aa={2:function(e){return function(t,a,n,r){Da(n.passback)||e(t,a,n,r)}}}
function Ma(e){return function(t,a,n,r){const o=Aa[t];(function(e){return e&&C(e)})(o)&&function(e){return L(e)||0===e}(r)?o(e)(t,a,n,r):e(t,a,n,r)}}function Va(){window.GameController&&GameController.Realm&&!GameController.Realm.footprintTileList&&(GameController.Realm.footprintTileList=[])}function Na(e,t,a){return je({className:`fshCurveEle fshCurveLbl fshPoint tip-static ${e}`,dataset:{tipped:t},htmlFor:a})}function $a(e){const a=t({className:"fshToggle"}),n=Ee({checked:e.prefVal,id:e.checkId,type:"checkbox"})
r(a,n)
const o=Na(e.onClass,e.onTip,e.checkId)
r(a,o)
const i=Na(e.offClass,e.offTip,e.checkId)
return r(a,i),r(e.worldName,a),n}let Sa,Ha,Ba,Ga,xa,Ta,Ea,ja,Pa
function Ia(e){return e?e.toString():"?"}function Oa(e){const a=t({className:"fshFsty"})
r(a,function(){const e=t({textContent:"Min Lvl: "})
return Ha=_t(Ia(GameData.realm().minlevel)),r(e,Ha),e}()),r(a,function(){const e=t({textContent:"Your Lvl: "})
return Ba=_t(Ia(GameData.player().level)),r(e,Ba),e}()),r(e,a)}function Ra(e,t,a){const n=Ge({className:`fshCurveEle fshCurveBtn fshPoint tip-static ${e}`,dataset:{tipped:t}})
return r(a,n),n}function Fa(){var t
Oa(t=Sa),Ga=Ra("fshFormGroup","Quick Create Attack Group",t),xa=Ra("fshQuickBuff","Open Quick Buff Popup",t),Ta=Ra("fshRealmMap","Open Realm Map",t),Ea=Ra("fshTempleOne","Search map in Ultimate FSG",t),function(e){if(y("showSpeakerOnWorld")){const t=y("playNewMessageSound")
ja=$a({prefVal:t,checkId:"fshSoundCheck",onClass:"soundOn",onTip:"Turn Off Sound when you have a new log message",offClass:"soundOff",offTip:"Turn On Sound when you have a new log message",worldName:e})}}(Sa),function(t){const a=e.huntingMode
Pa=$a({prefVal:a,checkId:"fshHuntCheck",onClass:"huntOn",onTip:"Hunting mode is ON",offClass:"huntOff",offTip:"Hunting mode is OFF",worldName:t})}(Sa)}const _a=[[e=>e===ja,function(){d("playNewMessageSound",!y("playNewMessageSound"))}],[e=>e===Pa,function(){e.huntingMode=!e.huntingMode,d("huntingMode",e.huntingMode)}]],qa=[[e=>e===Ga,function(e){V(e),GameData.doAction(12,401,{},0)}],[e=>e===xa,function(){Pe(Me())}],[e=>e===Ta,function(){window.open(`${N+S}map`,"fsMap")}],[e=>e===Ea,function(){const e=GameData.realm()
window.open(`${H}realms${S}view&realm_id=${e.id}`,"mapUfsg")}]]
function Ka(){Sa||(Sa=t({className:"fshCurveContainer",id:"fshWorldButtonContainer"}),Fa(),s(Sa,xe(qa)),h(Sa,"change",xe(_a)),Te(Sa,a("worldCoord")))}function Ya(e,t){Ha&&t.b.minlevel&&(Va(),n(t.b.minlevel,Ha))}function za(e,t){Ba&&n(t.b,Ba)}function Ua(e){return!e||!e.response||!e.response.data}let Qa,Wa,Ja,Xa,Za,en,tn,an,nn,rn,on,sn,un,ln,cn,fn,dn,mn,hn,pn,bn,gn,vn,yn,kn,wn,Cn,Ln,Dn,An,Mn,Vn,Nn,$n,Sn
function Hn(e){return e.player_name}function Bn(e){!function(e){Xa=e.defenders.map(Hn)}(e),Qa?B("",Qa):Qa=t({className:"body"}),function(e){Wa=t({className:"fshFloatLeft fshRelicLeftDiv"}),r(Qa,Wa),e.is_owner&&r(Wa,Re(Xa)),Ja=Ge({className:"custombutton",textContent:"Fetch Stats"}),r(Wa,Ja)}(e)
const n=a("dialog-relic")
r(n,Qa)}const Gn=[e=>"lastUpdate"!==e,e=>!Xa.includes(e),e=>Za[e].last_login,e=>Number(Za[e].last_login)<en,e=>Number(Za[e].last_login)>tn,e=>Za[e].level<400||Za[e].level>421,e=>Za[e].level<441||Za[e].level>450]
function xn(e,t){return t(e)}function Tn(e){return Gn.every(o(xn,e))}function En(e){return`<a href="${x}${Za[e].id}">${e}</a>`}function jn(e){Za=e,en=T-120,tn=T-604800
const t=G(Za).filter(Tn).map(En)
i(Qa,`<div class="fshFloatLeft fshRelicLowDiv"><table class="relicT"><thead><tr><th>${t.length.toString()} Offline guild members not at relic:</th></tr></thead><tbody><tr><td>${t.join(" ")}</td></tr></tbody></table></div>`)}function Pn(e){Ye(Ja)
const n=y("hideRelicOffline")
e.is_owner&&!n&&Ke(!0).then(jn),i(Wa,'<table class="relicT"><thead><tr><th colspan="2">Processing</th></tr></thead><tbody><tr><td class="fshGreen" colspan="2" id="ProcessingStatus">Parsing defending guild stats ...</td></tr></tbody><thead><tr><th colspan="2">Assumptions</th></tr></thead><tbody><tr><td colspan="2" class="fshGrey">Above calculations include Constitution, Fortitude, Nightmare Visage, Chi Strike, Sanctuary, Terrorize and Flinch bonus calculations (in that order) on both the defending group and attacking group.</td></tr></tbody></table>'),Sn=a("ProcessingStatus")
const o=t({className:"fshFloatLeft fshRelicMidDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Defending Guild Stats</th></tr></thead><tbody><tr><td>Relic Count:</td><td id="relicCount">0</td></tr><tr><td>Lead Defender Bonus:</td><td id="LDPercentage">0</td></tr><tr><td>Lead Defender Cloaked:</td><td id="LDCloaked">No</td></tr></tbody><thead><tr><th colspan="2">Other Defender Stats</th></tr></thead><tbody><tr><td>Raw Attack:</td><td class="fshGrey" id="attackValue">0</td></tr><tr><td>Attack w/ buffs:</td><td id="attackValueBuffed">0</td></tr><tr><td>Raw Defense:</td><td class="fshGrey" id="defenseValue">0</td></tr><tr><td>Defense w/buffs:</td><td id="defenseValueBuffed">0</td></tr><tr><td>Raw Armor:</td><td class="fshGrey" id="armorValue">0</td></tr><tr><td>Armor w/ buffs:</td><td id="armorValueBuffed">0</td></tr><tr><td>Raw Damage:</td><td class="fshGrey" id="damageValue">0</td></tr><tr><td>Damage w/ buffs:</td><td id="damageValueBuffed">0</td></tr><tr><td>Raw HP:</td><td class="fshGrey" id="hpValue">0</td></tr><tr><td>HP w/ buffs:</td><td id="hpValueBuffed">0</td></tr><tr><td>Cloaked:</td><td id="defendersCloaked">0</td></tr><tr><td>Processed:</td><td id="defendersProcessed">0</td></tr></tbody></table>'})
r(Qa,o),an=a("relicCount"),nn=a("LDPercentage"),rn=a("LDCloaked"),on=a("attackValue"),sn=a("attackValueBuffed"),un=a("defenseValue"),ln=a("defenseValueBuffed"),cn=a("armorValue"),fn=a("armorValueBuffed"),dn=a("damageValue"),mn=a("damageValueBuffed"),hn=a("hpValue"),pn=a("hpValueBuffed"),bn=a("defendersCloaked"),gn=a("defendersProcessed")
const s=t({className:"fshFloatLeft fshRelicRightDiv",innerHTML:'<table class="relicT relicS"><thead><tr><th colspan="2">Adjusted defense values</th></tr></thead><tbody><tr><td>DC225:</td><td id="DC225">0</td></tr><tr><td>DC175:</td><td id="DC175">0</td></tr><tr><td colspan="2">&nbsp;</td></tr></tbody><thead><tr><th colspan="2">Attacking Group Stats</th></tr></thead><tbody><tr><td>Raw Group Attack:</td><td class="fshGrey" id="GroupAttack"></td></tr><tr><td>Group Attack w/ buffs:</td><td id="GroupAttackBuffed"></td></tr><tr><td>Raw Group Defense:</td><td class="fshGrey" id="GroupDefense"></td></tr><tr><td>Group Defense w/ buffs:</td><td id="GroupDefenseBuffed"></td></tr><tr><td>Raw Group Armor:</td><td class="fshGrey" id="GroupArmor"></td></tr><tr><td>Group Armor w/ buffs:</td><td id="GroupArmorBuffed"></td></tr><tr><td>Raw Group Damage:</td><td class="fshGrey" id="GroupDamage"></td></tr><tr><td>Group Damage w/ buffs:</td><td id="GroupDamageBuffed"></td></tr><tr><td>Raw Group HP:</td><td class="fshGrey" id="GroupHP"></td></tr><tr><td>Group HP w/ buffs:</td><td id="GroupHPBuffed"></td></tr></tbody></table>'})
r(Qa,s),vn=a("DC225"),yn=a("DC175"),kn=a("GroupAttack"),wn=a("GroupAttackBuffed"),Cn=a("GroupDefense"),Ln=a("GroupDefenseBuffed"),Dn=a("GroupArmor"),An=a("GroupArmorBuffed"),Mn=a("GroupDamage"),Vn=a("GroupDamageBuffed"),Nn=a("GroupHP"),$n=a("GroupHPBuffed")}let In
function On(e){const t=E(e),a=j('#pCC img[src*="/relics/"]',t).length
var r
n(a,an),In=1===(r=a)?1.5:we(1-r/10,2),n(`${String(100*In)}%`,nn)}function Rn(e,t){return e>10*t||e<t?e:10*t}const Fn=[["levelValue","level"],["attackValue","attack"],["attackBonus","bonus_attack"],["defenseValue","defense"],["defenseBonus","bonus_defense"],["armorValue","armor"],["armorBonus","bonus_armor"],["damageValue","damage"],["damageBonus","bonus_damage"],["hpValue","hp"],["hpBonus","bonus_hp"],["killStreakValue","killstreak"]]
function _n(e,t,a){e[a[0]]=Number(t[a[1]])}const qn=[["counterAttackLevel","Counter Attack"],["doublerLevel","Doubler"],["deathDealerLevel","Death Dealer"],["darkCurseLevel","Dark Curse"],["holyFlameLevel","Holy Flame"],["constitutionLevel","Constitution"],["sanctuaryLevel","Sanctuary"],["flinchLevel","Flinch"],["nightmareVisageLevel","Nightmare Visage"],["superEliteSlayerLevel","Super Elite Slayer"],["fortitudeLevel","Fortitude"],["chiStrikeLevel","Chi Strike"],["terrorizeLevel","Terrorize"],["barricadeLevel","Barricade"],["reignOfTerrorLevel","Reign Of Terror"],["anchoredLevel","Anchored"],["severeConditionLevel","Severe Condition"],["entrenchLevel","Entrench"],["cloakLevel","Cloak"]]
function Kn(e,t,a){e[a[0]]=t[a[1]]||0}function Yn(e){const t=Ue(e._skills),a={}
return function(e,t){Fn.forEach(o(_n,e,t))}(a,e),function(e,t){qn.forEach(o(Kn,e,t))}(a,t),a.superEliteSlayerMultiplier=we(.002*a.superEliteSlayerLevel,2),ze(a.armorValue)&&function(e){e.attackValue=Rn(e.attackBonus,e.levelValue),e.defenseValue=Rn(e.defenseBonus,e.levelValue),e.armorValue=Rn(e.armorBonus,e.levelValue),e.damageValue=Rn(e.damageBonus,e.levelValue),e.hpValue=e.hpBonus}(a),a}let zn,Un,Qn,Wn,Jn,Xn,Zn,er,tr,ar,nr,rr,or,ir
function sr(e){return Math.round(e*In)}function ur(){$t(zn,on),$t(Qn,un),$t(Wn,cn),$t(Jn,dn),$t(Zn,hn),n(er,bn),tr+=1,n(tr,gn)}function lr(e){const t=function(e){return Math.ceil(nr.attack*(.0025*P(e["Nightmare Visage"],0)))}(e)
nr.attack-=t,function(){const e=Math.ceil(nr.attack*ar.flinchLevel*.001)
$t(nr.attack-e,wn)}()
const a=function(e){return Math.ceil(nr.defense*(1+.001*P(e.Constitution,0)))}(e)
$t(a+t,Ln),function(e){$t(nr.armor+Math.floor(nr.armor*P(e.Sanctuary,0)*.001),An)}(e)
const n=function(e,t){return Math.ceil(t*P(e.Fortitude,0)*.001)}(e,a)
!function(e){$t(nr.hp+e,$n)}(n),function(e,t){const a=Math.ceil((nr.hp+t)*P(e["Chi Strike"],0)*.001),n=Math.ceil(nr.damage*ar.terrorizeLevel*.001)
$t(nr.damage+a-n,Vn)}(e,n)}function cr(){n("Processing attacking group stats ... ",Sn),rr&&(nr.attack-=rr.attack,nr.defense-=rr.defense,nr.armor-=rr.armor,nr.damage-=rr.damage,nr.hp-=rr.hp),$t(nr.attack,kn),$t(nr.defense,Cn),$t(nr.armor,Dn),$t(nr.damage,Mn),$t(nr.hp,Nn)
const e=Ue(GameData.player().buffs)
lr(e),function(e){const t=Math.ceil(Un*P(e.Flinch,0)*.001)
$t(Un-t,sn)}(e),function(e){const t=Math.ceil(Xn*P(e.Terrorize,0)*.001)
$t(Xn-t,mn)}(e),n("Done.",Sn)}function fr(){n("Processing defending guild stats ... ",Sn),zn+=sr(ar.attackValue),Qn+=sr(ar.defenseValue),Wn+=sr(ar.armorValue),Jn+=sr(ar.damageValue),Zn+=sr(ar.hpValue),ur()
const e=Math.ceil(zn*(.0025*ar.nightmareVisageLevel))
!function(e){Un=zn-e,$t(Un,sn)}(e)
const t=Math.ceil(Qn*(1+.001*ar.constitutionLevel))
!function(e,t){const a=t+e
$t(a,ln),$t(Math.ceil(.55*a),vn),$t(Math.ceil(.65*a),yn)}(e,t),$t(Wn+Math.floor(Wn*ar.sanctuaryLevel*.001),fn)
const a=Zn+function(e){return Math.ceil(e*ar.fortitudeLevel*.001)}(t)
$t(a,pn),function(e){Xn=Jn+Math.ceil(e*ar.chiStrikeLevel*.001),$t(Xn)}(a),0!==ar.cloakLevel&&n("Yes",rn),GameData.player().hasGroup&&nr?cr():n("Done.",Sn)}function dr(e){const t=Yn(e)
zn+=Math.round(t.attackValue*I),Qn+=Math.round(t.defenseValue*I),Wn+=Math.round(t.armorValue*I),Jn+=Math.round(t.damageValue*I),Zn+=Math.round(t.hpValue*I),0!==t.cloakLevel&&(er+=1),ur()}function mr(e){ar=Yn(e)}function hr(e){nr=e}function pr(e){rr=e}function br(e){n(e.message,Sn)}function gr(e){const t=E(e),a=b('#pCC a[href*="confirmDisband"]',t)
if(!a)return
const n=function(e){const t=e.previousElementSibling.href,a=[Fe(t).then(hr)]
return function(e){return-1!==e.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML.indexOf('"#000099"')}(e)&&a.push(_e().then(pr)),a}(a)
return Ie(n)}function vr(e,t){return 0===t?qe(e).then(mr):qe(e).then(dr).catch(br)}function yr(){let e=[F({cmd:"guild",subcmd:"view",guild_id:or.controlled_by.guild_id}).then(On)]
return GameData.player().hasGroup&&e.push(F({cmd:"guild",subcmd:"groups"}).then(gr)),e=e.concat(Xa.map(vr)),e}function kr(){Pn(or),zn=0,Qn=0,Wn=0,Jn=0,Zn=0,er=0,tr=0
const e=yr()
Oe(e,fr)}function wr(e,t){Ua(t)||(or=t.response.data,or.defenders.length>0&&(Bn(or),R(Ja,"click",kr)))}function Cr(e){$("#statbar-gold").css("background-color",e)}function Lr(){$("#HelperSendTotal").html(Le(y("currentGoldSentTotal"))),Number(GameData.player().gold)>ir?Cr("red"):Cr("inherit")}function Dr(){ir=y("goldAmount"),$("#statbar-gold-tooltip-general").append(`<dt class="stat-gold-sendTo">Send To:</dt><dd id="HelperSendTo">${y("goldRecipient")}</dd><dt class="stat-gold-sendAmt">Amount:</dt><dd id="HelperSendAmt">${Le(ir)}</dd><dt class="stat-gold-sendTo">Send?</dt><dd><input id="HelperSendGold" value="Send!" class="custombutton" type="submit"><input type="hidden" id="xc" value=""</dd><dt class="stat-gold-sendTotal">Total Sent:</dt><dd id="HelperSendTotal">${Le(y("currentGoldSentTotal"))}</dd>`),$("#HelperSendGold").on("click",K),Lr(),$.subscribe(Y,Lr)}function Ar(e){return z({cache:!1,url:"fetchdata.php",data:U(e,{fshrnd:Qe()}),dataType:"json"})}const Mr=[]
function Vr(e){return Ua(e)||Mr.push(e),e}function Nr(e,t){return e===Number(t.response.data.id)}function $r(e,t){e(t)}function Sr(e,t){const a=Mr.find(o(Nr,e))
return a?function(e){return new Promise((t=>{Q(3,$r,[t,e])}))}(a):Ar({a:1,id:e,passback:t}).then(Vr)}let Hr,Br,Gr,xr,Tr,Er
function jr(e,t){return Je(W(t,e))}function Pr(){var e
Hr=GameData.player().level,e=a("statbar-character-tooltip-stats"),Gr=jr(e,te),Br=jr(e,J),Tr=jr(e,X),xr=jr(e,Z),Er=jr(e,ee)}function Ir(e){return`<tr><td colspan="2">${e.name}:</td><td colspan="2">${e.value}</td></tr>`}function Or(e,t,a){return function(e){return`<table><tr><td><img src="${v}creatures/${e.image_id}.png" height="200" width="200"></td><td rowspan="2"><table width="400"><tr><td class="header" colspan="4" class="fshCenter">Statistics</td></tr>`}(e)+function(e,t){return`<tr><td>Class:&nbsp;</td><td width="40%">${e.creature_class}</td><td>Level:&nbsp;</td><td width="40%">${e.level} (your level:<span class="${t}">${Hr}</span>)</td></tr>`}(e,a)+function(e){return`<tr><td>Attack:&nbsp;</td><td width="40%">${e.attack} (your defense:<span class="fshYellow">${Br}</span>)</td><td>Defense:&nbsp;</td><td width="40%">${e.defense} (your attack:<span class="fshYellow">${Gr}</span>)</td></tr>`}(e)+function(e){return`<tr><td>Armor:&nbsp;</td><td width="40%">${e.armor} (your damage:<span class="fshYellow">${xr}</span>)</td><td>Damage:&nbsp;</td><td width="40%">${e.damage} (your armor:<span class="fshYellow">${Tr}</span>)</td></tr>`}(e)+function(e,t){return`<tr><td>HP:&nbsp;</td><td width="40%">${e.hp} (your HP:<span class="fshYellow">${Er}</span>)(1H: <span class="fshRed">${t}</span>)</td><td>Gold:&nbsp;</td><td width="40%">${e.gold}</td></tr>`}(e,t)+'<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Enhancements</td></tr>'+function(e){return 0===e.enhancements.length?'<tr><td colspan="4">[no enhancements]</td></tr>':e.enhancements.map(Ir).join("")}(e)+function(e){return`<tr><td colspan="4" height="5"></td></tr><tr><td class="header" colspan="4" class="fshCenter">Description</td></tr><tr><td colspan="4">${e.description}</td></tr><tr><td colspan="4" height="5"></td></tr></table></td></tr><tr><td class="fshCenter"><b>${e.name}</b></td></tr></table>`}(e)}function Rr(t){if(!Ua(t))return function(t){const a=Math.ceil(t.hp*e.hpVariable+t.armor*e.generalVariable)
let n="fshYellow"
return Pr(),Hr>t.level&&(n="fshRed"),Or(t,a,n)}(t.response.data)}const Fr=["verb","view","tip-static"]
function _r(e,t){const a=Rr(t)
e.set("content.text",a)}function qr(e,t,a){return Sr(GameData.actions()[e].data.id,e).then(o(_r,a)),"Loading..."}function Kr(e,t){g("NewMap","CreatureInfo")
const a=ne((n=t).parentNode.children).indexOf(n)
var n,r,i
e.classList.add("fshTip"),r=e,i=o(qr,a),$(r).qtip({overwrite:!0,show:{event:"mouseover",ready:!0},style:{classes:"qtip-tipsy qtip-custom"},position:{my:"center right",at:"center left",effect:!1,viewport:$(window)},content:{text:i},hide:{effect:!1}})}function Yr(t){if(!e.showCreatureInfo)return
const{target:a}=t,n=a.parentNode.parentNode.parentNode;(function(e,t){return We(Fr,e)&&!ae("fshTip",e)&&ae("creature",t)})(a,n)&&Kr(a,n)}function zr(){return Xe({subcmd:"scouttower"})}function Ur(e){const t=re(e[1])
return"No active cooldown"===t?0:Math.ceil((function(e){const t=e.split(/[: /[]/)
return new Date(Number(t[4]),oe.indexOf(t[3]),Number(t[2]),Number(t[0]),Number(t[1]))}(t.slice(16))-ie)/1e3)}function Qr(e){const t=e[0].cells[0].children[0]
return{base_id:Number(t.src.match(/s\/(\w+)\.p/)[1].slice(0,-32)),name:t.title}}function Wr(e){return{cooldown:Ur(e),creature:Qr(e),kills:Number(re(e[0].cells[3]))}}function Jr(e){const t=re(e[0].cells[1])
if("n/a"!==t){const a=re(e[0].cells[2]).match(/(\d+)\/(\d+)/)
return{realm:t,current_hp:Number(a[1]),max_hp:Number(a[2])}}}function Xr(e){const t=e[2].cells[0].children
if(1===t.length){return{contributors:et(t[0].rows,3,0).map((e=>({kills:Number(re(e.cells[1])),player:{name:re(e.cells[0])}})))}}}function Zr(e){return{...Wr(e),...Jr(e),...Xr(e)}}function eo(e){const t=E(e),a=b('table[width="500"]',t)
if(!a)return{s:!1}
const n=ne(a.rows).filter(((e,t,a)=>0!==t&&t<a.length-1&&(t-1)%6<3))
return{r:Ze(3,n).map(Zr),s:!0}}function to(){return F({cmd:"guild",subcmd:"scouttower"}).then(eo)}function ao(e,t){const a=e.insertCell(-1)
return[a.colSpan]=t,t[2]&&(a.className="header"),r(a,t[1]),a}function no(e,t,a){const n=e.insertRow(-1)
return a&&(n.className="fshBlue"),function(e,t){t.forEach(o(ao,e))}(n,t),n}function ro(e,t){no(e,t[0],t[1])}function oo(e,t){t.forEach(o(ro,e))}let io,so,uo,lo,co,fo,mo,ho,po,bo,go,vo,yo,ko,wo,Co,Lo,Do,Ao,Mo,Vo,No,$o,So,Ho,Bo,Go,xo
function To(){so=_t("Current"),uo=_t("Kills"),lo=_t("Member"),co=_t("% of Total"),fo=_t("Status"),mo=_t("Titan HP"),ho=_t("Total"),po=_t("Your Guild")}function Eo(){for(;Lo.rows.length>7;)Lo.deleteRow(7)}function jo(){const e=ye()
return r(e,bo),ke(e,"/"),r(e,go),e}function Po(e){const t=ye()
return r(t,e),ke(t,"%"),t}function Io(){Ao=null,Do&&!ae("fshHide",Do)&&(ve(Do,!0),n("",bo),n("",go),n("",vo),n("",yo),n("",ko),B("",wo),B("",Co),Eo())}function Oo(e){return 0===e.type&&(Ao=e.base_creature_id,!0)}function Ro(){if(Do)ve(Do,!1)
else{const e=a("actionContainer")
Do=t({className:"fshActionBox titanInfo"}),bo=ye(),go=ye(),vo=ye(),yo=ye(),ko=ye(),wo=ye(),Co=ye(),Lo=rt({className:"fshCenter"}),To(),oo(Lo,[[[[2,mo,!0],[4,po,!0]]],[[[2,jo()],[4,vo]]],[[[2,so,!0],[4,Po(yo)]],!0],[[[2,ho,!0],[4,Po(ko)]],!0],[[[2,fo,!0],[4,wo]],!0],[[[6,Co]]],[[[2,lo,!0],[2,uo,!0],[2,co,!0]]]]),r(Do,Lo),r(e,Do)}}function Fo(e){return e<=0?'<span class="fshGreen cooldown">No active cooldown</span>':`<span class="fshMaroon cooldown">Cooldown until: ${function(e){const t=new Date(ie+1e3*e)
return`${nt(t.getHours())}:${nt(t.getMinutes())} ${nt(t.getDate())}/${oe[t.getMonth()]}/${t.getFullYear()}`}(e)}</span>`}function _o(e){return Ce(tt(e.max_hp-e.current_hp,e.kills),2)}function qo(e){return Ce(100*e.kills/e.max_hp,2)}function Ko(e){[[e.current_hp,bo],[e.max_hp,go],[e.kills,vo],[_o(e),yo],[qo(e),ko]].forEach((([e,t])=>{n(e,t)})),B(function(e){return at(e.kills,e.max_hp,e.current_hp)}(e),wo),B(Fo(e.cooldown),Co)}function Yo(e,t){return[[[2,_t(t.player.name)],[2,_t(t.kills.toString())],[2,_t(`${Ce(100*t.kills/e.kills,2)}%`)]]]}function zo(e){return e.realm&&e.creature.base_id===Ao&&e.realm===io}function Uo(e){const t=e.find(zo)
t&&(Ko(t),function(e){if(Eo(),!e.contributors)return
const t=e.contributors.map(o(Yo,e))
oo(Lo,t)}(t))}function Qo(t){return e.showTitanInfo&&Ve(t)&&t.some(Oo)}function Wo(e,t){(function(e){return e.s&&Ve(e.r)})(t)&&(Uo(t.r),Qo(GameData.realm().dynamic)?Mo=window.setTimeout(e,3e4):Io())}function Jo(){se(zr,to).then(o(Wo,Jo))}function Xo(e){Mo&&(window.clearTimeout(Mo),Mo=null),Qo(e)?(Ro(),Jo()):Io()}function Zo(e){var t
e.dynamic&&(t=e.name,io=t,Xo(e.dynamic))}function ei(e,t){(function(e){return e.realm&&e.realm.name})(t)&&Zo(t.realm)}function ti(e){const t=e.response.response,a=e.response.msg
let n
if(0!==t){const e=a.indexOf("<")
n=-1!==e?a.substring(0,e):a}else n=`You purchased ${e.response.data.name} for ${Le(e.response.data.cost)} gold.`
i(Go,`${n}<br>`)}function ai(){GameData.doAction(14,3,{id:Vo.id,item_id:Vo.itemId},0),$o.close()}function ni(){const e=ot(Ho.value)
if(!e)return
const t=[]
for(let a=1;a<e;a+=1)t.push(Ar({a:14,d:0,id:Vo.id,item_id:Vo.itemId}).then(ti))
Oe(t,ai)}function ri(){So?n("",Go):(So=t({className:"fshClear",textContent:"Select how many to quick-buy:"}),Ho=Ee({id:"buyAmount",className:"fshNumberInput",min:1,max:99,value:1,type:"number"}),r(So,Ho),Bo=Ge({textContent:"Quick-buy"}),s(Bo,ni),r(So,Bo),Go=t(),r(So,Go),r(No,So))}function oi(e,t){Vo=t,No=No||a("shopDialogConfirm"),No&&($o=$o||$(No).data("hcsWorldDialogShopConfirm"),$o&&ri())}function ii(e){xo[e.name]?xo[e.name].seen&&(xo[e.name].seen+=1):(xo[e.name]={seen:1},function(e,t){t.creature_class=e.creature_class,t.image_id=e.image_id,t.level=Number(e.level),t.type=e.type}(e,xo[e.name]))}function si(e,t,a){return t?e(t,a):a}function ui(e,t){const a=e||{}
return a.min=si(Math.min,a.min,t),a.max=si(Math.max,a.max,t),a}const li=["attack","armor","damage","defense","hp"]
function ci(e,t,a){const n=ui(t[a],Number(e[a]));(function(e,t){return!e||e.min!==t.min||e.max!==t.max})(t[a],n)&&(t[a]=n)}function fi(e,t){e[t.name]=ui(e[t.name],Number(t.value))}function di(e){xo||(xo={}),ii(e),function(e,t){li.forEach(o(ci,e,t))}(e,xo[e.name]),function(e,t){(function(e){return e.enhancements&&e.enhancements.length>0})(e)&&(t.enhancements=t.enhancements||{},e.enhancements.forEach(o(fi,t.enhancements)))}(e,xo[e.name]),$e("fsh_monsterLog",xo)}function mi(e){xo=e||{}}const hi=[]
function pi(t){Ua(t)||(g("NewMap","MonsterLog"),function(t){e.showMonsterLog&&di(t)}(t.response.data))}function bi(e,t){return e.id===t.id}function gi(e,t){6!==e.type||function(e){if(hi.find(o(bi,e.data)))return!0
hi.push(e.data)}(e)||Sr(e.data.id,t).then(pi)}function vi(){e.showMonsterLog&&GameData.actions().forEach(gi)}function yi(e){const t=E(e),a=it(t)
return{r:{attributes:[{value:a.attack},{value:a.defense},{value:a.armor},{value:a.damage},{value:a.hp}]}}}function ki(e){return F({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:e}).then(yi)}function wi(e){return Xe(U({subcmd:"groups"},e))}function Ci(e){return wi({subcmd2:"viewstats",group_id:e})}function Li(){return wi({subcmd2:"view"})}function Di(e){const t=E(e),a=b('#pCC img[src$="disband.png"]',t)
if(!a)return{}
return{r:[{id:Number(a.parentNode.href.match(/\((\d+)\)/)[1]),members:[{name:Me()}]}]}}function Ai(){return F({cmd:"guild",subcmd:"groups"}).then(Di)}function Mi(e){return e.numberOfCreatureHitsTillDead-e.numberOfHitsRequired<=1?", dies on miss":", survives a miss"}const Vi=[[e=>"-"===e.playerHits&&"-"===e.creatureHits,()=>"Unresolved"],[e=>"-"===e.playerHits,()=>"Player dies"],[e=>1===e.playerHits,e=>`Player 1 hits${Mi(e)}`],[e=>e.playerHits>1,e=>`Player > 1 hits${Mi(e)}`]]
function Ni(e,t){return t[0](e)}function $i(e){e.playerHits=function(e){return"-"===e.numberOfCreatureHitsTillDead?e.numberOfHitsRequired:function(e){return"-"===e.numberOfHitsRequired||e.numberOfHitsRequired>e.numberOfCreatureHitsTillDead}(e)?"-":e.numberOfHitsRequired}(e),e.creatureHits=function(e){return"-"===e.numberOfHitsRequired?e.numberOfCreatureHitsTillDead:function(e){return"-"===e.numberOfCreatureHitsTillDead||e.numberOfCreatureHitsTillDead>e.numberOfHitsRequired}(e)?"-":e.numberOfCreatureHitsTillDead}(e),e.fightStatus=function(e){const t=Vi.find(o(Ni,e))
return t?t[1](e):"Unknown"}(e)}function Si(e){e.creatureHitByHowMuch>=0?function(e){const t=e.generalVariable*e.creature.damage
t<e.overallArmorValue?e.numberOfCreatureHitsTillDead=e.overallHPValue:e.numberOfCreatureHitsTillDead=Math.ceil(e.overallHPValue/(t-e.overallArmorValue))}(e):e.numberOfCreatureHitsTillDead="-"}function Hi(e){!function(e){const t=function(e){return e.callback.groupExists?e.callback.groupArmorValue:e.player.armorValue}(e)
e.overallArmorValue=t+Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}(e),function(e){e.player.sanctuaryLevel>0&&(e.extraNotes+=`Sanc Bonus Armor = ${Math.floor(e.player.armorValue*e.player.sanctuaryLevel*.001)}<br>`)}(e),function(e){e.terrorizeEffect=Math.floor(e.creature.damage*e.player.terrorizeLevel*.001)}(e),function(e){e.player.terrorizeLevel>0&&(e.extraNotes+=`Terrorize Creature Damage Effect = ${-1*e.terrorizeEffect}<br>`)}(e),e.creature.damage-=e.terrorizeEffect,function(e){e.creatureDamageDone=Math.ceil(e.generalVariable*e.creature.damage-e.overallArmorValue+e.overallHPValue)}(e),Si(e)}function Bi(e){const t=function(e){return e.callback.groupExists?e.callback.groupAttackValue:e.player.attackValue}(e)
e.player.darkCurseLevel>0&&(e.extraNotes+=`DC Bonus Attack = ${Math.floor(e.creature.defense*e.player.darkCurseLevel*.002)}<br>`),e.nightmareVisageAttackMovedToDefense=Math.floor((t+e.counterAttackBonusAttack)*e.player.nightmareVisageLevel*.0025),e.player.nightmareVisageLevel>0&&(e.extraNotes+=`NMV Attack moved to Defense = ${e.nightmareVisageAttackMovedToDefense}<br>`),e.overallAttackValue=t+e.counterAttackBonusAttack-e.nightmareVisageAttackMovedToDefense,e.hitByHowMuch=function(e){const t=e.creature.defense-e.creature.defense*e.player.darkCurseLevel*.002
return 3===e.combatEvaluatorBias?e.overallAttackValue-Math.ceil(t)-50:e.overallAttackValue-Math.ceil(e.attackVariable*t)}(e)}function Gi(e){e.lowestCALevelToStillHit=Math.max(Math.ceil((e.counterAttackBonusAttack-e.hitByHowMuch+1)/e.player.attackValue/.0025),0),e.lowestCALevelToStillKill=Math.max(Math.ceil((e.counterAttackBonusDamage-e.damageDone+1)/e.player.damageValue/.0025),0)}function xi(e){Gi(e),e.lowestFeasibleCALevel=Math.max(e.lowestCALevelToStillHit,e.lowestCALevelToStillKill),e.extraNotes+=`Lowest CA to still 1-hit this creature = ${e.lowestFeasibleCALevel}<br>`,0!==e.lowestFeasibleCALevel&&function(e){e.extraAttackAtLowestFeasibleCALevel=Math.floor(.0025*e.player.attackValue*e.lowestFeasibleCALevel),e.extraDamageAtLowestFeasibleCALevel=Math.floor(.0025*e.player.damageValue*e.lowestFeasibleCALevel),e.extraNotes+=`Extra CA Att/Dam at this lowered CA level = ${e.extraAttackAtLowestFeasibleCALevel} / ${e.extraDamageAtLowestFeasibleCALevel}<br>`}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel=function(e){return e.player.counterAttackLevel>0?Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.lowestFeasibleCALevel):0}(e),e.extraStaminaPerHitAtLowestFeasibleCALevel<e.extraStaminaPerHit?e.extraNotes+=`Extra Stam Used at this lowered CA level = ${e.extraStaminaPerHitAtLowestFeasibleCALevel}<br>`:e.extraNotes+="No reduction of stam used at the lower CA level<br>"}function Ti(e){(function(e){return e.player.counterAttackLevel>0&&1===e.numberOfHitsRequired})(e)&&xi(e),function(e){return"-"===e.numberOfHitsRequired||1!==e.numberOfHitsRequired}(e)&&function(e){Gi(e),function(e){e.lowestCALevelToStillHit>175?e.extraNotes+="Even with CA175 you cannot hit this creature<br>":0!==e.lowestCALevelToStillHit&&(e.extraNotes+=`You need a minimum of CA${e.lowestCALevelToStillHit} to hit this creature<br>`)}(e),function(e){e.lowestCALevelToStillKill>175?e.extraNotes+="Even with CA175 you cannot 1-hit kill this creature<br>":0!==e.lowestCALevelToStillKill&&(e.extraNotes+=`You need a minimum of CA${e.lowestCALevelToStillKill} to 1-hit kill this creature<br>`)}(e)}(e)}function Ei(e){!function(e){const t=function(e){return e.callback.groupExists?e.callback.groupHPValue:e.player.hpValue}(e),{fortitudeLevel:a}=e.player
e.fortitudeExtraHPs=Math.floor(t*a*.001),a>0&&(e.extraNotes+=`Fortitude Bonus HP = ${e.fortitudeExtraHPs}<br>`),e.overallHPValue=t+e.fortitudeExtraHPs}(e),function(e){const{chiStrikeLevel:t}=e.player
e.chiStrikeExtraDamage=Math.floor(e.overallHPValue*t*.001),t>0&&(e.extraNotes+=`Chi Strike Bonus Damage = ${e.chiStrikeExtraDamage}<br>`)}(e)
const t=function(e){return e.callback.groupExists?e.callback.groupDamageValue:e.player.damageValue}(e)
if(e.overallDamageValue=t+e.deathDealerBonusDamage+e.counterAttackBonusDamage+e.holyFlameBonusDamage+e.chiStrikeExtraDamage,e.damageDone=Math.floor(e.overallDamageValue-(e.generalVariable*e.creature.armor+e.hpVariable*e.creature.hp)),e.hitByHowMuch>0){let t=1
e.overallDamageValue>=e.generalVariable*e.creature.armor&&(t=e.overallDamageValue-e.generalVariable*e.creature.armor),e.numberOfHitsRequired=Math.ceil(e.hpVariable*e.creature.hp/t)}else e.numberOfHitsRequired="-"}function ji(e){return e.callback.groupExists?e.callback.groupDefenseValue:e.player.defenseValue}function Pi(e){e.overallDefenseValue=ji(e)+Math.floor(ji(e)*e.player.constitutionLevel*.001)+e.nightmareVisageAttackMovedToDefense,function(e){e.player.constitutionLevel>0&&(e.extraNotes+=`Constitution Bonus Defense = ${Math.floor(ji(e)*e.player.constitutionLevel*.001)}<br>`)}(e),function(e){e.player.flinchLevel>0&&(e.extraNotes+=`Flinch Bonus Attack Reduction = ${Math.floor(e.creature.attack*e.player.flinchLevel*.001)}<br>`)}(e),e.creatureHitByHowMuch=Math.floor(e.attackVariable*e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue),3===e.combatEvaluatorBias&&(e.creatureHitByHowMuch=Math.floor(e.creature.attack-e.creature.attack*e.player.flinchLevel*.001-e.overallDefenseValue-50))}function Ii(e){e.extraNotes="",function(e){e.player.superEliteSlayerLevel>0&&(e.extraNotes+=`SES Stat Reduction Multiplier = ${e.player.superEliteSlayerMultiplier}<br>`)}(e),function(e){e.holyFlameBonusDamage=0,"Undead"===e.creature.class&&(e.holyFlameBonusDamage=Math.max(Math.floor((e.player.damageValue-e.creature.armor)*e.player.holyFlameLevel*.002),0),e.player.holyFlameLevel>0&&(e.extraNotes+=`HF Bonus Damage = ${e.holyFlameBonusDamage}<br>`))}(e),function(e){e.deathDealerBonusDamage=Math.floor(e.player.damageValue*(Math.min(.01*Math.floor(e.player.killStreakValue/5)*e.player.deathDealerLevel,20)/100))}(e),function(e){e.counterAttackBonusAttack=Math.floor(.0025*e.player.attackValue*e.player.counterAttackLevel),e.counterAttackBonusDamage=Math.floor(.0025*e.player.damageValue*e.player.counterAttackLevel)}(e),function(e){e.extraStaminaPerHit=0,e.player.counterAttackLevel>0&&(e.extraStaminaPerHit=Math.ceil(.0025*(1+e.player.doublerLevel/50)*e.player.counterAttackLevel))}(e),function(e){e.player.deathDealerLevel>0&&(e.extraNotes+=`DD Bonus Damage = ${e.deathDealerBonusDamage}<br>`)}(e),function(e){e.player.counterAttackLevel>0&&(e.extraNotes+=`CA Bonus Attack/Damage = ${e.counterAttackBonusAttack} / ${e.counterAttackBonusDamage}<br>CA Extra Stam Used = ${e.extraStaminaPerHit}<br>`)}(e)}let Oi,Ri,Fi,_i,qi,Ki,Yi,zi,Ui,Qi
function Wi(){return wa(Ri)?"Remove from do not kill list":"Add to the do not kill list"}function Ji(){n(Wi(),Fi)}function Xi(){const t=e.doNotKillList.indexOf(Ri);-1===t?e.doNotKillList.push(Ri):e.doNotKillList.splice(t,1),Ji(),d("doNotKillList",e.doNotKillList.join()),La()}function Zi(){Fi?Ji():function(){Fi=Ge({className:"fshBl",textContent:Wi(),type:"button"})
const e=t({className:"description",innerHTML:'<span class="ui-helper-hidden-accessible"><input type="text"></span>'})
r(e,Fi),r(Oi,e),s(Fi,Xi)}()}function es(e,t){!function(e){if(!Oi){const t=W("body",e)
1===t.length&&([Oi]=t)}}(t),Oi&&(Ri=e.trim(),Zi())}function ts(){Ki||(qi||(qi=t(),r(_i,qi),r(_i,t({innerHTML:'<span class="fshFooter">*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, Sanctuary, Constitution, Fortitude, Chi Strike and Terrorize (if active) and allow for randomness (1.1053). Constitution, NMV, Fortitude and Chi Strike apply to group stats.</span>'}))),Ki=t(),r(qi,Ki))}function as(e){ts(),B(e,Ki)}function ns(e){Yi||(ts(),Yi=t(),r(qi,Yi)),B(e,Yi)}function rs(e,t){const a={name:e.name,class:e.creature_class,attack:Number(e.attack),defense:Number(e.defense),armor:Number(e.armor),damage:Number(e.damage),hp:Number(e.hp)}
return function(e,t,a){3===a&&(t.attack-=Math.ceil(t.attack*e),t.defense-=Math.ceil(t.defense*e),t.armor-=Math.ceil(t.armor*e),t.damage-=Math.ceil(t.damage*e),t.hp-=Math.ceil(t.hp*e))}(t,a,e.type),a}function os(t,a,n){const r={}
r.callback=n,r.player=Yn(a),function(t){t.combatEvaluatorBias=e.combatEvaluatorBias,t.attackVariable=1.1053,t.generalVariable=e.generalVariable,t.hpVariable=e.hpVariable}(r),r.creature=rs(t.response.data,r.player.superEliteSlayerMultiplier),function(e){Ii(e),Bi(e),Ei(e),Pi(e),Hi(e),$i(e),Ti(e)}(r),r.evaluatorHTML=function(e){return`<table width="100%"><tbody>${function(e){return`<tr><td bgcolor="#CD9E4B" colspan="4" align="center">${function(e){return e.callback.groupExists?"Group ":""}(e)}Combat Evaluation</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Will I hit it? </td><td align="left">${function(e){return e.hitByHowMuch>0?"Yes":"No"}(e)}</td><td align="right"><span style="color:#333333">Extra Attack: </td><td align="left">( ${e.hitByHowMuch} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333"># Hits to kill it? </td><td align="left">${e.numberOfHitsRequired}</td><td align="right"><span style="color:#333333">Extra Damage: </td><td align="left">( ${e.damageDone} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Will I be hit? </td><td align="left">${function(e){return e.creatureHitByHowMuch>=0?"Yes":"No"}(e)}</td><td align="right"><span style="color:#333333">Extra Defense: </td><td align="left">( ${-1*e.creatureHitByHowMuch} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333"># Hits to kill me? </td><td align="left">${e.numberOfCreatureHitsTillDead}</td><td align="right"><span style="color:#333333">Extra Armor + HP: </td><td align="left">( ${-1*e.creatureDamageDone} )</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333"># Player Hits? </td><td align="left">${e.playerHits}</td><td align="right"><span style="color:#333333"># Creature Hits? </td><td align="left">${e.creatureHits}</td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Fight Status: </span></td><td align="left" colspan="3"><span>${e.fightStatus}</span></td></tr>`}(e)}${function(e){return`<tr><td align="right"><span style="color:#333333">Notes: </span></td><td align="left" colspan="3"><span style="font-size:x-small;">${e.extraNotes}</span></td></tr>`}(e)}</tbody></table>`}(r),n.groupExists?ns(r.evaluatorHTML):as(r.evaluatorHTML)}function is(e){return e.members[0].name===Me()}function ss(e){if(Ve(e.r))return e.r.find(is).id}function us(e,t,a){if(!a.r||!a.r.attributes)return
const n=a.r.attributes
os(e,t,{groupExists:!0,groupAttackValue:n[0].value,groupDefenseValue:n[1].value,groupArmorValue:n[2].value,groupDamageValue:n[3].value,groupHPValue:n[4].value})}function ls(e,t,a){a&&function(e){return se(Ci,ki,e)}(a).then(o(us,e,t))}function cs(e,t){se(Li,Ai).then(ss).then(o(ls,e,t))}function fs(e,t){e.player.hasGroup&&cs(e,t),os(e,t,{groupExists:!1})}function ds(e,t){_i||(_i=a("dialog-viewcreature")),_i&&(as(""),ns(""),function(e){return e.response&&e.response.data}(t)&&(es(t.response.data.name,_i),st(!0).then(o(fs,t))))}function ms(){const t=[,[e.buffs,e.buffsName],[e.buffs2,e.buffs2Name],[e.buffs3,e.buffs3Name]][e.enabledHuntingMode]
Ve(t)&&([zi,Ui]=t)}function hs(t){"enabledHuntingMode"===t.target.name&&(e.enabledHuntingMode=t.target.value,d("enabledHuntingMode",e.enabledHuntingMode),ms(),GameData.fetch(u))}function ps(e){const t=W("verbs",e)
1===t.length&&Ye(t[0])}function bs(){if(!Qi)return
const e=a("actionList")
He("player",e).forEach(ps)}const gs={hideSubLvlCreature:function(){e.hideSubLvlCreature=!e.hideSubLvlCreature,d("hideSubLvlCreature",e.hideSubLvlCreature),GameData.fetch(de)},hidePlayerActions:function(){Qi=!Qi,d("hidePlayerActions",Qi),GameData.fetch(de)},showCreatureInfo:function(){e.showCreatureInfo=!e.showCreatureInfo,d("showCreatureInfo",e.showCreatureInfo)},showHuntingBuffs:function(){e.showBuffs=!e.showBuffs,d("showHuntingBuffs",e.showBuffs),GameData.fetch(u)},showMonsterLog:function(){e.showMonsterLog=!e.showMonsterLog,d("showMonsterLog",e.showMonsterLog)},showTitanInfo:function(){e.showTitanInfo=!e.showTitanInfo,d("showTitanInfo",e.showTitanInfo),Xo(GameData.realm().dynamic)},showBuffInfo:function(){e.showBuffInfo=!e.showBuffInfo,d("showBuffInfo",e.showBuffInfo),ra()}}
function vs(e){const t=gs[e.target.name]
C(t)&&(e.target.blur(),t(e))}function ys(){const e=t({className:"fshCenter fshFten"}),n=t({id:"fshWorldPrefs",innerHTML:`${lt("showCreatureInfo")}&nbsp;&nbsp;${lt("showMonsterLog")}&nbsp;&nbsp;${lt("showTitanInfo")}&nbsp;&nbsp;${lt("showBuffInfo")}<br>${lt("hideSubLvlCreature")}&nbsp;&nbsp;${lt("hidePlayerActions")}&nbsp;&nbsp;${ut()}`})
s(n,vs),h(n,"change",hs),r(e,n)
const o=t()
r(e,o)
const i=a("worldContainerBelow").children[0]
return Te(e,i),o}function ks(e,t){return e[t.name]=!0,e}function ws(e,t,a){return e[a.trim()]||t.push(a),t}function Cs(e){B("",e)}function Ls(e,t){const a=t.b.reduce(ks,{}),n=zi.reduce(o(ws,a),[])
n.length>0?function(e,t){B(`You are missing some ${Ui} hunting buffs<br>(${t.join(", ")})`,e)}(e,n):Cs(e)}function Ds(t,a,n){zi&&function(t,a,n){e.showBuffs?Ls(t,n):Cs(t)}(t,0,n)}const As=[{generalVariable:1.1053,hpVariable:1.1},{generalVariable:1.1,hpVariable:1.053},{generalVariable:1.053,hpVariable:1},{generalVariable:1.1053,hpVariable:1}]
function Ms(){var t
e.combatEvaluatorBias=y("combatEvaluatorBias"),e.generalVariable=(t=e.combatEvaluatorBias,As[t]?As[t].generalVariable:1.1053),e.hpVariable=function(e){return As[e]?As[e].hpVariable:1.1}(e.combatEvaluatorBias)}function Vs(e,t){return 6!==t.type||(0!==t.data.creature_type||t.data.level>=e)}function Ns(e){const t=me(e)
return function(e){return!e||!e.actions||0===e.actions.length}(t)?e:(t.actions=t.actions.filter(o(Vs,function(e){return e.realm&&e.realm.minlevel||GameData.realm().minlevel}(t))),JSON.stringify(t))}function $s(t,a){e.hideSubLvlCreature&&function(e){return e.data&&e.data.d&&ct(e.data.d,de)}(a)&&(t.dataFilter=Ns)}function Ss(t){e[t[0]]=ft(t[1])}function Hs(t){e[t]=ft(t)}function Bs(){[["buffs","huntingBuffs"],["buffs2","huntingBuffs2"],["buffs3","huntingBuffs3"]].forEach(Ss),["doNotKillList"].forEach(Hs)}function Gs(t){e[t[0]]=y(t[1])}function xs(t){e[t]=y(t)}function Ts(){[["buffsName","huntingBuffsName"],["buffs2Name","huntingBuffs2Name"],["buffs3Name","huntingBuffs3Name"],["showBuffs","showHuntingBuffs"]].forEach(Gs),["enabledHuntingMode","hideSubLvlCreature","showTitanInfo","showBuffInfo","showMonsterLog","showCreatureInfo"].forEach(xs)}function Es(e){$(`#actionList li.creature-${e.toString()} a.create-group`).hide()}const js=["hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup"]
function Ps(e,t){var a
y(e)&&(a=t+1,$.subscribe(D,o(Es,a)),Es(t+1))}function Is(e,t){"ACT_REPAIR"===t&&GameData.fetch(pe+u+be+de)}function Os(e){V(e.target)}const Rs=[function(){Ms(),Bs(),Ts()
const t=ys()
$.ajaxPrefilter("JSON",$s),e.hideSubLvlCreature&&GameData.fetch(de),function(t){ms()
const a=o(Ds,t)
$.subscribe(l,a),e.showBuffs&&window.initialGameData&&a(null,{b:window.initialGameData.player.buffs})}(t),Qi=y("hidePlayerActions"),$.subscribe(D,bs),bs()},function(){_(),q&&Dr()},function(){$.subscribe(fe,ds)},function(){js.forEach(Ps)},function(){y("enableCreatureColoring")&&r(document.body,Se("#actionList .creature-1 {color: green;}\n#actionList .creature-2 {color: yellow;}\n#actionList .creature-3 {color: red;}"))},function(){$.subscribe(D,La),La(),function(){const e=GameData.doAction
GameData.doAction=Ma(e)}()},function(){Ne("fsh_monsterLog").then(mi),$.subscribe("-1-success.action-response 4-success.action-response 5-success.action-response 25-success.action-response",vi),vi()},function(){$.subscribe(he,Is)},function(){y("keepLogs")&&Ne("fsh_combatLog").then(ka)},function(){window.initialGameData&&ei(0,window.initialGameData),$.subscribe(`${ue} ${le}`,ei)},function(){$.subscribe(ce,oi)},function(){$.subscribe(O,wr)},function(){$("#messageCenter").worldMessageCenter({offset:"0 60"})},function(){V("#mapTooltip")},function(){Ka(),$.subscribe(A,Ya),$.subscribe(M,za)},function(){ra(),$.subscribe(`${l} ${c}`,ra),$.subscribe(f,oa)},function(){s(a("buffList"),Os)},function(){h(a("actionList"),"mouseover",Yr)},function(){const e=m("body")[0]
h(e,"keydown",fa),h(e,"keyup",da)}]
function Fs(){Be(Rs)}export default Fs
//# sourceMappingURL=newMap-4cb33926.js.map
