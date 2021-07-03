import{a as t}from"./asInt-e726f694.js"
import{M as a,z as s,i as n}from"./calfSystem-85fa6364.js"
import{i}from"./intValue-9eb5015a.js"
import{t as o}from"./timeBox-08a218b5.js"
import{v as e}from"./valueText-2318857d.js"
import"./padZ-b9e73e86.js"
function r(){const r=a("stat-stamina-nextGain")
if(0===r.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(e(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-846b9f88.js.map
