import{z as s,aw as a,D as e,t,X as o,V as i}from"./calfSystem-817ceb25.js"
import{i as r}from"./arena-48f688e4.js"
import{g as n,s as m}from"./idb-104727d0.js"
import"./allthen-13a2ca46.js"
import"./all-73a73e22.js"
import"./closestTr-710e3fd1.js"
import"./closest-865e9de8.js"
import"./intValue-af3aed3f.js"
import"./changeMinMax-9818e713.js"
import"./numberIsNaN-9d4c441b.js"
import"./assets-cf4c1cc6.js"
import"./lvlTests-d8350da2.js"
import"./interceptSubmit-b5f83dc2.js"
import"./formToUrl-0f02df3e.js"
import"./loadDataTables-71d4a49e.js"
import"./currentGuildId-0741b5a4.js"
import"./setTipped-2eacee59.js"
function c(s,a){const e=a||{}
e[s]=i,m("fsh_arenaFull",e)}function p(){s("arenaTypeTabs")?r():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=e('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(t(c,s))}else o("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-768e194b.js.map
