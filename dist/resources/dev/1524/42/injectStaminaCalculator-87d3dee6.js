import{t,a}from"./timeBox-ae457e38.js"
import{K as s,z as n,i}from"./calfSystem-4b6b865d.js"
import{i as e}from"./intValue-9eb8a210.js"
import{v as o}from"./valueText-3b73f119.js"
import"./padZ-babdd575.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((e(n[2])-e(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-87d3dee6.js.map
