import{c as e}from"./createAnchor-d4cc3aa6.js"
import{c as a}from"./createSpan-79ff8b4f.js"
import{g as t}from"./getArrayByClassName-fe0fed4e.js"
import{g as r}from"./getTitle-68e6dfad.js"
import{E as s,p as n,aK as o,h as f,D as i,bF as c,bG as m,I as d,a7 as p,a0 as l,aJ as h,C as u}from"./calfSystem-c464cb1d.js"
import{i as g}from"./insertElementBefore-6e80e0ff.js"
import{i as C}from"./insertHtmlAfterEnd-7649ce17.js"
import{p as b}from"./parseDateAsTimestamp-858e07af.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:_(t),target:"_blank"})
g(s,a),f(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=j(_(a[2]),a[2]),a[4]=j((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>b(u(e.children[2]))
function T(){d("pageTwoLinks")&&function(){const e=i(`#pCC a[href="${c}"]`)
if(!e)return
C(e,E(c,"Updates"))
const a=i(`#pCC a[href="${m}"]`)
C(a,E(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default T
//# sourceMappingURL=news-7bc3eb00.js.map
