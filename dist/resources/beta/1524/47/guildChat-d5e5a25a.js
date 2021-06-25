import{p as e,aI as t,I as s,f as a,t as r,ar as o,h as n,Q as c,D as i,R as f}from"./calfSystem-db2edbef.js"
import{c as m}from"./closestTable-4592ae11.js"
import{c as l}from"./createTextArea-8a755c84.js"
import{g as p}from"./getArrayByClassName-e5960a90.js"
import{a as u}from"./addLogColoring-7837c482.js"
import"./closest-4542e515.js"
import"./createStyle-405c1e12.js"
import"./dataRows-75ebbe50.js"
import"./doBuffLinkClick-cd1af5e1.js"
import"./openQuickBuffByName-76c48ffd.js"
import"./fshOpen-a2455e89.js"
import"./parseDateAsTimestamp-099fe353.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function b(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",r(j,c.elements[5])),c.elements[4].replaceWith(i),a(c,"submit",r(d,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),b()
const e=f("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-d5e5a25a.js.map
