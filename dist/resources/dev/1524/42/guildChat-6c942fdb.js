import{p as e,aE as t,I as s,f as a,t as r,N as o,h as c,S as n,D as i,T as m}from"./calfSystem-4b6b865d.js"
import{c as f}from"./closestTable-0c49f776.js"
import{c as l}from"./createTextArea-69837aec.js"
import{g as p}from"./getArrayByClassName-c0c751ca.js"
import{a as u}from"./addLogColoring-6336cb30.js"
import"./closest-9a08f4fa.js"
import"./createStyle-7b96b857.js"
import"./dataRows-096bc406.js"
import"./doBuffLinkClick-85dc98d6.js"
import"./openQuickBuffByName-390aeb1d.js"
import"./fshOpen-cce15559.js"
import"./parseDateAsTimestamp-4382c341.js"
function d(e){e.value=e.value.replace(/\r\n|\n|\r/g," ")}const h=e=>{e.setAttribute("form","dochat")}
function b(e,t){"Enter"!==t.key||t.shiftKey||(t.preventDefault(),n(e))}function j(){if(!e||1!==p("header",e).filter(t("Posted By")).length||!s("enhanceChatTextEntry"))return
const n=document.forms[0]
!function(e){e.id="dochat",o(e.elements).forEach(h)}(n),function(e){const t=f(e[5])
t.rows[0].cells[0].remove(),c(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}(n.elements)
const i=function(){const e=l({cols:72,maxLength:512,name:"msg",required:!0,rows:2})
return h(e),e}()
a(i,"keypress",r(b,n.elements[5])),n.elements[4].replaceWith(i),a(n,"submit",r(d,i))}function y(){!function(){if(!s("wrapGuildChat"))return
const e=i("#pCC table table table table")
e&&e.classList.add("fshGc")}(),j()
const e=m("chat_type")
u(e&&"1"===e?"Leader":"Chat",0,3)}export default y
//# sourceMappingURL=guildChat-6c942fdb.js.map
