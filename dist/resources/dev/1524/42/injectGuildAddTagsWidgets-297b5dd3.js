import{$ as e,z as n,c2 as t,o as s,p as a,E as i,b as o,h as r,i as l,S as c,t as u,A as m,ax as p}from"./calfSystem-4b6b865d.js"
import{c as g}from"./createInput-4be43807.js"
import{t as d,g as f}from"./takeItem-bc9895ad.js"
import"./guild-91284196.js"
import"./dialog-aad1c6e1.js"
import"./dialogMsg-5b0fd825.js"
import"./indexAjaxJson-9849e745.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return d(e).then(b)}function j(e){return f({subcmd2:"takeitem",guildstore_id:e})}function k(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function x(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function E(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(c),"sendLink"===n.className&&x(n)}function S(){s(a,E),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=g({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-297b5dd3.js.map
