import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-fe0ebf32.js"
import{g as i,a}from"./getIsOwnGuild-4074527a.js"
import{g as n}from"./profile-3257dbdb.js"
import{r as d}from"./replaceDoubleSpace-8525bb05.js"
import{s as l}from"./shouldBeArray-1a828bc8.js"
import{t as f}from"./toLowerCase-5dc9e42d.js"
import"./currentGuildId-09820c92.js"
import"./colouredDots-74c4a16e.js"
import"./batch-0d4bdf85.js"
import"./onlineDot-6de579ac.js"
import"./doStatTotal-fd9f8e0b.js"
import"./executeAll-19d23fbc.js"
import"./playerName-dca56241.js"
import"./intValue-1ce02c09.js"
import"./valueText-2234f468.js"
import"./interceptSubmit-1425876c.js"
import"./formToUrl-487e3c2d.js"
import"./csvSplit-f0a1b444.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(d).map(f):[]}function u(t){return a()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=d(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,i,a]=c.find((([e])=>e===s))
e.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-3bdd90e7.js.map
