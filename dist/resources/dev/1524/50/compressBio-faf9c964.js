import{c as e}from"./createInput-18c4c6d4.js"
import{c as t}from"./createLabel-be5d4ba1.js"
import{z as s,f as o,t as r,T as a}from"./calfSystem-b3667af8.js"
import{i as n}from"./insertElementBefore-784d4581.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function c(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default c
//# sourceMappingURL=compressBio-faf9c964.js.map
