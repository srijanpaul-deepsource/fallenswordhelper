import{c as a}from"./createAnchor-0baa70c0.js"
import{c as e}from"./createSpan-dab32f7a.js"
import{g as t}from"./getArrayByClassName-c0c751ca.js"
import{g as r}from"./getTitle-66f54e5d.js"
import{E as s,p as n,aL as o,h as i,D as c,bG as f,bH as m,I as d,a7 as p,a0 as l,aK as h,C as u}from"./calfSystem-4b6b865d.js"
import{i as b}from"./insertElementBefore-34b77984.js"
import{i as g}from"./insertHtmlAfterEnd-e7d8b6bb.js"
import{p as C}from"./parseDateAsTimestamp-4382c341.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function _(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:_(t),target:"_blank"})
b(s,e),i(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function L(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=j(_(e[2]),e[2]),e[4]=j((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function k(a){const t=e({innerHTML:L(a)})
a.replaceChild(t,a.firstChild)}const A=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const E=a=>h("PvP Ladder",a.children[1]),v=a=>C(u(a.children[2]))
function T(){d("pageTwoLinks")&&function(){const a=c(`#pCC a[href="${f}"]`)
if(!a)return
g(a,A(f,"Updates"))
const e=c(`#pCC a[href="${m}"]`)
g(e,A(m,"News"))}(),d("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),d("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(E).map(v),e=Math.max.apply(null,a)
e>d(p)&&l(p,e)}()}export default T
//# sourceMappingURL=news-f42007bf.js.map
