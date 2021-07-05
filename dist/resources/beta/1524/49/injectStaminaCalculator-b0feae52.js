import{a as t}from"./asInt-ddca3e00.js"
import{M as a,z as s,i as n}from"./calfSystem-42f137cb.js"
import{i}from"./intValue-f11572ef.js"
import{t as o}from"./timeBox-492fdcbe.js"
import{v as e}from"./valueText-17fb88d7.js"
import"./padZ-3a27e144.js"
function r(){const r=a("stat-stamina-nextGain")
if(0===r.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(e(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(e(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-b0feae52.js.map
