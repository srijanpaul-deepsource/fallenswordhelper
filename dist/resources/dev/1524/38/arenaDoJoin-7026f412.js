import{z as s,am as e,D as t,t as a,X as o,V as i}from"./calfSystem-d56087e1.js"
import{i as r}from"./arena-a2bdc8b8.js"
import{g as n,s as m}from"./idb-a1e4e2c2.js"
import"./allthen-8480e63e.js"
import"./all-edb79f43.js"
import"./closestTr-5f1ce258.js"
import"./closest-4ebdb6d3.js"
import"./intValue-ba9b9e5a.js"
import"./changeMinMax-a6e17992.js"
import"./numberIsNaN-30cde299.js"
import"./assets-40e3d434.js"
import"./lvlTests-a778f69b.js"
import"./interceptSubmit-1b6b81ff.js"
import"./formToUrl-becb9cc8.js"
import"./loadDataTables-851264f9.js"
import"./currentGuildId-1893e725.js"
import"./setTipped-f59a320f.js"
function p(s,e){const t=e||{}
t[s]=i,m("fsh_arenaFull",t)}function c(){s("arenaTypeTabs")?r():function(){const s=e()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(a(p,s))}else o("arena","doJoin",s)}()}export default c
//# sourceMappingURL=arenaDoJoin-7026f412.js.map
