import{$ as e,z as n,c1 as t,o as s,p as a,E as i,b as o,h as r,i as l,S as c,t as u,A as m,aw as p}from"./calfSystem-c464cb1d.js"
import{c as g}from"./createInput-8ffbb09b.js"
import{t as f,g as d}from"./takeItem-78023586.js"
import"./guild-fd341d08.js"
import"./dialog-17ce66e6.js"
import"./dialogMsg-3d2031b8.js"
import"./indexAjaxJson-9476707b.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return f(e).then(b)}function j(e){return d({subcmd2:"takeitem",guildstore_id:e})}function k(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function S(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(c),"sendLink"===n.className&&E(n)}function x(){s(a,S),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=g({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?x():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-2404182c.js.map
