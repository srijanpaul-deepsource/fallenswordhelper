import{c as e}from"./createAnchor-946f1fd4.js"
import{c as a}from"./createSpan-8477dde4.js"
import{g as t}from"./getArrayByClassName-58503ecd.js"
import{g as r}from"./getTitle-68e6dfad.js"
import{E as s,p as n,aH as o,h as i,D as c,bB as f,bC as d,I as m,a6 as p,_ as l,aG as h,C as u}from"./calfSystem-540da563.js"
import{i as C}from"./insertElementBefore-6e80e0ff.js"
import{i as g}from"./insertHtmlAfterEnd-9b7c2429.js"
import{p as b}from"./parseDateAsTimestamp-b4d452d4.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
C(s,a),i(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>b(u(e.children[2]))
function T(){m("pageTwoLinks")&&function(){const e=c(`#pCC a[href="${f}"]`)
if(!e)return
g(e,E(f,"Updates"))
const a=c(`#pCC a[href="${d}"]`)
g(a,E(d,"News"))}(),m("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),m("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>m(p)&&l(p,a)}()}export default T
//# sourceMappingURL=news-388d4a58.js.map
