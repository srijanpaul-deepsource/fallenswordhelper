import{t as n,bp as r,$ as t}from"./calfSystem-03050396.js"
import{b as e}from"./backpack-9260425d.js"
function o(n,r){return{id:r.a,name:r.n,items:n.filter((n=>n.f===r.a))}}function a(n){return n.x?{...n,extra:{design:n.x.d,color:n.x.c}}:n}function i(r){return{r:r.folders.map(n(o,r.items.map(a))),s:!0}}function s(){return e().then(i)}function u(){return r({subcmd:"loadinventory"})}function c(){return t(u,s)}export{c as d}
//# sourceMappingURL=daLoadInventory-331fcad5.js.map
