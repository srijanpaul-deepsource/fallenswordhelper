import{p as e,aC as t,I as s,N as a,f as r,t as o,h as n,R as c,D as i,S as m}from"./calfSystem-ab393688.js"
import{c as l}from"./closestTable-3508ce61.js"
import{c as f}from"./createTextArea-9875ccdd.js"
import{g as p}from"./getArrayByClassName-f0b57594.js"
import{a as u}from"./addLogColoring-1e4d32bb.js"
import"./closest-abbeba17.js"
import"./createStyle-804cbecc.js"
import"./dataRows-52e3a5bd.js"
import"./doBuffLinkClick-9271a8af.js"
import"./openQuickBuffByName-a32a2b4a.js"
import"./fshOpen-9656868c.js"
import"./parseDateAsTimestamp-e9cd3714.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}function b(e){e.setAttribute("form","dochat")}function h(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
c.id="dochat",a(c.elements).forEach(b),function(e){const t=l(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=f({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return b(e),e}()
r(i,"keypress",o(h,c.elements[5])),c.elements[4].replaceWith(i),r(c,"submit",o(d,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=m("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-fa087c25.js.map
