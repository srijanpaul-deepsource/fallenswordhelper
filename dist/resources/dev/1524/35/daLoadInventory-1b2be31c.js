import{t as n,bq as r,$ as t}from"./calfSystem-186455ab.js"
import{b as e}from"./backpack-b90c384c.js"
function a(n,r){return{id:r.a,name:r.n,items:n.filter((n=>n.f===r.a))}}function o(n){return n.x?{...n,extra:{design:n.x.d,color:n.x.c}}:n}function c(r){return{r:r.folders.map(n(a,r.items.map(o))),s:!0}}function i(){return e().then(c)}function s(){return r({subcmd:"loadinventory"})}function u(){return t(s,i)}export{u as d}
//# sourceMappingURL=daLoadInventory-1b2be31c.js.map
