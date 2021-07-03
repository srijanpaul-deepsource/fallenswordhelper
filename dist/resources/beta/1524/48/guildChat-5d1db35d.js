import{p as e,aJ as t,I as s,f as a,t as r,as as o,h as n,Q as c,D as i,R as f}from"./calfSystem-8af1dca2.js"
import{c as m}from"./closestTable-b818f80a.js"
import{c as l}from"./createTextArea-ea8fa7e1.js"
import{g as p}from"./getArrayByClassName-11de01ae.js"
import{a as d}from"./addLogColoring-be779410.js"
import"./closest-3a475e96.js"
import"./createStyle-6339f1bb.js"
import"./dataRows-a0ea22f1.js"
import"./doBuffLinkClick-8251b542.js"
import"./openQuickBuffByName-ad6d10b7.js"
import"./fshOpen-b549d330.js"
import"./parseDateAsTimestamp-39affded.js"
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
//# sourceMappingURL=guildChat-5d1db35d.js.map
