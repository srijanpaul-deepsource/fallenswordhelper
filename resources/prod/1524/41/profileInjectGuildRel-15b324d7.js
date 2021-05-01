import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-030d7057.js"
import{g as a,a as i}from"./getIsOwnGuild-406e6798.js"
import{g as n}from"./profile-44ab4181.js"
import{r as l}from"./replaceDoubleSpace-f140ae94.js"
import{s as d}from"./shouldBeArray-f937e740.js"
import{t as f}from"./toLowerCase-39a6c297.js"
import"./currentGuildId-2c89c2be.js"
import"./colouredDots-054b6266.js"
import"./batch-45d4d781.js"
import"./onlineDot-29d4f3fa.js"
import"./doStatTotal-a31727af.js"
import"./executeAll-98e1edc5.js"
import"./playerName-3b098b7d.js"
import"./intValue-af3aed3f.js"
import"./valueText-f3659878.js"
import"./interceptSubmit-64615b22.js"
import"./formToUrl-63e8d7e7.js"
import"./csvSplit-bb2c228e.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(e){const s=d(e)
return s?s.map(l).map(f):[]}function c(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map((([e,s])=>[u(e),s])),t=l(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=c(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-15b324d7.js.map
