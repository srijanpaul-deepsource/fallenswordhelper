import{E as e,H as r}from"./calfSystem-617f9a5d.js"
import{b as t}from"./buffObj-6a194f9f.js"
let n
function a(e){return n.exec(e)}function f(t){n||(n=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(r).map(a)}function o(e){return t.find((r=>r.name===e))}export{f as b,o as g}
//# sourceMappingURL=getBuff-170bf92d.js.map
