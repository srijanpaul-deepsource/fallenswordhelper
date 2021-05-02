import{a7 as e,c as r}from"./calfSystem-e76f1a7d.js"
import{g as t}from"./getProfile-8a6df09b.js"
import{p as f}from"./playerName-957aed2f.js"
import{g as n,s}from"./idb-fb8483d2.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-17e78a6b.js.map
