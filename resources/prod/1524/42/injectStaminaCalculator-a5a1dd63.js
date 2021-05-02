import{t,a}from"./timeBox-569475ce.js"
import{K as s,z as n,i}from"./calfSystem-15b00143.js"
import{i as o}from"./intValue-9eb8a210.js"
import{v as e}from"./valueText-7a9b207a.js"
import"./padZ-babdd575.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(e(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-a5a1dd63.js.map
