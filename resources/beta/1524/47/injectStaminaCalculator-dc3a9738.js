import{a as t}from"./asInt-48dcc84c.js"
import{M as a,z as s,i as n}from"./calfSystem-db2edbef.js"
import{i as e}from"./intValue-e4ce6bb5.js"
import{t as i}from"./timeBox-af809ef4.js"
import{v as o}from"./valueText-cde56b68.js"
import"./padZ-65ad9136.js"
function r(){const r=a("stat-stamina-nextGain")
if(0===r.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${i(o(a),Math.floor((e(s[2])-e(s[1]))/t("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-dc3a9738.js.map
