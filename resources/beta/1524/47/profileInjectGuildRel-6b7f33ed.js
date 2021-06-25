import{Z as e,C as s,I as t,i as o,a0 as r,ag as a}from"./calfSystem-db2edbef.js"
import{g as i,a as n}from"./getIsOwnGuild-1130cab7.js"
import{g as c}from"./profile-ee1ef306.js"
import{r as d}from"./replaceDoubleSpace-9eaa0aad.js"
import{s as l}from"./shouldBeArray-42b75ace.js"
import"./currentGuildId-3f7c0e1c.js"
import"./colouredDots-6c1de22d.js"
import"./batch-ecccc095.js"
import"./onlineDot-1f0e9c19.js"
import"./doStatTotal-3ad45754.js"
import"./executeAll-9ecb4cd8.js"
import"./playerName-70d3d303.js"
import"./asInt-48dcc84c.js"
import"./intValue-e4ce6bb5.js"
import"./valueText-cde56b68.js"
import"./interceptSubmit-37405c90.js"
import"./formToUrl-b338bcd1.js"
import"./csvSplit-e3b3e000.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],f=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(d).map(a):[]}function u(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=f.map((([e,s])=>[p(e),s])),t=d(a(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function g(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function j(){const s=i()
s?g(s):c()&&e("guildSelf","")}export default j
//# sourceMappingURL=profileInjectGuildRel-6b7f33ed.js.map
