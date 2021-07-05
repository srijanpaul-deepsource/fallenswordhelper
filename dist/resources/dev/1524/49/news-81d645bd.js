import{c as a}from"./createAnchor-ac5cdba2.js"
import{c as e}from"./createSpan-7ce539c8.js"
import{g as t}from"./getArrayByClassName-a799501a.js"
import{g as r}from"./getTitle-f95b26cb.js"
import{E as s,p as n,aR as o,h as c,D as i,bM as f,bN as m,I as p,a9 as d,a0 as l,aQ as h,C as u}from"./calfSystem-9ab64478.js"
import{i as b}from"./insertElementBefore-c7161beb.js"
import{i as g}from"./insertHtmlAfterEnd-1cda96b6.js"
import{p as C}from"./parseDateAsTimestamp-caf8e72d.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function _(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:_(t),target:"_blank"})
b(s,e),c(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function k(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=j(_(e[2]),e[2]),e[4]=j((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function A(a){const t=e({innerHTML:k(a)})
a.replaceChild(t,a.firstChild)}const E=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const L=a=>h("PvP Ladder",a.children[1]),v=a=>C(u(a.children[2]))
function T(){p("pageTwoLinks")&&function(){const a=i(`#pCC a[href="${f}"]`)
if(!a)return
g(a,E(f,"Updates"))
const e=i(`#pCC a[href="${m}"]`)
g(e,E(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),p("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(L).map(v),e=Math.max.apply(null,a)
e>p(d)&&l(d,e)}()}export default T
//# sourceMappingURL=news-81d645bd.js.map
