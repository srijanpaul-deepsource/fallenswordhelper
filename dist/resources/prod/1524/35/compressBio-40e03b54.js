import{c as e}from"./createInput-47702c1d.js"
import{c as t}from"./createLabel-616c04a1.js"
import{z as o,f as s,t as r,W as n}from"./calfSystem-fe0ebf32.js"
import{i as a}from"./insertElementBefore-9228b012.js"
function c(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=a(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(n,"bio","toggle"))}(o),a(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function f(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e)}export default f
//# sourceMappingURL=compressBio-40e03b54.js.map
