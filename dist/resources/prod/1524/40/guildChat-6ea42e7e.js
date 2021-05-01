import{p as e,aA as t,I as s,N as a,f as r,t as o,h as n,R as c,D as i,S as f}from"./calfSystem-540da563.js"
import{c as m}from"./closestTable-d049606a.js"
import{c as l}from"./createTextArea-57c1bf37.js"
import{g as p}from"./getArrayByClassName-58503ecd.js"
import{a as u}from"./addLogColoring-5e9e627b.js"
import"./closest-abbeba17.js"
import"./createStyle-25bc0126.js"
import"./dataRows-72fe4f4b.js"
import"./doBuffLinkClick-c047fb17.js"
import"./openQuickBuffByName-5c5f0fdb.js"
import"./fshOpen-9656868c.js"
import"./parseDateAsTimestamp-b4d452d4.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}function b(e){e.setAttribute("form","dochat")}function h(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
c.id="dochat",a(c.elements).forEach(b),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return b(e),e}()
r(i,"keypress",o(h,c.elements[5])),c.elements[4].replaceWith(i),r(c,"submit",o(d,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=f("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-6ea42e7e.js.map
