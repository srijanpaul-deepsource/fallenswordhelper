import{a as t,g as r}from"./addLogColoring-be779410.js"
import{a}from"./addLogWidgets-45029c2d.js"
import{d as s}from"./dataRows-a0ea22f1.js"
import{H as e,C as o,S as i,ah as n,o as c,ai as f,I as p,R as m,i as d,aj as u,ak as l}from"./calfSystem-8af1dca2.js"
import{c as b}from"./closestTr-627423b9.js"
import{b as j}from"./buffObj-7ab8e1a0.js"
import{c as g}from"./csvSplit-a090804f.js"
import{o as h}from"./openQuickBuffByName-ad6d10b7.js"
import"./createStyle-6339f1bb.js"
import"./doBuffLinkClick-8251b542.js"
import"./parseDateAsTimestamp-39affded.js"
import"./insertHtmlAfterEnd-e22ce08b.js"
import"./currentGuildId-ae75dbfc.js"
import"./getMembrList-cb94da61.js"
import"./cmdExport-c3a6f54b.js"
import"./indexAjaxJson-6e1804ba.js"
import"./idb-30d71a28.js"
import"./addCommas-5de3e9c4.js"
import"./myStats-ad917b7b.js"
import"./getProfile-9774b117.js"
import"./playerName-7218c72a.js"
import"./closest-3a475e96.js"
import"./fshOpen-b549d330.js"
function v(t){return e(b(t).children[3].childNodes[0])}function B(t){return o(b(t).children[2].children[0])}function M(t){const r=j.find((r=>((t,r)=>g(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(a=r[1],g(a).map(M).filter((t=>t)).join(";")):""
var a}const S=[["pmBuffBtn",function(t){const{target:r}=t
h(B(r),y(r)),i("privateMsg","Buff")}],["fa-reply",function(t){if(!p("enableChatParsing"))return
const{target:r}=t
window.openQuickMsgDialog(B(r),"",function(t){const r=v(t)
return r.length>140?`${r.substring(0,140)}...`:r}(r)),t.preventDefault(),i("privateMsg","parseReply")}],["pmTradeUrl",()=>i("privateMsg","Trade")],["pmSecureUrl",()=>i("privateMsg","ST")],["pmAttackUrl",()=>i("privateMsg","Attack")],["pmIgnoreUrl",()=>i("privateMsg","Ignore")]]
function k(t){const{target:r}=t,a=S.find((t=>f(r,t)))
a&&a[1](t)}const T=t=>[e(t.children[2]),t.children[3]]
function x(){const t=r()
t&&(function(t){if(!p("privateMsgButtons"))return
s(t.rows,6,0).map(T).forEach((([t,r])=>{d(r,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+t}">Send</a> | <a class="pmSecureUrl" href="${l+t}">Trade</a> ]`)}))}(t),a(1),function(t){c(t,k)}(t))}function U(){"1"===m("type")?(t("PrivateMsg",1,6),x()):t("OutBox",1,4)}export default U
//# sourceMappingURL=privateMsg-a0598b27.js.map
