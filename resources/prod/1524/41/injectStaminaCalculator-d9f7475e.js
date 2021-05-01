import{t,a}from"./timeBox-5f8d727e.js"
import{K as s,z as n,i}from"./calfSystem-030d7057.js"
import{i as o}from"./intValue-af3aed3f.js"
import{v as e}from"./valueText-f3659878.js"
import"./padZ-9d438f6a.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(e(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-d9f7475e.js.map
