import{a7 as e,c as r}from"./calfSystem-587dd8d3.js"
import{g as t}from"./getProfile-09bb87ab.js"
import{p as f}from"./playerName-79fdbfb0.js"
import{g as n,s}from"./idb-ce2f4bde.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-2d1987c0.js.map
