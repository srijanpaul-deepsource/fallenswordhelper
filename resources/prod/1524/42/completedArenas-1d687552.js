import{D as t,o as e,t as o,O as n,av as i,C as s}from"./calfSystem-15b00143.js"
import{c as r}from"./createInput-ff6bf89d.js"
import{i as f}from"./insertElementAfter-befc939b.js"
import{i as a}from"./insertElementBefore-34b77984.js"
import{i as p}from"./insertHtmlAfterEnd-778c206f.js"
import{i as m}from"./insertHtmlBeforeBegin-b9dc166e.js"
import{i as u}from"./interceptSubmit-a16f18a6.js"
import"./formToUrl-d1bb7512.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
a(t,n),p(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
f(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-1d687552.js.map
