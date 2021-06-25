import{E as e,H as r}from"./calfSystem-bfc1f6c0.js"
import{b as t}from"./buffObj-68975e43.js"
let n
function o(e){return n.exec(e)}function f(t){n||(n=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(r).map(o)}function a(e){return t.find((r=>r.name===e))}export{f as b,a as g}
//# sourceMappingURL=getBuff-6611bd1f.js.map
