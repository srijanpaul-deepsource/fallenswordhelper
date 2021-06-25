import{u as a,j as s,I as e,a8 as o,a as t}from"./calfSystem-db2edbef.js"
import{n,d,p}from"./parseGoldUpgrades-e3a57525.js"
function r(a){t(3,p,[a])}function f(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function c(){s()&&n()&&(e("needToDoUpgrade")?d():f())}export default c
//# sourceMappingURL=injectUpgradeAlert-73afa75d.js.map
