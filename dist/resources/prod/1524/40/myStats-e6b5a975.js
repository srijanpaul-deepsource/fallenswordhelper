import{a7 as e,c as r}from"./calfSystem-540da563.js"
import{g as t}from"./getProfile-b67e3e0c.js"
import{p as n}from"./playerName-c00ebc45.js"
import{g as s,s as a}from"./idb-62a50947.js"
function f(e){return a("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-e6b5a975.js.map
