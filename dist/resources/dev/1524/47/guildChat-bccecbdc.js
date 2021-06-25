import{p as e,aJ as t,I as s,f as a,t as r,as as o,h as n,R as c,D as i,S as m}from"./calfSystem-bfc1f6c0.js"
import{c as f}from"./closestTable-7130e192.js"
import{c as l}from"./createTextArea-42b930d1.js"
import{g as p}from"./getArrayByClassName-2fc630c7.js"
import{a as u}from"./addLogColoring-b3469a4a.js"
import"./closest-4542e515.js"
import"./createStyle-d990262e.js"
import"./dataRows-7d251346.js"
import"./doBuffLinkClick-54451979.js"
import"./openQuickBuffByName-3a3b6dee.js"
import"./fshOpen-a2455e89.js"
import"./parseDateAsTimestamp-178a465e.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function b(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=f(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",r(j,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",r(d,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),b()
const e=m("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-bccecbdc.js.map
