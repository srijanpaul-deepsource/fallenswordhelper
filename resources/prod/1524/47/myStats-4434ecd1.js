import{a8 as e,c as r}from"./calfSystem-a2fd9017.js"
import{g as t}from"./getProfile-bbee5de2.js"
import{p as f}from"./playerName-fab1659b.js"
import{g as n,s as a}from"./idb-09e8fa3a.js"
function s(e){return a("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(s)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-4434ecd1.js.map
