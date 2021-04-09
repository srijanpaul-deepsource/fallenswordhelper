import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-7a1cce43.js"
import{g as i,a}from"./getIsOwnGuild-e9978140.js"
import{g as n}from"./profile-124ef118.js"
import{r as c}from"./replaceDoubleSpace-a67f63db.js"
import{s as l}from"./shouldBeArray-e4f0e2a6.js"
import{t as f}from"./toLowerCase-b0c4634d.js"
import"./currentGuildId-c3cf68bc.js"
import"./colouredDots-8c1eae3a.js"
import"./batch-895bb182.js"
import"./onlineDot-e58cc358.js"
import"./doStatTotal-0ed981ee.js"
import"./executeAll-13b3b7cf.js"
import"./playerName-1f8ebec9.js"
import"./intValue-ba9b9e5a.js"
import"./valueText-3ccfe58d.js"
import"./interceptSubmit-8bfb8c60.js"
import"./formToUrl-487e0bc3.js"
import"./csvSplit-b0cd76cf.js"
const d=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(c).map(f):[]}function u(t){return a()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=c(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function b(e){const s=u(e)
s&&function(e,s){const[,i,a]=d.find((([e])=>e===s))
e.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function j(){const s=i()
s?b(s):n()&&e("guildSelf","")}export default j
//# sourceMappingURL=profileInjectGuildRel-171e4f1a.js.map
