import{a7 as e,c as r}from"./calfSystem-ab393688.js"
import{g as t}from"./getProfile-2959c6fc.js"
import{p as n}from"./playerName-17cbc946.js"
import{g as s,s as f}from"./idb-4a088c10.js"
function a(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function c(e){return e?i():s("fsh_selfProfile").then(m)}export{c as m}
//# sourceMappingURL=myStats-8d1bbc84.js.map
