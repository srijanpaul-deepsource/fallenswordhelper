import{u as a,j as s,I as e,a7 as o,a as t}from"./calfSystem-e76f1a7d.js"
import{n,d as p,p as d}from"./parseGoldUpgrades-7a15ac27.js"
function r(a){t(3,d,[a])}function c(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&n()&&(e("needToDoUpgrade")?p():c())}export default f
//# sourceMappingURL=injectUpgradeAlert-7fba8b31.js.map
