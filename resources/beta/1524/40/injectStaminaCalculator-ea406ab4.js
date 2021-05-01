import{t,a}from"./timeBox-793f7cd7.js"
import{K as s,z as n,i}from"./calfSystem-ab393688.js"
import{i as o}from"./intValue-e485889b.js"
import{v as e}from"./valueText-d39824a3.js"
import"./padZ-827c036e.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(e(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-ea406ab4.js.map
