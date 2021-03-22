import{a7 as e,c as r}from"./calfSystem-03050396.js"
import{g as t}from"./getProfile-fdde6617.js"
import{p as f}from"./playerName-3ca7fe81.js"
import{g as n,s}from"./idb-02fb3250.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-e7913a0f.js.map
