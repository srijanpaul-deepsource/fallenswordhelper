import{a as t}from"./asInt-28c95ec4.js"
import{M as a,z as s,i as n}from"./calfSystem-365d90f3.js"
import{i}from"./intValue-76dfee09.js"
import{t as o}from"./timeBox-83869dcc.js"
import{v as r}from"./valueText-790aad9b.js"
import"./padZ-a45d0ad0.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-ae8dde2f.js.map
