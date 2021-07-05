import{D as t,o as e,t as o,N as n,aB as i,C as s}from"./calfSystem-365d90f3.js"
import{c as r}from"./createInput-7ea7a166.js"
import{i as a}from"./insertElementAfter-401255a6.js"
import{i as p}from"./insertElementBefore-784d4581.js"
import{i as f}from"./insertHtmlAfterEnd-f8bb4356.js"
import{i as m}from"./insertHtmlBeforeBegin-07ea9c78.js"
import{i as u}from"./interceptSubmit-ed906294.js"
import"./formToUrl-95d4fbda.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-41d82180.js.map
