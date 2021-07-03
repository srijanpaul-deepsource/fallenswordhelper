import{c as t}from"./createSpan-54352f01.js"
import{f as n}from"./formatLastActivity-57f4f199.js"
import{D as s,B as e,b as a,C as i,E as f,t as c,z as r,Q as u,R as o,S as l,y as d,o as m}from"./calfSystem-85fa6364.js"
import{i as b}from"./insertElementAfter-2e9b5c5c.js"
import{c as h}from"./csvSplit-a090804f.js"
import{g as p}from"./getProfile-abd530d8.js"
import{s as k}from"./setTipped-71facd91.js"
import{e as q}from"./executeAll-ff401d51.js"
import{o as j}from"./outputFormat-3d4a3449.js"
import{i as y}from"./insertHtmlAfterEnd-bdfcd845.js"
import{d as E,q as T}from"./quickbuffSuccess-40fc2bbf.js"
import"./splitTime-fa1e86d2.js"
import"./insertElementBefore-5adb1609.js"
import"./cmdExport-62f110d4.js"
import"./indexAjaxJson-4fb780dc.js"
import"./getBuff-5d394ff5.js"
import"./buffObj-7ab8e1a0.js"
function v(i){const f=function(n){let e=s("span.fshLastActivity",n)
if(!e){e=t({className:"fshLastActivity"})
const s=a("h1",n)[0]
b(e,s)}return e}(s(`div.player[data-username="${i.username}"]`))
e(`Last Activity: ${n(i.last_login)}<br>Stamina: ${i.current_stamina} / ${i.stamina} ( ${Math.floor(i.current_stamina/i.stamina*100)}% )`,f)}function g(t){return Number(i(t).replace(/\[|\]/g,""))}function S(n,s,a){if(!s)return void e("",a)
const i=g(n.nextElementSibling.children[0].children[0]),f=function(n,s){if(!s){const s=t({className:"fshPlayer"})
return b(s,n.nextElementSibling),s}return s}(n,a),c=function(t,n){return t>n?"fshRed":"fshGreen"}(i,s)
e(` <span class="${c}">[${s}]</span>`,f)}function $(t,n){return n[0]===t}function B(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(c($,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&S(n,s,e)}function x(t){return t.split(/ \[|]/)}function A(t){const n=t.target
if("H1"!==n.tagName)return
p(i(n)).then(v)
const s=function(t){return h(i(t.parentNode.lastElementChild)).map(x)}(n)
f("#buff-outer input[name]").forEach(c(B,s))}const D=[50,54,55,56,60,61,98,101]
function H(t,n){(function(t,n){return!D.includes(Number(t.htmlFor.slice(6)))&&g(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function L(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
k(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),H(t,n)}function N(){f('#buff-outer label[for^="skill-"]').forEach(L)}function R(t){const n=a("h1",r("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&u(n):setTimeout(R,100,t-1)}function w(){r("targetPlayers").value&&R(9)}function F(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const n=Math.floor(t/60),s=t%60
let e=j(n,"m")
return n>0&&s>0&&(e+=" "),e+=j(s,"s"),e}(t)})</span>`}function M(t,n){const e=t[n]||0
return e?F(e):function(t){const n=s(`#buff-outer input[data-name="${t}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function C(t,n,s){e(M(t,n),s)}function G(t,n){return t[n.name]=n.duration,t}function O(t,n){return n.name===t}function _(t,n,s){const a=function(t,n){const s=t.find(c(O,n))
return s&&s.value||0}(t,n)
let i="fshLime"
a<100&&(i="fshRed"),e(`<span class="${i}">${a}%</span>`,s)}function P(t){!function(t){const n=t._enhancements
_(n,"Sustain",r("fshSus")),_(n,"Fury Caster",r("fshFur"))}(t),function(t){const n=t._skills.reduce(G,{})
C(n,"Guild Buffer",r("fshGB")),C(n,"Buff Master",r("fshBM")),C(n,"Extend",r("fshExt")),C(n,"Reinforce",r("fshRI"))}(t)}function Q(t){const n=r(`skill-${t}`)
n&&(n.checked=!0)}function I(){const t=o("blist")
t&&function(t){t.split(";").forEach(Q)}(t)}let z
function J(){z.length?(window.addPlayer(z.shift()),setTimeout(J,200)):setTimeout(w,200)}function K(){const t=o("players")
t&&(z=h(t),J())}async function U(t){const n=t.target
if("quickbuffActivate"!==n.className)return
l("quickbuff","quickActivate")
!function(t,n){T(n)&&(t.className="fshLime",e("On",t))}(n,await E([window.self],[n.dataset.buffid]))}function V(){m(r("helperQBheader"),U),m(r("players"),A)}function W(){if(d())return
const t=r("quickbuff")
t&&(p(window.self).then(P),y(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),q([N,I,K,V,w]))}export default W
//# sourceMappingURL=quickBuff-344e2e29.js.map
