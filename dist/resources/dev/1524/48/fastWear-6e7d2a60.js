import{l as a,T as t,A as e,t as n,B as s,E as o,m as c,h as r,z as i,C as f,a as p,o as l}from"./calfSystem-01849445.js"
import{e as b,u as m}from"./useItem-167ebdfb.js"
import{g as u,m as k}from"./monkeyBp-fe884fbf.js"
import"./dialog-6e4d0a83.js"
import"./indexAjaxJson-0f9790ea.js"
import"./daUseItem-ba7c7669.js"
import"./errorDialog-e70faa9e.js"
function d([a,t,e,n],o){0===o.r?(!function(a,t){const e=a.srcData.findIndex((a=>a.a===t));-1!==e&&a.srcData.splice(e,1)}(a,n),e.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,e.parentNode)):e.remove()}function h(a,s,o,c){t("profile",`fastAction - ${c}`)
const{target:r}=s,i=r.parentNode.parentNode.children[0].dataset.inv
e("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",o(i).then(n(d,[a,c,r,i]))}function g(t,e){a("fastWear",e.target)&&h(t,e,b,"Worn"),a("fastUse",e.target)&&h(t,e,m,"Used")}function x(a){return a?"Use":"Wear"}function N(t,e){const n=a("backpackContextMenuUsable",e),s=c({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${o=n,o?"fastUse":"fastWear"}">${x(n)}</button>`})
var o
t.options.checkboxesEnabled&&r(s,e.parentNode.nextElementSibling.nextElementSibling),r(e.parentNode.parentNode,s)}function j(a){o(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(n(N,a))}function S(a){!function(){const a=i("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),k(a,j),0!==f(i("backpack_current")).length&&p(3,j,[a]),l(i("backpackContainer"),n(g,a))}function U(){const a=u()
a&&S(a)}export default U
//# sourceMappingURL=fastWear-6e7d2a60.js.map
