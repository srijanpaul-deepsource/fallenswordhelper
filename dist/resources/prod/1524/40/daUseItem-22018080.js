import{u as t,w as s,W as n,bo as e,bn as u,$ as r}from"./calfSystem-540da563.js"
function o(t){const s=t.match(/(\d+) x (.*)/)
return{amount:s[1],type:e.indexOf(s[2])}}const a=[["You successfully used",()=>({s:!0})],["You successfully extracted",t=>({r:{item:{n:t.match(/'(.*)'/)[1]}},s:!0})],["You failed to extract",()=>({r:{},s:!0})],["You gained",function(t){const s=t.match(/You gained (.*) Fragments/)
if(s){return{r:{frags:s[1].split(", ").map(o)},s:!0}}n("da/useItem","Bad Msg",t)}]]
function i(t){const e=s(t)
if(!e)return n("da/useItem","No Info"),{s:!1}
{const t=a.find((t=>e.startsWith(t[0])))
if(t)return t[1](e)}return{e:{message:e},s:!1}}function c(s){return t({cmd:"profile",subcmd:"useitem",inventory_id:s}).then(i)}function f(t){return u({subcmd:"useitem",inventory_id:t})}function d(t){return r(f,c,t)}export{d}
//# sourceMappingURL=daUseItem-22018080.js.map
