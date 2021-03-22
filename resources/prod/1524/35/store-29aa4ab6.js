import{c as s}from"./closestTd-b0d3c71b.js"
import{f as e}from"./assets-716577f9.js"
import{E as t,H as o}from"./calfSystem-fe0ebf32.js"
import{g as c,s as r}from"./idb-b0de0ac7.js"
import"./closest-1ff01e01.js"
function f(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function m(s){const o=s||{},c=t('#pCC img[vspace="4"]').slice(1)
o.moves=c.reduce(f,{}),r(e,o)}function n(){c(e).then(m)}export default n
//# sourceMappingURL=store-29aa4ab6.js.map
