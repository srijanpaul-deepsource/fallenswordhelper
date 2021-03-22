import{t,a}from"./timeBox-8ff02db2.js"
import{K as s,z as n,i}from"./calfSystem-03050396.js"
import{i as e}from"./intValue-1ce02c09.js"
import{v as o}from"./valueText-c92275e2.js"
import"./padZ-3a7e6015.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((e(n[2])-e(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-6802fc09.js.map
