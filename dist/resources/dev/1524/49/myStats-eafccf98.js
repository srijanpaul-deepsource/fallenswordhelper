import{aa as e,c as r}from"./calfSystem-9ab64478.js"
import{g as t}from"./getProfile-f5771e2a.js"
import{p as f}from"./playerName-b4c2ff3f.js"
import{g as n,s as a}from"./idb-9da90398.js"
function s(e){return a("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(s)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-eafccf98.js.map
