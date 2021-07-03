import{c as e}from"./createAnchor-9068e154.js"
import{c as a}from"./createSpan-0e686680.js"
import{g as t}from"./getArrayByClassName-11de01ae.js"
import{g as r}from"./getTitle-0449c122.js"
import{E as s,p as n,aQ as o,h as i,D as c,bL as f,bM as m,I as d,a8 as p,_ as l,aP as h,C as u}from"./calfSystem-8af1dca2.js"
import{i as g}from"./insertElementBefore-5adb1609.js"
import{i as C}from"./insertHtmlAfterEnd-e22ce08b.js"
import{p as b}from"./parseDateAsTimestamp-39affded.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
g(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function L(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:L(e)})
e.replaceChild(t,e.firstChild)}const A=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const E=e=>h("PvP Ladder",e.children[1]),v=e=>b(u(e.children[2]))
function P(){d("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
C(e,A(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
C(a,A(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(E).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default P
//# sourceMappingURL=news-1a3a9552.js.map
