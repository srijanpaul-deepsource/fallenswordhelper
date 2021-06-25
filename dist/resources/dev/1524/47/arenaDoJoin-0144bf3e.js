import{z as s,aA as t,D as a,t as e,T as o,V as i}from"./calfSystem-bfc1f6c0.js"
import{i as r}from"./arena-76f42bbc.js"
import{g as n,s as c}from"./idb-d8a4a427.js"
import"./allthen-2719c129.js"
import"./all-ceaf9817.js"
import"./closestTr-c2f47269.js"
import"./closest-4542e515.js"
import"./intValue-e4ce6bb5.js"
import"./changeMinMax-53cfdc4f.js"
import"./numberIsNaN-2f104aa2.js"
import"./assets-e9494ccd.js"
import"./lvlTests-4fdba93f.js"
import"./interceptSubmit-6c866cd4.js"
import"./formToUrl-bf2c911a.js"
import"./loadDataTables-e7b030ee.js"
import"./currentGuildId-92fe6d54.js"
import"./setTipped-27e246a8.js"
function f(s,t){const a=t||{}
a[s]=i,c("fsh_arenaFull",a)}function m(){s("arenaTypeTabs")?r():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(f,s))}else o("arena","doJoin",s)}()}export default m
//# sourceMappingURL=arenaDoJoin-0144bf3e.js.map
