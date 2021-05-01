import{p as e,aB as t,I as s,N as a,f as r,t as o,h as n,R as c,D as i,S as f}from"./calfSystem-030d7057.js"
import{c as m}from"./closestTable-ffd1999e.js"
import{c as l}from"./createTextArea-70c55761.js"
import{g as p}from"./getArrayByClassName-3714a576.js"
import{a as d}from"./addLogColoring-3849fd9f.js"
import"./closest-865e9de8.js"
import"./createStyle-e7761bb9.js"
import"./dataRows-62d61bcd.js"
import"./doBuffLinkClick-60ba178c.js"
import"./openQuickBuffByName-df17ccef.js"
import"./fshOpen-2af77be9.js"
import"./parseDateAsTimestamp-66a4394c.js"
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
//# sourceMappingURL=guildChat-9f814748.js.map
