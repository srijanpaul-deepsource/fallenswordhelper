import{a as t,g as r}from"./addLogColoring-f7dc7042.js"
import{a as s}from"./addLogWidgets-afbc37e2.js"
import{d as e}from"./dataRows-b45e1fd7.js"
import{H as a,C as o,S as i,ag as n,o as f,ah as c,I as p,R as m,i as d,ai as u,aj as l}from"./calfSystem-85fa6364.js"
import{c as j}from"./closestTr-5f6e9767.js"
import{b as g}from"./buffObj-7ab8e1a0.js"
import{c as b}from"./csvSplit-a090804f.js"
import{o as h}from"./openQuickBuffByName-fd250012.js"
import"./createStyle-21f138f7.js"
import"./doBuffLinkClick-3624d13c.js"
import"./parseDateAsTimestamp-b71ec36f.js"
import"./insertHtmlAfterEnd-bdfcd845.js"
import"./currentGuildId-01e2fed9.js"
import"./getMembrList-3b37048c.js"
import"./cmdExport-62f110d4.js"
import"./indexAjaxJson-4fb780dc.js"
import"./idb-160add45.js"
import"./addCommas-5de3e9c4.js"
import"./myStats-af54046f.js"
import"./getProfile-abd530d8.js"
import"./playerName-2fc4f5c9.js"
import"./closest-3a475e96.js"
import"./fshOpen-b549d330.js"
function v(t){return a(j(t).children[3].childNodes[0])}function B(t){return o(j(t).children[2].children[0])}function M(t){const r=g.find((r=>((t,r)=>b(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(s=r[1],b(s).map(M).filter((t=>t)).join(";")):""
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
//# sourceMappingURL=privateMsg-3d7294df.js.map
