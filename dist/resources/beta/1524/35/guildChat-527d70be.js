import{I as t,p as e,D as s,f as n,t as r,b as a,g as o,h as c,R as i}from"./calfSystem-03050396.js"
import{c as f}from"./createTextArea-e628ad87.js"
import{a as u}from"./addLogColoring-0ff34005.js"
import"./createStyle-2fa96408.js"
import"./dataRows-737117b7.js"
import"./doBuffLinkClick-f14da71c.js"
import"./openQuickBuffByName-37d4d190.js"
import"./fshOpen-363b7f52.js"
import"./parseDateAsTimestamp-c52294f3.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function m(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function d(){const t=s('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=a("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),d=function(t){const e=s("#pCC table table")
e.rows[0].cells[0].remove()
const n=e.insertRow(-1).insertCell(-1)
c(n,t)
const r=e.rows[0].cells[0]
return r.rowSpan=2,r}(t),h=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return p(e),n(e,"keypress",r(m,t)),e}(u)
d.replaceChild(h,d.children[0]),n(i,"submit",r(l,h))}function h(){t("enhanceChatTextEntry")&&e&&d(),function(){if(!t("wrapGuildChat"))return
const e=s("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}export default h
//# sourceMappingURL=guildChat-527d70be.js.map
