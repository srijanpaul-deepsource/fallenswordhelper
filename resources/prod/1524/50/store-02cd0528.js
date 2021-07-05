import{c as s}from"./closest-06418423.js"
import{aD as e,E as r,H as t}from"./calfSystem-365d90f3.js"
import{f as o}from"./assets-64d5f82f.js"
import{g as c,s as f}from"./idb-62f64cd2.js"
function a(r){return/(\d)$/.exec(t((o=r,s(e,o))))[1]
var o}function n(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(a(e)),s}function m(s){const e=s||{},t=r('#pCC img[vspace="4"]').slice(1)
e.moves=t.reduce(n,{}),f(o,e)}function i(){c(o).then(m)}export default i
//# sourceMappingURL=store-02cd0528.js.map
