import{a as t}from"./asInt-4d304164.js"
import{M as a,z as s,i as n}from"./calfSystem-b3667af8.js"
import{i}from"./intValue-76dfee09.js"
import{t as o}from"./timeBox-62386aef.js"
import{v as r}from"./valueText-5f82bcfb.js"
import"./padZ-a45d0ad0.js"
function e(){const e=a("stat-stamina-nextGain")
if(0===e.length)return
const m=s("statbar-stamina-tooltip-stamina"),f=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(r(a("stat-name",t)))}(m)
f&&n(m,function(a,s){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${o(r(a),Math.floor((i(s[2])-i(s[1]))/t("stat-stamina-gainPerHour")))}`}(e,f))}export default e
//# sourceMappingURL=injectStaminaCalculator-611864e5.js.map
