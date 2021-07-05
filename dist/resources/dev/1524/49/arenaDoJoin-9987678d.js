import{z as a,aB as s,D as t,t as e,T as o,V as i}from"./calfSystem-9ab64478.js"
import{i as r}from"./arena-98f7c635.js"
import{g as n,s as m}from"./idb-9da90398.js"
import"./allthen-f7cedfa7.js"
import"./all-bb953856.js"
import"./closestTr-e99b6a01.js"
import"./closest-0e1c7a1d.js"
import"./intValue-f11572ef.js"
import"./changeMinMax-98de10ec.js"
import"./numberIsNaN-9a364388.js"
import"./assets-f2535d93.js"
import"./lvlTests-e3abbf2e.js"
import"./interceptSubmit-ba23111a.js"
import"./formToUrl-6294f17c.js"
import"./loadDataTables-5edaaf63.js"
import"./currentGuildId-c05147ac.js"
import"./setTipped-11c01061.js"
function p(a,s){const t=s||{}
t[a]=i,m("fsh_arenaFull",t)}function c(){a("arenaTypeTabs")?r():function(){const a=s()
if(!function(a){return a&&a.includes("combat move")}(a))if(function(a){return a&&a.includes("your guild")}(a)){const a=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,a))}else o("arena","doJoin",a)}()}export default c
//# sourceMappingURL=arenaDoJoin-9987678d.js.map
