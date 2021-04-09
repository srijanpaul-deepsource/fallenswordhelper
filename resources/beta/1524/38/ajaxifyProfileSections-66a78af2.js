import{o as e,p as t,t as n,az as o,bc as s,z as a}from"./calfSystem-71efcdd9.js"
import{h as r}from"./hideElement-9b8f5190.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function f(e,t){return t(e)}function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){l(5===Number(s(e.search,"section_id"))?(i||(i=a("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function d(e){const{target:t}=e;(function(e){return c.every(n(f,e))})(t)&&(u(t),o(t.href),e.preventDefault())}function m(){e(t,d)}export default m
//# sourceMappingURL=ajaxifyProfileSections-66a78af2.js.map
