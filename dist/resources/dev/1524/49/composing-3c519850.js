import{r as e,B as t,t as n,aC as s,af as o,a0 as a,aJ as i,D as c,m as r,P as l,T as m,i as p,aK as u,E as d,h as f,o as g,p as h,A as b,c as v,aL as C,C as S,aa as E,j,I as k,z as N,M as x}from"./calfSystem-9ab64478.js"
import{r as A,g as y}from"./rnd-1618b1ea.js"
import{p as L,s as $}from"./pubsub-18b710cb.js"
import{c as B}from"./createInput-48825441.js"
import{c as I}from"./createTable-54039451.js"
import{g as q}from"./getArrayByClassName-a799501a.js"
import{i as T}from"./insertElementAfter-766d923a.js"
import{i as F}from"./insertHtmlAfterEnd-1cda96b6.js"
import{i as P}from"./insertElementBefore-c7161beb.js"
function w(e,n){t("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=`url(${s}composing/${y(1,11)}_${y(1,51)}.png)`,t(`Creating '<span class="fshBold">${n}</span>' Potion`,e.children[2]),t("",e.children[3])}function M(e){const n=e.parentNode
n&&(t('<div class="fshScs">Success</div>',n),w(n.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),0===o('[id|="composing-template"]:not(#composing-template-multi)').length&&a(i,!1))}function Q(e,n){const s=e.parentNode
s&&n&&(n.error?t(`<div class="fshScs">${n.error}</div>`,s):M(e))}function _(t){var s;(s=t.value,e({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:s,fshrnd:A()}})).then(n(Q,t))}function z(e,n){n.id=`proc-${n.id}`,t("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),_(n),L("quickcreate")}function D(e,t){e.classList.add(`left-${t.toString()}`)}function H(e){D(e,o(".quickCreate .sendLink").length)}function J(e){const t=e.target,{templateId:n}=t.dataset
n&&function(e,t){m("composing","FastComposeButton")
const n=o('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<e.value))for(let s=0;s<e.value;s+=1)n[s].value=t,z(n[s].nextElementSibling.nextElementSibling,n[s])}(t,n)}function K(e,t,n,s){var o,a
return 0===s&&b(e[1],t.insertCell(-1)),f(t.insertCell(-1),(o=(s+1).toString(),a=e[0],B({className:"awesome orange",dataset:{templateId:a},type:"button",value:o}))),t}function R(e,t,s,o){return e.reduce(n(K,o),s.insertRow(-1)),s}function G(e){return[e.value,e.text]}function O(e,t,s){const o=function(e,t,s){const o=I({id:"fshFastCompose"})
return D(o,s),e.reduce(n(R,t,s),o)}(d("#composing-template-multi option").map(G),t,s)
f(e,o),g(h,J),$("quickcreate",n(H,o))}function U(e){m("composing","FastCompose"),p(e,"<br>")
const t=q("composing-potion-time",document),n=t.filter(u("ETA: n/a")).length
n>0?O(e,t,n):p(e,"No open slots!")}const V=/ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/
function W(e){const t=V.exec(S(e))
if(t){return 1e3*(3600*t[1]+60*t[2]+Number(t[3]))+E}return 0}function X(e){a(i,e)}function Y(e){F(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function Z(e){const t=e.target.parentNode;(function(e){return"SPAN"===e.tagName&&"quickCreate"===e.className})(t)&&function(e){const t=e.previousElementSibling.previousElementSibling
t&&"none"!==t.value&&(z(e,t),m("composing","QuickCreate"))}(t)}function ee(){!function(){if(!v.enableComposingAlert)return
const e=q("composing-potion-time",document),t=Math.min(...e.map(W))
0===t?X(!0):(X(!1),a(C,t))}(),d("input[id^=create-]:not(#create-multi)",h).forEach(Y),g(h,Z),function(){if(k("moveComposingButtons")){const e=N("composing-error-dialog").previousElementSibling
e.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const t=x("composing-level",h)[0].parentNode
P(e,t)}}(),function(){const e=c("#pCC div.centered")
F(e.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>')
const t=r({className:"centered"})
T(t,e)
const s=B({id:"fast-compose",type:"checkbox"})
T(s,e),l(s,"change",n(U,t))}()}function te(){j()&&h&&ee()}export default te
//# sourceMappingURL=composing-3c519850.js.map
