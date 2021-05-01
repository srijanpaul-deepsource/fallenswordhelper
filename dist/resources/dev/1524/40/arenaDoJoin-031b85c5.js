import{z as s,av as t,D as a,t as e,X as o,V as i}from"./calfSystem-c464cb1d.js"
import{i as r}from"./arena-823f2384.js"
import{g as n,s as m}from"./idb-870991e0.js"
import"./allthen-7b3f20e7.js"
import"./all-be4763d3.js"
import"./closestTr-810f6a0f.js"
import"./closest-abbeba17.js"
import"./intValue-e485889b.js"
import"./changeMinMax-969ea6b3.js"
import"./numberIsNaN-2764ce9c.js"
import"./assets-5392162d.js"
import"./lvlTests-85066328.js"
import"./interceptSubmit-ce385627.js"
import"./formToUrl-89e002dc.js"
import"./loadDataTables-a094c6b3.js"
import"./currentGuildId-72946831.js"
import"./setTipped-c42cf871.js"
function c(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function p(){s("arenaTypeTabs")?r():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(c,s))}else o("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-031b85c5.js.map
