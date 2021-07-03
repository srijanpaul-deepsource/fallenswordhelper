import{a as t}from"./asInt-0acbfe32.js"
import{M as a,z as s,i as n}from"./calfSystem-01849445.js"
import{i as e}from"./intValue-9eb5015a.js"
import{t as i}from"./timeBox-136244f0.js"
import{v as o}from"./valueText-5e8600b8.js"
import"./padZ-b9e73e86.js"
function r(){const r=a("stat-stamina-nextGain")
if(0===r.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${i(o(a),Math.floor((e(s[2])-e(s[1]))/t("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-321d7cb5.js.map
