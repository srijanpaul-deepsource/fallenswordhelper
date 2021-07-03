import{a as t}from"./asInt-74ac71c8.js"
import{M as a,z as s,i as n}from"./calfSystem-8af1dca2.js"
import{i}from"./intValue-9eb5015a.js"
import{t as o}from"./timeBox-74d4f5cd.js"
import{v as r}from"./valueText-ad23c08d.js"
import"./padZ-b9e73e86.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-70023fca.js.map
