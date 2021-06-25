import{D as t,o as e,t as o,N as n,az as i,C as s}from"./calfSystem-a2fd9017.js"
import{c as r}from"./createInput-ca1e27eb.js"
import{i as a}from"./insertElementAfter-b6273159.js"
import{i as p}from"./insertElementBefore-165ce171.js"
import{i as f}from"./insertHtmlAfterEnd-8dd1e730.js"
import{i as m}from"./insertHtmlBeforeBegin-a9011fff.js"
import{i as u}from"./interceptSubmit-ce135195.js"
import"./formToUrl-a8a254b6.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-87295491.js.map
