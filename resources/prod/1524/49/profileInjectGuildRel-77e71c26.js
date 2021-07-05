import{Z as s,C as e,I as t,i as o,a0 as r,ag as a}from"./calfSystem-2172498b.js"
import{g as i,a as n}from"./getIsOwnGuild-8443b3cd.js"
import{g as d}from"./profile-07398ef3.js"
import{r as l}from"./replaceDoubleSpace-a19d0875.js"
import{s as c}from"./shouldBeArray-45b664e6.js"
import"./currentGuildId-7d9d343b.js"
import"./colouredDots-089d85ed.js"
import"./batch-04c769d2.js"
import"./onlineDot-06d8c9a0.js"
import"./doStatTotal-c56a956c.js"
import"./executeAll-779c0127.js"
import"./playerName-a5989c6d.js"
import"./asInt-c78388ed.js"
import"./intValue-f11572ef.js"
import"./valueText-c5773d3b.js"
import"./interceptSubmit-2a47b722.js"
import"./formToUrl-cbfebad5.js"
import"./csvSplit-a314c23c.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],f=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(s){const e=c(s)
return e?e.map(l).map(a):[]}function u(t){return n()?(s("guildSelf",e(t)),"self"):function(s){const e=f.map((([s,e])=>[p(s),e])),t=l(a(s)),o=e.find((([s])=>s.includes(t)))
if(o)return o[1]}(e(t))}function g(s){const e=u(s)
e&&function(s,e){const[,a,i]=m.find((([s])=>s===e))
s.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(s.parentNode,`<br>${r(n)}`)}(s,e)}function j(){const e=i()
e?g(e):d()&&s("guildSelf","")}export default j
//# sourceMappingURL=profileInjectGuildRel-77e71c26.js.map
