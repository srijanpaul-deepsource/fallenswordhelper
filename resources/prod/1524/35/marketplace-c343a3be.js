import{a as e}from"./addCommas-fa3f11ee.js"
import{c as s}from"./closestTable-e206f233.js"
import{f as t,p as n,z as o,B as a}from"./calfSystem-fe0ebf32.js"
import"./closest-1ff01e01.js"
let f,r,c
function i(){return f||(f=o("amount")),f}function u(t){const n=i().value
a(`<span class="fshBlue">You are offering to buy <b>${n}</b> FSP for >> <b>${e(t)}</b> (Total: ${e(function(e,s){const t=e*s
return t+Math.ceil(t/200)}(n,t))})</span>`,function(){if(!c){const e=s(i()).insertRow(2)
c=e.insertCell(0),c.colSpan="2",c.className="fshCenter"}return c}())}function l(){const e=(r||(r=o("price")),r)
if(e){const s=e.value;-1!==s.search(/^[0-9]+$/)?u(s):c&&""!==c.innerHTML&&a("",c)}}function m(){t(n,"keyup",l)}export default m
//# sourceMappingURL=marketplace-c343a3be.js.map
