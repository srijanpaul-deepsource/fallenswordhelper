import{o as e,p as t,t as n,ax as o,ba as a,z as s}from"./calfSystem-fe0ebf32.js"
import{h as r}from"./hideElement-2c661b2e.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function f(e,t){return t(e)}function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){l(5===Number(a(e.search,"section_id"))?(i||(i=s("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(n(f,e))})(t)&&(u(t),o(t.href),e.preventDefault())}function b(){e(t,m)}export default b
//# sourceMappingURL=ajaxifyProfileSections-2f7453c7.js.map
