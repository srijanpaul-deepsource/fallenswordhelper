import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-ab393688.js"
import{g as i,a}from"./getIsOwnGuild-80c7f46f.js"
import{g as n}from"./profile-0302cd61.js"
import{r as l}from"./replaceDoubleSpace-2b4c3c08.js"
import{s as f}from"./shouldBeArray-4211886e.js"
import{t as d}from"./toLowerCase-d053e281.js"
import"./currentGuildId-0cbe4e98.js"
import"./colouredDots-3fcd5994.js"
import"./batch-389838cb.js"
import"./onlineDot-c57058d1.js"
import"./doStatTotal-35ff7e6d.js"
import"./executeAll-6bc810f1.js"
import"./playerName-17cbc946.js"
import"./intValue-e485889b.js"
import"./valueText-d39824a3.js"
import"./interceptSubmit-02037ff6.js"
import"./formToUrl-96c1fd67.js"
import"./csvSplit-e7651da4.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=f(e)
return s?s.map(l).map(d):[]}function u(t){return a()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=l(d(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,i,a]=c.find((([e])=>e===s))
e.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-ace24c07.js.map
