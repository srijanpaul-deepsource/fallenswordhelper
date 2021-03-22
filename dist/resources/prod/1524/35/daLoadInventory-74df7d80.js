import{t as n,bn as r,$ as t}from"./calfSystem-fe0ebf32.js"
import{b as e}from"./backpack-83452331.js"
function o(n,r){return{id:r.a,name:r.n,items:n.filter((n=>n.f===r.a))}}function a(n){return n.x?{...n,extra:{design:n.x.d,color:n.x.c}}:n}function f(r){return{r:r.folders.map(n(o,r.items.map(a))),s:!0}}function i(){return e().then(f)}function s(){return r({subcmd:"loadinventory"})}function u(){return t(s,i)}export{u as d}
//# sourceMappingURL=daLoadInventory-74df7d80.js.map
