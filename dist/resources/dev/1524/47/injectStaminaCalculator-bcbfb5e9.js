import{a as t}from"./asInt-95882709.js"
import{M as a,z as s,i as n}from"./calfSystem-bfc1f6c0.js"
import{i}from"./intValue-e4ce6bb5.js"
import{t as o}from"./timeBox-0e8b2b2d.js"
import{v as r}from"./valueText-ff818578.js"
import"./padZ-65ad9136.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-bcbfb5e9.js.map
