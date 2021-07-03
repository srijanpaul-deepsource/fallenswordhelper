import{z as s,aA as a,D as t,t as r,S as i,U as o}from"./calfSystem-8af1dca2.js"
import{i as e}from"./arena-0a52c00e.js"
import{g as n,s as m}from"./idb-30d71a28.js"
import"./allthen-d828bb84.js"
import"./all-f24d81d0.js"
import"./closestTr-627423b9.js"
import"./closest-3a475e96.js"
import"./intValue-9eb5015a.js"
import"./changeMinMax-6a9eb8c2.js"
import"./numberIsNaN-68797c81.js"
import"./assets-7b5d479d.js"
import"./lvlTests-87d82dc1.js"
import"./interceptSubmit-57af03dc.js"
import"./formToUrl-71081055.js"
import"./loadDataTables-8a5539c9.js"
import"./currentGuildId-ae75dbfc.js"
import"./isArray-f9d2634e.js"
import"./setTipped-71facd91.js"
function p(s,a){const t=a||{}
t[s]=o,m("fsh_arenaFull",t)}function c(){s("arenaTypeTabs")?e():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(p,s))}else i("arena","doJoin",s)}()}export default c
//# sourceMappingURL=arenaDoJoin-100b23a5.js.map
