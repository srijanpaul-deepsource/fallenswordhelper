import{p as e,aI as t,I as s,f as a,t as r,ar as o,h as n,Q as c,D as f,R as i}from"./calfSystem-85fa6364.js"
import{c as m}from"./closestTable-7025a1a3.js"
import{c as l}from"./createTextArea-6e1ca2eb.js"
import{g as p}from"./getArrayByClassName-4fe5cf41.js"
import{a as u}from"./addLogColoring-f7dc7042.js"
import"./closest-3a475e96.js"
import"./createStyle-21f138f7.js"
import"./dataRows-b45e1fd7.js"
import"./doBuffLinkClick-3624d13c.js"
import"./openQuickBuffByName-fd250012.js"
import"./fshOpen-b549d330.js"
import"./parseDateAsTimestamp-b71ec36f.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function j(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),c(e))}function b(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const c=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(c),function(e){const t=m(e[5])
t.rows[0].cells[0].remove(),n(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(c.elements)
const f=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(f,"keypress",r(j,c.elements[5])),c.elements[4].replaceWith(f),a(c,"submit",r(d,f))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=f("#pCC table table table table")
e&&e.classList.add("fshGc")}(),b()
const e=i("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-c424c0f7.js.map
