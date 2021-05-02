import{a8 as e,c as r}from"./calfSystem-4b6b865d.js"
import{g as t}from"./getProfile-827ab461.js"
import{p as n}from"./playerName-64ba6f1f.js"
import{g as a,s as f}from"./idb-a46a6973.js"
function s(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(s)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():a("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-7b20d4ea.js.map
