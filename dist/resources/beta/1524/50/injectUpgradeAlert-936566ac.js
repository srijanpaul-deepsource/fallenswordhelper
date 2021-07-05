import{u as a,j as s,I as e,a9 as o,a as t}from"./calfSystem-617f9a5d.js"
import{n,d as p,p as d}from"./parseGoldUpgrades-66f586e0.js"
function f(a){t(3,d,[a])}function r(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(f)}function c(){s()&&n()&&(e("needToDoUpgrade")?p():r())}export default c
//# sourceMappingURL=injectUpgradeAlert-936566ac.js.map
