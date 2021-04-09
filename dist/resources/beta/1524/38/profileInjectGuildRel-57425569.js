import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-71efcdd9.js"
import{g as i,a}from"./getIsOwnGuild-0c97c382.js"
import{g as n}from"./profile-a116eb66.js"
import{r as l}from"./replaceDoubleSpace-a67f63db.js"
import{s as d}from"./shouldBeArray-c0315d2c.js"
import{t as f}from"./toLowerCase-b0c4634d.js"
import"./currentGuildId-feae79ca.js"
import"./colouredDots-d392678b.js"
import"./batch-55e783d3.js"
import"./onlineDot-f8821c97.js"
import"./doStatTotal-a5e68f3e.js"
import"./executeAll-13b3b7cf.js"
import"./playerName-03336191.js"
import"./intValue-ba9b9e5a.js"
import"./valueText-21e1edfc.js"
import"./interceptSubmit-8ce78672.js"
import"./formToUrl-28775802.js"
import"./csvSplit-b0cd76cf.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(l).map(f):[]}function u(t){return a()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=l(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,i,a]=c.find((([e])=>e===s))
e.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-57425569.js.map
