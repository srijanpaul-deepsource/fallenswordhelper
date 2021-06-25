import{t as n,a as t}from"./calfSystem-bfc1f6c0.js"
const o={}
let c=-1
function s(n,o){t(3,o.func,[n])}function f(t,c){if(console.log("publish",t),o[t])return o[t].forEach(n(s,c)),!0}function r(n,t){o[n]||(o[n]=[]),c+=1
const s=c.toString()
return o[n].push({token:s,func:t}),s}function u(n,t){return o[n]?o[n][0].token:r(n,t)}export{u as a,f as p,r as s}
//# sourceMappingURL=pubsub-163680b4.js.map
