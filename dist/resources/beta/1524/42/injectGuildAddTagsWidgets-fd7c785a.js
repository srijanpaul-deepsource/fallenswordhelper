import{$ as e,z as n,c1 as t,o as s,p as a,E as i,b as o,h as r,i as c,R as l,t as u,A as m,aw as p}from"./calfSystem-e76f1a7d.js"
import{c as f}from"./createInput-d7164015.js"
import{t as g,g as d}from"./takeItem-ff1bcc97.js"
import"./guild-e055cb09.js"
import"./dialog-aad1c6e1.js"
import"./dialogMsg-5b0fd825.js"
import"./indexAjaxJson-77d0e468.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(b)}function j(e){return d({subcmd2:"takeitem",guildstore_id:e})}function k(e){c(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=f({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-fd7c785a.js.map
