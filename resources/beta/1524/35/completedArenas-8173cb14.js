import{D as t,o as e,t as o,O as n,ao as i,C as s}from"./calfSystem-03050396.js"
import{c as r}from"./createInput-c4b18abd.js"
import{i as a}from"./insertElementAfter-43b7fc5a.js"
import{i as f}from"./insertElementBefore-9228b012.js"
import{i as p}from"./insertHtmlAfterEnd-f4be3554.js"
import{i as m}from"./insertHtmlBeforeBegin-95689f8d.js"
import{i as u}from"./interceptSubmit-3f95205d.js"
import"./formToUrl-ef9a2d78.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
f(t,n),p(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-8173cb14.js.map
