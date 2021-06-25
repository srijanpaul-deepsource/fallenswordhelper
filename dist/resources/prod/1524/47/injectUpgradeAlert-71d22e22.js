import{u as a,j as s,I as o,a8 as t,a as e}from"./calfSystem-a2fd9017.js"
import{n,d,p}from"./parseGoldUpgrades-938fda41.js"
function f(a){e(3,p,[a])}function r(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(f)}function c(){s()&&n()&&(o("needToDoUpgrade")?d():r())}export default c
//# sourceMappingURL=injectUpgradeAlert-71d22e22.js.map
