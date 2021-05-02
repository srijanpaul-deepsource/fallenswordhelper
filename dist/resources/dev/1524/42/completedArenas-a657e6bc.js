import{D as t,o as e,t as o,O as n,ay as i,C as s}from"./calfSystem-4b6b865d.js"
import{c as r}from"./createInput-4be43807.js"
import{i as p}from"./insertElementAfter-318f4f8a.js"
import{i as a}from"./insertElementBefore-34b77984.js"
import{i as f}from"./insertHtmlAfterEnd-e7d8b6bb.js"
import{i as m}from"./insertHtmlBeforeBegin-09f299e7.js"
import{i as u}from"./interceptSubmit-4558b472.js"
import"./formToUrl-c8d32791.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
a(t,n),f(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
p(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-a657e6bc.js.map
