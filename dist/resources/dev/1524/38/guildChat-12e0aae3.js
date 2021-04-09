import{I as t,p as e,D as s,f as n,t as r,b as a,g as o,h as c,S as i}from"./calfSystem-d56087e1.js"
import{c as f}from"./createTextArea-88c07d7e.js"
import{a as u}from"./addLogColoring-39cd0dd2.js"
import"./createStyle-c144dc93.js"
import"./dataRows-ce1a2933.js"
import"./doBuffLinkClick-352bed35.js"
import"./openQuickBuffByName-d6026140.js"
import"./fshOpen-ec83b065.js"
import"./parseDateAsTimestamp-62bbf100.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function d(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function m(){const t=s('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=a("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),m=function(t){const e=s("#pCC table table")
e.rows[0].cells[0].remove()
const n=e.insertRow(-1).insertCell(-1)
c(n,t)
const r=e.rows[0].cells[0]
return r.rowSpan=2,r}(t),b=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return p(e),n(e,"keypress",r(d,t)),e}(u)
m.replaceChild(b,m.children[0]),n(i,"submit",r(l,b))}function b(){t("enhanceChatTextEntry")&&e&&m(),function(){if(!t("wrapGuildChat"))return
const e=s("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}export default b
//# sourceMappingURL=guildChat-12e0aae3.js.map
