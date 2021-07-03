import{$ as e,z as n,bW as t,o as s,p as a,E as i,b as o,h as r,i as l,R as c,t as u,A as m,aC as f}from"./calfSystem-01849445.js"
import{c as p}from"./createInput-a507cfd0.js"
import{t as g,g as d}from"./takeItem-54a44606.js"
import"./guild-4745cf8f.js"
import"./dialog-6e4d0a83.js"
import"./indexAjaxJson-0f9790ea.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(b)}function k(e){return d({subcmd2:"takeitem",guildstore_id:e})}function v(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function E(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function j(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(k,h,s)).then(u(E,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${f}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(c),"sendLink"===n.className&&j(n)}function C(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(v),function(){const e=p({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function S(){n("tagging_cost")?C():t()}export default S
//# sourceMappingURL=injectGuildAddTagsWidgets-cff278a6.js.map
