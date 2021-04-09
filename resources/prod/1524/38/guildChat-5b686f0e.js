import{I as t,p as e,D as s,f as n,t as a,b as r,g as o,h as c,R as i}from"./calfSystem-7a1cce43.js"
import{c as f}from"./createTextArea-36d5a88c.js"
import{a as u}from"./addLogColoring-5e748f10.js"
import"./createStyle-643076c0.js"
import"./dataRows-317004f0.js"
import"./doBuffLinkClick-665ce453.js"
import"./openQuickBuffByName-18faab75.js"
import"./fshOpen-ec83b065.js"
import"./parseDateAsTimestamp-2c281d66.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function m(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function d(){const t=s('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=r("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),d=function(t){const e=s("#pCC table table")
e.rows[0].cells[0].remove()
const n=e.insertRow(-1).insertCell(-1)
c(n,t)
const a=e.rows[0].cells[0]
return a.rowSpan=2,a}(t),h=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return p(e),n(e,"keypress",a(m,t)),e}(u)
d.replaceChild(h,d.children[0]),n(i,"submit",a(l,h))}function h(){t("enhanceChatTextEntry")&&e&&d(),function(){if(!t("wrapGuildChat"))return
const e=s("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}export default h
//# sourceMappingURL=guildChat-5b686f0e.js.map
