import{$ as e,z as n,b_ as t,o as s,p as a,E as i,b as o,h as c,i as r,R as l,t as u,A as m,ak as p}from"./calfSystem-7a1cce43.js"
import{c as f}from"./createInput-76cdb39b.js"
import{t as g,g as d}from"./takeItem-0f099381.js"
import"./guild-6cfdbf69.js"
import"./dialog-e89b7ecf.js"
import"./dialogMsg-a0c49d9a.js"
import"./indexAjaxJson-48ec5c5d.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(b)}function k(e){return d({subcmd2:"takeitem",guildstore_id:e})}function j(e){r(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(k,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(j),function(){const e=f({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&c(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-deaa9f18.js.map
