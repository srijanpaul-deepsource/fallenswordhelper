import{c as e}from"./createInput-93c1d447.js"
import{c as t}from"./createLabel-213b60f2.js"
import{z as s,f as o,t as r,S as n}from"./calfSystem-db2edbef.js"
import{i as a}from"./insertElementBefore-165ce171.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=a(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(n,"bio","toggle"))}(s),a(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function c(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default c
//# sourceMappingURL=compressBio-56b3da9b.js.map
