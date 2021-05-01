import{a8 as e,c as r}from"./calfSystem-817ceb25.js"
import{g as t}from"./getProfile-a80eecd0.js"
import{p as n}from"./playerName-43ee76fa.js"
import{g as s,s as f}from"./idb-104727d0.js"
function a(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-9723dfe8.js.map
