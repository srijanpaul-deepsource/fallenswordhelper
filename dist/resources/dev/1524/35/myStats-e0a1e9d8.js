import{a8 as e,c as r}from"./calfSystem-186455ab.js"
import{g as t}from"./getProfile-0139b316.js"
import{p as f}from"./playerName-2ef49def.js"
import{g as n,s}from"./idb-97f66b86.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-e0a1e9d8.js.map
