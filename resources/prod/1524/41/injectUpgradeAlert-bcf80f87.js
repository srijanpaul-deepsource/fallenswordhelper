import{u as a,j as s,I as o,a7 as t,a as e}from"./calfSystem-030d7057.js"
import{n,d as p,p as d}from"./parseGoldUpgrades-2a6743b8.js"
function r(a){e(3,d,[a])}function c(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&n()&&(o("needToDoUpgrade")?p():c())}export default f
//# sourceMappingURL=injectUpgradeAlert-bcf80f87.js.map
