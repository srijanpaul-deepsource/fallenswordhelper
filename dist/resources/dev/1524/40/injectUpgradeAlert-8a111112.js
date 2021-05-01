import{u as a,j as s,I as o,a8 as t,a as e}from"./calfSystem-c464cb1d.js"
import{n,d,p}from"./parseGoldUpgrades-abd15505.js"
function c(a){e(3,p,[a])}function r(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(c)}function f(){s()&&n()&&(o("needToDoUpgrade")?d():r())}export default f
//# sourceMappingURL=injectUpgradeAlert-8a111112.js.map
