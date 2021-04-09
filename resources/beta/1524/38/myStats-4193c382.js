import{a7 as e,c as r}from"./calfSystem-71efcdd9.js"
import{g as t}from"./getProfile-c5cc5dbb.js"
import{p as n}from"./playerName-03336191.js"
import{g as s,s as f}from"./idb-3de49256.js"
function o(e){return f("fsh_selfProfile",e),e}function a(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(a).then(o)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-4193c382.js.map
