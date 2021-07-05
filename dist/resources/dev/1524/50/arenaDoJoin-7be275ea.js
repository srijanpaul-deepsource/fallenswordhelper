import{z as s,aB as t,D as a,t as e,T as o,V as i}from"./calfSystem-b3667af8.js"
import{i as r}from"./arena-d945c962.js"
import{g as n,s as m}from"./idb-22dd2687.js"
import"./allthen-2ff5fddb.js"
import"./all-9b215cd1.js"
import"./closestTr-868b7fea.js"
import"./closest-06418423.js"
import"./intValue-76dfee09.js"
import"./changeMinMax-5835769c.js"
import"./numberIsNaN-bf55a311.js"
import"./assets-64d5f82f.js"
import"./lvlTests-b339adbe.js"
import"./interceptSubmit-dd886fe1.js"
import"./formToUrl-872022b8.js"
import"./loadDataTables-ad74b274.js"
import"./currentGuildId-01980e74.js"
import"./setTipped-5e35ee46.js"
function p(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function f(){s("arenaTypeTabs")?r():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else o("arena","doJoin",s)}()}export default f
//# sourceMappingURL=arenaDoJoin-7be275ea.js.map
