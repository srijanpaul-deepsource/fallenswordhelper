import{a8 as e,c as r}from"./calfSystem-d56087e1.js"
import{g as t}from"./getProfile-4f74be92.js"
import{p as n}from"./playerName-78fba94b.js"
import{g as f,s}from"./idb-a1e4e2c2.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-6c4fb90d.js.map
