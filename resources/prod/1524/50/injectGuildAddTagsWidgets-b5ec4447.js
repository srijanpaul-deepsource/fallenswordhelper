import{$ as e,z as n,bU as t,o as s,p as a,E as i,b as o,h as r,i as c,Q as l,t as u,A as m,aA as f}from"./calfSystem-365d90f3.js"
import{c as p}from"./createInput-7ea7a166.js"
import{t as g,g as d}from"./takeItem-11ac6a2f.js"
import"./guild-0fcc2705.js"
import"./dialog-f292fc18.js"
import"./dialogMsg-fefcc43f.js"
import"./indexAjaxJson-81a9c061.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(b)}function j(e){return d({subcmd2:"takeitem",guildstore_id:e})}function k(e){c(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${f}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=p({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function A(){n("tagging_cost")?S():t()}export default A
//# sourceMappingURL=injectGuildAddTagsWidgets-b5ec4447.js.map
