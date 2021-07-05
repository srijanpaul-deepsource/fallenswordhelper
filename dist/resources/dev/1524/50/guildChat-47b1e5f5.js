import{p as e,aK as t,I as s,f as a,t as r,at as o,h as n,R as c,D as i,S as f}from"./calfSystem-b3667af8.js"
import{c as m}from"./closestTable-e002cde5.js"
import{c as l}from"./createTextArea-05172be9.js"
import{g as p}from"./getArrayByClassName-2345f1a3.js"
import{a as d}from"./addLogColoring-86e27d9d.js"
import"./closest-06418423.js"
import"./createStyle-7b65d830.js"
import"./dataRows-f96281bd.js"
import"./doBuffLinkClick-cf8bd0f0.js"
import"./openQuickBuffByName-18de8163.js"
import"./fshOpen-90a0d847.js"
import"./parseDateAsTimestamp-b763f22d.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",r(b,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",r(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-47b1e5f5.js.map
