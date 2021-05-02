import{u as a,j as s,I as o,a8 as t,a as e}from"./calfSystem-4b6b865d.js"
import{n,d,p}from"./parseGoldUpgrades-42d30b82.js"
function r(a){e(3,p,[a])}function c(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&n()&&(o("needToDoUpgrade")?d():c())}export default f
//# sourceMappingURL=injectUpgradeAlert-3a68042b.js.map
