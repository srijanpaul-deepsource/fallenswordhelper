import{r as t,B as e,t as n,aC as s,af as o,a0 as a,aJ as i,D as c,m as r,P as l,T as m,i as p,aK as u,E as d,h as f,o as g,p as h,A as b,c as v,aL as C,C as S,aa as E,j,I as k,z as N,M as x}from"./calfSystem-01849445.js"
import{r as A,g as y}from"./rnd-9a282b09.js"
import{p as L,s as $}from"./pubsub-b96bf761.js"
import{c as B}from"./createInput-a507cfd0.js"
import{c as I}from"./createTable-4663c7a2.js"
import{g as q}from"./getArrayByClassName-da632221.js"
import{i as T}from"./insertElementAfter-5072c360.js"
import{i as F}from"./insertHtmlAfterEnd-7c1bc6a6.js"
import{i as P}from"./insertElementBefore-5adb1609.js"
function w(t,n){e("",t.children[0]),t.children[0].classList.add("fshPot"),t.children[0].style.backgroundImage=`url(${s}composing/${y(1,11)}_${y(1,51)}.png)`,e(`Creating '<span class="fshBold">${n}</span>' Potion`,t.children[2]),e("",t.children[3])}function M(t){const n=t.parentNode
n&&(e('<div class="fshScs">Success</div>',n),w(n.previousElementSibling.previousElementSibling,t[t.selectedIndex].text),0===o('[id|="composing-template"]:not(#composing-template-multi)').length&&a(i,!1))}function Q(t,n){const s=t.parentNode
s&&n&&(n.error?e(`<div class="fshScs">${n.error}</div>`,s):M(t))}function _(e){var s;(s=e.value,t({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:s,fshrnd:A()}})).then(n(Q,e))}function z(t,n){n.id=`proc-${n.id}`,e("",t),t.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),_(n),L("quickcreate")}function D(t,e){t.classList.add(`left-${e.toString()}`)}function H(t){D(t,o(".quickCreate .sendLink").length)}function J(t){const e=t.target,{templateId:n}=e.dataset
n&&function(t,e){m("composing","FastComposeButton")
const n=o('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<t.value))for(let s=0;s<t.value;s+=1)n[s].value=e,z(n[s].nextElementSibling.nextElementSibling,n[s])}(e,n)}function K(t,e,n,s){var o,a
return 0===s&&b(t[1],e.insertCell(-1)),f(e.insertCell(-1),(o=(s+1).toString(),a=t[0],B({className:"awesome orange",dataset:{templateId:a},type:"button",value:o}))),e}function R(t,e,s,o){return t.reduce(n(K,o),s.insertRow(-1)),s}function G(t){return[t.value,t.text]}function O(t,e,s){const o=function(t,e,s){const o=I({id:"fshFastCompose"})
return D(o,s),t.reduce(n(R,e,s),o)}(d("#composing-template-multi option").map(G),e,s)
f(t,o),g(h,J),$("quickcreate",n(H,o))}function U(t){m("composing","FastCompose"),p(t,"<br>")
const e=q("composing-potion-time",document),n=e.filter(u("ETA: n/a")).length
n>0?O(t,e,n):p(t,"No open slots!")}const V=/ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/
function W(t){const e=V.exec(S(t))
if(e){return 1e3*(3600*e[1]+60*e[2]+Number(e[3]))+E}return 0}function X(t){a(i,t)}function Y(t){F(t,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function Z(t){const e=t.target.parentNode;(function(t){return"SPAN"===t.tagName&&"quickCreate"===t.className})(e)&&function(t){const e=t.previousElementSibling.previousElementSibling
e&&"none"!==e.value&&(z(t,e),m("composing","QuickCreate"))}(e)}function tt(){!function(){if(!v.enableComposingAlert)return
const t=q("composing-potion-time",document),e=Math.min(...t.map(W))
0===e?X(!0):(X(!1),a(C,e))}(),d("input[id^=create-]:not(#create-multi)",h).forEach(Y),g(h,Z),function(){if(k("moveComposingButtons")){const t=N("composing-error-dialog").previousElementSibling
t.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const e=x("composing-level",h)[0].parentNode
P(t,e)}}(),function(){const t=c("#pCC div.centered")
F(t.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>')
const e=r({className:"centered"})
T(e,t)
const s=B({id:"fast-compose",type:"checkbox"})
T(s,t),l(s,"change",n(U,e))}()}function et(){j()&&h&&tt()}export default et
//# sourceMappingURL=composing-8f960796.js.map
