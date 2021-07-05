import{p as e,aJ as t,I as s,f as a,t as r,as as o,h as n,Q as c,D as i,R as f}from"./calfSystem-42f137cb.js"
import{c as m}from"./closestTable-4a848789.js"
import{c as l}from"./createTextArea-a94022a4.js"
import{g as p}from"./getArrayByClassName-97a5b37d.js"
import{a as u}from"./addLogColoring-5e144468.js"
import"./closest-0e1c7a1d.js"
import"./createStyle-4173a9c2.js"
import"./dataRows-9039c228.js"
import"./doBuffLinkClick-b32f6cfd.js"
import"./openQuickBuffByName-ca011f73.js"
import"./fshOpen-c207a52b.js"
import"./parseDateAsTimestamp-0ff8fd20.js"
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
//# sourceMappingURL=guildChat-5a5cb719.js.map
