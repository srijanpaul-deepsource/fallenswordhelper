import{I as t,p as e,D as s,f as n,t as r,b as a,g as o,h as c,S as i}from"./calfSystem-186455ab.js"
import{c as f}from"./createTextArea-7750b1cc.js"
import{a as u}from"./addLogColoring-3f8564d1.js"
import"./createStyle-8a0701e7.js"
import"./dataRows-f1e5d572.js"
import"./doBuffLinkClick-8148641b.js"
import"./openQuickBuffByName-058f1f1e.js"
import"./fshOpen-363b7f52.js"
import"./parseDateAsTimestamp-6b94bab0.js"
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
//# sourceMappingURL=guildChat-f196db30.js.map
