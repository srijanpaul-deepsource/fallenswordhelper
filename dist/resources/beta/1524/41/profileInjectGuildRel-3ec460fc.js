import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-587dd8d3.js"
import{g as a,a as i}from"./getIsOwnGuild-05ab56a2.js"
import{g as d}from"./profile-1d21890e.js"
import{r as n}from"./replaceDoubleSpace-f140ae94.js"
import{s as l}from"./shouldBeArray-73d50d4c.js"
import{t as c}from"./toLowerCase-39a6c297.js"
import"./currentGuildId-f1814c84.js"
import"./colouredDots-f48541dd.js"
import"./batch-adc52b2d.js"
import"./onlineDot-50c6aee6.js"
import"./doStatTotal-cc0e0b54.js"
import"./executeAll-98e1edc5.js"
import"./playerName-79fdbfb0.js"
import"./intValue-af3aed3f.js"
import"./valueText-c4f1622c.js"
import"./interceptSubmit-8814daab.js"
import"./formToUrl-2c1cc653.js"
import"./csvSplit-bb2c228e.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(n).map(c):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=n(c(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=f.find((([e])=>e===s))
e.parentNode.classList.add(a)
const d=t(i)
d&&d.length>0&&o(e.parentNode,`<br>${r(d)}`)}(e,s)}function g(){const s=a()
s?j(s):d()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-3ec460fc.js.map
