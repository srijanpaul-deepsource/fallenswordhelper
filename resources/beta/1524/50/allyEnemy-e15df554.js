import{t as e,U as t,a4 as n,c as i,ak as s,aj as a,y as o,a as l,m as f,i as c,bR as r,o as u,a5 as d,bU as m,z as p,B as h,C as y}from"./calfSystem-617f9a5d.js"
import{f as b}from"./formatLastActivity-ed4563a0.js"
import{g}from"./getArrayByClassName-3e46aa9a.js"
import{i as j}from"./insertElementAfterBegin-931665a2.js"
import{m as $}from"./myStats-a71050f1.js"
import{o as k}from"./openQuickBuffByName-a794d2ad.js"
import"./outputFormat-d0532a29.js"
import"./splitTime-ca281ff6.js"
import"./insertElementBefore-784d4581.js"
import"./getProfile-50ff6571.js"
import"./cmdExport-39e5a4b7.js"
import"./indexAjaxJson-1f941a45.js"
import"./playerName-90c8eb43.js"
import"./idb-443c992c.js"
import"./fshOpen-90a0d847.js"
const v=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]]
function B(e,n){return n[0](t-e)}function E(t,i){return`<a class="player-name tip-static ${function(t,n){const i=v.find(e(B,t))
return i?function(e,t){return e?t[1]:t[2]}(n,i):"fshWhite"}(t.last_login,i)}" data-tipped="<b>${t.username}</b><br><table><tbody><tr><td>Level:</td><td>${t.level}</td></tr><tr><td>Last Activity:</td><td>${b(t.last_login)}</td></tr></tbody></table>" href="${n}${t.id}">${t.username}</a>`}function x(e){return t-e.last_login<1800}function S(e,t){return`<li class="player"><div class="player-row">${i.hideBuffSelected?"":'<span class="enemy-buff-check-on"></span>'}${E(t,e)}</div><div class="guild-minibox-actions">${i.hideGuildInfoMessage?"":'<span class="enemy-send-message guild-icon left guild-minibox-action tip-static" data-tipped="Send Message"></span>'}${i.hideGuildInfoBuff?"":'<span class="enemy-quickbuff guild-icon left guild-minibox-action tip-static" data-tipped="Quick Buff"></span>'}${function(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade guild-icon left guild-minibox-action tip-static" href="${s}${e.username}" data-tipped="Secure Trade"></a>`}(t)}${function(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade guild-icon left guild-minibox-action tip-static" href="${a}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}(t)}</div></li>`}function L(t,n){return t.filter(x).map(e(S,n)).join("")}const A=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}]
function C(e,t,n){return 0===n(e,t)}function N(t){const n=d(t._allies,[]),s=d(t._enemies,[]);(function(t,n){return A.every(e(C,t,n))})(n,s)||function(e,t){let n=""
i.enableAllyOnlineList&&(n+=L(e,!0)),i.enableEnemyOnlineList&&(n+=L(t,!1))
const s=p("fshContactList")
h("",s),c(s,n)}(n,s)}function O(e){e.classList.toggle("enemy-buff-check-on"),e.classList.toggle("enemy-buff-check-off")}const R=[["enemy-buff-check-on",O],["enemy-buff-check-off",O],["enemy-send-message",function(e){window.openQuickMsgDialog(y(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quickbuff",function(e){k(y(e.parentNode.previousElementSibling.lastElementChild))}],["enemy-quick-buff",function(){const e=g("enemy-buff-check-on",p("fshContactList")).map((e=>y(e.nextElementSibling)))
k(e.join())}]]
function G(e){const{target:t}=e
"fshResetEnemy"!==t.id?m(R)(e):$(!0).then(N)}function I(e){const t=f({id:"fshAllyEnemy",className:"minibox"})
let n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div id="minibox-enemy"><ul id="fshContactList"></ul>'
i.hideBuffSelected||(n+='<ul class="enemy-quick-buff">Quick Buff Selected</ul>'),n+="</div></div>",c(t,n),j(r,t),u(t,G),N(e)}function _(e){e&&l(3,I,[e])}function q(){o()||$(!1).then(_)}export default q
//# sourceMappingURL=allyEnemy-e15df554.js.map
