import{_ as e,C as s,I as t,i as o,a1 as a}from"./calfSystem-15b00143.js"
import{g as r,a as i}from"./getIsOwnGuild-67ae9c9d.js"
import{g as n}from"./profile-0bcfd729.js"
import{r as l}from"./replaceDoubleSpace-01a56c28.js"
import{s as d}from"./shouldBeArray-1ce261c7.js"
import{t as f}from"./toLowerCase-8d8df902.js"
import"./currentGuildId-ad15ffa8.js"
import"./colouredDots-04756ade.js"
import"./batch-37795904.js"
import"./onlineDot-4297be27.js"
import"./doStatTotal-01cde801.js"
import"./executeAll-bd0a035e.js"
import"./playerName-41a4004e.js"
import"./intValue-9eb8a210.js"
import"./valueText-7a9b207a.js"
import"./interceptSubmit-a16f18a6.js"
import"./formToUrl-d1bb7512.js"
import"./csvSplit-3bc5f3ee.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(l).map(f):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=l(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,r,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${a(n)}`)}(e,s)}function g(){const s=r()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-3797761b.js.map
