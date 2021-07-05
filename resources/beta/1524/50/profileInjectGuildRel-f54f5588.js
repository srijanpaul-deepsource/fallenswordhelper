import{_ as e,C as s,I as t,i as o,a1 as a,ah as r}from"./calfSystem-617f9a5d.js"
import{g as i,a as n}from"./getIsOwnGuild-bb803e32.js"
import{g as l}from"./profile-48624fda.js"
import{r as d}from"./replaceDoubleSpace-96b3a615.js"
import{s as f}from"./shouldBeArray-1a51523e.js"
import"./currentGuildId-3b40ad81.js"
import"./colouredDots-78f6a735.js"
import"./batch-4134d884.js"
import"./onlineDot-3bf4ce45.js"
import"./doStatTotal-0ef44207.js"
import"./executeAll-30735897.js"
import"./playerName-90c8eb43.js"
import"./asInt-371663d1.js"
import"./intValue-76dfee09.js"
import"./valueText-e4bbd7ea.js"
import"./interceptSubmit-6761ad9f.js"
import"./formToUrl-4962600c.js"
import"./csvSplit-68cab542.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(e){const s=f(e)
return s?s.map(d).map(r):[]}function c(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map((([e,s])=>[u(e),s])),t=d(r(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=c(e)
s&&function(e,s){const[,r,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${a(n)}`)}(e,s)}function g(){const s=i()
s?j(s):l()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-f54f5588.js.map
