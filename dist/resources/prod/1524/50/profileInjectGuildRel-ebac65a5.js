import{Z as s,C as e,I as t,i as o,a0 as r,ag as i}from"./calfSystem-365d90f3.js"
import{g as a,a as n}from"./getIsOwnGuild-d6e6b900.js"
import{g as d}from"./profile-bac01640.js"
import{r as l}from"./replaceDoubleSpace-96b3a615.js"
import{s as f}from"./shouldBeArray-82175111.js"
import"./currentGuildId-605c07b2.js"
import"./colouredDots-89d37194.js"
import"./batch-c397b474.js"
import"./onlineDot-84e0098c.js"
import"./doStatTotal-26658dfb.js"
import"./executeAll-30735897.js"
import"./playerName-17f8d780.js"
import"./asInt-28c95ec4.js"
import"./intValue-76dfee09.js"
import"./valueText-790aad9b.js"
import"./interceptSubmit-ed906294.js"
import"./formToUrl-95d4fbda.js"
import"./csvSplit-68cab542.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(s){const e=f(s)
return e?e.map(l).map(i):[]}function u(t){return n()?(s("guildSelf",e(t)),"self"):function(s){const e=c.map((([s,e])=>[p(s),e])),t=l(i(s)),o=e.find((([s])=>s.includes(t)))
if(o)return o[1]}(e(t))}function g(s){const e=u(s)
e&&function(s,e){const[,i,a]=m.find((([s])=>s===e))
s.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(s.parentNode,`<br>${r(n)}`)}(s,e)}function j(){const e=a()
e?g(e):d()&&s("guildSelf","")}export default j
//# sourceMappingURL=profileInjectGuildRel-ebac65a5.js.map
