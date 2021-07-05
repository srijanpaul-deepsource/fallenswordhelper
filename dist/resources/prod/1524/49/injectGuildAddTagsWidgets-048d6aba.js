import{$ as e,z as n,bU as t,o as s,p as a,E as i,b as o,h as r,i as l,Q as c,t as u,A as m,aA as p}from"./calfSystem-2172498b.js"
import{c as g}from"./createInput-b54e35e9.js"
import{t as f,g as d}from"./takeItem-058791ff.js"
import"./guild-8b9b510e.js"
import"./dialog-cb76c307.js"
import"./dialogMsg-1dee29e9.js"
import"./indexAjaxJson-b5d4e9de.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return f(e).then(b)}function j(e){return d({subcmd2:"takeitem",guildstore_id:e})}function k(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(c),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=g({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function A(){n("tagging_cost")?S():t()}export default A
//# sourceMappingURL=injectGuildAddTagsWidgets-048d6aba.js.map
