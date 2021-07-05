import{z as s,aA as t,D as a,t as r,S as e,U as i}from"./calfSystem-617f9a5d.js"
import{i as o}from"./arena-411cf316.js"
import{g as n,s as f}from"./idb-443c992c.js"
import"./allthen-2ff5fddb.js"
import"./all-9b215cd1.js"
import"./closestTr-bf59743f.js"
import"./closest-06418423.js"
import"./intValue-76dfee09.js"
import"./changeMinMax-5835769c.js"
import"./numberIsNaN-bf55a311.js"
import"./assets-64d5f82f.js"
import"./lvlTests-2c3872b9.js"
import"./interceptSubmit-6761ad9f.js"
import"./formToUrl-4962600c.js"
import"./loadDataTables-cdc37e7e.js"
import"./currentGuildId-3b40ad81.js"
import"./isArray-2f495555.js"
import"./setTipped-5e35ee46.js"
function m(s,t){const a=t||{}
a[s]=i,f("fsh_arenaFull",a)}function p(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(m,s))}else e("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-20c74f4b.js.map
