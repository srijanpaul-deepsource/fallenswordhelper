import{a8 as e,c as r}from"./calfSystem-c464cb1d.js"
import{g as t}from"./getProfile-757b7e26.js"
import{p as n}from"./playerName-c64906b6.js"
import{g as s,s as f}from"./idb-870991e0.js"
function o(e){return f("fsh_selfProfile",e),e}function a(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(a).then(o)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-259eca05.js.map
