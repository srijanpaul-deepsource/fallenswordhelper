import{a7 as e,c as r}from"./calfSystem-15b00143.js"
import{g as t}from"./getProfile-a6dabd90.js"
import{p as n}from"./playerName-41a4004e.js"
import{g as a,s}from"./idb-1c9eb1ac.js"
function f(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():a("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-0ebd47a8.js.map
