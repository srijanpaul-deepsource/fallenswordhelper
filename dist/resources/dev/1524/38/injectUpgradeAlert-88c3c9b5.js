import{u as a,j as s,I as e,a8 as o,a as t}from"./calfSystem-d56087e1.js"
import{n,d as p,p as c}from"./parseGoldUpgrades-ffc4ace0.js"
function d(a){t(3,c,[a])}function f(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(d)}function r(){s()&&n()&&(e("needToDoUpgrade")?p():f())}export default r
//# sourceMappingURL=injectUpgradeAlert-88c3c9b5.js.map
