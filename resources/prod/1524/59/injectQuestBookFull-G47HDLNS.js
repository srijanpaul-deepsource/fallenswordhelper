import{a as b}from"./chunk-ALBMH2DP.js";import{a as y}from"./chunk-L6YVLHKW.js";import"./chunk-PRGWDCLB.js";import{a as L}from"./chunk-GXJRUWMF.js";import{a as T}from"./chunk-VD6II6W6.js";import"./chunk-BZJTPYZA.js";import{a as h}from"./chunk-LXZINSYK.js";import{a as c}from"./chunk-AP47UOBN.js";import{a as l}from"./chunk-YZLKCQP2.js";import"./chunk-KXW7HYGX.js";import{b as u}from"./chunk-IYHXDIFW.js";import"./chunk-XCF76CMD.js";import{a as g}from"./chunk-RC4NT5JT.js";import"./chunk-AIP6BPK2.js";import"./chunk-EQPMHYZD.js";import{a}from"./chunk-H6KXMG2X.js";import{a as Q}from"./chunk-J3KBZ4ZI.js";import"./chunk-PYNBBPHV.js";import"./chunk-SRX5YX5V.js";import"./chunk-A6IIWQBH.js";import"./chunk-MC5JUWDN.js";import{b as r}from"./chunk-AACPE6UD.js";import"./chunk-SCZYWGQD.js";import"./chunk-AMPLIILU.js";import{sa as d}from"./chunk-7JEA3TWT.js";import"./chunk-5BRYW4V3.js";import{a as m}from"./chunk-MJT5TAYX.js";function v(){return r("hideQuests")?T("hideQuestNames"):[]}function w(e,t,n){if(e.includes(t)){let o=n;c(o);for(let p=0;p<3;p++)o=o.nextElementSibling,c(o)}}function x(e,t){let n=L(g(t.cells[0]));w(e,n,t);let o=/quest_id=(\d+)/.exec(t.cells[4].innerHTML)[1];Q(b(o,n),t.cells[4])}function f(e){let t=v();h(e.rows,5,0).forEach(m(x,t))}var S,k,N,V,A,i,E=[0,3,0,1,2],B=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"];function H(e,t,n,o){return e[o].children[0].getAttribute("color")==="#FF0000"?t+n:t}function q(){let e=a("a",u);[S,k,N,V,A]=e,i=E.reduce(m(H,e),0)}function C(){let e=window.location.search;l("lastActiveQuestPage",e),l(B[i],e)}function j(e){return r(e)}function I(){return B.map(j)}function D(e){return[e[3],e[4],e[5],e[0],e[1],e[2]]}function s(e,t){t.length>0&&e.setAttribute("href",t)}function P(e,t){s(N,e[t]),s(V,e[t+1]),s(A,e[t+2])}function F(){let e=I(),t=D(e);i<3?(s(k,t[i]),P(e,0)):(s(S,t[i]),P(e,3))}function R(){r("storeLastQuestPage")&&(q(),C(),F())}function K(){y(),R();let e=a(d,u)[5];!e||f(e)}export{K as default};
//# sourceMappingURL=injectQuestBookFull-G47HDLNS.js.map