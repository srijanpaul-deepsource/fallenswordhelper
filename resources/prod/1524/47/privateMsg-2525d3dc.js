import{a as t,g as e}from"./addLogColoring-fdbc85f3.js"
import{a as r}from"./addLogWidgets-e49db380.js"
import{d as s}from"./dataRows-15e7a209.js"
import{H as a,C as o,S as i,ag as n,o as f,ah as c,I as p,R as m,i as d,ai as u,aj as l}from"./calfSystem-a2fd9017.js"
import{c as j}from"./closestTr-c667a8e5.js"
import{b as g}from"./buffObj-68975e43.js"
import{c as b}from"./csvSplit-e3b3e000.js"
import{o as h}from"./openQuickBuffByName-713316ef.js"
import"./createStyle-15ddb95b.js"
import"./doBuffLinkClick-6d53a385.js"
import"./parseDateAsTimestamp-4263e37c.js"
import"./insertHtmlAfterEnd-8dd1e730.js"
import"./currentGuildId-871ea013.js"
import"./getMembrList-be74c9ce.js"
import"./cmdExport-84fee8d4.js"
import"./indexAjaxJson-9619f1ba.js"
import"./idb-09e8fa3a.js"
import"./addCommas-27b35f1c.js"
import"./myStats-4434ecd1.js"
import"./getProfile-bbee5de2.js"
import"./playerName-fab1659b.js"
import"./closest-4542e515.js"
import"./fshOpen-a2455e89.js"
function v(t){return a(j(t).children[3].childNodes[0])}function B(t){return o(j(t).children[2].children[0])}function M(t){const e=g.find((e=>((t,e)=>b(e.nicks).includes(n(t)))(t,e)))
if(e)return e.id}function y(t){const e=/`~(.*)~`/.exec(v(t))
return e?(r=e[1],b(r).map(M).filter((t=>t)).join(";")):""
var r}const S=[["pmBuffBtn",function(t){const{target:e}=t
h(B(e),y(e)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:e}=t
window.openQuickMsgDialog(B(e),"",function(t){const e=v(t)
return e.length>140?`${e.substring(0,140)}...`:e}(e)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:e}=t,r=S.find((t=>c(e,t)))
r&&r[1](t)}const T=t=>[a(t.children[2]),t.children[3]]
function x(){const t=e()
t&&(function(t){if(!p("privateMsgButtons"))return
s(t.rows,6,0).map(T).forEach((([t,e])=>{d(e,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),r(1),function(t){f(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-2525d3dc.js.map
