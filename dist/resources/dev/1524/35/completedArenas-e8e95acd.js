import{D as t,o as e,t as o,O as n,ap as i,C as s}from"./calfSystem-186455ab.js"
import{c as r}from"./createInput-d71226f9.js"
import{i as a}from"./insertElementAfter-cbddba0b.js"
import{i as p}from"./insertElementBefore-9228b012.js"
import{i as m}from"./insertHtmlAfterEnd-f3689d6c.js"
import{i as f}from"./insertHtmlBeforeBegin-edbb7a7b.js"
import{i as u}from"./interceptSubmit-24989074.js"
import"./formToUrl-91e15396.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-e8e95acd.js.map
