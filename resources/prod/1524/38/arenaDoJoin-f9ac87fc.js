import{z as s,aj as a,D as e,t,W as r,U as i}from"./calfSystem-7a1cce43.js"
import{i as o}from"./arena-e71ea196.js"
import{g as n,s as m}from"./idb-c572d898.js"
import"./allthen-8480e63e.js"
import"./all-edb79f43.js"
import"./closestTr-74523325.js"
import"./closest-4ebdb6d3.js"
import"./intValue-ba9b9e5a.js"
import"./changeMinMax-a6e17992.js"
import"./numberIsNaN-30cde299.js"
import"./assets-40e3d434.js"
import"./lvlTests-57aa73a7.js"
import"./interceptSubmit-8bfb8c60.js"
import"./formToUrl-487e0bc3.js"
import"./loadDataTables-40abef4b.js"
import"./currentGuildId-c3cf68bc.js"
import"./isArray-6eab9c89.js"
import"./setTipped-f59a320f.js"
function c(s,a){const e=a||{}
e[s]=i,m("fsh_arenaFull",e)}function p(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=e('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(t(c,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-f9ac87fc.js.map
