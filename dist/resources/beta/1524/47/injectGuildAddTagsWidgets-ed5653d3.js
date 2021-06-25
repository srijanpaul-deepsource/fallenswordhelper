import{$ as e,z as n,c3 as t,o as a,p as s,E as i,b as o,h as r,i as c,Q as l,t as u,A as m,aA as p}from"./calfSystem-db2edbef.js"
import{c as d}from"./createInput-93c1d447.js"
import{t as g,g as f}from"./takeItem-a47bb55c.js"
import"./guild-046ae9f9.js"
import"./dialog-a4dfa31d.js"
import"./dialogMsg-edbc265b.js"
import"./indexAjaxJson-acd1a794.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(b)}function j(e){return f({subcmd2:"takeitem",guildstore_id:e})}function k(e){c(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var a;(a=t,e(j,h,a)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&E(n)}function S(){a(s,x),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=d({type:"button",value:"Check All"}),n=o("form",s)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function A(){n("tagging_cost")?S():t()}export default A
//# sourceMappingURL=injectGuildAddTagsWidgets-ed5653d3.js.map
