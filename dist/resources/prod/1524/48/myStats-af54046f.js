import{a8 as e,c as r}from"./calfSystem-85fa6364.js"
import{g as t}from"./getProfile-abd530d8.js"
import{p as f}from"./playerName-2fc4f5c9.js"
import{g as n,s}from"./idb-160add45.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-af54046f.js.map
