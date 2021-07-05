import{p as e,aJ as t,I as s,f as a,t as r,as as o,h as n,Q as c,D as i,R as f}from"./calfSystem-617f9a5d.js"
import{c as m}from"./closestTable-b12094ca.js"
import{c as l}from"./createTextArea-4f740eab.js"
import{g as p}from"./getArrayByClassName-3e46aa9a.js"
import{a as u}from"./addLogColoring-6257b1c4.js"
import"./closest-06418423.js"
import"./createStyle-b99b7d2e.js"
import"./dataRows-525495e8.js"
import"./doBuffLinkClick-c2f64080.js"
import"./openQuickBuffByName-a794d2ad.js"
import"./fshOpen-90a0d847.js"
import"./parseDateAsTimestamp-874ef6fd.js"
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
//# sourceMappingURL=guildChat-78f34eca.js.map
