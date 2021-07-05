import{D as t,o as e,t as o,N as n,aC as i,C as s}from"./calfSystem-42f137cb.js"
import{c as r}from"./createInput-b1d83433.js"
import{i as a}from"./insertElementAfter-2f943b13.js"
import{i as p}from"./insertElementBefore-c7161beb.js"
import{i as f}from"./insertHtmlAfterEnd-bc899275.js"
import{i as m}from"./insertHtmlBeforeBegin-a82af2c3.js"
import{i as c}from"./interceptSubmit-b85719fa.js"
import"./formToUrl-869dd05e.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-9af579a5.js.map
