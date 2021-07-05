import{c as e}from"./createInput-7ea7a166.js"
import{c as t}from"./createLabel-776ff4e5.js"
import{z as s,f as o,t as r,S as a}from"./calfSystem-365d90f3.js"
import{i as n}from"./insertElementBefore-784d4581.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function f(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default f
//# sourceMappingURL=compressBio-c8db0d17.js.map
