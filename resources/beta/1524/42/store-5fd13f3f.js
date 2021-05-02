import{c as s}from"./closestTd-9fb1c07e.js"
import{f as e}from"./assets-62f5bf10.js"
import{E as t,H as f}from"./calfSystem-e76f1a7d.js"
import{g as o,s as r}from"./idb-fb8483d2.js"
import"./closest-9a08f4fa.js"
function c(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(f(s(e)))[1]}(t)),e}function a(s){const f=s||{},o=t('#pCC img[vspace="4"]').slice(1)
f.moves=o.reduce(c,{}),r(e,f)}function m(){o(e).then(a)}export default m
//# sourceMappingURL=store-5fd13f3f.js.map
