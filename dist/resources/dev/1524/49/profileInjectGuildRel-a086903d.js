import{a0 as s,C as t,I as e,i as a,a2 as o,ai as r}from"./calfSystem-9ab64478.js"
import{g as i,a as n}from"./getIsOwnGuild-e126ddfa.js"
import{g as f}from"./profile-1d773255.js"
import{r as l}from"./replaceDoubleSpace-a19d0875.js"
import{s as d}from"./shouldBeArray-24afb37a.js"
import"./currentGuildId-c05147ac.js"
import"./colouredDots-b5509923.js"
import"./batch-53744af0.js"
import"./onlineDot-1df6212d.js"
import"./doStatTotal-d0bf467a.js"
import"./executeAll-779c0127.js"
import"./playerName-b4c2ff3f.js"
import"./asInt-61644392.js"
import"./intValue-f11572ef.js"
import"./valueText-99c24f27.js"
import"./interceptSubmit-ba23111a.js"
import"./formToUrl-6294f17c.js"
import"./csvSplit-a314c23c.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(s){const t=d(s)
return t?t.map(l).map(r):[]}function u(e){return n()?(s("guildSelf",t(e)),"self"):function(s){const t=c.map((([s,t])=>[p(s),t])),e=l(r(s)),a=t.find((([s])=>s.includes(e)))
if(a)return a[1]}(t(e))}function j(s){const t=u(s)
t&&function(s,t){const[,r,i]=m.find((([s])=>s===t))
s.parentNode.classList.add(r)
const n=e(i)
n&&n.length>0&&a(s.parentNode,`<br>${o(n)}`)}(s,t)}function g(){const t=i()
t?j(t):f()&&s("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-a086903d.js.map
