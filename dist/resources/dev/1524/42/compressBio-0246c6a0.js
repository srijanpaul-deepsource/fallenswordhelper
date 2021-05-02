import{c as e}from"./createInput-4be43807.js"
import{c as t}from"./createLabel-3123bd3b.js"
import{z as s,f as o,t as r,X as n}from"./calfSystem-4b6b865d.js"
import{i as a}from"./insertElementBefore-34b77984.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=a(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(n,"bio","toggle"))}(s),a(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function l(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default l
//# sourceMappingURL=compressBio-0246c6a0.js.map
