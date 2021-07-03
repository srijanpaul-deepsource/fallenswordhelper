import{u as a,j as s,I as o,a8 as t,a as e}from"./calfSystem-85fa6364.js"
import{n,d as p,p as c}from"./parseGoldUpgrades-8d2c40c2.js"
function d(a){e(3,c,[a])}function r(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(d)}function f(){s()&&n()&&(o("needToDoUpgrade")?p():r())}export default f
//# sourceMappingURL=injectUpgradeAlert-7867b128.js.map
