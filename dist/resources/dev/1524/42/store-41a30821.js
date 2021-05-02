import{c as s}from"./closestTd-981aa266.js"
import{f as e}from"./assets-62f5bf10.js"
import{E as t,H as o}from"./calfSystem-4b6b865d.js"
import{g as r,s as a}from"./idb-a46a6973.js"
import"./closest-9a08f4fa.js"
function c(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function f(s){const o=s||{},r=t('#pCC img[vspace="4"]').slice(1)
o.moves=r.reduce(c,{}),a(e,o)}function m(){r(e).then(f)}export default m
//# sourceMappingURL=store-41a30821.js.map
