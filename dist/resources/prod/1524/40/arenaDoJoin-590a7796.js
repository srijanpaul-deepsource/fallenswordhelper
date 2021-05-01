import{z as s,as as a,D as t,t as e,W as r,U as i}from"./calfSystem-540da563.js"
import{i as o}from"./arena-190d101c.js"
import{g as n,s as m}from"./idb-62a50947.js"
import"./allthen-7b3f20e7.js"
import"./all-be4763d3.js"
import"./closestTr-366a895b.js"
import"./closest-abbeba17.js"
import"./intValue-e485889b.js"
import"./changeMinMax-969ea6b3.js"
import"./numberIsNaN-2764ce9c.js"
import"./assets-5392162d.js"
import"./lvlTests-ac1c02e5.js"
import"./interceptSubmit-b94311a2.js"
import"./formToUrl-efa4fabd.js"
import"./loadDataTables-64df71c3.js"
import"./currentGuildId-dc83d308.js"
import"./isArray-4f4e9312.js"
import"./setTipped-c42cf871.js"
function p(s,a){const t=a||{}
t[s]=i,m("fsh_arenaFull",t)}function c(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else r("arena","doJoin",s)}()}export default c
//# sourceMappingURL=arenaDoJoin-590a7796.js.map
