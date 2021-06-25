import{c as s}from"./closest-4542e515.js"
import{aE as e,E as c,H as r}from"./calfSystem-bfc1f6c0.js"
import{f as t}from"./assets-e9494ccd.js"
import{g as o,s as a}from"./idb-d8a4a427.js"
function f(c){return/(\d)$/.exec(r((t=c,s(e,t))))[1]
var t}function n(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(f(e)),s}function m(s){const e=s||{},r=c('#pCC img[vspace="4"]').slice(1)
e.moves=r.reduce(n,{}),a(t,e)}function i(){o(t).then(m)}export default i
//# sourceMappingURL=store-ddaca2ca.js.map
