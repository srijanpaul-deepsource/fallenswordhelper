import{a as t}from"./asInt-61644392.js"
import{M as a,z as s,i as n}from"./calfSystem-9ab64478.js"
import{i}from"./intValue-f11572ef.js"
import{t as o}from"./timeBox-d272b162.js"
import{v as r}from"./valueText-99c24f27.js"
import"./padZ-3a27e144.js"
function m(){const m=a("stat-stamina-nextGain")
if(0===m.length)return
const e=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(e)
f&&n(e,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(m,f))}export default m
//# sourceMappingURL=injectStaminaCalculator-9c653056.js.map
