import{z as s,az as t,D as a,t as e,S as r,U as i}from"./calfSystem-85fa6364.js"
import{i as o}from"./arena-16e14626.js"
import{g as n,s as m}from"./idb-160add45.js"
import"./allthen-d828bb84.js"
import"./all-f24d81d0.js"
import"./closestTr-5f6e9767.js"
import"./closest-3a475e96.js"
import"./intValue-9eb5015a.js"
import"./changeMinMax-6a9eb8c2.js"
import"./numberIsNaN-68797c81.js"
import"./assets-7b5d479d.js"
import"./lvlTests-20be337c.js"
import"./interceptSubmit-6f4d5b99.js"
import"./formToUrl-fe5f507a.js"
import"./loadDataTables-632c755a.js"
import"./currentGuildId-01e2fed9.js"
import"./isArray-f9d2634e.js"
import"./setTipped-71facd91.js"
function p(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function f(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else r("arena","doJoin",s)}()}export default f
//# sourceMappingURL=arenaDoJoin-3c40cc52.js.map
