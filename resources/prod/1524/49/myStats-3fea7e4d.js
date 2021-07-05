import{a8 as e,c as r}from"./calfSystem-2172498b.js"
import{g as t}from"./getProfile-8db6fc9e.js"
import{p as n}from"./playerName-a5989c6d.js"
import{g as s,s as f}from"./idb-35c610a0.js"
function a(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-3fea7e4d.js.map
