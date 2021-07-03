import{l as a,S as t,A as e,t as n,B as s,E as o,m as c,h as r,z as i,C as f,a as p,o as l}from"./calfSystem-8af1dca2.js"
import{e as m,u}from"./useItem-79c94283.js"
import{g as b,m as k}from"./monkeyBp-7e4ed181.js"
import"./dialog-1a39a3d7.js"
import"./indexAjaxJson-6e1804ba.js"
import"./daUseItem-a412f1f6.js"
import"./errorDialog-7a4621a3.js"
function d([a,t,e,n],o){0===o.r?(!function(a,t){const e=a.srcData.findIndex((a=>a.a===t));-1!==e&&a.srcData.splice(e,1)}(a,n),e.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,e.parentNode)):e.remove()}function h(a,s,o,c){t("profile",`fastAction - ${c}`)
const{target:r}=s,i=r.parentNode.parentNode.children[0].dataset.inv
e("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",o(i).then(n(d,[a,c,r,i]))}function g(t,e){a("fastWear",e.target)&&h(t,e,m,"Worn"),a("fastUse",e.target)&&h(t,e,u,"Used")}function x(a){return a?"Use":"Wear"}function N(t,e){const n=a("backpackContextMenuUsable",e),s=c({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${o=n,o?"fastUse":"fastWear"}">${x(n)}</button>`})
var o
t.options.checkboxesEnabled&&r(s,e.parentNode.nextElementSibling.nextElementSibling),r(e.parentNode.parentNode,s)}function S(a){o(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(n(N,a))}function j(a){!function(){const a=i("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),k(a,S),0!==f(i("backpack_current")).length&&p(3,S,[a]),l(i("backpackContainer"),n(g,a))}function U(){const a=b()
a&&j(a)}export default U
//# sourceMappingURL=fastWear-ef3f6659.js.map
