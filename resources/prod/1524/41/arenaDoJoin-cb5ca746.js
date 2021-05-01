import{z as s,at as t,D as e,t as a,W as r,U as i}from"./calfSystem-030d7057.js"
import{i as o}from"./arena-385c2672.js"
import{g as n,s as c}from"./idb-ab72cbe2.js"
import"./allthen-13a2ca46.js"
import"./all-73a73e22.js"
import"./closestTr-5bde6959.js"
import"./closest-865e9de8.js"
import"./intValue-af3aed3f.js"
import"./changeMinMax-9818e713.js"
import"./numberIsNaN-9d4c441b.js"
import"./assets-cf4c1cc6.js"
import"./lvlTests-cbc18806.js"
import"./interceptSubmit-64615b22.js"
import"./formToUrl-63e8d7e7.js"
import"./loadDataTables-3af0948b.js"
import"./currentGuildId-2c89c2be.js"
import"./isArray-562fbe88.js"
import"./setTipped-2eacee59.js"
function m(s,t){const e=t||{}
e[s]=i,c("fsh_arenaFull",e)}function p(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=e('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(a(m,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-cb5ca746.js.map
