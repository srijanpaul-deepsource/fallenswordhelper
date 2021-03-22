import{I as t,J as n,K as r,L as s}from"./calfSystem-fe0ebf32.js"
import{i as e}from"./intValue-1ce02c09.js"
import{v as o}from"./valueText-2234f468.js"
let c
function a(){return c||(c=t(n)||e(o(r(s)))),c}function f(){const t=a()
let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}function u(){const t=a()
let n=10
return t<200&&(n=5),t+n}const i=[[t=>t>=800,()=>100],[t=>t>=752,t=>t-701],[t=>t>=351,()=>50],[t=>t>=326,t=>t-301],[()=>!0,()=>25]]
function l(){const t=a()
return t-function(t){return i.find((([n])=>n(t)))[1](t)}(t)}function m(){const t=a()
let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}export{f as a,m as b,l as c,u as g}
//# sourceMappingURL=levelHighlight-71d51155.js.map
