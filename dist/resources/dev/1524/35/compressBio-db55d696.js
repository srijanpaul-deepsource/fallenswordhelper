import{c as e}from"./createInput-d71226f9.js"
import{c as t}from"./createLabel-66b85c7d.js"
import{z as o,f as s,t as r,X as n}from"./calfSystem-186455ab.js"
import{i as a}from"./insertElementBefore-9228b012.js"
function c(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=a(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(n,"bio","toggle"))}(o),a(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function i(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&c(e)}export default i
//# sourceMappingURL=compressBio-db55d696.js.map
