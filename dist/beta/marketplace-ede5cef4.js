import{f as n,p as s,A as t,C as a,ab as e}from"./calfSystem-07c25a1c.js"
import"./closest-10a75b5d.js"
import{c as o}from"./closestTable-09aaef3c.js"
let c,r,f
function i(){return c||(c=t("amount")),c}function u(n){const s=i().value
a(`<span class="fshBlue">You are offering to buy <b>${s}</b> FSP for >> <b>${e(n)}</b> (Total: ${e(function(n,s){const t=n*s
return t+Math.ceil(t/200)}(s,n))})</span>`,function(){if(!f){const n=o(i()).insertRow(2)
f=n.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const n=(r||(r=t("price")),r)
if(n){const s=n.value;-1!==s.search(/^[0-9]+$/)?u(s):f&&""!==f.innerHTML&&a("",f)}}export default function(){n(s,"keyup",l)}
//# sourceMappingURL=marketplace-ede5cef4.js.map
