import{a0 as e,C as s,I as t,i as o,a2 as r}from"./calfSystem-d56087e1.js"
import{g as a,a as i}from"./getIsOwnGuild-1ae4044d.js"
import{g as n}from"./profile-f50b75a0.js"
import{r as f}from"./replaceDoubleSpace-a67f63db.js"
import{s as l}from"./shouldBeArray-41176caa.js"
import{t as d}from"./toLowerCase-b0c4634d.js"
import"./currentGuildId-1893e725.js"
import"./colouredDots-d5bef308.js"
import"./batch-efcbbd95.js"
import"./onlineDot-0283d5c6.js"
import"./doStatTotal-9c318ece.js"
import"./executeAll-13b3b7cf.js"
import"./playerName-78fba94b.js"
import"./intValue-ba9b9e5a.js"
import"./valueText-72f14761.js"
import"./interceptSubmit-1b6b81ff.js"
import"./formToUrl-becb9cc8.js"
import"./csvSplit-b0cd76cf.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(f).map(d):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=f(d(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function b(e){const s=u(e)
s&&function(e,s){const[,a,i]=c.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function j(){const s=a()
s?b(s):n()&&e("guildSelf","")}export default j
//# sourceMappingURL=profileInjectGuildRel-b338152f.js.map
