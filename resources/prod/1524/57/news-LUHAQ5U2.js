import{a as w}from"./chunk-MEJL244H.js";import{a as P}from"./chunk-I5CRYOOQ.js";import{a as p}from"./chunk-NVJNPDX2.js";import{a as n}from"./chunk-4OR5BUCD.js";import{a as A}from"./chunk-4OD45MKL.js";import{a as T}from"./chunk-OUFH7AQR.js";import"./chunk-TRWEOFLW.js";import{a as c}from"./chunk-BY3VYB7D.js";import{a as L}from"./chunk-WFD7HHBD.js";import"./chunk-FZKWNJGZ.js";import{b as o}from"./chunk-4UVID5BY.js";import{a as C}from"./chunk-BW7Q2ZXG.js";import{a as g}from"./chunk-IX6WKHKP.js";import"./chunk-GJSAJ2I4.js";import"./chunk-2B6J3YUG.js";import"./chunk-XGZF3G52.js";import"./chunk-3ZXYCFKP.js";import{a as y}from"./chunk-QPWRUAE6.js";import"./chunk-UL2EF2NH.js";import"./chunk-PCS24QV6.js";import"./chunk-LMAPCTSK.js";import"./chunk-ATT7QPUL.js";import"./chunk-OJFORZ5L.js";import{a as k}from"./chunk-OEMG4KI7.js";import"./chunk-IW5EBVFR.js";import"./chunk-7QMLZEL5.js";import{a as h}from"./chunk-25C4ZULH.js";import{b as r}from"./chunk-R37CWEF4.js";import"./chunk-DX6C6LKB.js";import"./chunk-VDAUATSB.js";import{S as a,T as m,V as s,ra as i}from"./chunk-OPFEBT2F.js";import"./chunk-33VL7FGV.js";import"./chunk-7ZQZE7AG.js";var v=e=>`${s}creatures&search_name=${encodeURIComponent(e)}`,U=/( titan has been spotted in )([^!]+)(!)/,E=e=>`${s}realms&search_name=${encodeURIComponent(e)}`,S=e=>`<a href="${E(e)}" target="_blank">${e}</a>`;function _(e){let t=A({href:v(w(e)),target:"_blank"});C(t,e),y(t,e)}function $(e){return U.test(e.lastChild.nodeValue)}function V(e){let t=e.lastChild.nodeValue.match(U);return t[2]=S(t[2]),t.slice(1).join("")}function H(e){let t=e.children[0];t.href=v(t.textContent),t.target="_blank"}function b(e){H(e);let t=T({innerHTML:V(e)});e.replaceChild(t,e.lastChild)}function f(){k('.news_body img[src*="/creatures/"]').forEach(_),n("news_body_tavern",o).filter($).forEach(b)}var x=(e,t)=>`&nbsp;<a href="${e}&page=2">View ${t} Page 2</a>`;function l(){let e=c(`#pCC a[href="${a}"]`);if(!e)return;p(e,x(a,"Updates"));let t=c(`#pCC a[href="${m}"]`);p(t,x(m,"News"))}var B=e=>g("PvP Ladder",e.children[1]),N=e=>P(h(e.children[2]));function d(){let t=n("news_head_tavern",o).filter(B).map(N),u=Math.max.apply(null,t);u>r(i)&&L(i,u)}function R(){r("pageTwoLinks")&&l(),r("addUfsgLinks")&&f(),r("trackLadderReset")&&d()}export{R as default};
//# sourceMappingURL=news-LUHAQ5U2.js.map
