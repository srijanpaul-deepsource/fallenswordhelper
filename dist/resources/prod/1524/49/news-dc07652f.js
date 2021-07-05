import{c as a}from"./createAnchor-24329b70.js"
import{c as e}from"./createSpan-b3281070.js"
import{g as t}from"./getArrayByClassName-c230ba3d.js"
import{g as r}from"./getTitle-f95b26cb.js"
import{E as s,p as n,aP as o,h as i,D as c,bK as f,bL as m,I as p,a7 as l,Z as d,aO as h,C as b}from"./calfSystem-2172498b.js"
import{i as u}from"./insertElementBefore-c7161beb.js"
import{i as g}from"./insertHtmlAfterEnd-ab1f79ab.js"
import{p as C}from"./parseDateAsTimestamp-24bb18a4.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function _(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:_(t),target:"_blank"})
u(s,e),i(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function L(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=j(_(e[2]),e[2]),e[4]=j((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function k(a){const t=e({innerHTML:L(a)})
a.replaceChild(t,a.firstChild)}const A=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const E=a=>h("PvP Ladder",a.children[1]),v=a=>C(b(a.children[2]))
function P(){p("pageTwoLinks")&&function(){const a=c(`#pCC a[href="${f}"]`)
if(!a)return
g(a,A(f,"Updates"))
const e=c(`#pCC a[href="${m}"]`)
g(e,A(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),p("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(E).map(v),e=Math.max.apply(null,a)
e>p(l)&&d(l,e)}()}export default P
//# sourceMappingURL=news-dc07652f.js.map
