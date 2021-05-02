import{z as s,av as t,D as a,t as e,W as r,U as i}from"./calfSystem-e76f1a7d.js"
import{i as o}from"./arena-35d81684.js"
import{g as n,s as m}from"./idb-fb8483d2.js"
import"./allthen-3a0631ad.js"
import"./all-9f53e8b3.js"
import"./closestTr-6dc7debb.js"
import"./closest-9a08f4fa.js"
import"./intValue-9eb8a210.js"
import"./changeMinMax-b261f8ce.js"
import"./numberIsNaN-484c0124.js"
import"./assets-62f5bf10.js"
import"./lvlTests-747c38a4.js"
import"./interceptSubmit-cb7652f8.js"
import"./formToUrl-2b5b5569.js"
import"./loadDataTables-40b17dec.js"
import"./currentGuildId-b1971071.js"
import"./isArray-68a41fd5.js"
import"./setTipped-1ee3895d.js"
function p(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function f(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else r("arena","doJoin",s)}()}export default f
//# sourceMappingURL=arenaDoJoin-0482fdce.js.map
