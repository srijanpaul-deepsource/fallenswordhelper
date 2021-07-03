import{o as e,p as t,t as n,aO as o,an as a,z as s}from"./calfSystem-01849445.js"
import{h as r}from"./hideElement-3852cc2c.js"
let i
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function l(e,t){return t(e)}function f(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){f(5===Number(a(e.search,"section_id"))?(i||(i=s("backpackContainer")),i):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return c.every(n(l,e))})(t)&&(u(t),o(t.href),e.preventDefault())}function p(){e(t,m)}export default p
//# sourceMappingURL=ajaxifyProfileSections-10c01985.js.map
