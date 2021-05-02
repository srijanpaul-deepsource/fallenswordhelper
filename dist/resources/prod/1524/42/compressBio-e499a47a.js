import{c as e}from"./createInput-ff6bf89d.js"
import{c as t}from"./createLabel-2f7ab48b.js"
import{z as s,f as o,t as r,W as a}from"./calfSystem-15b00143.js"
import{i as n}from"./insertElementBefore-34b77984.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function f(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default f
//# sourceMappingURL=compressBio-e499a47a.js.map
