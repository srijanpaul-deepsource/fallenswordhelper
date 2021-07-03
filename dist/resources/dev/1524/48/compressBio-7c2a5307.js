import{c as e}from"./createInput-a507cfd0.js"
import{c as t}from"./createLabel-4aaf0b34.js"
import{z as s,f as o,t as a,T as r}from"./calfSystem-01849445.js"
import{i as n}from"./insertElementBefore-5adb1609.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",a(r,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function c(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default c
//# sourceMappingURL=compressBio-7c2a5307.js.map
