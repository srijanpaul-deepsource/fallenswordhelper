import{c as e}from"./closest-4542e515.js"
import{aD as s,E as r,H as t}from"./calfSystem-db2edbef.js"
import{f as c}from"./assets-e9494ccd.js"
import{g as o,s as a}from"./idb-937dea46.js"
function n(r){return/(\d)$/.exec(t((c=r,e(s,c))))[1]
var c}function f(e,s){return e[/(\d+)\.png/.exec(s.src)[1]]=Number(n(s)),e}function m(e){const s=e||{},t=r('#pCC img[vspace="4"]').slice(1)
s.moves=t.reduce(f,{}),a(c,s)}function i(){o(c).then(m)}export default i
//# sourceMappingURL=store-35e0245f.js.map
