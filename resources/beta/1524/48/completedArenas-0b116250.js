import{D as t,o as e,t as o,N as n,aC as i,C as a}from"./calfSystem-8af1dca2.js"
import{c as s}from"./createInput-75b7145b.js"
import{i as r}from"./insertElementAfter-62f0d2ad.js"
import{i as p}from"./insertElementBefore-5adb1609.js"
import{i as f}from"./insertHtmlAfterEnd-e22ce08b.js"
import{i as m}from"./insertHtmlBeforeBegin-aa0d2ad7.js"
import{i as u}from"./interceptSubmit-57af03dc.js"
import"./formToUrl-71081055.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(a(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function d(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=s({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=s({type:"button",value:">>"})
r(t,o),m(t,"&nbsp;"),e(t,l)}}(),u()}export default d
//# sourceMappingURL=completedArenas-0b116250.js.map
