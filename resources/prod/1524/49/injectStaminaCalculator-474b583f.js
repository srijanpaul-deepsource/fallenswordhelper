import{a as t}from"./asInt-c78388ed.js"
import{M as a,z as s,i as n}from"./calfSystem-2172498b.js"
import{i}from"./intValue-f11572ef.js"
import{t as o}from"./timeBox-8f306066.js"
import{v as r}from"./valueText-c5773d3b.js"
import"./padZ-3a27e144.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-474b583f.js.map
