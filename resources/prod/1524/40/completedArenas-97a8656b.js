import{D as t,o as e,t as o,O as n,au as i,C as s}from"./calfSystem-540da563.js"
import{c as r}from"./createInput-7c5a8b53.js"
import{i as a}from"./insertElementAfter-0b10d2cc.js"
import{i as p}from"./insertElementBefore-6e80e0ff.js"
import{i as f}from"./insertHtmlAfterEnd-9b7c2429.js"
import{i as m}from"./insertHtmlBeforeBegin-44de9e8d.js"
import{i as u}from"./interceptSubmit-b94311a2.js"
import"./formToUrl-efa4fabd.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-97a8656b.js.map
