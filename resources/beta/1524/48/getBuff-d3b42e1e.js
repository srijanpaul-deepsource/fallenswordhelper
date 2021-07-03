import{E as e,H as r}from"./calfSystem-8af1dca2.js"
import{b as t}from"./buffObj-7ab8e1a0.js"
let a
function n(e){return a.exec(e)}function o(t){a||(a=new RegExp("Skill ([\\w ]*) level (\\d*) was activated on '(\\w*)'|The skill ([\\w ]*) of (current or higher level is currently active) on '(\\w*)'|Player '(\\w*)' (has set their preferences to block the skill) '([\\w ]*)' from being cast on them."))
return e("#quickbuff-report font",t).map(r).map(n)}function f(e){return t.find((r=>r.name===e))}export{o as b,f as g}
//# sourceMappingURL=getBuff-d3b42e1e.js.map
