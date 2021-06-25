import{a8 as e,c as r}from"./calfSystem-db2edbef.js"
import{g as t}from"./getProfile-6da1b876.js"
import{p as n}from"./playerName-70d3d303.js"
import{g as s,s as f}from"./idb-937dea46.js"
function a(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-c4e7b0cc.js.map
