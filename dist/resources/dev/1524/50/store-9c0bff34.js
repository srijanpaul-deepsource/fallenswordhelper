import{c as s}from"./closest-06418423.js"
import{aF as e,E as r,H as t}from"./calfSystem-b3667af8.js"
import{f as o}from"./assets-64d5f82f.js"
import{g as a,s as c}from"./idb-22dd2687.js"
function f(r){return/(\d)$/.exec(t((o=r,s(e,o))))[1]
var o}function n(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(f(e)),s}function m(s){const e=s||{},t=r('#pCC img[vspace="4"]').slice(1)
e.moves=t.reduce(n,{}),c(o,e)}function i(){a(o).then(m)}export default i
//# sourceMappingURL=store-9c0bff34.js.map
