import{z as s,aB as t,D as a,t as o,T as e,V as i}from"./calfSystem-01849445.js"
import{i as r}from"./arena-79551b85.js"
import{g as n,s as m}from"./idb-72291501.js"
import"./allthen-d828bb84.js"
import"./all-f24d81d0.js"
import"./closestTr-74f72fa1.js"
import"./closest-3a475e96.js"
import"./intValue-9eb5015a.js"
import"./changeMinMax-6a9eb8c2.js"
import"./numberIsNaN-68797c81.js"
import"./assets-7b5d479d.js"
import"./lvlTests-fdbc1e5b.js"
import"./interceptSubmit-12207649.js"
import"./formToUrl-01a5ba54.js"
import"./loadDataTables-74577f9a.js"
import"./currentGuildId-8dd620e8.js"
import"./setTipped-71facd91.js"
function p(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function l(){s("arenaTypeTabs")?r():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(o(p,s))}else e("arena","doJoin",s)}()}export default l
//# sourceMappingURL=arenaDoJoin-8f079f10.js.map
