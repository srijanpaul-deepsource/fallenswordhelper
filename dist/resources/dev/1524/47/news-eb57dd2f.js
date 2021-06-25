import{c as e}from"./createAnchor-b0ccbb89.js"
import{c as a}from"./createSpan-009a409b.js"
import{g as t}from"./getArrayByClassName-2fc630c7.js"
import{g as r}from"./getTitle-d1f85a98.js"
import{E as s,p as n,aQ as o,h as c,D as i,bL as f,bM as m,I as p,a8 as l,_ as d,aP as h,C as u}from"./calfSystem-bfc1f6c0.js"
import{i as b}from"./insertElementBefore-165ce171.js"
import{i as g}from"./insertHtmlAfterEnd-75bb8027.js"
import{p as C}from"./parseDateAsTimestamp-178a465e.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
b(s,a),c(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function L(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:L(e)})
e.replaceChild(t,e.firstChild)}const A=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const E=e=>h("PvP Ladder",e.children[1]),v=e=>C(u(e.children[2]))
function P(){p("pageTwoLinks")&&function(){const e=i(`#pCC a[href="${f}"]`)
if(!e)return
g(e,A(f,"Updates"))
const a=i(`#pCC a[href="${m}"]`)
g(a,A(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),p("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(E).map(v),a=Math.max.apply(null,e)
a>p(l)&&d(l,a)}()}export default P
//# sourceMappingURL=news-eb57dd2f.js.map
