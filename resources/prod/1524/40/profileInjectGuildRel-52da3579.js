import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-540da563.js"
import{g as a,a as i}from"./getIsOwnGuild-d2a53861.js"
import{g as d}from"./profile-6dfbdb6d.js"
import{r as n}from"./replaceDoubleSpace-2b4c3c08.js"
import{s as l}from"./shouldBeArray-6d7dc150.js"
import{t as f}from"./toLowerCase-d053e281.js"
import"./currentGuildId-dc83d308.js"
import"./colouredDots-72576aa3.js"
import"./batch-735e3bee.js"
import"./onlineDot-87712eda.js"
import"./doStatTotal-a78f8d49.js"
import"./executeAll-6bc810f1.js"
import"./playerName-c00ebc45.js"
import"./intValue-e485889b.js"
import"./valueText-87497ead.js"
import"./interceptSubmit-b94311a2.js"
import"./formToUrl-efa4fabd.js"
import"./csvSplit-e7651da4.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(n).map(f):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=n(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const d=t(i)
d&&d.length>0&&o(e.parentNode,`<br>${r(d)}`)}(e,s)}function g(){const s=a()
s?j(s):d()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-52da3579.js.map
