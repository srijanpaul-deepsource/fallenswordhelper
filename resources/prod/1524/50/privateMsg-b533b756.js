import{a as t,g as r}from"./addLogColoring-d11047f8.js"
import{a as s}from"./addLogWidgets-1765e219.js"
import{d as a}from"./dataRows-be19a2f8.js"
import{H as e,C as o,S as i,ag as n,o as c,ah as f,I as p,R as m,i as d,ai as u,aj as l}from"./calfSystem-365d90f3.js"
import{c as j}from"./closestTr-75f82cf0.js"
import{b}from"./buffObj-6a194f9f.js"
import{c as g}from"./csvSplit-68cab542.js"
import{o as h}from"./openQuickBuffByName-586c4bc1.js"
import"./createStyle-ed7b9ea6.js"
import"./doBuffLinkClick-d299b76c.js"
import"./parseDateAsTimestamp-89678ec4.js"
import"./insertHtmlAfterEnd-f8bb4356.js"
import"./currentGuildId-605c07b2.js"
import"./getMembrList-4826cb4a.js"
import"./cmdExport-16d6b4f1.js"
import"./indexAjaxJson-81a9c061.js"
import"./idb-62f64cd2.js"
import"./addCommas-b66fde4c.js"
import"./myStats-3aa6ebcb.js"
import"./getProfile-21cc29b6.js"
import"./playerName-17f8d780.js"
import"./closest-06418423.js"
import"./fshOpen-90a0d847.js"
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
//# sourceMappingURL=privateMsg-b533b756.js.map
