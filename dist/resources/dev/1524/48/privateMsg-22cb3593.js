import{a as t,g as r}from"./addLogColoring-71fb65b6.js"
import{a as s}from"./addLogWidgets-f30b92c0.js"
import{d as a}from"./dataRows-5146569c.js"
import{H as e,C as o,T as i,ai as n,o as f,aj as c,I as p,S as m,i as d,ak as u,al as l}from"./calfSystem-01849445.js"
import{c as j}from"./closestTr-74f72fa1.js"
import{b as g}from"./buffObj-7ab8e1a0.js"
import{c as b}from"./csvSplit-a090804f.js"
import{o as h}from"./openQuickBuffByName-a7eecc9f.js"
import"./createStyle-f0f6fcb0.js"
import"./doBuffLinkClick-ab5528ee.js"
import"./parseDateAsTimestamp-95db0f2d.js"
import"./insertHtmlAfterEnd-7c1bc6a6.js"
import"./currentGuildId-8dd620e8.js"
import"./getMembrList-88b56641.js"
import"./cmdExport-703b1590.js"
import"./indexAjaxJson-0f9790ea.js"
import"./idb-72291501.js"
import"./addCommas-5de3e9c4.js"
import"./myStats-ca0035f4.js"
import"./getProfile-80c13ae9.js"
import"./playerName-b318da41.js"
import"./closest-3a475e96.js"
import"./fshOpen-b549d330.js"
function v(t){return e(j(t).children[3].childNodes[0])}function B(t){return o(j(t).children[2].children[0])}function M(t){const r=g.find((r=>((t,r)=>b(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],b(s).map(M).filter((t=>t)).join(";")):""
var s}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,s=S.find((t=>c(r,t)))
s&&s[1](t)}const T=t=>[e(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
a(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){f(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-22cb3593.js.map
