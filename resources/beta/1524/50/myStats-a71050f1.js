import{a9 as e,c as r}from"./calfSystem-617f9a5d.js"
import{g as t}from"./getProfile-50ff6571.js"
import{p as f}from"./playerName-90c8eb43.js"
import{g as n,s}from"./idb-443c992c.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-a71050f1.js.map
