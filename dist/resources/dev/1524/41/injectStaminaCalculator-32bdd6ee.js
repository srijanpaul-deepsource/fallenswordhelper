import{t,a}from"./timeBox-d60e1576.js"
import{K as s,z as n,i}from"./calfSystem-817ceb25.js"
import{i as e}from"./intValue-af3aed3f.js"
import{v as o}from"./valueText-35bd586a.js"
import"./padZ-9d438f6a.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((e(n[2])-e(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-32bdd6ee.js.map
