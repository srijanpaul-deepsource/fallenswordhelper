import{_ as e,C as s,I as t,i as a,a1 as o,ah as r}from"./calfSystem-8af1dca2.js"
import{g as i,a as n}from"./getIsOwnGuild-53994452.js"
import{g as l}from"./profile-5e47c648.js"
import{r as d}from"./replaceDoubleSpace-5771ecd0.js"
import{s as f}from"./shouldBeArray-c0e8ef84.js"
import"./currentGuildId-ae75dbfc.js"
import"./colouredDots-3e58d691.js"
import"./batch-891ec1a6.js"
import"./onlineDot-bb9216af.js"
import"./doStatTotal-2b938864.js"
import"./executeAll-ff401d51.js"
import"./playerName-7218c72a.js"
import"./asInt-74ac71c8.js"
import"./intValue-9eb5015a.js"
import"./valueText-ad23c08d.js"
import"./interceptSubmit-57af03dc.js"
import"./formToUrl-71081055.js"
import"./csvSplit-a090804f.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=f(e)
return s?s.map(d).map(r):[]}function u(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=d(r(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,r,i]=c.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&a(e.parentNode,`<br>${o(n)}`)}(e,s)}function g(){const s=i()
s?j(s):l()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-24e22327.js.map
