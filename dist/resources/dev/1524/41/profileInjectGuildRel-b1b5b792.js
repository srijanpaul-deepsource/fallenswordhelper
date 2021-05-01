import{a0 as e,C as s,I as t,i as o,a2 as r}from"./calfSystem-817ceb25.js"
import{g as a,a as i}from"./getIsOwnGuild-75cadbb0.js"
import{g as n}from"./profile-36780d1e.js"
import{r as l}from"./replaceDoubleSpace-f140ae94.js"
import{s as d}from"./shouldBeArray-16833ac7.js"
import{t as f}from"./toLowerCase-39a6c297.js"
import"./currentGuildId-0741b5a4.js"
import"./colouredDots-bbf8c556.js"
import"./batch-cdbfc7ea.js"
import"./onlineDot-9e87e4ee.js"
import"./doStatTotal-546d5c63.js"
import"./executeAll-98e1edc5.js"
import"./playerName-43ee76fa.js"
import"./intValue-af3aed3f.js"
import"./valueText-35bd586a.js"
import"./interceptSubmit-b5f83dc2.js"
import"./formToUrl-0f02df3e.js"
import"./csvSplit-bb2c228e.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(l).map(f):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=l(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=c.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-b1b5b792.js.map
