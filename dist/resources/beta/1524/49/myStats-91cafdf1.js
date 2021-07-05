import{a9 as e,c as r}from"./calfSystem-42f137cb.js"
import{g as t}from"./getProfile-2a36fbe8.js"
import{p as n}from"./playerName-e12b866a.js"
import{g as f,s}from"./idb-6beadc2c.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-91cafdf1.js.map
