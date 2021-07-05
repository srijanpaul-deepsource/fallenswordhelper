import{p as e,aI as t,I as s,f as a,t as r,ar as o,h as n,Q as c,D as i,R as f}from"./calfSystem-365d90f3.js"
import{c as m}from"./closestTable-9141d8cf.js"
import{c as l}from"./createTextArea-14c804d1.js"
import{g as p}from"./getArrayByClassName-27cf973a.js"
import{a as d}from"./addLogColoring-d11047f8.js"
import"./closest-06418423.js"
import"./createStyle-ed7b9ea6.js"
import"./dataRows-be19a2f8.js"
import"./doBuffLinkClick-d299b76c.js"
import"./openQuickBuffByName-586c4bc1.js"
import"./fshOpen-90a0d847.js"
import"./parseDateAsTimestamp-89678ec4.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function b(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",r(j,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",r(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),b()
const e=f("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-9412f94b.js.map
