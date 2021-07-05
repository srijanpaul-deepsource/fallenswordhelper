import{l as a,S as t,A as e,t as n,B as s,E as o,m as c,h as r,z as i,C as f,a as p,o as l}from"./calfSystem-617f9a5d.js"
import{e as b,u as m}from"./useItem-e820b42f.js"
import{g as u,m as k}from"./monkeyBp-834a92b3.js"
import"./dialog-a0295936.js"
import"./indexAjaxJson-1f941a45.js"
import"./daUseItem-5ffa2995.js"
import"./errorDialog-b76ba3fb.js"
function d([a,t,e,n],o){0===o.r?(!function(a,t){const e=a.srcData.findIndex((a=>a.a===t));-1!==e&&a.srcData.splice(e,1)}(a,n),e.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,e.parentNode)):e.remove()}function h(a,s,o,c){t("profile",`fastAction - ${c}`)
const{target:r}=s,i=r.parentNode.parentNode.children[0].dataset.inv
e("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",o(i).then(n(d,[a,c,r,i]))}function g(t,e){a("fastWear",e.target)&&h(t,e,b,"Worn"),a("fastUse",e.target)&&h(t,e,m,"Used")}function x(a){return a?"Use":"Wear"}function N(t,e){const n=a("backpackContextMenuUsable",e),s=c({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${o=n,o?"fastUse":"fastWear"}">${x(n)}</button>`})
var o
t.options.checkboxesEnabled&&r(s,e.parentNode.nextElementSibling.nextElementSibling),r(e.parentNode.parentNode,s)}function S(a){o(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(n(N,a))}function j(a){!function(){const a=i("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),k(a,S),0!==f(i("backpack_current")).length&&p(3,S,[a]),l(i("backpackContainer"),n(g,a))}function U(){const a=u()
a&&j(a)}export default U
//# sourceMappingURL=fastWear-71c644ed.js.map
