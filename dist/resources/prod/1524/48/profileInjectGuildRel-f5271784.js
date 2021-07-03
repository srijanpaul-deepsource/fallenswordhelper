import{Z as e,C as s,I as t,i as o,a0 as r,ag as a}from"./calfSystem-85fa6364.js"
import{g as i,a as n}from"./getIsOwnGuild-aa6b75c3.js"
import{g as f}from"./profile-811b36fd.js"
import{r as l}from"./replaceDoubleSpace-5771ecd0.js"
import{s as d}from"./shouldBeArray-7800c6f0.js"
import"./currentGuildId-01e2fed9.js"
import"./colouredDots-ec66a88f.js"
import"./batch-5a4fc6b0.js"
import"./onlineDot-00bdd8cc.js"
import"./doStatTotal-40063ed2.js"
import"./executeAll-ff401d51.js"
import"./playerName-2fc4f5c9.js"
import"./asInt-e726f694.js"
import"./intValue-9eb5015a.js"
import"./valueText-2318857d.js"
import"./interceptSubmit-6f4d5b99.js"
import"./formToUrl-fe5f507a.js"
import"./csvSplit-a090804f.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(l).map(a):[]}function u(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=l(a(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function g(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function j(){const s=i()
s?g(s):f()&&e("guildSelf","")}export default j
//# sourceMappingURL=profileInjectGuildRel-f5271784.js.map
