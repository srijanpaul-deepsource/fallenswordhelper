import{z as s,az as t,D as a,t as r,S as e,U as i}from"./calfSystem-365d90f3.js"
import{i as o}from"./arena-79f2aa20.js"
import{g as n,s as f}from"./idb-62f64cd2.js"
import"./allthen-2ff5fddb.js"
import"./all-9b215cd1.js"
import"./closestTr-75f82cf0.js"
import"./closest-06418423.js"
import"./intValue-76dfee09.js"
import"./changeMinMax-5835769c.js"
import"./numberIsNaN-bf55a311.js"
import"./assets-64d5f82f.js"
import"./lvlTests-914d7714.js"
import"./interceptSubmit-ed906294.js"
import"./formToUrl-95d4fbda.js"
import"./loadDataTables-068568ce.js"
import"./currentGuildId-605c07b2.js"
import"./isArray-2f495555.js"
import"./setTipped-5e35ee46.js"
function m(s,t){const a=t||{}
a[s]=i,f("fsh_arenaFull",a)}function p(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(m,s))}else e("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-04cb17f2.js.map
