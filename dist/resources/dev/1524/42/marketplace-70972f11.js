import{a as s}from"./addCommas-99f495b9.js"
import{c as t}from"./closestTable-0c49f776.js"
import{f as n,p as o,z as a,B as e}from"./calfSystem-4b6b865d.js"
import"./closest-9a08f4fa.js"
let f,r,c
function i(){return f||(f=a("amount")),f}function u(n){const o=i().value
e(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!c){const s=t(i()).insertRow(2)
c=s.insertCell(0),c.colSpan="2",c.className="fshCenter"}return c}())}function l(){const s=(r||(r=a("price")),r)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):c&&""!==c.innerHTML&&e("",c)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-70972f11.js.map
