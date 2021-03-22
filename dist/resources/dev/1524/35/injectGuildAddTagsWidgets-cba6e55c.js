import{$ as e,z as n,c2 as t,o as s,p as a,E as i,b as o,h as r,i as l,S as u,t as c,A as m,ao as p}from"./calfSystem-186455ab.js"
import{c as g}from"./createInput-d71226f9.js"
import{t as d,g as f}from"./takeItem-1446e931.js"
import"./guild-7919b015.js"
import"./dialog-bd85dd64.js"
import"./dialogMsg-eb4e9d8f.js"
import"./indexAjaxJson-d4ea205b.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return d(e).then(b)}function j(e){return f({subcmd2:"takeitem",guildstore_id:e})}function k(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(c(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function S(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(u),"sendLink"===n.className&&E(n)}function x(){s(a,S),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=g({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?x():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-cba6e55c.js.map
