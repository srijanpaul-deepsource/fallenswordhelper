import{z as s,av as a,D as t,t as e,W as r,U as i}from"./calfSystem-587dd8d3.js"
import{i as o}from"./arena-f539f5a3.js"
import{g as n,s as c}from"./idb-ce2f4bde.js"
import"./allthen-13a2ca46.js"
import"./all-73a73e22.js"
import"./closestTr-332a99c2.js"
import"./closest-865e9de8.js"
import"./intValue-af3aed3f.js"
import"./changeMinMax-9818e713.js"
import"./numberIsNaN-9d4c441b.js"
import"./assets-cf4c1cc6.js"
import"./lvlTests-68991519.js"
import"./interceptSubmit-8814daab.js"
import"./formToUrl-2c1cc653.js"
import"./loadDataTables-4a42200f.js"
import"./currentGuildId-f1814c84.js"
import"./isArray-562fbe88.js"
import"./setTipped-2eacee59.js"
function m(s,a){const t=a||{}
t[s]=i,c("fsh_arenaFull",t)}function p(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-2d548eed.js.map
