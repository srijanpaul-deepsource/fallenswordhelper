import{u as a,j as s,I as o,a7 as t,a as e}from"./calfSystem-587dd8d3.js"
import{n as d,d as n,p as f}from"./parseGoldUpgrades-f78ff20a.js"
function p(a){e(3,f,[a])}function r(){const s=o("lastUpgradeCheck")
s&&t<s||a({cmd:"points",type:1}).then(p)}function c(){s()&&d()&&(o("needToDoUpgrade")?n():r())}export default c
//# sourceMappingURL=injectUpgradeAlert-073099e5.js.map
