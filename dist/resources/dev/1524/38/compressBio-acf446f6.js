import{c as e}from"./createInput-0182b589.js"
import{c as t}from"./createLabel-abb72e31.js"
import{z as o,f as s,t as r,X as n}from"./calfSystem-d56087e1.js"
import{i as a}from"./insertElementBefore-71272774.js"
function i(o){o.parentNode.classList.add("fshCompressor"),function(t){const o=a(e({id:"fshCompressToggle",type:"checkbox"}),t)
s(o,"change",r(n,"bio","toggle"))}(o),a(t({className:"sendLink",htmlFor:"fshCompressToggle"}),o)}function c(){const e=o("profile-bio")
e&&e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e)}export default c
//# sourceMappingURL=compressBio-acf446f6.js.map
