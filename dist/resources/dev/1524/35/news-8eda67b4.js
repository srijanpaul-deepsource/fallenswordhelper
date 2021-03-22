import{c as a}from"./createAnchor-df8b6e0b.js"
import{c as e}from"./createSpan-8048fffb.js"
import{g as t}from"./getArrayByClassName-0545a3cf.js"
import{g as r}from"./getTitle-fa26c852.js"
import{E as s,p as n,aE as o,h as i,D as f,bG as c,bH as m,I as p,a7 as d,a0 as l,aD as h,C as u}from"./calfSystem-186455ab.js"
import{i as b}from"./insertElementBefore-9228b012.js"
import{i as g}from"./insertHtmlAfterEnd-f3689d6c.js"
import{p as C}from"./parseDateAsTimestamp-6b94bab0.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(a,e){return`<a href="${a}" target="_blank">${e}</a>`}function _(a){return`${o}creatures&search_name=${a}`}function w(e){const t=encodeURIComponent(r(e)),s=a({href:_(t),target:"_blank"})
b(s,e),i(s,e)}function y(a){return $.test(a.firstChild.nodeValue)}function E(a){const e=a.firstChild.nodeValue.match($)
var t
return e[2]=j(_(e[2]),e[2]),e[4]=j((t=e[4],`${o}realms&search_name=${t}`),e[4]),e.slice(1).join("")}function k(a){const t=e({innerHTML:E(a)})
a.replaceChild(t,a.firstChild)}const A=(a,e)=>`&nbsp;<a href="${a}&page=2">View ${e} Page 2</a>`
const L=a=>h("PvP Ladder",a.children[1]),v=a=>C(u(a.children[2]))
function T(){p("pageTwoLinks")&&function(){const a=f(`#pCC a[href="${c}"]`)
if(!a)return
g(a,A(c,"Updates"))
const e=f(`#pCC a[href="${m}"]`)
g(e,A(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(k)),p("trackLadderReset")&&function(){const a=t("news_head_tavern",n).filter(L).map(v),e=Math.max.apply(null,a)
e>p(d)&&l(d,e)}()}export default T
//# sourceMappingURL=news-8eda67b4.js.map
