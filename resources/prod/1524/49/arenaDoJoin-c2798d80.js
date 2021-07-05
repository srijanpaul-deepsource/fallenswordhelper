import{z as s,az as t,D as a,t as e,S as r,U as i}from"./calfSystem-2172498b.js"
import{i as o}from"./arena-52c6b605.js"
import{g as n,s as m}from"./idb-35c610a0.js"
import"./allthen-f7cedfa7.js"
import"./all-bb953856.js"
import"./closestTr-3eb9ff66.js"
import"./closest-0e1c7a1d.js"
import"./intValue-f11572ef.js"
import"./changeMinMax-98de10ec.js"
import"./numberIsNaN-9a364388.js"
import"./assets-f2535d93.js"
import"./lvlTests-4de98bd5.js"
import"./interceptSubmit-2a47b722.js"
import"./formToUrl-cbfebad5.js"
import"./loadDataTables-58c1f40d.js"
import"./currentGuildId-7d9d343b.js"
import"./isArray-be6d57af.js"
import"./setTipped-11c01061.js"
function p(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function c(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else r("arena","doJoin",s)}()}export default c
//# sourceMappingURL=arenaDoJoin-c2798d80.js.map
