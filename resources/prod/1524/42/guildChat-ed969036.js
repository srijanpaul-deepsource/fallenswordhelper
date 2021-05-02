import{p as e,aB as t,I as s,f as a,t as r,N as o,h as n,R as c,D as f,S as i}from"./calfSystem-15b00143.js"
import{c as m}from"./closestTable-c9ebe0fe.js"
import{c as l}from"./createTextArea-b07ed40e.js"
import{g as p}from"./getArrayByClassName-c7b90480.js"
import{a as u}from"./addLogColoring-6c8585c3.js"
import"./closest-9a08f4fa.js"
import"./createStyle-1bf46c29.js"
import"./dataRows-89a16eef.js"
import"./doBuffLinkClick-8658a255.js"
import"./openQuickBuffByName-62891ff5.js"
import"./fshOpen-cce15559.js"
import"./parseDateAsTimestamp-41bbfb83.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const f=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(f,"keypress",r(b,c.elements[5])),c.elements[4].replaceWith(f),a(c,"submit",r(d,f))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=i("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-ed969036.js.map
