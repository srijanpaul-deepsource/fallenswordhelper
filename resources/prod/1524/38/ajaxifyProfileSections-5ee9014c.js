import{o as e,p as t,t as n,ax as a,ba as o,z as s}from"./calfSystem-7a1cce43.js"
import{h as r}from"./hideElement-9b8f5190.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function f(e,t){return t(e)}function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){l(5===Number(o(e.search,"section_id"))?(i||(i=s("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(n(f,e))})(t)&&(u(t),a(t.href),e.preventDefault())}function p(){e(t,m)}export default p
//# sourceMappingURL=ajaxifyProfileSections-5ee9014c.js.map
