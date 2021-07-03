import{a0 as e,C as s,I as t,i as a,a2 as o,ai as r}from"./calfSystem-01849445.js"
import{g as i,a as n}from"./getIsOwnGuild-78e4ca08.js"
import{g as d}from"./profile-16dd8ed6.js"
import{r as l}from"./replaceDoubleSpace-5771ecd0.js"
import{s as f}from"./shouldBeArray-8db83b5e.js"
import"./currentGuildId-8dd620e8.js"
import"./colouredDots-8ac6ff2e.js"
import"./batch-367d6f7a.js"
import"./onlineDot-807eb365.js"
import"./doStatTotal-20f2ac46.js"
import"./executeAll-ff401d51.js"
import"./playerName-b318da41.js"
import"./asInt-0acbfe32.js"
import"./intValue-9eb5015a.js"
import"./valueText-5e8600b8.js"
import"./interceptSubmit-12207649.js"
import"./formToUrl-01a5ba54.js"
import"./csvSplit-a090804f.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(e){const s=f(e)
return s?s.map(l).map(r):[]}function c(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map((([e,s])=>[u(e),s])),t=l(r(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function j(e){const s=c(e)
s&&function(e,s){const[,r,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&a(e.parentNode,`<br>${o(n)}`)}(e,s)}function g(){const s=i()
s?j(s):d()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-5b25ef76.js.map
