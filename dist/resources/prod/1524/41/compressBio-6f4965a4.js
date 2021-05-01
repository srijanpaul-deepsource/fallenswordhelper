import{c as e}from"./createInput-07b7fd77.js"
import{c as t}from"./createLabel-87403f6d.js"
import{z as s,f as o,t as r,W as a}from"./calfSystem-030d7057.js"
import{i as n}from"./insertElementBefore-2bf2da7f.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function f(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default f
//# sourceMappingURL=compressBio-6f4965a4.js.map
