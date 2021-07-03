import{o as e,p as t,t as n,aN as a,am as o,z as s}from"./calfSystem-8af1dca2.js"
import{h as r}from"./hideElement-3852cc2c.js"
let c
const i=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function f(e,t){return t(e)}function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&r(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){l(5===Number(o(e.search,"section_id"))?(c||(c=s("backpackContainer")),c):e.parentNode.parentNode.nextElementSibling)}function m(e){const{target:t}=e;(function(e){return i.every(n(f,e))})(t)&&(u(t),a(t.href),e.preventDefault())}function d(){e(t,m)}export default d
//# sourceMappingURL=ajaxifyProfileSections-a1daeb83.js.map
