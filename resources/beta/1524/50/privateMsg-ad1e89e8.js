import{a as t,g as r}from"./addLogColoring-6257b1c4.js"
import{a as s}from"./addLogWidgets-28c48264.js"
import{d as a}from"./dataRows-525495e8.js"
import{H as e,C as o,S as i,ah as n,o as f,ai as c,I as p,R as m,i as d,aj as u,ak as l}from"./calfSystem-617f9a5d.js"
import{c as j}from"./closestTr-bf59743f.js"
import{b as g}from"./buffObj-6a194f9f.js"
import{c as b}from"./csvSplit-68cab542.js"
import{o as h}from"./openQuickBuffByName-a794d2ad.js"
import"./createStyle-b99b7d2e.js"
import"./doBuffLinkClick-c2f64080.js"
import"./parseDateAsTimestamp-874ef6fd.js"
import"./insertHtmlAfterEnd-b1e65dcb.js"
import"./currentGuildId-3b40ad81.js"
import"./getMembrList-331ed151.js"
import"./cmdExport-39e5a4b7.js"
import"./indexAjaxJson-1f941a45.js"
import"./idb-443c992c.js"
import"./addCommas-b66fde4c.js"
import"./myStats-a71050f1.js"
import"./getProfile-50ff6571.js"
import"./playerName-90c8eb43.js"
import"./closest-06418423.js"
import"./fshOpen-90a0d847.js"
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
//# sourceMappingURL=privateMsg-ad1e89e8.js.map
