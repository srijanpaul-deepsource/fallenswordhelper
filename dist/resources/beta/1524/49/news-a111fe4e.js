import{c as a}from"./createAnchor-73fd0baa.js"
import{c as e}from"./createSpan-54af063c.js"
import{g as t}from"./getArrayByClassName-97a5b37d.js"
import{g as r}from"./getTitle-f95b26cb.js"
import{E as s,p as n,aQ as o,h as i,D as c,bL as f,bM as m,I as p,a8 as d,_ as l,aP as h,C as u}from"./calfSystem-42f137cb.js"
import{i as b}from"./insertElementBefore-c7161beb.js"
import{i as g}from"./insertHtmlAfterEnd-bc899275.js"
import{p as C}from"./parseDateAsTimestamp-0ff8fd20.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function j(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:j(t),target:"_blank"})
b(s,e),i(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function L(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=_(j(e[2]),e[2]),e[4]=_((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function k(a){const t=e({innerHTML:L(a)})
a.replaceChild(t,a.firstChild)}const A=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const E=a=>h("PvP Ladder",a.children[1]),v=a=>C(u(a.children[2]))
function P(){p("pageTwoLinks")&&function(){const a=c(`#pCC a[href="${f}"]`)
if(!a)return
g(a,A(f,"Updates"))
const e=c(`#pCC a[href="${m}"]`)
g(e,A(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),p("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(E).map(v),e=Math.max.apply(null,a)
e>p(d)&&l(d,e)}()}export default P
//# sourceMappingURL=news-a111fe4e.js.map
