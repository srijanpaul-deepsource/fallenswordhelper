import{u as a,j as s,I as o,a9 as t,a as e}from"./calfSystem-bfc1f6c0.js"
import{n as c,d as n,p}from"./parseGoldUpgrades-c9c19637.js"
function f(a){e(3,p,[a])}function r(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(f)}function d(){s()&&c()&&(o("needToDoUpgrade")?n():r())}export default d
//# sourceMappingURL=injectUpgradeAlert-05b1a3a3.js.map
