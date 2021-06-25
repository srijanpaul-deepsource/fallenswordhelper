import{_ as e,C as s,I as t,i as a,a1 as o,ah as r}from"./calfSystem-bfc1f6c0.js"
import{g as i,a as n}from"./getIsOwnGuild-97da8dd8.js"
import{g as l}from"./profile-630d8095.js"
import{r as d}from"./replaceDoubleSpace-9eaa0aad.js"
import{s as c}from"./shouldBeArray-47720a12.js"
import"./currentGuildId-92fe6d54.js"
import"./colouredDots-7715392d.js"
import"./batch-8ae36ec2.js"
import"./onlineDot-3ab91a4e.js"
import"./doStatTotal-b8475745.js"
import"./executeAll-9ecb4cd8.js"
import"./playerName-3c8c8393.js"
import"./asInt-95882709.js"
import"./intValue-e4ce6bb5.js"
import"./valueText-ff818578.js"
import"./interceptSubmit-6c866cd4.js"
import"./formToUrl-bf2c911a.js"
import"./csvSplit-e3b3e000.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=c(e)
return s?s.map(d).map(r):[]}function u(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=d(r(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,r,i]=f.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&a(e.parentNode,`<br>${o(n)}`)}(e,s)}function g(){const s=i()
s?j(s):l()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-338b319a.js.map
