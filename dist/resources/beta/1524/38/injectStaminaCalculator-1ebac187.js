import{t,a}from"./timeBox-d17825a2.js"
import{K as s,z as n,i as e}from"./calfSystem-71efcdd9.js"
import{i}from"./intValue-ba9b9e5a.js"
import{v as o}from"./valueText-21e1edfc.js"
import"./padZ-8b68b081.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&e(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((i(n[2])-i(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-1ebac187.js.map
