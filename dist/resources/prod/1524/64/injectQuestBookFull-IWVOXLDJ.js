import{a as S}from"./chunk-PCKPT5E3.js";import{a as k}from"./chunk-GKX4CJHZ.js";import{a as h}from"./chunk-2SLP3R2S.js";import{a as b}from"./chunk-3JMRVP6D.js";import"./chunk-XH6SL2QD.js";import{a as L}from"./chunk-3QC5WQHK.js";import{a as c}from"./chunk-RMS5LI4S.js";import"./chunk-3T6V376U.js";import"./chunk-YWJ4UNHS.js";import{a as g}from"./chunk-FRV7FQNH.js";import"./chunk-XPYPU624.js";import{a as l}from"./chunk-6F7KGMTR.js";import"./chunk-E5PHBQC4.js";import{a as m}from"./chunk-XWCLQVCM.js";import"./chunk-GNGPRTAS.js";import"./chunk-EBLMPFV5.js";import{b as a}from"./chunk-P664PW54.js";import{a as Q}from"./chunk-XJ5473QP.js";import"./chunk-WM64FGHN.js";import{a as u}from"./chunk-X5N7OOVX.js";import{b as n}from"./chunk-NG7LLWFJ.js";import"./chunk-45P77O4Z.js";import"./chunk-6FX7G55Z.js";import"./chunk-DW345X2O.js";import{ua as d}from"./chunk-AWEYVB2J.js";import"./chunk-UUU5NSJN.js";function x(){return n("hideQuests")?L("hideQuestNames"):[]}function y(t,e,r){if(t.includes(e)){let o=r;c(o);for(let p=0;p<3;p++)o=o.nextElementSibling,c(o)}}function B(t,e){let r=k(g(e.cells[0]));y(t,r,e);let o=/quest_id=(\d+)/.exec(e.cells[4].innerHTML)[1];Q(S(o,r),e.cells[4])}function f(t){let e=x();h(t.rows,5,0).forEach(u(B,e))}var T,N,P,A,v,i,C=[0,3,0,1,2],V=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"];function H(t,e,r,o){return t[o].children[0].getAttribute("color")==="#FF0000"?e+r:e}function w(){let t=l("a",a);[T,N,P,A,v]=t,i=C.reduce(u(H,t),0)}function E(){let t=window.location.search;m("lastActiveQuestPage",t),m(V[i],t)}function j(t){return n(t)}function F(){return V.map(j)}function I(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}function s(t,e){e.length>0&&t.setAttribute("href",e)}function q(t,e){s(P,t[e]),s(A,t[e+1]),s(v,t[e+2])}function D(){let t=F(),e=I(t);i<3?(s(N,e[i]),q(t,0)):(s(T,e[i]),q(t,3))}function K(){n("storeLastQuestPage")&&(w(),E(),D())}function M(){b(),K();let t=l(d,a)[5];!t||f(t)}export{M as default};
//# sourceMappingURL=injectQuestBookFull-IWVOXLDJ.js.map