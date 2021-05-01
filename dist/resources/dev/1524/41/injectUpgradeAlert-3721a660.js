import{u as a,j as s,I as e,a8 as o,a as t}from"./calfSystem-817ceb25.js"
import{n,d as p,p as r}from"./parseGoldUpgrades-57a4eae1.js"
function c(a){t(3,r,[a])}function d(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(c)}function f(){s()&&n()&&(e("needToDoUpgrade")?p():d())}export default f
//# sourceMappingURL=injectUpgradeAlert-3721a660.js.map
