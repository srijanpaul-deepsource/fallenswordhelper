import{$ as e,z as n,bW as t,o as s,p as a,E as i,b as o,h as r,i as l,R as u,t as c,A as m,aC as p}from"./calfSystem-9ab64478.js"
import{c as f}from"./createInput-48825441.js"
import{t as g,g as d}from"./takeItem-3d07b862.js"
import"./guild-3e01f77e.js"
import"./dialog-f1cd510f.js"
import"./indexAjaxJson-b31a9d3b.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(b)}function k(e){return d({subcmd2:"takeitem",guildstore_id:e})}function v(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function E(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function j(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(k,h,s)).then(c(E,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(u),"sendLink"===n.className&&j(n)}function C(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(v),function(){const e=f({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function S(){n("tagging_cost")?C():t()}export default S
//# sourceMappingURL=injectGuildAddTagsWidgets-58b4b56a.js.map
