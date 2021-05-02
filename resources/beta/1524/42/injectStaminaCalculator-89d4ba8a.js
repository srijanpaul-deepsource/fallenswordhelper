import{t,a}from"./timeBox-a66a7a0d.js"
import{K as s,z as n,i}from"./calfSystem-e76f1a7d.js"
import{i as o}from"./intValue-9eb8a210.js"
import{v as e}from"./valueText-ffb2b814.js"
import"./padZ-babdd575.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(e(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-89d4ba8a.js.map
