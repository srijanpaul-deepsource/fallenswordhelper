import{p as e,aK as t,I as s,f as a,t as r,at as o,h as n,R as c,D as i,S as f}from"./calfSystem-9ab64478.js"
import{c as m}from"./closestTable-b7a11561.js"
import{c as l}from"./createTextArea-a74dc5e8.js"
import{g as p}from"./getArrayByClassName-a799501a.js"
import{a as u}from"./addLogColoring-865f5d3e.js"
import"./closest-0e1c7a1d.js"
import"./createStyle-a3ebff9c.js"
import"./dataRows-7f547576.js"
import"./doBuffLinkClick-1531b1e8.js"
import"./openQuickBuffByName-2b4b1ff5.js"
import"./fshOpen-c207a52b.js"
import"./parseDateAsTimestamp-caf8e72d.js"
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
//# sourceMappingURL=guildChat-0f38170d.js.map
