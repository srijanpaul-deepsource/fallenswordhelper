import{c as e}from"./createAnchor-f7b56093.js"
import{c as a}from"./createSpan-8ddb7122.js"
import{g as t}from"./getArrayByClassName-e5960a90.js"
import{g as r}from"./getTitle-d1f85a98.js"
import{E as s,p as n,aP as o,h as i,D as f,bK as c,bL as m,I as d,a7 as p,Z as l,aO as h,C as u}from"./calfSystem-db2edbef.js"
import{i as b}from"./insertElementBefore-165ce171.js"
import{i as g}from"./insertHtmlAfterEnd-f4abe003.js"
import{p as C}from"./parseDateAsTimestamp-099fe353.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function L(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:L(e)})
e.replaceChild(t,e.firstChild)}const A=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const E=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function P(){d("pageTwoLinks")&&function(){const e=f(`#pCC a[href="${c}"]`)
if(!e)return
g(e,A(c,"Updates"))
const a=f(`#pCC a[href="${m}"]`)
g(a,A(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(E).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default P
//# sourceMappingURL=news-225812a2.js.map
