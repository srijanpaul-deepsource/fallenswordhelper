import{x as a,a9 as n,o as e,s as i,f as t,S as s,T as r,c4 as o,c5 as c,c6 as l,c7 as d,a7 as f,c8 as u,_ as v,bK as g,an as h,D as m,c9 as p,U as L,V as k,ca as y,c0 as b,a4 as $}from"./calfSystem-57340987.js"
import{c as j}from"./currentGuildId-fd144a5c.js"
import"./insertElementBefore-69bb0e1f.js"
import{c as N}from"./createLi-75db58db.js"
import{i as B}from"./insertHtmlBeforeBegin-ef1c12da.js"
import{i as G}from"./insertHtmlAfterEnd-c6138b5e.js"
import{c as x}from"./createAnchor-4d13df5a.js"
import{i as M}from"./insertElementAfter-7d3f2313.js"
function w(e,i,t){const s=a(e)
if(s instanceof Node){i(s.parentNode,t)}else n(`#${e} is not a Node`,!1)}function S(a,n){s("accordion",a),r(n)}function A(a,n){M(n,a)}function E(a,n,s,r){const o=N({className:"nav-level-"+a}),c=x({className:"nav-link fshPoint",textContent:n})
e(c,i(S,n,s)),t(o,c),w(r,A,o)}const I=a=>22*a.length,P=n=>I(a("nav-"+n).nextElementSibling.children),C=a=>I(f(`#nav-${a} > ul li`))
function H(a){!function(a){a.recipeManagerLink&&E("1","Recipe Manager",u,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&w("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${v}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&w("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${g}${h}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&m("keepBuffLog")&&E("1","Buff Log",p,"nav-character-log")}(a),function(a){a.combatLogLink&&m("keepLogs")&&E("1","Combat Logs",L,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&m("showMonsterLog")&&E("1","Creature Logs",k,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&E("1","Quick Links",y,"nav-character-notepad")}(a)}export default function(a,n,e){H(e),function(a){a.auctionSearchLink&&E("2","AH Quick Search",o,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&E("2","Online Players",c,"nav-actions-interaction-findplayer"),a.findOtherLink&&E("2","Find Other",l,"nav-actions-interaction-findplayer"),a.findBuffsLink&&E("2","Find Buffs",d,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&j()&&w("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${v}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&j()&&!m("useNewGuildLog")&&w("nav-guild-ledger-guildlog",B,`<li class="nav-level-2"><a class="nav-link" href="${b}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&w("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${$}toprated${h}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=[null,null,P("character"),C("actions"),C("guild"),C("toprated"),C("upgrades"),P("resources"),null],-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=n.heights[n.state]+"px")}(a,n)}
//# sourceMappingURL=injectItems-b1533926.js.map
