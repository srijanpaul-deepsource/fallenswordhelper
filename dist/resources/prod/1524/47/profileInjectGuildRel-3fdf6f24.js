import{Z as e,C as s,I as t,i as a,a0 as o,ag as r}from"./calfSystem-a2fd9017.js"
import{g as i,a as n}from"./getIsOwnGuild-0df57003.js"
import{g as d}from"./profile-36d5e721.js"
import{r as l}from"./replaceDoubleSpace-9eaa0aad.js"
import{s as f}from"./shouldBeArray-830599fd.js"
import"./currentGuildId-871ea013.js"
import"./colouredDots-e6e48020.js"
import"./batch-0f132e33.js"
import"./onlineDot-20a56643.js"
import"./doStatTotal-7cdd55ce.js"
import"./executeAll-9ecb4cd8.js"
import"./playerName-fab1659b.js"
import"./asInt-bc42d23b.js"
import"./intValue-e4ce6bb5.js"
import"./valueText-8b6ccd61.js"
import"./interceptSubmit-ce135195.js"
import"./formToUrl-a8a254b6.js"
import"./csvSplit-e3b3e000.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=f(e)
return s?s.map(l).map(r):[]}function u(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=l(r(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function g(e){const s=u(e)
s&&function(e,s){const[,r,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&a(e.parentNode,`<br>${o(n)}`)}(e,s)}function j(){const s=i()
s?g(s):d()&&e("guildSelf","")}export default j
//# sourceMappingURL=profileInjectGuildRel-3fdf6f24.js.map
