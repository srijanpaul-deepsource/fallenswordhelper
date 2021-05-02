import{o as e,p as t,t as n,aH as a,ah as o,z as s}from"./calfSystem-e76f1a7d.js"
import{h as r}from"./hideElement-30ade5f0.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function f(e,t){return t(e)}function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){l(5===Number(o(e.search,"section_id"))?(i||(i=s("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function d(e){const{target:t}=e;(function(e){return c.every(n(f,e))})(t)&&(u(t),a(t.href),e.preventDefault())}function m(){e(t,d)}export default m
//# sourceMappingURL=ajaxifyProfileSections-911170fa.js.map
