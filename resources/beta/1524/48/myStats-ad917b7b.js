import{a9 as e,c as r}from"./calfSystem-8af1dca2.js"
import{g as t}from"./getProfile-9774b117.js"
import{p as n}from"./playerName-7218c72a.js"
import{g as a,s}from"./idb-30d71a28.js"
function f(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():a("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-ad917b7b.js.map
