import{a as t}from"./asInt-371663d1.js"
import{M as a,z as s,i as n}from"./calfSystem-617f9a5d.js"
import{i as e}from"./intValue-76dfee09.js"
import{t as i}from"./timeBox-b87fe64b.js"
import{v as o}from"./valueText-e4bbd7ea.js"
import"./padZ-a45d0ad0.js"
function r(){const r=a("stat-stamina-nextGain")
if(0===r.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${i(o(a),Math.floor((e(s[2])-e(s[1]))/t("stat-stamina-gainPerHour")))}`}(r,f))}export default r
//# sourceMappingURL=injectStaminaCalculator-73b4f017.js.map
