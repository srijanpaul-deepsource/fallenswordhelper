import{c as s}from"./closest-0e1c7a1d.js"
import{aD as e,E as r,H as t}from"./calfSystem-2172498b.js"
import{f as c}from"./assets-f2535d93.js"
import{g as o,s as a}from"./idb-35c610a0.js"
function n(r){return/(\d)$/.exec(t((c=r,s(e,c))))[1]
var c}function f(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(n(e)),s}function m(s){const e=s||{},t=r('#pCC img[vspace="4"]').slice(1)
e.moves=t.reduce(f,{}),a(c,e)}function i(){o(c).then(m)}export default i
//# sourceMappingURL=store-2ed1fb7a.js.map
