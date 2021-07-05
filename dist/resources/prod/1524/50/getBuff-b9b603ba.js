import{E as e,H as r}from"./calfSystem-365d90f3.js"
import{b as t}from"./buffObj-6a194f9f.js"
let n
function f(e){return n.exec(e)}function o(t){n||(n=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(r).map(f)}function a(e){return t.find((r=>r.name===e))}export{o as b,a as g}
//# sourceMappingURL=getBuff-b9b603ba.js.map
