import{c as s}from"./closestTd-8c75bf8b.js"
import{f as e}from"./assets-40e3d434.js"
import{E as t,H as o}from"./calfSystem-71efcdd9.js"
import{g as c,s as r}from"./idb-3de49256.js"
import"./closest-4ebdb6d3.js"
function f(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function m(s){const o=s||{},c=t('#pCC img[vspace="4"]').slice(1)
o.moves=c.reduce(f,{}),r(e,o)}function n(){c(e).then(m)}export default n
//# sourceMappingURL=store-4df09d37.js.map
