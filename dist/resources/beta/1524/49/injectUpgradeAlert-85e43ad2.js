import{u as a,j as s,I as e,a9 as o,a as t}from"./calfSystem-42f137cb.js"
import{n,d as p,p as c}from"./parseGoldUpgrades-77c3e4da.js"
function d(a){t(3,c,[a])}function r(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(d)}function f(){s()&&n()&&(e("needToDoUpgrade")?p():r())}export default f
//# sourceMappingURL=injectUpgradeAlert-85e43ad2.js.map
