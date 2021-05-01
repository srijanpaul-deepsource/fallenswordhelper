import{p as e,aE as t,I as s,N as a,f as r,t as o,h as n,S as c,D as i,T as f}from"./calfSystem-817ceb25.js"
import{c as m}from"./closestTable-c2864887.js"
import{c as l}from"./createTextArea-3d234b04.js"
import{g as p}from"./getArrayByClassName-fde4b553.js"
import{a as d}from"./addLogColoring-76f1e5e6.js"
import"./closest-865e9de8.js"
import"./createStyle-9786f6e8.js"
import"./dataRows-dbbb793f.js"
import"./doBuffLinkClick-e1031deb.js"
import"./openQuickBuffByName-82ae0d1d.js"
import"./fshOpen-2af77be9.js"
import"./parseDateAsTimestamp-0e180583.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}function h(e){e.setAttribute("form","dochat")}function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
c.id="dochat",a(c.elements).forEach(h),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
r(i,"keypress",o(b,c.elements[5])),c.elements[4].replaceWith(i),r(c,"submit",o(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-56da0117.js.map
