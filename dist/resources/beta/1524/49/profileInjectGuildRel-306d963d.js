import{_ as e,C as s,I as t,i as o,a1 as r,ah as a}from"./calfSystem-42f137cb.js"
import{g as i,a as n}from"./getIsOwnGuild-8d854d47.js"
import{g as l}from"./profile-e3fa1612.js"
import{r as d}from"./replaceDoubleSpace-a19d0875.js"
import{s as f}from"./shouldBeArray-0378ee92.js"
import"./currentGuildId-d1f28a3b.js"
import"./colouredDots-716e3036.js"
import"./batch-3140b873.js"
import"./onlineDot-634e49ca.js"
import"./doStatTotal-10fb589c.js"
import"./executeAll-779c0127.js"
import"./playerName-e12b866a.js"
import"./asInt-ddca3e00.js"
import"./intValue-f11572ef.js"
import"./valueText-17fb88d7.js"
import"./interceptSubmit-b85719fa.js"
import"./formToUrl-869dd05e.js"
import"./csvSplit-a314c23c.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=f(e)
return s?s.map(d).map(a):[]}function u(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=d(a(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):l()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-306d963d.js.map
