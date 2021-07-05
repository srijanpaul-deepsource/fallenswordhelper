import{a as t,g as r}from"./addLogColoring-5e144468.js"
import{a as s}from"./addLogWidgets-00f623be.js"
import{d as a}from"./dataRows-9039c228.js"
import{H as e,C as o,S as i,ah as n,o as c,ai as f,I as p,R as m,i as d,aj as u,ak as l}from"./calfSystem-42f137cb.js"
import{c as j}from"./closestTr-2c592cbb.js"
import{b}from"./buffObj-01088e9a.js"
import{c as g}from"./csvSplit-a314c23c.js"
import{o as h}from"./openQuickBuffByName-ca011f73.js"
import"./createStyle-4173a9c2.js"
import"./doBuffLinkClick-b32f6cfd.js"
import"./parseDateAsTimestamp-0ff8fd20.js"
import"./insertHtmlAfterEnd-bc899275.js"
import"./currentGuildId-d1f28a3b.js"
import"./getMembrList-0ebeadc7.js"
import"./cmdExport-16a19312.js"
import"./indexAjaxJson-4839dee4.js"
import"./idb-6beadc2c.js"
import"./addCommas-1f67a5b9.js"
import"./myStats-91cafdf1.js"
import"./getProfile-2a36fbe8.js"
import"./playerName-e12b866a.js"
import"./closest-0e1c7a1d.js"
import"./fshOpen-c207a52b.js"
function v(t){return e(j(t).children[3].childNodes[0])}function B(t){return o(j(t).children[2].children[0])}function M(t){const r=b.find((r=>((t,r)=>g(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],g(s).map(M).filter((t=>t)).join(";")):""
var s}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,s=S.find((t=>f(r,t)))
s&&s[1](t)}const T=t=>[e(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
a(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){c(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-6bbc7db1.js.map
