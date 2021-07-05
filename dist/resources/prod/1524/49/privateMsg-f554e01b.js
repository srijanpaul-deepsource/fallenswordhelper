import{a as t,g as r}from"./addLogColoring-c89a2933.js"
import{a as e}from"./addLogWidgets-f68d0e6e.js"
import{d as s}from"./dataRows-535168ee.js"
import{H as a,C as o,S as i,ag as n,o as c,ah as f,I as p,R as m,i as d,ai as u,aj as l}from"./calfSystem-2172498b.js"
import{c as b}from"./closestTr-3eb9ff66.js"
import{b as j}from"./buffObj-01088e9a.js"
import{c as g}from"./csvSplit-a314c23c.js"
import{o as h}from"./openQuickBuffByName-8e50e0f6.js"
import"./createStyle-9ebe28f9.js"
import"./doBuffLinkClick-c326a239.js"
import"./parseDateAsTimestamp-24bb18a4.js"
import"./insertHtmlAfterEnd-ab1f79ab.js"
import"./currentGuildId-7d9d343b.js"
import"./getMembrList-351d1812.js"
import"./cmdExport-b6bb85ab.js"
import"./indexAjaxJson-b5d4e9de.js"
import"./idb-35c610a0.js"
import"./addCommas-1f67a5b9.js"
import"./myStats-3fea7e4d.js"
import"./getProfile-8db6fc9e.js"
import"./playerName-a5989c6d.js"
import"./closest-0e1c7a1d.js"
import"./fshOpen-c207a52b.js"
function v(t){return a(b(t).children[3].childNodes[0])}function B(t){return o(b(t).children[2].children[0])}function M(t){const r=j.find((r=>((t,r)=>g(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(e=r[1],g(e).map(M).filter((t=>t)).join(";")):""
var e}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,e=S.find((t=>f(r,t)))
e&&e[1](t)}const T=t=>[a(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
s(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),e(1),function(t){c(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-f554e01b.js.map
