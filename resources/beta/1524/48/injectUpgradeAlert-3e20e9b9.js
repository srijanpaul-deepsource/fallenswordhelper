import{u as a,j as s,I as o,a9 as t,a as e}from"./calfSystem-8af1dca2.js"
import{n as d,d as n,p}from"./parseGoldUpgrades-dd6654c4.js"
function c(a){e(3,p,[a])}function r(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(c)}function f(){s()&&d()&&(o("needToDoUpgrade")?n():r())}export default f
//# sourceMappingURL=injectUpgradeAlert-3e20e9b9.js.map
