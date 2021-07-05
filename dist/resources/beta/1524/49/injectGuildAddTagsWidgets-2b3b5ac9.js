import{$ as e,z as n,bV as t,o as s,p as a,E as i,b as o,h as r,i as l,Q as c,t as u,A as m,aB as f}from"./calfSystem-42f137cb.js"
import{c as p}from"./createInput-b1d83433.js"
import{t as g,g as d}from"./takeItem-3509c4be.js"
import"./guild-13f35edb.js"
import"./dialog-4ff9c696.js"
import"./indexAjaxJson-4839dee4.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(b)}function k(e){return d({subcmd2:"takeitem",guildstore_id:e})}function v(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function E(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function j(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(k,h,s)).then(u(E,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${f}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(c),"sendLink"===n.className&&j(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(v),function(){const e=p({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-2b3b5ac9.js.map
