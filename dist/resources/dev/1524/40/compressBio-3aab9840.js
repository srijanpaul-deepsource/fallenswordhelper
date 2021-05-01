import{c as e}from"./createInput-8ffbb09b.js"
import{c as t}from"./createLabel-7af63863.js"
import{z as s,f as o,t as r,X as a}from"./calfSystem-c464cb1d.js"
import{i as n}from"./insertElementBefore-6e80e0ff.js"
function f(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function i(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&f(e),t.style.display=o}export default i
//# sourceMappingURL=compressBio-3aab9840.js.map
