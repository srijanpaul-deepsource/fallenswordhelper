import{z as s,al as a,D as e,t,W as r,U as i}from"./calfSystem-71efcdd9.js"
import{i as o}from"./arena-3fb275e1.js"
import{g as n,s as m}from"./idb-3de49256.js"
import"./allthen-8480e63e.js"
import"./all-edb79f43.js"
import"./closestTr-c4f59af3.js"
import"./closest-4ebdb6d3.js"
import"./intValue-ba9b9e5a.js"
import"./changeMinMax-a6e17992.js"
import"./numberIsNaN-30cde299.js"
import"./assets-40e3d434.js"
import"./lvlTests-046caab1.js"
import"./interceptSubmit-8ce78672.js"
import"./formToUrl-28775802.js"
import"./loadDataTables-6ada905c.js"
import"./currentGuildId-feae79ca.js"
import"./isArray-6eab9c89.js"
import"./setTipped-f59a320f.js"
function p(s,a){const e=a||{}
e[s]=i,m("fsh_arenaFull",e)}function c(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=e('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(t(p,s))}else r("arena","doJoin",s)}()}export default c
//# sourceMappingURL=arenaDoJoin-568698b5.js.map
