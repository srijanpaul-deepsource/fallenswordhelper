import{a as s}from"./addCommas-6123a9f9.js"
import{c as t}from"./closestTable-d049606a.js"
import{f as a,p as n,z as o,B as e}from"./calfSystem-540da563.js"
import"./closest-abbeba17.js"
let r,c,f
function i(){return r||(r=o("amount")),r}function u(a){const n=i().value
e(`<span class="fshBlue">You are offering to buy <b>${n}</b> FSP for >> <b>${s(a)}</b> (Total: ${s(function(s,t){const a=s*t
return a+Math.ceil(a/200)}(n,a))})</span>`,function(){if(!f){const s=t(i()).insertRow(2)
f=s.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const s=(c||(c=o("price")),c)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):f&&""!==f.innerHTML&&e("",f)}}function m(){a(n,"keyup",l)}export default m
//# sourceMappingURL=marketplace-ced92042.js.map
