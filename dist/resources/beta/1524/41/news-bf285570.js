import{c as e}from"./createAnchor-339a68ff.js"
import{c as a}from"./createSpan-f508c88b.js"
import{g as t}from"./getArrayByClassName-7140e93a.js"
import{g as r}from"./getTitle-4d8a0e38.js"
import{E as s,p as n,aK as o,h as i,D as f,bF as c,bG as m,I as d,a6 as p,_ as l,aJ as h,C as u}from"./calfSystem-587dd8d3.js"
import{i as g}from"./insertElementBefore-2bf2da7f.js"
import{i as C}from"./insertHtmlAfterEnd-1470722f.js"
import{p as b}from"./parseDateAsTimestamp-a418fe99.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
g(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>b(u(e.children[2]))
function T(){d("pageTwoLinks")&&function(){const e=f(`#pCC a[href="${c}"]`)
if(!e)return
C(e,E(c,"Updates"))
const a=f(`#pCC a[href="${m}"]`)
C(a,E(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default T
//# sourceMappingURL=news-bf285570.js.map
