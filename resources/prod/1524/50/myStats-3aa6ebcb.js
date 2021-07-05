import{a8 as e,c as r}from"./calfSystem-365d90f3.js"
import{g as t}from"./getProfile-21cc29b6.js"
import{p as f}from"./playerName-17f8d780.js"
import{g as n,s}from"./idb-62f64cd2.js"
function o(e){return s("fsh_selfProfile",e),e}function a(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(a).then(o)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-3aa6ebcb.js.map
