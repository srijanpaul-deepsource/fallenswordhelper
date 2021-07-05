import{i as n}from"./interceptSubmit-dd886fe1.js"
import{S as t,i as e,s as r,h as s,e as a,a as c,u as o,n as i,d as u,b as l,c as d,f,g as p,l as m,r as h}from"./index-c31cc1d2.js"
import{T as g,a7 as b,x as k,q as w,v as L,a8 as v,u as _,$ as y,I as x,D as C,Q as O,A as P,B as j,a9 as q,aa as S}from"./calfSystem-b3667af8.js"
import{o as T}from"./outputFormat-d0532a29.js"
import"./formToUrl-872022b8.js"
function F(n){return{c:i,m:i,p:i,d:i}}function M(n){let t,e=b(n[0]),r=e&&R(n)
return{c(){r&&r.c(),t=a()},m(n,e){r&&r.m(n,e),c(n,t,e)},p(n,s){1&s&&(e=b(n[0])),e?r?r.p(n,s):(r=R(n),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(n){r&&r.d(n),n&&u(t)}}}function R(n){let t,e,r,a,i,m={ctx:n,current:null,token:null,hasCatch:!1,pending:E,then:D,catch:$}
return s(i=n[1],m),{c(){t=l("tr"),e=l("td"),e.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder, unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',r=d(),a=l("td"),m.block.c(),f(e,"class","svelte-1quw1g"),f(a,"class","svelte-1quw1g")},m(n,s){c(n,t,s),p(t,e),p(t,r),p(t,a),m.block.m(a,m.anchor=null),m.mount=()=>a,m.anchor=null},p(t,e){n=t,m.ctx=n,2&e&&i!==(i=n[1])&&s(i,m)||o(m,n,e)},d(n){n&&u(t),m.block.d(),m.token=null,m=null}}}function $(n){return{c:i,m:i,p:i,d:i}}function D(n){let t,e,r
return{c(){t=l("input"),f(t,"type","checkbox")},m(s,a){c(s,t,a),t.checked=n[0],e||(r=[m(t,"change",n[6]),m(t,"click",n[3])],e=!0)},p(n,e){1&e&&(t.checked=n[0])},d(n){n&&u(t),e=!1,h(r)}}}function E(n){let t
return{c(){t=l("div"),t.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',f(t,"class","svelte-1quw1g")},m(n,e){c(n,t,e)},p:i,d(n){n&&u(t)}}}function H(n){return{c:i,m:i,p:i,d:i}}function I(n){let t,e={ctx:n,current:null,token:null,hasCatch:!1,pending:H,then:M,catch:F,value:7}
return s(n[2](),e),{c(){t=a(),e.block.c()},m(n,r){c(n,t,r),e.block.m(n,e.anchor=r),e.mount=()=>t.parentNode,e.anchor=t},p(t,[r]){o(e,n=t,r)},i:i,o:i,d(n){n&&u(t),e.block.d(n),e.token=null,e=null}}}function N(n,t,e){let r,s,{isOnLadder:a}=t,{toggleLadder:c}=t
return n.$$set=n=>{"isOnLadder"in n&&e(4,a=n.isOnLadder),"toggleLadder"in n&&e(5,c=n.toggleLadder)},[r,s,async function(){e(0,r=await a())},function(){e(0,r=!r),e(1,s=c(r)),g("ladder","opt in/out")},a,c,function(){r=this.checked,e(0,r)}]}class V extends t{constructor(n){super(),e(this,n,N,I,r,{isOnLadder:4,toggleLadder:5})}}function A(n){return k(w({cmd:"settings"},n))}function B(n){return A({subcmd:"flags",flags:n.map((n=>n?1:0))})}const Q=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"]
function U(n){return!!v(n)&&{s:!1,r:{e:"Could not connect to FS servers"}}}async function Y(n,t){const e=await n
if(!v(e)&&!1!==e)return e
return U(await _(t))}async function z(n){const t=await async function(){const n=await _({cmd:"settings"})
return U(n)||n}(),e=U(t)
if(e)return e
const r=L(t),s=function(n,t){const e=new FormData(n)
return e.append("pvp_ladder",t),Object.fromEntries(e.entries())}(r.forms[0],n[0]),a=function(n,t){const e=new FormData(n)
return Q.forEach(((n,r)=>e.set(n,t[r+1]))),Object.fromEntries(e.entries())}(r.forms[2],n),c=await[s,a].reduce(Y,Promise.resolve())
return!1===c?{s:!0}:c}function G(){return A({subcmd:"view"})}let J
async function K(){const n=await y(G)
return J=n.r?.flags,J?.[0]}async function W(n){if(O(J))return J[0]=n,y(B,z,J)}function X(){if(x("optInOnLadderPage")){!function(n){new V({props:{toggleLadder:W,isOnLadder:K},target:n})}(C("#pCC table tbody"))}}function Z(){const n=x(q)
return n<S-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(n){let t=Math.floor((S-n)/6e4)
const e=Math.floor(t/60)
return t%=60,`${T(e," hours, ")+t} mins`}(n)}function nn(){const n=C("#pCC table")
if(!n)return
const t=n.insertRow(-1)
!function(n){const t=n.insertCell(-1)
t.height=25,P("Last Reset:",t)}(t),function(n){const t=n.insertCell(-1)
t.align="right",j(Z(),t)}(t)}function tn(){n(),x("trackLadderReset")&&nn(),X()}export default tn
//# sourceMappingURL=ladder-c43675d2.js.map
