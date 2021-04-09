import{u as a,j as s,I as e,a7 as o,a as t}from"./calfSystem-71efcdd9.js"
import{n,d,p}from"./parseGoldUpgrades-1c5e0737.js"
function c(a){t(3,p,[a])}function r(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(c)}function f(){s()&&n()&&(e("needToDoUpgrade")?d():r())}export default f
//# sourceMappingURL=injectUpgradeAlert-4e0bb7fb.js.map
