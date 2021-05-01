import{D as t,o as e,t as o,O as n,av as i,C as s}from"./calfSystem-030d7057.js"
import{c as r}from"./createInput-07b7fd77.js"
import{i as p}from"./insertElementAfter-6517f4d4.js"
import{i as a}from"./insertElementBefore-2bf2da7f.js"
import{i as f}from"./insertHtmlAfterEnd-255ee2cd.js"
import{i as m}from"./insertHtmlBeforeBegin-e6bc9313.js"
import{i as u}from"./interceptSubmit-64615b22.js"
import"./formToUrl-63e8d7e7.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
a(t,n),f(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
p(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-a3403702.js.map
