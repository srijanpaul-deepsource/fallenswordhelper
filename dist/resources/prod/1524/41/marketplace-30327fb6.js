import{a as s}from"./addCommas-81c8f148.js"
import{c as t}from"./closestTable-ffd1999e.js"
import{f as n,p as o,z as e,B as a}from"./calfSystem-030d7057.js"
import"./closest-865e9de8.js"
let r,c,f
function i(){return r||(r=e("amount")),r}function u(n){const o=i().value
a(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!f){const s=t(i()).insertRow(2)
f=s.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const s=(c||(c=e("price")),c)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):f&&""!==f.innerHTML&&a("",f)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-30327fb6.js.map
