import{D as t,o as e,t as o,N as n,aB as i,C as s}from"./calfSystem-2172498b.js"
import{c as r}from"./createInput-b54e35e9.js"
import{i as a}from"./insertElementAfter-d7162528.js"
import{i as p}from"./insertElementBefore-c7161beb.js"
import{i as f}from"./insertHtmlAfterEnd-ab1f79ab.js"
import{i as m}from"./insertHtmlBeforeBegin-6f6dcc84.js"
import{i as c}from"./interceptSubmit-2a47b722.js"
import"./formToUrl-cbfebad5.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-f1b9ffc7.js.map
