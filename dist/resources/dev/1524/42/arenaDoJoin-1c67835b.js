import{z as s,aw as t,D as a,t as e,X as o,V as i}from"./calfSystem-4b6b865d.js"
import{i as r}from"./arena-28697b8d.js"
import{g as n,s as m}from"./idb-a46a6973.js"
import"./allthen-3a0631ad.js"
import"./all-9f53e8b3.js"
import"./closestTr-2426267d.js"
import"./closest-9a08f4fa.js"
import"./intValue-9eb8a210.js"
import"./changeMinMax-b261f8ce.js"
import"./numberIsNaN-484c0124.js"
import"./assets-62f5bf10.js"
import"./lvlTests-dd53afb2.js"
import"./interceptSubmit-4558b472.js"
import"./formToUrl-c8d32791.js"
import"./loadDataTables-37ce9f53.js"
import"./currentGuildId-830390c7.js"
import"./setTipped-1ee3895d.js"
function p(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function l(){s("arenaTypeTabs")?r():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else o("arena","doJoin",s)}()}export default l
//# sourceMappingURL=arenaDoJoin-1c67835b.js.map
