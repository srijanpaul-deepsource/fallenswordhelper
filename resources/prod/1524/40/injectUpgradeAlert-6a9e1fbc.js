import{u as a,j as s,I as o,a7 as t,a as e}from"./calfSystem-540da563.js"
import{n as d,d as n,p}from"./parseGoldUpgrades-53332d8d.js"
function r(a){e(3,p,[a])}function c(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&d()&&(o("needToDoUpgrade")?n():c())}export default f
//# sourceMappingURL=injectUpgradeAlert-6a9e1fbc.js.map
