import{a7 as e,c as r}from"./calfSystem-fe0ebf32.js"
import{g as t}from"./getProfile-9e74c09c.js"
import{p as n}from"./playerName-dca56241.js"
import{g as f,s}from"./idb-b0de0ac7.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-ba055955.js.map
