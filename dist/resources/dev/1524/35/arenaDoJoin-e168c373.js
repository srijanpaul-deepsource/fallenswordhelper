import{z as s,an as t,D as a,t as e,X as o,V as i}from"./calfSystem-186455ab.js"
import{i as r}from"./arena-f81be7d3.js"
import{g as n,s as m}from"./idb-97f66b86.js"
import"./allthen-e8de2991.js"
import"./all-3be74659.js"
import"./closestTr-27d31e9d.js"
import"./closest-1ff01e01.js"
import"./intValue-1ce02c09.js"
import"./changeMinMax-51d14a10.js"
import"./numberIsNaN-1e8b4508.js"
import"./assets-716577f9.js"
import"./lvlTests-b430a512.js"
import"./interceptSubmit-24989074.js"
import"./formToUrl-91e15396.js"
import"./loadDataTables-0667a93b.js"
import"./currentGuildId-7dd95943.js"
import"./setTipped-b11fa6f8.js"
function p(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function l(){s("arenaTypeTabs")?r():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else o("arena","doJoin",s)}()}export default l
//# sourceMappingURL=arenaDoJoin-e168c373.js.map
