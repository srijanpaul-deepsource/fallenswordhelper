import{t,a}from"./timeBox-5f1bdfe7.js"
import{K as s,z as n,i}from"./calfSystem-d56087e1.js"
import{i as e}from"./intValue-ba9b9e5a.js"
import{v as o}from"./valueText-72f14761.js"
import"./padZ-8b68b081.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((e(n[2])-e(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-8a49154a.js.map
