import{I as t,p as e,D as s,f as n,t as r,b as a,g as o,h as c,R as i}from"./calfSystem-fe0ebf32.js"
import{c as f}from"./createTextArea-b0ccec11.js"
import{a as u}from"./addLogColoring-7e6fca96.js"
import"./createStyle-764720eb.js"
import"./dataRows-fe9c44ea.js"
import"./doBuffLinkClick-ffc65572.js"
import"./openQuickBuffByName-6871b68f.js"
import"./fshOpen-363b7f52.js"
import"./parseDateAsTimestamp-25c526ef.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function m(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function d(){const t=s('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=a("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),d=function(t){const e=s("#pCC table table")
e.rows[0].cells[0].remove()
const n=e.insertRow(-1).insertCell(-1)
c(n,t)
const r=e.rows[0].cells[0]
return r.rowSpan=2,r}(t),b=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return p(e),n(e,"keypress",r(m,t)),e}(u)
d.replaceChild(b,d.children[0]),n(i,"submit",r(l,b))}function b(){t("enhanceChatTextEntry")&&e&&d(),function(){if(!t("wrapGuildChat"))return
const e=s("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}export default b
//# sourceMappingURL=guildChat-eb56aca5.js.map
