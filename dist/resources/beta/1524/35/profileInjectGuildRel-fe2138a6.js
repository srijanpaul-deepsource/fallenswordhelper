import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-03050396.js"
import{g as i,a}from"./getIsOwnGuild-80414820.js"
import{g as n}from"./profile-45520c62.js"
import{r as l}from"./replaceDoubleSpace-8525bb05.js"
import{s as d}from"./shouldBeArray-f76c9cd1.js"
import{t as f}from"./toLowerCase-5dc9e42d.js"
import"./currentGuildId-4235046f.js"
import"./colouredDots-5998101c.js"
import"./batch-003cd06a.js"
import"./onlineDot-77b2d184.js"
import"./doStatTotal-5e9c51fd.js"
import"./executeAll-19d23fbc.js"
import"./playerName-3ca7fe81.js"
import"./intValue-1ce02c09.js"
import"./valueText-c92275e2.js"
import"./interceptSubmit-3f95205d.js"
import"./formToUrl-ef9a2d78.js"
import"./csvSplit-f0a1b444.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(l).map(f):[]}function u(t){return a()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=l(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,i,a]=c.find((([e])=>e===s))
e.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-fe2138a6.js.map
