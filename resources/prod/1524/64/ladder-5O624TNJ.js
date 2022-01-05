import{a as X}from"./chunk-FAG4YDG2.js";import{P as w,Q as P,W as J,X as K,a,b as Y,d as z,o as L,p as f,q as u,s as m,u as G,v as S,w as F,z as d}from"./chunk-KRW7EAH2.js";import{a as Q}from"./chunk-3JMRVP6D.js";import"./chunk-XH6SL2QD.js";import{a as U}from"./chunk-ON5IN5Z3.js";import{a as R}from"./chunk-AU7HMMK6.js";import"./chunk-3T6V376U.js";import{a as j}from"./chunk-JEZXSBDP.js";import{a as b}from"./chunk-SDRXUAQO.js";import{a as B}from"./chunk-UWLJN7Q5.js";import{a as E}from"./chunk-E3XWNKVY.js";import{a as M}from"./chunk-QVJB3OVM.js";import{a as k}from"./chunk-7Q3UNQAY.js";import{a as N}from"./chunk-CSKN77A5.js";import{a as v}from"./chunk-3EONQEO2.js";import{a as C}from"./chunk-FA37UARH.js";import"./chunk-JDBXWYYY.js";import"./chunk-5GNYWTGT.js";import"./chunk-XG256B2T.js";import{a as y}from"./chunk-GNGPRTAS.js";import{a as W}from"./chunk-QS7J5TMD.js";import"./chunk-P664PW54.js";import{a as D}from"./chunk-XJ5473QP.js";import"./chunk-WM64FGHN.js";import"./chunk-GQGCY7E7.js";import"./chunk-LXVMDOGR.js";import"./chunk-GX4J242O.js";import"./chunk-X5N7OOVX.js";import"./chunk-X73J5C7S.js";import"./chunk-5TFX5HF5.js";import{b as p}from"./chunk-NG7LLWFJ.js";import"./chunk-45P77O4Z.js";import"./chunk-6FX7G55Z.js";import{ta as H}from"./chunk-AWEYVB2J.js";import"./chunk-UUU5NSJN.js";function nt(t){return{c:a,m:a,p:a,d:a}}function rt(t){let e=y(t[0]),r,n=e&&Z(t);return{c(){n&&n.c(),r=S()},m(o,i){n&&n.m(o,i),f(o,r,i)},p(o,i){i&1&&(e=y(o[0])),e?n?n.p(o,i):(n=Z(o),n.c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},d(o){n&&n.d(o),o&&u(r)}}}function Z(t){let e,r,n,o,i,s={ctx:t,current:null,token:null,hasCatch:!1,pending:at,then:it,catch:ot};return w(i=t[1],s),{c(){e=m("tr"),r=m("td"),r.innerHTML='<span data-tooltip="Ticking this box opts you in to the PVP Ladder, unticking it will remove you from the PVP Ladder." class="svelte-1quw1g">PvP Ladder Opt-in:</span>',n=G(),o=m("td"),s.block.c(),d(r,"class","svelte-1quw1g"),d(o,"class","svelte-1quw1g")},m(l,c){f(l,e,c),L(e,r),L(e,n),L(e,o),s.block.m(o,s.anchor=null),s.mount=()=>o,s.anchor=null},p(l,c){t=l,s.ctx=t,c&2&&i!==(i=t[1])&&w(i,s)||P(s,t,c)},d(l){l&&u(e),s.block.d(),s.token=null,s=null}}}function ot(t){return{c:a,m:a,p:a,d:a}}function it(t){let e,r,n;return{c(){e=m("input"),d(e,"type","checkbox")},m(o,i){f(o,e,i),e.checked=t[0],r||(n=[F(e,"change",t[6]),F(e,"click",t[3])],r=!0)},p(o,i){i&1&&(e.checked=o[0])},d(o){o&&u(e),r=!1,Y(n)}}}function at(t){let e;return{c(){e=m("div"),e.innerHTML='<span class="fshSpinner fshSpinner12 svelte-1quw1g"></span>',d(e,"class","svelte-1quw1g")},m(r,n){f(r,e,n)},p:a,d(r){r&&u(e)}}}function st(t){return{c:a,m:a,p:a,d:a}}function lt(t){let e,r,n={ctx:t,current:null,token:null,hasCatch:!1,pending:st,then:rt,catch:nt,value:7};return w(r=t[2](),n),{c(){e=S(),n.block.c()},m(o,i){f(o,e,i),n.block.m(o,n.anchor=i),n.mount=()=>e.parentNode,n.anchor=e},p(o,[i]){t=o,P(n,t,i)},i:a,o:a,d(o){o&&u(e),n.block.d(o),n.token=null,n=null}}}function ct(t,e,r){let{isOnLadder:n}=e,{toggleLadder:o}=e,i;async function s(){r(0,i=await n())}let l;function c(){r(0,i=!i),r(1,l=o(i)),j("ladder","opt in/out")}function et(){i=this.checked,r(0,i)}return t.$$set=h=>{"isOnLadder"in h&&r(4,n=h.isOnLadder),"toggleLadder"in h&&r(5,o=h.toggleLadder)},[i,l,s,c,n,o,et]}var $=class extends K{constructor(e){super();J(this,e,ct,lt,z,{isOnLadder:4,toggleLadder:5})}},tt=$;function g(t){return B(W({cmd:"settings"},t))}function q(t){return g({subcmd:"flags",flags:t.map(e=>e?1:0)})}var ft=["ui_preference_11","ui_preference_15","disable_wordcensor","ui_preference_30","ui_preference_21","ui_preference_33","ui_preference_23"];function ut(t,e){let r=new FormData(t);return r.append("pvp_ladder",e),R(r.entries())}function mt(t,e){let r=new FormData(t);return ft.forEach((n,o)=>r.set(n,e[o+1])),R(r.entries())}async function x(t){let e=await v({cmd:"settings"}),r=N(e),n=ut(r.forms[0],t[0]),o=mt(r.forms[2],t);return await Promise.all([n,o].map(i=>v(i))),{s:!0}}function O(t){return b(q,x,t)}function T(){return g({subcmd:"view"})}function V(){return b(T,X)}var _;async function pt(){return _=(await V()).r?.flags,_?.[0]}async function dt(t){if(M(_))return _[0]=t,O(_)}function gt(t){return new tt({props:{toggleLadder:dt,isOnLadder:pt},target:t})}function A(){if(p("optInOnLadderPage")){let t=k("#pCC table tbody");gt(t)}}function _t(t){let e=Math.floor((C-t)/6e4),r=Math.floor(e/60);return e%=60,`${U(r," hours, ")+e} mins`}function ht(){let t=p(H);return t<C-48*60*60*1e3?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':_t(t)}function kt(t){let e=t.insertCell(-1);e.height=25,E("Last Reset:",e)}function bt(t){let e=t.insertCell(-1);e.align="right",D(ht(),e)}function Lt(){let t=k("#pCC table");if(!t)return;let e=t.insertRow(-1);kt(e),bt(e)}function I(){p("trackLadderReset")&&Lt()}function wt(){Q(),I(),A()}export{wt as default};
//# sourceMappingURL=ladder-5O624TNJ.js.map
