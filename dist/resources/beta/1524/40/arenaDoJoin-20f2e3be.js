import{z as s,au as t,D as a,t as e,W as r,U as i}from"./calfSystem-ab393688.js"
import{i as o}from"./arena-75cade9c.js"
import{g as n,s as c}from"./idb-4a088c10.js"
import"./allthen-7b3f20e7.js"
import"./all-be4763d3.js"
import"./closestTr-cfdf992e.js"
import"./closest-abbeba17.js"
import"./intValue-e485889b.js"
import"./changeMinMax-969ea6b3.js"
import"./numberIsNaN-2764ce9c.js"
import"./assets-5392162d.js"
import"./lvlTests-1664c9e3.js"
import"./interceptSubmit-02037ff6.js"
import"./formToUrl-96c1fd67.js"
import"./loadDataTables-d8a11775.js"
import"./currentGuildId-0cbe4e98.js"
import"./isArray-4f4e9312.js"
import"./setTipped-c42cf871.js"
function m(s,t){const a=t||{}
a[s]=i,c("fsh_arenaFull",a)}function p(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-20f2e3be.js.map
