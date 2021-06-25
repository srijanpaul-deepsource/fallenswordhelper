import{z as s,az as t,D as e,t as a,S as r,U as i}from"./calfSystem-db2edbef.js"
import{i as o}from"./arena-2050beb0.js"
import{g as n,s as c}from"./idb-937dea46.js"
import"./allthen-2719c129.js"
import"./all-ceaf9817.js"
import"./closestTr-72dc4267.js"
import"./closest-4542e515.js"
import"./intValue-e4ce6bb5.js"
import"./changeMinMax-53cfdc4f.js"
import"./numberIsNaN-2f104aa2.js"
import"./assets-e9494ccd.js"
import"./lvlTests-d3684efc.js"
import"./interceptSubmit-37405c90.js"
import"./formToUrl-b338bcd1.js"
import"./loadDataTables-25f545a1.js"
import"./currentGuildId-3f7c0e1c.js"
import"./isArray-fb536e29.js"
import"./setTipped-27e246a8.js"
function m(s,t){const e=t||{}
e[s]=i,c("fsh_arenaFull",e)}function p(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=e('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(a(m,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-b5fd1390.js.map
