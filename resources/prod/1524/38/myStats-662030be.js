import{a7 as e,c as r}from"./calfSystem-7a1cce43.js"
import{g as t}from"./getProfile-f62f3400.js"
import{p as f}from"./playerName-1f8ebec9.js"
import{g as n,s}from"./idb-c572d898.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-662030be.js.map
