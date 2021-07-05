import{a0 as s,C as e,I as t,i as a,a2 as o,ai as r}from"./calfSystem-b3667af8.js"
import{g as i,a as n}from"./getIsOwnGuild-3d053f2d.js"
import{g as d}from"./profile-100e9d0d.js"
import{r as l}from"./replaceDoubleSpace-96b3a615.js"
import{s as f}from"./shouldBeArray-3d5b7aae.js"
import"./currentGuildId-01980e74.js"
import"./colouredDots-72a91295.js"
import"./batch-1a09a87c.js"
import"./onlineDot-38946dd7.js"
import"./doStatTotal-7dac1b93.js"
import"./executeAll-30735897.js"
import"./playerName-8bccbcca.js"
import"./asInt-4d304164.js"
import"./intValue-76dfee09.js"
import"./valueText-5f82bcfb.js"
import"./interceptSubmit-dd886fe1.js"
import"./formToUrl-872022b8.js"
import"./csvSplit-68cab542.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(s){const e=f(s)
return e?e.map(l).map(r):[]}function u(t){return n()?(s("guildSelf",e(t)),"self"):function(s){const e=c.map((([s,e])=>[p(s),e])),t=l(r(s)),a=e.find((([s])=>s.includes(t)))
if(a)return a[1]}(e(t))}function j(s){const e=u(s)
e&&function(s,e){const[,r,i]=m.find((([s])=>s===e))
s.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&a(s.parentNode,`<br>${o(n)}`)}(s,e)}function g(){const e=i()
e?j(e):d()&&s("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-61c350b7.js.map
