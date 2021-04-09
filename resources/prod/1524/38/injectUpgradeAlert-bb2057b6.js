import{u as a,j as s,I as e,a7 as o,a as t}from"./calfSystem-7a1cce43.js"
import{n,d as c,p}from"./parseGoldUpgrades-a08c1f5e.js"
function r(a){t(3,p,[a])}function d(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&n()&&(e("needToDoUpgrade")?c():d())}export default f
//# sourceMappingURL=injectUpgradeAlert-bb2057b6.js.map
