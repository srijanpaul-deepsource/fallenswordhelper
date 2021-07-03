import{c as e}from"./createAnchor-e05d2ad3.js"
import{c as a}from"./createSpan-54352f01.js"
import{g as t}from"./getArrayByClassName-4fe5cf41.js"
import{g as r}from"./getTitle-0449c122.js"
import{E as s,p as n,aP as o,h as i,D as c,bK as f,bL as m,I as d,a7 as p,Z as l,aO as h,C as u}from"./calfSystem-85fa6364.js"
import{i as b}from"./insertElementBefore-5adb1609.js"
import{i as g}from"./insertHtmlAfterEnd-bdfcd845.js"
import{p as C}from"./parseDateAsTimestamp-b71ec36f.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function L(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:L(e)})
e.replaceChild(t,e.firstChild)}const A=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const E=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function P(){d("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,A(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
g(a,A(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(E).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default P
//# sourceMappingURL=news-15b6a3a4.js.map
