import{a as t,g as r}from"./addLogColoring-b3469a4a.js"
import{a as s}from"./addLogWidgets-3d6d886a.js"
import{d as e}from"./dataRows-7d251346.js"
import{H as a,C as o,T as i,ah as n,o as f,ai as c,I as p,S as m,i as d,aj as u,ak as l}from"./calfSystem-bfc1f6c0.js"
import{c as j}from"./closestTr-c2f47269.js"
import{b}from"./buffObj-68975e43.js"
import{c as g}from"./csvSplit-e3b3e000.js"
import{o as h}from"./openQuickBuffByName-3a3b6dee.js"
import"./createStyle-d990262e.js"
import"./doBuffLinkClick-54451979.js"
import"./parseDateAsTimestamp-178a465e.js"
import"./insertHtmlAfterEnd-75bb8027.js"
import"./currentGuildId-92fe6d54.js"
import"./getMembrList-c0254b8a.js"
import"./cmdExport-f5d5b9e2.js"
import"./indexAjaxJson-bf365b96.js"
import"./idb-d8a4a427.js"
import"./addCommas-27b35f1c.js"
import"./myStats-1a0b0275.js"
import"./getProfile-84988fb5.js"
import"./playerName-3c8c8393.js"
import"./closest-4542e515.js"
import"./fshOpen-a2455e89.js"
function v(t){return a(j(t).children[3].childNodes[0])}function B(t){return o(j(t).children[2].children[0])}function M(t){const r=b.find((r=>((t,r)=>g(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],g(s).map(M).filter((t=>t)).join(";")):""
var s}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,s=S.find((t=>c(r,t)))
s&&s[1](t)}const T=t=>[a(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
e(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){f(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-37710504.js.map
