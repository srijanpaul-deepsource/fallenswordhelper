import{c as s}from"./closestTd-6a3bf5ca.js"
import{f as e}from"./assets-716577f9.js"
import{E as t,H as o}from"./calfSystem-03050396.js"
import{g as r,s as c}from"./idb-02fb3250.js"
import"./closest-1ff01e01.js"
function f(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function m(s){const o=s||{},r=t('#pCC img[vspace="4"]').slice(1)
o.moves=r.reduce(f,{}),c(e,o)}function n(){r(e).then(m)}export default n
//# sourceMappingURL=store-9cf92090.js.map
