import{a as t}from"./asInt-bc42d23b.js"
import{M as a,z as s,i as n}from"./calfSystem-a2fd9017.js"
import{i}from"./intValue-e4ce6bb5.js"
import{t as o}from"./timeBox-3219ea2e.js"
import{v as e}from"./valueText-8b6ccd61.js"
import"./padZ-65ad9136.js"
function r(){const r=a("stat-stamina-nextGain")
if(0===r.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(e(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-8290134e.js.map
