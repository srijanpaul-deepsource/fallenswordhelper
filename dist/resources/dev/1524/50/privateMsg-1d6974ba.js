import{a as t,g as r}from"./addLogColoring-86e27d9d.js"
import{a as s}from"./addLogWidgets-19bd3e96.js"
import{d as e}from"./dataRows-f96281bd.js"
import{H as a,C as o,T as i,ai as n,o as c,aj as f,I as p,S as m,i as d,ak as u,al as l}from"./calfSystem-b3667af8.js"
import{c as b}from"./closestTr-868b7fea.js"
import{b as j}from"./buffObj-6a194f9f.js"
import{c as g}from"./csvSplit-68cab542.js"
import{o as h}from"./openQuickBuffByName-18de8163.js"
import"./createStyle-7b65d830.js"
import"./doBuffLinkClick-cf8bd0f0.js"
import"./parseDateAsTimestamp-b763f22d.js"
import"./insertHtmlAfterEnd-b696788c.js"
import"./currentGuildId-01980e74.js"
import"./getMembrList-1d170c53.js"
import"./cmdExport-31421fb2.js"
import"./indexAjaxJson-79cecebf.js"
import"./idb-22dd2687.js"
import"./addCommas-b66fde4c.js"
import"./myStats-dce07744.js"
import"./getProfile-61bb15d7.js"
import"./playerName-8bccbcca.js"
import"./closest-06418423.js"
import"./fshOpen-90a0d847.js"
function v(t){return a(b(t).children[3].childNodes[0])}function B(t){return o(b(t).children[2].children[0])}function M(t){const r=j.find((r=>((t,r)=>g(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],g(s).map(M).filter((t=>t)).join(";")):""
var s}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,s=S.find((t=>f(r,t)))
s&&s[1](t)}const T=t=>[a(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
e(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){c(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-1d6974ba.js.map
