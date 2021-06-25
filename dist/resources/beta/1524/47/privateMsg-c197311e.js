import{a as t,g as r}from"./addLogColoring-7837c482.js"
import{a as e}from"./addLogWidgets-b28b711f.js"
import{d as s}from"./dataRows-75ebbe50.js"
import{H as a,C as o,S as i,ag as n,o as c,ah as f,I as p,R as m,i as d,ai as u,aj as l}from"./calfSystem-db2edbef.js"
import{c as j}from"./closestTr-72dc4267.js"
import{b as g}from"./buffObj-68975e43.js"
import{c as b}from"./csvSplit-e3b3e000.js"
import{o as h}from"./openQuickBuffByName-76c48ffd.js"
import"./createStyle-405c1e12.js"
import"./doBuffLinkClick-cd1af5e1.js"
import"./parseDateAsTimestamp-099fe353.js"
import"./insertHtmlAfterEnd-f4abe003.js"
import"./currentGuildId-3f7c0e1c.js"
import"./getMembrList-d7f57e87.js"
import"./cmdExport-e54f093d.js"
import"./indexAjaxJson-acd1a794.js"
import"./idb-937dea46.js"
import"./addCommas-27b35f1c.js"
import"./myStats-c4e7b0cc.js"
import"./getProfile-6da1b876.js"
import"./playerName-70d3d303.js"
import"./closest-4542e515.js"
import"./fshOpen-a2455e89.js"
function v(t){return a(j(t).children[3].childNodes[0])}function B(t){return o(j(t).children[2].children[0])}function M(t){const r=g.find((r=>((t,r)=>b(r.nicks).includes(n(t)))(t,r)))
if(r)return r.id}function y(t){const r=/`~(.*)~`/.exec(v(t))
return r?(e=r[1],b(e).map(M).filter((t=>t)).join(";")):""
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
//# sourceMappingURL=privateMsg-c197311e.js.map
