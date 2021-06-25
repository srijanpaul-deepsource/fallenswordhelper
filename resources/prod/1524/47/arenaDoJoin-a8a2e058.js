import{z as a,ax as s,D as t,t as e,S as r,U as i}from"./calfSystem-a2fd9017.js"
import{i as o}from"./arena-953b4895.js"
import{g as n,s as m}from"./idb-09e8fa3a.js"
import"./allthen-2719c129.js"
import"./all-ceaf9817.js"
import"./closestTr-c667a8e5.js"
import"./closest-4542e515.js"
import"./intValue-e4ce6bb5.js"
import"./changeMinMax-53cfdc4f.js"
import"./numberIsNaN-2f104aa2.js"
import"./assets-e9494ccd.js"
import"./lvlTests-a0a61e5e.js"
import"./interceptSubmit-ce135195.js"
import"./formToUrl-a8a254b6.js"
import"./loadDataTables-b1cb127b.js"
import"./currentGuildId-871ea013.js"
import"./isArray-fb536e29.js"
import"./setTipped-27e246a8.js"
function c(a,s){const t=s||{}
t[a]=i,m("fsh_arenaFull",t)}function p(){a("arenaTypeTabs")?o():function(){const a=s()
if(!function(a){return a&&a.includes("combat move")}(a))if(function(a){return a&&a.includes("your guild")}(a)){const a=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(c,a))}else r("arena","doJoin",a)}()}export default p
//# sourceMappingURL=arenaDoJoin-a8a2e058.js.map
