import{c as e}from"./createAnchor-445d48b4.js"
import{c as a}from"./createSpan-e8d911bd.js"
import{g as t}from"./getArrayByClassName-0cc51c94.js"
import{g as r}from"./getTitle-8183f0a8.js"
import{E as s,p as n,aB as o,h as c,D as i,bC as f,bD as m,I as d,a6 as p,_ as l,aA as h,C as u}from"./calfSystem-7a1cce43.js"
import{i as C}from"./insertElementBefore-71272774.js"
import{i as b}from"./insertHtmlAfterEnd-c93c0b21.js"
import{p as g}from"./parseDateAsTimestamp-2c281d66.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
C(s,a),c(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function A(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function k(e){const t=a({innerHTML:A(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>g(u(e.children[2]))
function T(){d("pageTwoLinks")&&function(){const e=i(`#pCC a[href="${f}"]`)
if(!e)return
b(e,E(f,"Updates"))
const a=i(`#pCC a[href="${m}"]`)
b(a,E(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),d("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>d(p)&&l(p,a)}()}export default T
//# sourceMappingURL=news-40cc644e.js.map
