import{a0 as e,C as s,I as t,i as o,a2 as r}from"./calfSystem-186455ab.js"
import{g as a,a as i}from"./getIsOwnGuild-d4df4221.js"
import{g as n}from"./profile-865a35eb.js"
import{r as d}from"./replaceDoubleSpace-8525bb05.js"
import{s as l}from"./shouldBeArray-e79aae97.js"
import{t as f}from"./toLowerCase-5dc9e42d.js"
import"./currentGuildId-7dd95943.js"
import"./colouredDots-565da6c3.js"
import"./batch-a036d767.js"
import"./onlineDot-c09eceb7.js"
import"./doStatTotal-79b45123.js"
import"./executeAll-19d23fbc.js"
import"./playerName-2ef49def.js"
import"./intValue-1ce02c09.js"
import"./valueText-453036fb.js"
import"./interceptSubmit-24989074.js"
import"./formToUrl-91e15396.js"
import"./csvSplit-f0a1b444.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(d).map(f):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=d(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-39a93547.js.map
