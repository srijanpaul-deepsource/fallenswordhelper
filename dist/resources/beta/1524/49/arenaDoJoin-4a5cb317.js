import{z as s,aA as t,D as a,t as e,S as r,U as i}from"./calfSystem-42f137cb.js"
import{i as o}from"./arena-e0c6cb3b.js"
import{g as n,s as c}from"./idb-6beadc2c.js"
import"./allthen-f7cedfa7.js"
import"./all-bb953856.js"
import"./closestTr-2c592cbb.js"
import"./closest-0e1c7a1d.js"
import"./intValue-f11572ef.js"
import"./changeMinMax-98de10ec.js"
import"./numberIsNaN-9a364388.js"
import"./assets-f2535d93.js"
import"./lvlTests-52345e92.js"
import"./interceptSubmit-b85719fa.js"
import"./formToUrl-869dd05e.js"
import"./loadDataTables-a189ddcc.js"
import"./currentGuildId-d1f28a3b.js"
import"./isArray-be6d57af.js"
import"./setTipped-11c01061.js"
function m(s,t){const a=t||{}
a[s]=i,c("fsh_arenaFull",a)}function p(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-4a5cb317.js.map
