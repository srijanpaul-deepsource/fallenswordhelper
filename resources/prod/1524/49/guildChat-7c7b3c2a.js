import{p as e,aI as t,I as s,f as a,t as r,ar as o,h as n,Q as c,D as i,R as m}from"./calfSystem-2172498b.js"
import{c as f}from"./closestTable-143f3288.js"
import{c as l}from"./createTextArea-2dee7542.js"
import{g as p}from"./getArrayByClassName-c230ba3d.js"
import{a as u}from"./addLogColoring-c89a2933.js"
import"./closest-0e1c7a1d.js"
import"./createStyle-9ebe28f9.js"
import"./dataRows-535168ee.js"
import"./doBuffLinkClick-c326a239.js"
import"./openQuickBuffByName-8e50e0f6.js"
import"./fshOpen-c207a52b.js"
import"./parseDateAsTimestamp-24bb18a4.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=f(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",r(b,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",r(d,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=m("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-7c7b3c2a.js.map
