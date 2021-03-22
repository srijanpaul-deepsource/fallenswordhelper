import{c as e}from"./createAnchor-9c8b8998.js"
import{c as a}from"./createSpan-8d9e047a.js"
import{g as t}from"./getArrayByClassName-0b05e230.js"
import{g as r}from"./getTitle-fa26c852.js"
import{E as s,p as n,aD as o,h as i,D as c,bF as f,bG as m,I as p,a6 as l,_ as d,aC as h,C as u}from"./calfSystem-03050396.js"
import{i as b}from"./insertElementBefore-9228b012.js"
import{i as C}from"./insertHtmlAfterEnd-f4be3554.js"
import{p as g}from"./parseDateAsTimestamp-c52294f3.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
b(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>g(u(e.children[2]))
function T(){p("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
C(e,E(f,"Updates"))
const a=c(`#pCC a[href="${m}"]`)
C(a,E(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),p("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>p(l)&&d(l,a)}()}export default T
//# sourceMappingURL=news-7794a639.js.map
