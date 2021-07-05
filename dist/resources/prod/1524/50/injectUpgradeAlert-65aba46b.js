import{u as a,j as s,I as e,a8 as o,a as t}from"./calfSystem-365d90f3.js"
import{n,d as p,p as d}from"./parseGoldUpgrades-7a73a07e.js"
function r(a){t(3,d,[a])}function f(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function c(){s()&&n()&&(e("needToDoUpgrade")?p():f())}export default c
//# sourceMappingURL=injectUpgradeAlert-65aba46b.js.map
