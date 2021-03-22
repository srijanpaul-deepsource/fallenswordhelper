import{t,a}from"./timeBox-28436ddf.js"
import{K as s,z as n,i}from"./calfSystem-186455ab.js"
import{i as o}from"./intValue-1ce02c09.js"
import{v as e}from"./valueText-453036fb.js"
import"./padZ-3a7e6015.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(e(s),Math.floor((o(n[2])-o(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-3ad40235.js.map
