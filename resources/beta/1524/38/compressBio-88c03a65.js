import{c as e}from"./createInput-b623eea7.js"
import{c as t}from"./createLabel-e7af3641.js"
import{z as o,f as s,t as r,W as a}from"./calfSystem-71efcdd9.js"
import{i as n}from"./insertElementBefore-71272774.js"
function c(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(a,"bio","toggle"))}(o),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function f(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e)}export default f
//# sourceMappingURL=compressBio-88c03a65.js.map
