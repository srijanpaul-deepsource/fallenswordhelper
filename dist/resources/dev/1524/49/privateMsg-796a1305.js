import{a as t,g as r}from"./addLogColoring-865f5d3e.js"
import{a as s}from"./addLogWidgets-14f62f53.js"
import{d as a}from"./dataRows-7f547576.js"
import{H as e,C as o,T as i,ai as n,o as f,aj as c,I as p,S as m,i as d,ak as u,al as l}from"./calfSystem-9ab64478.js"
import{c as j}from"./closestTr-e99b6a01.js"
import{b}from"./buffObj-01088e9a.js"
import{c as g}from"./csvSplit-a314c23c.js"
import{o as h}from"./openQuickBuffByName-2b4b1ff5.js"
import"./createStyle-a3ebff9c.js"
import"./doBuffLinkClick-1531b1e8.js"
import"./parseDateAsTimestamp-caf8e72d.js"
import"./insertHtmlAfterEnd-1cda96b6.js"
import"./currentGuildId-c05147ac.js"
import"./getMembrList-ad7be9d5.js"
import"./cmdExport-22edc582.js"
import"./indexAjaxJson-b31a9d3b.js"
import"./idb-9da90398.js"
import"./addCommas-1f67a5b9.js"
import"./myStats-eafccf98.js"
import"./getProfile-f5771e2a.js"
import"./playerName-b4c2ff3f.js"
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
function k(t){const{target:r}=t,s=S.find((t=>c(r,t)))
s&&s[1](t)}const T=t=>[e(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
a(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),s(1),function(t){f(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-796a1305.js.map
