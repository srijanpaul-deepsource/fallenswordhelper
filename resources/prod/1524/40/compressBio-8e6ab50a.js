import{c as e}from"./createInput-7c5a8b53.js"
import{c as t}from"./createLabel-d9c1f15c.js"
import{z as s,f as o,t as r,W as a}from"./calfSystem-540da563.js"
import{i as n}from"./insertElementBefore-6e80e0ff.js"
function c(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function i(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e),t.style.display=o}export default i
//# sourceMappingURL=compressBio-8e6ab50a.js.map
