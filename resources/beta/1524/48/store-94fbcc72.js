import{c as s}from"./closest-3a475e96.js"
import{aE as e,E as a,H as r}from"./calfSystem-8af1dca2.js"
import{f as t}from"./assets-7b5d479d.js"
import{g as o,s as c}from"./idb-30d71a28.js"
function n(a){return/(\d)$/.exec(r((t=a,s(e,t))))[1]
var t}function f(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(n(e)),s}function m(s){const e=s||{},r=a('#pCC img[vspace="4"]').slice(1)
e.moves=r.reduce(f,{}),c(t,e)}function i(){o(t).then(m)}export default i
//# sourceMappingURL=store-94fbcc72.js.map
