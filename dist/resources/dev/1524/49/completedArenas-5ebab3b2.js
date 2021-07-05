import{D as t,o as e,t as o,N as n,aD as i,C as s}from"./calfSystem-9ab64478.js"
import{c as r}from"./createInput-48825441.js"
import{i as a}from"./insertElementAfter-766d923a.js"
import{i as p}from"./insertElementBefore-c7161beb.js"
import{i as m}from"./insertHtmlAfterEnd-1cda96b6.js"
import{i as f}from"./insertHtmlBeforeBegin-86676568.js"
import{i as u}from"./interceptSubmit-ba23111a.js"
import"./formToUrl-6294f17c.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-5ebab3b2.js.map
