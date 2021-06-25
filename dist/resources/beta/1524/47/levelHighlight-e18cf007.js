import{a as t}from"./asInt-48dcc84c.js"
import{I as n,J as r,K as s}from"./calfSystem-db2edbef.js"
let c
function o(){return c||(c=n(r)||t(s)),c}function e(){const t=o()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function a(){const t=o()
let n=10
return t<200&&(n=5),t+n}const u=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function f(){const t=o()
return t-function(t){return u.find((([n])=>n(t)))[1](t)}(t)}function i(){const t=o()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{e as a,i as b,f as c,a as g}
//# sourceMappingURL=levelHighlight-e18cf007.js.map
