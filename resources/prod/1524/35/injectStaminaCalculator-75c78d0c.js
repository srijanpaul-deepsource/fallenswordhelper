import{t,a}from"./timeBox-69663a43.js"
import{K as s,z as n,i as e}from"./calfSystem-fe0ebf32.js"
import{i}from"./intValue-1ce02c09.js"
import{v as o}from"./valueText-2234f468.js"
import"./padZ-3a7e6015.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&e(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((i(n[2])-i(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-75c78d0c.js.map
