import{p as e,aD as t,I as s,N as a,f as r,t as o,h as n,S as c,D as i,T as f}from"./calfSystem-c464cb1d.js"
import{c as m}from"./closestTable-e6163be9.js"
import{c as l}from"./createTextArea-de095d59.js"
import{g as p}from"./getArrayByClassName-fe0fed4e.js"
import{a as d}from"./addLogColoring-cd83cb50.js"
import"./closest-abbeba17.js"
import"./createStyle-d6fcdb12.js"
import"./dataRows-ddba9ba2.js"
import"./doBuffLinkClick-4c9117a2.js"
import"./openQuickBuffByName-3ae950c8.js"
import"./fshOpen-9656868c.js"
import"./parseDateAsTimestamp-858e07af.js"
function u(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}function b(e){e.setAttribute("form","dochat")}function h(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
c.id="dochat",a(c.elements).forEach(b),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return b(e),e}()
r(i,"keypress",o(h,c.elements[5])),c.elements[4].replaceWith(i),r(c,"submit",o(u,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
d(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-892b3c82.js.map
