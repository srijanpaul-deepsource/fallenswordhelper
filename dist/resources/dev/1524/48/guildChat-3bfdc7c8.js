import{p as e,aK as t,I as s,f as a,t as r,at as o,h as n,R as c,D as i,S as f}from"./calfSystem-01849445.js"
import{c as m}from"./closestTable-9e76cce0.js"
import{c as l}from"./createTextArea-21233cbe.js"
import{g as p}from"./getArrayByClassName-da632221.js"
import{a as u}from"./addLogColoring-71fb65b6.js"
import"./closest-3a475e96.js"
import"./createStyle-f0f6fcb0.js"
import"./dataRows-5146569c.js"
import"./doBuffLinkClick-ab5528ee.js"
import"./openQuickBuffByName-a7eecc9f.js"
import"./fshOpen-b549d330.js"
import"./parseDateAsTimestamp-95db0f2d.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",r(b,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",r(d,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-3bfdc7c8.js.map
