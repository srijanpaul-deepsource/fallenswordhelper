import{o as e,p as t,t as n,aM as a,al as o,z as s}from"./calfSystem-365d90f3.js"
import{h as r}from"./hideElement-e21a7422.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function l(e,t){return t(e)}function f(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){f(5===Number(o(e.search,"section_id"))?(i||(i=s("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(n(l,e))})(t)&&(u(t),a(t.href),e.preventDefault())}function d(){e(t,m)}export default d
//# sourceMappingURL=ajaxifyProfileSections-1a8239c0.js.map
