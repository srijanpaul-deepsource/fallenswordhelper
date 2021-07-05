import{$ as e,z as n,bV as t,o as a,p as s,E as i,b as o,h as r,i as l,Q as u,t as c,A as m,aB as p}from"./calfSystem-617f9a5d.js"
import{c as f}from"./createInput-f24320ea.js"
import{t as g,g as d}from"./takeItem-295b906a.js"
import"./guild-9563808a.js"
import"./dialog-a0295936.js"
import"./indexAjaxJson-1f941a45.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(b)}function k(e){return d({subcmd2:"takeitem",guildstore_id:e})}function v(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function E(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function j(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var a;(a=t,e(k,h,a)).then(c(E,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(u),"sendLink"===n.className&&j(n)}function S(){a(s,x),i('#pCC input[name="tagIndex[]"]').forEach(v),function(){const e=f({type:"button",value:"Check All"}),n=o("form",s)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-60626ca2.js.map
