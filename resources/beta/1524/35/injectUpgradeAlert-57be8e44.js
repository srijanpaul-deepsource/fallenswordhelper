import{u as a,j as s,I as o,a7 as t,a as e}from"./calfSystem-03050396.js"
import{n,d as p,p as r}from"./parseGoldUpgrades-38c4b248.js"
function c(a){e(3,r,[a])}function d(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(c)}function f(){s()&&n()&&(o("needToDoUpgrade")?p():d())}export default f
//# sourceMappingURL=injectUpgradeAlert-57be8e44.js.map
