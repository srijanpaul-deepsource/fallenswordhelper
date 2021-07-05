import{c as s}from"./closest-0e1c7a1d.js"
import{aF as e,E as r,H as t}from"./calfSystem-9ab64478.js"
import{f as a}from"./assets-f2535d93.js"
import{g as o,s as c}from"./idb-9da90398.js"
function n(r){return/(\d)$/.exec(t((a=r,s(e,a))))[1]
var a}function f(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(n(e)),s}function m(s){const e=s||{},t=r('#pCC img[vspace="4"]').slice(1)
e.moves=t.reduce(f,{}),c(a,e)}function i(){o(a).then(m)}export default i
//# sourceMappingURL=store-87c8c145.js.map
