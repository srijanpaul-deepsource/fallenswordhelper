import{c as t}from"./createSpan-b3281070.js"
import{f as e}from"./formatLastActivity-725aed63.js"
import{D as n,B as s,b as a,C as i,E as f,t as c,z as r,Q as u,R as o,S as l,y as d,o as b}from"./calfSystem-2172498b.js"
import{i as m}from"./insertElementAfter-d7162528.js"
import{c as h}from"./csvSplit-a314c23c.js"
import{g as p}from"./getProfile-8db6fc9e.js"
import{s as k}from"./setTipped-11c01061.js"
import{e as q}from"./executeAll-779c0127.js"
import{o as j}from"./outputFormat-3f519c21.js"
import{i as y}from"./insertHtmlAfterEnd-ab1f79ab.js"
import{d as E,q as T}from"./quickbuffSuccess-2e12deea.js"
import"./splitTime-95bb3eda.js"
import"./insertElementBefore-c7161beb.js"
import"./cmdExport-b6bb85ab.js"
import"./indexAjaxJson-b5d4e9de.js"
import"./getBuff-b44926e6.js"
import"./buffObj-01088e9a.js"
function v(i){const f=function(e){let s=n("span.fshLastActivity",e)
if(!s){s=t({className:"fshLastActivity"})
const n=a("h1",e)[0]
m(s,n)}return s}(n(`div.player[data-username="${i.username}"]`))
s(`Last Activity: ${e(i.last_login)}<br>Stamina: ${i.current_stamina} / ${i.stamina} ( ${Math.floor(i.current_stamina/i.stamina*100)}% )`,f)}function g(t){return Number(i(t).replace(/\[|\]/g,""))}function S(e,n,a){if(!n)return void s("",a)
const i=g(e.nextElementSibling.children[0].children[0]),f=function(e,n){if(!n){const n=t({className:"fshPlayer"})
return m(n,e.nextElementSibling),n}return n}(e,a),c=function(t,e){return t>e?"fshRed":"fshGreen"}(i,n)
s(` <span class="${c}">[${n}]</span>`,f)}function $(t,e){return e[0]===t}function B(t,e){const n=function(t,e){const n=e.getAttribute("data-name"),s=t.find(c($,n))
if(s)return s[1]}(t,e),s=e.nextElementSibling.nextElementSibling;(n||s)&&S(e,n,s)}function x(t){return t.split(/ \[|]/)}function A(t){const e=t.target
if("H1"!==e.tagName)return
p(i(e)).then(v)
const n=function(t){return h(i(t.parentNode.lastElementChild)).map(x)}(e)
f("#buff-outer input[name]").forEach(c(B,n))}const D=[50,54,55,56,60,61,98,101]
function H(t,e){(function(t,e){return!D.includes(Number(t.htmlFor.slice(6)))&&g(e.children[0])<125})(t,e)&&t.classList.add("fshDim")}function L(t){const e=t.children[0]
!function(t,e){const n=e.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
k(n.replace("</center>",`<br>Stamina Cost: ${s}$&`),e)}(t,e),H(t,e)}function N(){f('#buff-outer label[for^="skill-"]').forEach(L)}function R(t){const e=a("h1",r("players"))[0]
!function(t,e){return!t&&e}(e,t)?e&&u(e):setTimeout(R,100,t-1)}function w(){r("targetPlayers").value&&R(9)}function F(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const e=Math.floor(t/60),n=t%60
let s=j(e,"m")
return e>0&&n>0&&(s+=" "),s+=j(n,"s"),s}(t)})</span>`}function M(t,e){const s=t[e]||0
return s?F(s):function(t){const e=n(`#buff-outer input[data-name="${t}"]`)
return e?`<span class="quickbuffActivate" data-buffid="${e.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(e)}function C(t,e,n){s(M(t,e),n)}function G(t,e){return t[e.name]=e.duration,t}function O(t,e){return e.name===t}function _(t,e,n){const a=function(t,e){const n=t.find(c(O,e))
return n&&n.value||0}(t,e)
let i="fshLime"
a<100&&(i="fshRed"),s(`<span class="${i}">${a}%</span>`,n)}function P(t){!function(t){const e=t._enhancements
_(e,"Sustain",r("fshSus")),_(e,"Fury Caster",r("fshFur"))}(t),function(t){const e=t._skills.reduce(G,{})
C(e,"Guild Buffer",r("fshGB")),C(e,"Buff Master",r("fshBM")),C(e,"Extend",r("fshExt")),C(e,"Reinforce",r("fshRI"))}(t)}function Q(t){const e=r(`skill-${t}`)
e&&(e.checked=!0)}function I(){const t=o("blist")
t&&function(t){t.split(";").forEach(Q)}(t)}let z
function J(){z.length?(window.addPlayer(z.shift()),setTimeout(J,200)):setTimeout(w,200)}function K(){const t=o("players")
t&&(z=h(t),J())}async function U(t){const e=t.target
if("quickbuffActivate"!==e.className)return
l("quickbuff","quickActivate")
!function(t,e){T(e)&&(t.className="fshLime",s("On",t))}(e,await E([window.self],[e.dataset.buffid]))}function V(){b(r("helperQBheader"),U),b(r("players"),A)}function W(){if(d())return
const t=r("quickbuff")
t&&(p(window.self).then(P),y(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),q([N,I,K,V,w]))}export default W
//# sourceMappingURL=quickBuff-505dbce5.js.map
