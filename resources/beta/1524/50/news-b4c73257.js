import{c as a}from"./createAnchor-6f1b78a5.js"
import{c as e}from"./createSpan-b1cc2640.js"
import{g as t}from"./getArrayByClassName-3e46aa9a.js"
import{g as r}from"./getTitle-ad867b49.js"
import{E as s,p as n,aQ as o,h as i,D as c,bL as f,bM as m,I as d,a8 as p,_ as l,aP as h,C as u}from"./calfSystem-617f9a5d.js"
import{i as b}from"./insertElementBefore-784d4581.js"
import{i as g}from"./insertHtmlAfterEnd-b1e65dcb.js"
import{p as C}from"./parseDateAsTimestamp-874ef6fd.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function j(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:j(t),target:"_blank"})
b(s,e),i(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function L(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=_(j(e[2]),e[2]),e[4]=_((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function k(a){const t=e({innerHTML:L(a)})
a.replaceChild(t,a.firstChild)}const A=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const E=a=>h("PvP Ladder",a.children[1]),v=a=>C(u(a.children[2]))
function P(){d("pageTwoLinks")&&function(){const a=c(`#pCC a[href="${f}"]`)
if(!a)return
g(a,A(f,"Updates"))
const e=c(`#pCC a[href="${m}"]`)
g(e,A(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),d("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(E).map(v),e=Math.max.apply(null,a)
e>d(p)&&l(p,e)}()}export default P
//# sourceMappingURL=news-b4c73257.js.map
