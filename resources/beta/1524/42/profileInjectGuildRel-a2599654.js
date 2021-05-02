import{_ as e,C as s,I as t,i as o,a1 as a}from"./calfSystem-e76f1a7d.js"
import{g as r,a as i}from"./getIsOwnGuild-f4035eab.js"
import{g as n}from"./profile-e7a41e68.js"
import{r as f}from"./replaceDoubleSpace-01a56c28.js"
import{s as l}from"./shouldBeArray-ef2a788d.js"
import{t as d}from"./toLowerCase-8d8df902.js"
import"./currentGuildId-b1971071.js"
import"./colouredDots-5ef437c3.js"
import"./batch-64f65e71.js"
import"./onlineDot-887cc7ac.js"
import"./doStatTotal-eea0a3ad.js"
import"./executeAll-bd0a035e.js"
import"./playerName-957aed2f.js"
import"./intValue-9eb8a210.js"
import"./valueText-ffb2b814.js"
import"./interceptSubmit-cb7652f8.js"
import"./formToUrl-2b5b5569.js"
import"./csvSplit-3bc5f3ee.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(f).map(d):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=f(d(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,r,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${a(n)}`)}(e,s)}function g(){const s=r()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-a2599654.js.map
