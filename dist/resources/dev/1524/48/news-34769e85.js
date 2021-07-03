import{c as a}from"./createAnchor-6205437d.js"
import{c as e}from"./createSpan-3a4a65d3.js"
import{g as t}from"./getArrayByClassName-da632221.js"
import{g as r}from"./getTitle-0449c122.js"
import{E as s,p as n,aR as o,h as i,D as c,bM as f,bN as m,I as d,a9 as p,a0 as l,aQ as h,C as u}from"./calfSystem-01849445.js"
import{i as b}from"./insertElementBefore-5adb1609.js"
import{i as g}from"./insertHtmlAfterEnd-7c1bc6a6.js"
import{p as C}from"./parseDateAsTimestamp-95db0f2d.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function _(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:_(t),target:"_blank"})
b(s,e),i(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function k(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=j(_(e[2]),e[2]),e[4]=j((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function A(a){const t=e({innerHTML:k(a)})
a.replaceChild(t,a.firstChild)}const E=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const L=a=>h("PvP Ladder",a.children[1]),v=a=>C(u(a.children[2]))
function T(){d("pageTwoLinks")&&function(){const a=c(`#pCC a[href="${f}"]`)
if(!a)return
g(a,E(f,"Updates"))
const e=c(`#pCC a[href="${m}"]`)
g(e,E(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),d("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(L).map(v),e=Math.max.apply(null,a)
e>d(p)&&l(p,e)}()}export default T
//# sourceMappingURL=news-34769e85.js.map
