import{z as a,at as s,D as t,t as r,W as i,U as o}from"./calfSystem-15b00143.js"
import{i as e}from"./arena-721f3cc9.js"
import{g as n,s as f}from"./idb-1c9eb1ac.js"
import"./allthen-3a0631ad.js"
import"./all-9f53e8b3.js"
import"./closestTr-c53b56bf.js"
import"./closest-9a08f4fa.js"
import"./intValue-9eb8a210.js"
import"./changeMinMax-b261f8ce.js"
import"./numberIsNaN-484c0124.js"
import"./assets-62f5bf10.js"
import"./lvlTests-a299d5a1.js"
import"./interceptSubmit-a16f18a6.js"
import"./formToUrl-d1bb7512.js"
import"./loadDataTables-ad66bfa0.js"
import"./currentGuildId-ad15ffa8.js"
import"./isArray-68a41fd5.js"
import"./setTipped-1ee3895d.js"
function m(a,s){const t=s||{}
t[a]=o,f("fsh_arenaFull",t)}function p(){a("arenaTypeTabs")?e():function(){const a=s()
if(!function(a){return a&&a.includes("combat move")}(a))if(function(a){return a&&a.includes("your guild")}(a)){const a=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(m,a))}else i("arena","doJoin",a)}()}export default p
//# sourceMappingURL=arenaDoJoin-658e1744.js.map
