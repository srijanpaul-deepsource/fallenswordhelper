import{p as e,aD as t,I as s,N as a,f as r,t as o,h as n,R as c,D as i,S as f}from"./calfSystem-587dd8d3.js"
import{c as m}from"./closestTable-a912937d.js"
import{c as l}from"./createTextArea-257795c8.js"
import{g as p}from"./getArrayByClassName-7140e93a.js"
import{a as d}from"./addLogColoring-c08afe79.js"
import"./closest-865e9de8.js"
import"./createStyle-8490a9b2.js"
import"./dataRows-31e1e8d2.js"
import"./doBuffLinkClick-52d4fbf0.js"
import"./openQuickBuffByName-5250032b.js"
import"./fshOpen-2af77be9.js"
import"./parseDateAsTimestamp-a418fe99.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}function h(e){e.setAttribute("form","dochat")}function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function b(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
c.id="dochat",a(c.elements).forEach(h),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
r(i,"keypress",o(j,c.elements[5])),c.elements[4].replaceWith(i),r(c,"submit",o(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),b()
const e=f("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-692f0016.js.map
