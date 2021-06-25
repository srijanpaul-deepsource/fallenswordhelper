import{a9 as e,c as r}from"./calfSystem-bfc1f6c0.js"
import{g as t}from"./getProfile-84988fb5.js"
import{p as f}from"./playerName-3c8c8393.js"
import{g as n,s}from"./idb-d8a4a427.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-1a0b0275.js.map
