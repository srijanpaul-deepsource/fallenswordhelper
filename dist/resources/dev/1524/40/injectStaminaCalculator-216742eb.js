import{t,a}from"./timeBox-f8d21e03.js"
import{K as s,z as n,i}from"./calfSystem-c464cb1d.js"
import{i as e}from"./intValue-e485889b.js"
import{v as o}from"./valueText-96bc4024.js"
import"./padZ-827c036e.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),c=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
c&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((e(n[2])-e(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,c))}export default r
//# sourceMappingURL=injectStaminaCalculator-216742eb.js.map
