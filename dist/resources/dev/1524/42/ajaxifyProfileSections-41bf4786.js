import{o as e,p as t,t as n,aI as a,ai as o,z as s}from"./calfSystem-4b6b865d.js"
import{h as i}from"./hideElement-30ade5f0.js"
let r
const c=[e=>"A"===e.tagName,e=>Boolean(e.href),e=>e.href.includes("togglesection")]
function f(e,t){return t(e)}function l(e){e.hasAttribute("style")?function(e){"block"===e.style.display&&i(e),e.removeAttribute("style")}(e):e.classList.toggle("fshHide")}function u(e){l(5===Number(o(e.search,"section_id"))?(r||(r=s("backpackContainer")),r):e.parentNode.parentNode.nextElementSibling)}function d(e){const{target:t}=e;(function(e){return c.every(n(f,e))})(t)&&(u(t),a(t.href),e.preventDefault())}function m(){e(t,d)}export default m
//# sourceMappingURL=ajaxifyProfileSections-41bf4786.js.map
