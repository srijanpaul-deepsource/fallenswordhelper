import{a as D}from"./chunk-B5ZQ56HE.js";import{c as R,d as T,e as B,f as L}from"./chunk-OKYYF4U4.js";import"./chunk-CS6RK3S5.js";import"./chunk-V7V2OEA5.js";import"./chunk-VQFF4KEY.js";import"./chunk-L42JV3AT.js";import"./chunk-ABU7EFWZ.js";import"./chunk-2QCX6TSH.js";import"./chunk-QNPSGVM3.js";import"./chunk-3VYQ5OVV.js";import{D as E,E as j,a as h,b as H,c as C,d as v,e as b,f as k,g as P,h as p,i as y,j as S,l as g,n as a,p as Q,u as A}from"./chunk-ZHHJEY5V.js";import"./chunk-F3D3J6RM.js";import"./chunk-5ITL5FDM.js";import{a as q}from"./chunk-VFCOMEFT.js";import{a as N}from"./chunk-QCFPXMNH.js";import"./chunk-WHAZT5VY.js";import{a as G}from"./chunk-UWKUUDVQ.js";import"./chunk-D6BL5IS3.js";import"./chunk-NIO7Y7L5.js";import"./chunk-MHANGBVH.js";import"./chunk-WPSD22KE.js";import"./chunk-AN443625.js";import"./chunk-UICWONBW.js";import"./chunk-7GAPHNBH.js";import"./chunk-YYZHVDZH.js";import"./chunk-VI3RZM5G.js";import"./chunk-WV4YXE4F.js";import"./chunk-6HK7Y3PF.js";import"./chunk-22YAZV3W.js";import"./chunk-WBUJCSKW.js";import"./chunk-ND3XCMOS.js";import"./chunk-74YALW75.js";import"./chunk-WPRJK6Q2.js";import"./chunk-PJ32ASZ7.js";import"./chunk-F5QOVYT2.js";import"./chunk-CT4SVZHO.js";import"./chunk-QFSH2B2J.js";import{a as x}from"./chunk-2PFHY365.js";import"./chunk-YABTPUUA.js";import"./chunk-QVQPQPMX.js";import"./chunk-ZDFDMUO4.js";import"./chunk-2V5OQ7JE.js";import"./chunk-V6CXAOJZ.js";import"./chunk-GGKSIQST.js";import"./chunk-JSWEJZHY.js";import"./chunk-JZLUF437.js";import"./chunk-G3O526VI.js";import"./chunk-GHQYBWLT.js";import{a as F}from"./chunk-N2KVYLIG.js";import"./chunk-PKDG64MH.js";import"./chunk-2B42SRXB.js";import"./chunk-3IGXKFMQ.js";import"./chunk-GLHEJYH7.js";import"./chunk-EPYDL6MF.js";import{a as $}from"./chunk-TDNJGM62.js";import"./chunk-TP7JP7VV.js";import{b as V}from"./chunk-HAINOYE5.js";import"./chunk-AN5TC666.js";import"./chunk-B7PLPUHK.js";import"./chunk-YNXRNCRL.js";import"./chunk-7DPOBF7C.js";import{a as w}from"./chunk-DEDCEYVR.js";function W(t){let e,o,l,i;return{c(){e=p("button"),e.textContent="Check All",o=y("\xA0"),a(e,"class","custombutton svelte-1recp8w"),a(e,"type","button")},m(n,u){b(n,e,u),b(n,o,u),l||(i=g(e,"click",t[0]),l=!0)},p:h,i:h,o:h,d(n){n&&k(e),n&&k(o),l=!1,i()}}}function X(t){let e=A();function o(){F("storeitems","Check All"),e("checkall")}return[o]}var M=class extends j{constructor(e){super();E(this,e,X,W,C,{})}},z=M;function J(t,e,o){let l=t.slice();return l[6]=e[o][0],l[7]=e[o][1],l}function K(t){let e,o=t[7]+"",l,i,n;function u(){return t[4](t[6])}return{c(){e=p("button"),l=y(o),a(e,"type","button"),a(e,"class","svelte-1gvij2s")},m(f,d){b(f,e,d),v(e,l),i||(n=g(e,"click",u),i=!0)},p(f,d){t=f,d&1&&o!==(o=t[7]+"")&&Q(l,o)},d(f){f&&k(e),i=!1,n()}}}function Y(t){let e,o,l,i,n,u,f,d,m=x(t[0].folders),c=[];for(let r=0;r<m.length;r+=1)c[r]=K(J(t,m,r));return{c(){e=p("tr"),o=p("td"),l=p("button"),l.textContent="All",i=S(),n=p("button"),n.textContent="Main",u=S();for(let r=0;r<c.length;r+=1)c[r].c();a(l,"type","button"),a(l,"class","svelte-1gvij2s"),a(n,"type","button"),a(n,"class","svelte-1gvij2s"),a(o,"colspan","3"),a(e,"class","fshCenter")},m(r,_){b(r,e,_),v(e,o),v(o,l),v(o,i),v(o,n),v(o,u);for(let s=0;s<c.length;s+=1)c[s].m(o,null);f||(d=[g(l,"click",t[2]),g(n,"click",t[3])],f=!0)},p(r,[_]){if(_&3){m=x(r[0].folders);let s;for(s=0;s<m.length;s+=1){let I=J(r,m,s);c[s]?c[s].p(I,_):(c[s]=K(I),c[s].c(),c[s].m(o,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=m.length}},i:h,o:h,d(r){r&&k(e),P(c,r),f=!1,H(d)}}}function Z(t,e,o){let l=A(),{inv:i={folders:{}}}=e;function n(m){F("storeitems","Filter Folder"),l("filter",m)}let u=()=>n("-2"),f=()=>n("-1"),d=m=>n(m);return t.$$set=m=>{"inv"in m&&o(0,i=m.inv)},[i,n,u,f,d]}var O=class extends j{constructor(e){super();E(this,e,Z,Y,C,{inv:0})}},U=O;function ee(t,e,o){o.checked=!1;let l=q(o),i=t.items[o.value].folder_id,n=e!==-2&&e!==i;D(l,n),D(l.nextElementSibling,n)}function te(t,e){N([5,3,R(),0,w(ee,t,Number(e.detail))])}async function oe(){let t=await B();if(!t||!t.folders)return;let e=document.forms[0];new U({anchor:e,props:{inv:t},target:e.parentNode}).$on("filter",w(te,t))}function le(){T().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function ne(){let t=$(document.forms[0].elements).filter(o=>o.type==="submit")[0];new z({anchor:t,target:t.parentNode}).$on("checkall",le)}function re(){G()&&V("enableFolderFilter")&&oe(),ne(),L()}export{re as default};
//# sourceMappingURL=storeitems-NL3DOVJQ.js.map