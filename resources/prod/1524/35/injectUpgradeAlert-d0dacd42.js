import{u as a,j as s,I as e,a7 as o,a as t}from"./calfSystem-fe0ebf32.js"
import{n,d as f,p}from"./parseGoldUpgrades-f2437751.js"
function r(a){t(3,p,[a])}function d(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function c(){s()&&n()&&(e("needToDoUpgrade")?f():d())}export default c
//# sourceMappingURL=injectUpgradeAlert-d0dacd42.js.map
