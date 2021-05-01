import{c as e}from"./createInput-c427de8f.js"
import{c as t}from"./createLabel-d7c4f0d0.js"
import{z as s,f as o,t as r,W as a}from"./calfSystem-ab393688.js"
import{i as n}from"./insertElementBefore-6e80e0ff.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function c(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default c
//# sourceMappingURL=compressBio-3853c14f.js.map
