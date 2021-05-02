import{a0 as e,C as s,I as t,i as o,a2 as r}from"./calfSystem-4b6b865d.js"
import{g as a,a as i}from"./getIsOwnGuild-9ec53153.js"
import{g as n}from"./profile-65c8edec.js"
import{r as l}from"./replaceDoubleSpace-01a56c28.js"
import{s as f}from"./shouldBeArray-26668688.js"
import{t as d}from"./toLowerCase-8d8df902.js"
import"./currentGuildId-830390c7.js"
import"./colouredDots-1101eb92.js"
import"./batch-49c32951.js"
import"./onlineDot-a8b83ea6.js"
import"./doStatTotal-7f8855af.js"
import"./executeAll-bd0a035e.js"
import"./playerName-64ba6f1f.js"
import"./intValue-9eb8a210.js"
import"./valueText-3b73f119.js"
import"./interceptSubmit-4558b472.js"
import"./formToUrl-c8d32791.js"
import"./csvSplit-3bc5f3ee.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=f(e)
return s?s.map(l).map(d):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=l(d(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-548ae1b7.js.map
