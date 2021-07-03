import{$ as e,z as n,bU as t,o as s,p as a,E as i,b as o,h as r,i as c,Q as l,t as u,A as m,aA as p}from"./calfSystem-85fa6364.js"
import{c as f}from"./createInput-6b491c72.js"
import{t as g,g as d}from"./takeItem-c1ee7cf4.js"
import"./guild-4d3dc7f1.js"
import"./dialog-8ce28e39.js"
import"./dialogMsg-752657d7.js"
import"./indexAjaxJson-4fb780dc.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(b)}function j(e){return d({subcmd2:"takeitem",guildstore_id:e})}function k(e){c(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=f({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function A(){n("tagging_cost")?S():t()}export default A
//# sourceMappingURL=injectGuildAddTagsWidgets-eff4dc35.js.map
