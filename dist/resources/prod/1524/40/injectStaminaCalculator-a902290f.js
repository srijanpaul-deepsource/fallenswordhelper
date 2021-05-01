import{t,a}from"./timeBox-c702b5af.js"
import{K as s,z as n,i}from"./calfSystem-540da563.js"
import{i as e}from"./intValue-e485889b.js"
import{v as o}from"./valueText-87497ead.js"
import"./padZ-827c036e.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
f&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((e(n[2])-e(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-a902290f.js.map
