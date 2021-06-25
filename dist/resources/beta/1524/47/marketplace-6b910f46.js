import{a as s}from"./addCommas-27b35f1c.js"
import{c as t}from"./closestTable-4592ae11.js"
import{f as e,p as n,z as o,B as a}from"./calfSystem-db2edbef.js"
import"./closest-4542e515.js"
let r,c,f
function i(){return r||(r=o("amount")),r}function u(e){const n=i().value
a(`<span class="fshBlue">You are offering to buy <b>${n}</b> FSP for >> <b>${s(e)}</b> (Total: ${s(function(s,t){const e=s*t
return e+Math.ceil(e/200)}(n,e))})</span>`,function(){if(!f){const s=t(i()).insertRow(2)
f=s.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const s=(c||(c=o("price")),c)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):f&&""!==f.innerHTML&&a("",f)}}function m(){e(n,"keyup",l)}export default m
//# sourceMappingURL=marketplace-6b910f46.js.map
