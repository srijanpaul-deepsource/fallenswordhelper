import{c as e}from"./createInput-c4b18abd.js"
import{c as t}from"./createLabel-9c81780d.js"
import{z as o,f as s,t as r,W as n}from"./calfSystem-03050396.js"
import{i as a}from"./insertElementBefore-9228b012.js"
function c(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=a(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(n,"bio","toggle"))}(o),a(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function i(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e)}export default i
//# sourceMappingURL=compressBio-2ce45bc1.js.map
