import{c as s}from"./closestTd-0d91a325.js"
import{f as e}from"./assets-40e3d434.js"
import{E as t,H as o}from"./calfSystem-d56087e1.js"
import{g as r,s as c}from"./idb-a1e4e2c2.js"
import"./closest-4ebdb6d3.js"
function m(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function n(s){const o=s||{},r=t('#pCC img[vspace="4"]').slice(1)
o.moves=r.reduce(m,{}),c(e,o)}function a(){r(e).then(n)}export default a
//# sourceMappingURL=store-82da96d9.js.map
