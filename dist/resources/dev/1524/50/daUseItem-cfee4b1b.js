import{u as t,w as s,T as e,by as n,bx as o,$ as u}from"./calfSystem-b3667af8.js"
function r(t){const s=t.match(/(\d+) x (.*)/)
return{amount:s[1],type:n.indexOf(s[2])}}const a=[["You successfully used",()=>({s:!0})],["You successfully extracted",t=>({r:{item:{n:t.match(/'(.*)'/)[1]}},s:!0})],["You failed to extract",()=>({r:{},s:!0})],["You gained",function(t){const s=t.match(/You gained (.*) Fragments/)
if(s){return{r:{frags:s[1].split(", ").map(r)},s:!0}}e("da/useItem","Bad Msg",t),console.log("da/useItem","Bad Msg",t)}]]
function c(t){const n=s(t)
if(!n)return e("da/useItem","No Info"),console.log("da/useItem","No Info"),{s:!1}
{const t=a.find((t=>n.startsWith(t[0])))
if(t)return t[1](n)}return{e:{message:n},s:!1}}function i(s){return t({cmd:"profile",subcmd:"useitem",inventory_id:s}).then(c)}function f(t){return o({subcmd:"useitem",inventory_id:t})}function d(t){return u(f,i,t)}export{d}
//# sourceMappingURL=daUseItem-cfee4b1b.js.map
