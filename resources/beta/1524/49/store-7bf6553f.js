import{c as s}from"./closest-0e1c7a1d.js"
import{aE as e,E as c,H as r}from"./calfSystem-42f137cb.js"
import{f as t}from"./assets-f2535d93.js"
import{g as o,s as a}from"./idb-6beadc2c.js"
function f(c){return/(\d)$/.exec(r((t=c,s(e,t))))[1]
var t}function n(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(f(e)),s}function m(s){const e=s||{},r=c('#pCC img[vspace="4"]').slice(1)
e.moves=r.reduce(n,{}),a(t,e)}function i(){o(t).then(m)}export default i
//# sourceMappingURL=store-7bf6553f.js.map
