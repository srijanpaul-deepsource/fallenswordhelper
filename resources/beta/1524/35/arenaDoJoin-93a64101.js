import{z as s,am as t,D as a,t as r,W as e,U as i}from"./calfSystem-03050396.js"
import{i as o}from"./arena-a7ba9c0a.js"
import{g as n,s as m}from"./idb-02fb3250.js"
import"./allthen-e8de2991.js"
import"./all-3be74659.js"
import"./closestTr-67a84d77.js"
import"./closest-1ff01e01.js"
import"./intValue-1ce02c09.js"
import"./changeMinMax-51d14a10.js"
import"./numberIsNaN-1e8b4508.js"
import"./assets-716577f9.js"
import"./lvlTests-1f4d8322.js"
import"./interceptSubmit-3f95205d.js"
import"./formToUrl-ef9a2d78.js"
import"./loadDataTables-0833a795.js"
import"./currentGuildId-4235046f.js"
import"./isArray-c05157b9.js"
import"./setTipped-b11fa6f8.js"
function p(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function f(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(p,s))}else e("arena","doJoin",s)}()}export default f
//# sourceMappingURL=arenaDoJoin-93a64101.js.map
