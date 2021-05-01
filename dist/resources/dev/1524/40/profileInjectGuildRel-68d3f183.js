import{a0 as e,C as s,I as t,i as o,a2 as r}from"./calfSystem-c464cb1d.js"
import{g as i,a}from"./getIsOwnGuild-90e12db9.js"
import{g as n}from"./profile-64e993f7.js"
import{r as l}from"./replaceDoubleSpace-2b4c3c08.js"
import{s as d}from"./shouldBeArray-0b48195f.js"
import{t as f}from"./toLowerCase-d053e281.js"
import"./currentGuildId-72946831.js"
import"./colouredDots-0a379a8f.js"
import"./batch-715ae1fd.js"
import"./onlineDot-7b0d5ece.js"
import"./doStatTotal-ddf4bb8a.js"
import"./executeAll-6bc810f1.js"
import"./playerName-c64906b6.js"
import"./intValue-e485889b.js"
import"./valueText-96bc4024.js"
import"./interceptSubmit-ce385627.js"
import"./formToUrl-89e002dc.js"
import"./csvSplit-e7651da4.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(l).map(f):[]}function u(t){return a()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=l(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,i,a]=m.find((([e])=>e===s))
e.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-68d3f183.js.map
