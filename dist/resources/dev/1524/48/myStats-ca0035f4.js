import{aa as e,c as r}from"./calfSystem-01849445.js"
import{g as t}from"./getProfile-80c13ae9.js"
import{p as n}from"./playerName-b318da41.js"
import{g as s,s as a}from"./idb-72291501.js"
function f(e){return a("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-ca0035f4.js.map
