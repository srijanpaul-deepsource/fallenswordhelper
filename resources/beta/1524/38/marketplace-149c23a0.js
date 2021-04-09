import{a as s}from"./addCommas-cec84c43.js"
import{c as t}from"./closestTable-46dcc06e.js"
import{f as e,p as n,z as o,B as c}from"./calfSystem-71efcdd9.js"
import"./closest-4ebdb6d3.js"
let a,r,f
function i(){return a||(a=o("amount")),a}function u(e){const n=i().value
c(`<span class="fshBlue">You are offering to buy <b>${n}</b> FSP for >> <b>${s(e)}</b> (Total: ${s(function(s,t){const e=s*t
return e+Math.ceil(e/200)}(n,e))})</span>`,function(){if(!f){const s=t(i()).insertRow(2)
f=s.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const s=(r||(r=o("price")),r)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):f&&""!==f.innerHTML&&c("",f)}}function m(){e(n,"keyup",l)}export default m
//# sourceMappingURL=marketplace-149c23a0.js.map
