import{l as a,W as t,A as e,t as n,B as s,E as o,m as r,h as c,z as i,C as p,a as f,o as l}from"./calfSystem-030d7057.js"
import{e as b,u as m}from"./useItem-d8be6108.js"
import{g as u,m as d}from"./monkeyBp-f8e349de.js"
import"./dialog-1254e587.js"
import"./dialogMsg-0570b3b3.js"
import"./indexAjaxJson-e454b0de.js"
import"./daUseItem-121b102f.js"
import"./errorDialog-864e4ba8.js"
function k([a,t,e,n],o){0===o.r?(!function(a,t){const e=a.srcData.findIndex((a=>a.a===t));-1!==e&&a.srcData.splice(e,1)}(a,n),e.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,e.parentNode)):e.remove()}function g(a,s,o,r){t("profile",`fastAction - ${r}`)
const{target:c}=s,i=c.parentNode.parentNode.children[0].dataset.inv
e("",c),c.blur(),c.className="fastAction fshBl fshSpinner fshSpinner12",o(i).then(n(k,[a,r,c,i]))}function h(t,e){a("fastWear",e.target)&&g(t,e,b,"Worn"),a("fastUse",e.target)&&g(t,e,m,"Used")}function x(a){return a?"Use":"Wear"}function j(t,e){const n=a("backpackContextMenuUsable",e),s=r({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${o=n,o?"fastUse":"fastWear"}">${x(n)}</button>`})
var o
t.options.checkboxesEnabled&&c(s,e.parentNode.nextElementSibling.nextElementSibling),c(e.parentNode.parentNode,s)}function N(a){o(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(n(j,a))}function S(a){!function(){const a=i("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),d(a,N),0!==p(i("backpack_current")).length&&f(3,N,[a]),l(i("backpackContainer"),n(h,a))}function U(){const a=u()
a&&S(a)}export default U
//# sourceMappingURL=fastWear-ac77ef3f.js.map