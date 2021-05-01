import{D as t,o as e,t as o,O as n,ax as i,C as s}from"./calfSystem-c464cb1d.js"
import{c as r}from"./createInput-8ffbb09b.js"
import{i as f}from"./insertElementAfter-edfc87ec.js"
import{i as p}from"./insertElementBefore-6e80e0ff.js"
import{i as a}from"./insertHtmlAfterEnd-7649ce17.js"
import{i as m}from"./insertHtmlBeforeBegin-9bf2f034.js"
import{i as c}from"./interceptSubmit-ce385627.js"
import"./formToUrl-89e002dc.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),a(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
f(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-7b7c3fd2.js.map
