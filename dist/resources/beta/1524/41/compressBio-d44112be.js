import{c as e}from"./createInput-b30d8b81.js"
import{c as t}from"./createLabel-838167b2.js"
import{z as s,f as o,t as r,W as a}from"./calfSystem-587dd8d3.js"
import{i as n}from"./insertElementBefore-2bf2da7f.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function l(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default l
//# sourceMappingURL=compressBio-d44112be.js.map
