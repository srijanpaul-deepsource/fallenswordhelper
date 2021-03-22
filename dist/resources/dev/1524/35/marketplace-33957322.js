import{a as s}from"./addCommas-fa3f11ee.js"
import{c as t}from"./closestTable-24eadf35.js"
import{f as e,p as n,z as o,B as a}from"./calfSystem-186455ab.js"
import"./closest-1ff01e01.js"
let f,r,c
function i(){return f||(f=o("amount")),f}function u(e){const n=i().value
a(`<span class="fshBlue">You are offering to buy <b>${n}</b> FSP for >> <b>${s(e)}</b> (Total: ${s(function(s,t){const e=s*t
return e+Math.ceil(e/200)}(n,e))})</span>`,function(){if(!c){const s=t(i()).insertRow(2)
c=s.insertCell(0),c.colSpan="2",c.className="fshCenter"}return c}())}function l(){const s=(r||(r=o("price")),r)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):c&&""!==c.innerHTML&&a("",c)}}function m(){e(n,"keyup",l)}export default m
//# sourceMappingURL=marketplace-33957322.js.map
