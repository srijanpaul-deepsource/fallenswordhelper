import{a as D}from"./chunk-BQSOABMO.js";import{a as M}from"./chunk-G25CQHOI.js";import{a as c}from"./chunk-NVJNPDX2.js";import{a as H}from"./chunk-4OD45MKL.js";import{a as G}from"./chunk-JJPINAYM.js";import{j as $,l as b,m as w,n as I,o as S,r as Q,s as O,t as U,u as q}from"./chunk-FHWREO2R.js";import"./chunk-4MT32RNI.js";import{a as u}from"./chunk-3HH6OK6J.js";import"./chunk-BW7Q2ZXG.js";import{a as x}from"./chunk-AV7VTLT6.js";import"./chunk-ZCBAMDZC.js";import"./chunk-3ZXYCFKP.js";import"./chunk-LRUSX4KB.js";import{a as j}from"./chunk-QPWRUAE6.js";import"./chunk-ZYVZFCZ6.js";import"./chunk-UL2EF2NH.js";import{a as A}from"./chunk-63VZJNBW.js";import"./chunk-R7NI253Q.js";import{a as P}from"./chunk-WVMSJ4JS.js";import"./chunk-V2KRM43J.js";import{a as E}from"./chunk-2VODWHYJ.js";import"./chunk-AKOYB2MJ.js";import{a as v}from"./chunk-PCS24QV6.js";import"./chunk-LMAPCTSK.js";import"./chunk-ATT7QPUL.js";import"./chunk-OJFORZ5L.js";import{a as f}from"./chunk-OEMG4KI7.js";import"./chunk-IW5EBVFR.js";import"./chunk-7QMLZEL5.js";import"./chunk-25C4ZULH.js";import{b as a}from"./chunk-R37CWEF4.js";import"./chunk-DX6C6LKB.js";import"./chunk-VDAUATSB.js";import{A as s,m as k,n as m,p as y,u as B}from"./chunk-OPFEBT2F.js";import"./chunk-33VL7FGV.js";import{a as L}from"./chunk-7ZQZE7AG.js";function o(e,t,n){let i=v(e);if(i instanceof Node){let l=i.parentNode;t(l,n)}else A(`#${e} is not a Node`,!1)}function F(e,t){E("accordion",e),G(t)}function V(e,t){D(t,e)}function r(e,t,n,i){let l=M({className:`nav-level-${e}`}),h=H({className:"nav-link fshPoint",textContent:t});P(h,L(F,t,n)),j(l,h),o(i,V,l)}function d(e){e.auctionSearchLink&&r("2","AH Quick Search",Q,"nav-actions-trade-auctionhouse"),e.onlinePlayersLink&&r("2","Online Players",I,"nav-actions-interaction-findplayer"),e.findOtherLink&&r("2","Find Other",q,"nav-actions-interaction-findplayer"),e.findBuffsLink&&r("2","Find Buffs",U,"nav-actions-interaction-findplayer")}function p(e,t){t.heights=f("#nav > li").map(i=>f("li",i).length*22||null);let n=Number(t.state);n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}function N(e){e.recipeManagerLink&&r("1","Recipe Manager",S,"nav-character-log")}function R(e){e.inventoryManagerLink&&o("nav-character-log",c,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${s}invmanagernew">Inventory Manager</a></li>`)}function T(e){e.medalGuideLink&&o("nav-character-log",c,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${B}${m}medalguide">Medal Guide</a></li>`)}function z(e){e.buffLogLink&&a("keepBuffLog")&&r("1","Buff Log",$,"nav-character-log")}function J(e){e.combatLogLink&&a("keepLogs")&&r("1","Combat Logs",w,"nav-character-notepad")}function K(e){e.creatureLogLink&&a("showMonsterLog")&&r("1","Creature Logs",b,"nav-character-notepad")}function W(e){e.quickLinksLink&&r("1","Quick Links",O,"nav-character-notepad")}function g(e){N(e),R(e),T(e),z(e),J(e),K(e),W(e)}function X(e){e.guildInventoryLink&&u()&&o("nav-guild-storehouse-inventory",c,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${s}guildinvmgr">Guild Inventory</a></li>`)}function Y(e){e.newGuildLogLink&&u()&&!a("useNewGuildLog")&&o("nav-guild-ledger-guildlog",x,`<li class="nav-level-2"><a class="nav-link" href="${y}">New Guild Log</a></li>`)}function Z(e){e.topRatedLink&&o("nav-toprated-players-level",c,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${k}toprated${m}xp">Top 250 Players</a></li>`)}function _(e,t,n){g(n),d(n),X(n),Y(n),Z(n),p(e,t)}export{_ as default};
//# sourceMappingURL=injectItems-UOQ6AJ3I.js.map