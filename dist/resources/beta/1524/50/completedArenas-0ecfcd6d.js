import{D as t,o as e,t as o,N as n,aC as i,C as s}from"./calfSystem-617f9a5d.js"
import{c as r}from"./createInput-f24320ea.js"
import{i as a}from"./insertElementAfter-c974156f.js"
import{i as f}from"./insertElementBefore-784d4581.js"
import{i as p}from"./insertHtmlAfterEnd-b1e65dcb.js"
import{i as m}from"./insertHtmlBeforeBegin-4bda1ddf.js"
import{i as u}from"./interceptSubmit-6761ad9f.js"
import"./formToUrl-4962600c.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function d(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
f(t,n),p(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default d
//# sourceMappingURL=completedArenas-0ecfcd6d.js.map
