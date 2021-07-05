import{c as s}from"./closest-06418423.js"
import{aE as e,E as r,H as t}from"./calfSystem-617f9a5d.js"
import{f as c}from"./assets-64d5f82f.js"
import{g as o,s as a}from"./idb-443c992c.js"
function f(r){return/(\d)$/.exec(t((c=r,s(e,c))))[1]
var c}function n(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(f(e)),s}function m(s){const e=s||{},t=r('#pCC img[vspace="4"]').slice(1)
e.moves=t.reduce(n,{}),a(c,e)}function i(){o(c).then(m)}export default i
//# sourceMappingURL=store-1c2fc304.js.map
