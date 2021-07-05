import{aa as e,c as r}from"./calfSystem-b3667af8.js"
import{g as t}from"./getProfile-61bb15d7.js"
import{p as n}from"./playerName-8bccbcca.js"
import{g as s,s as a}from"./idb-22dd2687.js"
function f(e){return a("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-dce07744.js.map
