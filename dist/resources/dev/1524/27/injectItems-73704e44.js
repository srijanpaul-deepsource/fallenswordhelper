import{y as a,ad as n,o as e,t as i,h as t,W as s,X as c,c5 as r,c6 as o,c7 as l,c8 as u,ac as d,c9 as f,a2 as v,bE as g,at as h,H as m,ca as p,Y as L,Z as k,cb as y,c0 as $,aa as b}from"./calfSystem-ec5e5725.js"
import"./insertElementBefore-543d9ef0.js"
import{c as j}from"./currentGuildId-4732beaa.js"
import{c as N}from"./createLi-3233a571.js"
import{c as B}from"./createAnchor-6c69fd12.js"
import{i as G}from"./insertHtmlAfterEnd-01ce7acd.js"
import{i as M}from"./insertElementAfter-2118fc13.js"
import{i as w}from"./insertHtmlBeforeBegin-67c2caa3.js"
function x(e,i,t){const s=a(e)
if(s instanceof Node){i(s.parentNode,t)}else n(`#${e} is not a Node`,!1)}function E(a,n){s("accordion",a),c(n)}function A(a,n){M(n,a)}function H(a,n,s,c){const r=N({className:"nav-level-"+a}),o=B({className:"nav-link fshPoint",textContent:n})
e(o,i(E,n,s)),t(r,o),x(c,A,r)}const I=a=>22*a.length,P=n=>I(a("nav-"+n).nextElementSibling.children),S=a=>I(d(`#nav-${a} > ul li`))
function C(a){!function(a){a.recipeManagerLink&&H("1","Recipe Manager",f,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&x("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${v}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&x("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${g}${h}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&m("keepBuffLog")&&H("1","Buff Log",p,"nav-character-log")}(a),function(a){a.combatLogLink&&m("keepLogs")&&H("1","Combat Logs",L,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&m("showMonsterLog")&&H("1","Creature Logs",k,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&H("1","Quick Links",y,"nav-character-notepad")}(a)}function O(a,n,e){C(e),function(a){a.auctionSearchLink&&H("2","AH Quick Search",r,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&H("2","Online Players",o,"nav-actions-interaction-findplayer"),a.findOtherLink&&H("2","Find Other",l,"nav-actions-interaction-findplayer"),a.findBuffsLink&&H("2","Find Buffs",u,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&j()&&x("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${v}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&j()&&!m("useNewGuildLog")&&x("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${$}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&x("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${b}toprated${h}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=[null,null,P("character"),S("actions"),S("guild"),S("toprated"),S("upgrades"),P("resources"),null],-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=n.heights[n.state]+"px")}(a,n)}export default O
//# sourceMappingURL=injectItems-73704e44.js.map