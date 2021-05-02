import{D as t,o as e,t as o,O as n,ax as i,C as s}from"./calfSystem-e76f1a7d.js"
import{c as r}from"./createInput-d7164015.js"
import{i as a}from"./insertElementAfter-b5876360.js"
import{i as p}from"./insertElementBefore-34b77984.js"
import{i as f}from"./insertHtmlAfterEnd-dc7d60fa.js"
import{i as m}from"./insertHtmlBeforeBegin-a3c839c4.js"
import{i as c}from"./interceptSubmit-cb7652f8.js"
import"./formToUrl-2b5b5569.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-ba94f305.js.map
