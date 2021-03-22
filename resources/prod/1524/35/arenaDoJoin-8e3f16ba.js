import{z as s,ak as t,D as e,t as a,W as r,U as i}from"./calfSystem-fe0ebf32.js"
import{i as o}from"./arena-ee3f392d.js"
import{g as n,s as m}from"./idb-b0de0ac7.js"
import"./allthen-e8de2991.js"
import"./all-3be74659.js"
import"./closestTr-35c47492.js"
import"./closest-1ff01e01.js"
import"./intValue-1ce02c09.js"
import"./changeMinMax-51d14a10.js"
import"./numberIsNaN-1e8b4508.js"
import"./assets-716577f9.js"
import"./lvlTests-353de1c5.js"
import"./interceptSubmit-1425876c.js"
import"./formToUrl-487e3c2d.js"
import"./loadDataTables-3c299285.js"
import"./currentGuildId-09820c92.js"
import"./isArray-c05157b9.js"
import"./setTipped-b11fa6f8.js"
function c(s,t){const e=t||{}
e[s]=i,m("fsh_arenaFull",e)}function p(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=e('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(a(c,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-8e3f16ba.js.map
