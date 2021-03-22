import{u as a,j as s,I as o,a8 as t,a as e}from"./calfSystem-186455ab.js"
import{n,d as p,p as c}from"./parseGoldUpgrades-2a89a1cc.js"
function r(a){e(3,c,[a])}function d(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(r)}function f(){s()&&n()&&(o("needToDoUpgrade")?p():d())}export default f
//# sourceMappingURL=injectUpgradeAlert-99f8e583.js.map
