import{u as a,j as s,I as e,aa as o,a as t}from"./calfSystem-b3667af8.js"
import{n,d as p,p as r}from"./parseGoldUpgrades-e703ea69.js"
function d(a){t(3,r,[a])}function f(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(d)}function c(){s()&&n()&&(e("needToDoUpgrade")?p():f())}export default c
//# sourceMappingURL=injectUpgradeAlert-7d450fac.js.map
